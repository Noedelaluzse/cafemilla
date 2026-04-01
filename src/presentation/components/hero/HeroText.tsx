'use client'

import { AnimatePresence, motion } from 'framer-motion'
import LeafIcon from './LeafIcon'
import { stats } from '@/infrastructure/data/heroData'
import { useState } from 'react'

export default function HeroText() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;
  
  return (
    <div>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-[#6E3F2A]/10 border border-[#6E3F2A]/20 rounded-full px-4 py-2 mb-8"
      >
        <LeafIcon size={14} />
        <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#6E3F2A]">
          Semillas mexicanas · 100% natural
        </span>
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-6"
      >
        <span
          className="block text-5xl lg:text-7xl font-black text-[#4A2C20] leading-[0.95]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          CAFE
        </span>
        <span
          className="block text-5xl lg:text-7xl font-black leading-[0.95]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #ED8B00, #EAAA00)' }}
          >
            MILLA
          </span>
        </span>
        <span
          className="block text-2xl lg:text-3xl font-light text-[#5C3D2E] mt-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
        >
          La nueva forma de disfrutar el café
        </span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-lg text-[#5C3D2E] max-w-md mb-10 leading-relaxed"
      >
        Sin cafeína. Natural. Hecho con semillas mexicanas.
        <br />
        <span className="text-[#ED8B00] font-medium">
          No pierdes el café — ganas algo mejor.
        </span>
      </motion.p>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm px-8 py-4 text-center"
        >
          WhatsApp
        </a>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-outline text-sm px-8 py-4 text-center"
        >
          Conocenos
        </button>
      </motion.div>
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden"
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition"
              >
                ✕
              </button>

              <iframe
                src={`${videoUrl}?autoplay=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-8 pt-8 border-t border-[#E0D0BC]"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-2xl font-black text-[#4A2C20]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {stat.num}
            </div>
            <div className="text-xs text-[#8B6040] tracking-wider uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}