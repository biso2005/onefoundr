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
          href: "/sales/getting-clients",
          articleCount: 9
        },
        {
          name: "Discovery Calls",
          description: "Master the sales conversation",
          href: "/sales/discovery-calls",
          articleCount: 6
        },
        {
          name: "Sales Funnels",
          description: "Build funnels that convert",
          href: "/sales/sales-funnels",
          articleCount: 7
        },
        {
          name: "Proposals",
          description: "Write proposals that win",
          href: "/sales/proposals",
          articleCount: 5
        },
        {
          name: "Closing",
          description: "Close deals with confidence",
          href: "/sales/closing",
          articleCount: 6
        },
        {
          name: "Follow Up",
          description: "Follow up without being annoying",
          href: "/sales/follow-up",
          articleCount: 5
        }
      ]}
      featuredArticles={[
        {
          title: "How to Get Your First 10 Clients",
          category: "CLIENTS",
          readTime: "9 min",
          href: "/sales/getting-clients"
        },
        {
          title: "Discovery Call Script & Framework",
          category: "CALLS",
          readTime: "10 min",
          href: "/sales/discovery-calls"
        },
        {
          title: "Sales Funnel for Solopreneurs: Simple Setup",
          category: "FUNNELS",
          readTime: "12 min",
          href: "/sales/sales-funnels"
        },
        {
          title: "Selling Without Being Salesy",
          category: "CLOSING",
          readTime: "8 min",
          href: "/sales/closing"
        },
        {
          title: "Follow-Up Emails That Convert",
          category: "FOLLOW UP",
          readTime: "7 min",
          href: "/sales/follow-up"
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
