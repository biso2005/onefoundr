import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Systems & Ops — OneFoundr | Build Your Operating System",
  description: "Build SOPs, workflows, and automations that run your business smoothly."
};

export default async function SystemsPage() {
  const posts = getPostsByCategory("systems");
  return (
    <CategoryHub
      eyebrow="CATEGORY"
      emoji="⚙️"
      title="Systems & Ops"
      description="Build SOPs, workflows, and automations that run your business smoothly. Operate like a real company — even as a team of one."
      color="text-green-500"
      pillarGuide={{
        title: "Coming Soon",
        description: "More comprehensive guides on building systems, SOPs, automation, and workflows are coming soon.",
        readTime: "Check back later",
        href: "/systems"
      }}
      subcategories={[]}
      featuredArticles={[]}
      relatedCategories={[
        { name: "Tools", emoji: "🛠️", href: "/tools" },
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Marketing", emoji: "📣", href: "/marketing" }
      ]}
      dynamicArticles={posts}
    />
  );
}
