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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MaiGrowth",
    "url": "https://maigrowth.vercel.app",
    "description": "Premium link building and AI search optimization service. Rank higher on Google AND get cited in ChatGPT, Perplexity, and Google AI Overviews.",
    "logo": "https://maigrowth.vercel.app/logo.png",
    "sameAs": ["https://twitter.com/maigrowth"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://maigrowth.vercel.app/contact"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AEO and why does it matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO (AI Engine Optimization) ensures your brand gets cited in AI-generated answers. When users ask ChatGPT or Perplexity questions about your industry, your website should be a cited source. MaiGrowth optimizes every guest post for AI visibility."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see measurable ranking improvements within 60-90 days of link placement. We publish links quickly (21 days average), and Google recognizes editorial links immediately. You can monitor progress via your real-time dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Are the links do-follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all MaiGrowth links are do-follow. We only target sites that allow editorial do-follow links. We verify this before pitching any placement and confirm it in your final placement report."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in my campaign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every campaign includes: manual site prospecting, original content writing, manual outreach to real bloggers, link placement on high-authority sites, and comprehensive reporting with live URLs, traffic data, and domain authority metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer a 12-month link guarantee (if any link drops, we replace it for free), a money-back guarantee if we can't meet your metrics, and a traffic guarantee (all sites have 1,000+ monthly organic visitors minimum)."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="AI-Optimized Link Building"
        description="Get ranked on Google AND cited in ChatGPT, Perplexity, and AI answer engines. Premium guest posts and link insertions with 12-month guarantee."
        schema={organizationSchema}
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
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
