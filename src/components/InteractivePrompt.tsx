import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

const InteractivePrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showPersistentButton, setShowPersistentButton] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  // Context-aware messages based on page section
  const getContextMessage = () => {
    if (currentSection === 'services') return "See something you need?";
    if (currentSection === 'pricing') return "Questions about pricing?";
    if (currentSection === 'reviews') return "Ready to get started?";
    return "Have a project in mind?";
  };

  // Detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    const sections = document.querySelectorAll('#services, #pricing, #reviews, #process');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('cnb-prompt-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setShowPersistentButton(true);
      return;
    }

    // Show prompt after 10 seconds instead of 30 for better engagement
    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    setShowPersistentButton(true);
    sessionStorage.setItem('cnb-prompt-dismissed', 'true');
  };

  const handlePersistentButtonClick = () => {
    setIsVisible(true);
    setIsDismissed(false);
    setShowPersistentButton(false);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "254114399034";
    const message = encodeURIComponent("Hi, I'm interested in discussing a software project");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    handleDismiss();
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    handleDismiss();
  };

  return (
    <>
      {/* Main popup - Smaller and more responsive, positioned above sticky bar */}
      <div
        className={`fixed bottom-[72px] sm:bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-[280px] sm:max-w-[320px] transition-all duration-500 ease-out ${
          isVisible && !isDismissed
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 sm:p-4 relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-6">
            <p className="text-sm sm:text-base text-slate-900 font-semibold mb-2">
              {getContextMessage()}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              4 hour response on WhatsApp
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleWhatsApp}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors text-left font-medium"
              >
                → WhatsApp Us
              </button>
              <button
                onClick={scrollToContact}
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors text-left"
              >
                → Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent chat button - Smaller, positioned above sticky bar */}
      {showPersistentButton && (
        <button
          onClick={handlePersistentButtonClick}
          className="fixed bottom-[72px] sm:bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Chat with us"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export { InteractivePrompt };
