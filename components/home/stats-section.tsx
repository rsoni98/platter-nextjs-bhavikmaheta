import { FadeIn } from "@/components/shared/fade-in"

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "8+", label: "Years of Experience" },
]

export function StatsSection() {
  return (
    <section className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1}>
              <div>
                <p className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-light">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
