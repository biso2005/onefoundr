// Enable ISR: revalidate every 60 seconds (adjust as needed)
export const revalidate = 60;
import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Marketing for Solopreneurs | OneFoundr",
  description: "You don't need a marketing team. You need one working system that brings you qualified leads while you deliver the work."
};

export default async function MarketingPage() {
  const posts = getPostsByCategory("marketing");
  
  return (
    <CategoryHub
      eyebrow="STAGE 3"
      emoji="📣"
      title="Marketing"
      description="You don't need a marketing team. You need one working system that brings you qualified leads while you deliver the work."
      color="text-blue-500"
      pillarGuide={{
        title: "Getting Your First Customers",
        description: "The fastest route to revenue: zero to 10 clients using one of six proven tactics.",
        readTime: "12 min read",
        href: "/marketing/first-customers"
      }}
      subcategories={[
        {
          name: "First Customers",
          description: "Zero to 10 clients: warm outreach, cold outreach, free work, and partnerships that actually work when you have no audience.",
          href: "/marketing/first-customers",
          articleCount: 1
        },
        {
          name: "Lead Flow",
          description: "Build one system that brings leads in while you work. Simple system, content system, outbound, or social—pick ONE that fits your business.",
          href: "/marketing/lead-flow",
          articleCount: 1
        },
        {
          name: "Scaling What Works",
          description: "You found a channel. Now squeeze more from it, multiply reach, or expand strategically—without hiring.",
          href: "/marketing/scaling",
          articleCount: 1
        },
        {
          name: "Local Marketing",
          description: "Own your neighborhood first: Google Business, referrals, local SEO, and partnerships with nearby businesses.",
          href: "/marketing/local-marketing",
          articleCount: 1
        },
        {
          name: "Content Marketing",
          description: "The 4-step solo flywheel: create one strong asset, splice it, distribute it, compound it. No content calendar required.",
          href: "/marketing/content-marketing",
          articleCount: 1
        },
        {
          name: "Social Media",
          description: "One platform. One hour/day. The Sniper Method: comment on whales, post insight grenades, convert DMs to calls. Anti-influencer.",
          href: "/marketing/social-media",
          articleCount: 1
        },
        {
          name: "Partnerships & Referrals",
          description: "Customer referrals first, provider reciprocity second, community nodes third. The 2-hour/week system that compounds trust.",
          href: "/marketing/partnerships",
          articleCount: 1
        }
      ]}
      featuredArticles={[
        {
          title: "The Marketing Trap Most Solos Fall Into",
          category: "STRATEGY",
          readTime: "6 min",
          href: "/marketing/marketing-trap"
        },
        {
          title: "My First 10 Customers: What Actually Worked",
          category: "CASE STUDY",
          readTime: "5 min",
          href: "/marketing/first-10-customers"
        }
      ]}
      relatedCategories={[
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Start Solo", emoji: "🚀", href: "/start" },
        { name: "Build Your Offer", emoji: "📦", href: "/offer" }
      ]}
      dynamicArticles={posts}
    />
  );
}
