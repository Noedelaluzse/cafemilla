import { Star } from 'lucide-react'

interface StarsProps {
  count?: number
}

export default function Stars({ count = 5 }: StarsProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#EAAA00" className="text-[#EAAA00]" />
      ))}
    </div>
  )
}