'use client';

import Link from 'next/link';

export default function RevenueGrowthPage() {
  const subcategories = [
    {
      title: 'Pricing Optimization',
      description: 'Raise prices without losing clients. The solo surcharge, anchor pricing, value-based pricing. Grow revenue per hour.',
      href: '/growth/revenue-growth/pricing-optimization',
      icon: '💰',
      topics: ['When to Raise', 'How Much', 'Anchor Pricing', 'Value-Based Pricing'],
      color: 'from-orange-50 to-orange-100 border-orange-200'
    },
    {
      title: 'Client Expansion',
      description: 'Expand scope of work, upsell, cross-sell. Get significantly more from existing clients without acquiring new ones.',
      href: '/growth/revenue-growth/client-expansion',
      icon: '📊',
      topics: ['Scope Expansion', 'Upselling', 'Cross-selling', 'Repeat Revenue'],
      color: 'from-blue-50 to-blue-100 border-blue-200'
    },
    {
      title: 'Value Ladder',
      description: 'Create ascension path: £500 → £2k → £5k → £10k. Same client, progressively more value and revenue.',
      href: '/growth/revenue-growth/value-ladder',
      icon: '🪜',
      topics: ['Ladder Design', 'Ascension Path', 'Value Gaps', 'Client Journey'],
      color: 'from-green-50 to-green-100 border-green-200'
    }
  ];

  const articles = [
    {
      title: 'I Raised Prices 50% and Lost 0 Clients',
      slug: 'price-increase',
      excerpt: 'The exact email script and timeline for raising prices without pushback. Plus how I justified the increase.',
      date: '2024-02-10',
      readTime: '6 min'
    },
    {
      title: 'The £5k Mistake: Expanding Scope Too Early',
      slug: 'scope-mistake',
      excerpt: 'Why I added features for free and lost £5k in billable hours. How to expand scope profitably.',
      date: '2024-02-08',
      readTime: '5 min'
    },
    {
      title: 'My Value Ladder: £500 to £10k in 3 Steps',
      slug: 'value-ladder',
      excerpt: 'How I built an ascension path that tripled client value and created natural upsell opportunities.',
      date: '2024-02-05',
      readTime: '7 min'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-4">
            Revenue Growth Lever
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revenue Growth: More Money, Same Clients
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Price higher, expand scope, add value. Grow revenue without adding clients. This is where solo founders make their first 2–3x jump.
          </p>

          {/* Story Box */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-green-600 mb-2">REAL EXAMPLE: MY JOURNEY</p>
            <p className="text-gray-900 font-medium mb-3">
              I was doing freelance work at £50/hour. Had 5 clients. Revenue: £10k/month (200 hours at £50/hr).
            </p>
            <p className="text-gray-700 mb-4">
              Then I did three things simultaneously:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Raised my base price to £100/hour (50% increase). Lost 0 clients.</li>
              <li>✓ Expanded scope: instead of "done-for-you" only, I offered strategy + execution. Added £1k per project.</li>
              <li>✓ Created a value ladder: £500 audit → £2k implementation → £10k retainer. Clients naturally upgraded.</li>
            </ul>
            <p className="text-gray-900 font-semibold">Result: £20k/month with same 5 clients. Same hours, double revenue. Revenue per hour: £50 → £100.</p>
            <p className="text-sm text-gray-600 mt-3">This page shows you how to replicate that exact playbook.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Explore Revenue Optimization
            </button>
            <Link href="/growth" className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition">
              Back to Growth Hub →
            </Link>
          </div>
        </div>
      </div>

      {/* Revenue Growth Formula */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">The Revenue Growth Formula</h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-8 mb-12">
          <p className="text-center text-lg font-semibold text-gray-900 mb-6">
            Revenue Growth ≠ More Clients. It = More Revenue Per Client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <p className="font-bold text-gray-900 italic mb-2">Current State</p>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• 5 clients</p>
                <p>• £50/hour rate</p>
                <p>• £2k per project</p>
                <p>• 200 billable hours</p>
                <p className="font-bold text-gr ay-900 mt-3">= £10k/month</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">→</p>
                <p className="text-xs text-gray-600">Apply 3 levers</p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <p className="font-bold text-gray-900 italic mb-2">After Optimization</p>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• 5 clients (same)</p>
                <p>• £100/hour rate</p>
                <p>• £4k per project</p>
                <p>• 200 billable hours</p>
                <p className="font-bold text-gray-900 mt-3">= £20k/month</p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8 pt-8 border-t border-green-300">
            Same clients. Same hours. Double revenue. This is the solo founder's secret to 2–3x growth before hiring anyone.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-12">
          <p className="font-bold text-green-900 text-lg">🎯 Core Principle: Value Extraction, Not Volume</p>
          <p className="text-green-800 text-sm mt-2">
            Revenue growth is about extracting more value from your existing relationships. It's less about adding clients and more about deepening relationships with the ones you have. This is where solo founders become profitable.
          </p>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gray-50 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">The Three Revenue Levers</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {subcategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <div className={`bg-gradient-to-br ${category.color} border-2 rounded-lg p-6 sm:p-8 hover:shadow-lg transition cursor-pointer`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-700">{category.description}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-xs font-semibold text-gray-600 mb-3">WHAT YOU'LL LEARN</p>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span key={topic} className="text-xs bg-white rounded px-3 py-1 text-gray-700 font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-semibold text-green-600 mt-6 flex items-center gap-1">
                  Deep Dive → <span>→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Most Solopreneurs Leave Money on the Table */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Why Most Solopreneurs Leave £100k on the Table</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #1: Chronically Underpricing</p>
            <p className="text-red-800 mb-3">
              Freelancer charges £40/hour "to stay competitive." Works 200 hours/month at £40 = £8k/month. Never raises prices because "clients won't pay more."
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Actual cost: If they'd raised to £60 (50% increase, 90% retention), they'd earn £10.8k/month. Over 5 years: £120k lost.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #2: Free Scope Expansion (The Trap)</p>
            <p className="text-red-800 mb-3">
              Client asks for "just one more thing" or an extra deliverable. Freelancer says yes because they don't want to rock the boat. Over 3 months, that's +20 hours of unbilled work.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Cost: 20 hours × £50/hour = £1k in unpaid work. Every 3 months. That's £4k/year lost per client.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #3: No Value Ladder (One-Size-Fits-All)</p>
            <p className="text-red-800 mb-3">
              Service provider offers one package: "Done-for-you service, £2k/month." Some clients want more. Some want less. No one upsells. No one downsells.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Lost opportunity: A 3-tier ladder (£500 audit, £2k implementation, £5k retainer) could increase average client value by 40%.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #4: Confusing Busyness With Revenue</p>
            <p className="text-red-800 mb-3">
              Freelancer gets busier (more clients), but revenue stays flat. They're working 250 hours/month instead of 200, but at the same low rate.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ The real play: Work the same 200 hours at 2x the rate. Revenue goes up, burnout goes down. Time becomes scarce, pricing becomes powerful.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8">
          <p className="font-bold text-green-900 text-lg mb-4">✓ The Correct Approach: Revenue Per Hour, Not Hours Per Week</p>
          <div className="space-y-3 text-sm text-green-800">
            <p><strong>Metric that matters:</strong> Revenue per hour worked, not hours worked.</p>
            <p><strong>Goal:</strong> Raise revenue per hour from £50 → £75 → £100 → £150.</p>
            <p><strong>How:</strong> Raise prices + expand scope + build value ladder. Each lever is independent and compounds.</p>
            <p><strong>Result:</strong> Same time investment (200 hours/month), 2–3x revenue. That's solo scale.</p>
          </div>
        </div>
      </div>

      {/* Revenue Growth Scorecard */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gradient-to-r from-green-50 to-green-100 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Revenue Growth Scorecard: Know Your Numbers</h2>

        <p className="text-gray-700 mb-8">
          Fill in these 6 numbers. This is your baseline. Track quarterly. If you're not seeing 20%+ growth in revenue per hour, you're leaving money on the table.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-green-200">
            <p className="font-bold text-gray-900 mb-4">Current State (Baseline)</p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Current hourly rate (or per-project ÷ hours)</span>
                <span className="font-bold text-gray-900">£_____ /hour</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Billable hours per month</span>
                <span className="font-bold text-gray-900">_____ hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Current monthly revenue</span>
                <span className="font-bold text-gray-900">£_____</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-200">
            <p className="font-bold text-gray-900 mb-4">Optimization Targets (Next 90 Days)</p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Target hourly rate after price increase (+20%)</span>
                <span className="font-bold text-gray-900">£_____ /hour</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Billable hours after scope expansion</span>
                <span className="font-bold text-gray-900">_____ hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-gray-700">Target monthly revenue (optimized)</span>
                <span className="font-bold text-gray-900">£_____</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-600 shadow-lg">
            <p className="font-bold text-green-900 mb-2 text-lg">Your Revenue Growth Target</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">Current/Month</p>
                <p className="text-2xl font-bold text-gray-900">£_____</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">90-Day Target</p>
                <p className="text-2xl font-bold text-green-600">£_____</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4">Realistic: 20–50% increase is achievable in 90 days with pricing + scope + ladder.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-green-300 p-6">
          <p className="font-bold text-gray-900 mb-2">Your Revenue Growth Action Plan</p>
          <p className="text-sm text-gray-700 mb-4">
            Download the full scorecard PDF. Track these numbers quarterly. Revenue per hour is your north star metric.
          </p>
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition text-sm">
            Download Scorecard (PDF)
          </button>
        </div>
      </div>

      {/* Revenue Growth Stories */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Revenue Growth Stories: Real Wins</h2>

        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.slug} className="border border-gray-200 rounded-lg p-6 hover:border-green-600 transition">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-600">{article.date}</span>
                <span className="text-xs font-semibold text-green-600">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">The 3 Principles of Revenue Growth</h2>

        <div className="space-y-6">
          <div className="bg-white border-l-4 border-green-600 rounded p-6">
            <p className="font-bold text-gray-900 text-lg mb-2">Principle #1: Pricing Power Comes From Scarcity</p>
            <p className="text-gray-700 text-sm">
              If you have 10 hours/week available and 15 people want your time, your time is scarce. Scarcity creates pricing power. Raise prices. Some people drop off. Good—they were taking up space. Your best clients will stay because you solve a critical problem.
            </p>
          </div>

          <div className="bg-white border-l-4 border-blue-600 rounded p-6">
            <p className="font-bold text-gray-900 text-lg mb-2">Principle #2: Scope Expansion = Hidden Revenue</p>
            <p className="text-gray-700 text-sm">
              Your core service is £2k. But there's £500 in adjacent work (audit, planning, training) that clients would pay for separately. Bundle it. Or offer it as upsells. Most solopreneurs leave this money on the table because they don't realize what else they're delivering.
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-600 rounded p-6">
            <p className="font-bold text-gray-900 text-lg mb-2">Principle #3: Ladders Create Natural Upsells</p>
            <p className="text-gray-700 text-sm">
              Don't make clients guess what they're buying. Show them the whole journey: "For £500, I'll audit your problem. For £2k, I'll fix it. For £5k/month, I'll manage it ongoing." Clients naturally upgrade because they see the value at each step.
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites & Next Steps */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Prerequisites & Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-bold text-green-600 mb-3">FOUNDATION REQUIRED</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">You Need Pricing Clarity</h3>
            <p className="text-sm text-gray-700 mb-4">
              You must know your current hourly rate or project rate clearly. If you're not tracking it, you can't optimize it.
            </p>
            <Link href="/offer/pricing" className="text-sm font-semibold text-green-600 hover:underline">
              → Read: Pricing Foundation Guide
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-bold text-green-600 mb-3">FOR CLIENT EXPANSION</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Track Your Client Relationships</h3>
            <p className="text-sm text-gray-700 mb-4">
              You need a simple way to track each client's contract, scope, and upsell opportunities. Spreadsheet or CRM.
            </p>
            <Link href="/systems/client-management" className="text-sm font-semibold text-green-600 hover:underline">
              → Read: Client Management Systems
            </Link>
          </div>
        </div>

        <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded mb-12">
          <p className="font-bold text-green-900 text-lg">🎯 Critical Rule: Optimize Before You Add</p>
          <p className="text-green-800 text-sm mt-2">
            Most solopreneurs optimize by adding more clients. Wrong move. Optimize by making existing clients more valuable. Once you've 2x'd revenue from your current 5 clients, THEN add a 6th. That's the solo founder's path.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">Start With One Lever This Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/growth/revenue-growth/pricing-optimization" className="border-2 border-orange-300 bg-orange-50 rounded-lg p-4 hover:border-orange-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Pricing Optimization</p>
            <p className="text-xs text-gray-600">Plan your price increase this week. Execute next month.</p>
          </Link>
          <Link href="/growth/revenue-growth/client-expansion" className="border-2 border-blue-300 bg-blue-50 rounded-lg p-4 hover:border-blue-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Client Expansion</p>
            <p className="text-xs text-gray-600">Identify 3 scope expansion opportunities with current clients.</p>
          </Link>
          <Link href="/growth/revenue-growth/value-ladder" className="border-2 border-green-300 bg-green-50 rounded-lg p-4 hover:border-green-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Value Ladder</p>
            <p className="text-xs text-gray-600">Design your 3-tier ladder by end of week.</p>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">You don't need more clients. You need better revenue per client.</h3>
          <p className="text-green-50 mb-8 text-lg">
            Most solopreneurs hit a ceiling at £10–15k/month because they never optimize pricing, scope, or ladder. Pick one lever. Perfect it. Then add the next.
          </p>
          <button className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition">
            Start with Pricing Optimization
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-12 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Revenue Growth Levers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/growth/revenue-growth/pricing-optimization" className="text-green-600 hover:underline">Pricing Optimization</Link></li>
                <li><Link href="/growth/revenue-growth/client-expansion" className="text-green-600 hover:underline">Client Expansion</Link></li>
                <li><Link href="/growth/revenue-growth/value-ladder" className="text-green-600 hover:underline">Value Ladder</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/growth" className="text-green-600 hover:underline">Growth Hub</Link></li>
                <li><Link href="/offer/pricing" className="text-green-600 hover:underline">Pricing Foundation</Link></li>
                <li><Link href="/growth/channel-expansion" className="text-green-600 hover:underline">Channel Expansion Next</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Reference</h4>
              <ul className="space-y-2 text-sm">
                <li>Lever 1: Raise price 20–30%</li>
                <li>Lever 2: Expand scope +£1k</li>
                <li>Lever 3: Add value ladder</li>
                <li>Target: 2x revenue, same hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
