import { ArrowRight, CheckCircle, Globe, ShoppingCart, Layout, Smartphone, Search, Zap } from "lucide-react";
import {
    SiReact,
    SiNextdotjs,
    SiWordpress,
    SiShopify,
    SiWoocommerce,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";

import { FloatingAction } from "../../components/FloatingAction";

const Websites = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CNB Code, I'm interested in a new website.";
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
            icon: ShoppingCart,
            title: "E-Commerce Ready",
            description: "Sell products 24/7 with automated checkout, inventory management, and M-Pesa integration built-in."
        },
        {
            icon: Smartphone,
            title: "Mobile-First Design",
            description: "60% of your customers are on phones. We build websites that look and work perfectly on every mobile device."
        },
        {
            icon: Search,
            title: "SEO Optimized",
            description: "Get found on Google. We follow current SEO best practices so customers can find you without paying for ads."
        },
        {
            icon: Zap,
            title: "Blazing Fast Speed",
            description: "Slow sites lose customers. Our sites load in under 2 seconds, keeping your visitors engaged and happy."
        },
        {
            icon: Layout,
            title: "Easy Content Updates",
            description: "Change text, images, and prices yourself. We provide an easy-to-use dashboard so you're in control."
        },
        {
            icon: Globe,
            title: "Custom Domain & Hosting",
            description: "We handle the technical setup—domain registration, SSL security, and fast hosting—so you don't have to."
        }
    ];

    const technologies = [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
        { name: "Shopify", icon: <SiShopify />, color: "#7AB55C" },
        { name: "WooCommerce", icon: <SiWoocommerce />, color: "#96588A" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" }
    ];

    const process = {
        timeline: "2-4 weeks",
        included: [
            "Custom design (no cheap templates)",
            "Mobile responsive layout",
            "SEO setup & Google indexing",
            "Content Management System (CMS)",
            "Contact forms & WhatsApp links",
            "Social media integration",
            "30-day support"
        ],
        deliverables: [
            "Live, polished website",
            "Admin login details",
            "Training video on how to edit",
            "Source code ownership",
            "Analytics dashboard setup"
        ]
    };

    const faqs = [
        {
            question: "Do you use templates?",
            answer: "We prefer custom builds to ensure your brand stands out, but we can use premium templates if you're on a tight budget. We'll discuss what's best for your goals."
        },
        {
            question: "Can I update the website myself?",
            answer: "Yes! We build with easy-to-use dashboards (like WordPress or Sanity CMS) so you can change text, photos, and products without writing code."
        },
        {
            question: "Will my website work on mobile phones?",
            answer: "Absolutely. We design mobile-first, meaning we ensure the experience is perfect on phones before we even look at the desktop version."
        },
        {
            question: "Do you include hosting?",
            answer: "We can set up hosting for you (typically KES 3,000-10,000/year depending on traffic). You'll own the account, so you're never locked in."
        },
        {
            question: "How long does it take to build?",
            answer: "A standard business website takes 2-3 weeks. An e-commerce store with many products might take 4-6 weeks. We give you a strict timeline before starting."
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
                        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                Websites & Online Stores
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                A website that works 24/7 to bring you customers. Fast, mobile-friendly, and built to sell.
                            </p>
                            <button
                                onClick={handleCalendly}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Book a Free Consultation
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
                                    More Than Just a "Pretty" Website
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We build business tools designed to convert visitors into paying customers
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
                                    Modern Tech Stack
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We use the best tools in the industry to ensure your site is secure, fast, and scalable
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>Not sure what these mean?</strong> Don't worry. We pick the right technology based on your needs.
                                    If you need a simple blog, we might use WordPress. If you need a custom web app, we'll use React.
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
                                    Clear Process, No Surprises
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    From design to launch, we keep you in the loop
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">{process.timeline}</p>
                                    <p className="text-sm text-slate-600">Average turnaround time</p>
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
                                    <Globe className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">You Own The Code</h3>
                                        <p className="text-slate-300 text-sm">
                                            Unlike Wix or Squarespace, you own your website 100%. You can move hosting,
                                            edit the code, or hire another developer anytime. No lock-in.
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
                                Transparent Pricing
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                Starting from <span className="text-2xl font-bold text-blue-600">KES 30,000</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Business Website</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 30,000</p>
                                        <p className="text-xs text-slate-500 mt-1">5 pages, contact form, SEO</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Online Store</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 40,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Product catalog, M-Pesa checkout</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Custom App</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 80,000+</p>
                                        <p className="text-xs text-slate-500 mt-1">User accounts, dashboard, database</p>
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
                                Custom quotes available for unique requirements
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
                                Ready to Build Your Online Presence?
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Free 30-minute consultation. We'll discuss your brand and what kind of website you need.
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

            <FloatingAction context="Websites" />
            <Footer />
        </div>
    );
};

export default Websites;
