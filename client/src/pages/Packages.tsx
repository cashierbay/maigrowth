import SEO from "@/components/SEO";
import AnimatedHero from "@/components/packages/AnimatedHero";
import StatsCounter from "@/components/packages/StatsCounter";
import ProblemSolution from "@/components/packages/ProblemSolution";
import PackageCards from "@/components/packages/PackageCards";
import ValueBreakdown from "@/components/packages/ValueBreakdown";
import ProcessSteps from "@/components/packages/ProcessSteps";
import CaseStudies from "@/components/packages/CaseStudies";
import ComparisonTable from "@/components/packages/ComparisonTable";
import Testimonials from "@/components/packages/Testimonials";
import FAQ from "@/components/packages/FAQ";
import FinalCTA from "@/components/packages/FinalCTA";

export default function Packages() {
  return (
    <>
      <SEO
        title="Campaign Packages"
        description="Structured pricing tiers for every stage of SEO growth. Guest post packages include content writing, outreach, and full reporting."
      />
      <AnimatedHero />
      <StatsCounter />
      <ProblemSolution />
      <PackageCards />
      <ValueBreakdown />
      <ProcessSteps />
      <CaseStudies />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
