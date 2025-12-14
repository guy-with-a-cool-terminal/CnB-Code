import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      content: "They built an e-commerce store for my retail business. Now I can sell to more people across the country. The automated inventory system saves me hours every week.",
      business: "Retail Store Owner",
      location: "Nairobi",
      service: "E-commerce Platform"
    },
    {
      content: "I needed a system to automate my invoicing and client communication. What used to take me hours now happens automatically. Very responsive team.",
      business: "Professional Services",
      location: "Mombasa",
      service: "Business Automation"
    },
    {
      content: "They integrated M-Pesa payments and WhatsApp notifications into our booking system. Made everything seamless for our customers.",
      business: "Service Business",
      location: "Eldoret",
      service: "Custom Integration"
    },
    {
      content: "Fast turnaround on fixing critical bugs in our system. Available when we needed them. Straightforward pricing and communication.",
      business: "Small Business",
      location: "Kisumu",
      service: "Emergency Support"
    },
    {
      content: "Built a custom dashboard to track our business metrics in real-time. No more manual reports. We can see everything we need at a glance.",
      business: "Growing Startup",
      location: "Nairobi",
      service: "Custom Software"
    },
    {
      content: "Added AI chatbot to handle customer questions on our website. Reduced support workload significantly while customers get instant answers.",
      business: "Online Business",
      location: "International",
      service: "AI Integration"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-6">
            What Clients Say
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">
            Feedback from businesses we've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="card-base p-6 flex flex-col bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-body mb-6 flex-grow">
                "{review.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-text-primary">
                  {review.business}
                </p>
                <p className="text-sm text-text-secondary">
                  {review.location}
                </p>
                <p className="text-xs text-accent mt-1 font-medium">
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ReviewsSection };