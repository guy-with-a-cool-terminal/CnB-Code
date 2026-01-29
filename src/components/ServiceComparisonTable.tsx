import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceComparisonTable = () => {
    const services = [
        {
            need: "Get more customers online",
            solution: "Websites & Online Stores",
            route: "/websites",
            price: "KES 30,000"
        },
        {
            need: "Accept M-Pesa payments instantly",
            solution: "Payment Integrations",
            route: "/payment-integrations",
            price: "KES 45,000"
        },
        {
            need: "Stop phone tag for appointments",
            solution: "Online Booking",
            route: "/booking-automation",
            price: "KES 55,000"
        },
        {
            need: "Automate customer responses 24/7",
            solution: "WhatsApp Automation",
            route: "/whatsapp-automation",
            price: "Included in packages"
        },
        {
            need: "Put your business in customers' pockets",
            solution: "Mobile Apps",
            route: "/mobile-apps",
            price: "KES 120,000"
        },
        {
            need: "Keep your website running smoothly",
            solution: "Maintenance & Support",
            route: "/maintenance-support",
            price: "KES 4,000/month"
        }
    ];

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                            Find the right solution for your business challenge
                        </p>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">What You Need</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Recommended Solution</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Starting Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${index === services.length - 1 ? 'border-b-0' : ''
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-sm text-slate-700">{service.need}</td>
                                        <td className="px-6 py-4">
                                            <Link to={service.route}>
                                                <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group">
                                                    {service.solution}
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-slate-200">
                                <p className="text-sm text-slate-600 mb-2">{service.need}</p>
                                <Link to={service.route}>
                                    <p className="text-base font-semibold text-blue-600 hover:text-blue-700 mb-2 inline-flex items-center gap-1 group">
                                        {service.solution}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </p>
                                </Link>
                                <p className="text-sm font-semibold text-slate-900">{service.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="text-sm sm:text-base text-slate-700 mb-4">
                            Still confused? <button
                                onClick={() => {
                                    const phoneNumber = "254114399034";
                                    const message = "Hi, I'm not sure which package is right for me. Can you help?";
                                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                    window.open(whatsappUrl, '_blank');
                                }}
                                className="font-semibold text-blue-600 hover:text-blue-700 underline"
                            >
                                Let's talk
                            </button> and we'll recommend the right solution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ServiceComparisonTable };
