'use client';

import { motion } from 'framer-motion'

export default function CatalogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <div className="section-label mb-4 text-[#ED8B00]">Catálogo</div>
      <div className="flex justify-center mb-8">
        <div className="deco-line" />
      </div>
      <h2
        className="text-4xl lg:text-5xl font-black text-[#F7F0E6]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Nuestros
        <br />
        <span style={{ fontStyle: 'italic', color: '#ED8B00' }}>
          productos
        </span>
      </h2>
    </motion.div>
  )
}