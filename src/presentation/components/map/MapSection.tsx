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
      className="flex items-center justify-center bg-[#EDE4D5] text-[#8B6040] text-sm"
      style={{ height: '520px' }}
    >
      Cargando mapa…
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