import FadeInSection from "@/components/FadeInSection";
import { Globe, Award, Briefcase } from "lucide-react";

const tags = [
  { icon: Globe, text: "German C1 · English B2" },
  { icon: Award, text: "Automotive Tier 1 & 2 Experience" },
  { icon: Briefcase, text: "Project Leadership & Governance" },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeInSection>
          <div>
            <div className="w-10 h-px bg-light-blue mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6">
              Jan Lapšanský
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Interim Manager specializing in logistics, automotive supply chains, and operational
              transformation. Experienced in crisis environments, system implementations, and
              structured performance recovery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Operating across the DACH region, Czech Republic, and Slovakia — delivering
              measurable results at management and board level.
            </p>

            <div className="space-y-4">
              {tags.map((t) => (
                <div key={t.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-border rounded-sm">
                    <t.icon size={16} className="text-light-blue" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-sm border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JL</span>
                </div>
                <p className="text-sm">Professional Portrait</p>
              </div>
            </div>
            {/* Decorative line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-light-blue/20 rounded-sm -z-10" />
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
