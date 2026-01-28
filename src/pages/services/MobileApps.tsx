import { ArrowRight, CheckCircle, Smartphone, WifiOff, Bell, Gauge, Layers, Database } from "lucide-react";
import {
    SiReact,
    SiApple,
    SiAndroid,
    SiFirebase,
    SiExpo,
    SiSupabase,
    SiTypescript,
    SiSentry
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionReveal } from "../../components/SectionReveal";
import { TechCarousel } from "../../components/TechCarousel";

import { FloatingAction } from "../../components/FloatingAction";

const MobileApps = () => {
    const navigate = useNavigate();
    const CALENDLY_URL = "https://calendly.com/njugunabriian/30min";
    const WHATSAPP_NUMBER = "254114399034";

    const handleWhatsApp = () => {
        const message = "Hi CNB Code, I'm interested in building a mobile app.";
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
            icon: Layers,
            title: "iOS & Android in One",
            description: "We build cross-platform apps using React Native. You get two apps (iPhone & Android) for the price of one code base."
        },
        {
            icon: WifiOff,
            title: "Works Offline",
            description: "Bad internet? No problem. Our apps store data locally so your customers can keep using them even without bundles."
        },
        {
            icon: Bell,
            title: "Push Notifications",
            description: "Send alerts directly to your customers' pockets. Remind them about offers, orders, or appointments instantly."
        },
        {
            icon: Gauge,
            title: "Native Performance",
            description: "Smooth animations and fast loading. We build apps that feel buttery smooth, just like Instagram or WhatsApp."
        },
        {
            icon: Database,
            title: "Cloud Sync",
            description: "Data automatically syncs between the phone and your admin dashboard. Real-time updates for everyone."
        },
        {
            icon: Smartphone,
            title: "App Store Publishing",
            description: "We handle the headache of Apple App Store and Google Play Store submission, review, and approval."
        }
    ];

    const technologies = [
        { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
        { name: "iOS", icon: <SiApple />, color: "#000000" },
        { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
        { name: "Expo", icon: <SiExpo />, color: "#000020" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "Sentry", icon: <SiSentry />, color: "#362D59" }
    ];

    const process = {
        timeline: "4-8 weeks",
        included: [
            "UI/UX Design for Mobile",
            "iOS & Android Development",
            "Offline Mode Implementation",
            "Push Notification Setup",
            "Google Play Store Submission",
            "Apple App Store Submission",
            "3 months support"
        ],
        deliverables: [
            "Live Android App (.apk / Play Store)",
            "Live iOS App (TestFlight / App Store)",
            "Source Code Ownership",
            "Admin Dashboard for Data",
            "Technical Documentation"
        ]
    };

    const faqs = [
        {
            question: "Why React Native instead of 'Native'?",
            answer: "React Native lets us build for both iPhone and Android at the same time. It saves you ~40% of the cost and time compared to building two separate apps, with zero compromise on quality."
        },
        {
            question: "Do you handle the App Store?",
            answer: "Yes. Apple and Google have strict guidelines. We handle the entire submission, review, and rejection/approval process for you."
        },
        {
            question: "Can I update the app content?",
            answer: "Yes, we connect the app to an admin panel (CMS) where you can update products, banners, and text instantly without needing a new app update."
        },
        {
            question: "Do I need a server?",
            answer: "Most apps need a backend to store user data. We set this up for you using modern, scalable cloud services like Firebase or Supabase."
        },
        {
            question: "How much are the store fees?",
            answer: "Google charges a one-time $25 fee. Apple charges $99/year. You pay these directly to them; we just help you set up the accounts."
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
                        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
                                Mobile Apps (iOS & Android)
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                                Put your business in your customers' pockets. Fast, offline-capable apps published to the App Stores.
                            </p>
                            <button
                                onClick={handleCalendly}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
                            >
                                Book a Free Strategy Call
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
                                    Why Build an App?
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Websites are for discovery. Apps are for loyalty and retention.
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
                                    Built With Modern Tech
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    We use the same technology stack as Facebook, Instagram, and Airbnb
                                </p>
                            </div>

                            <TechCarousel technologies={technologies} />

                            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                                <p className="text-sm text-slate-700">
                                    <strong>Why React Native?</strong> It allows us to write code once and run it on both iPhones and Androids.
                                    This means faster development, fewer bugs, and half the maintenance cost for you.
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
                                    App Development Process
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                                    Building an app is complex. We make it simple and predictable.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">Timeline</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-2">{process.timeline}</p>
                                    <p className="text-sm text-slate-600">Design to App Store</p>
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
                                    <Smartphone className="w-8 h-8 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                                        <p className="text-slate-300 text-sm">
                                            Apps need updates for new iOS/Android versions. We provide maintenance plans to keep your
                                            app running smoothly forever, so you never have to worry about it breaking.
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
                                App Development Pricing
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8">
                                Starting from <span className="text-2xl font-bold text-blue-600">KES 120,000</span>
                            </p>

                            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 mb-6 shadow-lg">
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">MVP / Prototype</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 120,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Core features, one platform (iOS/Android)</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Standard App</p>
                                        <p className="text-2xl font-bold text-blue-600">KES 180,000</p>
                                        <p className="text-xs text-slate-500 mt-1">Both platforms, push notifs, offline mode</p>
                                    </div>
                                    <div className="hover:scale-105 transition-transform">
                                        <p className="text-sm font-semibold text-slate-900 mb-2">Complex Platform</p>
                                        <p className="text-2xl font-bold text-blue-600">Custom Quote</p>
                                        <p className="text-xs text-slate-500 mt-1">Uber-like tracking, real-time chat, etc.</p>
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
                                Pricing varies based on feature complexity
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
                                Have an App Idea?
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Don't let your idea sit in your head. Let's discuss how to turn it into a real product.
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

            <FloatingAction context="Mobile Apps" />
            <Footer />
        </div>
    );
};

export default MobileApps;
