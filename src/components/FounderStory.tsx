import { ArrowRight, Code, Zap, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FounderStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const advantages = [
    {
      icon: Zap,
      title: "Direct Founder Access",
      description: "No account managers or middlemen. You speak directly to the lead engineer building your system."
    },
    {
      icon: Code,
      title: "Rapid Execution",
      description: "We ship features in days, not months. No bureaucracy, just efficient code."
    },
    {
      icon: Heart,
      title: "Built for Kenya",
      description: "Local solutions integrated with M-Pesa, SMS, and WhatsApp by default."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white" id="why-cnb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header - Short & Punchy */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Why Choose CnB Code?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              We're focused on being the most reliable partner for SMEs who want to automate payments and operations without enterprise complexity or expensive agencies.
            </p>
          </div>

          {/* Advantages Grid - FRONT AND CENTER */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Collapsible Deep Dive */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-slate-50 transition-colors text-left"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">Our Methodology</h3>
                <p className="text-slate-500 text-sm mt-1">Read how we strictly prioritize your ROI</p>
              </div>
              {isExpanded ? <ChevronUp className="w-6 h-6 text-blue-600" /> : <ChevronDown className="w-6 h-6 text-slate-400" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out px-6 sm:px-8 ${isExpanded ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
              <div className="prose prose-slate max-w-none pt-4 border-t border-slate-100">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Most agencies overcharge and underdeliver because they have high overheads.
                  We operate differently. We are a lean team of senior developers focused solely on
                  building high-performance tools for Kenyan SMEs.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Whether it's an investment platform for Novalgo or e-commerce for PlugTech,
                  we don't just write code—we build systems that handle real money and real customers.
                  We prioritize <strong>stability</strong>, <strong>speed</strong>, and <strong>scalability</strong> over fancy buzzwords.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-1">❌ The Old Way</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Weekly meetings with no updates</li>
                      <li>• Dealing with "Account Managers"</li>
                      <li>• Surprise fees for maintenance</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">✅ The CnB Way</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Direct WhatsApp line to devs</li>
                      <li>• Same-day critical fixes</li>
                      <li>• Transparent flat-rate pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              Response time: Usually under 2 hours
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export { FounderStory };
