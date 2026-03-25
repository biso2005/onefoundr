import Link from "next/link";
import {
  Users,
  Send,
  Gift,
  MessageSquare,
  MapPin,
  Handshake,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Getting Your First Customers | OneFoundr",
  description:
    "Proven tactics to land your first 10 paying customers—whether you're selling services, products, or building an audience.",
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

const tactics = [
  {
    title: "Warm Outreach",
    icon: Users,
    description:
      "Tap your existing network—friends, former colleagues, social connections who already know and trust you.",
    bestFor: "Any business, especially services",
    href: "/marketing/first-customers/warm-outreach",
  },
  {
    title: "Cold Outreach",
    icon: Send,
    description:
      "DMs, emails, comments—reach people you don't know yet with personalized, value-first messages.",
    bestFor: "B2B services, consulting, freelancing",
    href: "/marketing/first-customers/cold-outreach",
  },
  {
    title: "Free Work & Samples",
    icon: Gift,
    description:
      "Give away your work to the right people in exchange for testimonials, case studies, and referrals.",
    bestFor: "New freelancers, product businesses, consultants",
    href: "/marketing/first-customers/free-work",
  },
  {
    title: "Communities & Forums",
    icon: MessageSquare,
    description:
      "Show up in online communities, help people for free, and build trust before you ever pitch.",
    bestFor: "Digital products, courses, SaaS, consulting",
    href: "/marketing/first-customers/communities",
  },
  {
    title: "Local Networking",
    icon: MapPin,
    description:
      "Face-to-face events, local business groups, neighborhood apps—own your local area.",
    bestFor: "Local services, physical products, brick-and-mortar",
    href: "/marketing/first-customers/local-networking",
  },
  {
    title: "Partnerships & Referrals",
    icon: Handshake,
    description:
      "Partner with businesses that serve the same customers but aren't competitors. Trade referrals.",
    bestFor: "Service businesses, local businesses, B2B",
    href: "/marketing/first-customers/partnerships",
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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            MARKETING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Getting Your First Customers
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The first 10 customers are the hardest—and the most important. You don't need a perfect
            funnel or a huge audience. You need the right approach for what you're selling, and the
            guts to start before you're ready.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Universal Framework Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">5 Principles That Work for Everyone</h2>
          <p className="text-gray-600 mb-8">These apply whether you're selling services, products, or yourself.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tactics Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Tactic</h2>
          <p className="text-gray-600 mb-8">
            Pick 1-2 tactics that match your business type and comfort zone. Don't try
            everything—focus wins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tactics.map((tactic, idx) => {
              const Icon = tactic.icon;
              return (
                <Link key={idx} href={tactic.href}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{tactic.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                      {tactic.description}
                    </p>
                    <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                      Best for: {tactic.bestFor}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Business Type Guide Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What Works Best for Your Business?</h2>
          <p className="text-gray-600 mb-8">Here's a quick roadmap based on what you're selling.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessGuides.map((guide, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">{guide.type}</h3>
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

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get Your First Customer?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Pick one tactic above and commit to it for 2 weeks. Consistency beats perfection every time.
          </p>
          <Link
            href="/marketing"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accentDark transition-colors"
          >
            Back to Marketing Hub
          </Link>
        </section>
      </div>
    </div>
  );
}
