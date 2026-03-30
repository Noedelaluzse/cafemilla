'use client'

import { useReveal } from '@/application/useReveal'
import { solutions } from '@/infrastructure/data/items'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function SolutionsCard() {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="rounded-sm p-8 relative overflow-hidden border-2 border-[#ED8B00]"
      style={{ background: 'linear-gradient(135deg, #FFF8EE, #F7F0E6)' }}
    >
      {/* Barra dorada superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, #ED8B00, #EAAA00)' }}
      />

      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #ED8B00, #EAAA00)' }}
        >
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <span className="text-sm tracking-[0.2em] uppercase text-[#ED8B00] font-medium">
          Con CAFEMILLA
        </span>
      </div>

      <h3
        className="text-2xl font-black text-[#4A2C20] mb-6"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        La diferencia que sientes
      </h3>

      <ul className="space-y-4">
        {solutions.map((s, i) => (
          <motion.li
            key={s.text}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg">{s.icon}</span>
            <span className="text-[#5C3D2E] text-sm font-medium">{s.text}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-8 pt-6 border-t border-[#E0D0BC]">
        <button className="btn-primary w-full py-3">
          <span className="flex items-center justify-center gap-2">
            Quiero probar CAFEMILLA
            <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </motion.div>
  )
}