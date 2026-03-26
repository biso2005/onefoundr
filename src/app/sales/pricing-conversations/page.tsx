import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Pricing Conversations: How to Talk About Money Without Awkwardness',
  description: 'Stop feeling weird about pricing. Scripts for every objection: "too expensive," "I need to think," and walking away.',
};

export default function PricingConversationsPage() {
  return (
    <>
      <ScrollToTop />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12">
          <Link href="/sales" className="text-red-600 hover:underline text-sm">
            ← Back to Sales Hub
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How to Talk About Money Without Being Awkward
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The exact scripts that make pricing feel natural. No discounting. No apologies. No "let me think" pauses.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-900 font-medium">
              "Pricing used to be the worst part of my pitch. I'd get butterflies. I'd stumble over the number. Then I realized: the problem isn't the price. It's that I wasn't saying it clearly. I started using one simple script and the awkwardness vanished."
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pricing Feels Awkward</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You're Unsure About Your Price</h3>
              <p className="text-gray-700">
                Deep down, you don't fully believe you deserve £2,500 for this project. Or maybe you do, but you're afraid to say it out loud. That hesitation comes through. Your prospect feels it. They push back immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You're Not Stating It Clearly</h3>
              <p className="text-gray-700">
                You say things like "I was thinking around £2k" or "This typically runs £1,500 to £3,000 depending on..." That ambiguity triggers negotiation. Hard numbers trigger acceptance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You're Negotiating Before They Ask</h3>
              <p className="text-gray-700">
                "I know that's a lot" or "That might seem expensive but..." You're already making the case that your price is high. Why would they agree if you're saying it's high?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You Say "Budget" Instead of Walking Away</h3>
              <p className="text-gray-700">
                When they push back, you ask "What's your budget?" instead of saying "This is what this costs. If that doesn't work, no problem." You just entered negotiation mode. You already lost.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold">
                Solo Rule: "Your price isn't up for negotiation. It's fixed. If they can't afford it, that's not your problem. Walking away is the most powerful move you have."
              </p>
            </div>
          </div>
        </section>

        {/* The Pricing Moment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to State Your Price</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Option 1: After the Call (Phone or Video)</h3>
              <p className="text-gray-700">
                You've walked through the problem and your solution. They're interested. You say: "Here's what this costs:" and wait for their reaction.
              </p>
              <p className="text-gray-700 mt-3 italic text-sm">
                Why this works: You've already sold them on the value. The price comes after the value.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Option 2: In the Proposal (Text or Email)</h3>
              <p className="text-gray-700">
                You send the proposal (see: Proposals page). One of the six sections is "Investment: £2,500." No preamble. Just the number.
              </p>
              <p className="text-gray-700 mt-3 italic text-sm">
                Why this works: Written format gives them time to process. They can't immediately say no on the call.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Option 3: During the DM Conversation (Sales Path 1)</h3>
              <p className="text-gray-700">
                After Question 3 ("If I could solve this, would you want to get started?") and they say "yes," you say: "Perfect. My investment for this is £2k. That work?" Then wait.
              </p>
              <p className="text-gray-700 mt-3 italic text-sm">
                Why this works: You qualify before they get surprised. If they flinch, that tells you something.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold">
                Key Principle: "State the price. Then stop talking. Let them respond. Your silence is more powerful than your explanation."
              </p>
            </div>
          </div>
        </section>

        {/* The Script */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Price Statement Script (Use This)</h2>

          <div className="space-y-8">
            <div className="border border-gray-300 rounded-lg p-8 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Three Ways to Say Your Price</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono font-bold text-red-600 mb-2 text-sm">OPTION A (For Projects)</h4>
                  <p className="text-gray-700 mb-3">
                    "My investment for this is £2,500. Half upfront to start, half when we're done."
                  </p>
                  <p className="text-sm text-gray-600">
                    ✓ Clear number | ✓ Clear terms | ✓ Natural language (not corporate speak)
                  </p>
                </div>

                <div>
                  <h4 className="font-mono font-bold text-blue-600 mb-2 text-sm">OPTION B (For Retainers)</h4>
                  <p className="text-gray-700 mb-3">
                    "For ongoing work like this, I typically charge £800 per month. That includes two strategy calls and priority support."
                  </p>
                  <p className="text-sm text-gray-600">
                    ✓ States range implicitly (typical = you adjust) | ✓ Clear what's included | ✓ Pro-level positioning
                  </p>
                </div>

                <div>
                  <h4 className="font-mono font-bold text-green-600 mb-2 text-sm">OPTION C (For Packages)</h4>
                  <p className="text-gray-700 mb-3">
                    "This package is priced at £1,200. It includes the full setup plus 30 days of optimization."
                  </p>
                  <p className="text-sm text-gray-600">
                    ✓ Frame as package value | ✓ Explain what's included | ✓ Feels complete
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>What all three have in common:</strong>
                </p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>✓ No qualifier words ("around," "about," "typically")</li>
                  <li>✓ State the number directly: "£2,500" not "It's in the 2k range"</li>
                  <li>✓ Then explain what's included or the payment terms</li>
                  <li>✓ Then pause. Let them talk.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Objections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3 Objections (And Your Exact Responses)</h2>

          <div className="space-y-10">
            {/* Objection 1 */}
            <div className="border-2 border-red-200 rounded-lg p-8 bg-red-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Objection 1: "That's too expensive"</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What They're Really Saying</h4>
                  <p className="text-gray-700">
                    "I'm not sure this is worth it" or "I don't have the money" or "I want to compare to other vendors." This is the most common objection. It's not actually about price. It's about value perception.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Your Response</h4>
                  <div className="bg-white border border-red-200 rounded p-4 font-mono text-sm text-gray-800">
                    <p>"I get that. Most people think that when they first hear the number. But if this project saves you 15 hours a week like we talked about, that's £3,000+ in your pocket over the next month. So the investment pays for itself. Make sense?"</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Real Move</h4>
                  <p className="text-gray-700">
                    You're connecting the price back to the outcome. You're not apologizing for the price. You're explaining why it's cheap compared to the value. Then you wait.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">If They Still Push Back</h4>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                    <p>"I hear you. I'm not the cheapest option—I'm the one who gets the best result. If cost is the main factor right now, there are cheaper options. But if you want to solve this properly, this is what it costs. What matters most to you?"</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This is the hidden walk-away. You're giving them permission to choose someone cheaper. Most won't. They'll say "Actually, let's move forward."
                  </p>
                </div>
              </div>
            </div>

            {/* Objection 2 */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Objection 2: "I need to think about it"</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What They're Really Saying</h4>
                  <p className="text-gray-700">
                    "I'm not convinced enough to commit right now" or "I need to talk to my partner" or "I'm shopping around." They're not a no. They're a maybe. Maybe often becomes no.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Your Response</h4>
                  <div className="bg-white border border-blue-200 rounded p-4 font-mono text-sm text-gray-800">
                    <p>"Totally fair. What specifically do you want to think about? Is it the investment, the approach, or the timeline?"</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Real Move</h4>
                  <p className="text-gray-700">
                    You're not accepting "I need to think." You're asking what specifically. 9 out of 10 times they'll tell you the REAL objection. Then you can address it.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">If They Deflect ("Just everything")</h4>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                    <p>"Got it. Here's what I'd suggest: Take 24 hours. Look it over. If after 24 hours you're still excited, we'll kick off next week. If you're still on the fence, we're probably not a fit. Fair?"</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This puts a deadline on the decision. It prevents slow-motion maybes that turn into nos after two weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* Objection 3 */}
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Objection 3: "Can you do it cheaper?"</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What They're Really Saying</h4>
                  <p className="text-gray-700">
                    "I found someone cheaper" or "I'm testing if you'll negotiate." This is the price-shopper objection. These people are never happy. Even if you discount, they'll ask for more.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Your Response (DO NOT DISCOUNT)</h4>
                  <div className="bg-white border border-green-200 rounded p-4 font-mono text-sm text-gray-800">
                    <p>"I appreciate the question. But no—this price is what it is. It reflects the quality and results you'll get. If you want to try a cheaper option, I totally get it. But if that doesn't work out and you want to do this right, you know where to find me."</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Real Move</h4>
                  <p className="text-gray-700">
                    You're not being defensive. You're being clear. Your price is the price. You're giving them permission to shop elsewhere. And you're planting the seed: "When the cheap option doesn't work, reach out."
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Why This Works</h4>
                  <p className="text-gray-700">
                    People who shop on price alone are never the best clients. They don't trust you. They discount your work. They push back on everything. Letting them walk is doing yourself a favor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The No-Discount Rule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The No-Discount Rule (Non-Negotiable)</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why You Don't Discount</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">It Destroys Your Brand</h4>
                  <p className="text-gray-700">
                    You charge £2,500. You discount to £2,000. What happens next time? Now your real price is £2,000. You've just permanently lowered your rate.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">It Attracts the Wrong Clients</h4>
                  <p className="text-gray-700">
                    People who negotiate on price are the same people who negotiate on scope, timeline, and payment terms. They're high-maintenance. They complain about your work. They take forever to pay. Avoid them.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">It Devalues Your Work</h4>
                  <p className="text-gray-700">
                    If you discount, you're sending a signal: "My price was too high." Why would they trust your work if even you think it's overpriced?
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">It Kills Your Profit</h4>
                  <p className="text-gray-700">
                    A £500 discount on a £2,500 project is a 20% cut in profit. That turns a healthy project into barely-above-break-even work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold mb-2">
                The Rule: If someone asks for a discount and doesn't accept your price, they're not your client. Walk away. Don't negotiate.
              </p>
              <p className="text-purple-900 text-sm">
                This sounds harsh. It's not. You're protecting yourself from clients that will drain your energy and deliver tiny margins.
              </p>
            </div>
          </div>
        </section>

        {/* The Walk-Away */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Walk Away (And How)</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">You Walk Away When:</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">→</span>
                  <p className="text-gray-700">They ask for a discount and won't budge on the "no"</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">→</span>
                  <p className="text-gray-700">They question whether the value is real ("How long will this actually take you?")</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">→</span>
                  <p className="text-gray-700">They're comparing you to 5 other vendors and haven't decided yet ("We want to see all options")</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">→</span>
                  <p className="text-gray-700">They need to talk to a committee that will take 3 weeks to decide</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold">→</span>
                  <p className="text-gray-700">They want you to do spec work ("Let us see a sample first")</p>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 mb-3">How to Walk Away</h4>
              <div className="bg-white border border-gray-300 rounded p-4 font-mono text-sm text-gray-800">
                <p>"I appreciate the opportunity. I don't think we're a fit right now. If circumstances change, let me know."</p>
              </div>
              <p className="text-gray-700 text-sm mt-3">
                That's it. No explanation. No leaving the door wide open. Just a clean walk.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-gray-900 mb-2">Anti-Example: The Desperate Discount</h4>
            <p className="text-gray-700">
              A prospect said "That's too much." I panicked and offered £1,500 instead of £2,000. They took it. Then spent 6 weeks giving feedback on stuff outside the scope. Made me rewrite everything. Even asked for a "final revision free." I made £80/hour. Never again.
            </p>
          </div>
        </section>

        {/* Real Conversation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Pricing Conversation: Start to Close</h2>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">"So here's what I'd do: Three weeks, full setup, your team trained, and two weeks of support after. My investment for this is £3,500. Half upfront, half on completion."</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-sm text-green-600 font-semibold mb-2">THEM</p>
              <p className="text-gray-700">[Pause] That's more than we expected. Can you do it for £2,500?"</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">"I get that. But at £2,500 I'd have to cut either the training or the post-launch support. And you said training was important. At £3,500, you get everything. I stand by that price."</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-sm text-green-600 font-semibold mb-2">THEM</p>
              <p className="text-gray-700">[Pause] Can you just do the setup and skip the training? Then charge £2,000?"</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">"I could, but that's where projects fail. Your team won't know how to use it. You'll call me with questions anyway. I want to do this right, which means training + support. That's £3,500. If you want to try it without support, I understand, but that's not my recommendation."</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-sm text-green-600 font-semibold mb-2">THEM</p>
              <p className="text-gray-700">[Long pause] Okay. Can I sleep on it?"</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">"Sure. What specifically could I clarify that would help you decide?"</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-4">
              <p className="text-sm text-green-600 font-semibold mb-2">THEM</p>
              <p className="text-gray-700">"No, just want to review with my partner."</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">"Great. Take till tomorrow. If you're both excited, we kick off next Monday. If you have questions, reply to this email. I'm here."</p>
            </div>

            <p className="text-gray-700 text-sm mt-4 text-center">
              <strong>Result:</strong> They said yes the next day. Project started on time. No scope creep. Paid on schedule. Perfect client.
            </p>
          </div>
        </section>

        {/* Your Next Step */}
        <section className="bg-red-50 rounded-lg p-8 mb-16 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step</h2>
          <p className="text-gray-700 mb-4">
            Pick one of the three scripts and memorize it this week. Say it out loud until it feels natural. When the next pricing moment comes (and it will), use that script. Don't apologize. Don't soften. Just say the price and wait.
          </p>
          <p className="text-gray-700">
            Watch what happens. Most people say yes. Some negotiate. A few walk away. That's the game. The ones who walk away aren't your clients anyway.
          </p>
        </section>

        {/* Related */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sales/natural-selling" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Natural Selling (DMs)</p>
              <p className="text-sm text-gray-600">Qualify clients before pricing comes up.</p>
            </Link>
            <Link href="/sales/proposals" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">One-Page Proposals</p>
              <p className="text-sm text-gray-600">How to present pricing in writing.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
