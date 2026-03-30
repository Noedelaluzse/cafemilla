export default function SustainabilityBadge() {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#2E1A10] border border-[#6E3F2A] rounded-sm">
      <span className="text-2xl">🌳</span>
      <div>
        <div className="text-sm font-semibold text-[#F7F0E6]">
          Sustentable y local
        </div>
        <div className="text-xs text-[#8B6040] mt-0.5">
          El árbol de Ramón crece sin deforestar. Cosecha responsable
          desde las selvas mexicanas.
        </div>
      </div>
    </div>
  )
}