import { ArrowRight, CheckCircle, CreditCard, Zap, Shield, Globe, Clock, Code, Smartphone, LayoutDashboard, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
    SiStripe,
    SiPaypal,
    SiVisa,
    SiMastercard,
    SiApple,
    SiGoogle
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";
import { FloatingAction } from "../../components/FloatingAction";

const PaymentIntegrations = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CnB Code, I'm interested in payment integration (M-Pesa/Stripe).";
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
            icon: CreditCard,
            title: "M-Pesa & Card Checkout",
            description: "Instant STK Push for M-Pesa and secure card processing for your website or online store."
        },
        {
            icon: Zap,
            title: "Zoho + M-Pesa Sync",
            description: "Automatically reconcile your M-Pesa payments with Zoho Books, CRM, or Inventory in real-time."
        },
        {
            icon: Code,
            title: "Accounting Automation",
            description: "Connect your payment flow directly to QuickBooks or Xero to eliminate manual data entry."
        },
        {
            icon: Globe,
            title: "SMS & Airtime APIs",
            description: "Automate payouts, loyalty rewards, and instant transaction notifications to your customers."
        },
        {
            icon: Shield,
            title: "Secure & Compliant",
            description: "PCI-DSS compliant handling for international cards (Stripe/PayPal) and encrypted Daraja API connections."
        },
        {
            icon: Clock,
            title: "Business Dashboard",
            description: "Track every successful, pending, or failed payment with a custom audit trail for your finance team."
        }
    ];

    // Real brand icons for the carousel
    const technologies = [
        { name: "M-Pesa", icon: <div className="text-green-600 font-bold text-2xl">M-PESA</div>, color: "#00A651" },
        { name: "Stripe", icon: <SiStripe />, color: "#635BFF" },
        { name: "PayPal", icon: <SiPaypal />, color: "#00457C" },
        { name: "Visa", icon: <SiVisa />, color: "#1A1F71" },
        { name: "Mastercard", icon: <SiMastercard />, color: "#EB001B" },
        { name: "Apple Pay", icon: <SiApple />, color: "#000000" },
        { name: "Google Pay", icon: <SiGoogle />, color: "#4285F4" },
        { name: "Flutterwave", icon: <div className="text-orange-500 font-bold text-xl">FW</div>, color: "#F5A623" }
    ];

    const process = {
        timeline: "1-2 weeks",
        included: [
            "M-Pesa STK Push integration",
            "Test environment setup",
            "Webhook handling & logging",
            "Transaction dashboard",
            "30-day technical support",
            "API documentation"
        ],
        deliverables: [
            "Working payment system",
            "Admin dashboard access",
            "Complete API documentation",
            "Source code ownership",
            "Training session"
        ]
    };

    const faqs = [
        {
            question: "How long does M-Pesa approval take?",
            answer: "Safaricom approval typically takes 3-5 business days. We handle the entire application process for you, including documentation and testing."
        },
        {
            question: "Can I accept international payments?",
            answer: "Yes, we integrate Stripe or PayPal for card payments globally. You can accept Visa, Mastercard, and digital wallets from anywhere in the world."
        },
        {
            question: "What transaction fees apply?",
            answer: "M-Pesa charges 1.5-4% depending on transaction size. International cards typically cost 2.9% + KES 30 per transaction. We'll help you understand the exact costs for your business."
        },
        {
            question: "Do I need a business account?",
            answer: "Yes, you'll need a Safaricom Paybill or Till number for M-Pesa. For international payments, you'll need a business account with Stripe or PayPal. We can guide you through the setup."
        },
        {
            question: "What if a payment fails?",
            answer: "Our system automatically logs failed payments and can retry or notify customers. You'll have a complete dashboard showing successful, pending, and failed transactions."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>M-Pesa & Payment API Integration | CnB Code Kenya</title>
                <meta name="description" content="Automate M-Pesa payments for your business. Seamless Safaricom Daraja API, Stripe, and PayPal integration. Secure, instant payment processing in Nairobi." />
                <link rel="canonical" href="https://cnbcode.com/payment-integrations" />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <SectionReveal>
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                M-Pesa & Payment APIs
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                From simple checkouts to complete financial automation. Connect M-Pesa to Zoho, QuickBooks, and Xero.
                            </p>
                            <button
                                onClick={handleCalendly}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105"
                            >
                                Book a Free Strategy Call
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* The Automation Advantage: Flow Diagram Section */}
            <SectionReveal delay={50}>
                <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16 md:mb-24">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                                    From Payment to <span className="text-blue-600">Profit Tracking.</span>
                                </h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    We build the entire financial pipeline that handles your reconciliation automatically.
                                </p>
                            </div>

                            {/* Refined Vertical Timeline */}
                            <div className="relative max-w-2xl mx-auto">
                                {/* Vertical Line */}
                                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-slate-100 -z-10 hidden sm:block"></div>

                                <div className="space-y-12 md:space-y-20">
                                    {/* M-Pesa Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-emerald-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</div>
                                            <Smartphone className="w-6 h-6 text-[#00A651]" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">The Payment</h4>
                                            <p className="text-slate-600">Customer pays via M-Pesa STK Push. Our system detects the transaction in &lt;1s.</p>
                                        </div>
                                    </div>

                                    {/* Zoho Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">2</div>
                                            <LayoutDashboard className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">The Sync</h4>
                                            <p className="text-slate-600">Webhook confirms payment & updates Zoho/QuickBooks instantly without human intervention.</p>
                                        </div>
                                    </div>

                                    {/* WhatsApp Step */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-indigo-500 transition-colors bg-white z-10">
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center">3</div>
                                            <MessageSquare className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div className="text-center sm:text-left pt-2">
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">The Receipt</h4>
                                            <p className="text-slate-600">Customer gets a KRA-compliant PDF receipt via WhatsApp automatically, finishing the cycle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 py-12 border-t border-slate-100">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-slate-900 mb-1">0%</div>
                                    <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Manual Reconciliations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-blue-600 mb-1">100%</div>
                                    <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Tax Compliance (eTIMS)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-slate-900 mb-1">&lt; 3s</div>
                                    <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Payment Notification</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-blue-600 mb-1">24/7</div>
                                    <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Automated Support</div>
                                </div>
                            </div>
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
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                                    Enterprise-Grade Payment Tech
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We build secure, stable pipelines using official Safaricom Daraja 3.0 and Stripe APIs.
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
                                    Payment Providers We Integrate
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Industry-standard payment gateways and APIs
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>Need a specific integration?</strong> We can connect to any payment API or financial service.
                                    Just tell us what you need.
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
                                    Clear Process, Transparent Timeline
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Know exactly what you're getting and when
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">{process.timeline}</p>
                                    <p className="text-sm text-slate-600">From kickoff to live payments</p>
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
                                    <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">You Own Everything</h3>
                                        <p className="text-slate-300 text-sm">
                                            Complete source code ownership, full documentation, and admin access.
                                            No vendor lock-in, no recurring licensing fees.
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
                                Starting from <span className="text-2xl font-bold text-blue-600">KES 45,000</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">M-Pesa Integration</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 20,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Basic setup, single endpoint</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Full Payment System</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 35,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Complete processing, webhooks, invoices</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Multi-Gateway</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 55,000+</p>
                                        <p className="text-xs text-slate-500 mt-1">M-Pesa + Stripe/PayPal + dashboard</p>
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
                                Ready to Start Accepting Payments?
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Free 30-minute consultation. We'll discuss your payment needs and recommend the right solution.
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

            <FloatingAction context="Payment Integrations" />
            <Footer />
        </div>
    );
};

export default PaymentIntegrations;
