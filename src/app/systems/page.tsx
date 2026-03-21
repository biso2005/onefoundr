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
        href: "/systems/complete-guide"
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
          href: "/systems/client-onboarding",
          articleCount: 6
        },
        {
          name: "Workflows",
          description: "Streamline your daily operations",
          href: "/systems/workflows",
          articleCount: 7
        },
        {
          name: "Automation",
          description: "Automate repetitive tasks",
          href: "/systems/automation",
          articleCount: 9
        },
        {
          name: "Project Management",
          description: "Manage projects and clients solo",
          href: "/systems/project-management",
          articleCount: 6
        },
        {
          name: "Templates",
          description: "Ready-to-use business templates",
          href: "/systems/templates",
          articleCount: 10
        }
      ]}
      featuredArticles={[
        {
          title: "How to Create SOPs for Your Solo Business",
          category: "SOPS",
          readTime: "8 min",
          href: "/systems/sops"
        },
        {
          title: "Client Onboarding: Step-by-Step Process",
          category: "ONBOARDING",
          readTime: "10 min",
          href: "/systems/client-onboarding"
        },
        {
          title: "Workflow Automation for Solo Businesses",
          category: "AUTOMATION",
          readTime: "12 min",
          href: "/systems/automation"
        },
        {
          title: "Notion for Solopreneurs: Complete Setup",
          category: "TOOLS",
          readTime: "11 min",
          href: "/systems/notion-setup"
        },
        {
          title: "20 Templates Every Solopreneur Needs",
          category: "TEMPLATES",
          readTime: "9 min",
          href: "/systems/templates"
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
