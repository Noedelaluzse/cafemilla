import ValorContent from './ValorContent'
import FeatureGrid from './FeatureGrid'

export default function ValorSection() {
  return (
    <section id="beneficios" className="py-28 bg-white relative overflow-hidden">

      {/* Background sutil */}
      <div className="absolute inset-0 bean-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ValorContent />
          <FeatureGrid />
        </div>
      </div>

    </section>
  )
}