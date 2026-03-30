'use client'

import { motion } from 'framer-motion'
import RamonSeed from './RamonSeed'
import { useReveal } from '@/application/useReveal'

export default function IngredientVisual() {
  const [ref, inView] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9 }}
      className="flex items-center justify-center"
    >
      <div className="relative">
        {/* Glow central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-64 h-64 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, #ED8B0030, transparent 70%)' }}
          />
        </div>

        {/* Anillos decorativos */}
        <div className="absolute w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EAAA00]/20" />
        <div
          className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ED8B00]/10"
          style={{ borderStyle: 'dashed' }}
        />

        {/* Ilustración flotante */}
        <div className="relative w-56 h-64 float-anim">
          <RamonSeed />
        </div>

        {/* Label flotante inferior */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#ED8B00] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase whitespace-nowrap">
          Semilla de Ramón
        </div>
      </div>
    </motion.div>
  )
}