import { ReactNode } from "react";

interface TechCarouselProps {
    technologies: {
        name: string;
        icon: ReactNode;
        color?: string;
    }[];
}

const TechCarousel = ({ technologies }: TechCarouselProps) => {
    return (
        <div className="overflow-hidden relative py-8">
            {/* Gradient masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex gap-6 animate-scroll-carousel hover:pause-animation">
                {/* Original items */}
                {technologies.map((tech, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-32 h-24 flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
                    >
                        <div className="text-5xl mb-3 drop-shadow-sm" style={{ color: tech.color }}>
                            {tech.icon}
                        </div>
                        <p className="text-xs font-medium text-slate-500 text-center uppercase tracking-wider">{tech.name}</p>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {technologies.map((tech, i) => (
                    <div
                        key={`dup-${i}`}
                        className="flex-shrink-0 w-32 h-24 flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
                    >
                        <div className="text-5xl mb-3 drop-shadow-sm" style={{ color: tech.color }}>
                            {tech.icon}
                        </div>
                        <p className="text-xs font-medium text-slate-500 text-center uppercase tracking-wider">{tech.name}</p>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes scroll-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-carousel {
          animation: scroll-carousel 30s linear infinite;
        }

        .animate-scroll-carousel:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-carousel {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
};

export { TechCarousel };
