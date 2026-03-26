'use client';

import Link from 'next/link';

export default function GrowthPage() {
  const subcategories = [
    {
      title: 'Revenue Growth',
      description: 'Squeeze more from what works. Optimize pricing, increase client frequency, expand scope of work.',
      href: '/growth/revenue-growth',
      icon: '📈',
      topics: ['Pricing Optimization', 'Client Expansion', 'Value Ladder'],
      color: 'from-blue-50 to-blue-100 border-blue-200'
    },
    {
      title: 'Channel Expansion',
      description: 'Add a second acquisition channel without splitting focus. The 80/20 rule for channels.',
      href: '/growth/channel-expansion',
      icon: '🔗',
      topics: ['Channel Audit', 'Second Channel Selection', 'Channel Integration'],
      color: 'from-purple-50 to-purple-100 border-purple-200'
    },
    {
      title: 'Productization',
      description: 'Turn your service into a product. Scale beyond time-for-money into leverage.',
      href: '/growth/productization',
      icon: '📦',
      topics: ['Service → Product', 'Product Ladder', 'Delivery Automation'],
      color: 'from-green-50 to-green-100 border-green-200'
    },
    {
      title: 'Asset Building',
      description: 'Build compounding assets: email list, content, community. Revenue that grows while you sleep.',
      href: '/growth/asset-building',
      icon: '🏗️',
      topics: ['Email List', 'Content Assets', 'Community Leverage'],
      color: 'from-amber-50 to-amber-100 border-amber-200'
    }
  ];

  const articles = [
    {
      title: 'How I Scaled from £10k to £25k Without Hiring',
      slug: '10k-to-25k',
      excerpt: 'The exact playbook: pricing optimization, channel expansion, productization, asset building. I tripled revenue without adding headcount.',
      date: '2024-02-01',
      readTime: '8 min'
    },
    {
      title: 'The Channel Trap: Why I Almost Split My Focus',
      slug: 'channel-trap',
      excerpt: 'Why adding a second channel almost killed my business—and how I fixed it. The 80/20 rule saved me.',
      date: '2024-01-28',
      readTime: '6 min'
    },
    {
      title: 'Productizing My Service: The £100k Mistake',
      slug: 'productizing-mistake',
      excerpt: 'I productized too early. Lost £100k in failed launch. Here\'s exactly when to productize and when to stay in services.',
      date: '2024-01-25',
      readTime: '7 min'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-4">
            Scaling Solo Pillar
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Scaling Solo: Growth Without Hiring
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Scale revenue, expand channels, productize services, build assets—all as one person. No hiring required.
          </p>

          {/* Story Box */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-orange-600 mb-2">MY JOURNEY</p>
            <p className="text-gray-900 font-medium mb-3">
              I hit £10k/month as a freelancer. Then I hit a wall. I couldn't go higher—time ceiling. Every hour I worked was an hour I sold. More revenue meant more hours.
            </p>
            <p className="text-gray-700 mb-4">
              I didn't hire. Instead, I did three things:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Raised prices 30% (lost no clients, more money per hour)</li>
              <li>✓ Added a second channel (referrals + content, doubled pipeline)</li>
              <li>✓ Built a digital product (£2k/month recurring, no additional time)</li>
              <li>✓ Created content assets (email list became lead generation machine)</li>
            </ul>
            <p className="text-gray-900 font-semibold">Result: £25k/month, still working solo, better margins, less stress.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Explore Growth Levers
            </button>
            <Link href="/start/first-90-days" className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition">
              Start from Launch Blueprint →
            </Link>
          </div>
        </div>
      </div>

      {/* Growth Formula Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">The Solo Growth Formula</h2>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8 mb-12">
          <p className="text-center text-lg font-semibold text-gray-900 mb-6">
            Solo scaling = Leverage, not headcount
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-orange-200 p-4 text-center">
              <p className="font-bold text-gray-900">Revenue Growth</p>
              <p className="text-xs text-gray-600 mt-2">Optimize what works: pricing, scope, frequency</p>
            </div>
            <div className="bg-white rounded-lg border border-orange-200 p-4 text-center">
              <p className="font-bold text-gray-900">Channel Expansion</p>
              <p className="text-xs text-gray-600 mt-2">Add second channel: referrals, content, partnerships</p>
            </div>
            <div className="bg-white rounded-lg border border-orange-200 p-4 text-center">
              <p className="font-bold text-gray-900">Productization</p>
              <p className="text-xs text-gray-600 mt-2">Scale beyond time-for-money: digital products, templates, courses</p>
            </div>
            <div className="bg-white rounded-lg border border-orange-200 p-4 text-center">
              <p className="font-bold text-gray-900">Asset Building</p>
              <p className="text-xs text-gray-600 mt-2">Create compounding assets: email, content, community</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8 pt-8 border-t border-orange-300">
            These four levers can 2–3x your revenue without hiring a single person. Most solopreneurs only pull one lever. You're going to pull all four.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-12">
          <p className="font-bold text-blue-900 text-lg">🎯 The Core Principle</p>
          <p className="text-blue-800 text-sm mt-2">
            Hiring is expensive, risky, and limits your upside. Leverage—using existing resources more effectively—is free and multiplies your output. Solo growth is about building smart systems that make more money without requiring more time.
          </p>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gray-50 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">The Four Growth Levers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subcategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <div className={`bg-gradient-to-br ${category.color} border-2 rounded-lg p-6 sm:p-8 hover:shadow-lg transition cursor-pointer h-full`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-700">{category.description}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-xs font-semibold text-gray-600 mb-3">TOPICS COVERED</p>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span key={topic} className="text-xs bg-white rounded px-3 py-1 text-gray-700 font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm font-semibold text-orange-600 mt-6 flex items-center gap-1">
                  Explore → <span className="ml-1">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Critical Context Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Why Most Solopreneurs Stay Stuck at £10k/Month</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #1: Only Pulling One Lever</p>
            <p className="text-red-800 mb-3">
              Founder optimizes pricing. Revenue goes from £10k to £12k/month. Then stops. Thinks "that's as good as it gets solo."
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ They forgot channels, productization, and assets. Total upside: 2–3x, not 1.2x.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #2: Hiring Too Early (The Trap)</p>
            <p className="text-red-800 mb-3">
              Founder hits £15k/month as a solopreneur. Thinks "I need help." Hires VA for £500/month. Now revenue is £14.5k/month after salary. Plus admin overhead, training, and lost focus.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Real solution: Pull the other three levers first. Could've hit £40k/month solo with leverage.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #3: Adding Channels Too Aggressively</p>
            <p className="text-red-800 mb-3">
              Founder is getting clients from referrals (channel 1). Decides to launch paid ads (channel 2), content marketing (channel 3), and partnerships (channel 4) all at once.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Gets overwhelmed, loses focus on core channel, revenue actually decreases. Should have optimized channel 1 first, then added channel 2 only.
            </p>
          </div>

          <div className="border-l-4 border-red-400 bg-red-50 p-6 rounded">
            <p className="font-bold text-red-900 text-lg mb-2">Mistake #4: Productizing Too Early</p>
            <p className="text-red-800 mb-3">
              Founder has 3 clients at £5k/month each. Creates digital course to "scale beyond services." Spends 2 months building. Launches to crickets. £10k invested, £0 revenue.
            </p>
            <p className="text-xs text-red-700 font-semibold">
              ✗ Should have optimized pricing, added channel, built audience first. Then productized from a position of strength, not desperation.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8">
          <p className="font-bold text-green-900 text-lg mb-4">✓ The Right Order (Framework)</p>
          <ol className="space-y-3 text-sm text-green-800">
            <li><strong>Month 1–2: Optimize Revenue</strong> - Raise prices 20–30%, increase scope or frequency. Baseline: 1.5x revenue.</li>
            <li><strong>Month 3–4: Add Second Channel</strong> - Launch referral program or content marketing. Goal: 50% new revenue from new channel.</li>
            <li><strong>Month 5–6: Build Assets</strong> - Create email list, content, community. Low effort, high long-term ROI.</li>
            <li><strong>Month 7–12: Productize</strong> - Once you have proof and audience, turn service logic into product. £2k–£10k/month recurring.</li>
          </ol>
        </div>
      </div>

      {/* Growth Stories */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Growth Stories: Real Solopreneur Wins</h2>

        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.slug} className="border border-gray-200 rounded-lg p-6 hover:border-orange-600 transition">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-600">{article.date}</span>
                <span className="text-xs font-semibold text-orange-600">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solo Growth Scorecard */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Solo Growth Scorecard: Rate Your Current Position</h2>

        <p className="text-gray-700 mb-8">
          Score yourself 1–5 on each lever. Where are you strongest? Where's the biggest opportunity?
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-orange-200">
            <p className="font-bold text-gray-900 mb-3">Lever 1: Revenue Growth</p>
            <p className="text-sm text-gray-700 mb-4">Current pricing strategy: _____ Pricing increase potential: _____ Client frequency expansion: _____</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button key={score} className="w-10 h-10 rounded border-2 border-gray-300 hover:border-orange-600 transition text-sm font-semibold">
                  {score}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2">1 = Haven't optimized. 5 = Pricing is optimized, ready for next lever.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-purple-200">
            <p className="font-bold text-gray-900 mb-3">Lever 2: Channel Expansion</p>
            <p className="text-sm text-gray-700 mb-4">Primary channel: _____ Secondary channel: _____ Channel integration: _____</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button key={score} className="w-10 h-10 rounded border-2 border-gray-300 hover:border-purple-600 transition text-sm font-semibold">
                  {score}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2">1 = Single channel. 5 = 2+ channels, 30%+ from secondary.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-200">
            <p className="font-bold text-gray-900 mb-3">Lever 3: Productization</p>
            <p className="text-sm text-gray-700 mb-4">Service model: _____ Product potential: _____ Product launch readiness: _____</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button key={score} className="w-10 h-10 rounded border-2 border-gray-300 hover:border-green-600 transition text-sm font-semibold">
                  {score}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2">1 = No product. 5 = Product live, generating £1k+/month.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-amber-200">
            <p className="font-bold text-gray-900 mb-3">Lever 4: Asset Building</p>
            <p className="text-sm text-gray-700 mb-4">Email list: _____ Content assets: _____ Community leverage: _____</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button key={score} className="w-10 h-10 rounded border-2 border-gray-300 hover:border-amber-600 transition text-sm font-semibold">
                  {score}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2">1 = No assets. 5 = Assets drive 30%+ of leads organically.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-orange-300 p-6">
          <p className="font-bold text-gray-900 mb-2">Your Solo Growth Action Plan</p>
          <p className="text-sm text-gray-700 mb-4">
            Download the full scorecard PDF. Identify your lowest-scoring lever. That's where to focus next quarter. Pick one lever, master it, then move to the next.
          </p>
          <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition text-sm">
            Download Scorecard (PDF)
          </button>
        </div>
      </div>

      {/* Prerequisite & Next Steps */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Prerequisites & Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-bold text-orange-600 mb-3">BEFORE YOU SCALE</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">You Need a Foundation</h3>
            <p className="text-sm text-gray-700 mb-4">
              If you don't have a product/service generating £3k+/month with 3+ clients, scale won't work faster. Build first, then scale.
            </p>
            <Link href="/offer/productization" className="text-sm font-semibold text-orange-600 hover:underline">
              → Read: Productization Basics
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-sm font-bold text-orange-600 mb-3">FOR SOLO SCALE</p>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Automation is Essential</h3>
            <p className="text-sm text-gray-700 mb-4">
              Scaling on your own requires automating delivery, admin, and repetition. Manual work kills growth.
            </p>
            <Link href="/tools/automation-integration" className="text-sm font-semibold text-orange-600 hover:underline">
              → Read: Automation for Solopreneurs
            </Link>
          </div>
        </div>

        <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded mb-12">
          <p className="font-bold text-orange-900 text-lg">🎯 Rule: Optimize Before You Multiply</p>
          <p className="text-orange-800 text-sm mt-2">
            Don't add complexity to a broken system. Make sure your current channel works, then add channel 2. Make sure pricing is right before launching a product. Each growth lever builds on the previous one.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">Pick Your First Lever</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link href="/growth/revenue-growth" className="border-2 border-orange-300 bg-orange-50 rounded-lg p-4 hover:border-orange-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Revenue Growth Hub</p>
            <p className="text-xs text-gray-600">Optimize what you're already doing. Best starting point.</p>
          </Link>
          <Link href="/growth/channel-expansion" className="border-2 border-purple-300 bg-purple-50 rounded-lg p-4 hover:border-purple-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Channel Expansion Hub</p>
            <p className="text-xs text-gray-600">Add a second acquisition channel. No more feast/famine.</p>
          </Link>
          <Link href="/growth/productization" className="border-2 border-green-300 bg-green-50 rounded-lg p-4 hover:border-green-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Productization Hub</p>
            <p className="text-xs text-gray-600">Scale beyond time-for-money. The long-term play.</p>
          </Link>
          <Link href="/growth/asset-building" className="border-2 border-amber-300 bg-amber-50 rounded-lg p-4 hover:border-amber-600 transition">
            <p className="font-bold text-gray-900 mb-2">→ Asset Building Hub</p>
            <p className="text-xs text-gray-600">Create compounding revenue while you sleep.</p>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">You don't need to hire. You need leverage.</h3>
          <p className="text-orange-50 mb-8 text-lg">
            Most solopreneurs cap out at £15k/month and think they must hire. You're going to 2–3x without it. Pick one lever, master it, move to the next.
          </p>
          <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition">
            Start with Revenue Growth Lever
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-12 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Growth Levers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/growth/revenue-growth" className="text-orange-600 hover:underline">Revenue Growth</Link></li>
                <li><Link href="/growth/channel-expansion" className="text-orange-600 hover:underline">Channel Expansion</Link></li>
                <li><Link href="/growth/productization" className="text-orange-600 hover:underline">Productization</Link></li>
                <li><Link href="/growth/asset-building" className="text-orange-600 hover:underline">Asset Building</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related Pillars</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/start/first-90-days" className="text-orange-600 hover:underline">First 90 Days Launch</Link></li>
                <li><Link href="/offer/productization" className="text-orange-600 hover:underline">Productization</Link></li>
                <li><Link href="/tools/automation-integration" className="text-orange-600 hover:underline">Automation Tools</Link></li>
                <li><Link href="/money" className="text-orange-600 hover:underline">Money Pillar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Framework</h4>
              <ul className="space-y-2 text-sm">
                <li>1. Optimize Revenue (Month 1–2)</li>
                <li>2. Add Second Channel (Month 3–4)</li>
                <li>3. Build Assets (Month 5–6)</li>
                <li>4. Productize (Month 7–12)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
