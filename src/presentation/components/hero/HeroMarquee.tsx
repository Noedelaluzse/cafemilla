import { marqueeItems } from "@/infrastructure"


const repeated = Array(8).fill(marqueeItems).flat()

export default function HeroMarquee() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-[#4A2C20] py-3">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-block text-xs tracking-[0.2em] text-[#EAAA00] mx-8 uppercase font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}