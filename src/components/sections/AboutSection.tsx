import FadeInSection from "@/components/FadeInSection";
import { Globe, Award, Briefcase } from "lucide-react";
import portrait from "@/assets/portrait.png";

const tags = [
  { icon: Globe, text: "Němčina C1 · Angličtina B2" },
  { icon: Award, text: "Zkušenosti s Automotive Tier 1 & 2" },
  { icon: Briefcase, text: "Projektové vedení & Governance" },
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
              Interim manažer specializující se na logistiku, automobilové dodavatelské řetězce
              a operační transformaci. Zkušenosti v krizovém prostředí, implementaci systémů
              a strukturované obnově výkonu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Působím v regionu DACH, České republice a na Slovensku — s měřitelnými výsledky
              na úrovni managementu a představenstva.
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
            <div className="aspect-[4/5] rounded-sm border border-border overflow-hidden">
              <img src={portrait} alt="Jan Lapšanský – profesní portrét" className="w-full h-full object-cover" />
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
