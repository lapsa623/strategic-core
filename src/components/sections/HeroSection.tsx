import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Architectural grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-px">
        <div className="h-full bg-light-blue/20 animate-line-extend" />
      </div>
      <div className="absolute top-[55%] left-[10%] w-[60%] h-px">
        <div className="h-full bg-light-blue/10 animate-line-extend" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="w-16 h-px bg-light-blue mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary mb-6">
            Transforming Operations.
            <br />
            Stabilizing Performance.
            <br />
            Delivering Results.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Interim Management & Consulting for complex logistics and automotive environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollTo("#contact")} className="text-base px-8">
              Discuss Your Situation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("#results")}
              className="text-base px-8 border-primary/20 hover:border-primary/40"
            >
              View Case Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
