'use client'


import { useReveal } from '@/application/useReveal'
import { motion } from 'framer-motion'

export default function AboutHeader() {
  const [ref, inView] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <div className="section-label mb-4" style={{ color: '#EAAA00' }}>
        Quiénes somos
      </div>
      <div className="flex justify-center mb-8">
        <div className="deco-line" />
      </div>
      <h2
        className="text-4xl lg:text-5xl font-black text-[#F7F0E6] max-w-2xl mx-auto leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Más que una bebida.
        <br />
        <span style={{ fontStyle: 'italic', color: '#EAAA00' }}>
          Un movimiento.
        </span>
      </h2>
    </motion.div>
  )
}