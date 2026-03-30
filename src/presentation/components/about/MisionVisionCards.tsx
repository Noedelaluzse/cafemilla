'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'

export function MisionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border border-[#6E3F2A]/50 rounded-sm p-8 relative overflow-hidden group hover:border-[#ED8B00]/60 transition-colors"
      style={{ background: 'linear-gradient(135deg, #3D1F0F, #2E1A10)' }}
    >
      <div className="absolute top-4 right-4">
        <Target size={40} className="text-[#ED8B00] opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>

      <div
        className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
        style={{ color: '#ED8B00' }}
      >
        Misión
      </div>

      <h3
        className="text-2xl font-black text-[#F7F0E6] mb-4"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Producir con propósito
      </h3>

      <p className="text-[#C9A87E] text-sm leading-relaxed">
        Crear sustitutos de café de alta calidad con semillas mexicanas,
        rescatando conocimientos ancestrales y fortaleciendo comunidades
        rurales, ofreciendo una alternativa saludable con identidad mexicana.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <Heart size={14} className="text-[#ED8B00]" />
        <span className="text-xs text-[#8B6040]">Con amor por México</span>
      </div>
    </motion.div>
  )
}

export function VisionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="rounded-sm p-8 relative overflow-hidden group"
      style={{ background: 'linear-gradient(135deg, #6E3F2A, #4A2C20)' }}
    >
      <div className="absolute top-4 right-4">
        <Eye size={40} className="text-[#EAAA00] opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>

      <div
        className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
        style={{ color: '#EAAA00' }}
      >
        Visión
      </div>

      <h3
        className="text-2xl font-black text-[#F7F0E6] mb-4"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Liderar la alternativa
      </h3>

      <p className="text-[#F7F0E6]/75 text-sm leading-relaxed">
        Convertirnos en la marca líder de sustitutos de café en México,
        reconocida por su calidad, sustentabilidad e innovación. Llevar
        el sabor y la sabiduría mexicana a mesas en todo el mundo.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-[#EAAA00] text-xs">🌍</span>
        <span className="text-xs text-[#F7F0E6]/50">Del campo mexicano al mundo</span>
      </div>
    </motion.div>
  )
}