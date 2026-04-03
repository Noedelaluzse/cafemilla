'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import LocationList from './LocationList'
import { useActiveLocation } from '@/application/useActiveLocation'

/**
 * Leaflet requires DOM access — load it only on the client.
 * `ssr: false` prevents any server-side rendering of the map.
 */
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div
      className="relative bg-[#EDE4D5] overflow-hidden"
      style={{ height: '520px' }}
    >
      {/* Skeleton animado */}
      <div className="absolute inset-0 animate-pulse bg-[#E0D0BC]" />

      {/* Líneas simulando calles */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-20">
        <div className="w-3/4 h-1 bg-[#8B6040] rounded" />
        <div className="w-1/2 h-1 bg-[#8B6040] rounded" />
        <div className="w-2/3 h-1 bg-[#8B6040] rounded" />
      </div>

      {/* Indicador central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#ED8B00]/30 animate-pulse flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#ED8B00]/60" />
        </div>
        <span className="text-[#8B6040] text-sm font-medium">Cargando mapa…</span>
      </div>
    </div>
  ),
})

export default function MapSection() {
  const { activeId, active, handleSelect } = useActiveLocation()

  return (
    <section id="encuentranos" className="py-28 bg-[#F7F0E6] relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bean-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">Encuéntranos</div>
          <div className="flex justify-center mb-8">
            <div className="deco-line" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-[#4A2C20]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Estamos en los
            <br />
            <span style={{ fontStyle: 'italic', color: '#ED8B00' }}>
              siguientes bazares
            </span>
          </h2>
          <p className="text-base text-[#6B4C3B] mt-4 max-w-md mx-auto">
            Verifica los días que estaremos cerca de ti
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Map */}
          <div
            style={{
              height: '520px',
              border: '1px solid rgba(110,63,42,0.4)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <LeafletMap
              activeId={activeId}
              active={active}
              onSelect={handleSelect}
            />
          </div>

          {/* Sidebar list */}
          <LocationList activeId={activeId} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  )
}