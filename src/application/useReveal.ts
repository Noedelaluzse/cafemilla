'use client'

import { useRef } from 'react'
import { useInView, type UseInViewOptions } from 'framer-motion'

type MarginType = UseInViewOptions['margin']

/**
 * Returns a [ref, inView] tuple.
 * Triggers once when the element enters the viewport.
 */
export function useReveal(margin: MarginType = '0px 0px -60px 0px') {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin })
  return [ref, inView] as const
}