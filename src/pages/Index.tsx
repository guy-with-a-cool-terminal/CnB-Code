import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { PricingSection } from "../components/PricingSection";
import { ServiceBundlesSection } from "../components/ServiceBundlesSection";
import { FounderStory } from "../components/FounderStory";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { InteractivePrompt } from "../components/InteractivePrompt";
import { StickyCTABar } from "../components/StickyCTABar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Services Section */}
      <div id="services" className="bg-slate-50">
        <ServicesSection />
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
      <InteractivePrompt />
      <StickyCTABar />
    </div>
  );
};

export default Index;