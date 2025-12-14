import { ArrowRight, Code, Zap, Heart } from "lucide-react";

const FounderStory = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const advantages = [
    {
      icon: Zap,
      title: "No Bureaucracy",
      description: "When you message me, you get ME. Not an account manager, not a sales rep. Direct line to the person building your solution."
    },
    {
      icon: Code,
      title: "Fast Execution",
      description: "No committees, no approval processes. I can push fixes and updates the same day you request them."
    },
    {
      icon: Heart,
      title: "Genuinely Care",
      description: "Every project is a chance to prove myself. I'm not coasting on reputation - I'm building mine, one happy client at a time."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">
              Why Work With a Small Team?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Here's the honest truth about CNB Code - and why that's actually better for you
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-8 sm:mb-10">
            <div className="p-6 sm:p-8 md:p-10">

              {/* The Story */}
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  I'm not going to pretend CNB Code is some huge agency with 50 employees and a fancy Westlands office.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  It's me and a small team of developers who genuinely love building things that solve real business problems.
                  We started this because we saw what other agencies were charging - KES 200K for a basic website that takes
                  3 months to deliver - and thought, "That's insane."
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  So we built CNB Code differently. No expensive offices. No sales teams marking up costs.
                  No project managers playing telephone between you and the actual developer. Just skilled people
                  who write clean code and actually respond when you message them.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                  You might be wondering: <span className="font-semibold text-slate-900">"Can I trust a young team
                  with my business?"</span> Fair question. Here's my answer: I've been building websites since I was
                  in school, and I've been doing this professionally for years now. Novalgo Investments trusts us
                  with their investment platform. PlugTech trusts us with their entire e-commerce store.
                  These aren't hobby projects - they're real businesses that depend on what we build.
                </p>

                {/* What makes us different */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 mb-6 rounded-r-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    What You Get When You Work With Us:
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>My personal WhatsApp number. Seriously. You can text me directly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Fast fixes. I'm online 12+ hours a day. Your urgent issues get handled urgently.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Honest advice. If you don't need something, I'll tell you. I'd rather lose a sale than build something useless.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">→</span>
                      <span>Fair prices. We charge what the work is worth, not what big agencies can get away with.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  If you're tired of slow, expensive, impersonal agencies that treat you like ticket number #4,387,
                  we should talk. If you want to work directly with the person who's actually building your solution,
                  let's talk. If you value getting things done fast without sacrificing quality, definitely let's talk.
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
              Ready to Work With a Team That Actually Cares?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              Free 30-minute consultation. No sales pitch, no pressure. Just honest conversation about your business and what you need.
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
