import FadeInSection from "@/components/FadeInSection";
import { AlertTriangle, Truck, Monitor, Users } from "lucide-react";

const pains = [
  { icon: Truck, text: "Nestabilita dodávek napříč více provozovnami" },
  { icon: AlertTriangle, text: "Eskalace v automobilových dodavatelských řetězcích" },
  { icon: Monitor, text: "Přechody ERP nebo 3PL pod tlakem" },
  { icon: Users, text: "Mezery ve vedení během transformace" },
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <FadeInSection>
        <div className="max-w-3xl mb-14">
          <div className="w-10 h-px bg-light-blue mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            Když výkon klesá, struktura selhává
          </h2>
        </div>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        {pains.map((p, i) => (
          <FadeInSection key={i} delay={i * 100}>
            <div className="flex items-start gap-4 p-6 border border-border bg-background rounded-sm">
              <p.icon size={20} className="text-light-blue mt-0.5 shrink-0" strokeWidth={1.5} />
              <p className="text-foreground font-medium text-sm leading-relaxed">{p.text}</p>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={400}>
        <div className="border-l-2 border-light-blue pl-6">
          <p className="text-lg font-semibold text-primary italic">
            Strukturovaný zásah. Jasná governance. Měřitelný dopad.
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default ProblemSection;
