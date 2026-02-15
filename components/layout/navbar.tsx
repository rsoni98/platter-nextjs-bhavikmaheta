"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
          Design Studio
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-gray-200/50 dark:border-white/10 bg-white/80 dark:bg-black/80 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button asChild className="mt-3 w-full rounded-full font-semibold" size="sm">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
