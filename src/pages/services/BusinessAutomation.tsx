import { ArrowRight, CheckCircle, Zap, Shield, Globe, Clock, Code, Smartphone, LayoutDashboard, MessageSquare, Database, BarChart3, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
    SiZoho,
    SiQuickbooks,
    SiXero,
    SiWhatsapp,
    SiZapier,
    SiOpenai,
    SiGooglecloud
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";
import { FloatingAction } from "../../components/FloatingAction";

const BusinessAutomation = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CnB Code, I'm interested in Business Automation for my company.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const handleCalendly = () => {
        window.open(CALENDLY_URL, "_blank");
    };

    const scrollToPricing = () => {
        navigate("/#individual-pricing");
        setTimeout(() => {
            document.getElementById("individual-pricing")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const features = [
        {
            icon: LayoutDashboard,
            title: "Accounting Automation",
            description: "Sync invoices, payments, and expenses between your bank, M-Pesa, and Zoho/QuickBooks/Xero automatically."
        },
        {
            icon: MessageSquare,
            title: "WhatsApp CRM Sync",
            description: "Turn conversations into trackable leads. Automatically save customer data from WhatsApp into your CRM system."
        },
        {
            icon: BarChart3,
            title: "eTIMS Integration",
            description: "Automate your KRA eTIMS compliance. Generate tax-ready receipts for every online or mobile payment instantly."
        },
        {
            icon: Workflow,
            title: "Custom Workflows",
            description: "Connect your existing tools (Excel, Google Sheets, Email, SMS) into one seamless, automated business machine."
        },
        {
            icon: Smartphone,
            title: "Inventory & Alerts",
            description: "Get automated WhatsApp alerts when stock is low or when a high-value order is placed on your website."
        },
        {
            icon: Shield,
            title: "Error-Free Operations",
            description: "Eliminate human data-entry errors. Our systems work 24/7 without getting tired or missing a single record."
        }
    ];

    const technologies = [
        { name: "Zoho", icon: <SiZoho />, color: "#EF0000" },
        { name: "QuickBooks", icon: <SiQuickbooks />, color: "#2CA01C" },
        { name: "Xero", icon: <SiXero />, color: "#13B5EA" },
        { name: "M-Pesa", icon: <div className="text-green-600 font-bold">M-PESA</div>, color: "#00A651" },
        { name: "WhatsApp", icon: <SiWhatsapp />, color: "#25D366" },
        { name: "Zapier", icon: <SiZapier />, color: "#FF4F00" },
        { name: "OpenAI", icon: <SiOpenai />, color: "#412991" },
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" }
    ];

    const process = {
        timeline: "2-4 weeks",
        included: [
            "Infrastructure Audit",
            "API Connection Mapping",
            "Workflow Logic Design",
            "Custom Dashboard Development",
            "Security & encryption setup",
            "Staff Training & Demo"
        ],
        deliverables: [
            "Automated sync system",
            "Operational dashboard",
            "Technical documentation",
            "Source code ownership",
            "Maintenance plan"
        ]
    };

    const faqs = [
        {
            question: "What is business automation exactly?",
            answer: "It's using software to handle repetitive tasks—like recording a payment in your books, sending a receipt to a customer, or updating inventory—without human intervention."
        },
        {
            question: "Which accounting software do you support?",
            answer: "We specialize in Zoho Books, QuickBooks Online, and Xero. We can also build custom connectors for legacy ERP systems if they have an API."
        },
        {
            question: "Is automation expensive for small businesses?",
            answer: "Our goal is ROI. If automation saves you 10 hours a week or prevents 5 lost orders, it usually pays for itself in under 3 months. We have packages starting from KES 55,000."
        },
        {
            question: "Does it work with eTIMS?",
            answer: "Yes. We can integrate with VSCU or Online eTIMS APIs to ensure every payment captured by your system automatically triggers the generation of a KRA-compliant receipt."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Business Automation Kenya | Accounting & CRM Sync | CnB Code</title>
                <meta name="description" content="Automate your manual business processes. Integrate M-Pesa with Zoho, QuickBooks, and WhatsApp. eTIMS compliant automation for Kenyan SMEs." />
                <link rel="canonical" href="https://cnbcode.com/business-automation" />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <SectionReveal>
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                Run Your Business on <span className="text-blue-600">Autopilot.</span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Stop the manual copy-pasting. We connect your payments, accounting, and customer chats into one seamless automated system.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={handleCalendly}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105"
                                >
                                    Book a Free Consultation
                                    <Zap className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleWhatsApp}
                                    className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-600 transition-all inline-flex items-center gap-2"
                                >
                                    Chat with an Engineer
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Why Automation Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                    Why Kenyan SMEs are Automating
                                </h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    Growth is impossible if the founder is stuck doing data entry.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                            <feature.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Connection Flow Visualization */}
            <SectionReveal delay={150}>
                <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">The "Zero-Touch" Workflow</h2>

                            {/* Refined Vertical Timeline */}
                            <div className="relative max-w-2xl mx-auto">
                                {/* Vertical Line */}
                                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-slate-100 -z-10 hidden sm:block"></div>

                                <div className="space-y-12 md:space-y-20">
                                    {/* M-Pesa Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-emerald-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</div>
                                            <Smartphone className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">Payment Received</h4>
                                            <p className="text-slate-600">Customer pays via M-Pesa. Our system detects the transaction in milliseconds and triggers the automation.</p>
                                        </div>
                                    </div>

                                    {/* Accounting Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">2</div>
                                            <Database className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">Accounting Recorded</h4>
                                            <p className="text-slate-600">The invoice in Zoho/QuickBooks is marked 'Paid' and matched to the correct customer account instantly.</p>
                                        </div>
                                    </div>

                                    {/* Reporting & Tax Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-indigo-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center">3</div>
                                            <BarChart3 className="w-6 h-6 text-indigo-500" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">Reporting & Tax</h4>
                                            <p className="text-slate-600">A KRA eTIMS receipt is generated and a WhatsApp notification is sent to you and the customer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Tech Stack Carousel */}
            <SectionReveal delay={200}>
                <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-slate-900">Tools We Integrate</h2>
                            <TechCarousel technologies={technologies} />
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* FAQ Section */}
            <SectionReveal delay={100}>
                <section className="py-12 md:py-16 lg:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Common Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100 transition-shadow hover:shadow-sm">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Final CTA */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Stop Working Like a Robot.</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Hire us to build the automated systems your team deserves. Talk to us about your automation goals today.
                    </p>
                    <button
                        onClick={handleCalendly}
                        className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
                    >
                        Book Your Free Demo
                    </button>
                </div>
            </section>

            <FloatingAction context="Business Automation" />
            <Footer />
        </div>
    );
};

export default BusinessAutomation;
