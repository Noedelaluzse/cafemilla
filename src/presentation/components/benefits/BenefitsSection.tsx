import BenefitsComparison from './BenefitsComparison'
import BenefitsHeader from './BenefitsHeader'

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-28 bg-[#F7F0E6] overflow-hidden relative">

      {/* Blob decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ED8B00]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <BenefitsHeader />
        <BenefitsComparison />
      </div>

    </section>
  )
}