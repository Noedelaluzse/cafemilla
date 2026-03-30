export default function RamonSeed() {
  return (
    <svg
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Hojas */}
      <path
        d="M150 250 Q80 200 60 120 Q50 60 120 40 Q160 30 180 80 Q150 120 150 250Z"
        fill="url(#leaf1)" stroke="#4A2C20" strokeWidth="1.5"
      />
      <path
        d="M150 250 Q220 200 240 120 Q250 60 180 40 Q150 30 130 80 Q160 120 150 250Z"
        fill="url(#leaf2)" stroke="#4A2C20" strokeWidth="1.5" opacity="0.85"
      />
      <path
        d="M150 250 Q100 180 90 100 Q100 50 150 60 Q150 140 150 250Z"
        fill="url(#leaf3)" stroke="#5C3D2E" strokeWidth="1" opacity="0.6"
      />

      {/* Venas */}
      <path d="M150 240 L120 100" stroke="#4A2C20" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M150 240 L180 100" stroke="#4A2C20" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M150 240 L150 70"  stroke="#4A2C20" strokeWidth="1"   strokeLinecap="round" opacity="0.4"/>

      {/* Tallo */}
      <path d="M150 260 Q145 285 148 310" stroke="#6E3F2A" strokeWidth="4" strokeLinecap="round" fill="none"/>

      {/* Semilla izquierda */}
      <ellipse cx="100" cy="175" rx="18" ry="14" fill="url(#seedGrad)" stroke="#4A2C20" strokeWidth="1" transform="rotate(-15 100 175)"/>
      <path d="M100 163 Q100 175 100 187" stroke="#6E3F2A" strokeWidth="1" strokeLinecap="round" opacity="0.6" transform="rotate(-15 100 175)"/>

      {/* Semilla derecha */}
      <ellipse cx="200" cy="175" rx="18" ry="14" fill="url(#seedGrad)" stroke="#4A2C20" strokeWidth="1" transform="rotate(15 200 175)"/>
      <path d="M200 163 Q200 175 200 187" stroke="#6E3F2A" strokeWidth="1" strokeLinecap="round" opacity="0.6" transform="rotate(15 200 175)"/>

      {/* Semilla central */}
      <ellipse cx="150" cy="120" rx="16" ry="12" fill="url(#seedGrad2)" stroke="#4A2C20" strokeWidth="1"/>
      <path d="M150 109 L150 131" stroke="#6E3F2A" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>

      {/* Raíces */}
      <path d="M130 308 Q150 315 170 308" stroke="#6E3F2A" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M135 310 Q125 316 115 314" stroke="#6E3F2A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M165 310 Q175 316 185 314" stroke="#6E3F2A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>

      <defs>
        <linearGradient id="leaf1" x1="60" y1="40" x2="180" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7355"/>
          <stop offset="0.4" stopColor="#6E5A3A"/>
          <stop offset="1" stopColor="#4A3820"/>
        </linearGradient>
        <linearGradient id="leaf2" x1="240" y1="40" x2="130" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A6545"/>
          <stop offset="0.4" stopColor="#5E4A2E"/>
          <stop offset="1" stopColor="#3E2E18"/>
        </linearGradient>
        <linearGradient id="leaf3" x1="90" y1="50" x2="150" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B8460"/>
          <stop offset="1" stopColor="#6E5A3A"/>
        </linearGradient>
        <radialGradient id="seedGrad" cx="50%" cy="35%">
          <stop stopColor="#C49050"/>
          <stop offset="0.5" stopColor="#A07040"/>
          <stop offset="1" stopColor="#6E4A20"/>
        </radialGradient>
        <radialGradient id="seedGrad2" cx="50%" cy="35%">
          <stop stopColor="#D4A060"/>
          <stop offset="0.5" stopColor="#B08040"/>
          <stop offset="1" stopColor="#7E5428"/>
        </radialGradient>
      </defs>
    </svg>
  )
}