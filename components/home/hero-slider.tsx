"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    title: "Crafting Digital Experiences",
    subtitle: "Where design meets engineering. We build beautiful, functional digital products.",
    cta: "Learn More",
    href: "/services",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    title: "Innovation with Precision",
    subtitle: "Thoughtful technology that scales with your vision. Built to last.",
    cta: "Discover",
    href: "/about",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    title: "Transform Your Vision",
    subtitle: "From concept to reality. We create digital products that make an impact.",
    cta: "Start Today",
    href: "/contact",
  },
]

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev()
  }, [swiperRef])

  const handleNext = useCallback(() => {
    swiperRef?.slideNext()
  }, [swiperRef])

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero slider">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-3xl"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight"
              >
                {slides[activeIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl"
              >
                {slides[activeIndex].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-white/90 font-semibold px-8"
                >
                  <Link href={slides[activeIndex].href}>
                    {slides[activeIndex].cta}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 font-semibold px-8"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="ml-4 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef?.slideToLoop(idx)}
              className={`rounded-full transition-all ${
                idx === activeIndex
                  ? "h-2 w-8 bg-white"
                  : "h-2 w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

