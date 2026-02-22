/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Streetwear palette
        black: '#0a0a0a',
        white: '#ffffff',
        'washed-grey': '#6b6b6b',
        'off-white': '#f5f5f0',
        'dark-grey': '#1a1a1a',
        'light-grey': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}