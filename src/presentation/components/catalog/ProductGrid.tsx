'use client'

import { products } from "@/infrastructure"
import ProductCard from "./ProductCard"

export default function ProductGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}