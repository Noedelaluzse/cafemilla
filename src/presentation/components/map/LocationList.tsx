'use client'


import { locations } from '@/infrastructure'
import LocationCard from './LocationCard'

interface LocationListProps {
  activeId: number
  onSelect: (id: number) => void
}

export default function LocationList({ activeId, onSelect }: LocationListProps) {
  return (
    <div
      className="flex flex-col gap-3"
      style={{ height: '520px', overflowY: 'auto' }}
    >
      {locations.map((loc, i) => (
        <LocationCard
          key={loc.id}
          location={loc}
          isActive={activeId === loc.id}
          index={i}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}