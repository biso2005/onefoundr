import Link from "next/link";
import { Shield, MapPin, Search, Home, TrendingUp, Repeat, FileText, Handshake, CheckCircle2, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Local Marketing for Solopreneurs | OneFoundr",
  description: "How to dominate your local area when you're a one-person business. Google Business, reviews, referrals, and offline tactics that actually work."
};

export default function LocalMarketingPage() {
  const differences = [
    {
      icon: Shield,
      title: "Trust beats reach",
      description: "National brands have scale. You have proximity and personality. People buy locally from people they trust—and trust comes from reviews, referrals, and showing up consistently."
    },
    {
      icon: MapPin,
      title: "Offline still works",
      description: "Flyers, door knocking, vehicle branding, yard signs—tactics that died for online businesses still crush it locally. Your customers live within 5-10 miles. You can reach them in person."
    },
    {
      icon: Search,
      title: "Google decides who wins",
      description: "When someone searches 'cleaner near me' or 'dog walker in [town]', Google picks the winner. If you're not on Google Business Profile with 20+ reviews, you're invisible."
    }
  ];

  const quickWins = [
    "Set up and optimize your Google Business Profile (photos, hours, services, description)",
    "Get your first 10 reviews from happy customers (text them a link, make it easy)",
    "List your business in 3-5 local directories (Yelp, Yell.com, local Facebook groups)"
  ];

  const tactics = [
    {
      icon: Home,
      title: "Local Marketing Foundations",
      description: "Google Business Profile, first reviews, and basic local SEO. The non-negotiables that make you findable.",
      bestFor: "Everyone—do this first",
      href: "/marketing/local-marketing/foundations",
      featured: true
    },
    {
      icon: TrendingUp,
      title: "Dominating Local Search",
      description: "Rank #1 for 'your service + your town'. Advanced local SEO, content strategy, and review growth.",
      bestFor: "Established businesses ready to own their market",
      href: "/marketing/local-marketing/local-search",
      featured: false
    },
    {
      icon: Repeat,
      title: "Building a Referral Engine",
      description: "Turn happy customers into your best salespeople. Systems for asking, tracking, and rewarding referrals.",
      bestFor: "Service businesses with repeat or high-value customers",
      href: "/marketing/local-marketing/referral-engine",
      featured: false
    },
    {
      icon: FileText,
      title: "Neighborhood Marketing Tactics",
      description: "Flyers, door hangers, yard signs, vehicle branding, local events. Old-school tactics that still crush it.",
      bestFor: "High-volume local services (cleaning, lawn care, handyman)",
      href: "/marketing/local-marketing/neighborhood-tactics",
      featured: false
    },
    {
      icon: Handshake,
      title: "Local Partnerships",
      description: "Partner with other local businesses to share customers. Cross-promotions, bundled offers, referral agreements.",
      bestFor: "Anyone willing to build relationships with complementary businesses",
      href: "/marketing/local-marketing/local-partnerships",
      featured: false
    }
  ];

  const recommendations = [
    {
      title: "If you're a cleaner or lawn care provider:",
      start: "Foundations, Neighborhood tactics",
      then: "Referral engine, Local partnerships"
    },
    {
      title: "If you're a tutor or coach:",
      start: "Foundations, Local search",
      then: "Referral engine, Local partnerships"
    },
    {
      title: "If you're a handyman or tradesperson:",
      start: "Foundations, Neighborhood tactics",
      then: "Local search, Referral engine"
    },
    {
      title: "If you run a local retail or service shop:",
      start: "Foundations, Local search",
      then: "Local partnerships, Referral engine"
    }
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-16 pb-12 border-b border-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">MARKETING</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Local Marketing
          </h1>
          <p className="text-base md:text-lg text-textLight leading-relaxed max-w-3xl">
            If you're selling locally—cleaning, tutoring, handyman work, dog walking—your marketing looks different. You're not trying to reach millions. You need the right people in the right area to know you exist and trust you. The good news? Local marketing favours the solo operator. You can out-hustle the big brands and own your neighbourhood without a massive budget.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto pt-16 pb-16 px-6">
        {/* WHY LOCAL MARKETING IS DIFFERENT */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">Why Local Marketing Is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differences.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-emerald-300 transition-all">
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3">{diff.title}</h3>
                  <p className="text-sm text-textLight leading-relaxed">{diff.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* QUICK WINS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Quick Wins (Do These First)</h2>
          <p className="text-textLight mb-8">
            Before you dive into tactics, nail these three things. They cost nothing and take an afternoon.
          </p>
          <div className="space-y-4">
            {quickWins.map((win, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-primary">{win}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHOOSE YOUR NEXT STEP */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Choose Your Next Step</h2>
          <p className="text-textLight mb-8">
            Start with Foundations, then pick 1-2 growth tactics that fit your business and comfort zone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tactics.map((tactic, idx) => {
              const Icon = tactic.icon;
              return (
                <Link key={idx} href={tactic.href} className="no-underline">
                  <div className={`h-full rounded-xl p-6 transition-all ${
                    tactic.featured 
                      ? "bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-md" 
                      : "bg-white border border-gray-100 hover:shadow-md hover:border-emerald-300"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`w-8 h-8 ${tactic.featured ? "text-emerald-600" : "text-accent"}`} />
                      {tactic.featured && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{tactic.title}</h3>
                    <p className="text-sm text-textLight leading-relaxed mb-4 flex-1">{tactic.description}</p>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Best for</p>
                    <p className="text-sm text-textLight mb-4">{tactic.bestFor}</p>
                    <p className="text-sm font-semibold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      Read guide <ArrowRight size={14} />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* BUSINESS TYPE RECOMMENDATIONS */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">What Works Best for Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-emerald-300 transition-all">
                <h3 className="text-lg font-semibold text-primary mb-4">{rec.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-textLight uppercase tracking-wider mb-1">Start with</p>
                    <p className="text-sm text-primary font-medium">{rec.start}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-textLight uppercase tracking-wider mb-1">Then add</p>
                    <p className="text-sm text-primary font-medium">{rec.then}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
