'use client'

import { useState, FormEvent } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface LeadFormProps {
  id?: string
}

export default function LeadForm({ id = 'notify' }: LeadFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!name.trim() || !email.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all fields')
      return
    }

    if (!email.includes('@')) {
      setStatus('error')
      setErrorMessage('Please enter a valid email')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: name.trim(), 
            email: email.trim().toLowerCase(),
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        // Check for duplicate email
        if (error.code === '23505') {
          setErrorMessage('You\'re already on the list!')
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-grey">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-washed-grey text-sm tracking-[0.3em] uppercase">Stay Updated</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Join the Drop
          </h2>
          <p className="mt-4 text-washed-grey">
            Be the first to know about new releases, exclusive drops, and limited editions.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-washed-grey">We&apos;ll notify you when the next drop is live.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-off-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-black border border-washed-grey/30 text-white placeholder-washed-grey/50 focus:outline-none focus:border-white transition-colors"
                disabled={status === 'loading'}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-black border border-washed-grey/30 text-white placeholder-washed-grey/50 focus:outline-none focus:border-white transition-colors"
                disabled={status === 'loading'}
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="text-red-400 text-sm text-center">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 bg-white text-black hover:bg-off-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-grey"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Notify Me'
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-washed-grey text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}