import IngredientVisual from './IngredientVisual'
import IngredientContent from './IngredientContent'

export default function IngredientsSection() {
  return (
    <section id="ingredientes" className="py-28 bg-[#4A2C20] relative overflow-hidden">

      {/* Blobs de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ED8B00]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#EAAA00]/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bean-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <IngredientVisual />
          <IngredientContent />
        </div>
      </div>

    </section>
  )
}