'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CTABadge from './CTABadge'
import CTATrustBadges from './CTATrustBadges'


export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #6E3F2A, #4A2C20, #2E1A10)' }}
    >
      {/* Blobs decorativos */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#ED8B00]/10 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#EAAA00]/8 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bean-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <CTABadge />

          <h2
            className="text-5xl lg:text-7xl font-black text-[#F7F0E6] mb-6 leading-[0.95]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Cambia tu
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ED8B00, #EAAA00)' }}
            >
              forma de tomar café.
            </span>
          </h2>

          <p
            className="text-xl text-[#F7F0E6]/70 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
          >
            Una taza de CAFEMILLA al día es el primer paso hacia una versión
            más saludable y consciente de ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold tracking-wider uppercase rounded-sm text-[#4A2C20]"
              style={{ background: 'linear-gradient(135deg, #EAAA00, #ED8B00)' }}
            >
              Comprar CAFEMILLA
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <CTATrustBadges />
        </motion.div>
      </div>
    </section>
  )
}