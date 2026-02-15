"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { y: 0, x: 30 },
  right: { y: 0, x: -30 },
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const offset = directionMap[direction]

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
