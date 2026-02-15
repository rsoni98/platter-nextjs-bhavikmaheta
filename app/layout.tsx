import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Design Studio | Premium Digital Experiences',
  description:
    'Craft beautiful, functional digital experiences. We create digital products that inspire and drive meaningful results.',
  keywords: ['digital design', 'web design', 'digital products', 'UI/UX', 'creative studio'],
}

export const viewport: Viewport = {
  themeColor: '#0f0f11',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
