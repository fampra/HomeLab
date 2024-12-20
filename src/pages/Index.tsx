import { HeroSection } from "../components/HeroSection";
import { FeaturedSetups } from "../components/FeaturedSetups";
import { TeamSection } from "../components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedSetups />
      <TeamSection />
    </div>
  );
};

export default Index;