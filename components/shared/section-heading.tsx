import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-6 inline-block rounded-full bg-gray-100 dark:bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
          {badge}
        </span>
      )}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-light">
          {description}
        </p>
      )}
    </div>
  )
}
