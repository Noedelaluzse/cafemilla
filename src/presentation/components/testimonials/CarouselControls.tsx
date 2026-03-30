'use client'

import { testimonials } from '@/infrastructure';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  current: number
  onSelect: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

export default function CarouselControls({
  current,
  onSelect,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between">

      {/* Dots */}
      <div className="flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`Ir al testimonio ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === current ? '24px' : '8px',
              height:     '8px',
              background: i === current ? '#ED8B00' : '#E0D0BC',
            }}
          />
        ))}
      </div>

      {/* Flechas */}
      <div className="flex gap-3">
        <button
          onClick={onPrev}
          aria-label="Testimonio anterior"
          className="w-10 h-10 rounded-full border border-[#E0D0BC] flex items-center justify-center text-[#5C3D2E] hover:border-[#ED8B00] hover:text-[#ED8B00] transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={onNext}
          aria-label="Siguiente testimonio"
          className="w-10 h-10 rounded-full border border-[#E0D0BC] flex items-center justify-center text-[#5C3D2E] hover:border-[#ED8B00] hover:text-[#ED8B00] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  )
}