export default function CoffeeCup() {
  return (
    <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Steam */}
      <g className="steam-particle" style={{ transformOrigin: '155px 80px' }}>
        <path d="M135 80 Q125 60 135 40 Q145 20 135 5" stroke="#EAAA00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7"/>
      </g>
      <g className="steam-particle" style={{ transformOrigin: '175px 80px', animationDelay: '0.5s' }}>
        <path d="M175 80 Q165 55 175 35 Q185 15 175 0" stroke="#ED8B00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      </g>
      <g className="steam-particle" style={{ transformOrigin: '215px 80px', animationDelay: '1s' }}>
        <path d="M215 80 Q205 60 215 40 Q225 20 215 5" stroke="#EAAA00" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
      </g>

      {/* Cup body */}
      <path d="M80 120 L95 340 Q100 370 130 375 L270 375 Q300 370 305 340 L320 120 Z" fill="url(#cupGrad)" stroke="#4A2C20" strokeWidth="2"/>

      {/* Liquid */}
      <path d="M95 150 L108 320 Q112 345 135 350 L265 350 Q288 345 292 320 L305 150 Z" fill="url(#liquidGrad)"/>

      {/* Surface shine */}
      <ellipse cx="200" cy="155" rx="102" ry="12" fill="url(#surfaceGrad)" opacity="0.8"/>

      {/* Crema swirl */}
      <path d="M140 160 Q165 145 200 155 Q235 165 260 155" stroke="#EAAA00" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M155 168 Q185 155 220 163" stroke="#F7F0E6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4"/>

      {/* Handle */}
      <path d="M305 180 Q370 200 365 270 Q360 330 305 310" stroke="#4A2C20" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <path d="M305 180 Q360 200 355 270 Q350 320 305 310" stroke="#6E3F2A" strokeWidth="8" strokeLinecap="round" fill="none"/>

      {/* Rim */}
      <ellipse cx="200" cy="122" rx="122" ry="14" fill="url(#rimGrad)" stroke="#4A2C20" strokeWidth="1.5"/>

      {/* Saucer */}
      <ellipse cx="200" cy="385" rx="155" ry="18" fill="url(#saucerGrad)" stroke="#4A2C20" strokeWidth="1.5"/>
      <ellipse cx="200" cy="380" rx="100" ry="8" fill="#E0D0BC" opacity="0.5"/>

      {/* Leaf detail */}
      <path d="M170 220 Q185 195 210 205 Q195 230 170 220Z" fill="#6E3F2A" opacity="0.5"/>
      <path d="M175 222 L207 207" stroke="#4A2C20" strokeWidth="1" opacity="0.4"/>

      {/* Floating beans */}
      <ellipse cx="60" cy="200" rx="16" ry="22" fill="#4A2C20" opacity="0.25" transform="rotate(-20 60 200)"/>
      <path d="M60 180 Q60 200 60 222" stroke="#6E3F2A" strokeWidth="1.5" opacity="0.4"/>
      <ellipse cx="345" cy="320" rx="13" ry="18" fill="#4A2C20" opacity="0.2" transform="rotate(15 345 320)"/>
      <ellipse cx="50" cy="350" rx="10" ry="14" fill="#ED8B00" opacity="0.3" transform="rotate(-10 50 350)"/>
      <ellipse cx="355" cy="170" rx="10" ry="14" fill="#EAAA00" opacity="0.25" transform="rotate(25 355 170)"/>

      {/* Brand on cup */}
      <text x="200" y="280" textAnchor="middle" fill="#F7F0E6" opacity="0.35"
        fontSize="11" fontFamily="Playfair Display, serif" letterSpacing="4" fontWeight="600">
        CAFEMILLA
      </text>

      <defs>
        <linearGradient id="cupGrad" x1="80" y1="120" x2="320" y2="375" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5A3A"/>
          <stop offset="0.5" stopColor="#6E3F2A"/>
          <stop offset="1" stopColor="#4A2C20"/>
        </linearGradient>
        <linearGradient id="liquidGrad" x1="95" y1="150" x2="305" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3D1F0F"/>
          <stop offset="0.4" stopColor="#5C2E14"/>
          <stop offset="1" stopColor="#2E1508"/>
        </linearGradient>
        <radialGradient id="surfaceGrad" cx="50%" cy="50%">
          <stop stopColor="#D4A56A"/>
          <stop offset="0.5" stopColor="#C49050"/>
          <stop offset="1" stopColor="#8B6030"/>
        </radialGradient>
        <linearGradient id="rimGrad" x1="80" y1="122" x2="320" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B7050"/>
          <stop offset="0.5" stopColor="#7B5040"/>
          <stop offset="1" stopColor="#5B3020"/>
        </linearGradient>
        <linearGradient id="saucerGrad" x1="45" y1="385" x2="355" y2="385" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B7050"/>
          <stop offset="0.5" stopColor="#7B5040"/>
          <stop offset="1" stopColor="#5B3020"/>
        </linearGradient>
      </defs>
    </svg>
  )
}