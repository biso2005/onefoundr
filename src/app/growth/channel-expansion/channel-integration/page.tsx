'use client';

import Link from 'next/link';

export default function ChannelIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Channel Integration: When 1+1=3
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Connect two strong channels. Cross-promote. Scale both. Create synergy through connection.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I had email (8/10) and YouTube (8/10). Kept them separate for 6 months. No cross-promotion. Combined revenue: £10k/month. Then I connected them. Email → YouTube, YouTube → email. Both grew 50%. Same effort. Revenue: £15k/month. That's synergy. That's integration."
            </p>
            <p className="text-sm text-gray-600">— Solo founder, on activating channel synergy</p>
          </div>
        </div>
      </section>

      {/* The Integration Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why Keeping Channels Separate Kills Synergy
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            You have two strong channels. You're tempted to run them independently. Here's why that's the wrong move.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Separate" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You run channels independently. No cross-promotion. No connects. Reality: You're working 2x for 1x results. If email grows 10%, YouTube grows 10%. Combined: 10%. If integrated: Combined could be 30%.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: 2x effort, 1x result. 20% synergy loss per month.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Silo" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You treat channels as silos. Email team (you) doesn't talk to YouTube team (you). Reality: Channels should feed each other. Email subscribers should become YouTube viewers. YouTube viewers should become email subscribers.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Missed cross-promotion. 30% audience loss.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Too Complex" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think integration is complex. Multiple systems, multiple workflows, multiple headaches. Reality: 2 simple connections create 3x results. Takes 1 hour to set up. Runs on its own.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Procrastination. 3 months of missed synergy.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "No Time" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think integration takes time. You're managing two channels already. How can you add integration work? Reality: Integration saves time. One piece of content becomes two. One funnel converts twice.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Time waste. 2x content creation instead of 1x.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Cross-Promote or Sabotage</p>
            <p className="text-gray-700">
              If you're not cross-promoting your two channels, you're not just running them separate. You're sabotaging them. You're keeping your email subscribers from your best YouTube content. And your YouTube viewers from your best email case studies. Every day apart is money left on the table.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: The 6-Month Loss</h3>
            <p className="text-gray-700 mb-2">
              "Sarah had email (8/10) and Twitter (8/10). Kept them separate for 6 months. Email grew 10%/month. Twitter grew 10%/month. Same effort. Then she integrated. Email → Twitter, Twitter → email. Email grew 30%/month. Twitter grew 25%/month. She realized: 6 months of no integration = £9k lost revenue. Should've connected day one."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of separation: £9,000 in missed revenue growth.</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The Immediate Integration</h3>
            <p className="text-gray-700 mb-2">
              "Tom had email (8/10) and LinkedIn (8/10). Day 1 of having both at 8/10, he integrated. Email subscribers got LinkedIn link (CTR: 35%). LinkedIn visitors joined email (signup: 40%). After 1 month, email grew 40%. LinkedIn grew 35%. Combined: £18k (vs £14k separate). He never runs channels apart anymore."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £4k additional monthly revenue from day-1 integration.</p>
          </div>
        </div>
      </section>

      {/* The Integration Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 3-Connection Integration Framework
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Integration isn't complex. It's three connections. Connect them, and 1+1 becomes 3.
          </p>

          <div className="space-y-8">
            {/* Connection 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-green-600 min-w-fit">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connection: Content → Content</h3>
                  <p className="text-gray-700">One piece of content becomes two pieces through repurposing and cross-promotion.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">What:</p>
                  <p className="text-gray-700 text-sm">Primary channel content becomes secondary channel content. Email case study becomes YouTube video. YouTube tutorial becomes email lead magnet. One research project feeds both.</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (Email → YouTube):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • You write detailed email case study: "How I went from £2k to £10k/month"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • You record YouTube video: Full walkthrough of that same case study
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Same core: Same data, same insights, different format
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (YouTube → Email):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • You publish YouTube tutorial: "5 steps to improve conversion rate"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • You create email lead magnet: "Free 5-step checklist" (same content)
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Result: YouTube viewers join email. Email subscribers watch video
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-3">Result:</p>
                  <p className="text-gray-700 text-sm font-semibold text-green-700">2x content from 1x effort. Same research, two outputs.</p>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4 border border-green-300">
                <p className="text-sm text-green-900">
                  <span className="font-semibold">💡 Solo Rule:</span> If you create content once and use it twice, you 2x your leverage.
                </p>
              </div>
            </div>

            {/* Connection 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-teal-600 min-w-fit">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connection: Audience → Audience</h3>
                  <p className="text-gray-700">Move your audience between channels. They subscribe once, access both.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">What:</p>
                  <p className="text-gray-700 text-sm">Email subscribers become YouTube subscribers. YouTube viewers join email. One audience, two channels. Your audience knows you exist everywhere.</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (Email → YouTube):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • Every email includes: "Watch latest on YouTube: [link]"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • Email footer: "👉 Subscribe to YouTube for video tutorials"
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Result: 30-40% of email subscribers click to YouTube
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (YouTube → Email):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • YouTube description: "Join my email for templates + case studies"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • YouTube cards: Link to email signup landing page
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Result: 15-25% of YouTube viewers join email list
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-3">Result:</p>
                  <p className="text-gray-700 text-sm font-semibold text-teal-700">3x audience growth through cross-channel flow.</p>
                </div>
              </div>

              <div className="bg-teal-100 rounded-lg p-4 border border-teal-300">
                <p className="text-sm text-teal-900">
                  <span className="font-semibold">💡 Example:</span> If email has 5,000 subscribers and 30% click YouTube link, that's 1,500 new YouTube viewers/month. If YouTube has 10,000 subscribers and 20% join email, that's 2,000 new email subscribers/month.
                </p>
              </div>
            </div>

            {/* Connection 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-cyan-600 min-w-fit">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connection: Funnel → Funnel</h3>
                  <p className="text-gray-700">Both channels lead to the same offer. Track which channel works best.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">What:</p>
                  <p className="text-gray-700 text-sm">Email has CTA: "Book call." YouTube has same CTA: "Book call." Both lead to Calendly. But you track: Which channel brought that lead? Email or YouTube?</p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (Email Funnel):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • Email CTA: "Ready to scale? Book a call: calendly.com/?source=email"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • Use UTM parameter: ?utm_source=email
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Track: How many calls from email? What close rate?
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <p className="font-bold text-gray-900 mb-3">How (YouTube Funnel):</p>
                  <p className="text-gray-700 text-sm mb-2">
                    • YouTube description/cards: Link to Calendly with ?utm_source=youtube
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    • Track: How many calls from YouTube? What close rate?
                  </p>
                  <p className="text-gray-700 text-sm">
                    • Compare: Which channel drives more valuable leads?
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-3">Result:</p>
                  <p className="text-gray-700 text-sm font-semibold text-cyan-700">2x leads from same offer. 2x data for optimization.</p>
                </div>
              </div>

              <div className="bg-cyan-100 rounded-lg p-4 border border-cyan-300">
                <p className="text-sm text-cyan-900">
                  <span className="font-semibold">💡 Example:</span> Email drives 30 calls/month. YouTube drives 15 calls/month. Combined: 45 calls. Email close rate: 30%. YouTube close rate: 20%. You optimize: Improve YouTube messaging to match email close rate. Suddenly YouTube drives 25 calls (not 15) at 30% close rate. Now: 55 calls (not 45).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: The Three Layers</p>
            <p className="text-gray-700">
              Perfect integration has all three connections: Content flows both ways. Audience flows both ways. Funnel converts both ways. If any connection is missing, your channels aren't truly integrated. They're cooperating, not synergizing.
            </p>
          </div>
        </div>
      </section>

      {/* The Integration Playbook */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Integration Playbook: 4 Steps Over 4 Weeks
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Integration doesn't happen overnight. Follow this 4-step playbook to build synergy properly.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl font-bold text-blue-600 min-w-fit">Step 1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Map Content Flow</h3>
                  <p className="text-gray-700 mb-4">Decide which content goes where and how it flows.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Map this week's content. Primary channel piece → Secondary format.
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Example (Email → YouTube):</span><br/>
                    Email: "Case study: £2k → £10k" becomes YouTube: "Full walkthrough"
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Example (YouTube → Email):</span><br/>
                    YouTube: "5 conversion tips" becomes Email: "Free checklist"
                  </p>
                </div>
                <div className="bg-white rounded p-4 border border-blue-200">
                  <p className="text-xs text-gray-600 font-mono">
                    Timeline: 1 day<br/>
                    Frequency: Every week
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl font-bold text-purple-600 min-w-fit">Step 2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Add Cross-Promotion CTAs</h3>
                  <p className="text-gray-700 mb-4">Every piece gets a CTA to the other channel.</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Email CTA: "Watch this on YouTube: [link]"<br/>
                    YouTube CTA: "Join email for templates: [link]"
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Placement:</span>
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1 ml-4">
                    <li>• Email: End of email, p.s., footer</li>
                    <li>• YouTube: Description, cards, end screen</li>
                  </ul>
                </div>
                <div className="bg-white rounded p-4 border border-purple-200">
                  <p className="text-xs text-gray-600 font-mono">
                    Timeline: 2 days<br/>
                    Apply to: Every piece going forward
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl font-bold text-pink-600 min-w-fit">Step 3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Build Unified Funnel with UTM Parameters</h3>
                  <p className="text-gray-700 mb-4">Both channels lead to same offer. Track which channel wins.</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Set up tracking for all CTAs using UTM parameters.
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Email CTA format:</span><br/>
                    calendly.com/yourname?utm_source=email&utm_campaign=integration
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">YouTube CTA format:</span><br/>
                    calendly.com/yourname?utm_source=youtube&utm_campaign=integration
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Track:</span> Which channel drives more leads? Which convert better?
                  </p>
                </div>
                <div className="bg-white rounded p-4 border border-pink-200">
                  <p className="text-xs text-gray-600 font-mono">
                    Timeline: 1 day setup<br/>
                    Running: Continuously
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl font-bold text-indigo-600 min-w-fit">Step 4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale Both Based on Performance</h3>
                  <p className="text-gray-700 mb-4">As synergy increases, scale your allocation toward both channels.</p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Week 1–2: Both channels work at current allocation (e.g., 80/20)<br/>
                    Week 3–4: If synergy strong, consider scaling to 70/30<br/>
                    Month 2: If both still 8/10+, scale to 60/40
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Scaling Rule:</span> Only scale if both channels stay 8/10 or higher. If either drops, revert to previous allocation.
                  </p>
                </div>
                <div className="bg-white rounded p-4 border border-indigo-200">
                  <p className="text-xs text-gray-600 font-mono">
                    Timeline: Ongoing<br/>
                    Monitor: Weekly data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Slow Scale Wins</p>
            <p className="text-gray-700">
              Don't scale fast. If you go from 80/20 to 50/50 overnight, both channels often drop. Scale in 10% increments. Watch metrics weekly. If both stay strong, scale more. If either drops, pause and strengthen before scaling further.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mt-8">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: Fast Scale Disaster</h3>
            <p className="text-gray-700 mb-2">
              "Tom had email (8/10, £8k/month) and YouTube (8/10, £5k/month). Both at 8/10. He scaled immediately to 50/50 (instead of 80/20 → 70/30 → 60/40). Within 2 weeks, email dropped to 6/10 (£4k/month). YouTube dropped to 5/10 (£1k/month). Combined: £5k (down from £13k). He lost £8k/month in revenue. Should've scaled slow: 80/20 for 2 weeks, then 70/30, then 60/40."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost: £24,000 lost in 3 months from fast scaling.</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6 mt-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The Slow Scale Win</h3>
            <p className="text-gray-700 mb-2">
              "Sarah had email (9/10, £10k/month) and LinkedIn (8/10, £6k/month). Combined: £16k. She integrated on the 3-connection model. Week 1: Added CTAs. Week 2: Tracked leads. Week 3: Data showed: Email driving 70% of leads, LinkedIn 30%. She kept 80/20. Month 2: Both stayed 8/10+. She scaled to 70/30. Month 3: Both still 8/10+. Email: £11k. LinkedIn: £7k. Combined: £18k. By month 4, she scaled to 60/40. Email: £11k. LinkedIn: £9k. Combined: £20k. Slow scaling, steady growth."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £4k additional revenue from proper scaling + integration.</p>
          </div>
        </div>
      </section>

      {/* Integration Metrics */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Integration Metrics: When to Scale Both
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Not all integrated channels should scale equally. Use these three metrics to decide.
          </p>

          <div className="space-y-8 mb-12">
            {/* Metric 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metric #1: Both Channels Strong (8+/10)</h3>
              <div className="bg-blue-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-semibold text-gray-900 mb-2">Channel A (Primary):</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>✓ Volume: 5+ leads/week</li>
                    <li>✓ Quality: 60%+ close rate</li>
                    <li>✓ Consistency: 8+ weeks consistent</li>
                    <li>✓ Profitability: £75+/hour effective</li>
                    <li><span className="font-bold">Strength: 8/10 or higher</span></li>
                  </ul>
                </div>
                <div className="pb-4">
                  <p className="font-semibold text-gray-900 mb-2">Channel B (Secondary):</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>✓ Volume: 3+ leads/week</li>
                    <li>✓ Quality: 40%+ close rate</li>
                    <li>✓ Consistency: 8+ weeks consistent (after testing)</li>
                    <li>✓ Profitability: £50+/hour effective</li>
                    <li><span className="font-bold">Strength: 8/10 or higher</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-100 rounded p-4 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Rule:</span> If both aren't 8/10+, don't integrate yet. Strengthen the weak one first. Integration amplifies what's already strong. It doesn't fix what's weak.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metric #2: Synergy Present (Combined {">"} Sum)</h3>
              <div className="bg-purple-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="pb-4">
                  <p className="font-semibold text-gray-900 mb-2">Synergy Formula:</p>
                  <p className="text-sm text-gray-700 mb-3">
                    (Channel A Leads + Channel B Leads) × Integration Factor = Total Leads
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Without Integration:</span><br/>
                    Email 10 leads/week + YouTube 5 leads/week = 15 leads/week (1x sum)
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">With Integration (3-connection):</span><br/>
                    Email 10 + YouTube 5 = 15 baseline + 5 synergy = 20 leads/week (1.33x sum)
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Examples:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">33% Lift:</span> 15 leads baseline → 20 leads integrated</p>
                    <p><span className="font-semibold">50% Lift:</span> 20 leads baseline → 30 leads integrated</p>
                    <p><span className="font-semibold">100% Lift:</span> 15 leads baseline → 30 leads integrated</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-100 rounded p-4 border border-purple-300">
                <p className="text-sm text-purple-900">
                  <span className="font-semibold">Rule:</span> Integration should increase combined leads by at least 25%. If it doesn't, your connections aren't strong enough. Improve CTAs or content flow.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Metric #3: System Works Without You (Automation)</h3>
              <div className="bg-green-50 rounded-lg p-6 space-y-4 mb-6">
                <p className="font-semibold text-gray-900 mb-4">Integration should require minimal daily work:</p>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900 text-sm">Content Repurposing:</p>
                    <p className="text-xs text-gray-600">Automated or templated. 1 piece → 2 formats. Same system every week.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900 text-sm">Cross-Promotion:</p>
                    <p className="text-xs text-gray-600">CTAs automatic. Email footer always links YouTube. YouTube description always links email. No manual work.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900 text-sm">Tracking:</p>
                    <p className="text-xs text-gray-600">UTM parameters automatic. Analytics dashboard pulls data. Weekly review, not daily management.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900 text-sm">Audience Flow:</p>
                    <p className="text-xs text-gray-600">Email signup form automated. YouTube subscribe button automatic. Routing automatic. You don't manage it daily.</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 rounded p-4 border border-green-300">
                <p className="text-sm text-green-900">
                  <span className="font-semibold">Rule:</span> If integration requires more than 2 hours/week of active work, it's not integrated properly. Set up automation so you work on business, not in channels.
                </p>
              </div>
            </div>
          </div>

          {/* Scaling Decision Matrix */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Scaling Decision Matrix</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-2">✓ Both Channels 8/10, Synergy Present (25%+ lift)</p>
                <p className="text-gray-700 text-sm mb-2">Decision: <span className="font-semibold">Scale to 60/40</span></p>
                <p className="text-gray-700 text-sm">
                  Primary 60% focus | Secondary 40% focus. Both grow. Combined revenue increases. Timeline: 4 weeks.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-2">✓ Both Channels 9/10, Strong Synergy (50%+ lift)</p>
                <p className="text-gray-700 text-sm mb-2">Decision: <span className="font-semibold">Scale to 50/50</span></p>
                <p className="text-gray-700 text-sm">
                  Equal focus both channels. Both scale together. Max revenue. Timeline: 8 weeks (from 8/10).
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="font-bold text-yellow-900 mb-2">⚠ Both Channels 8/10, Weak Synergy (&lt;20% lift)</p>
                <p className="text-gray-700 text-sm mb-2">Decision: <span className="font-semibold">Stay at 80/20, Improve Integration</span></p>
                <p className="text-gray-700 text-sm">
                  Connections aren't strong. Improve CTAs. Improve content flow. Get synergy to 25%+ before scaling.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="font-bold text-orange-900 mb-2">❌ One Channel Below 8/10</p>
                <p className="text-gray-700 text-sm mb-2">Decision: <span className="font-semibold">Revert to 90/10. Fix Weak Channel.</span></p>
                <p className="text-gray-700 text-sm">
                  Integration doesn't fix weakness. Go back to primary. Strengthen secondary channel. Retry integration in 4 weeks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Data-Driven Scaling</p>
            <p className="text-gray-700">
              Don't scale based on hope. Scale based on metrics. Both 8/10? Check. Synergy 25%+? Check. System works? Check. Only then scale. And scale by 10% increments, not 30%.
            </p>
          </div>
        </div>
      </section>

      {/* Real Integration Stories */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Real Integration Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            How founders applied the 3-connection framework and what happened.
          </p>

          <div className="space-y-8">
            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Alex: Email + Content Integration</h3>
              <p className="text-sm text-green-800 mb-4">28-year-old solopreneur, email (9/10) + blog (8/10)</p>
              <p className="text-gray-700 mb-4">
                "I had email (9/10, £12k/month) and blog (8/10, £4k/month). Kept separate 6 months. Day I integrated: Added email CTA at end of every blog post. Added blog link in every email. Repurposed: 1 long blog post → 5 email sequences. First week: Blog traffic to email signup jumped 200%. Email subscribers reading blog jumped 150%. After 4 weeks: Email: £14k (up 17%), Blog: £6k (up 50%), Combined: £20k (from £16k). 25% synergy lift. Scaling now to 60/40."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: £4,000/month additional revenue from integration.</p>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Jordan: YouTube + LinkedIn Integration</h3>
              <p className="text-sm text-green-800 mb-4">35-year-old B2B founder, YouTube (8/10) + LinkedIn (8/10)</p>
              <p className="text-gray-700 mb-4">
                "I had YouTube (8/10, £5k/month) and LinkedIn (8/10, £8k/month). Run by different teams (me wearing different hats). Integrated using 3-connection model: Content: Every YouTube video description links to LinkedIn carousel. Every LinkedIn post links to YouTube video. Audience: YouTube intros always say 'Connect on LinkedIn.' LinkedIn always says 'Subscribe YouTube.' Funnel: Both CTAs to same Calendly (with UTM). First month: YouTube → LinkedIn: 40% of video viewers clicked LinkedIn. LinkedIn → YouTube: 25% of LinkedIn viewers subscribed YouTube. Synergy: Combined leads from 13/week to 18/week (38% lift). Both channels stayed 8/10. Now scaling to 60/40."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: £6,000/month additional revenue from cross-channel synergy.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-100 p-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Casey: Integration Before Ready</h3>
              <p className="text-sm text-red-800 mb-4">32-year-old content founder, email (6/10) + podcast (6/10)</p>
              <p className="text-gray-700 mb-4">
                "I had email (6/10, weak) and podcast (6/10, new). Neither at 8/10. Integrated anyway: Added email CTA to every podcast ep. Added podcast link to every email. Tried to make synergy happen. Problem: Base channels weren't strong. Integration amplified weakness. After 4 weeks: Email dropped to 4/10. Podcast dropped to 3/10. Both audiences confused. Combined revenue: £2k (from £4k). Lost £2k/month. Lesson: Integration needs strong channels first. Had to kill integration, go back to 100% email, rebuild podcast separately for 12 weeks."
              </p>
              <p className="text-sm text-red-800 font-semibold">Cost: £24,000 lost revenue from premature integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Integration Tracker */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Download Channel Integration Tracker
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Use this tracker to monitor your integration over 4 weeks. Track synergy, scaling decisions, and channel strength.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-sm text-gray-600 uppercase font-bold mb-8">Channel Integration Tracker - 4 Week Rollout</p>

            <div className="space-y-8 mb-12">
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Primary Channel: _______________</p>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Secondary Channel: _______________</p>
              </div>

              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3 text-left font-bold text-gray-900">Week</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Primary Strength</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Secondary Strength</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Synergy Lift %</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Combined Leads</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 1</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">__%</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">CTAs added</td>
                  </tr>
                  <tr className="hover:bg-green-50 bg-gray-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 2</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">__%</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Content flow started</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 3</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">__%</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Tracking live</td>
                  </tr>
                  <tr className="hover:bg-green-50 bg-gray-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 4</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">___/10</td>
                    <td className="border border-gray-200 p-3 text-center">__%</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Scale decision</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8 space-y-4">
                <p className="font-bold text-gray-900">Week 4 Integration Decision:</p>
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <p className="font-bold text-gray-900 mb-2">Scaling (check one):</p>
                  <p className="text-sm text-gray-700">
                    ☐ Both 8/10+, Synergy 25%+: <span className="font-semibold">Scale to 60/40</span><br/>
                    ☐ Both 9/10+, Synergy 50%+: <span className="font-semibold">Scale to 50/50</span><br/>
                    ☐ Either &lt;8/10 or Synergy &lt;20%: <span className="font-semibold">Stay at 80/20, improve</span><br/>
                    ☐ One channel dropped: <span className="font-semibold">Revert to 90/10, fix weak channel</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 rounded-lg p-6 border border-green-300">
              <p className="text-sm text-green-900">
                <span className="font-bold">💡 How to Use:</span> Print this tracker. Fill it every Friday for 4 weeks. Track primary/secondary strength (1-10). Track synergy lift % (combined leads ÷ individual sum). By week 4, you'll have data to decide: scale (if both 8/10 + synergy 25%+) or improve (if not). Never scale without data.
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
            If you have 2 channels at 8/10, integrate them right now. Apply the 3-connection framework. Add CTAs. Track metrics. Scale when ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/productization">
              <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
                Next: Productization
              </button>
            </Link>
            <Link href="/growth/channel-expansion/second-channel">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back: Second Channel
              </button>
            </Link>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Warning</h3>
            <p className="text-gray-700 mb-4">
              Do not integrate channels unless both are 8/10 or higher. Integration amplifies what's strong. If your channels are weak (7/10 or below), integration will kill them both. Strengthen first, then integrate.
            </p>
            <p className="text-gray-700 font-semibold">
              The math is simple: 8/10 + 8/10 + integration = £18k. But 6/10 + 6/10 + integration = £2k (or worse). Wait until both are strong.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Channel Expansion</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/channel-expansion" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Expansion Hub
                  </Link>
                </li>
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
              </ul>
            </div>
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
              <h4 className="font-bold text-gray-900 mb-4">Related</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketing/scaling" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Scaling
                  </Link>
                </li>
                <li>
                  <Link href="/systems/knowledge-systems" className="text-gray-600 hover:text-purple-600 transition-colors">
                    SOPs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Next Chapter</h4>
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
