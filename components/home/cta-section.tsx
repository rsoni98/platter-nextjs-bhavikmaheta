"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-white/5">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Let's Create Something Extraordinary
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We'd love to hear about your project. Let's discuss your vision and how we can help bring it to life.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold px-8"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 font-semibold px-8"
            >
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
