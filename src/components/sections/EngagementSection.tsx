import FadeInSection from "@/components/FadeInSection";

const phases = [
  {
    phase: "01",
    title: "Rychlé posouzení",
    duration: "2–4 týdny",
    desc: "Analýza situace, mapování stakeholderů, okamžitá stabilizační opatření a dodání akčního plánu.",
  },
  {
    phase: "02",
    title: "Fáze stabilizace",
    duration: "3–6 měsíců",
    desc: "Restrukturalizace procesů, implementace KPI, sladění týmu a rámce governance.",
  },
  {
    phase: "03",
    title: "Strukturovaná transformace",
    duration: "6–12 měsíců",
    desc: "Implementace systémů, řízení organizačních změn a udržitelná architektura výkonu.",
  },
];

const EngagementSection = () => (
  <section id="engagement" className="py-24 lg:py-32 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <FadeInSection>
        <div className="max-w-3xl mb-16">
          <div className="w-10 h-px bg-light-blue mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Jak spolupracuji
          </h2>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-0">
        {phases.map((p, i) => (
          <FadeInSection key={p.phase} delay={i * 150}>
            <div
              className={`p-8 border border-border bg-background h-full ${
                i < phases.length - 1 ? "md:border-r-0" : ""
              }`}
            >
              <span className="text-xs font-semibold text-light-blue tracking-widest uppercase">
                Fáze {p.phase}
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-light-blue font-medium mb-4">{p.duration}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementSection;
