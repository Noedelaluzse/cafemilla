'use client'

import { links } from '@/infrastructure'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 inset-x-0 z-40 bg-[#F7F0E6]/98 backdrop-blur-md border-b border-[#E0D0BC] md:hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-base font-medium text-[#4A2C20] hover:text-[#ED8B00] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-primary w-full mt-2 text-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}