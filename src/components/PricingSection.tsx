import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const pricingTiers = [
    {
      name: "Websites & Online Presence",
      priceKES: "From KES 30,000",
      priceUSD: "≈ USD 230",
      features: [
        "Get found by customers searching online",
        "Sell products 24/7 with automated checkout",
        "Capture leads even when you're offline",
        "Look professional on every device",
      ],
    },
    {
      name: "Integrations & Payments",
      priceKES: "From KES 45,000",
      priceUSD: "≈ USD 345",
      features: [
        "Get paid instantly via M-Pesa and cards",
        "Connect all your business tools automatically",
        "Sync customer data across platforms",
        "Ready for automation and scaling",
      ],
      popular: true,
    },
    {
      name: "Booking & Automations",
      priceKES: "From KES 55,000",
      priceUSD: "≈ USD 420",
      features: [
        "Accept bookings 24/7 automatically",
        "Reduce no-shows with WhatsApp reminders",
        "Eliminate repetitive manual tasks",
        "Save 15+ hours weekly on admin work",
      ],
    },
    {
      name: "Apps & Custom Software",
      priceKES: "From KES 120,000",
      priceUSD: "≈ USD 920",
      features: [
        "Put your business in customers' pockets",
        "Custom solutions built for YOUR workflow",
        "Real-time dashboards for better decisions",
        "Scale without hiring more staff",
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-section-title mb-4">Pricing</h2>
          <p className="text-body-large text-text-secondary mb-4">
            Clear pricing for growing businesses. Pay in KES, USD, EUR, or GBP.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Taking new projects • Free consultation
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 ${
                tier.popular
                  ? "bg-accent/5 border-accent/40 ring-1 ring-accent/30"
                  : "bg-card border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
              <div className="text-accent font-bold text-xl mb-4">
                {tier.priceKES}
              </div>

              <ul className="space-y-2 mb-6 text-sm text-text-secondary">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full px-4 py-2 text-sm font-medium rounded-full shadow-md transition-all duration-300 ease-out ${
                    tier.popular ? "bg-accent text-white hover:shadow-lg hover:scale-105" : "bg-card border border-border text-text-primary hover:shadow-lg hover:scale-105"
                  }`}
                >
                  Get a Quote
                </button>

            </div>
          ))}
        </div>

        {/* API Integration Breakdown - Expandable */}
        <div className="mt-8 max-w-3xl mx-auto">
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-accent/40 hover:shadow-md transition-all"
          >
            <span className="text-sm font-semibold text-slate-700">
              View API Integration Pricing Breakdown
            </span>
            {showBreakdown ? (
              <ChevronUp className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {showBreakdown && (
            <div className="mt-3 p-5 bg-white border border-slate-200 rounded-lg animate-fade-in">
              <h4 className="text-base font-bold text-slate-900 mb-4">
                API Integration Pricing
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <p className="font-medium text-slate-900">M-Pesa Integration</p>
                    <p className="text-xs text-slate-500">Basic setup, single endpoint</p>
                  </div>
                  <span className="font-semibold text-accent">KES 20,000</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <p className="font-medium text-slate-900">WhatsApp Notifications</p>
                    <p className="text-xs text-slate-500">Booking confirmations, order updates</p>
                  </div>
                  <span className="font-semibold text-accent">KES 22,000</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <p className="font-medium text-slate-900">Full Payment System</p>
                    <p className="text-xs text-slate-500">Complete processing, webhooks, invoices</p>
                  </div>
                  <span className="font-semibold text-accent">KES 35,000</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <p className="font-medium text-slate-900">WhatsApp Business Bot</p>
                    <p className="text-xs text-slate-500">Automated responses, 24/7 availability</p>
                  </div>
                  <span className="font-semibold text-accent">KES 35,000</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <p className="font-medium text-slate-900">ID Verification / KYC</p>
                    <p className="text-xs text-slate-500">Compliance ready, secure handling</p>
                  </div>
                  <span className="font-semibold text-accent">KES 45,000</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                All integrations include setup, testing, documentation & 30 days support
              </p>
            </div>
          )}
        </div>

        {/* Maintenance Section */}
        <div className="text-center text-sm text-text-secondary mt-10 space-y-1 group transition-all">
          <p>
            Maintenance & Support - <span className="text-text-primary font-medium">from KES 4,000/month</span>
          </p>
          <p className="opacity-80">
            Covers updates, uptime monitoring, and technical assistance.
          </p>
          <p className="opacity-60 text-xs group-hover:opacity-100 transition-opacity duration-300">
            Payment plans available for large projects.
          </p>
        </div>
      </div>
    </section>
  );
};
