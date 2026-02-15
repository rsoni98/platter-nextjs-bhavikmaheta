import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeading } from "@/components/shared/section-heading"
import { FadeIn } from "@/components/shared/fade-in"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Design Studio - Our Story & Values",
  description: "Learn about our creative team, our values, and our mission to create beautiful digital experiences. Discover what makes us different.",
  keywords: ["about us", "team", "company", "creative studio", "digital agency", "design philosophy"],
  openGraph: {
    title: "About Us | Design Studio",
    description: "Learn about our creative team and our mission to create beautiful digital experiences.",
    url: "https://example.com/about",
    type: "website",
  },
}

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every project has a clear purpose. We align technology with business goals to create meaningful impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay curious and push boundaries, exploring new approaches to solve complex problems elegantly.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "The best outcomes come from true partnership. We work closely with our clients, not for them.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We care deeply about our craft. Details matter, and we never compromise on quality.",
  },
]

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initial: "AM" },
  { name: "Sarah Chen", role: "Lead Designer", initial: "SC" },
  { name: "Marcus Johnson", role: "Tech Lead", initial: "MJ" },
  { name: "Emily Park", role: "Project Manager", initial: "EP" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="We're a team of designers and developers who create beautiful, functional digital experiences."
      />

      <section className="py-24 lg:py-32 bg-white dark:bg-black border-b border-gray-200/50 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                  alt="Our team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                  Crafting Digital Excellence
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                  We started with a simple belief: great design and engineering should work together seamlessly. Over the years, we've helped countless businesses bring their visions to life through thoughtful, elegant digital solutions.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                  We don't just build products. We build partnerships.
                </p>
                <Button asChild className="mt-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-white/90 font-semibold px-8" size="lg">
                  <Link href="/services">Explore Our Work</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black border-b border-gray-200/50 dark:border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Matters to Us"
            description="We believe in creating work that makes a difference. These values guide everything we do."
          />

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
              <FadeIn key={value.title} delay={idx * 0.1}>
                <div className="">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/10">
                    <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="Talented People, Great Results"
            description="We're a diverse group of designers, developers, and strategists united by a passion for excellence."
          />

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-light">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
