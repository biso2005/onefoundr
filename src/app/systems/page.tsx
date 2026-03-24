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
      eyebrow="STAGE 3"
      emoji="⚙️"
      title="Systems & Ops"
      description="Build SOPs, workflows, and automations that run your business smoothly. Operate like a real company — even as a team of one."
      color="text-green-500"
      pillarGuide={{
        title: "Building Your AI Operations Team: A Solopreneur's Playbook",
        description: "You don't need to hire. You need to architect. Meet the 3-tier AI operations team that replaces 2-4 full-time employees for under $100/month.",
        readTime: "15 min read",
        href: "/systems/ai-operations-team"
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
