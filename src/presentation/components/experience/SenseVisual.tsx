'use client'

import { Sense, wordPositions } from '@/infrastructure'
import { motion } from 'framer-motion'

interface SenseVisualProps {
  sense: Sense
}

export default function SenseVisual({ sense }: SenseVisualProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-64 h-64">

        {/* Anillos concéntricos */}
        <div
          className="absolute inset-0 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: `${sense.color}30`, background: `${sense.color}08` }}
        >
          <div
            className="w-48 h-48 rounded-full border flex items-center justify-center"
            style={{ borderColor: `${sense.color}50`, background: `${sense.color}12` }}
          >
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{ background: `${sense.color}20` }}
            >
              <span className="text-6xl float-anim">{sense.emoji}</span>
            </div>
          </div>
        </div>

        {/* Palabras flotantes en los 4 ejes */}
        {sense.words.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="absolute px-3 py-1.5 rounded-full text-xs font-medium text-white whitespace-nowrap"
            style={{
              background: sense.color,
              top:        wordPositions[i].top,
              left:       wordPositions[i].left,
              transform:  wordPositions[i].transform,
            }}
          >
            {word}
          </motion.div>
        ))}

      </div>
    </div>
  )
}