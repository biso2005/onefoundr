import Link from "next/link";
import {
  Package,
  TrendingUp,
  Zap,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
} from "lucide-react";

export const metadata = {
  title: "Scale Without Hiring: The Solo Ceiling Breakthrough | OneFoundr",
  description: "Break through your £4k-£6k ceiling. Learn the three levers—productization, premium pricing, automation—to 2-3x revenue without hiring.",
};

const threeLevers = [
  {
    title: "Productization",
    icon: Package,
    subtitle: "Service → Product",
    definition: "Turn the custom service into a repeatable package with fixed scope.",
    example: "Custom consulting → £2,500 'Strategy Sprint' (fixed deliverables, fixed timeline).",
    constraint:
      "Must reduce delivery time by 50% through templating/systems. If it takes the same time, it's not productized.",
    gbpReality:
      "£3,000 Implementation → £1,200 'Audit + Roadmap' (lighter) → £197 Template (no time).",
  },
  {
    title: "Premium Pricing",
    icon: TrendingUp,
    subtitle: "Same Hours, 3x Value",
    definition:
      "Stop competing on efficiency. Compete on specificity and outcome certainty.",
    example:
      "Generalist 'Marketing Help' £1,500 → 'Email Sequences for SaaS Founders' £4,500.",
    constraint:
      "Requires saying no to 80% of inbound (scary but necessary).",
    gbpReality:
      "One £4,000 client beats four £1,000 clients (less admin, more profit).",
  },
  {
    title: "Automated Delivery",
    icon: Zap,
    subtitle: "The Machine",
    definition:
      "The client self-serves through templates, videos, and automated workflows. You architect; they implement.",
    example:
      "'Set up your own email automation' course + Notion templates (£497, 2 hours total support).",
    constraint:
      "Only for info-heavy delivery (strategy, frameworks). Not for physical labor or high-creativity bespoke work.",
    gbpReality:
      "Information products scale; execution services don't. Know the difference.",
  },
];

const productLadder = [
  {
    tier: "Tier 1",
    name: "The Implementation",
    tagline: "High Touch, High £",
    what: "You do it. Bespoke, custom, heavy.",
    price: "£3k–£10k",
    time: "10–20 hours",
    constraint: "Limited slots (2/month max). This funds the business but traps you.",
    icon: Clock,
  },
  {
    tier: "Tier 2",
    name: "The Guided Implementation",
    tagline: "Medium Touch",
    what: "They do it, you audit/steer. Workshops, roadmaps, DWY (Done-With-You).",
    price: "£800–£2,000",
    time: "3–5 hours (group calls or async video reviews)",
    math: "5 clients @ £1,500 = £7,500 at 15 hours vs. 1 client @ £7,500 at 20 hours. Same money, 5x impact.",
    icon: TrendingUp,
  },
  {
    tier: "Tier 3",
    name: "The Asset",
    tagline: "Low Touch, Scale",
    what: "Template, course, tool, SaaS. They consume, you maintain (minimally).",
    price: "£47–£497",
    time: "<1 hour per sale (support only)",
    constraint:
      "Requires marketing volume. See /marketing/lead-flow for traffic generation.",
    icon: Zap,
  },
];

const soloCeilingTable = [
  {
    model: "Pure Time Trade",
    formula: "40 hours × £100/hour",
    monthly: "£4,000",
    reality: "(Unsustainable, no sales time)",
  },
  {
    model: "Productized Service",
    formula: "15 hours delivery × £1,200 project",
    monthly: "£18,000",
    reality: "(Same week, freedom to grow)",
  },
];

const automationChecklist = [
  "Marketing: 5 hours/week (non-negotiable, even when 'full')",
  "Delivery: Max 20 hours/week (or you have no sales pipeline)",
  "Admin: 2 hours/week (use software, not humans—see /tools/admin-stack)",
];

const hellNoList = [
  {
    antiPattern: "Custom proposals",
    solution: "Use Loom videos instead (saves 2 hours per lead)",
  },
  {
    antiPattern: '"Quick calls"',
    solution:
      "Async voice notes only (Voice memo > Zoom for solo scaling)",
  },
  {
    antiPattern: "Scope creep",
    solution:
      '"That would be Phase 2 at £X" (attach GBP number to every expansion)',
  },
];

