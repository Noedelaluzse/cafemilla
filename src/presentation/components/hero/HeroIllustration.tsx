'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import CoffeeCup from './CoffeeCup'

export default function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-72 h-72 rounded-full pulse-ring"
          style={{ background: 'radial-gradient(circle, #ED8B0020, transparent 70%)' }}
        />
      </div>

      {/* Círculos decorativos */}
      <div
        className="absolute w-80 h-80 rounded-full border border-[#6E3F2A]/10"
        style={{ borderStyle: 'dashed' }}
      />
      <div className="absolute w-96 h-96 rounded-full border border-[#EAAA00]/10" />

      {/* Taza */}
      <div className="relative w-72 h-80 float-anim">
        <CoffeeCup />
      </div>

      {/* Badge flotante izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute top-12 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2"
      >
        <span className="text-xl">🌿</span>
        <div>
          <div className="text-xs font-semibold text-[#4A2C20]">Semilla de Ramón</div>
          <div className="text-[10px] text-[#8B6040]">Origen mexicano</div>
        </div>
      </motion.div>

      {/* Badge flotante derecho */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-16 -right-4 bg-[#4A2C20] rounded-2xl px-4 py-3 flex items-center gap-2"
      >
        <span className="text-xl">☕</span>
        <div>
          <div className="text-xs font-semibold text-[#F7F0E6]">Sin acidez</div>
          <div className="text-[10px] text-[#EAAA00]">Cuida tu salud</div>
        </div>
      </motion.div>

      {/* Star badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-1/2 -right-8 bg-[#ED8B00] rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <Star size={16} fill="white" className="text-white" />
      </motion.div>
    </motion.div>
  )
}