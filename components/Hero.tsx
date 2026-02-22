'use client'

import { useState } from 'react'

interface HeroProps {
  onNotifyClick?: () => void
}

export default function Hero({ onNotifyClick }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&h=1080&fit=crop"
          alt="Premium streetwear collection"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Brand Tag */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs tracking-[0.3em] uppercase text-off-white">
            New Drop
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-white">THREAD</span>
          <span className="block text-washed-grey">DROP</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-off-white/90 mb-4 font-light tracking-wide">
          Minimalist streetwear. Maximum impact.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-washed-grey max-w-xl mx-auto mb-10 leading-relaxed">
          Premium essentials crafted for the urban landscape. 
          Limited quantities. Zero compromises.
        </p>

        {/* CTA Button */}
        <button
          onClick={onNotifyClick}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 bg-white text-black hover:bg-off-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          <span>Notify Me</span>
          <svg 
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-washed-grey" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}