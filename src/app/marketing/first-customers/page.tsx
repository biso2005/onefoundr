import CategoryHub from "@/components/CategoryHub";
import Link from "next/link";
import {
  Users,
  Send,
  Gift,
  MessageSquare,
  MapPin,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "Getting Your First Customers | OneFoundr",
  description:
    "Zero to 10 clients: warm outreach, cold outreach, free work, and partnerships that actually work when you have no audience.",
};

const principles = [
  {
    title: "Start with warm before cold",
    description:
      "Your network is your fastest path to revenue. Friends, former colleagues, social media connections—they already trust you.",
  },
  {
    title: "Make the first offer easy to say yes to",
    description:
      "Lower the barrier. Discount, trial, pilot project, free sample—whatever removes friction.",
  },
  {
    title: "Go where they already are",
    description:
      "Don't build an audience from scratch. Find where your customers hang out and show up there.",
  },
  {
    title: "Have conversations, not pitches",
    description: "Ask questions. Understand their problem. Let them sell themselves.",
  },
  {
    title: "Ask for referrals immediately",
    description:
      "Your first customers are your best marketers. Ask while the excitement is fresh.",
  },
];

const businessGuides = [
  {
    type: "Local Services",
    subtitle: "(cleaning, tutoring, handyman)",
    startWith: ["Warm outreach", "Local networking"],
    thenAdd: ["Partnerships", "Free work"],
  },
  {
    type: "Digital Services",
    subtitle: "(design, writing, consulting)",
    startWith: ["Warm outreach", "Cold outreach"],
    thenAdd: ["Communities", "Free work"],
  },
  {
    type: "Products",
    subtitle: "(physical or digital)",
    startWith: ["Warm outreach", "Communities"],
    thenAdd: ["Free samples", "Partnerships"],
  },
];

export default function FirstCustomersPage() {
  return (
    <>
      <CategoryHub
        eyebrow="FIRST 10 CUSTOMERS"
        emoji="👥"
        title="First Customers"
        description="Zero to 10 is about speed, not scale. Pick one tactic and execute it for 2 weeks."
        color="text-green-500"
        pillarGuide={{
          title: "Getting Your First Customers",
          description: "Proven tactics to land your first 10 paying customers—whether you're selling services, products, or building an audience.",
          readTime: "8 min read",
          href: "/marketing/first-customers"
        }}
        subcategories={[
          {
            name: "Warm Outreach",
            description: "Tap your existing network—friends, former colleagues, social connections who already know and trust you.",
            href: "/marketing/first-customers/warm-outreach",
            articleCount: 1
          },
          {
            name: "Cold Outreach",
            description: "DMs, emails, comments—reach people you don't know yet with personalized, value-first messages.",
            href: "/marketing/first-customers/cold-outreach",
            articleCount: 1
          },
          {
            name: "Free Work & Samples",
            description: "Give away your work to the right people in exchange for testimonials, case studies, and referrals.",
            href: "/marketing/first-customers/free-work",
            articleCount: 1
          },
          {
            name: "Communities & Forums",
            description: "Show up in online communities, help people for free, and build trust before you ever pitch.",
            href: "/marketing/first-customers/communities",
            articleCount: 1
          },
          {
            name: "Local Networking",
            description: "Face-to-face events, local business groups, neighborhood apps—own your local area.",
            href: "/marketing/first-customers/local-networking",
            articleCount: 1
          },
          {
            name: "Partnerships & Referrals",
            description: "Partner with businesses that serve the same customers but aren't competitors. Trade referrals.",
            href: "/marketing/first-customers/partnerships",
            articleCount: 1
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[
          { name: "Lead Flow", emoji: "📊", href: "/marketing/lead-flow" },
          { name: "Marketing Hub", emoji: "📣", href: "/marketing" },
          { name: "Sales", emoji: "🤝", href: "/sales" }
        ]}
        dynamicArticles={[]}
      />

      {/* CUSTOM SECTION 1: PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          5 Principles That Work for Everyone
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          These apply whether you're selling services, products, or yourself.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM SECTION 2: BUSINESS GUIDE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What Works Best for Your Business?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Here's a quick roadmap based on what you're selling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessGuides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {guide.type}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{guide.subtitle}</p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Start with:
                </p>
                <ul className="space-y-2">
                  {guide.startWith.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 font-medium">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Then add:
                </p>
                <ul className="space-y-2">
                  {guide.thenAdd.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 mx-4 rounded-2xl border border-emerald-100 p-8 md:p-12 text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Ready to Get Your First Customer?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Pick one tactic from above and commit to it for 2 weeks. Consistency beats perfection every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/marketing"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Back to Marketing Hub
          </Link>
          <Link
            href="/marketing/lead-flow"
            className="px-6 py-3 border border-emerald-300 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
          >
            Next: Build Lead Flow
          </Link>
        </div>
      </section>
    </>
  );
}
