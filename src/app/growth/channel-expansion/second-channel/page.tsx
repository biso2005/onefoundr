'use client';

import Link from 'next/link';

export default function SecondChannelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Second Channel: How to Test Without Splitting Focus
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Pick one channel. Test on 20% time. Validate with metrics. Only integrate if it passes the test.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I tested YouTube for 3 months on 20% time. Kept 80% on outreach. YouTube hit 8/10 strength. Then integrated. Now I have 2 channels at 8/10 each. That's scale. Not split. Focus first, test second."
            </p>
            <p className="text-sm text-gray-600">— Solo founder, 18 months to dual channels</p>
          </div>
        </div>
      </section>

      {/* The Second Channel Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why You Want to Add Too Early
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Your primary channel is working. You're thinking about adding something new. Before you do, understand the traps.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Shiny Object" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You see others launching on new platforms. Think: "I should be on TikTok too." Reality: Their first channel is 9/10. Yours is 6/10. You're not in the same position.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Divided attention on weak channel.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Boredom" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You're tired of email outreach. Think: "I want something more exciting." Reality: Boredom is mastery, not weakness. You want to add because you're becoming expert, not because it's weak.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Abandoning strength for novelty.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "FOMO" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You fear missing out. Think: "If I don't start LinkedIn content now, the algorithm will pass me by." Reality: You're not missing out. You're avoiding overcommitment.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Weak channel becomes burden.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Impatience" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You want to grow faster. Think: "If I add secondary channel, I'll accelerate." Reality: Adding weak splits effort. Both grow slower, or primary dies.
              </p>
              <p className="text-xs text-red-800 font-mono">Cost: Slower growth on both channels.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Be Honest About Primary Strength</p>
            <p className="text-gray-700">
              Before testing a secondary channel, you should be able to say: "My primary is 8/10 because [specific reason]. I have system. I have buffer. Testing won't hurt it." If you can't say that, don't test yet.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: The 50/50 Disaster</h3>
            <p className="text-gray-700 mb-2">
              "My email outreach was doing £6k/month. I thought I'd test YouTube. Allocated 50% time to each. After 2 months: Email dropped to £4k/month (lost quality). YouTube brought £1k/month (weak). Combined: £5k (down from £6k). Lost £1k monthly. Should've tested on 20%, not 50%."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost: £2,000 lost revenue over 2 months.</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The 20% Win</h3>
            <p className="text-gray-700 mb-2">
              "Tom's email outreach was 9/10, generating £8k/month. He tested LinkedIn on 20% time for 3 months. Email stayed strong. LinkedIn gradually grew to £2k/month. Total: £10k/month. Then he integrated—connected email case studies to LinkedIn posts. Combined grew to £15k/month. Proper ratio, proper timing."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £5k additional monthly revenue through patience.</p>
          </div>
        </div>
      </section>

      {/* The Selection Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 4-Factor Channel Selection Framework
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Not all secondary channels are equal. Use these four factors to evaluate which channel is worth testing.
          </p>

          <div className="space-y-8">
            {/* Factor 1: Audience Overlap */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-blue-600 min-w-fit">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Audience Overlap</h3>
                  <p className="text-gray-700">Can you reach the same type of person on this channel?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-blue-600">5</span>
                    <span className="text-gray-900 font-semibold">Same audience, different platform</span>
                  </div>
                  <p className="text-sm text-gray-600">Perfect. Your email list will watch your YouTube. Your Twitter followers will read your blog.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-blue-600">4</span>
                    <span className="text-gray-900 font-semibold">Same audience, different format</span>
                  </div>
                  <p className="text-sm text-gray-600">Very good. Your email subscribers will appreciate video. Your content readers will appreciate podcasts.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">Adjacent audience, same problem</span>
                  </div>
                  <p className="text-sm text-gray-600">Okay. Your B2B email list might overlap with 50% of your YouTube audience. Some new people too.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">Different audience, same problem</span>
                  </div>
                  <p className="text-sm text-gray-600">Risky. Your email list won't care about TikTok version of your content. Different audience, might not convert.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Different audience, different problem</span>
                  </div>
                  <p className="text-sm text-gray-600">Don't bother. No overlap. Starting from scratch. Too risky for secondary channel.</p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Your Score:</span> Rate audience overlap: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 2: Skill Transfer */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-purple-600 min-w-fit">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Skill Transfer</h3>
                  <p className="text-gray-700">Can you carry your existing skills to this channel?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">Same skills, different medium</span>
                  </div>
                  <p className="text-sm text-gray-600">Perfect. You write emails. Writing YouTube scripts is similar. Skills transfer directly.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">Similar skills, different medium</span>
                  </div>
                  <p className="text-sm text-gray-600">Good. You're good at storytelling in email. Storytelling in video is similar (new medium, same core skill).</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">New skills, but related</span>
                  </div>
                  <p className="text-sm text-gray-600">Neutral. You're learning video editing (new). But your expertise in messaging carries over (related).</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">New skills, unrelated</span>
                  </div>
                  <p className="text-sm text-gray-600">Risky. You're good at email. TikTok requires completely different skills (rhythm, editing, trends).</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Completely new skills</span>
                  </div>
                  <p className="text-sm text-gray-600">Don't test. You'd be learning from scratch. Takes too long for 20% time allocation.</p>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
                <p className="text-sm text-purple-900">
                  <span className="font-semibold">Your Score:</span> Rate skill transfer: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 3: Time Requirement */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-pink-600 min-w-fit">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Time Requirement</h3>
                  <p className="text-gray-700">How much time does testing this channel actually take?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">20% of current time (~8 hours/week)</span>
                  </div>
                  <p className="text-sm text-gray-600">Perfect. Fits in your existing buffer. Primary gets 80% (32 hours). Secondary gets 20% (8 hours).</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">30% of current time (~12 hours/week)</span>
                  </div>
                  <p className="text-sm text-gray-600">Good. Primary gets 70% (28 hours). Secondary gets 30% (12 hours). Still manageable.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">40% of current time (~16 hours/week)</span>
                  </div>
                  <p className="text-sm text-gray-600">Risky. Primary gets only 60% (24 hours). Secondary gets 40% (16 hours). Starting to split focus.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">50% of current time or more</span>
                  </div>
                  <p className="text-sm text-gray-600">Don't test. You're essentially splitting focus 50/50. Both channels will suffer.</p>
                </div>
              </div>

              <div className="bg-pink-100 rounded-lg p-4 border border-pink-300">
                <p className="text-sm text-pink-900">
                  <span className="font-semibold">Your Score:</span> Rate time requirement: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>

            {/* Factor 4: Profitability Potential */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-indigo-600 min-w-fit">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Factor: Profitability Potential</h3>
                  <p className="text-gray-700">How much could this channel contribute to revenue?</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">5</span>
                    <span className="text-gray-900 font-semibold">Could double revenue</span>
                  </div>
                  <p className="text-sm text-gray-600">Exceptional potential. YouTube could bring £10k/month if primary is £10k/month.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-green-600">4</span>
                    <span className="text-gray-900 font-semibold">Could increase revenue 50%</span>
                  </div>
                  <p className="text-sm text-gray-600">Strong potential. LinkedIn could bring £5k/month if primary is £10k/month.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">3</span>
                    <span className="text-gray-900 font-semibold">Could increase revenue 25%</span>
                  </div>
                  <p className="text-sm text-gray-600">Moderate potential. Podcast could bring £2.5k/month if primary is £10k/month.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-600">2</span>
                    <span className="text-gray-900 font-semibold">Could increase revenue 10%</span>
                  </div>
                  <p className="text-sm text-gray-600">Low potential. Newsletter could bring £1k/month if primary is £10k/month. Barely worth testing.</p>
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-red-700">1</span>
                    <span className="text-gray-900 font-semibold">Unclear or {"<"}10%</span>
                  </div>
                  <p className="text-sm text-gray-600">Don't test. Revenue potential unclear. Not worth the effort.</p>
                </div>
              </div>

              <div className="bg-indigo-100 rounded-lg p-4 border border-indigo-300">
                <p className="text-sm text-indigo-900">
                  <span className="font-semibold">Your Score:</span> Rate profitability potential: <span className="font-mono font-bold">___/5</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Total Score Determines Go/No-Go</p>
            <p className="text-gray-700">
              Add up all four scores. If total is 16+ you have a strong candidate. If 12-15, it's risky but testable. If below 12, don't test. Strengthen primary first.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Scorecard */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Channel Selection Scorecard
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Use this scorecard to evaluate your secondary channel candidate before testing.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
            <p className="text-2xl font-bold text-gray-900 mb-8">Channel Candidate: _____________________</p>

            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Factor</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">Audience Overlap</p>
                    <p className="text-sm text-gray-600">(Same audience, different platform)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-blue-600">___/5</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-purple-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">Skill Transfer</p>
                    <p className="text-sm text-gray-600">(Existing skills applicable)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-purple-600">___/5</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-pink-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">Time Requirement</p>
                    <p className="text-sm text-gray-600">(20% time allocation)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-pink-600">___/5</p>
                  </td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-900">Profitability Potential</p>
                    <p className="text-sm text-gray-600">(50%+ revenue increase)</p>
                  </td>
                  <td className="text-center py-4 px-4">
                    <p className="text-2xl font-bold text-indigo-600">___/5</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 mb-8">
              <p className="text-center uppercase text-sm font-bold text-blue-900 mb-4">Total Selection Score</p>
              <p className="text-center text-5xl font-bold text-blue-600 mb-4">____/20</p>
              <p className="text-center text-gray-700">Sum of all four factor scores</p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-2">✓ 16–20 Points: Perfect Fit</p>
                <p className="text-gray-700 text-sm">
                  Strong alignment. Test immediately on 20% time. High probability of success.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="font-bold text-yellow-900 mb-2">⚠ 12–15 Points: Good Fit</p>
                <p className="text-gray-700 text-sm">
                  Decent alignment. Can test, but be cautious. Watch primary channel closely. Ready to stop if primary drops below 7/10.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="font-bold text-orange-900 mb-2">⚠ 8–11 Points: Risky Fit</p>
                <p className="text-gray-700 text-sm">
                  Weak alignment. Don't test. Strengthen primary first. Revisit in 30 days.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-2">❌ Below 8 Points: Poor Fit</p>
                <p className="text-gray-700 text-sm">
                  Misalignment. Skip this channel. Find a better candidate that scores 12+.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Test Only if 12+</p>
            <p className="text-gray-700">
              If total score is below 12, don't test. Too risky. You'll split focus on a weak channel and damage your primary. Find a channel that scores 16+ (perfect) or at least 12+ (acceptable).
            </p>
          </div>
        </div>
      </section>

      {/* Testing Playbook */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 20% Test Playbook
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Your channel scored 12+. Now test it properly on 20% time. Follow this 4-week framework.
          </p>

          <div className="space-y-8">
            {/* Time Allocation */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Time Allocation</h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-1 bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-4xl font-bold text-blue-600 mb-2">80%</p>
                    <p className="font-semibold text-gray-900 mb-2">Primary Channel</p>
                    <p className="text-sm text-gray-700">32 hours per week. Your main focus. Don't reduce this.</p>
                    <p className="text-xs text-gray-600 mt-3">Keep revenue, keep system, keep quality.</p>
                  </div>
                  <div className="flex-1 bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <p className="text-4xl font-bold text-purple-600 mb-2">20%</p>
                    <p className="font-semibold text-gray-900 mb-2">Secondary Channel</p>
                    <p className="text-sm text-gray-700">8 hours per week. Experimental. Testing only.</p>
                    <p className="text-xs text-gray-600 mt-3">No pressure to perform. Free to iterate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Week Test */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Run for 4 Weeks</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <p className="font-bold text-gray-900 mb-2">Week 1: Setup & First Content</p>
                  <p className="text-gray-700 text-sm">
                    Create account. Write SOPs. Record/write first content. Goal: Establish presence. No need to perform yet.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <p className="font-bold text-gray-900 mb-2">Week 2: Publish & Promote</p>
                  <p className="text-gray-700 text-sm">
                    Publish content. Share. Get eyes on it. Goal: Build initial audience. Measure engagement.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <p className="font-bold text-gray-900 mb-2">Week 3: Measure & Iterate</p>
                  <p className="text-gray-700 text-sm">
                    Look at data. What worked? What didn't? Iterate. Goal: Improve based on feedback.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <p className="font-bold text-gray-900 mb-2">Week 4: Evaluate Go/No-Go</p>
                  <p className="text-gray-700 text-sm">
                    Full evaluation. Score channel 1-5 on Volume, Quality, Consistency, Profitability. Make decision: Go or No-Go?
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Measure These Metrics</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="font-bold text-gray-900 mb-2">Leads Generation</p>
                  <p className="text-sm text-gray-700">Count qualified leads from secondary. Goal: 10% of primary leads by week 4.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="font-bold text-gray-900 mb-2">Lead Quality</p>
                  <p className="text-sm text-gray-700">Close rate. What % convert? Goal: 40%+ close rate. More than 20% is acceptable for new channel.</p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                  <p className="font-bold text-gray-900 mb-2">Consistency</p>
                  <p className="text-sm text-gray-700">Did you post/publish every week? No gaps. Goal: 4 weeks of content, no breaks.</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                  <p className="font-bold text-gray-900 mb-2">Primary Health</p>
                  <p className="text-sm text-gray-700">Did primary channel stay strong? Track revenue, leads, close rate. Goal: Stays 7/10 or higher.</p>
                </div>
              </div>
            </div>

            {/* Decision Matrix */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 4: Make Go/No-Go Decision</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="font-bold text-green-900 mb-2">✓ GO: If Secondary is 8/10 AND Primary stayed 7/10+</p>
                  <p className="text-sm text-gray-700">
                    Your secondary passed. Primary remained strong. You have runway. Move to continue testing or integrate.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="font-bold text-yellow-900 mb-2">⚠ KEEP TESTING: If Secondary is 7/10 AND Primary stayed 7/10+</p>
                  <p className="text-sm text-gray-700">
                    Secondary is close. Primary is stable. Continue testing another 4 weeks. Don't give up on secondary yet.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <p className="font-bold text-orange-900 mb-2">❌ NO-GO: If Secondary is &lt;7/10</p>
                  <p className="text-sm text-gray-700">
                    Secondary doesn't have legs. Channel isn't resonating. Kill it. Go back to primary full-time.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="font-bold text-red-900 mb-2">❌ EMERGENCY STOP: If Primary drops below 7/10</p>
                  <p className="text-sm text-gray-700">
                    Immediate issue. Secondary is hurting primary. Stop testing immediately. Go back to primary 100%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Protect Primary At All Costs</p>
            <p className="text-gray-700">
              If primary ever drops below 7/10, stop secondary immediately and go back to 100% on primary. No questions. Testing isn't worth losing your main revenue source.
            </p>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Real Testing Stories
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            What happens when you follow vs ignore the testing framework.
          </p>

          <div className="space-y-8">
            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Sarah: The Proper Test</h3>
              <p className="text-sm text-green-800 mb-4">Email outreach founder testing LinkedIn</p>
              <p className="text-gray-700 mb-4">
                "Email was 9/10. I scored LinkedIn at 18/20 (audience overlap 5, skill transfer 4, time requirement 5, profitability 4). Tested 20% time for 4 weeks. Week 4 results: LinkedIn 7/10. Email stayed 9/10. I was borderline. Kept testing another 4 weeks. Week 8: LinkedIn hit 8/10. Email still 9/10. Integrated. Now both channels at 8/10 each. Revenue grew from £10k to £15k. That's proper testing."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: Patience + metrics = £5k additional revenue</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-100 p-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Tom: The Impatient Test</h3>
              <p className="text-sm text-red-800 mb-4">Email founder testing YouTube without proper scoring</p>
              <p className="text-gray-700 mb-4">
                "Email was 8/10 (£8k/month). I didn't score YouTube properly. Just started. Allocated 40% time. Week 2: Email dropped to 6/10 (£5k/month). YouTube brought £1k/month. I panicked. Combined was only £6k (down from £8k). Killed YouTube. Spent 8 weeks rebuilding email back to 8/10. Lost £8k total in revenue during rebuilding."
              </p>
              <p className="text-sm text-red-800 font-semibold">Cost: £8,000 lost revenue. Should have allocated 20%, not 40%.</p>
            </div>

            <div className="bg-green-50 rounded-xl border border-green-100 p-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">✓ Alex: The Smart Kill</h3>
              <p className="text-sm text-green-800 mb-4">Blog founder testing podcast</p>
              <p className="text-gray-700 mb-4">
                "Blog was 8/10. I scored podcast at 13/20 (audience overlap 3, skill transfer 3, time requirement 4, profitability 3). Risky, but testable. Tested 4 weeks on 20% time. Week 4: Podcast scored 4/10 (low demand, hard to produce). Blog stayed 8/10. Decision: Kill podcast. Not worth continuing. Saved myself from months of wasted effort. The scoring caught the mistake early and prevented resource waste."
              </p>
              <p className="text-sm text-green-800 font-semibold">Outcome: Smart risk assessment prevented £2k wasted effort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Tracker Downloadable */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Download Second Channel Test Tracker
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Use this tracker to measure your secondary channel during the 4-week test. Print it. Fill it weekly.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-sm text-gray-600 uppercase font-bold mb-8">4-Week Secondary Channel Test Tracker</p>

            <div className="space-y-8 mb-12">
              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Channel Being Tested: _____________________</p>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200">
                <p className="font-bold text-gray-900">Primary Channel Strength (must stay 7/10+): _____/10</p>
              </div>

              <table className="w-full border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 p-3 text-left font-bold text-gray-900">Week</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Leads</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Close Rate %</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Published?</th>
                    <th className="border border-gray-200 p-3 text-center font-bold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 1</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-center">___%</td>
                    <td className="border border-gray-200 p-3 text-center">☐ Yes</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Setup</td>
                  </tr>
                  <tr className="hover:bg-blue-50 bg-gray-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 2</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-center">___%</td>
                    <td className="border border-gray-200 p-3 text-center">☐ Yes</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Publish</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 3</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-center">___%</td>
                    <td className="border border-gray-200 p-3 text-center">☐ Yes</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Measure</td>
                  </tr>
                  <tr className="hover:bg-blue-50 bg-gray-50">
                    <td className="border border-gray-200 p-3 font-bold text-gray-900">Week 4</td>
                    <td className="border border-gray-200 p-3 text-center">___</td>
                    <td className="border border-gray-200 p-3 text-center">___%</td>
                    <td className="border border-gray-200 p-3 text-center">☐ Yes</td>
                    <td className="border border-gray-200 p-3 text-sm text-gray-600">Evaluate</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8 space-y-4">
                <p className="font-bold text-gray-900">Week 4 Evaluation:</p>
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="font-bold text-gray-900 mb-2">Secondary Channel Score</p>
                  <p className="text-gray-700 text-sm">Total leads (4 weeks): ___ | Average close rate: ___% | Weeks published: 4/4 | Primary stayed: ___/10</p>
                </div>
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="font-bold text-gray-900 mb-2">Final Decision</p>
                  <p className="text-sm text-gray-700">
                    ☐ GO: Secondary is 8/10, Primary stayed 7/10+<br/>
                    ☐ KEEP TESTING: Secondary is 7/10, Primary stayed 7/10+<br/>
                    ☐ NO-GO: Secondary is &lt;7/10<br/>
                    ☐ EMERGENCY STOP: Primary dropped &lt;7/10
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-sm text-green-900">
                <span className="font-bold">💡 Tip:</span> Fill this out weekly every Friday. By week 4, you'll have comprehensive data to make a solid go/no-go decision. No guessing. Just metrics.
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
            Score your channel candidate. If 12+, test on 20% time for 4 weeks. Track metrics weekly. Make a data-driven go/no-go decision at week 4.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/channel-expansion/channel-integration">
              <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors">
                Next: Channel Integration
              </button>
            </Link>
            <Link href="/growth/channel-expansion">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back to Hub
              </button>
            </Link>
          </div>

          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Remember</h3>
            <p className="text-gray-700">
              Testing on 20% is not about adding a new channel. It's about validating whether this channel is worth your time before fully integrating it. If it doesn't score 8/10, kill it. No regrets. Your primary channel is more important than a weak secondary.
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
                  <Link href="/growth/channel-expansion/channel-audit" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Channel Audit
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
