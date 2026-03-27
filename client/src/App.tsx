import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Eager load critical pages
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Lazy load non-critical pages to reduce initial bundle
const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const SubmitTestimonial = lazy(() => import("@/pages/SubmitTestimonial"));
const GuestPosts = lazy(() => import("@/pages/GuestPosts"));
const LinkInsertions = lazy(() => import("@/pages/LinkInsertions"));
const Packages = lazy(() => import("@/pages/Packages"));
const AdminSubmissions = lazy(() => import("@/pages/AdminSubmissions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));

const PageLoader = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div>Loading...</div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={() => <Suspense fallback={<PageLoader />}><About /></Suspense>} />
      <Route path="/guest-posts" component={() => <Suspense fallback={<PageLoader />}><GuestPosts /></Suspense>} />
      <Route path="/link-insertions" component={() => <Suspense fallback={<PageLoader />}><LinkInsertions /></Suspense>} />
      <Route path="/packages" component={() => <Suspense fallback={<PageLoader />}><Packages /></Suspense>} />
      <Route path="/blog" component={() => <Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
      <Route path="/blog/:slug" component={() => <Suspense fallback={<PageLoader />}><BlogPost /></Suspense>} />
      <Route path="/contact" component={Contact} />
      <Route path="/submit-testimonial" component={() => <Suspense fallback={<PageLoader />}><SubmitTestimonial /></Suspense>} />
      <Route path="/privacy-policy" component={() => <Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />
      <Route path="/terms-and-conditions" component={() => <Suspense fallback={<PageLoader />}><TermsAndConditions /></Suspense>} />
      <Route path="/refund-policy" component={() => <Suspense fallback={<PageLoader />}><RefundPolicy /></Suspense>} />
      <Route path="/admin" component={() => <Suspense fallback={<PageLoader />}><AdminSubmissions /></Suspense>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          {!isAdmin && <Navbar />}
          <main>
            <Router />
          </main>
          {!isAdmin && <Footer />}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
