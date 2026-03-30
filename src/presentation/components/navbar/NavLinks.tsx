import { links } from "@/infrastructure"

interface NavLinksProps {
  onLinkClick?: () => void
}

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="text-sm font-medium tracking-wide text-[#5C3D2E] hover:text-[#ED8B00] transition-colors relative group"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ED8B00] group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  )
}