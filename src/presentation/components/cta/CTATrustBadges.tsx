const badges = [
  { icon: '🚚', text: 'Envío a todo México' },
  { icon: '✅', text: 'Garantía de satisfacción' },
  { icon: '🌿', text: 'Ingredientes certificados' },
  { icon: '🇲🇽', text: 'Hecho en México' },
]

export default function CTATrustBadges() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
      {badges.map((b) => (
        <div key={b.text} className="flex items-center gap-2 text-[#F7F0E6]/60 text-xs">
          <span className="text-base">{b.icon}</span>
          {b.text}
        </div>
      ))}
    </div>
  )
}