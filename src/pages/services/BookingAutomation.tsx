import { ArrowRight, CheckCircle, Calendar, Clock, Bell, UserCheck, Link, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaWindows } from "react-icons/fa";
import {
    SiGooglecalendar,
    SiGoogle,
    SiZoom,
    SiCalendly,
    SiGmail,
    SiHubspot,
    SiZendesk
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";

import { FloatingAction } from "../../components/FloatingAction";

const BookingAutomation = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CnB Code, I'm interested in automating my booking system.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const handleCalendly = () => {
        window.open(CALENDLY_URL, "_blank");
    };

    const scrollToContact = () => {
        navigate("/#contact");
        setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const scrollToPricing = () => {
        navigate("/#individual-pricing");
        setTimeout(() => {
            document.getElementById("individual-pricing")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const features = [
        {
            icon: Calendar,
            title: "24/7 Self-Booking",
            description: "Let clients book appointments anytime, even when you're sleeping. No more back-and-forth phone tag."
        },
        {
            icon: Bell,
            title: "Automated Reminders",
            description: "Reduce no-shows by 80%. System sends SMS and Email reminders 24 hours and 1 hour before the meeting."
        },
        {
            icon: Link,
            title: "Calendar Sync",
            description: "Syncs with your Google Calendar or Outlook. If you block a time personally, clients can't book it. No double bookings."
        },
        {
            icon: Clock,
            title: "Time Zone Detection",
            description: "Working with international clients? The system automatically adjusts times to their local timezone."
        },
        {
            icon: UserCheck,
            title: "Intake Forms",
            description: "Ask questions before the meeting. 'What is your budget?', 'What do you need help with?' - answers go straight to your email."
        },
        {
            icon: Settings,
            title: "Payment Collection",
            description: "Charge a deposit or full fee upfront via M-Pesa or Card to secure the slot. Filters out non-serious leads."
        }
    ];

    const technologies = [
        { name: "Google Calendar", icon: <SiGooglecalendar />, color: "#4285F4" },
        { name: "Zoom", icon: <SiZoom />, color: "#2D8CFF" },
        { name: "Google Meet", icon: <SiGoogle />, color: "#00AC47" },
        { name: "Gmail", icon: <SiGmail />, color: "#EA4335" },
        { name: "Outlook", icon: <FaWindows />, color: "#0078D4" },
        { name: "Calendly", icon: <SiCalendly />, color: "#006BFF" },
        { name: "HubSpot", icon: <SiHubspot />, color: "#FF7A59" },
        { name: "Zendesk", icon: <SiZendesk />, color: "#03363D" }
    ];

    const process = {
        timeline: "1 week",
        included: [
            "Account setup (Calendly/Acuity/Custom)",
            "Calendar sync integration",
            "Payment gateway connection (Stripe/M-Pesa)",
            "Email/SMS reminder templates",
            "Zoom/Google Meet auto-link setup",
            "Embedding on your website",
            "30-day support"
        ],
        deliverables: [
            "Fully automated booking system",
            "Admin ability to manage schedule",
            "Video training for your staff",
            "Payment connection verification"
        ]
    };

    const faqs = [
        {
            question: "Does it work with my current calendar?",
            answer: "Yes, we sync with Google Calendar, Outlook, iCloud, and Office 365. You keep using your calendar as normal; the system just adds appointments to it."
        },
        {
            question: "Can I charge for appointments?",
            answer: "Absolutely. We can set it up to require a payment (deposit or full amount) via M-Pesa or Card before the booking is confirmed."
        },
        {
            question: "What if I need to cancel?",
            answer: "You can cancel or reschedule easily from your calendar or the dashboard. The client will be automatically notified via email/SMS."
        },
        {
            question: "Does this replace my receptionist?",
            answer: "It handles the tedious work of finding time slots, but your receptionist can still manage the system. It frees them up to focus on customer service instead of scheduling logistics."
        },
        {
            question: "Is there a monthly fee?",
            answer: "Depending on the tool used (e.g., Calendly Pro), there might be a small monthly subscription (approx $10-$15) paid to the software provider. We'll advise on the best option for your budget."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Booking & Scheduling Automation | CnB Code Kenya</title>
                <meta name="description" content="Automate your appointments. Self-service booking systems for doctors, consultants, and lawyers in Kenya. Reduce no-shows with SMS reminders." />
                <link rel="canonical" href="https://cnbcode.com/booking-automation" />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <SectionReveal>
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-1/4 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                Booking & Scheduling Automation
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Stop playing phone tag. Let clients book appointments 24/7 directly into your calendar.
                            </p>
                            <button
                                onClick={handleCalendly}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Book a Strategy Call
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Detailed Features Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                    Fill Your Schedule Automatically
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Designed for consultants, doctors, lawyers, and service businesses
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-200">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Technical Credibility Section with Animated Carousel */}
            <SectionReveal delay={200}>
                <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                    Seamless Integrations
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We connect the booking system to the tools you already use every day
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>No technical skills needed.</strong> Once we set it up, it just works.
                                    New bookings appear on your phone's calendar automatically.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Process Transparency Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                    Setup Process
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We handle all the configuration so you can start taking bookings in a few days
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">{process.timeline}</p>
                                    <p className="text-sm text-slate-600">Quick implementation</p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">What's Included</h3>
                                    <ul className="space-y-2">
                                        {process.included.slice(0, 3).map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-3">+ {process.included.length - 3} more</p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">What You Get</h3>
                                    <ul className="space-y-2">
                                        {process.deliverables.slice(0, 3).map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-3">+ {process.deliverables.length - 3} more</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 text-white">
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Reduce No-Shows</h3>
                                        <p className="text-slate-300 text-sm">
                                            Our automated SMS reminders are proven to reduce missed appointments by over 80%.
                                            That means more revenue for your business without extra work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Pricing Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                Simple Setup Pricing
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                One-time setup fee from <span className="text-2xl font-bold text-blue-600">KES 55,000</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Basic Booking</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 55,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Calendar + Form + Email Reminders</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Pro Automation</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 75,000</p>
                                        <p className="text-xs text-slate-500 mt-1">SMS Reminders + Payments + Zoom</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Custom Workflow</p>
                                        <p className="text-2xl font-bold text-blue-600">Custom Quote</p>
                                        <p className="text-xs text-slate-500 mt-1">CRM Integration, Multi-staff routing</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={scrollToPricing}
                                className="bg-white border-2 border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                View Full Pricing
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <p className="text-sm text-slate-500 mt-4">
                                *Software subscription fees (if any) are paid directly to provider
                            </p>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* FAQ Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                    Common Questions
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                                        <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Contact CTA Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                Ready to Save Time?
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Stop wasting hours on scheduling emails. Automate it today.
                            </p>
                            <button
                                onClick={handleWhatsApp}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Chat on WhatsApp
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            <FloatingAction context="Booking Automation" />
            <Footer />
        </div>
    );
};

export default BookingAutomation;
