'use client';

import Link from 'next/link';
import { spendCategories, businessTypeCosts, reinvestmentPlan } from '@/data/startupCosts';
import EmailSignupForm from '@/components/EmailSignupForm';

export default function StartupCostsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white w-full pt-20 pb-12 md:py-20 py-12 px-6 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-accentDark font-semibold">Startup Costs</p>
          </div>
          <h1 className="text-[clamp(28px,6vw,48px)] font-bold text-primary mb-4 leading-tight">
            How Much Does It Actually Cost to Start?
          </h1>
          <p className="text-lg text-textLight leading-relaxed max-w-[600px]">
            Less than you think. Most solo businesses can launch for under £100. Here is exactly what to spend, what to skip, and what is a complete waste of money.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto py-16 px-6">

        {/* SECTION 1 — THE TEARDOWN */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-3">The Honest Cost Breakdown</h2>
            <p className="text-lg text-textLight">Every startup expense sorted into three categories. Bookmark this page.</p>
          </div>

          {/* Spend Categories Cards */}
          {spendCategories.map((category) => (
            <div key={category.label} className={`rounded-xl border ${category.color} p-6 mb-6 bg-white`}>
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  {category.label}
                </h3>
                <span className={`${category.badgeColor} text-xs font-medium px-2.5 py-1 rounded-full ml-auto`}>
                  {category.items.length} items
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>

              {/* Items List */}
              <div>
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start py-3 border-b border-gray-50 last:border-b-0"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 shrink-0 ml-4">{item.cost}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Dark Callout Box */}
          <div className="bg-gray-900 rounded-xl p-6 text-center mt-12">
            <p className="text-sm text-gray-400">Total to launch most solo businesses:</p>
            <p className="text-4xl font-bold text-white mt-2">Under £100</p>
            <p className="text-sm text-gray-400 mt-2">Stop using money as an excuse.</p>
          </div>
        </section>

        {/* SECTION 2 — BY BUSINESS TYPE */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-3">Costs by Business Type</h2>
            <p className="text-lg text-textLight">Different models have different costs. Find yours.</p>
          </div>

          {/* Business Type Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessTypeCosts.map((type) => (
              <div
                key={type.slug}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{type.description}</p>

                {/* Cost Summary Row */}
                <div className="flex gap-6 mt-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Total Startup</p>
                    <p className="text-lg font-bold text-gray-900">{type.totalStartup}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Monthly Running</p>
                    <p className="text-lg font-bold text-gray-900">{type.monthlyRunning}</p>
                  </div>
                </div>

                {/* Essentials List */}
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Essential Tools:</p>
                  {type.essentials.map((essential, idx) => (
                    <div key={idx} className="flex justify-between py-1">
                      <p className="text-sm text-gray-700">{essential.tool}</p>
                      <p className="text-sm text-gray-500">{essential.cost}</p>
                    </div>
                  ))}
                </div>

                {/* Footer Row */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                  <Link
                    href={type.modelLink}
                    className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    See this business model →
                  </Link>
                  {type.hasArticle ? (
                    <Link
                      href={`/start/startup-costs/${type.slug}`}
                      className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Full cost breakdown →
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-400 italic">Full breakdown coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — REINVESTMENT PLAN */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-3">The Upgrade Path</h2>
            <p className="text-lg text-textLight">
              What to invest in as your revenue grows. Do not spend this money until you hit the milestone.
            </p>
          </div>

          {/* Milestone Cards */}
          {reinvestmentPlan.map((milestone) => (
            <div key={milestone.milestone} className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{milestone.milestone}</h3>
              <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>

              {/* Investment Items */}
              <div className="mt-4">
                {milestone.investments.map((investment, idx) => (
                  <div key={idx} className="py-3 border-b border-gray-50 last:border-b-0">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">{investment.item}</p>
                      <p className="text-sm font-semibold text-emerald-600">{investment.cost}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{investment.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* SECTION 4 — BOTTOM CALLOUT */}
        <section className="mb-20">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              Money is not the thing stopping you. Clarity is. Once you know your idea, model, and niche — £50 and a weekend is all you need.
            </p>
            <Link
              href="/start/legal-setup"
              className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors mt-3 inline-block"
            >
              Next: Legal &amp; Financial Setup →
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary w-full py-12 px-6 rounded-xl -mx-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[clamp(20px,5vw,42px)] font-bold text-white mb-2">Get Startup Costs Tips Weekly</h2>
            <p className="text-sm text-gray-400 mb-6">Join solo founders building smarter businesses</p>
            <EmailSignupForm variant="dark" placeholder="Enter your email" className="mb-2" />
            <p className="text-xs text-gray-500 mt-2">No spam, just practical guides.</p>
          </div>
        </section>
      </div>
    </>
  );
}
