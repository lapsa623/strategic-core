import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ResultsSection from "@/components/sections/ResultsSection";
import AboutSection from "@/components/sections/AboutSection";
import EngagementSection from "@/components/sections/EngagementSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PositioningSection />
        <ProblemSection />
        <ResultsSection />
        <AboutSection />
        <EngagementSection />
        <ReferencesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
