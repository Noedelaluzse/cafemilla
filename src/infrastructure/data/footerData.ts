import type { ReactNode } from 'react'

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  icon: ReactNode
  label: string
  href: string
}

export interface ContactItem {
  icon: ReactNode
  content: ReactNode
}

export const productLinks: FooterLink[] = [
  { label: 'Semilla de Ramón', href: '#ingredientes' },
  { label: 'Beneficios',       href: '#beneficios'   },
  { label: 'Ingredientes',     href: '#ingredientes' },
  { label: 'Encuéntranos',     href: '#encuentranos' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cafemillamx?igsh=ZGw1aWthNHp5c3Jv',
    icon: null, // set in component to avoid serialization issues with JSX
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@cafemilla_?_r=1&_t=ZS-94t5yK3el9k',
    icon: null,
  },
]

export const contactItems = [
  {
    href: 'mailto:cafemillasustituto@gmail.com',
    text: 'cafemillasustituto@gmail.com',
    type: 'email' as const,
  },
  {
    href: null,
    text: '+52 (99) 8136-7313',
    type: 'phone' as const,
  },
]