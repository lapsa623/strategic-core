import FadeInSection from "@/components/FadeInSection";

const placeholderLogos = [
  "ŠKODA AUTO",
  "LogiTrans GmbH",
  "TechParts AG",
  "EuroCargo s.r.o.",
  "PrecisionDrive",
  "SupplyChain CZ",
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Reference
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Spolupráce s předními společnostmi v automotive a logistice
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {placeholderLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-20 rounded-lg border border-border bg-card px-4"
              >
                <span className="text-sm font-medium text-muted-foreground tracking-wide text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ReferencesSection;
