'use client'

import { useReveal } from '@/application/useReveal'
import { Feature } from '@/infrastructure'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface FeatureCardProps {
  feature: Feature
  index: number
}

export default function FeatureCard({ feature, index }: Readonly<FeatureCardProps>) {
  const [ref, inView] = useReveal('0px 0px -80px 0px')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      style={{ height: '260px', perspective: '1000px' }}
    >
      {/* Contenedor que gira */}
      <div
        className="group-hover:[transform:rotateY(180deg)]"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease',
        }}
      >

        {/* ── Frente: imagen ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid #E0D0BC',
          }}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          {/* Overlay con título */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(to top, rgba(46,26,16,0.4), transparent)',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{feature.icon}</span>
              <span
                className="text-white font-bold text-sm"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {feature.title}
              </span>
            </div>
          </div>
        </div>

        {/* ── Reverso: texto ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '2px',
            border: `1px solid ${feature.color}`,
            background: 'linear-gradient(135deg, #F7F0E6, #EDE3D5)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Acento de color superior */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: `linear-gradient(90deg, ${feature.color}, transparent)`,
            }}
          />

          <div className="text-3xl mb-4">{feature.icon}</div>

          <h3
            className="font-bold text-[#4A2C20] mb-3"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}
          >
            {feature.title}
          </h3>

          <p className="text-sm text-[#6B4C3B] leading-relaxed">
            {feature.desc}
          </p>

          {/* Punto decorativo */}
          <div
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full opacity-20"
            style={{ background: feature.color }}
          />
        </div>

      </div>
    </motion.div>
  )
}