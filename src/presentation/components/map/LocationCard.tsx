'use client'

import { CafeLocation } from '@/infrastructure'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

interface LocationCardProps {
  location: CafeLocation
  isActive: boolean
  index: number
  onSelect: (id: number) => void
}

export default function LocationCard({
  location,
  isActive,
  index,
  onSelect,
}: LocationCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(location.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="text-left p-5 rounded-sm border transition-all duration-300 w-full flex-shrink-0"
      style={{
        background: isActive ? '#4A2C20' : 'white',
        borderColor: isActive ? '#ED8B00' : '#E0D0BC',
      }}
    >
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
          style={{
            background: isActive ? '#ED8B00' : '#F7F0E6',
            color: isActive ? 'white' : '#6E3F2A',
          }}
        >
          {location.id}
        </div>

        <div className="flex-1 min-w-0">
          <div
            className="font-bold text-sm mb-1"
            style={{
              fontFamily: 'Playfair Display, serif',
              color: isActive ? '#F7F0E6' : '#4A2C20',
            }}
          >
            {location.name}
          </div>

          <div className="flex items-center gap-1.5 mb-1">
            <MapPin
              size={11}
              style={{ color: isActive ? '#EAAA00' : '#ED8B00', flexShrink: 0 }}
            />
            <span
              className="text-xs truncate"
              style={{ color: isActive ? '#C9A87E' : '#8B6040' }}
            >
              {location.address}
            </span>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-1 mt-2 overflow-hidden"
              >
                <div className="flex items-center gap-1.5">
                  <Clock size={11} className="text-[#EAAA00] flex-shrink-0" />
                  <span className="text-xs text-[#C9A87E]">{location.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone size={11} className="text-[#EAAA00] flex-shrink-0" />
                  <span className="text-xs text-[#C9A87E]">{location.phone}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="text-lg flex-shrink-0"
          style={{ color: isActive ? '#ED8B00' : '#E0D0BC' }}
        >
          →
        </div>
      </div>
    </motion.button>
  )
}