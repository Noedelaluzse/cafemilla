'use client'

import { Sense, senses } from "@/infrastructure"



interface SenseTabsProps {
  activeIndex: number
  onSelect: (index: number) => void
}

export default function SenseTabs({ activeIndex, onSelect }: SenseTabsProps) {
  return (
    <div className="flex justify-center gap-3 mb-12">
      {senses.map((s: Sense, i: number) => (
        <button
          key={s.id}
          onClick={() => onSelect(i)}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            background: activeIndex === i ? s.color : 'transparent',
            color:      activeIndex === i ? '#F7F0E6' : '#5C3D2E',
            border:     `1.5px solid ${activeIndex === i ? s.color : '#E0D0BC'}`,
          }}
        >
          <span>{s.icon}</span>
          {s.label}
        </button>
      ))}
    </div>
  )
}