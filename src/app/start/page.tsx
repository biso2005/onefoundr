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

      {/* SECTION A — JOURNEY STEPS */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center">The Start Solo Journey</h2>
        <p className="text-gray-600 text-center mt-2 mb-10">Follow these steps in order. Each one builds on the last.</p>

        <div className="space-y-0">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">1</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/business-ideas" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Pick Your Idea
              </Link>
              <p className="text-sm text-gray-600 mt-1">Browse 41+ solo business ideas filtered by category, cost, and difficulty.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">2</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/idea-validation" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Validate It
              </Link>
              <p className="text-sm text-gray-600 mt-1">Test demand in 7 days before you invest months building the wrong thing.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">3</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/business-models" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Choose Your Model
              </Link>
              <p className="text-sm text-gray-600 mt-1">Compare 8 proven business models and pick the one that fits your situation.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">4</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/niche-selection" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Find Your Niche
              </Link>
              <p className="text-sm text-gray-600 mt-1">Get specific about who you serve. The contrarian guide to niching without niching too early.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">5</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/startup-costs" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Know Your Numbers
              </Link>
              <p className="text-sm text-gray-600 mt-1">How much it actually costs to start. Spoiler: less than you think.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">6</div>
              <div className="w-0.5 h-8 bg-gray-200"></div>
            </div>
            <div className="pb-8">
              <Link href="/start/legal-setup" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Set Up Properly
              </Link>
              <p className="text-sm text-gray-600 mt-1">Registration, tax, insurance, and the boring stuff that protects you.</p>
            </div>
          </div>

          {/* Step 7 (last - no connector line) */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm shrink-0">7</div>
            </div>
            <div>
              <Link href="/start/first-90-days" className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                Launch — Week by Week
              </Link>
              <p className="text-sm text-gray-600 mt-1">The complete 90 day action plan. What to do in week 1, week 2, all the way to first revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B — CALLOUT BOX */}
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
