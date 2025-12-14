import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Basic business site: 2-3 weeks. Online store: 3-5 weeks. Custom app: 6-10 weeks. We'll give you an exact timeline after our free consultation. Most delays come from waiting for client content (photos, text) - if you're ready, we move fast.",
    },
    {
      question: "What if I don't like the final product?",
      answer: "We build in stages and get your approval at each step. You see the design before we code. You see the site before we launch. By the time we're done, it's exactly what you wanted - because YOU directed the process. We don't disappear and come back with a surprise.",
    },
    {
      question: "What if something breaks after launch?",
      answer: "We include 30 days of free bug fixes after launch, plus 3 months of technical support. After that, maintenance packages start at KES 2,000/month. Critical issues (site down, payment not working) get priority response within 4 hours.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, for projects over KES 50,000, we can arrange monthly payments. Standard projects: 50% to start, 50% on delivery. Large projects: We can split into milestones. Ask during your consultation - we're flexible for serious clients.",
    },
    {
      question: "What technologies do you use?",
      answer: "Modern, industry-standard tech: React, Next.js, Node.js, TypeScript, Tailwind CSS for web. React Native for mobile apps. We don't use proprietary platforms - you own your code. If you want to move to another developer later, you can (though we hope you won't!).",
    },
    {
      question: "Can you help with hosting and domain registration?",
      answer: "Absolutely. We'll either set it up for you or guide you through it step-by-step. Hosting typically costs KES 1,000-3,000/month depending on traffic. Domain names are around KES 1,500/year. We use reliable Kenyan and international hosts.",
    },
    {
      question: "Do I own the website/code after I pay?",
      answer: "Yes. Once you've paid in full, you own everything - code, design, content, all of it. We'll even export it for you if you want to move to another developer later. No lock-in, no hidden ownership clauses.",
    },
    {
      question: "Why are you cheaper than big agencies?",
      answer: "We're a lean team. No expensive Westlands office. No sales teams. No project managers marking up costs 3x. Just skilled developers who love building great software. We charge for our work, not for overhead. You get the same quality at a fair price.",
    },
    {
      question: "What if you disappear after I pay the deposit?",
      answer: "Fair concern - we've heard horror stories too. That's why we do 50/50 payments: half upfront, half on delivery. You don't pay the second half until you're 100% happy. Plus, we're a registered Kenyan business - not a random freelancer who vanishes.",
    },
    {
      question: "Can you integrate with [specific tool/platform]?",
      answer: "Probably yes! We've integrated M-Pesa, Stripe, PayPal, Mailchimp, HubSpot, QuickBooks, WhatsApp Business API, Google Workspace, and dozens of other platforms. If it has an API, we can connect it. If you're not sure, ask during your free consultation.",
    },
    {
      question: "Do you provide training on how to use the site?",
      answer: "Yes. We include a 1-hour training session after launch where we show you (or your team) how to update content, add products, manage orders, etc. We also provide video tutorials and written guides. You won't be left confused.",
    },
    {
      question: "What if I need changes after the project is done?",
      answer: "Small tweaks during the 30-day guarantee: free. Larger changes or new features: we give you a quote first. Most clients opt for our maintenance packages (from KES 2,000/month) which include a set number of update hours monthly. Pay-as-you-go is also available.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-content">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Questions We Get Asked Every Day
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
            Honest answers to the questions you're probably thinking right now.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-blue-300 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free 30-minute call. We'll answer your questions honestly and tell you
            if we're the right fit for your project - no pressure, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => {
                const phoneNumber = "254114399034";
                const message = "Hi, I have questions about your services";
                window.open(
                  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              }}
              className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-md border-2 border-slate-300 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FAQSection };
