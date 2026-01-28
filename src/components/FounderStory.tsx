import { ArrowRight, Code, Zap, Heart } from "lucide-react";

const FounderStory = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const advantages = [
    {
      icon: Zap,
      title: "No Bureaucracy",
      description: "Direct access to the founder. Your messages reach the person building your solution, not a middleman."
    },
    {
      icon: Code,
      title: "Fast Execution",
      description: "Same-day fixes and updates. No committees, no approval chains. Just results."
    },
    {
      icon: Heart,
      title: "Built for SMEs",
      description: "We understand Kenyan businesses. Professional solutions without enterprise bloat or pricing."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">
              How We Work Differently
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Fast, direct, and built for businesses that need results, not red tape
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-8 sm:mb-10">
            <div className="p-6 sm:p-8 md:p-10">

              {/* The Story */}
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  CNB Code is a lean, agile development team built specifically for Kenyan SMEs.
                  We deliver professional software without the overhead costs and slow timelines of traditional agencies.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  Our model is simple: assemble the right specialists for each project, deliver fast,
                  and maintain direct communication with clients. No account managers playing telephone.
                  No inflated costs from expensive office leases. Just skilled developers who respond when you need them.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                  We've built investment platforms for Novalgo Investments, complete e-commerce systems for PlugTech,
                  and booking solutions for service businesses across Nairobi. These aren't side projects—they're
                  live systems processing real transactions and serving real customers every day.
                </p>

                {/* What makes us different */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 mb-6 rounded-r-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    What You Get:
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Direct WhatsApp access to the founder—no gatekeepers, no delays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Rapid response times—urgent issues get handled the same day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Transparent pricing—you know exactly what you're paying for</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Honest recommendations—if you don't need it, we won't sell it</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We're not trying to be the biggest agency in Kenya. We're focused on being the most
                  reliable partner for SMEs who want professional results without enterprise complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Work With a Reliable Development Partner?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              Free 30-minute consultation. We'll discuss your business needs and recommend the right solution.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Let's Talk About Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export { FounderStory };
