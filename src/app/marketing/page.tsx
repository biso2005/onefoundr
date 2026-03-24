import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Marketing for Solopreneurs | OneFoundr",
  description: "Marketing strategies and channels that work when you're a team of one. From getting your first customers to scaling what works."
};

export default async function MarketingPage() {
  const posts = getPostsByCategory("marketing");
  return (
    <CategoryHub
      eyebrow="STAGE 3"
      emoji="📣"
      title="Marketing"
      description="You don't need a marketing team or a massive budget. You need the right strategy for where you are right now—and channels that work when it's just you."
      color="text-purple-500"
      pillarGuide={{
        title: "Marketing for Solopreneurs: The Complete Guide",
        description: "A full marketing system designed for one-person businesses with limited time and budget.",
        readTime: "18 min read",
        href: "/marketing/first-customers"
      }}
      subcategories={[
        {
          name: "First Customers",
          description: "Scrappy, practical tactics to get your first 10 paying customers—no matter what you're selling.",
          href: "/marketing/first-customers",
          articleCount: 1
        },
        {
          name: "Lead Flow",
          description: "Build a repeatable system that brings in consistent leads without burning out.",
          href: "/marketing/lead-flow",
          articleCount: 1
        },
        {
          name: "Scaling What Works",
          description: "Double down on what's working and grow your reach without hiring a team.",
          href: "/marketing/scaling",
          articleCount: 1
        },
        {
          name: "Local Marketing",
          description: "For service providers and local businesses: get found, build trust, and dominate your area.",
          href: "/marketing/local-marketing",
          articleCount: 1
        },
        {
          name: "Content Marketing",
          description: "SEO, blogging, and YouTube—build authority and attract customers while you sleep.",
          href: "/marketing/content-marketing",
          articleCount: 1
        },
        {
          name: "Social Media",
          description: "LinkedIn, Twitter, Instagram—turn your personal brand into a client magnet.",
          href: "/marketing/social-media",
          articleCount: 1
        },
        {
          name: "Partnerships & Referrals",
          description: "Leverage other people's audiences and turn happy customers into your best salespeople.",
          href: "/marketing/partnerships",
          articleCount: 1
        }
      ]}
      featuredArticles={[]}
      relatedCategories={[
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Start Solo", emoji: "🚀", href: "/start" },
        { name: "Build Your Offer", emoji: "📦", href: "/offer" }
      ]}
      dynamicArticles={posts}
    />
  );
}
