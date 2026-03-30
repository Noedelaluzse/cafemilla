'use client'

import { testimonials } from "@/infrastructure"

interface TestimonialsMiniGridProps {
  current: number
  onSelect: (index: number) => void
}

export default function TestimonialsMiniGrid({ current, onSelect }: TestimonialsMiniGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-12">
      {testimonials.map((t, i) => (
        <button
          key={t.name}
          onClick={() => onSelect(i)}
          className="p-4 rounded-sm border text-left transition-all duration-300"
          style={{
            background:  i === current ? '#6E3F2A' : '#F7F0E6',
            borderColor: i === current ? '#6E3F2A' : '#E0D0BC',
          }}
        >
          <div className="text-2xl mb-2">{t.avatar}</div>
          <div
            className="text-xs font-medium truncate"
            style={{ color: i === current ? '#F7F0E6' : '#4A2C20' }}
          >
            {t.name}
          </div>
          <div
            className="text-[10px] mt-1"
            style={{ color: i === current ? '#EAAA00' : '#8B6040' }}
          >
            {t.tag}
          </div>
        </button>
      ))}
    </div>
  )
}