import CategoryHub from "@/components/CategoryHub";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Tools & AI — OneFoundr | Your Tech Stack for Solo Business",
  description: "The essential tech stack and AI tools for running a one-person business."
};

export default async function ToolsPage() {
  const posts = getPostsByCategory("tools");
  return (
    <>
      <CategoryHub
        eyebrow="CATEGORY"
        emoji="🛠️"
        title="Tools & AI"
        description="The essential tech stack and AI tools for running a one-person business. Curated reviews, comparisons, and setup guides for every tool you need."
        color="text-green-500"
        pillarGuide={{
          title: "Best Tools for Solopreneurs: The Complete Tech Stack Guide",
          description: "Every tool you need to run your solo business — organized by function, with honest reviews and recommendations.",
          readTime: "20 min read",
          href: "/tools/ai-tools"
        }}
        subcategories={[
          {
            name: "AI Tools",
            description: "AI tools that replace a team",
            href: "/tools/ai-tools",
            articleCount: 15
          },
          {
            name: "Website Builders",
            description: "Build your online presence",
            href: "/tools/ai-tools",
            articleCount: 7
          },
          {
            name: "Email Tools",
            description: "Email marketing platforms",
            href: "/tools/building-ai-agent",
            articleCount: 8
          },
          {
            name: "CRM",
            description: "Manage clients and leads",
            href: "/tools/ai-tools",
            articleCount: 6
          },
          {
            name: "Automation",
            description: "Zapier, Make, and more",
            href: "/tools/building-ai-agent",
            articleCount: 9
          },
          {
            name: "No-Code",
            description: "Build without coding",
            href: "/tools/building-ai-agent",
            articleCount: 7
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[]}
        dynamicArticles={posts}
      />
      <p className="text-gray-600 text-lg max-w-2xl mb-8 mx-auto text-center">
        The lean tech stack for one-person businesses. Only the tools you actually need, plus AI and automation that replaces an entire team.
      </p>
    </>
  );
}
