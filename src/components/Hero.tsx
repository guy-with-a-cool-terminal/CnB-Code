import { ArrowRight, CheckCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "254114399034";
    const message = "Hi, I'm interested in discussing a software project";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">

      {/* Very subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-slate-900 px-4 tracking-tight">
            What If Your Website Could Bring You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">More Sales?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Most websites just sit there. We build automated sales engines that work 24/7 to capture leads, process payments, and grow your revenue.
          </p>

          {/* CTAs - removed badges, cleaner */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white group text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center"
            >
              Start Growing
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 group text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow transition-all inline-flex items-center justify-center"
            >
              <SiWhatsapp className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-[#25D366]" />
              WhatsApp Us
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-4 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Free Strategy Call</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Pay After milestones</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> 100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };