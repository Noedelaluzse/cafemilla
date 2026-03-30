'use client'

import { moodItems } from '@/infrastructure'
import { motion } from 'framer-motion'

export default function MoodBar() {
  return (
    <div className="mt-20 text-center">
      <p className="text-[#8B6040] text-sm mb-6 tracking-wide">
        El mismo ritual. Cero consecuencias.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {moodItems.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="inline-flex items-center gap-2 text-sm text-[#4A2C20] bg-white border border-[#E0D0BC] rounded-full px-5 py-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#ED8B00] inline-block" />
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  )
}