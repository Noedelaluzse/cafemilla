'use client'


import { useReveal } from '@/application/useReveal'
import { motion } from 'framer-motion'

export default function ExperienceHeader() {
  const [ref, inView] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <div className="section-label mb-4">La experiencia sensorial</div>
      <div className="flex justify-center mb-8">
        <div className="deco-line" />
      </div>
      <h2
        className="text-4xl lg:text-5xl font-black text-[#4A2C20] max-w-2xl mx-auto leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Cierra los ojos.
        <br />
        <span style={{ fontStyle: 'italic', color: '#ED8B00' }}>
          Ya estás en casa.
        </span>
      </h2>
    </motion.div>
  )
}