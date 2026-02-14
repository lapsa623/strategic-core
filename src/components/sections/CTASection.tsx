import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";

const CTASection = () => (
  <section id="contact" className="py-24 lg:py-32 bg-navy text-navy-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <FadeInSection>
        <div className="max-w-2xl mx-auto">
          <div className="w-10 h-px bg-light-blue mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Připraveni obnovit provozní kontrolu?
          </h2>
          <p className="text-navy-foreground/70 text-lg mb-10 leading-relaxed">
            Důvěrně, strukturovaně, s orientací na výsledky. Projednejme vaši situaci.
          </p>
          <Button
            size="lg"
            className="bg-light-blue text-accent-foreground hover:bg-light-blue/90 text-base px-10"
          >
            Domluvit důvěrnou schůzku
          </Button>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default CTASection;
