import CategoryHub from "@/components/CategoryHub";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata = {
  title: "Build Your Offer — OneFoundr | Package & Price Your Expertise",
  description: "You don't need a product. You need a problem solved for someone with a budget. Here's how to package what you know into something people pay for."
};

const phases = [
  {
    label: "PHASE 1",
    title: "The Foundation",
    badge: "Start Earning",
    subtitle: "The fastest path from zero to consistent income.",
    cards: [
      {
        title: "Productized Services",
        description: "Stop charging by the hour. Package your skill into a fixed-scope, fixed-price offer that clients instantly understand.",
        href: "/offer/productized-services"
      },
      {
        title: "Coaching & Consulting",
        description: "Turn your expertise into high-margin, low-overhead 1:1 or group engagements.",
        href: "/offer/coaching-consulting"
      }
    ]
  },
  {
    label: "PHASE 2",
    title: "The Multiplier",
    badge: "Earn More Per Hour",
    subtitle: "Same work, more money. Strategy over effort.",
    cards: [
      {
        title: "Pricing Strategy",
        description: "The difference between a £500 project and a £2,000 project is rarely the work — it's how you frame the value.",
        href: "/offer/pricing-strategy"
      },
      {
        title: "Offer Stacking",
        description: "Combine services, products, and upsells into a system that increases revenue per client.",
        href: "/offer/offer-stacking"
      }
    ]
  },
  {
    label: "PHASE 3",
    title: "The Scale",
    badge: "Escape the Clock",
    subtitle: "Decouple your time from your income.",
    cards: [
      {
        title: "Digital Products",
        description: "Turn your expertise into templates, courses, or tools that sell while you sleep.",
        href: "/offer/digital-products"
      },
      {
        title: "Memberships",
        description: "Build predictable, recurring revenue with a community or content membership.",
        href: "/offer/memberships"
      }
    ]
  }
];

export default async function OfferPage() {
  const posts = getPostsByCategory("offer");

  return (
    <>
      <CategoryHub
        eyebrow="STAGE 2"
        emoji="📦"
        title="Build Your Offer"
        description="You don't need a product. You need a problem solved for someone with a budget. Here's how to package what you know into something people pay for."
        color="text-blue-500"
        pillarGuide={{
          title: "How to Create an Offer That Sells (For Solopreneurs)",
          description: "The complete guide to turning your skills into a sellable, scalable offer. Packaging, pricing, and positioning — all in one place.",
          readTime: "12 min read",
          href: "/offer/productized-services"
        }}
        subcategories={[
          {
            name: "Productized Services",
            description: "Turn services into scalable products",
            href: "/offer/productized-services",
            articleCount: 1
          },
          {
            name: "Coaching & Consulting",
            description: "Build a consulting or coaching offer",
            href: "/offer/coaching-consulting",
            articleCount: 1
          },
          {
            name: "Pricing Strategy",
            description: "Price your offers for maximum profit",
            href: "/offer/pricing-strategy",
            articleCount: 1
          },
          {
            name: "Offer Stacking",
            description: "Create multiple revenue streams",
            href: "/offer/offer-stacking",
            articleCount: 1
          },
          {
            name: "Digital Products",
            description: "Create and sell digital products",
            href: "/offer/digital-products",
            articleCount: 1
          },
          {
            name: "Memberships",
            description: "Build recurring membership revenue",
            href: "/offer/memberships",
            articleCount: 1
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[
          { name: "Start Solo", emoji: "🚀", href: "/start" },
          { name: "Sales", emoji: "🤝", href: "/sales" },
          { name: "Marketing", emoji: "📣", href: "/marketing" }
        ]}
        dynamicArticles={posts}
      />

      {/* PHASE-BASED LAYOUT */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        {phases.map((phase) => (
          <div key={phase.label}>
            {/* Phase header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {phase.label}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  {phase.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{phase.title}</h2>
              <p className="text-gray-500 mt-1">{phase.subtitle}</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phase.cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition block group"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                  <p className="text-sm font-medium text-blue-600 mt-4 group-hover:underline">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* THE MVO SECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-gray-50 rounded-xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            THE CORE PRINCIPLE
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The MVO Method: Sell It Before You Build It
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3 text-sm md:text-base">
            <p>
              The smartest solo founders don't build first — they sell first. Most people spend weeks (or months) creating something before they know if anyone wants it. The result is wasted time and a product with no buyers.
            </p>
            <p>
              A Minimum Viable Offer flips this. Here's the process: describe the result you're selling, name a price, find one person who needs that result, deliver it manually, collect the feedback, then refine. That's it. No website. No branding. No product.
            </p>
            <p>
              You'll learn more from one paying client than from three months of research. Once you've delivered it once, you package it. Once you've packaged it, you price it properly. Once you've priced it, you scale it.
            </p>
            <p className="font-medium text-gray-800">
              Every guide in this section follows this principle. Pick your phase, pick your topic, and build an offer someone will pay for this week.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
