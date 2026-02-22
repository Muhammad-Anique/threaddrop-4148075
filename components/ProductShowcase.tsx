'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: string
  image: string
  colors: string[]
  sizes: string[]
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Essential Black Tee',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=750&fit=crop',
    colors: ['Black', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Heavyweight cotton. Oversized fit. Built to last.',
  },
  {
    id: 2,
    name: 'Minimal White Tee',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
    colors: ['White', 'Off-White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium jersey. Clean lines. Timeless design.',
  },
  {
    id: 3,
    name: 'Washed Grey Tee',
    price: '$50',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=750&fit=crop',
    colors: ['Washed Grey', 'Stone'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Vintage wash. Soft handfeel. Urban aesthetic.',
  },
  {
    id: 4,
    name: 'Graphic Logo Tee',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=750&fit=crop',
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Signature logo print. Limited edition drop.',
  },
]

export default function ProductShowcase() {
  const [selectedProducts, setSelectedProducts] = useState<Record<number, { color: string; size: string }>>({})

  const handleColorSelect = (productId: number, color: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: { ...prev[productId], color }
    }))
  }

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: { ...prev[productId], size }
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-washed-grey text-sm tracking-[0.3em] uppercase">The Collection</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Premium Essentials
          </h2>
          <p className="mt-4 text-washed-grey max-w-2xl mx-auto">
            Each piece is crafted with intention. Limited runs. Premium materials. 
            Designed for those who move differently.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-dark-grey rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium text-lg">{product.name}</h3>
                  <span className="text-white font-semibold">{product.price}</span>
                </div>
                
                <p className="text-washed-grey text-sm mb-4">{product.description}</p>

                {/* Color Selection */}
                <div className="mb-3">
                  <span className="text-xs text-washed-grey uppercase tracking-wider">Colors</span>
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(product.id, color)}
                        className={`px-2 py-1 text-xs border transition-colors ${
                          selectedProducts[product.id]?.color === color
                            ? 'border-white text-white'
                            : 'border-washed-grey text-washed-grey hover:border-white hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <span className="text-xs text-washed-grey uppercase tracking-wider">Sizes</span>
                  <div className="flex gap-2 mt-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`w-8 h-8 text-xs border transition-colors ${
                          selectedProducts[product.id]?.size === size
                            ? 'border-white text-white bg-white/10'
                            : 'border-washed-grey text-washed-grey hover:border-white hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Note */}
        <div className="mt-16 text-center">
          <p className="text-washed-grey text-sm">
            All items are made-to-order. Ships within 5-7 business days.
          </p>
        </div>
      </div>
    </section>
  )
}