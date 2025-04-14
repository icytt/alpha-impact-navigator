
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedInvestments } from "@/components/sections/FeaturedInvestments";
import { TrackImpact } from "@/components/sections/TrackImpact";
import { ExpertInsights } from "@/components/sections/ExpertInsights";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedInvestments />
        <TrackImpact />
        <ExpertInsights />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
