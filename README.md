# Design Studio

A responsive website built with Next.js, React, and Tailwind CSS.

## 🛠 Tech Stack

- **Next.js 16** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form + Zod** - Form validation
- **Swiper** - Carousel
- **shadcn/ui** - UI components
- **pnpm** - Package manager

## 📁 Project Structure

```
app/
  ├── page.tsx           # Home page
  ├── about/             # About page
  ├── services/          # Services page
  ├── contact/           # Contact page
  └── layout.tsx         # Root layout

components/
  ├── home/              # Home sections
  ├── layout/            # Navbar, Footer
  ├── contact/           # Contact form
  ├── shared/            # Reusable components
  └── ui/                # UI components

lib/
  ├── utils.ts           # Utility functions
  └── schemas/           # Validation schemas
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

**Build for production:**
```bash
pnpm build
pnpm start
```

## 🛣 Pages

- `/` - Home
- `/about` - About
- `/services` - Services  
- `/contact` - Contact

## 💡 Tips

**Add metadata for SEO:**
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

**Styling:**
```tsx
<div className="px-6 py-12 bg-white dark:bg-black">
  {/* Use dark: prefix for dark mode */}
</div>
```

**Animations:**
```tsx
import { motion } from 'framer-motion'

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

**Forms with validation:**
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
```

## 🚢 Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployments.

Or run `pnpm build && pnpm start` locally.

## 📦 Key Packages

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion
- React Hook Form, Zod, Swiper
- shadcn/ui, Lucide React
