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
      <HeroSection />
      <CategoryMap />
      <FeaturedGuides />
      <SolopreneurStories />
      <FreeResources />
      <LatestGuides />
    </>
  );
}
