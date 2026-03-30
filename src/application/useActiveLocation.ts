import { useState, useCallback } from 'react'
import { locations, CafeLocation } from '../infrastructure'

export function useActiveLocation() {
  const [activeId, setActiveId] = useState<number>(1)

  // id=1 always exists in the array, so the non-null assertion is safe here
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const active = locations.find((l) => l.id === activeId)!

  const handleSelect = useCallback((id: number) => {
    setActiveId(id)
  }, [])

  return { activeId, active, handleSelect }
}

export type { CafeLocation }