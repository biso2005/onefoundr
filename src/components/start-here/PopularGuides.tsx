import Link from "next/link";
import { businessIdeas } from "@/data/businessIdeas";

const POPULAR_GUIDES = [
  { rank: 1, title: "Best Tools for Solopreneurs", category: "TOOLS", href: "/tools" },
  { rank: 2, title: `${businessIdeas.length} One-Person Business Ideas`, category: "START", href: "/start/business-ideas" },
  { rank: 3, title: "AI Tools That Replace a Team", category: "TOOLS", href: "/tools/ai-tools" },
  { rank: 4, title: "How to Get Your First 10 Clients", category: "SALES", href: "/sales/getting-clients" },
  { rank: 5, title: "Pricing Strategy for Solopreneurs", category: "OFFER", href: "/offer/pricing-strategy" },
  { rank: 6, title: "The Solopreneur Operating System", category: "SYSTEMS", href: "/systems" },
  { rank: 7, title: "Content Marketing for Solopreneurs", category: "MARKETING", href: "/marketing/content-marketing" },
  { rank: 8, title: "Productized Services Blueprint", category: "OFFER", href: "/offer/productized-services" },
  { rank: 9, title: "Discovery Call Script & Framework", category: "SALES", href: "/sales/discovery-calls" },
  { rank: 10, title: "How to Start a One-Person Business", category: "START", href: "/start" }
];

export default function PopularGuides() {
  return (
    <section className="bg-white w-full py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-2">
          Reader Favorites
        </h2>
        <p className="text-base text-textLight mb-8">
          Our most-read guides across all categories
        </p>

        <div className="flex flex-col">
          {POPULAR_GUIDES.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              className={`flex items-center gap-4 py-4 no-underline ${
                index < POPULAR_GUIDES.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Rank Number */}
              <span className="text-2xl font-bold text-accentDark/20 min-w-[40px] text-center">
                {guide.rank}
              </span>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[15px] font-medium text-primary m-0 mb-1">
                  {guide.title}
                </p>
                <p className="text-xs uppercase tracking-wider text-accentDark font-semibold m-0">
                  {guide.category}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-accentDark text-base min-w-[20px] text-right">
                →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/start"
          className="inline-block text-sm text-accentDark font-medium no-underline mt-4 hover:text-accent transition-colors"
        >
          View All Guides →
        </Link>
      </div>
    </section>
  );
}
