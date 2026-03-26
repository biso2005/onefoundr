'use client';

import Link from 'next/link';

export default function ProductizationPage() {
  const articles = [
    {
      title: "I Productized Too Early and Lost £100k",
      slug: "productize-early",
      excerpt: "Why productizing before validation cost me £100k and 6 months.",
      date: "2024-02-20",
      readTime: "6 min"
    },
    {
      title: "The Product Ladder That Made £50k in 3 Months",
      slug: "product-ladder-50k",
      excerpt: "How I turned a £297 template into £50k ladder.",
      date: "2024-02-18",
      readTime: "7 min"
    },
    {
      title: "Automating Delivery: 10 Hours to 1 Hour",
      slug: "automate-delivery",
      excerpt: "How I automated 90% of delivery. Work on business, not in it.",
      date: "2024-02-15",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Productization: Scaling Beyond Time-for-Money
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Turn your service into a product. Deliver the same outcome in half the time. Scale without hiring.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I was a freelancer at £8k/month. Working 45 hours a week. Every client was custom. Every project was reinventing the wheel. Then I productized. Same service systems, templates, delivery automation. Now: £15k/month. 20 hours a week. I didn't stop delivering. I stopped reinventing the solution for every single client."
            </p>
            <p className="text-sm text-gray-600">— Service founder, on scaling from hourly to leverage</p>
          </div>
        </div>
      </section>

      {/* Productization Philosophy */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            What Is Productization?
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Productization is not about creating a product. It's about systematizing your service so you deliver the same outcome in 50% less time with 100% consistent quality. It's the bridge between freelancing and scaling.
          </p>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">The Productization Formula</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">1</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Service</p>
                  <p className="text-gray-700 text-sm">You deliver outcome: "I'll design your funnel. £3k. 2 weeks. Custom."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">↓</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">2</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">System</p>
                  <p className="text-gray-700 text-sm">You document process: "Discovery → Analysis → Design → Delivery." 4 steps every time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">↓</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">3</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Template</p>
                  <p className="text-gray-700 text-sm">You build templates: "Discovery questions template. Analysis checklist. Design framework."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">↓</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">4</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Productized Offer</p>
                  <p className="text-gray-700 text-sm">You deliver in half time: "Same outcome. £3k. 1 week. Consistent."</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-blue-900 font-semibold border-t-2 border-blue-300 pt-6">
              Result: Same revenue, half time. Or same time, double revenue. You choose.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ Anti-Example: Productizing Too Early</h3>
              <p className="text-gray-700 text-sm mb-2">
                "I delivered 3 projects. Made £5k. Thought: productize now! Built whole template system. Guess what? Client 4 needed something different. Template didn't apply. Wasted 40 hours building templates nobody used. Should've waited until I had 20 projects, saw patterns, then productized."
              </p>
              <p className="text-xs text-red-800 font-semibold">Cost: 40 hours wasted building templates before market proven.</p>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">✓ Real Example: The 50% Time Reduction</h3>
              <p className="text-gray-700 text-sm mb-2">
                "Tom delivered 20 custom website projects (£2k each). Took 40 hours each. 800 hours total. Earned £40k. Then analyzed patterns. Built system + templates. Redelivered to 20 new clients. Same outcome. 20 hours each. 400 hours total. Earned £40k. Saved 400 hours. Same revenue. Half time. Now scaling to £80k by doubling capacity."
              </p>
              <p className="text-xs text-green-800 font-semibold">Outcome: 50% time savings = ability to serve 2x clients or 1x revenue with 50% effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars of Productization */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Three Pillars of Productization
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Productization has three dimensions. Master all three to go from custom service to product system.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Service to Product
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Document your service. Build a system that delivers same outcome faster. Create templates and frameworks. Move from custom to consistent.
              </p>
              <Link href="/growth/productization/service-to-product">
                <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors text-sm">
                  Explore Service to Product →
                </button>
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Product Ladder
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Create multiple versions of your offer: £50 template, £500 course, £5k program. Same core. Different delivery. Capture entire market.
              </p>
              <Link href="/growth/productization/product-ladder">
                <button className="w-full px-4 py-2 bg-purple-50 text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition-colors text-sm">
                  Explore Product Ladder →
                </button>
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Delivery Automation
              </h3>
              <p className="text-gray-700 text-sm mb-6">
                Automate delivery. Use tools. Delegate to systems. You work on business, not in delivery. Ship faster. Scale easier.
              </p>
              <Link href="/growth/productization/delivery-automation">
                <button className="w-full px-4 py-2 bg-green-50 text-green-600 font-semibold rounded-lg hover:bg-green-100 transition-colors text-sm">
                  Explore Delivery Automation →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productization Stories */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Productization Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Real founders who productized their service and scaled beyond their hours.
          </p>

          <div className="grid gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 space-x-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link href={`#${article.slug}`}>
                    <button className="px-3 py-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      Read →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Productization Matters */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why Productization Matters
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span> Scale Without Hiring
              </h3>
              <p className="text-gray-700 text-sm">
                Custom service: You're limited by your hours. Productized: You're limited by capacity. One person can serve 5 clients instead of 1. Or 1 client at 5x profit.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">⏱️</span> Time Freedom
              </h3>
              <p className="text-gray-700 text-sm">
                custom: 40 hours per client. Productized: 20 hours per client. Same revenue. Half time. Or 2x revenue. Same time.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Consistency
              </h3>
              <p className="text-gray-700 text-sm">
                Every client gets your best. You're not reinventing for each one. Same process. Same templates. Same quality. Every single time.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span> Higher Margins
              </h3>
              <p className="text-gray-700 text-sm">
                Custom: £2k for 40 hours (£50/hr). Productized: £2k for 20 hours (£100/hr). Same price. Double margin. Same time, deliver to 2 clients instead of 1.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-xl p-6">
            <p className="text-gray-900 font-semibold mb-2">💡 The Productization Payoff</p>
            <p className="text-gray-700 text-sm">
              A service at £2k takes 40 hours to deliver. A productized service at £2k takes 20 hours. Scale to 10 clients over a year: Service requires 400 hours. Productized: 200 hours. You freed yourself 200 hours. That's 5 weeks of time. To work on business, not in it.
            </p>
          </div>
        </div>
      </section>

      {/* Common Productization Mistakes */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Common Productization Mistakes
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-bold text-red-900 mb-2">❌ Productizing Before Validation</h3>
              <p className="text-gray-700 text-sm mb-2">
                You've done 3 projects. You think you know the pattern. You build templates. Client 4 doesn't fit. Templates wasted. Should've done 15-20 projects first.
              </p>
              <p className="text-xs text-red-800">Cost: Hours wasted building templates for ghost patterns.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-bold text-red-900 mb-2">❌ No Templates or Frameworks</h3>
              <p className="text-gray-700 text-sm mb-2">
                You document system. But no actual templates. Client gets "use this process" with no tools. Still takes 40 hours. Not productized. Templates are what save time.
              </p>
              <p className="text-xs text-red-800">Cost: Time not saved. Reinvention still happening.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-bold text-red-900 mb-2">❌ No Delivery Automation</h3>
              <p className="text-gray-700 text-sm mb-2">
                You productized process and templates. But you still manually do every step. No automation. Still 30 hours. Barely saved time. Automate the delivery, not just the thinking.
              </p>
              <p className="text-xs text-red-800">Cost: 70% of potential time savings abandoned.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-bold text-red-900 mb-2">❌ No Product Ladder</h3>
              <p className="text-gray-700 text-sm mb-2">
                You productized one offer at £3k. But not everyone can afford £3k. Create ladder: £297 template, £997 course, £3k program. Same core. Different prices. Capture all markets.
              </p>
              <p className="text-xs text-red-800">Cost: 30-40% of potential market abandoned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Productization Checklist */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Productization Readiness Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Use this checklist to evaluate if you're ready to productize your service.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Phase 1: Service Validation (Prerequisite)</h3>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've delivered this service 15+ times (or 10+ to same market).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I can see clear patterns in what works (same process, similar outcomes).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">Clients consistently hire me for this outcome.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I'm consistently profitable (not barely breaking even).</p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Phase 2: System Documentation</h3>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've documented my exact delivery process (steps, decisions, handoffs).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've identified repeatable steps (not custom work for each client).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I have 3+ templates or frameworks (discovery, analysis, delivery).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">My next delivery follows documented system 80%+ (not custom).</p>
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Phase 3: Time Reduction</h3>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've reduced delivery time from X hours to Y hours (ideally 50%+).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">Quality is same or better (client outcomes unchanged).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've tested with 2+ clients (proof that reduction is real, not one-off).</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Phase 4: Delivery and Leverage</h3>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I've launched productized offer (same outcome, less time, clear marketing).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I'm delivering consistently using templates (not reverting to custom).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">I'm capturing the time savings (not doing extra work for free).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">☐</span>
                    <p className="text-gray-700 text-sm">Revenue per hour has increased 25%+ (profit of time savings).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-100 rounded-lg p-6 border border-green-300 mt-8">
              <p className="text-sm text-green-900">
                <span className="font-bold">Scoring:</span> Count checked boxes. <br/>
                <span className="font-bold">12-14:</span> You're ready. Productize now. <br/>
                <span className="font-bold">8-11:</span> You're close. Pick one gap, fill it, recheck. <br/>
                <span className="font-bold">&lt;8:</span> Not ready. Run 5 more projects first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Next Step */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Next Step
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Pick the one thing you deliver repeatedly. Document it. Build 3 templates. Productize your offer in 4 weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/productization/service-to-product">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Start: Service to Product
              </button>
            </Link>
            <Link href="/growth/channel-expansion">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back: Channel Expansion
              </button>
            </Link>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-4">⚠️ Before Productizing</h3>
            <p className="text-gray-700 mb-4">
              Don't productize too early. You need 10-15 deliveries to see patterns. Too early and your templates won't apply to most clients. 
            </p>
            <p className="text-gray-700 font-semibold">
              Productize when you can say: "I've done this 15 times. Every time follows same pattern. Every time works."
            </p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-green-900 mb-4">✓ After Productizing</h3>
            <p className="text-gray-700">
              You've freed time. Don't add more clients. Work on business. Build product ladder. Automate delivery. Scale beyond you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Productization</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/productization/service-to-product" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Service to Product
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization/product-ladder" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Product Ladder
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization/delivery-automation" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Delivery Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Growth Pillar</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Growth Hub
                  </Link>
                </li>
                <li>
                  <Link href="/growth/channel-expansion" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Channel Expansion
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Revenue Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/offer/productization" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Offer: Productization
                  </Link>
                </li>
                <li>
                  <Link href="/systems/knowledge-systems" className="text-gray-600 hover:text-blue-600 transition-colors">
                    SOPs & Systems
                  </Link>
                </li>
                <li>
                  <Link href="/tools/automation-integration" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Automation Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Previous Chapter</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/channel-expansion/channel-integration" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Channel Integration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
