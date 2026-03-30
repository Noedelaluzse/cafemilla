'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { patchLeafletIcons, createCustomIcon } from './leafletIcons'
import FlyToLocation from './FlyToLocation'
import { CafeLocation, locations } from '@/infrastructure'

interface LeafletMapProps {
  activeId: number
  active: CafeLocation
  onSelect: (id: number) => void
}

/**
 * Pure Leaflet map. Loaded client-side only via dynamic() in MapSection.
 */
export default function LeafletMap({ activeId, active, onSelect }: LeafletMapProps) {
  useEffect(() => {
    patchLeafletIcons()
  }, [])

  return (
    <MapContainer
      center={[21.1619, -86.8515]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FlyToLocation center={active.center} />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.center}
          icon={createCustomIcon(activeId === loc.id)}
          eventHandlers={{ click: () => onSelect(loc.id) }}
        >
          <Popup>
            <div style={{ fontFamily: 'DM Sans, sans-serif', minWidth: '160px' }}>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 'bold',
                  color: '#4A2C20',
                  marginBottom: '6px',
                  fontSize: '14px',
                }}
              >
                {loc.name}
              </div>
              <div style={{ fontSize: '12px', color: '#6B4C3B', marginBottom: '4px' }}>
                📍 {loc.address}
              </div>
              <div style={{ fontSize: '12px', color: '#6B4C3B', marginBottom: '4px' }}>
                🕐 {loc.hours}
              </div>
              <div style={{ fontSize: '12px', color: '#6B4C3B' }}>
                📞 {loc.phone}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}