import Hero from "@/components/home/hero"
import ProblemSection from "@/components/home/problem-section"
import ServicesOverview from "@/components/home/services-overview"
import CTABanner from "@/components/home/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <CTABanner />
    </>
  )
}
