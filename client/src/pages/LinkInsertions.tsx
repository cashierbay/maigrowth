import { useEffect } from "react";
import SEO from "@/components/SEO";
import StickyBar from "@/components/link-insertions/StickyBar";
import Hero from "@/components/link-insertions/Hero";
import TrustBadges from "@/components/link-insertions/TrustBadges";
import Benefits from "@/components/link-insertions/Benefits";
import ResultsChart from "@/components/link-insertions/ResultsChart";
import Offerings from "@/components/link-insertions/Offerings";
import BulkSavings from "@/components/link-insertions/BulkSavings";
import ComparisonTable from "@/components/link-insertions/ComparisonTable";
import Packages from "@/components/link-insertions/Packages";
import Process from "@/components/link-insertions/Process";
import Quality from "@/components/link-insertions/Quality";
import Guarantees from "@/components/link-insertions/Guarantees";
import Testimonials from "@/components/link-insertions/Testimonials";
import FinalCTA from "@/components/link-insertions/FinalCTA";
import FAQ from "@/components/link-insertions/FAQ";

export default function LinkInsertions() {
  return (
    <>
      <SEO
        title="Link Insertions Service"
        description="High-authority link insertions in aged, topical articles. Boost rankings and AI visibility with niche-relevant placements. DR 40+ sites with real organic traffic."
      />
      <StickyBar />
      {/* Push page content below sticky bar (48px) so it doesn't hide behind it */}
      <div style={{ paddingTop: 48 }}>
        <Hero />
        <TrustBadges />
        <Benefits />
        <ResultsChart />
        <Offerings />
        <BulkSavings />
        <ComparisonTable />
        <Packages />
        <Process />
        <Quality />
        <Guarantees />
        <Testimonials />
        <FinalCTA />
        <FAQ />
      </div>
    </>
  );
}
