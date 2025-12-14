import { ArrowRight, MessageSquare } from "lucide-react";

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 px-4">
            What If Your Website Brought You 5 New Customers Every Day?
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            That's what happens when you stop using template sites and start using systems built for YOUR business. From KES 30K.
          </p>

          {/* CTAs - removed badges, cleaner */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white group text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 group text-sm sm:text-base px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow transition-all inline-flex items-center justify-center"
            >
              <MessageSquare className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };