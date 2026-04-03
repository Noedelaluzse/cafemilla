import Image from 'next/image'
import Link from 'next/link'

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center group-hover:opacity-80 transition-opacity duration-300 relative">
        <Image
          src="https://res.cloudinary.com/dqvcmjkue/image/upload/v1774138226/Valentina_-_Gui%CC%81a_para_etiqueta_fpwsmp.png"
          alt="Logo Cafemilla"
          fill
          className="object-cover"
          sizes="36px"
          priority
        />
      </div>
      <span
        className="font-black text-xl tracking-[0.15em] text-[#4A2C20]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        CAFEMILLA
      </span>
    </Link>
  )
}