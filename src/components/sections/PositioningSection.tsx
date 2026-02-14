import FadeInSection from "@/components/FadeInSection";
import { Shield, TrendingUp, Settings } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Crisis Stabilization",
    desc: "Rapid containment of operational disruption. Clear governance from day one.",
  },
  {
    icon: TrendingUp,
    title: "Operational Transformation",
    desc: "Structured performance recovery across logistics and supply chain environments.",
  },
  {
    icon: Settings,
    title: "Project & System Implementation",
    desc: "ERP, WMS, and 3PL transitions executed under pressure with measurable milestones.",
  },
];

const PositioningSection = () => (
  <section id="positioning" className="py-24 lg:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <FadeInSection>
        <div className="max-w-3xl mb-16">
          <div className="w-10 h-px bg-light-blue mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            Interim Leadership When It Matters Most
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I step into complex operational environments to stabilize performance, restore control,
            and implement structured transformation. From crisis containment to long-term optimization,
            I operate at management and board level.
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((p, i) => (
          <FadeInSection key={p.title} delay={i * 150}>
            <div className="group">
              <div className="w-12 h-12 flex items-center justify-center border border-border rounded-sm mb-5 group-hover:border-light-blue transition-colors">
                <p.icon size={22} className="text-light-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default PositioningSection;
