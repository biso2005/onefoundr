import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoryMap from "@/components/home/CategoryMap";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import SolopreneurStories from "@/components/home/SolopreneurStories";
import FreeResources from "@/components/home/FreeResources";
import LatestGuides from "@/components/home/LatestGuides";

export const metadata: Metadata = {
  title: "OneFoundr — Build Solo. Build Smart.",
  description: "Practical guides, tools, and systems for solopreneurs who want to build profitable businesses without a team."
};

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <div className="bg-white py-16 md:py-20">
        <HeroSection />
      </div>

      {/* Section 2: Category Grid / Browse by Topic */}
      <div className="bg-gray-50 py-16 md:py-20">
        <CategoryMap />
      </div>

      {/* Section 3: Featured Guides */}
      <div className="bg-white py-16 md:py-20">
        <FeaturedGuides />
      </div>

      {/* Section 4: Solopreneur Stories */}
      <div className="bg-gray-50 py-16 md:py-20">
        <SolopreneurStories />
      </div>

      {/* Section 5: Newsletter CTA (FreeResources) */}
      <div className="bg-gray-900 py-16 md:py-20">
        <FreeResources />
      </div>

      {/* Section 6: Latest Guides */}
      <div className="bg-white py-16 md:py-20">
        <LatestGuides />
      </div>
    </>
  );
}
