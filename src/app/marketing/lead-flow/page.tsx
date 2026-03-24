import Link from "next/link";
import {
  Eye,
  Target,
  RefreshCw,
  Repeat,
  FileText,
  Send,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Building Consistent Lead Flow | OneFoundr",
  description:
    "Stop chasing customers. Build a repeatable system that brings leads to you—without burning out or hiring a team.",
};

const components = [
  {
    title: "Traffic Source",
    icon: Eye,
    description:
      "Where do people discover you? This could be Google search, social media, referrals, local presence, or outbound outreach. You need ONE reliable source—not five half-baked ones.",
  },
  {
    title: "Capture Mechanism",
    icon: Target,
    description:
      "How do you turn strangers into contacts? An email signup, a phone call, a DM conversation, a booking form. Something that moves them from 'just browsing' to 'in your world.'",
  },
  {
    title: "Nurture Sequence",
    icon: RefreshCw,
    description:
      "How do you stay in touch until they're ready to buy? Email follow-ups, regular content, check-in calls. Most leads aren't ready today—but they will be eventually.",
  },
];

const auditQuestions = [
  "Where did they first hear about you?",
  "What made them reach out?",
  "How long between first contact and purchase?",
  "Did anyone refer them?",
];

const systems = [
  {
    title: "Simple System",
    icon: Repeat,
    subtitle: "For local & service businesses",
    description:
      "Referrals + follow-up. No fancy funnels needed. Just great work, happy customers, and a simple system to stay in touch and ask for referrals.",
    bestFor: "Cleaners, tradespeople, tutors, local service providers",
    href: "/marketing/lead-flow/simple-system",
  },
  {
    title: "Content System",
    icon: FileText,
    subtitle: "For digital businesses & thought leaders",
    description:
      "SEO or YouTube + lead magnet + email nurture. Create content once, attract leads forever. Build authority while you sleep.",
    bestFor: "Consultants, coaches, course creators, SaaS founders",
    href: "/marketing/lead-flow/content-system",
  },
  {
    title: "Outbound System",
    icon: Send,
    subtitle: "For B2B & high-ticket services",
    description:
      "Targeted cold outreach + CRM + structured follow-up. You control the flow by controlling who you contact.",
    bestFor: "B2B freelancers, agencies of one, consultants with niche expertise",
    href: "/marketing/lead-flow/outbound-system",
  },
  {
    title: "Social System",
    icon: Users,
    subtitle: "For personal brands & creators",
    description:
      "Daily content + DM conversations + community building. Turn followers into relationships, relationships into customers.",
    bestFor: "Coaches, creators, personal brand builders, freelancers who enjoy social media",
    href: "/marketing/lead-flow/social-system",
  },
];

export default function LeadFlowPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            MARKETING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building Consistent Lead Flow
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Getting your first customers is one thing. Getting a steady stream of them? That's a
            different game. You need a system—something that works even when you're not actively
            hustling. This isn't about complex funnels or expensive tools. It's about choosing ONE
            approach that fits your business and doing it consistently.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* What Is Lead Flow Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Lead Flow Actually Means</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Lead flow is simple: people who might buy from you, showing up regularly, without you
              chasing them down. It's the difference between hoping for clients and knowing they're
              coming. Most solopreneurs stay stuck in hustle mode—posting randomly, reaching out
              when desperate, celebrating one client then panicking about the next. A lead flow
              system fixes that.
            </p>
          </div>
        </section>

        {/* 3 Components Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            The 3 Components Every Lead System Needs
          </h2>
          <p className="text-gray-600 mb-8">Break down your lead flow into these three parts.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {components.map((component, idx) => {
              const Icon = component.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{component.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{component.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Audit Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Before You Build: Audit What's Working</h2>
          <p className="text-gray-600 mb-8">
            Don't start from scratch. Look at your last 5-10 customers and ask:
          </p>
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="space-y-4 mb-8">
              {auditQuestions.map((question, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{question}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic border-t border-gray-100 pt-6">
              Double down on what's already working before adding something new.
            </p>
          </div>
        </section>

        {/* System Types Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Lead Flow System</h2>
          <p className="text-gray-600 mb-8">
            Pick ONE system that matches your business type and strengths. Don't mix and match—focus
            wins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, idx) => {
              const Icon = system.icon;
              return (
                <Link key={idx} href={system.href}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{system.title}</h3>
                    <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-3">
                      {system.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                      {system.description}
                    </p>
                    <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                      <span className="font-medium">Best for:</span> {system.bestFor}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Build Your Lead Flow System?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Pick one system above and commit to it for the next 90 days. Consistency beats
            sophistication.
          </p>
          <Link
            href="/marketing"
            className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Back to Marketing Hub
          </Link>
        </section>
      </div>
    </div>
  );
}
