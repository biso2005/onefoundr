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
        title: "The Solopreneur Operating System: Systemize Your Business",
        description: "The complete framework for building systems that let your business run without you being involved in every task.",
        readTime: "15 min read",
        href: "/systems/sops"
      }}
      subcategories={[
        {
          name: "SOPs",
          description: "Document every process",
          href: "/systems/sops",
          articleCount: 8
        },
        {
          name: "Client Onboarding",
          description: "Professional onboarding systems",
          href: "/systems/done-over-perfect",
          articleCount: 6
        },
        {
          name: "Workflows",
          description: "Streamline your daily operations",
          href: "/systems/automation-trap",
          articleCount: 7
        },
        {
          name: "Automation",
          description: "Automate repetitive tasks",
          href: "/systems/automation-trap",
          articleCount: 9
        },
        {
          name: "Project Management",
          description: "Manage projects and clients solo",
          href: "/systems/done-over-perfect",
          articleCount: 6
        },
        {
          name: "Templates",
          description: "Ready-to-use business templates",
          href: "/systems/sops",
          articleCount: 10
        }
      ]}
      featuredArticles={[
        {
          title: "Building Your AI Operations Team: A Solopreneur's Playbook",
          category: "AUTOMATION",
          readTime: "13 min",
          href: "/systems/ai-operations-team"
        },
        {
          title: "How to Create SOPs for Your Solo Business",
          category: "SOPS",
          readTime: "8 min",
          href: "/systems"
        },
        {
          title: "Workflow Automation for Solo Businesses",
          category: "AUTOMATION",
          readTime: "12 min",
          href: "/systems"
        },
        {
          title: "Notion for Solopreneurs: Complete Setup",
          category: "TOOLS",
          readTime: "11 min",
          href: "/systems"
        },
        {
          title: "20 Templates Every Solopreneur Needs",
          category: "TEMPLATES",
          readTime: "9 min",
          href: "/systems"
        }
      ]}
      relatedCategories={[
        { name: "Tools", emoji: "🛠️", href: "/tools" },
        { name: "Sales", emoji: "🤝", href: "/sales" },
        { name: "Marketing", emoji: "📣", href: "/marketing" }
      ]}
      dynamicArticles={posts}
    />
  );
}
