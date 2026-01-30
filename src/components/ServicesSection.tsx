import { Globe, Smartphone, Calendar, CreditCard, MessageSquare, Wrench, CheckCircle, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import webAppImage from "../assets/web-applications.png";
import mobileAppImage from "../assets/mobile-apps.png";
import bookingImage from "../assets/booking.png";
import paymentImage from "../assets/payment.png";
import automationImage from "../assets/automation.png";
import maintenanceImage from "../assets/maintenance.png";

const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "M-Pesa & Payment APIs",
      badge: "Flagship Service",
      description: "From simple website checkouts to fully automated financial systems that scale with your business.",
      features: [
        "M-Pesa STK Push: Let customers pay in 3 clicks",
        "Zoho + M-Pesa: Auto-reconcile invoices instantly",
        "Accounting Sync: Connect to QuickBooks or Xero",
        "eTIMS Integration: Automated tax-compliant receipts"
      ],
      image: paymentImage,
      route: "/payment-integrations",
      isFeatured: true,
      color: "from-emerald-600 to-teal-500"
    },
    {
      icon: Zap,
      title: "Business Automation",
      badge: "Popular",
      description: "Automate the manual tasks that drain your time. Connect your tools and let them talk to each other.",
      features: [
        "Automated Invoicing & Receipts",
        "Low-stock alerts via WhatsApp",
        "Custom workflow automation (Make/Zapier)",
        "Real-time business notifications"
      ],
      image: automationImage,
      route: "/business-automation",
      isFeatured: true,
      color: "from-blue-600 to-indigo-500"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & AI Sales",
      description: "Turn conversations into sales with official API bots that answer complex questions 24/7.",
      features: [
        "Official API: Broadcast without being banned",
        "AI Agents: Bots that actually sell",
        "Lead Management: Auto-sync with CRM"
      ],
      image: automationImage, // Reusing automation image or relevant
      route: "/whatsapp-automation"
    },
    {
      icon: Calendar,
      title: "Online Booking & Scheduling",
      description: "Stop playing phone tag. Let customers book, pay, and get reminded automatically.",
      features: [
        "Accept bookings even when closed",
        "60% fewer no-shows with reminders",
        "Integrated M-Pesa downpayments"
      ],
      image: bookingImage,
      route: "/booking-automation"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Put your business in your customers' pockets with high-performance native experiences.",
      features: [
        "iPhone & Android (One codebase)",
        "Offline functionality",
        "Push notifications for re-engagement"
      ],
      image: mobileAppImage,
      route: "/mobile-apps"
    },
    {
      icon: Globe,
      title: "Websites & E-commerce",
      description: "Need a website to accept payments? We build payment-ready, high-converting platforms.",
      features: [
        "Built for M-Pesa + Card checkout",
        "SEO optimized for local market",
        "Mobile-first responsive design"
      ],
      image: webAppImage,
      route: "/websites"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Stop losing customers to <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">manual processes.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just build software. We build the systems that run your business automatically, from payment collection to accounting sync.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {services.map((service, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <div
                key={index}
                className={`group relative rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${isFirst ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
              >
                {/* Background Image with Dark Overlay - Adjusted Visibility */}
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-[0.5] opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Semi-transparent gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-900/20"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className={`max-w-md ${isFirst ? "lg:max-w-lg" : ""}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all text-white">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors drop-shadow-sm">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal drop-shadow-sm">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-sm font-normal text-slate-200 drop-shadow-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={service.route}>
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group/btn">
                      Go to Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6 font-medium">Not sure where to start?</p>
          <button
            onClick={scrollToContact}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 text-base sm:text-lg"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
