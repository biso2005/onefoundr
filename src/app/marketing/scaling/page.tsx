import Link from "next/link";
import {
  TrendingUp,
  Copy,
  Plus,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Scaling What Works | OneFoundr",
  description: "Grow your reach and revenue without hiring a team or burning out. Double down on what's working, multiply your efforts, and expand strategically.",
};

const scalingComparison = [
  {
    label: "Traditional Scaling",
    items: [
      "Hire more people",
      "Add more channels",
      "Spend more on ads",
      "Do more of everything",
    ],
  },
  {
    label: "Solo Scaling",
    items: [
      "Optimize what's working",
      "Multiply your reach (repurpose, automate, collaborate)",
      "Expand only when one channel is maxed out",
      "Do less, but better",
    ],
  },
];

const auditChecklist = [
  "List every marketing activity you did in the last 3 months (content, outreach, social posts, networking, etc.)",
  "Track where your last 10 customers/leads came from",
  "Identify the ONE channel driving most results",
  "Ask: Am I maxing out this channel, or just dabbling?",
];

const scalingModes = [
  {
    title: "Optimize",
    icon: TrendingUp,
    description:
      "You've found what works. Now squeeze more out of it. Better headlines, stronger CTAs, higher conversions. Get 2x results from the same effort.",
    whenToUse: "You have ONE channel working, but you're not maxing it out yet",
    href: "/marketing/scaling/optimize",
  },
  {
    title: "Multiply",
    icon: Copy,
    description:
      "Turn one piece of content into ten. Automate follow-ups. Collaborate to reach new audiences. Expand your reach without new channels.",
    whenToUse: "Your channel is optimized, now you want more reach without more work",
    href: "/marketing/scaling/multiply",
  },
  {
    title: "Expand",
    icon: Plus,
    description:
      "Add a second marketing channel—but only when your first one is running smoothly. Strategic expansion, not random experiments.",
    whenToUse: "You've maxed out one channel and you're ready to diversify (carefully)",
    href: "/marketing/scaling/expand",
  },
];

export default function ScalingPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
            MARKETING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Scaling What Works
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            You've got customers. You've got a lead flow system. Now you want more—more reach, more revenue, more impact. But you're one person. You can't hire a marketing team or throw money at ads. Solo scaling is different. It's about doing MORE with what you've got, or doing LESS but better. It's strategic, not chaotic.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Why Solo Scaling Is Different Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Solo Scaling Is Different</h2>
          <p className="text-gray-600 mb-8">The rules change when it's just you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scalingComparison.map((column, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{column.label}</h3>
                <div className="space-y-4">
                  {column.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 80/20 Audit Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Here: The 80/20 Audit</h2>
          <p className="text-gray-600 mb-8">
            Before you scale anything, figure out what's actually working. Most solopreneurs are spreading effort across 5 channels when 80% of their results come from one. Find that one thing.
          </p>
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10">
            <div className="space-y-6">
              {auditChecklist.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 flex-shrink-0">
                    <span className="text-sm font-semibold text-purple-600">{idx + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                <strong>Closing line:</strong> Once you know your 80/20 channel, you have three options: optimize it, multiply it, or expand beyond it.
              </p>
            </div>
          </div>
        </section>

        {/* Scaling Modes Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Scaling Mode</h2>
          <p className="text-gray-600 mb-8">
            Pick the mode that matches where you are right now. You don't need all three—just the next logical step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scalingModes.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <Link key={idx} href={mode.href}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-purple-300 transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-purple-600 flex-shrink-0" />
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{mode.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                      {mode.description}
                    </p>
                    <p className="text-xs font-medium text-purple-600 uppercase tracking-wider">
                      When to use: {mode.whenToUse}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Warning Callout Box */}
        <section className="mb-20">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Don't Skip Steps</h3>
                <p className="text-gray-700 leading-relaxed">
                  The biggest mistake solopreneurs make? Jumping to 'Expand' before they've optimized and multiplied what's already working. If you're getting 10 leads/month from one channel, don't add a second channel—get to 30 leads from the first one. Only expand when you've truly maxed out your primary channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Scale Strategically?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start with the 80/20 audit. Find your one thing, then choose which mode comes next.
          </p>
          <Link
            href="/marketing"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Back to Marketing Hub
          </Link>
        </section>
      </div>
    </div>
  );
}
