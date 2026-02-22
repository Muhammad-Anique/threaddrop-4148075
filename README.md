# ThreadDrop

> Premium streetwear landing page with lead capture and WhatsApp integration.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E)](https://supabase.com/)

![ThreadDrop Preview](https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop)

## Features

- **Premium Hero Section** — Full-screen landing with streetwear imagery and "Notify Me" CTA
- **Product Showcase** — Responsive grid displaying T-shirt collection with size/color selectors
- **Lead Capture Form** — Name/Email collection with Supabase integration
- **WhatsApp Integration** — Floating chat button and footer contact link
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Dark Theme** — Minimalist streetwear aesthetic (Black, White, Washed Grey, Off-White)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Database | [Supabase](https://supabase.com/) |
| Icons | SVG (inline) |
| Fonts | Inter (Google Fonts) |

## Directory Structure

```
threaddrop-4148075/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Landing page composition
├── components/
│   ├── Hero.tsx             # Hero section with CTA
│   ├── ProductShowcase.tsx  # Product grid component
│   ├── LeadForm.tsx         # Lead capture form
│   └── WhatsAppCTA.tsx      # WhatsApp button/link
├── lib/
│   └── supabaseClient.ts    # Supabase client initialization
├── .env.example             # Environment variables template
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Anique/threaddrop-4148075.git
   cd threaddrop-4148075
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**

   Create a `leads` table in your Supabase project:
   ```sql
   CREATE TABLE leads (
     id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL UNIQUE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The project is configured for static export (`output: 'export'`) which works perfectly with Vercel.

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the streetwear palette:

```typescript
colors: {
  black: '#0a0a0a',
  white: '#ffffff',
  'washed-grey': '#6b6b6b',
  'off-white': '#f5f5f0',
  // Add your own...
}
```

### WhatsApp Number

Update the phone number in `app/page.tsx`:

```tsx
<WhatsAppCTA 
  phoneNumber="1234567890"  // Your WhatsApp number
  message="Hi! I'm interested in ThreadDrop."
/>
```

### Products

Edit the products array in `components/ProductShowcase.tsx` to update the collection.

## License

MIT License — feel free to use this for your own projects.

---

Built with ❤️ by the ThreadDrop team.