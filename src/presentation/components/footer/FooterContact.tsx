
import { contactItems } from '@/infrastructure'
import { Mail, Phone } from 'lucide-react'

const icons = {
  email: <Mail size={14} className="text-[#ED8B00]" />,
  phone: <Phone size={14} className="text-[#ED8B00]" />,
}

export default function FooterContact() {
  return (
    <div>
      <div
        className="text-[#F7F0E6] text-sm font-semibold mb-4 tracking-wider uppercase"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Contacto
      </div>
      <ul className="space-y-3 text-sm">
        {contactItems.map((item) => (
          <li key={item.text} className="flex items-center gap-2">
            {icons[item.type]}
            {item.href ? (
              <a href={item.href} className="hover:text-[#ED8B00] transition-colors">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}