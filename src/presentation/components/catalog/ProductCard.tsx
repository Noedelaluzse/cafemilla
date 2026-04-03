'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/infrastructure/data/products'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: Readonly<ProductCardProps>) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      className="inline-flex flex-col rounded-sm overflow-hidden cursor-pointer group w-fit mx-auto"
      style={{
        border: `1px solid ${product.color}40`,
        background: '#1A0D07',
      }}
    >
      {/* Acento superior */}
      <div
        className="w-full h-1"
        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
      />

      {/* Imagen */}
      <div
        className="flex items-center justify-center p-6 relative"
        style={{ background: `radial-gradient(circle at center, ${product.color}15, #1A0D07 70%)`, minHeight: '280px' }}
      >
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ background: `${product.color}15` }}
          />
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={240}
          height={280}
          className={`object-contain transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: 'auto' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Contenido */}
      <div className="px-6 pb-6 w-full">
        <div
          className="w-8 h-1 rounded-full mb-4"
          style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
        />

        <h3
          className="text-xl font-black text-[#F7F0E6] mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {product.name}
        </h3>

        <p className="text-sm text-[#C9A87E] leading-relaxed">
          {product.description}
        </p>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}%20-%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider uppercase flex items-center gap-2"
            style={{ color: product.color }}
          >
            Pedir por WhatsApp →
          </a>
        </div>
      </div>
    </motion.div>
  )
}