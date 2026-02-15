import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { FadeIn } from "@/components/shared/fade-in"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Design Studio - Get in Touch",
  description: "Get in touch with our creative team. We're here to help bring your digital vision to life. Contact us today for a free consultation.",
  keywords: ["contact", "get in touch", "inquiry", "digital studio", "web development", "design"],
  openGraph: {
    title: "Contact Us | Design Studio",
    description: "Get in touch with our creative team. We're here to help bring your digital vision to life.",
    url: "https://example.com/contact",
    type: "website",
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexus.dev",
    href: "mailto:hello@nexus.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Innovation Drive, San Francisco, CA 94105",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM PST",
    href: "#",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We'd love to hear from you. Share your project details and we'll get back to you within 24 hours."
      />

      <section className="py-24 lg:py-32 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <FadeIn direction="right">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Contact Info
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 font-light">
                  Reach out to us through any of these channels.
                </p>

                <div className="mt-12 flex flex-col gap-12">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group"
                      >
                        <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-light">
                          {item.value}
                        </p>
                      </a>
                    )
                  })}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn direction="left" delay={0.15}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
