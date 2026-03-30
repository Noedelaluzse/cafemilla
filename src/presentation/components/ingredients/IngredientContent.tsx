'use client'

import { motion } from 'framer-motion'
import BenefitGrid from './BenefitGrid'
import SustainabilityBadge from './SustainabilityBadge'
import { useReveal } from '@/application/useReveal'

export default function IngredientContent() {
  const [ref, inView] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="section-label mb-4" style={{ color: '#EAAA00' }}>
        Ingrediente estrella
      </div>
      <div className="deco-line mb-8" />

      <h2
        className="text-4xl lg:text-5xl font-black text-[#F7F0E6] mb-6 leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        La semilla
        <br />
        <span style={{ color: '#EAAA00', fontStyle: 'italic' }}>
          que lo cambia todo
        </span>
      </h2>

      <p className="text-[#C9A87E] leading-relaxed mb-4">
        La <strong className="text-[#F7F0E6]">semilla de Ramón</strong>{' '}
        (<em>Brosimum alicastrum</em>) es un fruto del árbol de la selva
        maya. Los mayas la llamaban el &quot;maíz del árbol&quot; por su valor
        nutritivo excepcional.
      </p>

      <p className="text-[#C9A87E] leading-relaxed mb-10">
        Al tostarla y molerla, libera aromas cálidos, terrosos y
        caramelos que recuerdan perfectamente al café — pero sin ninguno
        de sus efectos estimulantes.
      </p>

      <BenefitGrid inView={inView} />

      <SustainabilityBadge />
    </motion.div>
  )
}