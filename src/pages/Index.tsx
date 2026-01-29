import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { ServiceComparisonTable } from "../components/ServiceComparisonTable";
import { PortfolioSection } from "../components/PortfolioSection";
import { PricingSection } from "../components/PricingSection";
import { ServiceBundlesSection } from "../components/ServiceBundlesSection";
import { FounderStory } from "../components/FounderStory";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { FloatingAction } from "../components/FloatingAction";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CnB Code | High-Performance Websites & Systems That Grow Your Business</title>
        <meta name="description" content="Don't just get a website; get a sales channel. We build custom software, M-Pesa integrations, and automated booking systems designed to increase your revenue." />
        <meta name="keywords" content="Business growth Kenya, Automated sales systems, M-Pesa payment collection, Custom software ROI, Website design for sales,M-pesa integration Nairobi, M-pesa integration Kenya, M-pesa integration Tanzania, M-pesa integration Uganda, M-pesa integration Rwanda, M-pesa integration Burundi, M-pesa integration Rwanda, M-pesa integration Rwanda" />
        <link rel="canonical" href="https://cnbcode.com/" />
      </Helmet>
      <Header />
      <Hero />

      {/* Services Section */}
      <div id="services" className="bg-slate-50">
        <ServicesSection />
      </div>

      {/* Service Comparison Table - Help users find the right solution */}
      <div className="bg-white">
        <ServiceComparisonTable />
      </div>

      {/* Service Bundles - Business-type packages */}
      <div id="pricing" className="bg-white">
        <ServiceBundlesSection />
      </div>

      {/* Individual Pricing - For custom needs */}
      <div id="individual-pricing" className="bg-slate-50">
        <PricingSection />
      </div>

      {/* Portfolio/Case Studies - Our work (clickable) */}
      <div id="work" className="bg-white">
        <PortfolioSection />
      </div>

      {/* Founder Story - Build trust and credibility */}
      <div id="why-cnb">
        <FounderStory />
      </div>

      {/* FAQ Section - Address objections */}
      <div id="faq" className="bg-gradient-to-b from-white to-slate-50">
        <FAQSection />
      </div>

      {/* Zone 3: Conversion - Build back to dark */}
      <div id="contact" className="bg-slate-900">
        <ContactSection />
      </div>

      <Footer />
      <FloatingAction context="General Inquiry" />
    </div>
  );
};

export default Index;