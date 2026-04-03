
import AboutSection from "../components/about/AboutSection";
import BenefitsSection from "../components/benefits/BenefitsSection";
import CatalogSection from "../components/catalog/CatalogSection";
import CTASection from "../components/cta/CTASection";
import ExperienceSection from "../components/experience/ExperienceSection";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import IngredientsSection from "../components/ingredients/IngredientsSection";
import MapSection from "../components/map/MapSection";
import Navbar from "../components/navbar/Navbar";
import TestimonialsSection from "../components/testimonials/TestimonialsSection";
import ValorSection from "../components/valor/ValorSection";

export function AppContainer() {
  return (
  <div className="grain-overlay">
    <Navbar />
    <main>
      <Hero />
      <ValorSection />
      <BenefitsSection />
      <IngredientsSection />
      <CatalogSection />
      <ExperienceSection />
      <TestimonialsSection />
      <AboutSection />
      <MapSection />
      <CTASection />
    </main>
    <Footer />
  </div>
  );

}
