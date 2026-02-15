import { HeroSlider } from "@/components/home/hero-slider"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
