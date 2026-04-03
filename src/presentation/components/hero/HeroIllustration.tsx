'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function HeroIllustration() {
  const heroImageUrl = process.env.NEXT_PUBLIC_HERO_IMAGE_URL ?? ''
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
      className="relative flex items-center justify-center w-[480px] h-[480px]"
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

      {/* Imagen principal centrada */}
      <div className="absolute inset-0 flex items-end justify-center z-10 float-anim">
        {/* Skeleton */}
        {!loaded && (
          <div className="w-[420px] h-[500px] rounded-3xl animate-pulse bg-[#E0D0BC]/30" />
        )}
        <Image
          src={heroImageUrl}
          alt="CafeMilla"
          width={797}
          height={952}
          className={`object-contain w-[420px] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: 'auto' }}
          priority
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Badge flotante izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute top-12 -left-16 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2 z-20"
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
        className="absolute bottom-8 -right-16 bg-[#4A2C20] rounded-2xl px-4 py-3 flex items-center gap-2 z-20"
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
        className="absolute top-1/2 -right-8 bg-[#ED8B00] rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20"
      >
        <Star size={16} fill="white" className="text-white" />
      </motion.div>

      {/* Badge superior derecho */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute top-4 -right-16 bg-[#ED8B00]/10 border border-[#ED8B00]/30 rounded-2xl px-4 py-3 z-20"
      >
        <div className="text-xs font-semibold text-[#ED8B00]">100% Natural</div>
        <div className="text-[10px] text-[#8B6040]">Sin cafeína</div>
      </motion.div>

    </motion.div>
  )
}