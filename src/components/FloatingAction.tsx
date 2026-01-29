import { useState, useEffect } from "react";
import { MessageSquare, Calendar, X, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface FloatingActionProps {
    context?: string;
}

const FloatingAction = ({ context = "General Inquiry" }: FloatingActionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // SVG parameters
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    // Dynamic Color Logic: Blue -> Purple -> Pink -> Orange -> Green
    const getProgressColor = (percentage: number) => {
        if (percentage < 25) return "#3b82f6"; // Blue
        if (percentage < 50) return "#8b5cf6"; // Violet
        if (percentage < 75) return "#d946ef"; // Fuchsia
        return "#f97316"; // Orange (almost there!)
    };

    const currentColor = getProgressColor(scrollProgress);

    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    // Customize message based on context
    const getWhatsAppMessage = () => {
        const greeting = "Hi CnB Code,";
        let specificInterest = "I'd like to discuss a project.";

        if (context === "Payment Integrations") specificInterest = "I'm interested in payment integration (M-Pesa/Stripe).";
        else if (context === "Websites") specificInterest = "I'm interested in getting a new website.";
        else if (context === "Mobile Apps") specificInterest = "I want to build a mobile app.";
        else if (context === "Booking Automation") specificInterest = "I need help automating my booking system.";
        else if (context === "WhatsApp Automation") specificInterest = "I want to set up a WhatsApp chatbot.";
        else if (context === "Maintenance") specificInterest = "I need maintenance for my website.";

        return `${greeting} ${specificInterest}`;
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage())}`;
        window.open(url, "_blank");
    };

    const handleCalendly = () => {
        window.open(CALENDLY_URL, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
            {/* Expanded Menu */}
            <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 h-0"}`}>
                <button
                    onClick={handleCalendly}
                    className="flex items-center gap-3 bg-white text-slate-800 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all border border-slate-100 whitespace-nowrap group hover:scale-105"
                >
                    <span className="font-semibold text-sm">Book a Call</span>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                </button>

                <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-3 bg-white text-slate-800 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all border border-slate-100 whitespace-nowrap group hover:scale-105"
                >
                    <span className="font-semibold text-sm">Chat on WhatsApp</span>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <SiWhatsapp className="w-4 h-4 text-green-600" />
                    </div>
                </button>
            </div>

            {/* Main Toggle Button with Circular Progress */}
            <div className="relative flex items-center justify-center group">
                {/* Progress Circle */}
                <svg className="absolute w-[80px] h-[80px] transform -rotate-90 pointer-events-none drop-shadow-md">
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#e2e8f0"
                        strokeWidth="4"
                        fill="transparent"
                        className="opacity-50"
                    />
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke={currentColor}
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-out"
                    />
                </svg>

                {/* FAB itself */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        w-14 h-14 rounded-full shadow-2xl flex items-center justify-center 
                        transition-all duration-500 relative z-10 border-2 border-white/20
                        backdrop-blur-md
                        ${isOpen
                            ? "bg-slate-900 rotate-90 scale-90"
                            : "bg-gradient-to-br from-slate-900 to-slate-800 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                        }
                    `}
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <MessageSquare className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Back to Top Button - Appears when scrolled */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-24 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-500 z-[59] hover:bg-blue-600 hover:text-white hover:scale-110 ${scrollProgress > 15 && !isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>
        </div>
    );
};

export { FloatingAction };
