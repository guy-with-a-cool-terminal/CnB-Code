import { useState, useEffect } from "react";
import { ExternalLink, TrendingUp, X } from "lucide-react";
import novalgoImage from "../assets/novalgo.png";
import plugtechImage from "../assets/plugtech.png";

const PortfolioSection = () => {
  const [modalImage, setModalImage] = useState(null);

  // Close modal with ESC
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  const projects = [
    {
      title: "Novalgo Investments",
      category: "Investment Platform",
      description:
        "Professional corporate website showcasing investment services and company credibility to attract serious investors.",
      impact:
        "Established strong online presence, making it easier for potential investors to evaluate and trust the company.",
      tags: ["Finance", "Investment", "Corporate"],
      gradient: "from-indigo-500 to-indigo-600",
      url: "https://novalgoinvestments.co.ke/",
      image: novalgoImage
    },
    {
      title: "PlugTech Business",
      category: "E-Commerce Store",
      description:
        "Full-featured online store for computer hardware with product catalog, shopping cart, and automated checkout.",
      impact:
        "Online sales channel operational 24/7, reducing manual order processing and expanding customer reach.",
      tags: ["E-Commerce", "Hardware", "Retail"],
      gradient: "from-gray-700 to-gray-900",
      url: "https://plugtechbusiness.co.ke/",
      image: plugtechImage
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-slate-900 px-4">
              Recent Client Projects
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-600 px-4">
              Example of our recent projects showing the type of solutions we have built for our clients this month
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto mb-8 sm:mb-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image wrapper */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-200">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setModalImage(project.image)}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                    />
                  )}

                  {/* Hover overlay icon */}
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                        <ExternalLink className="w-5 h-5 text-slate-900" />
                      </div>
                    </a>
                  )}

                  {/* Category Badge */}
                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 bg-white/90 text-slate-700 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-start gap-2 mb-3 pb-3 border-b border-slate-100">
                    <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-green-700 font-medium">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Every project is custom-built to solve specific business challenges. Your solution will be tailored to your unique needs.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center px-4">
            <button
              onClick={scrollToContact}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out inline-flex items-center gap-2"
            >
              Let's Build Your Project
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-5 -right-5 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>

            <img
              src={modalImage}
              alt="Project preview"
              className="w-full h-auto rounded-lg shadow-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export { PortfolioSection };
