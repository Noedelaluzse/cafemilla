'use client'


import { useReveal } from '@/application/useReveal'
import { pillars } from '@/infrastructure/data/pillars'
import { motion } from 'framer-motion'

export default function PillarGrid() {
  const [ref, inView] = useReveal()

  return (
    <motion.div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center p-6 border border-[#6E3F2A]/30 rounded-sm hover:border-[#EAAA00]/40 transition-colors group"
        >
          <div className="text-3xl mb-4">{p.icon}</div>
          <div
            className="font-bold text-sm text-[#F7F0E6] mb-2 group-hover:text-[#EAAA00] transition-colors"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {p.title}
          </div>
          <div className="text-xs text-[#8B6040] leading-relaxed">
            {p.desc}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}