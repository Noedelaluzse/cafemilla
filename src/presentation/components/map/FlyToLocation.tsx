'use client'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

interface FlyToLocationProps {
  center: [number, number]
}

/**
 * Must be rendered as a child of <MapContainer>.
 * Flies the map to `center` whenever it changes.
 */
export default function FlyToLocation({ center }: FlyToLocationProps) {
  const map = useMap()

  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.2 })
  }, [center, map])

  return null
}