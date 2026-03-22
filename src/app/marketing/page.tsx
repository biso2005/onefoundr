import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Marketing — OneFoundr | Get Found & Build Your Audience",
  description: "Get found, build an audience, and generate leads consistently — all by yourself."
};

export default async function MarketingPage() {
  const posts = getPostsByCategory("marketing");
  return (
    <CategoryHub
      eyebrow="CATEGORY"
      emoji="📣"
      title="Marketing"
      description="Get found, build an audience, and generate leads consistently — all by yourself. Content marketing, SEO, personal branding, and more."
      color="text-green-500"
      pillarGuide={{
        title: "Marketing for Solopreneurs: The Complete Guide",
        description: "A full marketing system designed for one-person businesses with limited time and budget.",
        readTime: "18 min read",
        href: "/marketing/content-marketing"
      }}
      subcategories={[
        {
          name: "Content Marketing",
          description: "Create content that attracts clients",
          href: "/marketing/content-marketing",
          articleCount: 11
        },
        {
          name: "SEO",
          description: "Rank on Google without a team",
          href: "/marketing/seo-2026",
          articleCount: 9
        },
        {
          name: "Email Marketing",
          description: "Build and monetize your email list",
          href: "/marketing/messaging-gap",
          articleCount: 8
        },
        {
          name: "Personal Branding",
          description: "Stand out as a solo founder",
          href: "/marketing/personal-branding",
          articleCount: 7
        },
        {
          name: "Social Media",
          description: "Social strategy for one-person businesses",
          href: "/marketing/repurposing-content",
          articleCount: 8
        },
        {
          name: "Lead Generation",
          description: "Generate leads on autopilot",
          href: "/marketing/account-based-marketing",
          articleCount: 6
        }
      ]}
      featuredArticles={[]}
      relatedCategories={[
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Start", emoji: "💡", href: "/start" },
        { name: "Tools", emoji: "🛠️", href: "/tools" }
      ]}
      dynamicArticles={posts}
    />
  );
}
