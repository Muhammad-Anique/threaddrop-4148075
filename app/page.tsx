'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import LeadForm from '@/components/LeadForm'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export default function Home() {
  const leadFormRef = useRef<HTMLDivElement>(null)

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="text-xl font-bold tracking-tight">
              <span className="text-white">THREAD</span>
              <span className="text-washed-grey">DROP</span>
            </a>

            {/* Nav Links */}
            <div className="hidden sm:flex items-center gap-8">
              <a 
                href="#collection" 
                className="text-sm text-washed-grey hover:text-white transition-colors uppercase tracking-wider"
              >
                Collection
              </a>
              <a 
                href="#notify" 
                className="text-sm text-washed-grey hover:text-white transition-colors uppercase tracking-wider"
              >
                Notify Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="sm:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero onNotifyClick={scrollToLeadForm} />

      {/* Product Showcase Section */}
      <div id="collection">
        <ProductShowcase />
      </div>

      {/* Lead Form Section */}
      <div ref={leadFormRef} id="notify">
        <LeadForm />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a href="/" className="text-xl font-bold tracking-tight">
                <span className="text-white">THREAD</span>
                <span className="text-washed-grey">DROP</span>
              </a>
              <p className="mt-4 text-washed-grey text-sm">
                Minimalist streetwear for the modern urban landscape.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#collection" className="text-washed-grey hover:text-white text-sm transition-colors">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#notify" className="text-washed-grey hover:text-white text-sm transition-colors">
                    Notify Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2">
                <WhatsAppCTA position="footer" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-washed-grey text-sm">
              © {new Date().getFullYear()} ThreadDrop. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-washed-grey hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-washed-grey hover:text-white text-sm transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppCTA position="floating" />
    </main>
  )
}