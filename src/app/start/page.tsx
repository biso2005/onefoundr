import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";
import { businessIdeas } from "@/data/businessIdeas";

export const metadata = {
  title: "Start Solo — OneFoundr | How to Start a One-Person Business",
  description: "Go from idea to your first paying client. Pick a business, validate it, set it up properly, and launch—all as one person."
};

export default async function StartPage() {
  const posts = getPostsByCategory("start");

  return (
    <CategoryHub
      eyebrow="STAGE 1"
      emoji="🚀"
      title="Start Solo"
      description="Go from idea to your first paying client. Pick a business, validate it, set it up properly, and launch—all as one person."
      color="text-green-500"
      pillarGuide={{
        title: "The Solo Founder's First 90 Days: Your Week-by-Week Launch Plan",
        description: "The flagship guide that ties everything together. A complete week-by-week action plan from day one to first revenue.",
        readTime: "20 min read",
        href: "/start/first-90-days"
      }}
      subcategories={[
        {
          name: "Business Ideas",
          description: `Browse ${businessIdeas.length}+ profitable ideas you can start alone. Filter by category, startup cost, and time to revenue.`,
          href: "/start/business-ideas",
          articleCount: businessIdeas.length
        },
        {
          name: "Idea Validation",
          description: "Test your idea in 7 days before committing. 5-step process to prove demand before you build.",
          href: "/start/idea-validation",
          articleCount: 5
        },
        {
          name: "Business Models",
          description: "Compare 8 models and pick the right one. See real scenarios and choose your path.",
          href: "/start/business-models",
          articleCount: 8
        },
        {
          name: "Niche Selection",
          description: "Find your profitable sweet spot. Narrow enough to stand out, broad enough to sustain you.",
          href: "/start/niche-selection",
          articleCount: 1
        },
        {
          name: "First 90 Days",
          description: "Your week-by-week launch plan. The complete action plan from day one to first revenue.",
          href: "/start/first-90-days",
          articleCount: 1
        }
      ]}
      featuredArticles={[
        {
          title: "The AI-Powered Solopreneur Launchpad",
          category: "LAUNCH",
          readTime: "14 min",
          href: "/start/ai-launchpad"
        },
        {
          title: "Side Hustle to Full Time: The Decision Framework",
          category: "DECISION",
          readTime: "8 min",
          href: "/start/side-hustle-to-full-time"
        },
        {
          title: "When to Kill Your Idea",
          category: "VALIDATION",
          readTime: "6 min",
          href: "/start/kill-your-idea"
        },
        {
          title: "The One-Page Business Canvas",
          category: "PLANNING",
          readTime: "5 min",
          href: "/start/one-page-canvas"
        }
      ]}
      relatedCategories={[
        { name: "Marketing", emoji: "📣", href: "/marketing" },
        { name: "Build Your Offer", emoji: "📦", href: "/offer" },
        { name: "Sales", emoji: "🤝", href: "/sales" }
      ]}
      dynamicArticles={posts}
    />
  );
}
