import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    delay?: number;
}

const SectionReveal = ({ children, delay = 0 }: SectionRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {children}
        </div>
    );
};

export { SectionReveal };
