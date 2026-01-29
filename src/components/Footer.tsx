import { Logo } from "./Logo";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export const Footer = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "254114399034";
    const message = "Hi, I'm interested in discussing a software project";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Subtle background effects matching hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="container-content py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="relative inline-block group">
              {/* Animated glow layer */}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Subtle pulse glow */}
              <div className="absolute inset-0 bg-blue-400/10 blur-lg rounded-full animate-pulse"></div>
              <div className="relative">
                <Logo />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya - serving globally</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>4-hour response time on WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>USD, EUR, GBP, KES accepted</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get Started</h3>
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="btn-primary w-full group flex items-center justify-center"
              >
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp Us
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 rounded-lg font-medium text-white bg-white/10 hover:bg-white/20 border border-slate-700 hover:border-slate-600 transition-all"
              >
                Send a Message
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CnB Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};