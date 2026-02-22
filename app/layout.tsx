import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ThreadDrop | Premium Streetwear',
  description: 'Minimalist streetwear. Maximum impact. Join the drop.',
  keywords: 'streetwear, t-shirts, fashion, urban, clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}