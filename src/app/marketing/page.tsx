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
        href: "/marketing/complete-guide"
      }}
      subcategories={[
        {
          name: "Content Marketing",
          description: "Create content that attracts clients",
          href: "/marketing",
          articleCount: 11
        },
        {
          name: "SEO",
          description: "Rank on Google without a team",
          href: "/marketing",
          articleCount: 9
        },
        {
          name: "Email Marketing",
          description: "Build and monetize your email list",
          href: "/marketing",
          articleCount: 8
        },
        {
          name: "Personal Branding",
          description: "Stand out as a solo founder",
          href: "/marketing",
          articleCount: 7
        },
        {
          name: "Social Media",
          description: "Social strategy for one-person businesses",
          href: "/marketing",
          articleCount: 8
        },
        {
          name: "Lead Generation",
          description: "Generate leads on autopilot",
          href: "/marketing",
          articleCount: 6
        }
      ]}
      featuredArticles={[
        {
          title: "SEO for Solopreneurs 2026: Win Without a Budget",
          category: "SEO",
          readTime: "14 min",
          href: "/marketing/seo-2026"
        },
        {
          title: "Content Marketing: Minimum Effort, Maximum Results",
          category: "CONTENT",
          readTime: "8 min",
          href: "/marketing"
        },
        {
          title: "Personal Branding for Solo Founders",
          category: "BRANDING",
          readTime: "10 min",
          href: "/marketing"
        },
        {
          title: "Email List Building: 0 to 1,000 Subscribers",
          category: "EMAIL",
          readTime: "11 min",
          href: "/marketing"
        },
        {
          title: "How to Build an Audience from Zero",
          category: "AUDIENCE",
          readTime: "12 min",
          href: "/marketing"
        }
      ]}
      relatedCategories={[
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Start", emoji: "💡", href: "/start" },
        { name: "Tools", emoji: "🛠️", href: "/tools" }
      ]}
      dynamicArticles={posts}
    />
  );
}
