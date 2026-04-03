import Image from 'next/image'
import { socialLinks } from '@/infrastructure'


const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  TikTok: <TikTokIcon />,
}

export default function FooterBrand() {
  return (
    <div className="md:col-span-2">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full overflow-hidden relative flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dqvcmjkue/image/upload/v1774138226/Valentina_-_Gui%CC%81a_para_etiqueta_fpwsmp.png"
            alt="Logo Cafemilla"
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <span
          className="font-black text-xl tracking-[0.15em] text-[#F7F0E6]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          CAFEMILLA
        </span>
      </div>

      <p className="text-sm leading-relaxed max-w-xs mb-6">
        La alternativa natural al café, elaborada con semillas mexicanas.
        Sin cafeína, con todo el sabor.
      </p>

      {/* Redes sociales */}
      <div className="flex gap-3">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-full border border-[#6E3F2A] flex items-center justify-center text-[#C9A87E] hover:border-[#ED8B00] hover:text-[#ED8B00] transition-colors"
          >
            {socialIcons[s.label]}
          </a>
        ))}
      </div>
    </div>
  )
}