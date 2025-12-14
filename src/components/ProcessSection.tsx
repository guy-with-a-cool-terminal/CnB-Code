import { CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We discuss your business problem and what you need. No technical jargon, just clear conversation.",
      duration: "30-60 min"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "We propose a solution with clear pricing. You decide if it works for your budget.",
      duration: "1-5 days"
    },
    {
      number: "03",
      title: "Development",
      description: "We build it in stages. You see progress and give feedback throughout.",
      duration: "Timeline varies"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We launch it, show you how it works, fix any issues for 30 days, and support you for 3 months.",
      duration: "Ongoing"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="section-padding bg-muted-background/30">
      <div className="container-content">
        <h2 className="text-section-title text-center mb-6">
          How We Work
        </h2>
        <p className="text-body-large text-center max-w-3xl mx-auto mb-16">
          From idea to launch. You know what's happening at every step.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="card-base p-6 relative">
              <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2 mt-4">
                {step.title}
              </h3>
              <p className="text-xs text-accent font-semibold mb-3">{step.duration}</p>
              <p className="text-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export { ProcessSection };