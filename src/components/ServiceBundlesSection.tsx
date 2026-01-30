import { Check, Zap, ShoppingBag, Briefcase, UtensilsCrossed, Calendar } from "lucide-react";

const ServiceBundlesSection = () => {
  const bundles = [
    {
      name: "Salon Payments & Booking",
      subtitle: "For wellness & beauty businesses",
      price: "KES 45,000",
      priceUSD: "≈ USD 345",
      icon: Calendar,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      popular: false,
      features: [
        "M-Pesa STK Push Integration",
        "24/7 automated booking system",
        "WhatsApp appointment reminders",
        "Integrated payment-ready website",
      ],
      idealFor: "Salons, spas, barbershops",
    },
    {
      name: "Retail Payments & Inventory",
      subtitle: "For modern product sellers",
      price: "KES 65,000",
      priceUSD: "≈ USD 500",
      icon: ShoppingBag,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      popular: true,
      features: [
        "M-Pesa + Card checkout integration",
        "Inventory sync to Accounting (Zoho)",
        "Automated low-stock WhatsApp alerts",
        "Professional e-commerce storefront",
      ],
      idealFor: "Retail shops, fashion stores",
    },
    {
      name: "Professional Automation",
      subtitle: "For consultants & agencies",
      price: "KES 35,000",
      priceUSD: "≈ USD 270",
      icon: Briefcase,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: false,
      features: [
        "Automated Lead Capture & CRM sync",
        "Payment integration (Invoicing)",
        "Portfolio showcase & testimonials",
        "Google Maps business integration",
      ],
      idealFor: "Consultants, freelancers",
    },
    {
      name: "Restaurant Payments & Orders",
      subtitle: "For food & hospitality",
      price: "KES 55,000",
      priceUSD: "≈ USD 420",
      icon: UtensilsCrossed,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      popular: false,
      features: [
        "Online menu & ordering with M-Pesa",
        "Automated kitchen order alerts",
        "Real-time payment confirmations",
        "Table reservation automation",
      ],
      idealFor: "Restaurants, cafes, catering",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            Popular Packages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-slate-900 px-4">
            Ready-Made Business Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-600 px-4">
            Everything your business type needs. No guessing what to buy.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {bundles.map((bundle, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${bundle.popular
                ? "bg-gradient-to-br from-blue-50 to-white border-blue-500 ring-4 ring-blue-500/20 shadow-xl scale-105 z-10"
                : `bg-white ${bundle.borderColor} hover:shadow-lg`
                }`}
            >
              {/* Popular Badge */}
              {bundle.popular && (
                <div className="absolute top-0 inset-x-0 bg-blue-600 text-white text-xs font-bold text-center py-1 uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Icon & Title */}
                <div className="text-center mb-4 sm:mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full ${bundle.bgColor} mb-3 mx-auto`}>
                    <bundle.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${bundle.iconColor}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                    {bundle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">{bundle.subtitle}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-200">
                  <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {bundle.price}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">{bundle.priceUSD}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {bundle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="bg-slate-50 rounded-lg p-2.5 sm:p-3 mb-4 sm:mb-5">
                  <p className="text-xs font-semibold text-slate-700">{bundle.idealFor}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 ${bundle.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white border-2 border-slate-300 text-slate-900 hover:border-blue-400 hover:text-blue-600"
                    }`}
                >
                  Get This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Option */}
        <div className="max-w-3xl mx-auto text-center p-5 sm:p-6 md:p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 px-4">
            Don't See Your Business Type?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-4 sm:mb-6 px-4">
            We create custom packages for any business. Tell us what you need.
          </p>
          <button
            onClick={() => {
              const phoneNumber = "254114399034";
              const message = "Hi, I need a custom software package for my business.";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-slate-900 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 inline-flex items-center gap-2"
          >
            Request Custom Package
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Value Proposition */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            <strong>Why bundles?</strong> These packages include exactly what each business type needs - no bloat, no missing pieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export { ServiceBundlesSection };
