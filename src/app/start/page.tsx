import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Start Solo — OneFoundr | How to Start a One-Person Business",
  description: "Guides to help you validate your idea, choose a niche, and launch your solo business."
};

export default async function StartPage() {
  const posts = getPostsByCategory("start");

  return (
    <>
      <CategoryHub
        eyebrow="CATEGORY"
        emoji="💡"
        title="Start Solo"
        description="Everything you need to go from idea to your first dollar. Validate your business idea, choose a profitable niche, and pick the right business model for a one-person operation."
        color="text-green-500"
        pillarGuide={{
          title: "How to Start a One-Person Business: The Complete Guide",
          description: "The step-by-step foundation for launching your solo business — from idea validation to first revenue.",
          readTime: "15 min read",
          href: "/start/business-ideas"
        }}
        subcategories={[
          {
            name: "Business Ideas",
            description: "Proven ideas for one-person businesses",
            href: "/start/business-ideas",
            articleCount: 12
          },
          {
            name: "Idea Validation",
            description: "Test your idea before investing time",
            href: "/start/ai-launch-30days",
            articleCount: 8
          },
          {
            name: "Niche Selection",
            description: "Find your profitable sweet spot",
            href: "/start/business-ideas",
            articleCount: 6
          },
          {
            name: "Business Models",
            description: "Models that work for solo founders",
            href: "/start/ai-launch-30days",
            articleCount: 9
          },
          {
            name: "Market Research",
            description: "Research methods for solopreneurs",
            href: "/start/business-ideas",
            articleCount: 5
          },
          {
            name: "First Steps",
            description: "Your first actions as a solo founder",
            href: "/start/ai-launch-30days",
            articleCount: 7
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[]}
        dynamicArticles={posts}
      />
      <p className="text-gray-600 text-lg max-w-2xl mb-8 mx-auto text-center">
        Everything you need to go from idea to your first dollar. Validate your concept, find your niche, choose a business model, and launch in 90 days — all as a solo founder.
      </p>
    </>
  );
}
