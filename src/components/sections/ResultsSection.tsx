import { useEffect, useRef, useState } from "react";
import FadeInSection from "@/components/FadeInSection";

const metrics = [
  { value: 30, suffix: "%", label: "Snížení eskalačních případů" },
  { value: 90, suffix: " dní", label: "Stabilizace výkonu při náběhu" },
  { value: 3, suffix: " země", label: "Přeshraniční koordinace (DACH / CZ / SK)" },
  { value: 50, suffix: "+", label: "Současně vedených členů týmu" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-light-blue">
      {count}
      {suffix}
    </span>
  );
};

const ResultsSection = () => (
  <section id="results" className="py-24 lg:py-32 bg-navy text-navy-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <FadeInSection>
        <div className="mb-16">
          <div className="w-10 h-px bg-light-blue mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Měřitelný dopad</h2>
        </div>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <FadeInSection key={i} delay={i * 150}>
            <div className="border-t border-light-blue/30 pt-6">
              <AnimatedCounter target={m.value} suffix={m.suffix} />
              <p className="mt-3 text-sm text-navy-foreground/70 leading-relaxed">{m.label}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
