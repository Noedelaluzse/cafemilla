import CatalogHeader from "./CatalogHeader";
import ProductGrid from "./ProductGrid";


export default function CatalogSection() {
  return (
    <section id="catalogo" className="py-28 bg-[#2E1A10] overflow-hidden relative">

      {/* Blob decorativo */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ED8B00]/10 blur-3xl pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6">
        <CatalogHeader />
        <ProductGrid />
      </div>

    </section>
  )
}