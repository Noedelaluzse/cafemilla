import { productLinks } from "@/infrastructure";

export default function FooterLinks() {
  return (
    <div>
      <div
        className="text-[#F7F0E6] text-sm font-semibold mb-4 tracking-wider uppercase"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Producto
      </div>
      <ul className="space-y-2 text-sm">
        {productLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-[#ED8B00] transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}