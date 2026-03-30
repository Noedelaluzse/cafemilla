'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import { useScrolled } from '@/application/useScrolled'



export default function Navbar() {
  const scrolled = useScrolled(50)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F7F0E6]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(110,63,42,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLogo />

          <NavLinks />

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-outline text-xs py-2.5 px-5">
              Comprar
            </button>
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-2 text-[#4A2C20]"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}