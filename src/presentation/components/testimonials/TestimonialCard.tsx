'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Stars from './Stars'
import { Testimonial } from '@/infrastructure'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: Readonly<TestimonialCardProps>) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F0E6] rounded-sm p-8 md:p-12 relative overflow-hidden mb-8"
    >
      {/* Comilla decorativa */}
      <div
        className="absolute top-6 right-8 text-9xl font-black leading-none opacity-10 pointer-events-none select-none"
        style={{ fontFamily: 'Playfair Display, serif', color: '#6E3F2A' }}
      >
        &ldquo;
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        {/* Perfil */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden relative mb-3 ring-[3px] ring-[#6E3F2A]">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="font-semibold text-[#4A2C20] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[#8B6040] mt-1">{testimonial.role}</div>
          <div className="mt-3">
            <Stars count={testimonial.rating} />
          </div>
          <div
            className="mt-3 text-[10px] px-3 py-1 rounded-full font-medium tracking-wider uppercase text-white"
            style={{ background: '#ED8B00' }}
          >
            {testimonial.tag}
          </div>
        </div>

        {/* Quote */}
        <div className="md:col-span-3 flex items-center">
          <p
            className="text-[#4A2C20] leading-relaxed relative z-10"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.35rem',
            }}
          >
            $&ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

      </div>
    </motion.div>
  )
}