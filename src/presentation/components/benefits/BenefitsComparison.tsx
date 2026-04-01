'use client'

import { useReveal } from '@/application/useReveal'
import { problems, solutions } from '@/infrastructure/data/items'
import { motion } from 'framer-motion'

export default function BenefitsComparison() {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      {/* Encabezados de columna */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
        <div className="flex items-center justify-center gap-2 bg-[#2E1A10] rounded-sm px-5 py-3">
          <span className="text-lg">☕</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">
            Café tradicional
          </span>
        </div>

        <div className="w-8" />

        <div className="flex items-center justify-center gap-2 bg-[#ED8B00] rounded-sm px-5 py-3">
          <span className="text-lg">🌿</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">
            CAFEMILLA
          </span>
        </div>
      </div>

      {/* Filas de comparación */}
      {problems.map((problem, i) => (
        <motion.div
          key={problem.text}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-4"
        >
          {/* Problema */}
          <div className="flex items-center justify-end gap-3 bg-[#2E1A10] rounded-sm px-5 py-4">
            <span className="text-white text-sm text-right">{problem.text}</span>
            <span className="text-xl flex-shrink-0">{problem.icon}</span>
          </div>

          {/* Divisor central */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-4 bg-[#E0D0BC]" />
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #ED8B00, #EAAA00)' }}
            >
              vs
            </div>
            <div className="w-px h-4 bg-[#E0D0BC]" />
          </div>

          {/* Solución */}
          <div className="flex items-center gap-3 bg-[#FFF8EE] border border-[#ED8B00]/30 rounded-sm px-5 py-4">
            <span className="text-xl flex-shrink-0">{solutions[i].icon}</span>
            <span className="text-[#4A2C20] text-sm font-medium">{solutions[i].text}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}