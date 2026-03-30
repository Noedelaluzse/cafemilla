import AboutHeader from './AboutHeader'
import { MisionCard, VisionCard } from './MisionVisionCards'
import PillarGrid from './PillarGrid'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-28 bg-[#2E1A10] relative overflow-hidden">

      {/* Blobs de fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#ED8B00]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EAAA00]/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bean-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AboutHeader />

        {/* Misión / Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <MisionCard />
          <VisionCard />
        </div>

        <PillarGrid />
      </div>

    </section>
  )
}