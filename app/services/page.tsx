import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeading } from "@/components/shared/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Palette,
  Smartphone,
  Cloud,
  Search,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Design Studio - Web Development & Design Solutions",
  description: "Explore our full range of digital services including web development, UI/UX design, mobile apps, cloud solutions, and SEO. We create digital products that drive results.",
  keywords: ["web development", "services", "UI design", "UX design", "mobile development", "cloud solutions", "SEO", "digital marketing"],
  openGraph: {
    title: "Services | Design Studio",
    description: "Explore our full range of digital services to help your business thrive.",
    url: "https://example.com/services",
    type: "website",
  },
}

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and Node.js. We deliver performant, scalable, and maintainable solutions.",
    features: [
      "Custom web applications",
      "API development & integration",
      "Server-side rendering & SSG",
      "Performance optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. We create interfaces people love to use.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems",
      "Accessibility compliance",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native that deliver native-like experiences on iOS and Android.",
    features: [
      "Cross-platform development",
      "Native performance",
      "Push notifications",
      "Offline-first architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure setup, migration, and optimization on AWS, GCP, and Vercel for maximum reliability.",
    features: [
      "Cloud migration",
      "Serverless architecture",
      "CI/CD pipelines",
      "Infrastructure as Code",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that improve visibility, drive organic traffic, and increase conversion rates.",
    features: [
      "Technical SEO audits",
      "Content strategy",
      "Core Web Vitals optimization",
      "Analytics & reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Custom dashboards and reporting tools that turn raw data into actionable business intelligence.",
    features: [
      "Custom dashboard development",
      "Data visualization",
      "Real-time monitoring",
      "Predictive analytics",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to define the project scope.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a detailed roadmap with timelines, milestones, and technical architecture.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution iteratively with regular check-ins and demos.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy, monitor, and continue to optimize your product post-launch.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="End-to-end digital solutions designed to help your business thrive in the modern landscape."
      />

      <section className="py-24 lg:py-32 bg-white dark:bg-black border-b border-gray-200/50 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
              <FadeIn key={service.title} delay={idx * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/10">
                    <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-gray-900 dark:text-white mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black py-24 lg:py-32 border-b border-gray-200/50 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A collaborative, transparent approach that ensures your project is delivered on time with exceptional results."
          />

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, idx) => (
              <FadeIn key={item.step} delay={idx * 0.1}>
                <div className="relative">
                  <span className="text-5xl font-bold text-gray-200 dark:text-white/10">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white dark:bg-black">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="mt-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold px-8">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
