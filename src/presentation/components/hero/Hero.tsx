import HeroText from './HeroText'
import HeroIllustration from './HeroIllustration'
import HeroScrollIndicator from './HeroScrollIndicator'
import HeroMarquee from './HeroMarquee'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F0E6]">

      {/* Background texture */}
      <div className="absolute inset-0 bean-pattern opacity-30 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#ED8B00]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#6E3F2A]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <HeroText />
        <HeroIllustration />
      </div>

      <HeroScrollIndicator />
      <HeroMarquee />

    </section>
  )
}