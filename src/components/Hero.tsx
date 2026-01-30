import { ArrowRight, LayoutDashboard, Receipt, Smartphone, MessageSquare } from "lucide-react";
import { SiZoho, SiStripe, SiPaypal, SiOpenai } from "react-icons/si";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesScroll = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -ml-64 -mb-64"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <div className="text-center lg:text-left space-y-8 md:space-y-10 max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                Get Paid via M-Pesa in <span className="text-blue-600">3 Clicks.</span>
                <span className="block mt-2 text-slate-600 text-xl sm:text-3xl lg:text-4xl">Sync to Your Accounting Automatically.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect M-Pesa payments to your accounting software. Automate invoices, receipts, and customer messages instantly.
              </p>
            </div>

            {/* Horizontal Scrolling Trust Badges - Moving Left */}
            <div className="relative py-2 max-w-[calc(100vw-2rem)] sm:max-w-none overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

              <div className="overflow-hidden group/carousel w-full">
                <div className="flex gap-8 sm:gap-12 items-center animate-scroll-badges py-2 w-max">
                  {/* Badge List (Original) */}
                  {[
                    { node: <div className="text-[#00A651] font-black text-lg sm:text-xl tracking-tighter">M-PESA</div>, label: "Daraja 3.0 API" },
                    { node: <SiZoho className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF0000]" />, label: "Zoho" },
                    { node: <SiStripe className="w-7 h-7 sm:w-9 sm:h-9 text-[#635BFF]" />, label: "Stripe" },
                    { node: <SiPaypal className="w-6 h-6 sm:w-8 sm:h-8 text-[#00457C]" />, label: "PayPal" },
                    { node: <SiOpenai className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" />, label: "AI Integrated" },
                    { node: <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-slate-800 flex items-center justify-center text-[9px] sm:text-[10px] font-black text-white">KRA</div>, label: "eTIMS" },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center flex-shrink-0 group/icon transition-all">
                      <div className="h-10 flex items-center justify-center opacity-85 group-hover/icon:opacity-100 group-hover/icon:scale-105 transition-all">
                        {badge.node}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 tracking-tighter uppercase mt-1 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity duration-500 whitespace-nowrap">{badge.label}</span>
                    </div>
                  ))}
                  {/* Badge List (Duplicate for loop) */}
                  {[
                    { node: <div className="text-[#00A651] font-black text-lg sm:text-xl tracking-tighter">M-PESA</div>, label: "Daraja 3.0 API" },
                    { node: <SiZoho className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF0000]" />, label: "Zoho" },
                    { node: <SiStripe className="w-7 h-7 sm:w-9 sm:h-9 text-[#635BFF]" />, label: "Stripe" },
                    { node: <SiPaypal className="w-6 h-6 sm:w-8 sm:h-8 text-[#00457C]" />, label: "PayPal" },
                    { node: <SiOpenai className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" />, label: "AI Integrated" },
                    { node: <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-slate-800 flex items-center justify-center text-[9px] sm:text-[10px] font-black text-white">KRA</div>, label: "eTIMS" },
                  ].map((badge, i) => (
                    <div key={`dup-${i}`} className="flex flex-col items-center flex-shrink-0 group/icon transition-all">
                      <div className="h-10 flex items-center justify-center opacity-85 group-hover/icon:opacity-100 group-hover/icon:scale-105 transition-all">
                        {badge.node}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 tracking-tighter uppercase mt-1 lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity duration-500 whitespace-nowrap">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:pt-6">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white group px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center text-sm sm:text-base whitespace-nowrap"
              >
                Get M-Pesa Integration
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleServicesScroll}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-sm transition-all hover:border-slate-300 inline-flex items-center justify-center text-sm sm:text-base whitespace-nowrap"
              >
                See All Solutions
              </button>
            </div>
          </div>

          {/* Right Column: Refined Vertical Process Flow (Desktop Only) */}
          <div className="hidden lg:block relative w-full h-full max-w-md ml-auto lg:pl-12">
            <div className="flex flex-col items-center justify-center space-y-8 py-6">

              {/* Step 1: Payment */}
              <div className="flex items-center gap-6 w-full max-w-sm group/step transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover/step:border-emerald-200 group-hover/step:shadow-md transition-all duration-300">
                  <Smartphone className="w-7 h-7 text-[#00A651]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-0.5">M-Pesa Payment Received</p>
                  <p className="text-[11px] font-medium text-slate-500">Automatic detection in &lt;1s</p>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="ml-[-190px]">
                <ArrowRight className="w-5 h-5 text-blue-500/20 rotate-90" />
              </div>

              {/* Step 2: Accounting */}
              <div className="flex items-center gap-6 w-full max-w-sm group/step transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover/step:border-blue-200 group-hover/step:shadow-md transition-all duration-300">
                  <LayoutDashboard className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-0.5">Accounting Updated</p>
                  <p className="text-[11px] font-medium text-slate-500">Zoho / QuickBooks synchronized</p>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="ml-[-190px]">
                <ArrowRight className="w-5 h-5 text-blue-500/20 rotate-90" />
              </div>

              {/* Step 3: Notify */}
              <div className="flex items-center gap-6 w-full max-w-sm group/step transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover/step:border-indigo-200 group-hover/step:shadow-md transition-all duration-300">
                  <MessageSquare className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight mb-0.5">Customer Notified</p>
                  <p className="text-[11px] font-medium text-slate-500">Receipt sent via WhatsApp</p>
                </div>
              </div>

            </div>

            {/* Background decorative path - Subtle */}
            <div className="absolute top-1/2 left-7 -translate-y-1/2 w-0.5 h-1/2 bg-gradient-to-b from-emerald-500/10 via-blue-500/10 to-indigo-500/10 -z-10 rounded-full"></div>

            {/* Background glow - Reduced */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 blur-[80px] rounded-full transform -rotate-12 translate-x-12 -z-20"></div>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes scroll-badges {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-badges {
          animation: scroll-badges 25s linear infinite;
        }
        .animate-scroll-badges:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export { Hero };