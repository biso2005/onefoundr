'use client';

import Link from 'next/link';

export default function ValueLadder() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Value Ladder: Architecting Client Ascension
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
            Create the path from £500 to £10k. Same client, 20x revenue.
          </p>
          <div className="bg-white rounded-xl border border-purple-100 p-6 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              "I had £500 clients. Never offered more. They left. Built a ladder: £500 audit → £2k retainer → £5k project → £10k program. Same client went £500 → £10k over 2 years. That's <span className="font-semibold text-purple-700">20x revenue. I just needed a path.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* The Ladder Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why You Need a Ladder</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "One Offer" Trap</h3>
              <p className="text-gray-700">You have one £500 offer. You never offer anything more. Client leaves after buying it. You lose them forever.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "They'll Ask" Trap</h3>
              <p className="text-gray-700">You think satisfied clients will ask for more. They don't. They just disappear. You lost the path for them.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Awkward" Trap</h3>
              <p className="text-gray-700">You feel weird offering more. Reality: Satisfied clients want to continue. They want the next step. You're hiding it from them.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "No Path" Problem</h3>
              <p className="text-gray-700">You have multiple offers but no connection between them. Client doesn't know what comes next. So they leave.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule</p>
            <p className="text-gray-700">
              If you don't have a ladder, clients can't ascend. They leave instead. A ladder is the difference between £500 revenue and £10k revenue. From the same client.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: The £5k Miss</h3>
            <p className="text-gray-700 mb-2">
              "Had £3k project client. Loved the work. Asked what comes next. I didn't have answer. No advanced offer. They left. Lost £5k expansion. Later built ladder. Should've built before taking clients."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of no ladder: £5,000 lost expansion</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Tom's Ladder Win</h3>
            <p className="text-gray-700 mb-2">
              Tom built a ladder: £297 audit → £2k/month retainer → £10k project. One client took all 3 steps over 18 months. Total revenue: £12,297 from one client. Without the ladder? £297 only.
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £12,297 from one person vs £297</p>
          </div>
        </div>
      </section>

      {/* The Ladder Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The 4-Rung Ladder Architecture</h2>
          <p className="text-lg text-gray-700 mb-12">
            Every value ladder has four rungs. Each serves a purpose. Each bridges to the next. Build all four.
          </p>

          <div className="space-y-8">
            {/* Rung 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl font-bold text-blue-600 min-w-fit">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Entry: £100–£500</h3>
                  <p className="text-gray-700 mt-2">The door opener. Low risk, high volume.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Purpose</p>
                  <p className="text-gray-700">Get client in the door. Prove value. Build trust.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 text-sm">Quick audit</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 text-sm">Template</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 text-sm">Online course</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 text-sm">1-hour consultation</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Delivery Time</p>
                  <p className="text-gray-700">Less than 5 hours. Fast turnaround proves competence.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Goal</p>
                  <p className="text-gray-700">Client sees result. Wants more. Asks about next step.</p>
                </div>
              </div>
            </div>

            {/* Rung 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 border-l-4 border-l-purple-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl font-bold text-purple-600 min-w-fit">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Core: £1k–£3k</h3>
                  <p className="text-gray-700 mt-2">The main transformation. Your bread and butter.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Purpose</p>
                  <p className="text-gray-700">Deliver real transformation from entry to results.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200 text-sm">Project work</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200 text-sm">3-month retainer</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200 text-sm">Implementation</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200 text-sm">Done-with-you</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Delivery Time</p>
                  <p className="text-gray-700">20–40 hours. Enough for real transformation.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Goal</p>
                  <p className="text-gray-700">Client gets measurable result. Sees your value. Wants more depth.</p>
                </div>
              </div>
            </div>

            {/* Rung 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 border-l-4 border-l-pink-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl font-bold text-pink-600 min-w-fit">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Advanced: £5k–£10k</h3>
                  <p className="text-gray-700 mt-2">The deep transformation. Premium work.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Purpose</p>
                  <p className="text-gray-700">Deep transformation of business or life. Premium results.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded border border-pink-200 text-sm">6-month program</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded border border-pink-200 text-sm">Intensive sprint</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded border border-pink-200 text-sm">Mastermind seat</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded border border-pink-200 text-sm">Done-for-you service</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Delivery Time</p>
                  <p className="text-gray-700">50–100 hours. Deep, ongoing support.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Goal</p>
                  <p className="text-gray-700">Transform their business trajectory. Build long-term relationship. Create advocates.</p>
                </div>
              </div>
            </div>

            {/* Rung 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 border-l-4 border-l-indigo-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl font-bold text-indigo-600 min-w-fit">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Premium: £10k+</h3>
                  <p className="text-gray-700 mt-2">The signature offer. Transformation at the highest level.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Purpose</p>
                  <p className="text-gray-700">Invitation-only. For clients who've proven commitment.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-200 text-sm">VIP coaching</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-200 text-sm">Private consulting</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-200 text-sm">Year-long partnership</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-200 text-sm">Advisory board seat</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Delivery Time</p>
                  <p className="text-gray-700">100+ hours. Ongoing, long-term partnership.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Goal</p>
                  <p className="text-gray-700">Become their trusted advisor. Influence business direction. Create ultimate transformation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: All 4 Rungs Required</p>
            <p className="text-gray-700">
              If you don't have all 4 rungs, you're leaving 20x revenue on the table. Don't build the ladder after you have clients. Build it first.
            </p>
          </div>
        </div>
      </section>

      {/* The Ladder Math */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Ladder Math: £50k vs £135k</h2>
          <p className="text-lg text-gray-700 mb-12">
            Here's why a ladder matters. Same 100 clients. One with ladder, one without.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Without Ladder */}
            <div className="bg-white rounded-xl border border-red-200 p-8">
              <h3 className="text-xl font-bold text-red-900 mb-6">❌ Without Ladder</h3>
              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-lg p-2 min-w-fit">
                    <span className="text-sm font-bold text-red-700">Entry</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">100 clients × £500</p>
                    <p className="text-lg font-bold text-gray-900">£50,000</p>
                  </div>
                </div>
              </div>
              <div className="text-center py-4">
                <p className="text-4xl font-bold text-red-600">£50k</p>
                <p className="text-sm text-gray-600 mt-2">Total annual revenue</p>
                <p className="text-xs text-gray-500 mt-2">Clients leave after entry.</p>
              </div>
            </div>

            {/* With Ladder */}
            <div className="bg-white rounded-xl border border-green-200 p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6">✓ With Ladder</h3>
              <div className="space-y-3 mb-6 border-b border-gray-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-2 min-w-fit">
                    <span className="text-sm font-bold text-blue-700">1️⃣</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">100 × Entry (£500)</p>
                    <p className="text-lg font-bold text-gray-900">£50,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-2 min-w-fit">
                    <span className="text-sm font-bold text-purple-700">2️⃣</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">20 ascend to Core (£2k)</p>
                    <p className="text-lg font-bold text-gray-900">£40,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-lg p-2 min-w-fit">
                    <span className="text-sm font-bold text-pink-700">3️⃣</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">5 ascend to Advanced (£5k)</p>
                    <p className="text-lg font-bold text-gray-900">£25,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-2 min-w-fit">
                    <span className="text-sm font-bold text-indigo-700">4️⃣</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">2 ascend to Premium (£10k)</p>
                    <p className="text-lg font-bold text-gray-900">£20,000</p>
                  </div>
                </div>
              </div>
              <div className="text-center py-4">
                <p className="text-4xl font-bold text-green-600">£135,000</p>
                <p className="text-sm text-gray-600 mt-2">Total annual revenue</p>
                <p className="text-xs text-gray-500 mt-2">2.7x more revenue. Same 100 clients.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-3">Average Client Value</p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-lg text-gray-700">Without ladder</p>
                <p className="text-3xl font-bold text-red-600">£500</p>
              </div>
              <div className="text-2xl font-bold text-gray-400">→</div>
              <div>
                <p className="text-lg text-gray-700">With ladder</p>
                <p className="text-3xl font-bold text-green-600">£1,350</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Same clients. Different architecture. 2.7x the value.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Ladder Hierarchy</p>
            <p className="text-gray-700">
              A ladder increases average client value by 2–3x. This isn't magic. It's architecture. Most solopreneurs only build Rung 1 and hope clients ask for more. They don't. You have to architect the path.
            </p>
          </div>
        </div>
      </section>

      {/* How to Build Your Ladder */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">How to Build Your Ladder</h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center min-w-fit">
                  <span className="text-xl font-bold text-blue-700">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Map Current Offers</h3>
                  <p className="text-gray-700 mt-2">List everything you sell today.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Action:</p>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. List all services/products you offer</li>
                    <li>2. Price each one</li>
                    <li>3. Group by rung (Entry, Core, Advanced, Premium)</li>
                  </ol>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Example:</p>
                  <div className="bg-white rounded p-3 text-sm space-y-1">
                    <p>• Email audit: £297</p>
                    <p>• Email retainer: £2k/month</p>
                    <p>• Email program: £5k</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center min-w-fit">
                  <span className="text-xl font-bold text-purple-700">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Identify Gaps</h3>
                  <p className="text-gray-700 mt-2">See where your ladder is incomplete.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Gap Questions:</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">?</span>
                      <span className="text-gray-700"><span className="font-semibold">Entry → Core:</span> Can clients afford to move from £500 to £2k? Or is jump too big?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">?</span>
                      <span className="text-gray-700"><span className="font-semibold">Core → Advanced:</span> Do you have a £5k offer? If not, you lose 5–10% of clients at this step.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">?</span>
                      <span className="text-gray-700"><span className="font-semibold">Advanced → Premium:</span> Is there £10k+ tier for top clients? Or do you cap out?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center min-w-fit">
                  <span className="text-xl font-bold text-pink-700">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Fill Gaps</h3>
                  <p className="text-gray-700 mt-2">Create missing offers.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">If you're missing:</p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-semibold text-gray-900">Entry (£100–£500):</p>
                      <p className="text-gray-700 mt-1">Create quick audit. <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Example: 1-hour audit = £297</span></p>
                    </div>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-semibold text-gray-900">Core (£1k–£3k):</p>
                      <p className="text-gray-700 mt-1">Create 3-month project or retainer. <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Example: Implementation = £2k</span></p>
                    </div>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-semibold text-gray-900">Advanced (£5k–£10k):</p>
                      <p className="text-gray-700 mt-1">Create 6-month program. <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Example: Transformation program = £6k</span></p>
                    </div>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-semibold text-gray-900">Premium (£10k+):</p>
                      <p className="text-gray-700 mt-1">Create VIP/advisory seat. <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">Example: Year-long coaching = £15k</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center min-w-fit">
                  <span className="text-xl font-bold text-indigo-700">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">Connect Your Rungs</h3>
                  <p className="text-gray-700 mt-2">Articulate the path. Make it obvious.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">For each level transition, write a bridge statement:</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded p-3 border border-left-4 border-blue-300">
                    <p className="font-semibold text-gray-900 mb-1">Entry → Core:</p>
                    <p className="text-gray-700 italic">"After the audit, you're ready for implementation. That's when we do [core service for £X]."</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-left-4 border-purple-300">
                    <p className="font-semibold text-gray-900 mb-1">Core → Advanced:</p>
                    <p className="text-gray-700 italic">"After the project, you're ready for ongoing transformation. That's our [advanced program for £X]."</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-left-4 border-pink-300">
                    <p className="font-semibold text-gray-900 mb-1">Advanced → Premium:</p>
                    <p className="text-gray-700 italic">"You've mastered this. Ready for white-glove [premium service for £X]? Invitation-only."</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                <p className="text-sm font-semibold text-yellow-900">Solo Rule: Articulation Is Everything</p>
                <p className="text-sm text-gray-700 mt-1">If you can't articulate the next step, the client won't ascend. Make it obvious.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ascension Emails */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Ascension Email Scripts</h2>
          <p className="text-lg text-gray-700 mb-8">
            Send these within 48 hours of completing the previous rung. This is your window of ascension.
          </p>

          <div className="space-y-8">
            {/* Entry to Core */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ascension Email #1: Entry → Core</h3>
              <p className="text-sm text-gray-600 mb-4">Send within 48 hours of completing entry offer</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: Your audit results + next step</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  Loved working on your audit. The results are solid. I see the opportunity here.
                </p>
                <p className="mb-4">
                  You're ready to go deeper. I have a [core service] option. It's £[price] and gets you [specific result].
                </p>
                <p className="mb-4">
                  Interested? Let's talk.
                </p>
                <p>
                  [Your Name]
                </p>
              </div>
              <div className="bg-blue-50 rounded p-3 border border-blue-200">
                <p className="text-sm text-blue-800"><span className="font-semibold">Timing:</span> Send within 48 hours. After that, ascension rate drops 80%.</p>
              </div>
            </div>

            {/* Core to Advanced */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ascension Email #2: Core → Advanced</h3>
              <p className="text-sm text-gray-600 mb-4">Send when client completes core work or expresses wanting more</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: You're ready for next level</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  You've done great work. You're seeing results. But there's a ceiling with [core service].
                </p>
                <p className="mb-4">
                  You're ready for [advanced service]. It's £[price]/month and includes [specific value - deeper support, ongoing transformation, etc].
                </p>
                <p className="mb-4">
                  This is where you unlock [specific outcome]. Want to chat about how it works?
                </p>
                <p>
                  [Your Name]
                </p>
              </div>
              <div className="bg-purple-50 rounded p-3 border border-purple-200">
                <p className="text-sm text-purple-800"><span className="font-semibold">Timing:</span> Don't wait. Send same day. The energy is highest right after completion.</p>
              </div>
            </div>

            {/* Advanced to Premium */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ascension Email #3: Advanced → Premium</h3>
              <p className="text-sm text-gray-600 mb-4">Send to advanced clients ready for ultimate transformation</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: Invitation: Next level (VIP only)</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  You've done the work. You've seen transformation. You're ready for the next level.
                </p>
                <p className="mb-4">
                  I have a private [premium service] tier. It's invitation-only. £[price]. Only taking [X] clients this year.
                </p>
                <p className="mb-4">
                  This is where real transformation happens. If interested, let's schedule a conversation.
                </p>
                <p>
                  [Your Name]
                </p>
              </div>
              <div className="bg-pink-50 rounded p-3 border border-pink-200">
                <p className="text-sm text-pink-800"><span className="font-semibold">Tone:</span> Exclusive. Invitation-only. Premium feel. Don't sound desperate.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 mt-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: The 2-Week Wait</h3>
            <p className="text-gray-700 mb-2">
              "Client finished core project. I thought 'I'll send ascension email next week.' Forgot. Sent email 2 weeks later. They said 'Sorry, budget's locked.' Lost £5k. Should've sent same day."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of delay: £5,000 lost ascension</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6 mt-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Same-Day Ascension</h3>
            <p className="text-gray-700 mb-2">
              "Client completed core project Thursday. I sent ascension email Thursday evening. They replied Friday morning: 'Let's do it.' Closed advanced offer £5k within 24 hours."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £5,000 closed because of speed and timing</p>
          </div>
        </div>
      </section>

      {/* Good vs Bad Ladders */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Good vs Bad Ladders</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {/* Good */}
            <div className="bg-white rounded-xl border border-green-100 overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 p-6">
                <h3 className="text-xl font-bold text-green-900">✓ Good Ladder</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Entry</p>
                  <p className="text-lg font-bold text-gray-900">£297 — Quick audit</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Core</p>
                  <p className="text-lg font-bold text-gray-900">£2k — 3-month retainer</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Advanced</p>
                  <p className="text-lg font-bold text-gray-900">£5k — 6-month program</p>
                </div>
                <div className="pb-3">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Premium</p>
                  <p className="text-lg font-bold text-gray-900">£10k — Year-long coaching</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <p className="text-lg font-bold text-green-600">£17,297 from 1 client over 2 years</p>
                  <p className="text-xs text-gray-600 mt-2">Client ascends naturally. Each step obvious.</p>
                </div>
              </div>
            </div>

            {/* Bad */}
            <div className="bg-white rounded-xl border border-red-100 overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 p-6">
                <h3 className="text-xl font-bold text-red-900">✗ Bad Ladder</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Entry</p>
                  <p className="text-lg font-bold text-gray-900">£297 — Quick audit</p>
                </div>
                <div className="border-b border-gray-100 pb-3 bg-red-50 p-3 rounded">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Core</p>
                  <p className="text-lg font-bold text-red-600">❌ MISSING</p>
                </div>
                <div className="border-b border-gray-100 pb-3 bg-red-50 p-3 rounded">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Advanced</p>
                  <p className="text-lg font-bold text-red-600">❌ MISSING</p>
                </div>
                <div className="pb-3 bg-red-50 p-3 rounded">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Premium</p>
                  <p className="text-lg font-bold text-red-600">❌ MISSING</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <p className="text-lg font-bold text-red-600">£297 from 1 client</p>
                  <p className="text-xs text-gray-600 mt-2">Client buys audit, leaves. No path to ascend.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: A Ladder is Not Optional</p>
            <p className="text-gray-700">
              Without a ladder, you're a commodity. "What's your price?" With a ladder, you're a partner. "What's next for me?" Ladders transform pricing power.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Template */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">📥 Ladder Mapping Worksheet</h2>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-lg text-gray-700 mb-6">Use this framework to map your ladder right now.</p>
            
            <div className="space-y-8">
              {/* Entry */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rung 1: Entry (£100–£500)</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">What I currently offer:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_________________________________</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Price:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">£_____</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Delivery time:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_____ hours</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Do I need to create this?</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">☐ Yes  ☐ No</p>
                  </div>
                </div>
              </div>

              {/* Core */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rung 2: Core (£1k–£3k)</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">What I currently offer:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_________________________________</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Price:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">£_____</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Delivery time:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_____ hours</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Do I need to create this?</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">☐ Yes  ☐ No</p>
                  </div>
                </div>
              </div>

              {/* Advanced */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rung 3: Advanced (£5k–£10k)</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">What I currently offer:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_________________________________</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Price:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">£_____</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Delivery time:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_____ hours</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Do I need to create this?</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">☐ Yes  ☐ No</p>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rung 4: Premium (£10k+)</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">What I currently offer:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_________________________________</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Price:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">£_____</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Delivery time:</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">_____ hours</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Do I need to create this?</p>
                    <p className="bg-gray-50 rounded p-3 mt-1">☐ Yes  ☐ No</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm font-semibold text-gray-600 mb-4">Missing rungs to build this month:</p>
              <p className="bg-gray-50 rounded p-4">_____________________________________</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Your Next Steps</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Action (This Week)</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <span>Map your current ladder using the worksheet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">2.</span>
                  <span>Identify gaps (missing rungs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">3.</span>
                  <span>Create 1 missing rung this month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">4.</span>
                  <span>Send ascension email to last 3 clients</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foundation Required</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Know your core offer pricing. Read <Link href="/growth/revenue-growth/pricing-optimization" className="text-blue-600 hover:underline">Pricing Optimization</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Know how to expand existing offers. Read <Link href="/growth/revenue-growth/client-expansion" className="text-blue-600 hover:underline">Client Expansion</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Learn offer design. Read <Link href="/offer/productization" className="text-blue-600 hover:underline">Productized Services</Link></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">If you don't have a ladder, you're leaving £10k+ per client on the table.</span>
            </p>
            <p className="text-gray-700">
              Don't wait until you have clients to build it. Build it first. The ladder is your revenue architecture. Without it, £500 clients stay £500 clients forever.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/growth/revenue-growth/pricing-optimization">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing Optimization</h3>
                <p className="text-gray-600 text-sm">Price each rung correctly. Don't leave money on table.</p>
              </div>
            </Link>
            <Link href="/growth/revenue-growth/client-expansion">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Expansion</h3>
                <p className="text-gray-600 text-sm">Expand within rungs. Bigger opportunities per level.</p>
              </div>
            </Link>
            <Link href="/offer/productization">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Productized Services</h3>
                <p className="text-gray-600 text-sm">Design your offers. Turn time-for-money into systems.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Build Your Ladder Today</h2>
          <p className="text-xl text-gray-700 mb-8">
            The difference between £500/client and £10k/client is not better marketing. It's better architecture.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 inline-block w-full sm:w-auto">
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Your Next Move</p>
              <p className="text-lg font-semibold text-gray-900">Map your 4-rung ladder this week</p>
              <p className="text-sm text-gray-600 mt-2">Fill gaps. Create missing rungs. Send ascension emails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Revenue Growth Lever</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/growth/revenue-growth" className="text-gray-700 hover:text-blue-600">
                    ← Back to Revenue Growth
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth/pricing-optimization" className="text-gray-700 hover:text-blue-600">
                    ← Pricing Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth/client-expansion" className="text-gray-700 hover:text-blue-600">
                    ← Client Expansion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Growth Pillars</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/growth/channel-expansion" className="text-gray-700 hover:text-blue-600">
                    Channel Expansion
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization" className="text-gray-700 hover:text-blue-600">
                    Productization
                  </Link>
                </li>
                <li>
                  <Link href="/growth/asset-building" className="text-gray-700 hover:text-blue-600">
                    Asset Building
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Foundations</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/offer/productization" className="text-gray-700 hover:text-blue-600">
                    Productized Services
                  </Link>
                </li>
                <li>
                  <Link href="/systems/client-management" className="text-gray-700 hover:text-blue-600">
                    Client Management
                  </Link>
                </li>
                <li>
                  <Link href="/growth" className="text-gray-700 hover:text-blue-600">
                    ← Back to Growth
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
