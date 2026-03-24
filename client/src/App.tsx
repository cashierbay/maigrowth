import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import SubmitTestimonial from "@/pages/SubmitTestimonial";
import GuestPosts from "@/pages/GuestPosts";
import LinkInsertions from "@/pages/LinkInsertions";
import Packages from "@/pages/Packages";
import AdminSubmissions from "@/pages/AdminSubmissions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import RefundPolicy from "@/pages/RefundPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/guest-posts" component={GuestPosts} />
      <Route path="/link-insertions" component={LinkInsertions} />
      <Route path="/packages" component={Packages} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/submit-testimonial" component={SubmitTestimonial} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/admin" component={AdminSubmissions} />
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
  );
}

export default App;
