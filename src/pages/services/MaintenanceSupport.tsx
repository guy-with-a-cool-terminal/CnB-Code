import { ArrowRight, CheckCircle, Shield, RefreshCw, Clock, Activity, Lock, LifeBuoy } from "lucide-react";
import {
    SiAmazon,
    SiDigitalocean,
    SiCloudflare,
    SiGooglecloud,
    SiLinux,
    SiGithub,
    SiSentry,
    SiWordpress
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";

import { FloatingAction } from "../../components/FloatingAction";

const MaintenanceSupport = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CNB Code, I'm interested in maintenance support.";
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
            icon: Shield,
            title: "Security Updates",
            description: "We proactively patch security vulnerabilities before hackers find them. Keep your customer data safe."
        },
        {
            icon: Clock,
            title: "Uptime Monitoring",
            description: "We watch your site 24/7. If it goes down, we know instantly and fix it, often before you even notice."
        },
        {
            icon: RefreshCw,
            title: "Daily Backups",
            description: "Accidentally deleted a file? Server crashed? No problem. We can restore your site to exactly how it was yesterday."
        },
        {
            icon: Activity,
            title: "Performance Optimization",
            description: "Speed matters. We constantly tune your database and images to ensure your site loads fast as you grow."
        },
        {
            icon: Lock,
            title: "SSL Certificate Management",
            description: "We ensure your 'https' green lock never expires, so users never see that scary 'Not Secure' warning."
        },
        {
            icon: LifeBuoy,
            title: "Emergency Support",
            description: "Something broken? Call us. We prioritize support tickets so your business doesn't stop running."
        }
    ];

    const technologies = [
        { name: "AWS", icon: <SiAmazon />, color: "#232F3E" },
        { name: "DigitalOcean", icon: <SiDigitalocean />, color: "#0080FF" },
        { name: "Cloudflare", icon: <SiCloudflare />, color: "#F38020" },
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
        { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "Sentry", icon: <SiSentry />, color: "#362D59" },
        { name: "WordPress", icon: <SiWordpress />, color: "#21759B" }
    ];

    const process = {
        timeline: "Ongoing",
        included: [
            "24/7 Uptime Monitoring",
            "Weekly Plugin/Core Updates",
            "Daily Cloud Backups",
            "Security Firewall Setup",
            "Malware Scanning",
            "Database Optimization",
            "Monthly Health Reports"
        ],
        deliverables: [
            "Peace of mind",
            "Monthly PDF Report",
            "Fast Issue Resolution",
            "Secure Website",
            "Improved Loading Speed"
        ]
    };

    const faqs = [
        {
            question: "Do I really need a maintenance plan?",
            answer: "If your website generates revenue, yes. Websites are like cars; they need oil changes (updates) or the engine will eventually break."
        },
        {
            question: "What happens if my site gets hacked?",
            answer: "If you're on our plan, we fix it for FREE. We'll identify the breach, clean the malware, and restore from a clean backup immediately."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes. Our plans are month-to-month. No long-term contracts. You can cancel with 30 days notice."
        },
        {
            question: "Does this include content updates?",
            answer: "Our 'Standard' and 'Premium' plans include hours for small content changes (e.g., changing a phone number, adding a blog post). Detailed major overhauls are billed separately."
        },
        {
            question: "I use Wix/Shopify, do I need this?",
            answer: "No, platform-managed sites like Shopify handle their own security. This service is for self-hosted sites (WordPress, Custom Apps) where YOU are responsible for the server."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <SectionReveal>
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 right-1/4 w-72 h-72 bg-slate-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                Maintenance & Support
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Sleep soundly knowing your website is secure, backed up, and running fast. We handle the tech headaches.
                            </p>
                            <button
                                onClick={handleCalendly}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Get Protected
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
                                    Proactive Protection
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Don't wait for something to break. Prevent it.
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
                                    Enterprise-Grade Infrastructure
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We use industry-standard tools to monitor and protect your assets
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>Daily Cloud Backups.</strong> We store your backups on encrypted off-site servers (like AWS S3).
                                    Even if your entire hosting account gets deleted, we can restore your site in minutes.
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
                                    What We Do Monthly
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Invisible work that keeps your business visible
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Availability</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">99.9%</p>
                                    <p className="text-sm text-slate-600">Uptime Guarantee</p>
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
                                    <LifeBuoy className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Priority Support</h3>
                                        <p className="text-slate-300 text-sm">
                                            As a maintenance client, your requests skip the line. If you need something fixed,
                                            you're our first priority.
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
                                Peace of Mind Pricing
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                Starting from <span className="text-2xl font-bold text-blue-600">KES 4,000 / mo</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Basic Care</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 4,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Backups + Updates + Monitoring</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Standard Plan</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 8,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Basic + 1hr content updates</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Premium/App</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 15,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Apps/Large sites + 3hr updates</p>
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
                                Cancel anytime. No long-term contracts.
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
                                Protect Your Investment
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                You wouldn't drive a car for 5 years without an oil change. Don't do it to your business website.
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

            <FloatingAction context="Maintenance" />
            <Footer />
        </div>
    );
};

export default MaintenanceSupport;