const pricingGeometry = [
  {
    model: "Old Model",
    breakdown: "10 clients × £800",
    total: "£8,000",
    hours: "40 hours billable",
    growth: "0 hours growth",
  },
  {
    model: "New Model",
    breakdown:
      "2 clients × £3,000 (Tier 1) + 4 clients × £800 (Tier 2)",
    total: "£9,200",
    hours: "28 hours billable",
    growth: "12 hours for marketing/Tier 3 build",
  },
];

const transitionProtocol = [
  {
    phase: "Month 1–2",
    action: "Stop accepting Tier 1 clients at old prices. Raise Tier 1 50% to buy back time.",
  },
  {
    phase: "Month 3–4",
    action: "Introduce Tier 2 to waitlist.",
  },
  {
    phase: "Month 5+",
    action: "Build Tier 3 using Tier 2 content (record the workshops).",
  },
];

export default function SoloCeilingPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-20 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
            MONEY & REVENUE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Scale Without Hiring: The Solo Ceiling and How to Break It
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
            You have 40 hours. You can't work more. Here's how to earn double without adding humans.
          </p>

          {/* Hook */}
          <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 italic mb-4">
              "I was working 50 hours a week and capped at £6k/month. Every new client meant dropping an old one. I thought I needed an employee. Instead, I needed to stop selling my time and start selling the transformation. The result: £18k months at 35 hours. No Slack. No payroll. No 'catch-up meetings.'"
            </p>
            <p className="text-sm font-semibold text-gray-600">— A solopreneur who broke through</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* The Solo Ceiling Defined */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Solo Ceiling Defined</h2>
          <p className="text-gray-600 mb-8">
            Most solopreneurs hit a wall around £4k–£6k/month because they're still trading time for money. Here's the math:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">Model</th>
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">Formula</th>
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">Monthly</th>
                  <th className="text-left font-semibold text-gray-600 py-3 px-4">Reality</th>
                </tr>
              </thead>
              <tbody>
                {soloCeilingTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx === 1 ? "bg-purple-50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      {row.model}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{row.formula}</td>
                    <td className="py-3 px-4 font-bold text-gray-900">
                      {row.monthly}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{row.reality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-blue-900">
              <strong>The insight:</strong> Doubling doesn't come from working 80 hours. It comes from changing the exchange rate. Sell projects, not hours. Sell leverage, not labour.
            </p>
          </div>
        </section>

        {/* The Three Levers */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              The Three Levers
            </h2>
            <p className="text-gray-600 text-lg">
              Pick One Lever (You Can't Pull All Three at Once)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threeLevers.map((lever, idx) => {
              const Icon = lever.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {lever.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-purple-600 mb-4">
                    {lever.subtitle}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Definition
                      </p>
                      <p className="text-gray-700">{lever.definition}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Example
                      </p>
                      <p className="text-gray-700">{lever.example}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        Constraint Check
                      </p>
                      <p className="text-gray-700">{lever.constraint}</p>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-xs font-semibold text-yellow-900 uppercase tracking-wide mb-1">
                        GBP Reality
                      </p>
                      <p className="text-sm text-yellow-900">{lever.gbpReality}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">Model Markers (The "How" for Each Business Type)</h4>
            <div className="space-y-3 text-gray-700">
              <p><strong>Service:</strong> Productization lever first (package the scope).</p>
              <p><strong>Productized:</strong> Automation lever second (remove yourself from delivery via templates).</p>
              <p><strong>Digital/SaaS:</strong> Already productized; focus on Premium lever (raise prices) or Volume (ads/content).</p>
              <p><strong>Content:</strong> Leverage lever (high price coaching for few) or Digital lever (low price for many).</p>
            </div>
          </div>
        </section>

        {/* The Product Ladder */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              The Product Ladder
            </h2>
            <p className="text-gray-600 text-lg">The Solo Value Ladder</p>
          </div>

          <div className="space-y-6 mb-12">
            {productLadder.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-1">
                        {tier.tier}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {tier.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{tier.tagline}</p>
                    </div>
                    <Icon className="w-10 h-10 text-purple-600 flex-shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        What
                      </p>
                      <p className="text-gray-700">{tier.what}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Price
                      </p>
                      <p className="text-xl font-bold text-purple-600">
                        {tier.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Time
                      </p>
                      <p className="text-gray-700">{tier.time}</p>
                    </div>
                  </div>

                  {tier.math && (
                    <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                      <p className="text-sm text-blue-900">
                        <strong>Solo Math:</strong> {tier.math}
                      </p>
                    </div>
                  )}

                  {tier.constraint && (
                    <div className="bg-amber-50 p-4 rounded border border-amber-200">
                      <p className="text-sm text-amber-900">
                        <strong>Constraint:</strong> {tier.constraint}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transition Protocol */}
          <div className="bg-purple-50 border border-purple-200 p-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-6">The Transition Protocol</h4>
            <div className="space-y-4">
              {transitionProtocol.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="min-w-fit">
                    <span className="inline-block bg-purple-600 text-white font-bold text-sm px-3 py-1 rounded">
                      {step.phase}
                    </span>
                  </div>
                  <p className="text-gray-700 pt-1">{step.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Negotiable Constraints */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Non-Negotiable Solo Constraints
          </h2>
          <p className="text-gray-600 mb-8">
            What Still Has to Fit in 40 Hours
          </p>

          {/* Automation Checklist */}
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg mb-12">
            <h4 className="font-bold text-gray-900 mb-6">Automation Checklist</h4>
            <div className="space-y-4">
              {automationChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hell No List */}
          <div className="bg-red-50 border border-red-200 p-8 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              The "Hell No" List (Anti-patterns)
            </h4>
            <div className="space-y-4">
              {hellNoList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded border border-red-200"
                >
                  <p className="font-semibold text-gray-900 mb-2">
                    ✗ {item.antiPattern}
                  </p>
                  <p className="text-gray-700 text-sm">→ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Geometry */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Pricing Geometry
          </h2>
          <p className="text-gray-600 mb-8">
            Math That Works for One Person
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">
                    Model
                  </th>
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">
                    Breakdown
                  </th>
                  <th className="text-left font-semibold text-gray-900 py-3 px-4">
                    Total Monthly
                  </th>
                  <th className="text-left font-semibold text-gray-600 py-3 px-4">
                    Hours Billable
                  </th>
                  <th className="text-left font-semibold text-gray-600 py-3 px-4">
                    Hours for Growth
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingGeometry.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${
                      idx === 1 ? "bg-purple-50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      {row.model}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{row.breakdown}</td>
                    <td className="py-3 px-4 text-lg font-bold text-purple-600">
                      {row.total}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{row.hours}</td>
                    <td className="py-3 px-4 text-gray-700">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-blue-900">
              <strong>Key insight:</strong> You don't need more clients. You need tiers. The new model makes more money with fewer clients, freeing you to focus on growth.
            </p>
          </div>
        </section>

        {/* Your Next Step */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Your Next Step</h2>
            <p className="text-lg mb-8 leading-relaxed">
              <strong>Audit your current offer:</strong> Which Tier are you stuck in? Draft one Tier 2 or Tier 3 offer this week. Price it at 50% of your Tier 1 price for 20% of the time.
            </p>

            <div className="bg-white/10 backdrop-blur p-8 rounded-lg mb-8">
              <h3 className="font-bold text-white mb-4">Next Steps:</h3>
              <div className="space-y-3">
                <Link
                  href="/offer/pricing-strategy"
                  className="flex items-center gap-2 text-white hover:text-purple-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Pricing Psychology for Products → /offer/pricing</span>
                </Link>
                <Link
                  href="/marketing/first-customers"
                  className="flex items-center gap-2 text-white hover:text-purple-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Find 5 Clients for Tier 2 Launch → /marketing/first-customers</span>
                </Link>
                <Link
                  href="/tools"
                  className="flex items-center gap-2 text-white hover:text-purple-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>See Admin Stack (Remove Manual Work) → /tools/admin-stack</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
