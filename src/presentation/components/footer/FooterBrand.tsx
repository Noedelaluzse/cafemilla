import Image from 'next/image'
// import { Instagram } from 'lucide-react'
import { socialLinks } from '@/infrastructure'


const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <TikTokIcon />,
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