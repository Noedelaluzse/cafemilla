'use client'

import { useReveal } from '@/application/useReveal'
import { motion } from 'framer-motion'

export default function TestimonialsHeader() {
  const [ref, inView] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <div className="section-label mb-4">Testimonios reales</div>
      <div className="flex justify-center mb-8">
        <div className="deco-line" />
      </div>
      <h2
        className="text-4xl lg:text-5xl font-black text-[#4A2C20]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Lo que dice
        <br />
        <span style={{ fontStyle: 'italic', color: '#ED8B00' }}>
          nuestra comunidad
        </span>
      </h2>
    </motion.div>
  )
}