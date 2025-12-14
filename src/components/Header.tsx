import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "Services", id: "services" },
    { label: "Packages", id: "pricing" },
    { label: "Recent Work", id: "work" },
    { label: "FAQ", id: "faq" },
    { label: "Why Us", id: "why-cnb" },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          <Logo />

          {/* Desktop Navigation - Positioned left of center */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-8 lg:ml-12 flex-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA - Pushed to far right */}
          <div className="hidden md:flex items-center ml-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-5 py-2 rounded-lg font-medium transition-all text-sm lg:text-base shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors ml-auto"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="py-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2 pb-1">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all text-sm shadow-sm"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};