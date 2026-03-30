import { Sense } from "@/src/infrastructure"

interface SenseContentProps {
  sense: Sense
}

export default function SenseContent({ sense }: SenseContentProps) {
  return (
    <div>
      <div
        className="text-sm tracking-[0.2em] uppercase font-medium mb-3"
        style={{ color: sense.color }}
      >
        {sense.icon} {sense.label}
      </div>

      <h3
        className="text-3xl font-black text-[#4A2C20] mb-5"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {sense.title}
      </h3>

      <p className="text-[#5C3D2E] text-lg leading-relaxed">
        {sense.desc}
      </p>

      {/* Quote */}
      <div
        className="mt-8 p-5 rounded-sm border-l-4 bg-white"
        style={{ borderLeftColor: sense.color }}
      >
        <p
          className="text-[#4A2C20] leading-relaxed"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.15rem',
          }}
        >
          &quot;No perdí el café. Gané algo que me hace sentir mejor.&quot;
        </p>
        <p className="text-xs text-[#8B6040] mt-2 font-medium">
          — Comunidad CAFEMILLA
        </p>
      </div>
    </div>
  )
}