'use client'

import { useReveal } from '@/application/useReveal'
import { problems } from '@/infrastructure/data/items'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProblemsCard() {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="bg-[#2E1A10] rounded-sm p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bean-pattern pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#6E3F2A] flex items-center justify-center">
            <X size={14} className="text-[#F7F0E6]" />
          </div>
          <span className="text-sm tracking-[0.2em] uppercase text-[#8B6040] font-medium">
            Con el café tradicional
          </span>
        </div>

        <h3
          className="text-2xl font-black text-[#F7F0E6] mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Los problemas que conoces
        </h3>

        <ul className="space-y-4">
          {problems.map((p, i) => (
            <motion.li
              key={p.text}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-lg">{p.icon}</span>
              <span className="text-[#C9A87E] text-sm group-hover:text-[#F7F0E6] transition-colors">
                {p.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}