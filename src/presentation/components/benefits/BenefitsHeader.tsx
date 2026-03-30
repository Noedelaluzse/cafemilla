'use client'

import { useReveal } from '@/application/useReveal'
import { motion } from 'framer-motion'

export default function BenefitsHeader() {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <div className="section-label mb-4">¿Por qué cambiar?</div>
      <div className="flex justify-center mb-8">
        <div className="deco-line" />
      </div>
      <h2
        className="text-4xl lg:text-5xl font-black text-[#4A2C20]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        El café te da energía.
        <br />
        <span style={{ fontStyle: 'italic', color: '#6E3F2A' }}>
          CAFEMILLA te da bienestar.
        </span>
      </h2>
    </motion.div>
  )
}