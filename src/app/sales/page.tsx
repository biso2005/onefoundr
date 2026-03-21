import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Sales — OneFoundr | Win Clients & Close Deals",
  description: "Win clients and close deals confidently — without being pushy or salesy."
};

export default async function SalesPage() {
  const posts = getPostsByCategory("sales");
  return (
    <CategoryHub
      eyebrow="CATEGORY"
      emoji="🤝"
      title="Sales"
      description="Win clients and close deals confidently — without being pushy or salesy. Funnels, discovery calls, proposals, and proven closing strategies."
      color="text-green-500"
      pillarGuide={{
        title: "Sales for Solopreneurs: How to Sell Without a Sales Team",
        description: "A complete sales system for solo founders who want consistent clients without the sleazy tactics.",
        readTime: "14 min read",
        href: "/sales/complete-guide"
      }}
      subcategories={[
        {
          name: "Getting Clients",
          description: "Find and win your first clients",
          href: "/sales",
          articleCount: 9
        },
        {
          name: "Discovery Calls",
          description: "Master the sales conversation",
          href: "/sales",
          articleCount: 6
        },
        {
          name: "Sales Funnels",
          description: "Build funnels that convert",
          href: "/sales",
          articleCount: 7
        },
        {
          name: "Proposals",
          description: "Write proposals that win",
          href: "/sales",
          articleCount: 5
        },
        {
          name: "Closing",
          description: "Close deals with confidence",
          href: "/sales",
          articleCount: 6
        },
        {
          name: "Follow Up",
          description: "Follow up without being annoying",
          href: "/sales",
          articleCount: 5
        }
      ]}
      featuredArticles={[
        {
          title: "The Solopreneur's Guide to AI-Powered Cold Outreach: Land Clients Without Warm Introductions",
          category: "PROSPECTING",
          readTime: "14 min",
          href: "/sales/ai-cold-outreach"
        },
        {
          title: "How to Get Your First 10 Clients",
          category: "CLIENTS",
          readTime: "9 min",
          href: "/sales"
        },
        {
          title: "Sales Funnel for Solopreneurs: Simple Setup",
          category: "FUNNELS",
          readTime: "12 min",
          href: "/sales"
        },
        {
          title: "Selling Without Being Salesy",
          category: "CLOSING",
          readTime: "8 min",
          href: "/sales"
        },
        {
          title: "Follow-Up Emails That Convert",
          category: "FOLLOW UP",
          readTime: "7 min",
          href: "/sales"
        }
      ]}
      relatedCategories={[
        { name: "Marketing", emoji: "📣", href: "/marketing" },
        { name: "Offer", emoji: "📦", href: "/offer" },
        { name: "Systems", emoji: "⚙️", href: "/systems" }
      ]}
      dynamicArticles={posts}
    />
  );
}
