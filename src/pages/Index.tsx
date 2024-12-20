import { HeroSection } from "../components/HeroSection";
import { FeaturedSetups } from "../components/FeaturedSetups";
import { TeamSection } from "../components/TeamSection";
import { NewsletterSection } from "../components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedSetups />
      <TeamSection />
      {/* <NewsletterSection /> */}
    </div>
  );
};

export default Index;