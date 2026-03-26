'use client';

import Link from 'next/link';

export default function NicheSelectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Niche Selection Framework</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Niche Selection for Solopreneurs: The Profitability Matrix
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Stop "following your passion." Find the intersection of market pain, your skill, and solo feasibility.
          </p>
          <div className="bg-white rounded-xl border border-indigo-200 p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-3">The Real Story:</p>
            <p className="text-gray-700 leading-relaxed">
              "I niched into 'coaching for coaches' because I was passionate. Made £2,400 in 6 months. Switched to 'email automation for SaaS' because of market pain. Made £8,500 in 30 days. Passion didn't pay. Pain did."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
              Find Your Niche
            </button>
            <Link href="/start/business-models">
              <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition">
                Back to Business Models
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* The Niche Myth */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Why "Follow Your Passion" is Terrible Advice
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
            Three traps kill most solopreneurs. Let's break them.
          </p>

          <div className="space-y-8">
            {/* Trap 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trap 1: The Passion Trap</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Setup:</span> You love photography. You're genuinely talented. You build a business around "professional photography for everyone."
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Market pays £15-30/hour for basic photography. Pro photographers can't make £100/hour solos. You need a team, a studio, or a brand built over years.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Result:</span> You are passionate but poor. You spend your time on wedding shoots instead of building business systems. You never escape the hourly rate treadmill.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
                  <p className="font-semibold text-gray-900">The Problem:</p>
                  <p>Passion doesn't validate market pain. It validates your feelings. Market doesn't care about your feelings.</p>
                </div>
              </div>
            </div>

            {/* Trap 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trap 2: The Market Trap</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Setup:</span> You see the market. Enterprise SEO pays £500/day. Management consulting pays £2k/day. You pivot into it.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Money is there. But so is burnout. You hate SEO. You hate compliance. You take every project because it pays. Five years later, you're making £200k/year and miserable.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Result:</span> You are rich but resentful. You build a business you want to escape. You sell to the first buyer (for less than it's worth) just to get out.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
                  <p className="font-semibold text-gray-900">The Problem:</p>
                  <p>Market potential doesn't validate your ability to delivery at scale. It validates opportunity. Opportunity doesn't matter if you burn out year 2.</p>
                </div>
              </div>
            </div>

            {/* Trap 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trap 3: The Solo Trap</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Setup:</span> You love enterprise consulting. Market needs it. You have the skill. You build a firm around "enterprise transformation for large corporations."
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Enterprise decisions take 6 months. Sales cycles are 3-6 months. Implementation is 6-12 months. As a solopreneur, you can't survive on one client for a year.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Result:</span> You go broke while waiting for enterprise sales to close. You take small projects to stay alive. You never build the consultancy you wanted.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
                  <p className="font-semibold text-gray-900">The Problem:</p>
                  <p>Market potential and skill don't matter if you can't deliver solo or can't survive the sales cycle. You need fast revenue cycles to stay alive.</p>
                </div>
              </div>
            </div>

            {/* The Truth */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border border-indigo-300 p-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">The Intersection Truth</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your niche lives at the intersection of three variables:
              </p>
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <p className="text-center text-3xl font-black text-indigo-600 mb-4">Market Pain × Your Skill × Solo Feasibility = Viable Niche</p>
                <p className="text-center text-gray-700">
                  If any variable is weak, everything fails. If all three are strong, you have a business.
                </p>
              </div>
            </div>

            {/* The Hell Yes Test */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The "Hell Yes" Test</h3>
              <p className="text-gray-700 mb-6">
                Ask yourself: "If I explained my niche to a random person at a party, would they say 'oh my god, I know five people who need that'?"
              </p>
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-semibold text-gray-900 mb-3">If you say yes:</p>
                <p className="text-gray-700 mb-6">You have market pain. Real people care about this problem.</p>
                <p className="font-semibold text-gray-900 mb-3">If you say no or hesitate:</p>
                <p className="text-gray-700">Your niche is too vague, too niche, or not a real problem. Go back and redefine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Profitability Matrix */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            The Profitability Matrix: Score Your Niche
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
            Three variables. One scorecard. This is how you evaluate if a niche is worth pursuing.
          </p>

          {/* Variable 1: Market Pain */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Variable 1: Market Pain (Rate 1-5)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 1: No one talks about it</p>
                <p className="text-gray-700">Problem doesn't exist. Or very niche. Market signals: zero searches, zero complaints, zero competitors.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 2: Occasional complaint</p>
                <p className="text-gray-700">People mention it sometimes. 100-500 searches/month. Few competitors. Market signals: some Reddit posts, some complaints.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 3: Daily complaints</p>
                <p className="text-gray-700">People complain weekly. 500-5,000 searches/month. Multiple competitors. Market signals: active discussions, complaints on Twitter.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 4: People pay to solve ✓ THRESHOLD</p>
                <p className="text-gray-700">People actively buy solutions. 5,000-50,000 searches/month. 5+ competitors. Market signals: agencies exist, tools exist, people complain constantly.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 5: People desperate</p>
                <p className="text-gray-700">Major pain point. 50,000+ searches/month. 10+ competitors, some well-funded. People actively seek solutions. Emergency-level problem.</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-gray-900">Threshold: 4+ (People must be paying)</p>
              <p className="text-gray-700">If score is 1-3, it's not yet a market. Market pain is prerequisite. Skip this if true.</p>
            </div>
          </div>

          {/* Variable 2: Your Skill */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Variable 2: Your Skill (Rate 1-5)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 1: Want to learn</p>
                <p className="text-gray-700">You're a beginner. You've read about it. No real experience. Learning curve: 6+ months to be competent.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 2: Know basics</p>
                <p className="text-gray-700">You've done it a few times. You understand fundamentals. Knowledge gaps exist. Learning curve: 3-6 months to be good.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 3: Know well</p>
                <p className="text-gray-700">You've done it 10+ times. You're competent. You solve most problems. Learning curve: 1-3 months to optimize.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 4: Know deeply ✓ THRESHOLD</p>
                <p className="text-gray-700">You've done it 20+ times. You solve edge cases. You can train others. You're the person others ask for help.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 5: Expert</p>
                <p className="text-gray-700">You're the recognized category expert. Published, taught, or built at scale. Peers reference your work.</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-gray-900">Threshold: 4+ (You must be able to deliver)</p>
              <p className="text-gray-700">If score is 1-3, you'll struggle. Clients pay for expertise, not enthusiasm.</p>
            </div>
          </div>

          {/* Variable 3: Solo Feasibility */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Variable 3: Solo Feasibility (Rate 1-5)</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 1: Requires team</p>
                <p className="text-gray-700">You must hire people to deliver. Enterprise consulting, agencies, anything with production. Survival: impossible solo.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 2: Requires 100+ hours</p>
                <p className="text-gray-700">Each project takes 100+ hours of your time. Implementation-heavy services. At £50/hr, you make £5k/project but can only do 3-4/year.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 py-2">
                <p className="font-semibold text-gray-900 mb-1">Score 3: Requires 40-100 hours</p>
                <p className="text-gray-700">Each project takes 40-100 hours. High-touch service. You can do 5-10/year. At £50/hr, that's £10k-50k/year. Feasible but constrained.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 4: Requires 10-40 hours ✓ THRESHOLD</p>
                <p className="text-gray-700">Each project takes 10-40 hours. You can do 15-20/year. At £50/hr, that's £75k-100k/year. Scalable solo business range.</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-indigo-50 p-4 rounded">
                <p className="font-semibold text-gray-900 mb-1">Score 5: Requires less than 10 hours</p>
                <p className="text-gray-700">Light-touch service. Product-like. Each project takes 5-10 hours. You can do 30-50/year. At £50/hr, that's £75k-125k/year. Highly scalable.</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-gray-900">Threshold: 4+ (You must survive)</p>
              <p className="text-gray-700">If score is 1-3, you either need a team or accept lower annual revenue. As a solo, you can't scale below threshold.</p>
            </div>
          </div>

          {/* The Scorecard */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Niche Scorecard</h3>
            <p className="text-gray-700 mb-6">
              Fill this in for your niche idea. Be honest. Overestimating scores is the biggest mistake.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-700">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 font-semibold">Variable</th>
                    <th className="text-center p-4 font-semibold">Your Score (1-5)</th>
                    <th className="text-left p-4 font-semibold">Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Market Pain</td>
                    <td className="text-center p-4">_____</td>
                    <td className="p-4">4+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Your Skill</td>
                    <td className="text-center p-4">_____</td>
                    <td className="p-4">4+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">Solo Feasibility</td>
                    <td className="text-center p-4">_____</td>
                    <td className="p-4">4+</td>
                  </tr>
                  <tr className="bg-indigo-50 border-indigo-200 border-t-2">
                    <td className="p-4 font-bold">Total Score</td>
                    <td className="text-center p-4 font-bold text-2xl">_____ /15</td>
                    <td className="p-4 font-bold">Minimum: 12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interpretation */}
            <div className="mt-8 space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="font-bold text-indigo-900 mb-2">Score 12-15: Hell Yes 🔥</p>
                <p className="text-gray-700">Do this. Your niche has real pain, you can deliver, and you can survive solo. This is a viable business. Launch now.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-bold text-yellow-900 mb-2">Score 9-11: Promising ⚠️</p>
                <p className="text-gray-700">One variable is weak. Test before committing. Validate the weak variable for 14 days. If it improves to 4+, go. If not, pivot.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="font-bold text-orange-900 mb-2">Score 6-8: Risky 🚫</p>
                <p className="text-gray-700">Two variables are weak. Don't launch. Spend a week validating each variable. If neither improves to 4+, kill it.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-bold text-red-900 mb-2">Score 3-5: Don't</p>
                <p className="text-gray-700">Go back to the drawing board. This niche isn't viable. Pick a different niche.</p>
              </div>
            </div>

            <div className="mt-8 bg-indigo-100 p-6 rounded-lg border border-indigo-300">
              <p className="font-bold text-gray-900 mb-3">The Solo Rule</p>
              <p className="text-gray-700">
                If total is less than 9, don't build a business here. If 9-11, validate hard. If 12+, commit fully. This scorecard often reveals your weakest variable. Fix it, don't ignore it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Niche Playbooks */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Three Niche Playbooks by Business Model
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
            Your niche formula depends on your business model. Here's how to build niches for each.
          </p>

          {/* Playbook A: Service */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook A: Service Business</h3>
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
              <p className="text-lg font-bold text-gray-900 mb-2">Formula:</p>
              <p className="text-gray-700 font-mono text-center py-4 bg-white rounded border border-indigo-300">
                [Specific Skill] for [Specific Industry] solving [Specific Pain]
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">✅ Good Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Email automation for SaaS founders with low open rates</li>
                  <li>• Systems setup for boutique consulting firms drowning in admin</li>
                  <li>• Copywriting for e-commerce store owners with high cart abandonment</li>
                  <li>• Google Ads management for dentists trying to fill appointments</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">❌ Bad Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Marketing for small businesses (too broad, no specific pain)</li>
                  <li>• Coaching for entrepreneurs (vague industry, undefined pain)</li>
                  <li>• Design for everyone (no specificity whatsoever)</li>
                  <li>• Consulting for companies (enterprise-level, slow sales cycle)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Solo Scoring:</p>
                <p className="text-gray-700">Service niches typically score 4-5 on Solo Feasibility if you stay focused. The trick: choose an industry where projects take 20-40 hours max, not 100+ hours.</p>
              </div>
            </div>
          </div>

          {/* Playbook B: Product */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook B: Product Business</h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <p className="text-lg font-bold text-gray-900 mb-2">Formula:</p>
              <p className="text-gray-700 font-mono text-center py-4 bg-white rounded border border-green-300">
                [Product Type] for [Specific User] that solves [Specific Pain]
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">✅ Good Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Notion templates for freelance designers to track clients</li>
                  <li>• Shopify app for UK stores handling VAT compliance</li>
                  <li>• Email course for SaaS founders on onboarding optimization</li>
                  <li>• Chrome extension for financial advisors managing portfolios</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">❌ Bad Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Productivity templates for everyone (no specific user, no pain)</li>
                  <li>• Shopify app for any store (too broad, no compliance angle)</li>
                  <li>• Course for entrepreneurs (vague, no specific outcome)</li>
                  <li>• App to help people (no specificity)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Solo Scoring:</p>
                <p className="text-gray-700">Products score well (4-5) on Solo Feasibility because they're delivery-light once built. The catch: marketing to a hyper-specific user is hard. That's why you need narrow niches.</p>
              </div>
            </div>
          </div>

          {/* Playbook C: Content */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook C: Content Business</h3>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
              <p className="text-lg font-bold text-gray-900 mb-2">Formula:</p>
              <p className="text-gray-700 font-mono text-center py-4 bg-white rounded border border-orange-300">
                [Specific Perspective] on [Topic] for [Specific Audience]
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">✅ Good Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technical SEO for e-commerce (not general SEO for everyone)</li>
                  <li>• Bootstrapping lessons from a founder who scaled to £1M solo</li>
                  <li>• Mental models for indie hackers building side projects</li>
                  <li>• Systems thinking applied specifically to remote teams</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">❌ Bad Niches:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Entrepreneurship tips (too broad, everyone does this)</li>
                  <li>• Marketing advice (undefined audience, vague topic)</li>
                  <li>• Productivity hacks (no specific angle, saturated)</li>
                  <li>• Business lessons (too generic)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Solo Scoring:</p>
                <p className="text-gray-700">Content scores well (5) on Solo Feasibility because it's one-to-many. The catch: content monetization takes time. You need 12+ months of consistent creation before revenue appears.</p>
              </div>
            </div>
          </div>

          {/* Solo Rule */}
          <div className="bg-indigo-100 p-6 rounded-lg border border-indigo-300 mb-8">
            <p className="font-bold text-gray-900 mb-3">The Solo Rule for All Playbooks</p>
            <p className="text-gray-700">
              If you can't fill in all [brackets] with specific words, it's not a niche. It's a market segment. Markets are too broad. Niches are specific enough that you can explain them in one sentence that makes people say "yes, I know exactly who needs that."
            </p>
          </div>
        </div>
      </div>

      {/* The 14-Day Validation Test */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            The 14-Day Validation Test
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
            Your scorecard is theory. Validation is practice. Here's how to prove your niche in 14 days.
          </p>

          {/* Days 1-2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Days 1-2: The Research Blitz</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Step 1: Google Keyword Planner</p>
                <p className="text-gray-700 mb-4">
                  Search your niche keywords. Example: "email automation for SaaS."
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono text-sm text-gray-700">
                    • 1,000+ searches/month = Strong signal (people searching){'{'}'{''}{}<br/>
                    • 100-1,000 searches/month = Okay signal (some interest){'{'}'{''}{}<br/>
                    • Less than 100 searches/month = Weak signal (too small)
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 2: Reddit/LinkedIn Search</p>
                <p className="text-gray-700 mb-4">
                  Find 10+ complaints or questions about this problem on Reddit, Twitter, or LinkedIn.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    Example searches:
                  </p>
                  <p className="font-mono text-sm text-gray-700 mt-2">
                    Reddit: r/SaaS "email open rate"{'{'}'{''}{}<br/>
                    LinkedIn: "email automation"{'{'}'{''}{}<br/>
                    Twitter: "low email open rates" -job -jobs -hiring
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 3: Competitor Check</p>
                <p className="text-gray-700 mb-4">
                  Find 3-5 solo consultants/agencies already serving this niche.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono text-sm text-gray-700">
                    • Found 5+ competitors = Validated market (people already making money){'{'}'{''}{}<br/>
                    • Found 2-3 competitors = Promising (market exists, not saturated){'{'}'{''}{}<br/>
                    • Found 0 competitors = Red flag (either untapped or not viable)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Days 3-5 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Days 3-5: The Network Test</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Step 1: LinkedIn Post</p>
                <p className="text-gray-700 mb-4">
                  Post exactly this (customize for your niche):
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 font-mono text-sm">
                  <p className="text-gray-700">
                    "I'm thinking about helping [NICHE] with [SPECIFIC PAIN]. Do you work with this audience? Would love a 15-min chat to understand the problem better. Reply here or DM me."
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 2: Direct Messages</p>
                <p className="text-gray-700 mb-4">
                  DM 5 people who fit your niche (find them via LinkedIn search). Send this message:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 font-mono text-sm">
                  <p className="text-gray-700">
                    "Hi [Name], I noticed you work in [INDUSTRY]. I'm researching the top pain points for [SPECIFIC ROLE] right now. Would you have 15 minutes for a quick chat? Happy to help however I can in return."
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="font-semibold text-gray-900 mb-2">Success Metric:</p>
                <p className="text-gray-700">Goal: 5 conversations. If you get zero replies after 5 DMs, your niche isn't as interested as you thought.</p>
              </div>
            </div>
          </div>

          {/* Days 6-10 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Days 6-10: The Offer Test</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Step 1: Create Simple Offer Page</p>
                <p className="text-gray-700 mb-4">
                  Build a basic landing page (Google Doc works). Structure:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm space-y-2">
                  <p className="font-bold text-gray-900">Headline: Your Specific Offer</p>
                  <p className="text-gray-700">"Email Automation for SaaS Founders (Low Open Rate Fix)"</p>
                  <p className="font-bold text-gray-900 mt-4">Problem (1 paragraph)</p>
                  <p className="text-gray-700">"Your SaaS open rates are stuck at 15%. Competitors are at 25%. You're leaving revenue on the table."</p>
                  <p className="font-bold text-gray-900 mt-4">Solution (1 paragraph)</p>
                  <p className="text-gray-700">"Email automation audit + strategy fix. One 3-hour session. £300 investment."</p>
                  <p className="font-bold text-gray-900 mt-4">CTA: "Book a Call" → Calendly link</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 2: Price It</p>
                <p className="text-gray-700 mb-4">
                  Set a price: £100-£500 (test range). Too low = no credibility. Too high = no interest.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 3: Share With Your 5 Conversations</p>
                <p className="text-gray-700 mb-4">
                  Send it to the people you talked to (days 3-5). Use this message:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 font-mono text-sm">
                  <p className="text-gray-700">
                    "Thanks for chatting the other day. Based on what you told me, I created this offering. Curious if this would actually solve the problem you mentioned?"
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="font-semibold text-gray-900 mb-2">Success Metric:</p>
                <p className="text-gray-700">Goal: 1 person interested or books a call. If 0 out of 5 are interested, your offer doesn't resonate.</p>
              </div>
            </div>
          </div>

          {/* Days 11-14 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Days 11-14: The Delivery Test</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-3">Step 1: Deliver to Anyone Who Buys</p>
                <p className="text-gray-700 mb-4">
                  If someone books a call or pays, deliver. This is the real test: can you actually solve the problem?
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 2: Ask for Feedback</p>
                <p className="text-gray-700 mb-4">
                  After delivery, send this:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 font-mono text-sm">
                  <p className="text-gray-700">
                    "One quick question for my research: What almost stopped you from booking this? What would have made you NOT hire me?"
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Step 3: Ask for Referrals</p>
                <p className="text-gray-700 mb-4">
                  Send this after delivery:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 font-mono text-sm">
                  <p className="text-gray-700">
                    "Who else in your network has this exact problem? I'd love to help them too."
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <p className="font-semibold text-gray-900 mb-2">Success Metric:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1 sale = Validated (people will pay)</li>
                  <li>• 0 sales but 3+ conversations = Promising (interest exists)</li>
                  <li>• 0 conversations or 0 sales = Niche is wrong</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Final Rule */}
          <div className="bg-red-100 p-6 rounded-lg border border-red-300 mb-8">
            <p className="font-bold text-gray-900 mb-3">The Critical Rule: 14 Days, Not 30</p>
            <p className="text-gray-700">
              If you get 0 sales and 0 conversations in 14 days, your niche is wrong. Don't spend 30 more days "improving the offer." Offers don't fix bad niches. Kill it. Pick another niche. Test that one for 14 days. Repeat until you find one that works.
            </p>
          </div>

          {/* The 3-Client Rule */}
          <div className="bg-indigo-100 p-6 rounded-lg border border-indigo-300">
            <p className="font-bold text-gray-900 mb-3">The 3-Client Rule</p>
            <p className="text-gray-700">
              After you get your first 3 clients in your niche, you'll know if it works. If all 3 were easy sales and happy clients, you have a business. If 1 out of 3 was a nightmare, that's normal. If all 3 were a nightmare, your niche is wrong. Pivot then, not before.
            </p>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Good Niches vs Bad Niches
          </h2>

          <div className="bg-white rounded-xl border border-green-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Good Niche: Email Automation for SaaS</h3>
            <div className="space-y-4 text-gray-700">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-900 mb-2">Market Pain: 5</p>
                <p>"SaaS founders are desperate. Open rates stuck at 15%. Competitors at 25%. They want a fix yesterday."</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-900 mb-2">Your Skill: 4</p>
                <p>"I've set up email automation for 20+ companies. I know the best practices, common mistakes, advanced segmentation."</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-900 mb-2">Solo Feasibility: 4</p>
                <p>"Each engagement is audit (3 hours) + implementation strategy (2 hours) = 5 hours. £300-500 per project. Can do 2-3 per week."</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-green-700">Total: 13 → Hell Yes</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-gray-900 mb-2">What happened:</p>
                <p>"First 14 days: 3 conversations, 1 paid client. First month: £8,500 revenue. Six months later: £20k/month recurring plus projects."</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Bad Niche: Life Coaching for Women</h3>
            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-gray-900 mb-2">Market Pain: 2</p>
                <p>"Women want 'better lives' but it's vague. What problem exactly? Relationships? Career? Health? Undefined pain isn't urgent."</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-gray-900 mb-2">Your Skill: 5</p>
                <p>"I'm certified life coach. Worked with 50+ women. Deep expertise. Strong testimonials."</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-gray-900 mb-2">Solo Feasibility: 2</p>
                <p>"Each client needs 10+ hours over 3 months. £100/hour = £1,000 per client. Can only take 10-12 clients per year = £10-12k/year. Burnout city."</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-bold text-red-700">Total: 9 → Risky</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-gray-900 mb-2">What happened:</p>
                <p>"First 14 days: 0 conversations, 0 sales. Spent 2 months improving messaging. Still 0 sales. Eventually got some clients at £50/hour. Made £1,200/month. Burned out year 2."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="py-16 px-6 sm:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-yellow-400 p-8">
            <div className="flex gap-4">
              <div className="text-4xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">A Bad Offer in a Good Niche Beats a Perfect Offer in a Bad Niche</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">Bad Offer + Good Niche:</span> "Want help optimizing email?" Rough. But if niche is desperate, they'll buy anyway.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Perfect Offer + Bad Niche:</span> Beautifully designed landing page. Perfect copy. Niche doesn't care. No sales.
                  </p>
                  <p className="mt-6 font-semibold text-gray-900">
                    Fix your niche first. Your offer matters only after niche is validated. Get the niche right and most offers will work. Get the niche wrong and no offer will save you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Continue Your Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/start/business-ideas">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Step Back</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Ideas</h3>
                <p className="text-gray-700 text-sm mb-4">Don't have niche ideas yet? Start here. Generate 10+ viable ideas.</p>
                <p className="text-indigo-600 font-semibold">← Brainstorm ideas</p>
              </div>
            </Link>
            <Link href="/start/business-models">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">Step Back</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Models</h3>
                <p className="text-gray-700 text-sm mb-4">Know your niche. Now pick your model: service, product, or content.</p>
                <p className="text-indigo-600 font-semibold">← Choose model</p>
              </div>
            </Link>
            <Link href="/offer/first-offer">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">Step Forward</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build Your First Offer</h3>
                <p className="text-gray-700 text-sm mb-4">Niche validated? Now build an offer to sell into that niche.</p>
                <p className="text-purple-600 font-semibold">Create offer →</p>
              </div>
            </Link>
            <Link href="/start/first-90-days">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">Step Forward</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Your First 90 Days</h3>
                <p className="text-gray-700 text-sm mb-4">Niche chosen and offer ready? Here's your 90-day launch plan.</p>
                <p className="text-purple-600 font-semibold">90-day plan →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 sm:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to Find Your Niche?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Fill out the Profitability Matrix. If you score 12+, validate for 14 days. If validation works, you have a business.
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
            Download Niche Scorecard (Google Sheets)
          </button>
          <p className="text-indigo-200 text-sm mt-8">Free template. Editable. Use it for every niche idea.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p className="mb-4">Found your niche? Build your business foundation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:text-sm">
            <Link href="/start/business-ideas" className="text-indigo-600 font-semibold hover:underline">
              ← Business Ideas
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/start/business-models" className="text-indigo-600 font-semibold hover:underline">
              ← Business Models
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/offer/first-offer" className="text-indigo-600 font-semibold hover:underline">
              Build Your Offer →
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/start/first-90-days" className="text-indigo-600 font-semibold hover:underline">
              90-Day Plan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
          
