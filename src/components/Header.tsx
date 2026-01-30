import { Logo } from "./Logo";
import { Menu, X, ChevronDown, Phone, Globe, Calendar, CreditCard, Wrench, Zap } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile toggle
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false); // Desktop toggle
  const navigate = useNavigate();
  const location = useLocation();
  const desktopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navigateToService = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsDesktopServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const handleDesktopEnter = () => {
    if (desktopTimeoutRef.current) clearTimeout(desktopTimeoutRef.current);
    setIsDesktopServicesOpen(true);
  };

  const handleDesktopLeave = () => {
    desktopTimeoutRef.current = setTimeout(() => {
      setIsDesktopServicesOpen(false);
    }, 150);
  };

  const services = [
    { label: "Payment Integration", path: "/payment-integrations", icon: CreditCard, desc: "M-Pesa & Card solutions" },
    { label: "Business Automation", path: "/business-automation", icon: Zap, desc: "Accounting & Workflow sync" },
    { label: "WhatsApp Bots", path: "/whatsapp-automation", icon: SiWhatsapp, desc: "Automated chat systems" },
    { label: "Booking Automation", path: "/booking-automation", icon: Calendar, desc: "Automated scheduling" },
    { label: "Mobile Apps", path: "/mobile-apps", icon: Phone, desc: "iOS & Android solutions" },
    { label: "Websites & Stores", path: "/websites", icon: Globe, desc: "Payment-ready platforms" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-8 lg:ml-12 flex-1 relative">
            {/* Services Dropdown Trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={handleDesktopEnter}
              onMouseLeave={handleDesktopLeave}
            >
              <button
                className={`flex items-center gap-1.5 transition-colors font-medium text-sm lg:text-base ${isDesktopServicesOpen ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDesktopServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-[500px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 transition-all duration-200 origin-top-left ${isDesktopServicesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}
              >
                {services.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => navigateToService(service.path)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <service.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {service.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection("pricing")} className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Packages</button>
            <button onClick={() => scrollToSection("work")} className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Recent Work</button>
            <button onClick={() => scrollToSection("faq")} className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">FAQ</button>
            <button onClick={() => scrollToSection("why-cnb")} className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Why Us</button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center ml-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors ml-auto"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-slate-100 bg-white pb-6 pt-2">
            <nav className="flex flex-col">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-700 font-medium hover:bg-slate-50"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-200 bg-slate-50 ${isServicesOpen ? "max-h-[400px]" : "max-h-0"}`}>
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => navigateToService(service.path)}
                      className="w-full flex items-center gap-3 px-6 py-3 text-sm text-slate-600 hover:text-blue-600 active:bg-slate-100 border-l-2 border-transparent hover:border-blue-600 transition-colors text-left"
                    >
                      <service.icon className="w-4 h-4 opacity-70" />
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => scrollToSection("pricing")} className="text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50">Packages</button>
              <button onClick={() => scrollToSection("work")} className="text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50">Recent Work</button>
              <button onClick={() => scrollToSection("faq")} className="text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50">FAQ</button>
              <button onClick={() => scrollToSection("why-cnb")} className="text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-50">Why Us</button>

              <div className="px-4 mt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-md active:scale-95"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};