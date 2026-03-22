import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyMaiGrowth from "@/components/home/WhyMaiGrowth";
import FeaturesSection from "@/components/home/FeaturesSection";
import ComparisonTable from "@/components/home/ComparisonTable";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSection from "@/components/home/TrustSection";
import Testimonials from "@/components/home/Testimonials";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <title>MaiGrowth — Guest Posts & Link Insertions | Found in Google & AI</title>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <WhyMaiGrowth />
      <FeaturesSection />
      <ComparisonTable />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <HomeFAQ />
      <CTABanner />
    </>
  );
}
