import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import IndustryBenchmarksPage from "./pages/industry-benchmarks-page";
import CareersPage from "./pages/careers-page";

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
        <Route path="/resources/playbooks" element={<PlaybooksPage />} />
        <Route path="/resources/intelligence" element={<RevenueIntelligencePage />} />
        <Route path="/resources/blog" element={<BlogPage />} />
        <Route path="/resources/benchmarks" element={<IndustryBenchmarksPage />} />
      </Routes>
      {/* Global Chat Widget - Available on all pages */}
      <N8nChat />
    </BrowserRouter>
  );
}