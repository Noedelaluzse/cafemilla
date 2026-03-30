'use client'

import { useState, useCallback } from 'react'
import TestimonialsHeader from './TestimonialsHeader'
import TestimonialCard from './TestimonialCard'
import CarouselControls from './CarouselControls'
import TestimonialsMiniGrid from './TestimonialsMiniGrid'
import { testimonials } from '@/infrastructure'

const LAST = testimonials.length - 1

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? LAST : c - 1)),
    []
  )
  const next = useCallback(
    () => setCurrent((c) => (c === LAST ? 0 : c + 1)),
    []
  )

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <TestimonialsHeader />

        <div className="max-w-4xl mx-auto">
          <TestimonialCard testimonial={testimonials[current]} index={current} />
          <CarouselControls
            current={current}
            onSelect={setCurrent}
            onPrev={prev}
            onNext={next}
          />
        </div>

        <TestimonialsMiniGrid current={current} onSelect={setCurrent} />
      </div>
    </section>
  )
}