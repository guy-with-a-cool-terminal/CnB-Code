import { Globe, Smartphone, Calendar, CreditCard, MessageSquare, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import webAppImage from "../assets/web-applications.png";
import mobileAppImage from "../assets/mobile-apps.png";
import bookingImage from "../assets/booking.png";
import paymentImage from "../assets/payment.png";
import automationImage from "../assets/automation.png";
import maintenanceImage from "../assets/maintenance.png";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Websites & Online Stores",
      description: "A website that works 24/7 to bring you customers - even while you sleep",
      features: [
        "Turn visitors into customers automatically",
        "Stop managing orders via WhatsApp chaos",
        "Look professional and trustworthy to new clients",
        "Works perfectly on phones, tablets, and computers"
      ],
      image: webAppImage
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Put your business in your customers' pockets - instant access, instant sales",
      features: [
        "Customers can buy from you anywhere, anytime",
        "Give your team powerful tools without expensive software",
        "Works on both iPhone and Android (one app, both platforms)",
        "We handle App Store submission headaches for you"
      ],
      image: mobileAppImage
    },
    {
      icon: Calendar,
      title: "Online Booking & Scheduling",
      description: "Stop playing phone tag - let customers book appointments 24/7 automatically",
      features: [
        "Accept bookings even when you're closed or busy",
        "Reduce no-shows by 60% with automated reminders",
        "Stop double-booking and scheduling conflicts",
        "Get back 10+ hours weekly from phone calls"
      ],
      image: bookingImage
    },
    {
      icon: CreditCard,
      title: "Payment Integration & APIs",
      description: "Let customers pay with M-Pesa in 3 clicks - no abandoned carts, no payment delays",
      features: [
        "Get paid instantly via M-Pesa (money hits your account in seconds)",
        "Accept international cards to sell globally",
        "Connect your CRM, email tools, and accounting software",
        "Sync inventory so you never oversell"
      ],
      image: paymentImage
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Business Automation",
      description: "Reply to customer inquiries instantly, even at 2 AM - without hiring night staff",
      features: [
        "Answer common questions automatically 24/7",
        "Send booking confirmations without lifting a finger",
        "Connect all your business tools so they talk to each other",
        "Save 15+ hours weekly on repetitive tasks"
      ],
      image: automationImage
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Never lose sales to a broken website - we fix critical issues within 4 hours",
      features: [
        "Emergency fixes within 4 hours (we're always available)",
        "Regular updates keep your site secure and fast",
        "Make your site faster so customers don't leave",
        "Affordable monthly packages that grow with you"
      ],
      image: maintenanceImage
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('individual-pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-slate-900 px-4">
            Which Solution Fits Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-600 px-4">
            Stop losing customers to manual processes. Automate what drains your time.
          </p>
        </div>

        {/* Services Grid - All visible at once */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              {/* Compact image - no icon */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={`${service.title} for local businesses in Nairobi`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Pricing Link */}
                <button
                  onClick={scrollToPricing}
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
          <button
            onClick={scrollToContact}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
          >
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
