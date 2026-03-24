import CategoryHub from "@/components/CategoryHub";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Start Solo — OneFoundr | How to Start a One-Person Business",
  description: "Guides to help you validate your idea, choose a niche, and launch your solo business."
};

export default async function StartPage() {
  const posts = getPostsByCategory("start");

  return (
    <>
      <CategoryHub
        eyebrow="STAGE 1"
        emoji="🚀"
        title="Start Solo"
        description="Go from idea to your first paying client. Pick a business, validate it, set it up properly, and launch — all as one person."
        color="text-green-500"
        pillarGuide={{
          title: "The Solo Founder's First 90 Days: Your Week-by-Week Launch Plan",
          description: "The flagship guide that ties everything together. A complete week-by-week action plan from day one to first revenue.",
          readTime: "20 min read",
          href: "/start/first-90-days"
        }}
        subcategories={[
          {
            name: "Business Ideas",
            description: "Browse 41+ profitable ideas you can start alone",
            href: "/start/business-ideas",
            articleCount: 41
          },
          {
            name: "Idea Validation",
            description: "Test your idea in 7 days before committing",
            href: "/start/idea-validation",
            articleCount: 5
          },
          {
            name: "Business Models",
            description: "Compare 8 models and pick the right one",
            href: "/start/business-models",
            articleCount: 8
          },
          {
            name: "Niche Selection",
            description: "Find your profitable sweet spot",
            href: "/start/niche-selection",
            articleCount: 1
          },
          {
            name: "Startup Costs",
            description: "How much you actually need to start",
            href: "/start/startup-costs",
            articleCount: 1
          },
          {
            name: "Legal & Financial Setup",
            description: "Registration, tax, insurance — the basics",
            href: "/start/legal-setup",
            articleCount: 1
          },
          {
            name: "First 90 Days",
            description: "Your week-by-week launch plan",
            href: "/start/first-90-days",
            articleCount: 1
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[]}
        dynamicArticles={posts}
      />

      {/* SECTION A — CALLOUT BOX */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 max-w-3xl mx-auto mt-8 mb-16">
        <p className="text-sm text-gray-700">Short on time? Start with the First 90 Days plan. It references all the other guides as you need them.</p>
        <Link href="/start/first-90-days" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
          Go to the First 90 Days plan →
        </Link>
      </div>

      {/* SECTION C — SUPPORTING GUIDES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Supporting Guides</h2>
        <p className="text-gray-600 text-center mt-2 mb-10">Not part of the core journey but useful when you need them.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link href="/start/side-hustle-to-full-time" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-200 block">
            <h3 className="text-lg font-semibold text-gray-900">Side Hustle to Full Time</h3>
            <p className="text-sm text-gray-600 mt-2">When to quit your job and go solo. The decision framework.</p>
            <p className="text-xs text-gray-400 italic mt-4">Coming soon</p>
          </Link>

          {/* Card 2 */}
          <Link href="/start/when-to-kill-your-idea" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-200 block">
            <h3 className="text-lg font-semibold text-gray-900">When to Kill Your Idea</h3>
            <p className="text-sm text-gray-600 mt-2">How to know when to pivot or walk away without wasting months.</p>
            <p className="text-xs text-gray-400 italic mt-4">Coming soon</p>
          </Link>

          {/* Card 3 */}
          <Link href="/start/business-canvas" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-200 block">
            <h3 className="text-lg font-semibold text-gray-900">The One-Page Business Canvas</h3>
            <p className="text-sm text-gray-600 mt-2">A minimal planning tool for solo founders. No 40 page business plan needed.</p>
            <p className="text-xs text-gray-400 italic mt-4">Coming soon</p>
          </Link>
        </div>
      </section>
    </>
  );
}
