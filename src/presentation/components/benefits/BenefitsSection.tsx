import BenefitsHeader from './BenefitsHeader'
import ProblemsCard from './ProblemsCard'
import SolutionsCard from './SolutionsCard'

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-28 bg-[#F7F0E6] overflow-hidden relative">

      {/* Blob decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ED8B00]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <BenefitsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProblemsCard />
          <SolutionsCard />
        </div>
      </div>

    </section>
  )
}