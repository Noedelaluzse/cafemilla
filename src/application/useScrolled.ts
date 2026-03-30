'use client'

import { useState, useEffect } from 'react'

/**
 * Returns `true` once the page has scrolled past `threshold` pixels.
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)

    // Set initial state in case page loads already scrolled
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}