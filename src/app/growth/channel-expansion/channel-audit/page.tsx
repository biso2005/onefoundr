'use client';

import Link from 'next/link';

export default function ChannelAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Channel Audit: Is Your Channel Strong Enough?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Score your channel 1–10. If it's not 8+, don't add a second. Strengthen your primary first.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I added a second channel when my first was 6/10. Thought I could handle both. Both died. Lost £3k/month in revenue. Waited 6 months rebuilding. Got first to 9/10. Then added second. Both thrived. Strength first. Always."
            </p>
            <p className="text-sm text-gray-600">— Solo founder, 6 months to recovery</p>
          </div>
        </div>
      </section>

      {/* The Audit Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why You Think You're Ready (You're Not)
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Most solopreneurs think they can add a second channel before the first is truly strong. They think wrong. Here's why.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Good Enough" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think 6/10 is enough to add second. Reality: You need 8/10 minimum. Without buffer, when you split time, first drops to 5, second stays at 1. Both die.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Both channels fail.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Boredom" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You're bored of your channel. Want something new. Think: "I'll add content marketing, it'll be fresh." Reality: Boredom is mastery, not weakness. Add second channel because you're strong, not because you're tired.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: You start over on new channel.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "FOMO" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You see others launching podcasts, YouTube channels, newsletters. Want in. Think: "If I don't start now, I'll miss out." Reality: Their first channel is 9/10. Yours is 6/10. You're not in the same position.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Premature expansion to weak channel.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Impatience" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You want to grow faster. Think: "If I add second channel, I'll double revenue." Reality: Adding weak splits focus. Both channels get half effort. Result: 50% growth on first, 10% on second. Net: 30% growth. You'd get more by strengthening first only.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Slow growth on both channels.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: If You Can't Articulate 8/10, Don't Add</p>
            <p className="text-gray-700">
              Before adding a second channel, you should be able to say: "My channel is strong because [specific reason]. I have system. I have buffer. I can add without sacrificing." If you can't say that, you're not ready.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mt-8">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: The Early Expansion</h3>
            <p className="text-gray-700 mb-2">
              "My email outreach was doing £2k/month. Average open rate 30%. I thought I was ready. Added LinkedIn outreach at same time. Spent half time on each. Email quality dropped. Open rate fell to 12%. LinkedIn only brought £500/month. Combined revenue: £2.5k total (vs £2k before). But I was working 1.5x harder. Regretted it immediately."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost: More work, minimal gain. Lost system on primary channel.</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6 mt-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The Strong First Approach</h3>
            <p className="text-gray-700 mb-2">
              "Tom's email channel was 8/10. Volume: 8 leads/week. Quality: 70% close. Consistency: 12 weeks. Profitability: £95/hour. Total score: 18. He audited honestly. Added LinkedIn on 20% time. After 90 days, LinkedIn hit 10% of email volume (0.8 leads/week). Graduated to 50/50 split. Both channels stayed strong. Now he has two channels at 8/10 each. That's scale."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: Two strong channels. System replicated.</p>
          </div>
        </div>
      </section>

      {/* The 4-Factor Audit Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 4-Factor Audit Framework
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Your channel strength is determined by four factors: Volume, Quality, Consistency, and Profitability. Rate each 1–5. Total 16+ means you're strong. Total &lt;16 means you need to strengthen first.
          </p>

          <div className="space-y-8">
            {/* Factor 1: Volume */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-blue-600 min-w-fit">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Volume</h3>
                  <p className="text-gray-700">How many qualified leads does your channel bring per week?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-blue-600">5</span>
                    <span className="text-gray-900 font-semibold">10+ leads per week</span>
                  </div>
                  <p className="text-sm text-gray-600">Channel is bringing consistent high-volume leads. You have system. You can handle more.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-purple-600">4</span>
                    <span className="text-gray-900 font-semibold">5–10 leads per week</span>
                  </div>
                  <p className="text-sm text-gray-600">Good volume. Enough to support second channel on 20% time.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">3–5 leads per week</span>
                  </div>
                  <p className="text-sm text-gray-600">Okay volume. Not enough buffer for split attention yet.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">1–3 leads per week</span>
                  </div>
                  <p className="text-sm text-gray-600">Low volume. Needs attention. Adding second will damage this.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Less than 1 lead per week</span>
                  </div>
                  <p className="text-sm text-gray-600">Channel not working yet. Requires 100% focus.</p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Your Score:</span> Rate your channel's weekly lead volume: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 2: Quality */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-purple-600 min-w-fit">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Quality</h3>
                  <p className="text-gray-700">What percentage of leads from this channel convert to clients?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">80%+ close rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Exceptional. Almost every lead buys. Channel is perfectly positioned.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">60–80% close rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Strong. You know your audience. Channel is profitable.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">40–60% close rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Okay. Leads are decent. Room for improvement in positioning.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">20–40% close rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Weak. Getting many unqualified leads. Need positioning help.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Less than 20% close rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Very weak. Most leads are wrong fit. Need major positioning rework.</p>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
                <p className="text-sm text-purple-900">
                  <span className="font-semibold">Your Score:</span> Rate your channel's lead quality: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 3: Consistency */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-pink-600 min-w-fit">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Consistency</h3>
                  <p className="text-gray-700">How many weeks in a row has this channel delivered results?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">10+ weeks consistent</span>
                  </div>
                  <p className="text-sm text-gray-600">Proven system. Channel is predictable. You know exactly what to expect each week.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">8–10 weeks consistent</span>
                  </div>
                  <p className="text-sm text-gray-600">Very consistent. System is solid. Can rely on this channel.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">5–7 weeks consistent</span>
                  </div>
                  <p className="text-sm text-gray-600">Decent. Getting more predictable. Still has some volatility.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">3–4 weeks consistent</span>
                  </div>
                  <p className="text-sm text-gray-600">Inconsistent. Some weeks strong, some weak. System not yet proven.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Less than 3 weeks consistent</span>
                  </div>
                  <p className="text-sm text-gray-600">Unpredictable. Weeks of nothing, then lots. System not established.</p>
                </div>
              </div>

              <div className="bg-pink-100 rounded-lg p-4 border border-pink-300">
                <p className="text-sm text-pink-900">
                  <span className="font-semibold">Your Score:</span> Rate your channel's consistency: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 4: Profitability */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-indigo-600 min-w-fit">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Profitability</h3>
                  <p className="text-gray-700">What's your effective hourly rate from this channel? (Revenue / Time Invested)</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">£100+/hour effective rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Exceptional ROI. Every hour spent on this channel generates at least £100.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">£75–100/hour effective rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Strong ROI. Channel is very profitable. Worth your time.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">£50–75/hour effective rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Okay ROI. Profitable but not exceptional. Room for optimization.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">£30–50/hour effective rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Low ROI. Time-intensive. Needs improvement or replacement.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Less than £30/hour effective rate</span>
                  </div>
                  <p className="text-sm text-gray-600">Very low ROI. Channel is barely worth your time. Needs major rework.</p>
                </div>
              </div>

              <div className="bg-indigo-100 rounded-lg p-4 border border-indigo-300">
                <p className="text-sm text-indigo-900">
                  <span className="font-semibold">Your Score:</span> Rate your channel's profitability: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Honest Scoring Required</p>
            <p className="text-gray-700">
              Don't inflate your scores. Be brutally honest. If you score yourself 5/5 on everything, you're lying to yourself. Most channels score 3–4 on each factor. That's normal. That's why audit matters.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Scorecard */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Your Channel Audit Scorecard
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Fill in your scores for each factor. Total score tells you if you're ready to add a second channel.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Channel Name: _____________________</h3>

            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Factor</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Your Score</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">1. Volume</p>
                    <p className="text-sm text-gray-600">(leads per week)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-blue-600">____/5</p>
                  </td>
                  <td className="text-center py-4 px-4 text-sm text-gray-600">
                    <p className="font-mono">__/5</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-purple-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">2. Quality</p>
                    <p className="text-sm text-gray-600">(close rate %)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-purple-600">____/5</p>
                  </td>
                  <td className="text-center py-4 px-4 text-sm text-gray-600">
                    <p className="font-mono">__/5</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-pink-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">3. Consistency</p>
                    <p className="text-sm text-gray-600">(weeks in a row)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-pink-600">____/5</p>
                  </td>
                  <td className="text-center py-4 px-4 text-sm text-gray-600">
                    <p className="font-mono">__/5</p>
                  </td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">4. Profitability</p>
                    <p className="text-sm text-gray-600">(£/hour effective)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-indigo-600">____/5</p>
                  </td>
                  <td className="text-center py-4 px-4 text-sm text-gray-600">
                    <p className="font-mono">__/5</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 mb-8">
              <p className="text-center uppercase text-sm font-bold text-blue-900 mb-4">Total Score</p>
              <p className="text-center text-5xl font-bold text-blue-600 mb-4">____/20</p>
              <p className="text-center text-gray-700">Add up all four factor scores above</p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-2">✓ 16–20 Points: Strong Channel (8–10/10)</p>
                <p className="text-gray-700 text-sm">
                  Your channel is strong enough to support a second. You have system. You have buffer. You're ready to test. Start second channel on 20% time.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="font-bold text-yellow-900 mb-2">⚠ 12–15 Points: Moderate Channel (6–7/10)</p>
                <p className="text-gray-700 text-sm">
                  Your channel is decent but not yet strong. You have capacity to add second, but risk is high. Spend 30 days strengthening first. Focus on your lowest-scoring factor. Try again in 30 days.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="font-bold text-orange-900 mb-2">⚠ 8–11 Points: Weak Channel (4–5/10)</p>
                <p className="text-gray-700 text-sm">
                  Your channel is not yet strong. Adding second will damage it. Focus 100% on strengthening primary. Aim to add +2 points in 60 days to reach "moderate" status.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-2">❌ Below 8 Points: Very Weak Channel (&lt;4/10)</p>
                <p className="text-gray-700 text-sm">
                  Your channel needs work. Don't add second yet. Requires 100% focus. Rethink your strategy. Consider if this channel is right for you. Evaluate in 90 days.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Score of 16+ Before Second Channel</p>
            <p className="text-gray-700">
              If total score is less than 16, do not add a second channel. Period. The math is simple: weak channel + split focus = weaker channel + failed second channel. Strengthen first.
            </p>
          </div>
        </div>
      </section>

      {/* Strengthening Playbook */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Strengthening Playbook
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            If your total score is below 16, here's how to strengthen each weak factor. Focus on the factor with the lowest score.
          </p>

          <div className="space-y-8">
            {/* Volume Fix */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">If Volume Is Low (&lt;5 leads/week)</h3>
              <p className="text-gray-700 mb-6">
                Not enough leads coming through. Your system isn't reaching enough people. Fix:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="font-bold text-gray-900 mb-2">Action 1: Increase Activity 2x</p>
                  <p className="text-gray-700 text-sm">
                    If you send 5 cold emails/day, send 10. If you post 2 times/week, post 5. Do this for 2 weeks. Track volume increase.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="font-bold text-gray-900 mb-2">Action 2: Expand Target Audience</p>
                  <p className="text-gray-700 text-sm">
                    If you target CEOs only, add founders. If you target US only, add UK. Expand TAM (Total Addressable Market) by 50%.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="font-bold text-gray-900 mb-2">Action 3: Test New Angles</p>
                  <p className="text-gray-700 text-sm">
                    Current pitch not resonating? Test new hook. New problem angle. New value prop. Keep what works. Kill what doesn't.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-900">
                  <span className="font-bold">Expected improvement:</span> +2 points in 2 weeks. Requires 50% more time investment.
                </p>
              </div>
            </div>

            {/* Quality Fix */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">If Quality Is Low (&lt;60% close rate)</h3>
              <p className="text-gray-700 mb-6">
                Getting lots of leads but few convert. Leads are wrong fit or your messaging is off. Fix:
              </p>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="font-bold text-gray-900 mb-2">Action 1: Tighten Your Positioning</p>
                  <p className="text-gray-700 text-sm">
                    You're speaking to everyone. Speak to someone. Get narrower. "For X, who have Y problem, my solution is Z." Remove the looky-loos.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="font-bold text-gray-900 mb-2">Action 2: Raise Your Price</p>
                  <p className="text-gray-700 text-sm">
                    Higher price filters out bargain hunters. You get fewer leads but better quality. Trade volume for quality. Close rate should increase.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="font-bold text-gray-900 mb-2">Action 3: Tighten Your Qualification</p>
                  <p className="text-gray-700 text-sm">
                    In discovery calls, ask harder questions. Turn away bad fits. You're buying time by disqualifying early. Better close rate with fewer calls.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-900">
                  <span className="font-bold">Expected improvement:</span> +2 points in 3 weeks. Might reduce volume slightly but quality increases 30%+.
                </p>
              </div>
            </div>

            {/* Consistency Fix */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">If Consistency Is Low (&lt;8 weeks)</h3>
              <p className="text-gray-700 mb-6">
                Channel works some weeks, not others. No system yet. Results are unpredictable. Fix:
              </p>
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="font-bold text-gray-900 mb-2">Action 1: Create a System/SOP</p>
                  <p className="text-gray-700 text-sm">
                    Document exactly what you do each day/week to generate leads. Write it down. Follow it every single day. No exceptions.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="font-bold text-gray-900 mb-2">Action 2: Schedule Activity in Calendar</p>
                  <p className="text-gray-700 text-sm">
                    Put channel activity on your calendar. Monday 9-10am = cold emails. Tuesday 2-3pm = content posting. Block it. Protect it.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="font-bold text-gray-900 mb-2">Action 3: Measure Weekly</p>
                  <p className="text-gray-700 text-sm">
                    Every Monday, measure leads generated last week. Track in spreadsheet. After 8 weeks of consistent tracking, you'll see pattern emerge.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-900">
                  <span className="font-bold">Expected improvement:</span> +2 points in 8 weeks. Requires discipline and measurement.
                </p>
              </div>
            </div>

            {/* Profitability Fix */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">If Profitability Is Low (&lt;£75/hour)</h3>
              <p className="text-gray-700 mb-6">
                Chan brings revenue but ROI is poor. You're spending too much time for results. Fix:
              </p>
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="font-bold text-gray-900 mb-2">Action 1: Raise Your Prices</p>
                  <p className="text-gray-700 text-sm">
                    Same activity, higher price = better effective hourly rate. Don't change volume or quality. Just increase price 20–30%.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="font-bold text-gray-900 mb-2">Action 2: Reduce Your Scope</p>
                  <p className="text-gray-700 text-sm">
                    Selling £2k project that takes 40 hours? Reduce to £2.5k for 20 hours of work. Better hourly rate. Client gets faster results.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="font-bold text-gray-900 mb-2">Action 3: Increase Your Speed</p>
                  <p className="text-gray-700 text-sm">
                    Same price, less time. Get better at your craft. Streamline process. What takes 10 hours now should take 6 in 90 days.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-900">
                  <span className="font-bold">Expected improvement:</span> +2 points in 4 weeks. Easiest factor to improve with price increase.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Fix One Factor at a Time</p>
            <p className="text-gray-700">
              Don't try to fix everything at once. Pick your lowest-scoring factor. Improve it +2 points. Then move to next. Linear improvement beats chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Email Template */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Audit Email Template
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Send yourself this audit weekly on Mondays. Track your channel health. Don't add second until all factors hit 4+.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="bg-gray-900 rounded-lg p-8 text-gray-100 font-mono text-sm overflow-x-auto mb-8">
              <p className="text-yellow-400 font-bold mb-6">📊 Weekly Channel Audit — Week of [DATE]</p>

              <p className="mb-6">Hi [Your Name],</p>

              <p className="mb-6">Weekly audit of your channel:</p>

              <p className="mb-2 font-bold">Channel: _____________________</p>
              <p className="mb-6 text-gray-400 ">Last 7 days</p>

              <p className="mb-4 border-b border-gray-700 pb-4">
                <span className="text-blue-300">Volume:</span> ___ leads this week (Rate 1-5: __)<br/>
                <span className="text-purple-300">Quality:</span> ___% close rate (Rate 1-5: __)<br/>
                <span className="text-pink-300">Consistency:</span> ___  weeks in row (Rate 1-5: __)<br/>
                <span className="text-indigo-300">Profitability:</span> £__/hour effective (Rate 1-5: __)
              </p>

              <p className="mb-6">
                <span className="text-green-300 font-bold">Total Score: ___/20</span>
              </p>

              <p className="mb-4">Status:</p>
              <p className="mb-6 text-gray-400">
                ☐ 16+: Strong. Ready to add second channel.<br/>
                ☐ 12-15: Moderate. Strengthen for 30 days.<br/>
                ☐ 8-11: Weak. Focus 100% on primary.<br/>
                ☐ &lt;8: Very weak. Channel needs major rework.
              </p>

              <p className="mb-6 border-b border-gray-700 pb-6">
                Action this week: [One improvement to implement]
              </p>

              <p className="mb-6">Review in 7 days.</p>
              <p>[Your Signature]</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm text-blue-900">
                <span className="font-bold">💡 Pro Tip:</span> Set a recurring calendar reminder for Monday 9am. Send yourself this email every week. After 8 weeks of tracking, you'll have clear visibility into your channel's trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples: Good vs Bad */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Good vs Bad Channel Audits
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Here's what strong and weak audits look like.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Good Example */}
            <div className="bg-white rounded-xl border border-green-200 p-8 overflow-hidden">
              <div className="bg-green-50 rounded-lg mb-6 p-4 border-b-4 border-green-400">
                <h3 className="text-xl font-bold text-green-900">✓ Strong Channel Audit</h3>
                <p className="text-sm text-green-800 mt-1">Email Outreach</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <p className="text-gray-700">Volume</p>
                  <p className="text-2xl font-bold text-green-600">5/5</p>
                </div>
                <div className="text-sm text-gray-600">8 leads/week (10+ target)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Quality</p>
                  <p className="text-2xl font-bold text-green-600">4/5</p>
                </div>
                <div className="text-sm text-gray-600">70% close rate (60%+ target)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Consistency</p>
                  <p className="text-2xl font-bold text-green-600">5/5</p>
                </div>
                <div className="text-sm text-gray-600">12 weeks in a row (10+ weeks)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Profitability</p>
                  <p className="text-2xl font-bold text-green-600">5/5</p>
                </div>
                <div className="text-sm text-gray-600">£105/hour effective (£100+/hour)</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400 mb-6">
                <p className="text-3xl font-bold text-green-600">19/20</p>
                <p className="text-sm text-green-900 mt-2">→ Strong (9/10) ✓ Ready for second channel</p>
              </div>

              <div className="text-sm text-gray-700 bg-green-50 p-3 rounded">
                <p className="font-semibold mb-2">Recommendation:</p>
                <p>Add second channel on 20% time. This channel has buffer. Can support split attention.</p>
              </div>
            </div>

            {/* Bad Example */}
            <div className="bg-white rounded-xl border border-red-200 p-8 overflow-hidden">
              <div className="bg-red-50 rounded-lg mb-6 p-4 border-b-4 border-red-400">
                <h3 className="text-xl font-bold text-red-900">❌ Weak Channel Audit</h3>
                <p className="text-sm text-red-800 mt-1">LinkedIn Outreach</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <p className="text-gray-700">Volume</p>
                  <p className="text-2xl font-bold text-red-600">3/5</p>
                </div>
                <div className="text-sm text-gray-600">3 leads/week (5-10 target)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Quality</p>
                  <p className="text-2xl font-bold text-red-600">3/5</p>
                </div>
                <div className="text-sm text-gray-600">40% close rate (60%+ target)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Consistency</p>
                  <p className="text-2xl font-bold text-red-600">2/5</p>
                </div>
                <div className="text-sm text-gray-600">4 weeks in a row (8-10 weeks target)</div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200 mt-6">
                  <p className="text-gray-700">Profitability</p>
                  <p className="text-2xl font-bold text-red-600">3/5</p>
                </div>
                <div className="text-sm text-gray-600">£60/hour effective (£75+/hour target)</div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400 mb-6">
                <p className="text-3xl font-bold text-red-600">11/20</p>
                <p className="text-sm text-red-900 mt-2">→ Weak (5/10) ❌ Do not add second channel</p>
              </div>

              <div className="text-sm text-gray-700 bg-red-50 p-3 rounded">
                <p className="font-semibold mb-2">Recommendation:</p>
                <p>Focus 100% on LinkedIn. Increase activity to boost volume. Tighten messaging to improve quality. No second channel until score reaches 16+.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: The 16+ Threshold</p>
            <p className="text-gray-700">
              16/20 isn't arbitrary. It's the minimum score where you have enough buffer to split attention without destroying the channel. Below 16, channel needs 100% focus.
            </p>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Real Channel Audit Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            What happens when solopreneurs follow vs ignore the audit framework.
          </p>

          <div className="space-y-8">
            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Sarah: The Audit Win</h3>
              <p className="text-sm text-green-800 mb-4">Cold email solopreneur</p>
              <p className="text-gray-700 mb-4">
                "I scored my email channel: Volume 4, Quality 4, Consistency 5, Profitability 4 = 17/20. I was ready. Added content marketing on 20% time. After 90 days, content brought 1 lead/week (10% of email). Graduated to 50/50 split. 6 months later: Email 8 leads/week, Content 6 leads/week. Both strong. Doubled my lead flow by waiting to audit first."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: Systematic growth. Both channels hit 8/10.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-100 p-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Tom: The Audit Ignore</h3>
              <p className="text-sm text-red-800 mb-4">Email founder who skipped audit</p>
              <p className="text-gray-700 mb-4">
                "My email was generating £3k/month. I felt good. Wanted to add YouTube. Didn't audit first. Scored it later: Volume 3, Quality 3, Consistency 2, Profitability 3 = 11/20. Should have known I wasn't ready. Spent 6 months on both channels. Email dropped to £2k/month. YouTube brought £500/month. Lost momentum. It took 4 months to recover. Should have audited first."
              </p>
              <p className="text-sm text-red-800 font-semibold">Outcome: Split focus destroyed both channels. 4 months recovery.</p>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Alex: The Strengthening Win</h3>
              <p className="text-sm text-green-800 mb-4">Content marketing solopreneur</p>
              <p className="text-gray-700 mb-4">
                "I scored my blog: Volume 2, Quality 3, Consistency 3, Profitability 2 = 10/20. Not strong. But instead of adding second, I focused on volume. Increased content from 2x/week to 5x/week. After 8 weeks, volume improved to 4 (now 5 leads/week). Total score jumped to 13/20. Kept improving. After 16 weeks, score was 17/20. Now I was ready. Added social media. Both channels growing."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: Patience first, growth second. Doubled down on first before adding second.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Scorecard */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Download Channel Audit Scorecard
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Print this. Fill it out. Use it every week to track your channel's progress.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-sm text-gray-600 uppercase font-bold mb-8">Weekly Channel Audit Scorecard</p>

            <div className="space-y-6 mb-12">
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Channel Name: _____________________</p>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Week of: _____________________</p>
              </div>

              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3 text-left font-bold text-gray-900">Factor</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Your Score</th>
                    <th className="border border-gray-200 p-3 text-left font-bold text-gray-900">Rating Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">1. Volume</td>
                    <td className="border border-gray-200 p-3 text-center">___/5</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Leads/week</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">2. Quality</td>
                    <td className="border border-gray-200 p-3 text-center">___/5</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Close rate %</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">3. Consistency</td>
                    <td className="border border-gray-200 p-3 text-center">___/5</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Weeks in a row</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">4. Profitability</td>
                    <td className="border border-gray-200 p-3 text-center">___/5</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">£/hour effective</td>
                  </tr>
                  <tr className="border-t-2 border-t-gray-900">
                    <td className="border border-gray-200 p-4 font-bold text-lg text-gray-900">TOTAL</td>
                    <td className="border border-gray-200 p-4 text-center text-2xl font-bold text-blue-600">___/20</td>
                    <td className="border border-gray-200 p-4"></td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                <p className="font-bold text-yellow-900 mb-3">Next Action:</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>☐ 16+: Ready to add second channel</p>
                  <p>☐ 12–15: Strengthen primary for 30 days</p>
                  <p>☐ 8–11: Focus 100% on primary</p>
                  <p>☐ &lt;8: Major rework needed</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">One Thing to Improve This Week:</p>
                <p className="text-gray-700">_____________________________________________</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-sm text-green-900">
                <span className="font-bold">💡 Tip:</span> Print multiple copies. Use one per week. After 8 weeks, review all audits together. You'll see your channel's trajectory clearly. This is how you know when you're truly ready for second channel.
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
            Audit your channel today. Score yourself 1–5 on each factor. If total is 16+, you're ready. If below 16, spend one week strengthening your lowest factor. Audit again next week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/channel-expansion/second-channel">
              <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
                Next: Second Channel
              </button>
            </Link>
            <Link href="/growth/channel-expansion">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back to Hub
              </button>
            </Link>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Warning</h3>
            <p className="text-gray-700">
              If you add a second channel before your first is 8/10 (score 16+), you will damage both channels. You've been warned. The math is clear. The pattern is proven. Don't skip the audit.
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
              <h4 className="font-bold text-gray-900 mb-4">Previous Chapter</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/revenue-growth/value-ladder" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Value Ladder
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
