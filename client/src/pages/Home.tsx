import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import ResultsSection from "@/components/home/ResultsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyMaiGrowth from "@/components/home/WhyMaiGrowth";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSection from "@/components/home/TrustSection";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

const ComparisonTable = lazy(() => import("@/components/home/ComparisonTable"));
const HomeFAQ = lazy(() => import("@/components/home/HomeFAQ"));

export default function Home() {
  return (
    <>
      <SEO
        title="AI-Optimized Link Building"
        description="Get ranked on Google AND cited in ChatGPT, Perplexity, and AI answer engines. Premium guest posts and link insertions with 12-month guarantee."
      />
      <Hero />
      <ProblemSection />
      <ResultsSection />
      <ServicesOverview />
      <WhyMaiGrowth />
      <FeaturesSection />
      <Suspense fallback={<div />}>
        <ComparisonTable />
      </Suspense>
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <Suspense fallback={<div />}>
        <HomeFAQ />
      </Suspense>
      <CTABanner />
    </>
  );
}
