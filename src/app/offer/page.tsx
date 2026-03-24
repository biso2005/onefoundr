import Link from "next/link";
import { Package, PoundSterling, Target, Truck, Rocket, Layers, ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: "Build Your Offer | OneFoundr",
  description: "Turn your skills into something people will pay for. Craft, price, and position your offer—whether you're starting fresh or fixing what's broken."
};

export default function OfferPage() {
  const differences = [
    {
      icon: Package,
      title: "Packaging",
      description: "What exactly are you selling? Scope, deliverables, timeline, format. The clearer this is, the easier it is to sell."
    },
    {
      icon: PoundSterling,
      title: "Pricing",
      description: "How much does it cost and how do you charge? Hourly, project, value-based, retainer. This shapes everything."
    },
    {
      icon: Target,
      title: "Positioning",
      description: "Why should they pick you? Your niche, your angle, your unique promise. This is how you stand out."
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "How do you actually deliver? Your process, your systems, your boundaries. This is how you stay sane."
    }
  ];

  const diagnostics = [
    {
      title: "I'm starting from scratch",
      description: "I know what I want to do, but I haven't sold it yet. I need to create my first offer.",
      pointsTo: "First Offer",
      href: "/offer/from-scratch"
    },
    {
      title: "I have an offer but something's off",
      description: "I'm getting some clients, but I'm undercharging, attracting the wrong people, or drowning in custom work.",
      pointsTo: "Pricing or Positioning"
    },
    {
      title: "I want to scale without hiring",
      description: "My offer works, but I'm trading time for money. I need to productize or create tiers.",
      pointsTo: "Productization"
    }
  ];

  const paths = [
    {
      icon: Rocket,
      title: "First Offer",
      description: "Build your minimum viable offer. Stop overthinking, start selling. We'll cover packaging, simple pricing, and getting it out the door.",
      bestFor: "Complete beginners who haven't sold anything yet",
      href: "/offer/first-offer",
      featured: true
    },
    {
      icon: PoundSterling,
      title: "Pricing",
      description: "Hourly vs project vs value-based vs retainer. How to price with confidence, when to raise rates, and how to stop leaving money on the table.",
      bestFor: "Anyone who's unsure if they're charging the right amount",
      href: "/offer/pricing",
      featured: false
    },
    {
      icon: Target,
      title: "Positioning",
      description: "How to stand out when there are thousands of others doing what you do. Niching, messaging, and attracting ideal clients.",
      bestFor: "Anyone who feels invisible or is attracting the wrong clients",
      href: "/offer/positioning",
      featured: false
    },
    {
      icon: Layers,
      title: "Productization",
      description: "Turn custom work into packages. Create tiers (DIY, done-with-you, done-for-you). Escape the time-for-money trap without hiring.",
      bestFor: "Anyone who's selling but drowning in custom requests",
      href: "/offer/productization",
      featured: false
    }
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-16 pb-12 border-b border-gray-100 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">OFFER</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Build Your Offer
          </h1>
          <p className="text-base md:text-lg text-textLight leading-relaxed max-w-3xl">
            You've got skills. You've got an idea. Now you need something you can actually sell. An offer isn't just 'what you do'—it's how you package it, price it, and position it so the right people say yes. Whether you're building from scratch, fixing something that's not working, or trying to escape the time-for-money trap, this is where you figure it out.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto pt-16 pb-16 px-6">
        {/* DIAGNOSTIC SECTION */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Where Are You Right Now?</h2>
          <p className="text-textLight mb-8">Pick the one that sounds most like you:</p>
          <div className="space-y-4">
            {diagnostics.map((diag, idx) => {
              const content = (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{diag.title}</h3>
                    <p className="text-sm text-textLight">{diag.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </div>
              );

              if (diag.href) {
                return (
                  <Link key={idx} href={diag.href} className="no-underline">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer">
                      {content}
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-4">→ {diag.pointsTo}</p>
                    </div>
                  </Link>
                );
              }

              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer">
                  {content}
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-4">→ {diag.pointsTo}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FRAMEWORK SECTION */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">The 4 Elements of Any Offer</h2>
          <p className="text-textLight mb-8">
            Every offer—service, product, or package—has four parts. Get these right and people buy. Get them wrong and you're stuck.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* CHOOSE YOUR PATH */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Choose Your Path</h2>
          <p className="text-textLight mb-8">
            Start where you are. You don't need to read everything—just pick what's relevant right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <Link key={idx} href={path.href} className="no-underline">
                  <div className={`h-full rounded-xl p-6 transition-all ${
                    path.featured 
                      ? "bg-emerald-50 border border-emerald-200 hover:border-emerald-400 hover:shadow-md" 
                      : "bg-white border border-gray-100 hover:shadow-md hover:border-emerald-300"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`w-8 h-8 ${path.featured ? "text-emerald-600" : "text-accent"}`} />
                      {path.featured && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{path.title}</h3>
                    <p className="text-sm text-textLight leading-relaxed mb-4 flex-1">{path.description}</p>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Best for</p>
                    <p className="text-sm text-textLight mb-4">{path.bestFor}</p>
                    <p className="text-sm font-semibold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      Read guide <ArrowRight size={14} />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
