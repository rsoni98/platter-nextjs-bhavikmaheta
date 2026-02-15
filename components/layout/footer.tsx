import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "#", label: "Twitter" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "GitHub" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-white/10 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
              Design Studio
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-600 dark:text-gray-400 font-light">
              Creating beautiful, functional digital experiences that make a meaningful impact on your business.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Pages</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white font-light"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-200/50 dark:border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-600 dark:text-gray-400 font-light">
            © {new Date().getFullYear()} Design Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white font-light"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white font-light"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
