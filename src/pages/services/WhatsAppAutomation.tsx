import { ArrowRight, CheckCircle, MessageSquare, Bot, Phone, Users, Zap, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
    SiWhatsapp,
    SiTwilio,
    SiOpenai,
    SiZapier,
    SiMeta,
    SiDialogflow,
    SiHubspot,
    SiSalesforce
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";

import { FloatingAction } from "../../components/FloatingAction";

const WhatsAppAutomation = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CnB Code, I'm interested in WhatsApp automation.";
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
            icon: Bot,
            title: "Next-Gen AI Agents",
            description: "Beyond simple menus. AI agents that understand natural language and answer complex product questions 24/7."
        },
        {
            icon: Zap,
            title: "Workflow Automation",
            description: "Connect WhatsApp to 1,000+ tools via Make.com or Zapier. Automate lead follow-ups and data entry."
        },
        {
            icon: Database,
            title: "CRM & Zoho Integration",
            description: "Automatically sync every conversation and lead to Salesforce, HubSpot, or Zoho CRM. No more manual copy-pasting."
        },
        {
            icon: MessageSquare,
            title: "Official API Broadcasts",
            description: "Send personalized updates to thousands of customers securely via the official Meta Cloud API, without ban risks."
        },
        {
            icon: Users,
            title: "Multi-Agent Inbox",
            description: "Let your entire sales team manage one official WhatsApp number with conversation assignment and tracking."
        },
        {
            icon: Zap,
            title: "Order & Payment Sync",
            description: "Take orders directly in WhatsApp and sync them instantly with your website inventory and M-Pesa payouts."
        }
    ];

    const technologies = [
        { name: "WhatsApp API", icon: <SiWhatsapp />, color: "#25D366" },
        { name: "Meta", icon: <SiMeta />, color: "#0081FB" },
        { name: "Twilio", icon: <SiTwilio />, color: "#F22F46" },
        { name: "OpenAI", icon: <SiOpenai />, color: "#412991" },
        { name: "Dialogflow", icon: <SiDialogflow />, color: "#FF9800" },
        { name: "Zapier", icon: <SiZapier />, color: "#FF4F00" },
        { name: "HubSpot", icon: <SiHubspot />, color: "#FF7A59" },
        { name: "Salesforce", icon: <SiSalesforce />, color: "#00A1E0" }
    ];

    const process = {
        timeline: "1-2 weeks",
        included: [
            "Official WhatsApp API Approval",
            "Meta Business Verification",
            "Chatbot Flow Design",
            "Auto-reply Configuration",
            "Catalog Setup",
            "Staff Training",
            "Ongoing Support"
        ],
        deliverables: [
            "Verified Green Tick (if eligible)",
            "Automated Chatbot System",
            "Shared Team Inbox",
            "Broadcast Campaign Dashboard",
            "CRM Connection"
        ]
    };

    const faqs = [
        {
            question: "Is this different from WhatsApp Business App?",
            answer: "Yes. The standard app has limits (max 256 broadcasts, 1 user per phone). The API allows unlimited messages, multiple users, and advanced automation."
        },
        {
            question: "Will my number get banned?",
            answer: "No. We use the official Meta Cloud API, which is whitelisted. As long as you follow Meta's quality guidelines (no spam), your number is safe."
        },
        {
            question: "Are there ongoing costs?",
            answer: "Yes. Meta charges per conversation (approx KES 0.5 - 1.5 per 24hr session). Platform providers (like Twilio or WATI) also have monthly fees. We help you pick the cheapest option."
        },
        {
            question: "Can I use AI like ChatGPT?",
            answer: "Absolutely. We can connect your WhatsApp bot to OpenAI so it can answer complex questions intelligently, not just use button menus."
        },
        {
            question: "Can I keep my current number?",
            answer: "Yes, you can upgrade your current business number to the API. However, once upgraded, it cannot go back to the regular WhatsApp app; you must use a team inbox app."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>WhatsApp Automation & Chatbots Kenya | Business API Services</title>
                <meta name="description" content="Official WhatsApp Business API integration. Build chatbots, auto-replies, and customer support systems. Verify your business with the Green Tick." />
                <link rel="canonical" href="https://cnbcode.com/whatsapp-automation" />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <SectionReveal>
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                WhatsApp & AI Sales Automation
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Scale your sales team with intelligent AI agents. Connect WhatsApp to CRM, Zoho, and 1,000+ business tools.
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
                                    Why Automate WhatsApp?
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    98% open rates mean your customers WILL see your message. Make it count.
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
                                    Official Meta Partners
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We build on the official WhatsApp Business API for reliability and scale
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>AI-Powered Responses.</strong> We can integrate OpenAI (ChatGPT) to make your bot handle complex inquiries naturally,
                                    just like a human agent would, but instantly.
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
                                    Implementation Process
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We handle the technical verification and setup for you
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">{process.timeline}</p>
                                    <p className="text-sm text-slate-600">Verification + Setup</p>
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
                                    <MessageSquare className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Avoid Blocks & Bans</h3>
                                        <p className="text-slate-300 text-sm">
                                            Using unofficial tools or bulk-sender apps gets your number banned permanently.
                                            We only use the official Business API to ensure your business line is secure.
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
                                Automation Pricing
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                Setup fees starting from <span className="text-2xl font-bold text-blue-600">KES 35,000</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Basic Chatbot</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 35,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Menu-based bot, verification setup</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">E-Commerce Bot</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 60,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Product catalog, ordering, payments</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">CRM Integration</p>
                                        <p className="text-2xl font-bold text-blue-600">Custom Quote</p>
                                        <p className="text-xs text-slate-500 mt-1">Sync chats to HubSpot/Salesforce</p>
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
                                *Meta usage fees billed separately based on conversation volume
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
                                Ready to Scale Your Support?
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Automate your customer service and sales on the world's most popular messaging app.
                            </p>
                            <button
                                onClick={scrollToContact}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Let's Build Your Chatbot
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            <FloatingAction context="WhatsApp Automation" />
            <Footer />
        </div>
    );
};

export default WhatsAppAutomation;
