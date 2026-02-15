import { SectionHeading } from "@/components/shared/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { Zap, Shield, BarChart3, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with server-side rendering and edge computing for excellent load times.",
  },
  {
    icon: Shield,
    title: "Enterprise Secure",
    description:
      "Built-in security best practices with authentication, encryption, and compliance standards.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description:
      "Powerful analytics and insights to help you make informed decisions and drive growth.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Deploy worldwide with CDN-backed infrastructure ensuring fast access from any location.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Our Approach"
          title="Built on a Foundation of Excellence"
          description="We believe in creating products that are both beautiful and purposeful."
        />

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <FadeIn key={feature.title} delay={idx * 0.1}>
                <div className="group relative">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="h-7 w-7 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
