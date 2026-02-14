import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { ProductTabs } from "./components/product-tabs";
import { IntelligenceArchitecture } from "./components/intelligence-architecture";
import { CustomerIntelligenceSection } from "./components/customer-intelligence-section";
import { TrustSection } from "./components/trust-section";
import { ProblemSection } from "./components/problem-section";
import { ValueDuality } from "./components/value-duality";
import { MetricsSection } from "./components/metrics-section";
import { FeatureShowcase } from "./components/feature-showcase";
import { UseCases } from "./components/use-cases";
import { CaseStudies } from "./components/case-studies";
import { TestimonialSection } from "./components/testimonial-section";
import { ComparisonTable } from "./components/comparison-table";
import { IntegrationHub } from "./components/integration-hub";
import { SecuritySection } from "./components/security-section";
import { FAQSection } from "./components/faq-section";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { N8nChat } from "./components/n8n-chat";

// Import Pages
import ProductsOverview from "./pages/products-overview";
import InsightPage from "./pages/insight-page";
import EngagePage from "./pages/engage-page";
import CoachPage from "./pages/coach-page";
import SolutionsByTeam from "./pages/solutions-by-team";
import SolutionsByIndustry from "./pages/solutions-by-industry";
import IntegrationsPage from "./pages/integrations-page";
import PricingPage from "./pages/pricing-page";
import ResourcesPage from "./pages/resources-page";
import BookDemoPage from "./pages/book-demo-page";
import AboutCompany from "./pages/about-company";
import PlaybooksPage from "./pages/playbooks-page";
import RevenueIntelligencePage from "./pages/revenue-intelligence-page";
import BlogPage from "./pages/blog-page";
import BlogDetailPage from "./pages/blog-detail-page";
import IndustryBenchmarksPage from "./pages/industry-benchmarks-page";
import CareersPage from "./pages/careers-page";
import JobDetailPage from "./pages/job-detail-page";
import PrivacyPolicyPage from "./pages/privacy-policy";
import TermsAndServicesPage from "./pages/terms-and-services";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return; // let anchor targets handle scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductTabs />
        {/* COMPANY BRAIN & PROJECT BRAIN INSERT START */}
        <IntelligenceArchitecture />
        {/* COMPANY BRAIN & PROJECT BRAIN INSERT END */}
        <CustomerIntelligenceSection />
        <TrustSection />
        <ProblemSection />
        <ValueDuality />
        <MetricsSection />
        <FeatureShowcase />
        <UseCases />
        <CaseStudies />
        <TestimonialSection />
        <ComparisonTable />
        <IntegrationHub />
        <SecuritySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsOverview />} />
        <Route path="/products/insight" element={<InsightPage />} />
        <Route path="/products/engage" element={<EngagePage />} />
        <Route path="/products/coach" element={<CoachPage />} />
        <Route path="/solutions" element={<SolutionsByTeam />} />
        <Route path="/solutions/industry" element={<SolutionsByIndustry />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/about" element={<AboutCompany />} />
        <Route path="/resources/careers" element={<CareersPage />} />
        <Route path="/resources/careers/:jobId" element={<JobDetailPage />} />
        <Route path="/resources/playbooks" element={<PlaybooksPage />} />
        <Route path="/resources/intelligence" element={<RevenueIntelligencePage />} />
        <Route path="/resources/blog" element={<BlogPage />} />
        <Route path="/resources/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/resources/benchmarks" element={<IndustryBenchmarksPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-services" element={<TermsAndServicesPage />} />
      </Routes>
      {/* Global Chat Widget - Available on all pages */}
      <N8nChat />
    </BrowserRouter>
  );
}