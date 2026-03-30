'use client'

import { benefits } from '@/infrastructure'
import { motion } from 'framer-motion'

interface BenefitGridProps {
  inView: boolean
}

export default function BenefitGrid({ inView }: BenefitGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
      {benefits.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          className="bg-[#2E1A10] border border-[#6E3F2A]/50 rounded-sm p-4 hover:border-[#ED8B00]/50 transition-colors group"
        >
          <div
            className="text-xs font-bold mb-1 group-hover:text-[#ED8B00] transition-colors"
            style={{ color: '#EAAA00' }}
          >
            {b.label}
          </div>
          <div className="text-[10px] text-[#8B6040] leading-snug">
            {b.value}
          </div>
        </motion.div>
      ))}
    </div>
  )
}