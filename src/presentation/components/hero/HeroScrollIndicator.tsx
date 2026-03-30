'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs tracking-[0.2em] uppercase text-[#8B6040]">Descubrir</span>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <ArrowDown size={16} className="text-[#8B6040]" />
      </motion.div>
    </motion.div>
  )
}