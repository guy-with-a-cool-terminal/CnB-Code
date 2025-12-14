import { useState } from "react";
import { CheckCircle, Download, Mail, Sparkles } from "lucide-react";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual email capture service
    // (EmailJS, Mailchimp, ConvertKit, etc.)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail("");
    }, 1000);
  };

  const benefits = [
    "Is your website actually bringing in customers?",
    "Are you losing sales to slow load times?",
    "Does your site work properly on mobile?",
    "Is your checkout process costing you money?",
    "Are visitors leaving without contacting you?"
  ];

  return (
    <section id="lead-magnet" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">

              {/* Left side - Value proposition */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 md:p-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                    Free Resource
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Get Your Free Website Audit Checklist
                </h3>

                <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                  A simple 15-point checklist to find what's stopping your website from bringing in customers.
                  No tech knowledge needed.
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-xs text-slate-400">
                    Used by 200+ Kenyan business owners to improve their websites
                  </p>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        Get Instant Access
                      </h4>
                      <p className="text-sm text-slate-600">
                        Enter your email and we'll send it right away.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            Get Free Checklist
                          </>
                        )}
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        No spam. Unsubscribe anytime. We respect your privacy.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Check Your Email!
                    </h4>
                    <p className="text-slate-600 mb-6">
                      We've sent your free Website Audit Checklist. It should arrive in the next few minutes.
                    </p>
                    <p className="text-sm text-slate-500">
                      Don't see it? Check your spam folder.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional context */}
          <div className="text-center mt-6 text-white text-sm">
            <p className="opacity-90">
              Not ready for the full project yet? This checklist helps you understand what to fix first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LeadMagnetSection };
