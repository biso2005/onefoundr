import HeroSection from "@/components/home/HeroSection";
import CategoryMap from "@/components/home/CategoryMap";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import SolopreneurStories from "@/components/home/SolopreneurStories";
import FreeResources from "@/components/home/FreeResources";
import LatestGuides from "@/components/home/LatestGuides";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryMap />
      <FeaturedGuides />
      <SolopreneurStories />
      <FreeResources />
      <LatestGuides />
    </>
  );
}
