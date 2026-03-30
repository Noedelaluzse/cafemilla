'use client'

import { useReveal } from '@/application/useReveal'
import { motion } from 'framer-motion'

export default function ValorContent() {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="section-label mb-4">¿Qué es CAFEMILLA?</div>
      <div className="deco-line mb-8" />

      <h2
        className="text-4xl lg:text-5xl font-black text-[#4A2C20] mb-6 leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        No es café.
        <br />
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg, #ED8B00, #EAAA00)' }}
        >
          Es algo mejor.
        </span>
      </h2>

      <p className="text-[#5C3D2E] text-lg leading-relaxed mb-6">
        CAFEMILLA es una bebida funcional elaborada con semillas mexicanas
        tostadas, especialmente la{' '}
        <strong className="text-[#4A2C20]">semilla de Ramón</strong>. Una
        planta que ha nutrido a las culturas mesoamericanas por siglos.
      </p>

      <p className="text-[#6B4C3B] leading-relaxed mb-10">
        El resultado es una bebida con el aroma, el color y el ritual del
        café tradicional, pero con todos sus beneficios y ninguno de sus
        efectos negativos.
      </p>

      {/* Card destacada */}
      <div className="flex items-center gap-6 p-6 bg-[#F7F0E6] rounded-sm border border-[#E0D0BC]">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #6E3F2A, #4A2C20)' }}
        >
          <span className="text-2xl">🌱</span>
        </div>
        <div>
          <div className="font-semibold text-[#4A2C20] text-sm mb-1">
            Sustentable desde la raíz
          </div>
          <div className="text-xs text-[#8B6040] leading-relaxed">
            La semilla de Ramón crece sin necesidad de deforestar.
            Cada taza de CAFEMILLA es un acto de amor por México.
          </div>
        </div>
      </div>
    </motion.div>
  )
}