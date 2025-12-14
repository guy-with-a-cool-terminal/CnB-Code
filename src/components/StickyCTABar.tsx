import { useState, useEffect } from "react";
import { MessageSquare, Mail, Calendar } from "lucide-react";

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Replace this with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";

  useEffect(() => {
    const handleScroll = () => {
      // Show bar when user scrolls past hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "254114399034";
    const message = "Hi, I'm interested in discussing a software project";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendly = () => {
    // Open Calendly in new tab
    // Alternative: Use Calendly's popup widget by including their script
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-transform duration-300 pb-safe ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex-1 sm:flex-none sm:min-w-[130px] px-2 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-1 sm:gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </button>

          {/* Get Quote */}
          <button
            onClick={scrollToContact}
            className="flex-1 sm:flex-none sm:min-w-[130px] px-2 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-1 sm:gap-2"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Get Quote</span>
            <span className="sm:hidden">Quote</span>
          </button>

          {/* Book Call - Now visible on all screens */}
          <button
            onClick={openCalendly}
            className="flex-1 sm:flex-none sm:min-w-[130px] px-2 sm:px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-1 sm:gap-2"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Book Call</span>
            <span className="sm:hidden">Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { StickyCTABar };
