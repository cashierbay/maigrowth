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
        description="Flexible pricing tiers: Slow Burner, Launch Pad, Growth, Authority, Domination. All include original content, manual outreach, AI optimization, and 12-month link guarantee."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" }
        ]}
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
