'use client';

import Link from 'next/link';

export default function ChannelExpansionHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Channel Expansion: Adding One Without Killing One
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Add a second acquisition channel. Test without splitting focus. Integrate if it works. Scale if it wins.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I added a second channel too early. Split focus. Both died. Lost £5k/month in revenue. Waited 6 months. Made first channel strong. Then added second. Integrated together. Now both channels are strong. Timing is everything."
            </p>
            <p className="text-sm text-gray-600">— Solo founder, 3 months to recovery</p>
          </div>
        </div>
      </section>

      {/* The Channel Expansion Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Channel Expansion Myth
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Most founders think channel expansion means doing everything at once. Add social media. Launch email. Start YouTube. Run ads. All parallel. This is a myth. This kills channels.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The Splitting Trap</h3>
              <p className="text-gray-700 text-sm">
                Add channel without auditing current one. Split focus. Both channels get 50% effort. Both become weak. Revenue drops.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The Timing Trap</h3>
              <p className="text-gray-700 text-sm">
                Add second channel before first is optimized. First channel only £2k/month. Add second. Now effort spread thin. Both stay weak.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The Integration Trap</h3>
              <p className="text-gray-700 text-sm">
                Build two channels separately. Both strong. But they don't work together. Effort wasted. Leads don't flow between channels.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The Expectation Trap</h3>
              <p className="text-gray-700 text-sm">
                Expect second channel to hit same volume as first immediately. It takes time. Give up. Channel dies. Back to one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategory Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            The Channel Expansion Framework
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Card 1: Channel Audit */}
            <Link href="/growth/channel-expansion/channel-audit">
              <div className="bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all p-8 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Channel Audit</h3>
                <p className="text-gray-700 mb-6">
                  Audit your current channel. Is it strong enough to add a second? Score it. Know before you expand.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Second Channel */}
            <Link href="/growth/channel-expansion/second-channel">
              <div className="bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all p-8 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">➕</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Second Channel</h3>
                <p className="text-gray-700 mb-6">
                  Pick, test, validate second channel. Test on 20% time. Don't split focus. Validate before scaling.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            {/* Card 3: Channel Integration */}
            <Link href="/growth/channel-expansion/channel-integration">
              <div className="bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all p-8 cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Channel Integration</h3>
                <p className="text-gray-700 mb-6">
                  Integrate channels if second works. Make them work together. 1+1=3. Scale both at once.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The 20% Rule */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 20% Rule: Testing Without Splitting
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            The channel expansion paradox: You want to test a second channel. But your first channel needs 100% focus. The answer is the 20% Rule.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-700">80%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Primary Channel Gets 80% Effort</h4>
                  <p className="text-gray-700">
                    Optimize existing channel. Find 20% improvements. Get it to £5k+/month revenue before adding second. This is non-negotiable.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-700">20%</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Second Channel Gets 20% Effort</h4>
                  <p className="text-gray-700">
                    Test second channel. Post 2–3 times per week. See if it gains traction. Don't optimize yet. Just test.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify center">
                    <span className="text-xl font-bold text-pink-700">90</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">90-Day Test Window</h4>
                  <p className="text-gray-700">
                    Give second channel 90 days on 20% time. If it hits 10% lead volume of primary channel, graduate to 50/50. If not, archive it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: 90-Day Validation</p>
            <p className="text-gray-700">
              A new channel won't deliver immediate results. Give it 90 days. If it's not working by day 90, it's not the right channel. Kill it. Move to next.
            </p>
          </div>
        </div>
      </section>

      {/* Channel Audit Checklist */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Channel Audit Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Before adding a second channel, audit your primary. Score 1-10 on each. If not 8+, you're not ready.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-700">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Consistent Revenue Stream</h4>
                  <p className="text-gray-700 mt-1">
                    Channel generates £X/month consistently (minimum 3 months). Not volatile. Not experimental.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Score: <span className="font-bold">__/10</span></p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-700">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Systematized Process</h4>
                  <p className="text-gray-700 mt-1">
                    You have a repeatable system. You're not figuring it out each time. You have playbooks.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Score: <span className="font-bold">__/10</span></p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-700">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Time-Efficient</h4>
                  <p className="text-gray-700 mt-1">
                    Channel only takes X hours per week. You have time for second channel on remaining capacity. Not maxed out.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Score: <span className="font-bold">__/10</span></p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-700">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">You Own It</h4>
                  <p className="text-gray-700 mt-1">
                    You understand the mechanics. You're not reliant on an algorithm. You can explain your success.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Score: <span className="font-bold">__/10</span></p>
                </div>
              </div>
            </div>

            <div className="pb-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-700">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Growth Trajectory</h4>
                  <p className="text-gray-700 mt-1">
                    Channel is slowly growing month-over-month. Not flat. Not declining. Trajectory is up.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Score: <span className="font-bold">__/10</span></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-8">
              <p className="text-green-900 font-semibold mb-2">Your Total Score: __/50</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">45–50:</span> Ready to expand. Pick second channel. Test on 20% time.
                </p>
                <p>
                  <span className="font-semibold">35–44:</span> Almost ready. Optimize primary channel 30 days more. Retest.
                </p>
                <p>
                  <span className="font-semibold">Below 35:</span> Not ready. Channel needs work. Focus on primary only. Test again in 60 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Integration Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Channel Integration: 1 + 1 = 3
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            When second channel hits 10% of primary volume, they should work together. Not separately. This is where growth accelerates.
          </p>
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Integration Steps</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Step 1: Cross-Promote</h4>
                  <p className="text-gray-700">
                    Mention primary channel in second channel content. Mention second in primary. Build audience in both places. Grow both.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Step 2: Unified Messaging</h4>
                  <p className="text-gray-700">
                    Use same messaging, frameworks, examples across both channels. Person sees you on Channel A. Sees same message on Channel B. Trust increases.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Step 3: Lead Funnel Integration</h4>
                  <p className="text-gray-700">
                    Capture leads from both channels into same email list. Send same nurture sequence. Leads from Channel A see offers. Leads from Channel B see offers. Pool grows.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Step 4: Content Repurposing</h4>
                  <p className="text-gray-700">
                    Create content for primary channel. Repurpose for secondary. Long-form content becomes short. Blog becomes social. Podcast becomes clips. Effort goes down. Reach goes up.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Synergy Before Scale</p>
              <p className="text-gray-700">
                Before scaling both channels, make sure they work together. Synergy is when second channel helps first, and vice versa. When you feel synergy, double effort. That's when growth explodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Examples */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Channel Expansion Anti-Examples
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            What happens when you don't follow the framework.
          </p>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Anti-Example 1: The YouTube Mistake</h3>
              <p className="text-gray-700 mb-3">
                "Google Search was bringing £3k/month. I added YouTube thinking I'd get more leads. Spent 10 hours per week on YouTube. Google traffic dropped to £2k/month because I wasn't optimizing it anymore. YouTube brought £500/month. Net loss: £3k. Took 4 months to recover."
              </p>
              <p className="text-sm text-red-800 font-semibold">Cost: £12,000 lost revenue over 4 months</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Anti-Example 2: The LinkedIn Trap</h3>
              <p className="text-gray-700 mb-3">
                "Email list was my main channel. £8k/month. I started LinkedIn to 'build personal brand.' Posted daily. Email list wasn't being maintained. Took 2 weeks off from email outreach. Leads dropped. LinkedIn only brought £1k/month. Took 8 weeks to rebuild email authority."
              </p>
              <p className="text-sm text-red-800 font-semibold">Cost: £4,000 in lost email revenue during rebuilding</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Anti-Example 3: The Unintegrated Channels</h3>
              <p className="text-gray-700 mb-3">
                "Built content strategy on Blog (£6k/month). Added Podcast (reached 1k/month). Never cross-promoted. Podcast grew to £2k/month. Blog stayed at £6k. Could have been £9k if they worked together. Wasted 6 months of podcast effort not integrating."
              </p>
              <p className="text-sm text-red-800 font-semibold">Cost: £3,000 lost compound growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Channel Expansion Success Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            What happens when you follow the framework.
          </p>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Success Story 1: The Audit First Approach</h3>
              <p className="text-gray-700 mb-3">
                "Email outreach was my channel. £5k/month. Wanted to add content marketing. Scored my email channel: 9/10. I was ready. Spent 90 days on 20% time with blog. Month 3, got first blog lead. Month 6, £2k/month from blog. Integrated email + blog. Cross-promoted. Now £9k/month total. Same effort. 80% more revenue."
              </p>
              <p className="text-sm text-green-800 font-semibold">Result: £4,000 additional monthly revenue</p>
            </div>

            <div className="bg-white rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Success Story 2: The 90-Day Kill Rule</h3>
              <p className="text-gray-700 mb-3">
                "LinkedIn outreach was making £6k/month. Tested Twitter on 20% time for 90 days. Got 0 leads. Could have forced it. Instead, killed it. Focused effort back on LinkedIn optimization. LinkedIn grew to £8k/month. That's the power of killing what doesn't work early."
              </p>
              <p className="text-sm text-green-800 font-semibold">Result: Avoided £3,000 monthly sink cost</p>
            </div>

            <div className="bg-white rounded-xl border border-green-200 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Success Story 3: The Integration Win</h3>
              <p className="text-gray-700 mb-3">
                "Built podcast (£3k/month). Added YouTube shorts (10% of podcast reach). Didn't integrate for 3 months. Then started embedding podcast clips in YouTube, linking YouTube to podcast. Within 2 months, YouTube grew to £2k/month. Podcast audio reached YouTube audience. Both channels now feed each other. £5k/month total from two channels that now feel like one."
              </p>
              <p className="text-sm text-green-800 font-semibold">Result: 2.7x growth by integrating late</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Channel Expansion Scorecard */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Channel Expansion Scorecard
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-lg text-gray-700 mb-8">
              Use this scorecard to evaluate if you're ready for channel expansion and which channel to test next.
            </p>

            <div className="space-y-8">
              {/* Primary Channel Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Section A: Primary Channel Audit</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Current Channel: _____________________</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Monthly Revenue: £___________________</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Time Per Week: _____ hours</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Channel Score (from checklist): __/50</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-700">
                      ☐ Score is 45+: Ready to expand
                      <br />☐ Score is 35–44: Need 30 more days optimization
                      <br />☐ Score is &lt;35: Not ready, focus on primary channel
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Channel Candidate Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Section B: Second Channel Candidate</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Candidate Channel: _____________________</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Testing Start Date: _____________________</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">90-Day End Date: _____________________</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Time Per Week (Max 20%): _____ hours</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-900">Success Metric (10% of primary): £_____/month</p>
                  </div>
                </div>
              </div>

              {/* Integration Readiness Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Section C: Integration Readiness (Day 90)</h3>
                <div className="space-y-3 text-sm">
                  <p>At day 90, score each:</p>
                  <div className="bg-gray-50 p-3 rounded">
                    ☐ Second channel hit 10% revenue milestone: __/10 score
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    ☐ Process is systematized and repeatable: __/10 score
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    ☐ Can allocate 50% time to second channel: __/10 score
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="font-semibold text-gray-900">Total: __/30</p>
                    <p className="text-gray-700 mt-2">
                      24+: Integrate channels. Scale both.
                      <br />15–23: Extend test another 30 days.
                      <br />&lt;15: Kill channel. Try next one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded border border-blue-300">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Copy & paste this into a spreadsheet or document. Reference it quarterly.</span> Channel expansion is not one-time. It's iterative. Each 90 days, evaluate. Keep what works. Kill what doesn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Expansion Formula */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Channel Expansion Formula
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Strong Channel + Weak Channel → Test → Integrate → Scale
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <p className="font-mono text-sm text-gray-900 font-bold mb-2">PHASE 1: AUDIT</p>
                <p className="text-gray-700">
                  Score primary channel 1–10. If not 8+, don't expand. Optimize first. Spend 30–90 days getting primary channel to 8+.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="text-3xl text-gray-400">↓</div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <p className="font-mono text-sm text-gray-900 font-bold mb-2">PHASE 2: TEST (90 Days)</p>
                <p className="text-gray-700">
                  Primary channel gets 80% effort. New channel gets 20% effort. Test on low burn. Validate without splitting focus.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="text-3xl text-gray-400">↓</div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
                <p className="font-mono text-sm text-gray-900 font-bold mb-2">PHASE 3: DECIDE (Day 90)</p>
                <p className="text-gray-700">
                  Hit 10% milestone? Grow it. Didn't work? Kill it. No in-between. Binary decision.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="text-3xl text-gray-400">↓</div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <p className="font-mono text-sm text-gray-900 font-bold mb-2">PHASE 4: INTEGRATE</p>
                <p className="text-gray-700">
                  If second channel graduated, integrate. Cross-promote. Repurpose content. Link funnels. Make 1+1=3.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="text-3xl text-gray-400">↓</div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
                <p className="font-mono text-sm text-gray-900 font-bold mb-2">PHASE 5: SCALE</p>
                <p className="text-gray-700">
                  Both channels now feed each other. Double effort. Send 80% to both channels. Synergy accelerates. Growth explodes.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-8">
              <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Phases Are Sequential</p>
              <p className="text-gray-700">
                Don't skip phases. Don't combine phases. Most solos try to go from Phase 1 to Phase 5 in week 1. They fail. Follow the formula. Each phase runs its course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Expansion Stories Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Channel Expansion Stories
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">
                  <em>Feb 15, 2024</em>
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                I Added YouTube and Lost Google Traffic
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Why splitting focus killed both channels. The 80/20 rule. What I should have done instead.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">6 min read</span>
                <span className="text-gray-400">→</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">
                  <em>Feb 12, 2024</em>
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                The 20% Rule: Testing Channels Without Splitting
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                How I test channels on 20% time while keeping 80% on main. The 90-day decision framework.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">5 min read</span>
                <span className="text-gray-400">→</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">
                  <em>Feb 10, 2024</em>
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Integrating Channels: When 1+1=3
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                How I made two channels work together. Both grew when they integrated. The synergy effect.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">7 min read</span>
                <span className="text-gray-400">→</span>
              </div>
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
            Audit your channel. Score it 1–10. If 8+, you're ready to pick a second channel and test on 20% time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/channel-expansion/channel-audit">
              <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
                Start Channel Audit
              </button>
            </Link>
            <Link href="/growth/revenue-growth">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back to Revenue Growth
              </button>
            </Link>
          </div>
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">The One-Channel Mistake</h3>
            <p className="text-gray-700">
              Most solopreneurs stay one-channel because they think audience overlap will fail. It won't. Your audience wants to hear from you everywhere. Presence across multiple channels compounds trust. When they see you in 2 places, they're 4x more likely to buy. Channel expansion isn't greed. It's visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Growth Pillar</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Growth Hub
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Revenue Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Channel Expansion</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/channel-expansion/channel-audit" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Channel Audit
                  </Link>
                </li>
                <li>
                  <Link href="/growth/channel-expansion/second-channel" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Second Channel
                  </Link>
                </li>
                <li>
                  <Link href="/growth/channel-expansion/channel-integration" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related Guides</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketing/scaling" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Channel Scaling
                  </Link>
                </li>
                <li>
                  <Link href="/marketing/content-marketing" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Content Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Next Category</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/productization" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Productization
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
