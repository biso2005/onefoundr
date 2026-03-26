'use client';

import Link from 'next/link';

export default function PricingConversationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <div className="mb-12">
          <a className="text-purple-600 hover:underline text-sm" href="/sales">
            ← Back to Sales Hub
          </a>
        </div>

        {/* HERO SECTION */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How to Talk About Money Without Being Awkward
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              State your price. Wait. Handle what comes. Never discount.
            </p>
            <p className="text-lg text-gray-700 italic border-l-4 border-purple-600 pl-6">
              "I used to say 'My rate is £100/hour, but I can be flexible.' Result: 30% close rate. I now say 'This is £3,000.' Result: 60% close rate. The only thing that changed was my certainty."
            </p>
          </div>
        </section>

        {/* THE PRICING MOMENT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to State Your Price</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">❌ Too Early</h3>
              <p className="text-gray-700">
                State price before you've had a conversation. Before they understand the problem. Before they see the value.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Result: They don't see the connection between price and outcome. You get "that's too expensive" because they don't know why they need it.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">❌ Too Late</h3>
              <p className="text-gray-700">
                Have the call first. Get emotionally invested. Then drop the price.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Result: You've already spent 30 minutes convincing them. You're emotionally attached to the outcome. You'll discount to close it.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-600 rounded-lg p-6 ring-2 ring-green-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Just Right: State Price in DM, Before the Call</h3>
              <p className="text-gray-700">
                After you've done the 3-question framework (Problem, Cost, Urgency). After they've said "yes, I want to move forward." Before you invite them to a call.
              </p>
              <p className="text-gray-900 font-bold mt-4">
                This is the pricing conversation. Not the sales call. Not the proposal. The DM where you state price.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <p className="font-bold text-gray-900 mb-3">The Timing Formula:</p>
              <div className="space-y-2 text-gray-700">
                <p>1. DM 1-5: 3-Question Framework (Problem, Cost, Urgency)</p>
                <p>2. Them: "Okay, let's move forward"</p>
                <p>3. You (in same DM): <strong>"This is £3,000. Does that work?"</strong></p>
                <p>4. Them: "Yes" → Call is just fit review</p>
                <p>5. Them: "Too much" → You handle objection in DM</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="font-bold text-gray-900 mb-3">Solo Rule:</p>
              <p className="text-gray-700">
                "State price in the DM, before the call. The call is for fit, not negotiation. If you negotiate on a call, you lose."
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: The 30-Minute Dead Lead</h4>
              <p className="text-gray-700 mb-3">
                I wait until the call to state price. They sound interested. We're 20 minutes in. I say "This is £3,000."
              </p>
              <p className="text-gray-700 mb-3">
                They say: "That's more than we budgeted."
              </p>
              <p className="text-gray-700 mb-3">
                I'm now emotionally invested. I've spent 20 minutes with them. I'm more willing to discount. I shouldn't have spent those 20 minutes at all.
              </p>
              <p className="text-gray-900 font-bold">
                I wasted 30 minutes on a dead lead because I didn't state price upfront.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Real Example: Instant Qualification</h4>
              <p className="text-gray-700 mb-3">
                I state price in DM: "This is £3,000."
              </p>
              <p className="text-gray-700 mb-3">
                Response 1: "Okay, let's move forward" → They're qualified. Get on a call.</p>
              <p className="text-gray-700 mb-3">
                Response 2: "Too much" → They're not qualified. I don't waste a call.</p>
              <p className="text-gray-700 mb-3">
                Both outcomes are good. No guessing. No surprises on the call.
              </p>
            </div>
          </div>
        </section>

        {/* THE PRICE STATEMENT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to State Your Price</h2>
          <p className="text-gray-700 mb-8">
            This is the most important moment. Get it right, and you filter for buyers. Get it wrong, and you start negotiating before they even say anything.
          </p>

          <div className="space-y-8">
            {/* The Formula */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Formula</h3>
              <p className="text-lg mb-6">
                "This is £X."
              </p>
              <p className="text-sm opacity-90">
                That's it. No preamble. No apology. No "but." Just the price. Then stop.
              </p>
            </div>

            {/* Bad Examples */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">❌ Bad Examples (All Say the Wrong Thing)</h3>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 mb-2">"My rate is £100/hour, but I can be flexible."</p>
                <p className="text-sm text-gray-600 italic">Translation: I don't know my value. Please negotiate.</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 mb-2">"Normally it's £3,000, but for you..."</p>
                <p className="text-sm text-gray-600 italic">Translation: I can be bought. Start asking for discounts.</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 mb-2">"I'm thinking around £2,000, but let me know your budget."</p>
                <p className="text-sm text-gray-600 italic">Translation: I have no price. I'll match whatever you want to hear.</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 mb-2">"Most people pay £3,000, but I'll do it for £2,500."</p>
                <p className="text-sm text-gray-600 italic">Translation: I just left £500 on the table for no reason.</p>
              </div>
            </div>

            {/* Good Examples */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-bold text-gray-900">✅ Good Examples (All Say Nothing Else)</h3>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 text-base font-bold">"This is £3,000."</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 text-base font-bold">"It's £497."</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 text-base font-bold">"The project is £1,500."</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-mono text-gray-700 text-base font-bold">"My fee is £150/hour."</p>
              </div>
            </div>

            {/* The Silence Rule */}
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🤐 The Silence Rule</h3>
              <p className="text-gray-700 mb-6 text-lg">
                After you state price, stop talking. First person to speak after the price loses.
              </p>
              <div className="bg-white border border-yellow-300 rounded p-4 mb-4">
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    <strong>You:</strong> "This is £3,000."
                  </p>
                  <p>
                    <strong>[Silence]</strong>
                  </p>
                  <p>
                    <strong>Them:</strong> "Okay, let's move forward."
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                The silence feels uncomfortable. That discomfort is where weak sellers break. Don't break.
              </p>
            </div>

            {/* Psychology */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">The Psychology Behind Price Statements</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <div>
                    <p className="font-bold text-gray-900">Certainty = Trust</p>
                    <p className="text-gray-600 text-sm">When you state price like a fact, they believe you know your value.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-2xl">✗</div>
                  <div>
                    <p className="font-bold text-gray-900">Hesitation = Desperation</p>
                    <p className="text-gray-600 text-sm">When you hedge, they sense you need the sale. They lowball you.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-2xl">✗</div>
                  <div>
                    <p className="font-bold text-gray-900">Flexibility = Weakness</p>
                    <p className="text-gray-600 text-sm">When you offer options, they pick the lowest. Every negotiation goes down.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Example */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-gray-900 mb-3">Real Example: The Power of Silence</h4>
              <p className="text-gray-700 mb-3">
                I'm in a DM with a prospect. After the 3 questions, they ask about price.
              </p>
              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Me:</strong> "This is £3,000."</p>
                  <p className="text-gray-500 italic">I hit send. I want to type more. I don't.</p>
                  <p><strong>[5 seconds pass]</strong></p>
                  <p><strong>Them:</strong> "Okay, send the invoice."</p>
                </div>
              </div>
              <p className="text-gray-700">
                I almost texted "but we can discuss if you want." I didn't. That silence saved me £3,000.
              </p>
            </div>

            {/* Anti-Example */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: Talking Yourself Down</h4>
              <p className="text-gray-700 mb-3">
                I state price in DM: "This is £3,000, but we can discuss if that's too high."
              </p>
              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Them:</strong> "Let's discuss."</p>
                  <p><strong>Me:</strong> "What were you thinking?"</p>
                  <p><strong>Them:</strong> "£2,000."</p>
                  <p><strong>Me:</strong> "I can do £2,500."</p>
                  <p><strong>Them:</strong> "How about £2,250?"</p>
                  <p><strong>Me:</strong> "Sure."</p>
                </div>
              </div>
              <p className="text-gray-900 font-bold">
                I lost £750 because I opened the door to negotiation. I did that by talking after stating price.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="font-bold text-gray-900 mb-3">Solo Rule:</p>
              <p className="text-gray-700">
                "If you speak after stating price, you're negotiating with yourself. The price is already low enough that they're talking to you."
              </p>
            </div>
          </div>
        </section>

        {/* OBJECTION SCRIPTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Say When They Object</h2>
          <p className="text-gray-700 mb-8">
            They will object. They always do. Here's exactly what to say for every scenario.
          </p>

          <div className="space-y-8">
            {/* Script 1 */}
            <div className="border-l-4 border-purple-600 rounded-lg p-8 bg-purple-50">
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">
                  OBJECTION 1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Them: "That's more than we expected"</h3>

              <div className="bg-white border border-purple-200 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words mb-6">
{`THEM: "That's more than we expected."

YOU: "What were you expecting?"

THEM: "Around £1,000."

YOU: "For £1,000, I can do [reduced scope]. For £3,000, you get [full scope]. Which makes sense?"`}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• You don't defend price (weak)</li>
                  <li>• You offer them a choice (empowering)</li>
                  <li>• You show what they lose at lower price (clarity)</li>
                  <li>• If they pick lower scope, great. If they pay full price, even better.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Solo Rule:</p>
                <p className="text-gray-700 text-sm">
                  "Never defend price. Offer a smaller scope. They either pay full price or accept less work. Both are wins."
                </p>
              </div>
            </div>

            {/* Script 2 */}
            <div className="border-l-4 border-blue-600 rounded-lg p-8 bg-blue-50">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm">
                  OBJECTION 2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Them: "I need to think about it"</h3>

              <div className="bg-white border border-blue-200 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words mb-6">
{`THEM: "I need to think about it."

YOU: "What specifically do you need to think about?"

THEM: "The budget."

YOU: "I can adjust scope to fit £2,000. Still want to move forward?"`}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• You force them to name the real objection</li>
                  <li>• "Think about it" is never the real objection</li>
                  <li>• Once you know the real one, you can solve it</li>
                  <li>• If they can't name it, they're not interested (move on)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Solo Rule:</p>
                <p className="text-gray-700 text-sm">
                  "If they can't name the objection, it's not real. They're blowing you off. Don't chase them."
                </p>
              </div>
            </div>

            {/* Script 3 */}
            <div className="border-l-4 border-green-600 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  OBJECTION 3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Them: "Not the right time"</h3>

              <div className="bg-white border border-green-200 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words mb-6">
{`THEM: "Not the right time."

YOU: "When would be the right time?"

THEM: "Maybe next quarter."

YOU: "Sounds good. I'll reach out Q3. Here's a resource to help in the meantime. [link]"`}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• You set a future date (no vague "someday")</li>
                  <li>• You give them value now (builds goodwill)</li>
                  <li>• You commit to follow-up (they expect you)</li>
                  <li>• You move on (don't waste time chasing)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Solo Rule:</p>
                <p className="text-gray-700 text-sm">
                  "Don't chase people who say 'not the right time.' Set a calendar reminder. Move on to people who are ready now."
                </p>
              </div>
            </div>

            {/* Script 4 */}
            <div className="border-l-4 border-orange-600 rounded-lg p-8 bg-orange-50">
              <div className="mb-4">
                <span className="inline-block bg-orange-600 text-white font-bold px-3 py-1 rounded text-sm">
                  OBJECTION 4
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Them: "Can you do £X instead?"</h3>

              <div className="bg-white border border-orange-200 rounded-lg p-6">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words mb-6">
{`THEM: "Can you do £2,000 instead of £3,000?"

YOU: "I can do £2,000 for [reduced scope]. Does that work?"`}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• You never say "no" (closes doors)</li>
                  <li>• You always offer a smaller scope (solves budget)</li>
                  <li>• You frame it clearly (they understand tradeoff)</li>
                  <li>• If they say no to reduced scope, they're not qualified</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Solo Rule:</p>
                <p className="text-gray-700 text-sm">
                  "Never say no to a price request. Always offer less scope. They pick one or the other. Either way, deal closed."
                </p>
              </div>
            </div>

            {/* Anti-Example */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: Defending Instead of Offering Scope</h4>
              <p className="text-gray-700 mb-3">
                They say: "Can you do £2,000?"
              </p>
              <p className="text-gray-700 mb-3">
                I say: "I can't go that low. My minimum is £3,000."
              </p>
              <p className="text-gray-700 mb-3">
                They say: "No problem, I'll find someone cheaper."
              </p>
              <p className="text-gray-700 mb-3">
                They ghost.
              </p>
              <p className="text-gray-900 font-bold mt-3">
                I should have said: "I can do £2,000 for audit only, not the full implementation." Then they say yes or no. At least I have a deal or a clear no.
              </p>
            </div>

            {/* Real Example */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Real Example: The Scope Pivot</h4>
              <p className="text-gray-700 mb-3">
                They say: "£3,000 is too much."
              </p>
              <p className="text-gray-700 mb-3">
                I say: "I can do £2,000 for the audit only, not the implementation."
              </p>
              <p className="text-gray-700 mb-3">
                They say: "That works. Let's do it."
              </p>
              <p className="text-gray-900 font-bold">
                I got £2,000 instead of £0 because I offered a smaller scope. Same client. Same problem. Different outcome.
              </p>
            </div>
          </div>
        </section>

        {/* THE WALK-AWAY */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Say No and Walk Away</h2>
          <p className="text-gray-700 mb-8">
            Walking away is your superpower. It shows you're not desperate. It filters for real buyers. Do it.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Walk-Away Signals (Exit Now)</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="text-2xl">🚩</span>
                  <div>
                    <p className="font-bold text-gray-900">Asking for discount upfront</p>
                    <p className="text-gray-600 text-sm">Before they even know the scope. They're price-shopping, not buying.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-2xl">🚩</span>
                  <div>
                    <p className="font-bold text-gray-900">Want to "see options"</p>
                    <p className="text-gray-600 text-sm">Want to compare you against 3 competitors. They're not buying from you.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-2xl">🚩</span>
                  <div>
                    <p className="font-bold text-gray-900">Need 3 proposals</p>
                    <p className="text-gray-600 text-sm">From you. They're not deciding. They're gathering ammunition to negotiate.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-2xl">🚩</span>
                  <div>
                    <p className="font-bold text-gray-900">Can't name the objection</p>
                    <p className="text-gray-600 text-sm">Say "what specifically" and they can't answer. They're ghosting you.</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-2xl">🚩</span>
                  <div>
                    <p className="font-bold text-gray-900">Ghost after price</p>
                    <p className="text-gray-600 text-sm">No response for 24 hours after you state price. They're not interested. Stop replying.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-300 rounded-lg p-8 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Walk-Away Script</h3>
              <div className="bg-white border border-red-300 rounded-lg p-6 mb-6">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Sounds like this isn't a fit right now. No worries.

If that changes, here's my Calendly: [link]

Looking forward to connecting in the future.

[Your name]`}
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• You're polite (no burning bridges)</li>
                  <li>• You're confident (this is their loss, not yours)</li>
                  <li>• You leave the door open (if they come back, great)</li>
                  <li>• You're done (no follow-ups)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The 70% Rule: If You're Closing Less Than 70%, Your Price is Too Low</h3>
              <p className="text-gray-700 mb-4">
                If you're having pricing conversations with 10 qualified leads and closing only 6, that's 60%. You're too low.
              </p>
              <p className="text-gray-700 mb-4">
                Raise your price. The objections will tell you where you should be.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">The Math:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• 10 qualified leads at £3,000 × 50% close = £15,000</li>
                  <li>• 10 qualified leads at £5,000 × 70% close = £35,000</li>
                  <li>• Higher price, fewer objections, more revenue</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-gray-900 mb-3">Real Example: The Comeback Close</h4>
              <p className="text-gray-700 mb-3">
                I walk away from a client who wants a discount on £3,000.
              </p>
              <p className="text-gray-700 mb-3">
                I say: "Sounds like it's not a fit. Here's my Calendly if that changes."
              </p>
              <p className="text-gray-700 mb-3">
                2 weeks later, they come back: "We talked to 3 other people. Nobody explained it like you did. We want to move forward at £3,000."
              </p>
              <p className="text-gray-900 font-bold">
                I walked away. They came back. They paid full price. They respected me more after I said no.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: The Discount Cycle</h4>
              <p className="text-gray-700 mb-3">
                A client asks for 30% off. I discount to close it.
              </p>
              <p className="text-gray-700 mb-3">
                Result: I close the project. They refer me to 2 friends. Those friends ask for 30% off too. "Sarah got 30% off, so we expect it."
              </p>
              <p className="text-gray-700 mb-3">
                I end up discounting for all 3 projects.
              </p>
              <p className="text-gray-900 font-bold">
                Over 6 months, I lost £3,000 in revenue because I said yes once. One discount destroys your pricing for that entire referral chain.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">The Referral Rule: Never Discount for Referrals</h4>
              <p className="text-gray-700">
                If someone refers you, it's because they paid full price and loved the work. Discounting the referral is insulting to the person who referred you. It says "your referral is worth less." Don't do it.
              </p>
              <p className="text-gray-700 mt-4 font-bold">
                Your core clients who refer you should be your highest-paying clients. Keep it that way.
              </p>
            </div>
          </div>
        </section>

        {/* GOOD VS BAD CONVERSATIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Good vs Bad Pricing Conversations</h2>

          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">✅ Good Conversation: Certain & Fast</h3>
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <div className="space-y-2 text-sm text-gray-700 font-mono">
                  <p><strong>You:</strong> "From our chat, you need [outcome]. This is £3,000. Does that work?"</p>
                  <p><strong>Them:</strong> "Okay."</p>
                  <p><strong>You:</strong> "Send the invoice?"</p>
                  <p><strong>Them:</strong> "Yep."</p>
                  <p className="text-gray-500 italic mt-2">Total time: 5 minutes. Result: Closed.</p>
                </div>
              </div>
              <div className="bg-green-100 rounded p-3 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Why:</strong> Certainty. No hesitation. No apology. Just the price.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">❌ Bad Conversation: Uncertain & Long</h3>
              <div className="bg-white border border-red-200 rounded-lg p-4">
                <div className="space-y-2 text-sm text-gray-700 font-mono">
                  <p><strong>You:</strong> "My rate is £100/hour, but I can be flexible depending on the scope."</p>
                  <p><strong>Them:</strong> "Can you do £80?"</p>
                  <p><strong>You:</strong> "Maybe. What's your budget?"</p>
                  <p><strong>Them:</strong> "Around £2,000."</p>
                  <p><strong>You:</strong> "I can do £2,000. Can we hop on a call to discuss?"</p>
                  <p><strong>Them:</strong> "Sure. Let's talk Monday."</p>
                  <p className="text-gray-500 italic mt-2">Total time: 3 days. Result: Uncertain. You'll be discounting more on the call.</p>
                </div>
              </div>
              <div className="bg-red-100 rounded p-3 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Why:</strong> Hesitation. Flexibility. You're negotiating with yourself before they even ask.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-purple-50 rounded-lg p-8 mb-16 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: State Your Price in Your Next DM</h2>
          <p className="text-gray-700 mb-6">
            Pick your next lead who says "okay, let's move forward" after the 3-question framework. In the same DM, add:
          </p>
          <div className="bg-white border border-purple-300 rounded-lg p-4 font-mono text-sm text-gray-700 whitespace-pre-wrap break-words mb-6">
{`"This is £[your price]. Does that work?"`}
          </div>
          <p className="text-gray-700 mb-6 font-bold">
            Then wait. Don't type anything else. Let them respond.
          </p>
          <p className="text-gray-700 mb-6">
            If they say "yes" → Send proposal (if needed) → Close.
          </p>
          <p className="text-gray-700 mb-6">
            If they object → Use one of the 4 scripts above → Solve it in DM.
          </p>
          <p className="text-gray-700">
            If they ghost → Walk away. They're not qualified.
          </p>
        </section>

        {/* RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/natural-selling">
              <p className="font-bold text-gray-900">Natural Selling: 3-Question DM Framework</p>
              <p className="text-sm text-gray-600">How to get to the pricing moment (qualification).</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/proposals">
              <p className="font-bold text-gray-900">One-Page Proposals: 24-Hour Close Framework</p>
              <p className="text-sm text-gray-600">What to send after they say "yes" to price.</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/offer/pricing">
              <p className="font-bold text-gray-900">Solo Pricing Strategy</p>
              <p className="text-sm text-gray-600">How to decide what your £X actually is.</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/getting-clients">
              <p className="font-bold text-gray-900">Getting Your First 10 Clients</p>
              <p className="text-sm text-gray-600">End-to-end system including pricing moments.</p>
            </Link>
          </div>
        </section>

        {/* WARNING BOX */}
        <section className="mt-12 p-8 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Critical Warnings</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>❌ Don't state price on a call.</strong> The call is for fit, not pricing. If you price during a call, you'll be pressured to discount.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't be "flexible."</strong> Flexibility is weakness. Price is price. Scope is scope. One or the other moves, never the price.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't defend your price.</strong> If they want to know how you calculated it, tell them the scope. Don't explain your time or value.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't discount for "this time only."</strong> Once you discount, everyone expects it. They become your "discount clients" forever.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't negotiate after the call.</strong> If you said the price in the DM and they said yes, that's locked. Don't discuss it again on the call.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't match their budget.</strong> Budget is their problem, not yours. You solve their problem at your price. They adjust their budget or go elsewhere.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't offer payment plans without raising price.</strong> If you offer 3 payments instead of 1, charge 15% more. Risk management.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
