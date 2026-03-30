interface LeafIconProps {
  size?: number
}

export default function LeafIcon({ size = 24 }: LeafIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C12 22 3 16 3 9C3 5 7 2 12 2C17 2 21 5 21 9C21 16 12 22 12 22Z"
        fill="#6E3F2A" opacity="0.15" stroke="#6E3F2A" strokeWidth="1.5"
      />
      <path
        d="M12 22L12 8"
        stroke="#4A2C20" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  )
}