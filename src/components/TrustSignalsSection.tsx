import { DollarSign, Shield, HeadphonesIcon, FileText, Users } from "lucide-react";

export const TrustSignalsSection = () => {
  const howWeWork = [
    {
      icon: DollarSign,
      title: "Payment",
      description: "50% to start, 50% on delivery"
    },
    {
      icon: Shield,
      title: "Guarantee",
      description: "30 days of free bug fixes after launch"
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "3 months of technical support included"
    },
    {
      icon: FileText,
      title: "Transparency",
      description: "No hidden fees. Clear timelines and deliverables"
    }
  ];

  const whyWorkWithUs = [
    "Talk directly to the people building your software",
    "Global quality at flexible prices",
    "Start small, scale as your business grows",
    "We're here after launch, not just during it",
    "Fast turnaround on fixes and changes"
  ];

  return (
    <section className="section-padding bg-muted-background/30">
      <div className="container-content">
        <div className="mb-16">
          <h2 className="text-section-title text-center mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="card-base p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full transition-all duration-300 hover:bg-accent/20">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-body text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-section-title text-center mb-8">
            Why Clients Choose Us
          </h2>
          <div className="card-base p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {whyWorkWithUs.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};