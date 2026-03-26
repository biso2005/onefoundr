import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Natural Selling: The 3-Question DM Framework',
  description: 'Close clients in DMs without scripts. The exact 3-question framework that converts 60% of leads in 23 minutes.',
};

export default function NaturalSellingPage() {
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
            Natural Selling: The 3-Question DM Framework
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Close clients in conversations without scripts, discovery calls, or proposals. Here's the framework that converts 60% of leads in 23 minutes.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-900 font-medium">
              "I stopped having 'sales calls' and started having conversations. No discovery process. No CRM tracking. Just real questions about their problem, what they've tried, and when they want to start. That's it."
            </p>
          </div>
        </section>

        {/* The DM Advantage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why DMs Beat Calls</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Asymmetry Advantage</h3>
              <p className="text-gray-700">
                On a call, they can sense your nervousness. They can hear you searching for words. They can tell if you're unsure about your price. In a DM, you have time to think. You can edit. You can pause. You control the pace.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">They're More Honest</h3>
              <p className="text-gray-700">
                People tell you different things in DMs vs calls. On a call, they're polite. "That sounds interesting, let me think about it." In a DM, they're brutal. "Too expensive" or "I don't have time." Brutal is better—it tells you they're not a fit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">No Meeting Fatigue</h3>
              <p className="text-gray-700">
                A call requires 30 minutes of both people's time. A DM conversation takes 15 minutes over 2 hours. They don't have to carve out time. They respond between tasks. And if they're not interested, they just don't reply (which is data you need).
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold">
                Solo Constraint: "Your first three conversations should happen in DMs, not on calls. Only move to a call if they say 'yes' to Question 3."
              </p>
            </div>
          </div>
        </section>

        {/* The 3-Question Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3-Question Framework</h2>
          <p className="text-gray-700 mb-8">
            This is your entire sales process. Master these three questions and you'll close more clients than 90% of solopreneurs. No scripts. No funnels. Just real questions.
          </p>

          <div className="space-y-12">
            {/* Question 1 */}
            <div className="border-2 border-red-200 rounded-lg p-8 bg-red-50">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">Question 1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "What's your biggest frustration with [specific problem]?"
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What You're Testing</h4>
                  <p className="text-gray-700">
                    Is their problem urgent enough to pay for? Or are they just curious? Most people are curious. You need urgent.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Real Answer</h4>
                  <p className="text-gray-700">
                    They either describe a specific, painful problem ("I'm losing £2k/month to [thing]") or they give you a generic answer ("I don't know, just want to learn more"). If it's generic, they're not a fit. Move on.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Trap</h4>
                  <p className="text-gray-700">
                    Don't pitch after this question. Just listen. Let them talk for 3-5 messages. Most solopreneurs jump to selling too fast. Listen first.
                  </p>
                </div>

                <div className="bg-white border border-red-200 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example Good Response:</strong> "Honestly, I'm wasting 15 hours a week on manual email follow-ups. I should have an automation system but I don't know where to start."
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Example Bad Response:</strong> "Yeah, I want to improve my process. Sounds cool what you do."
                  </p>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm">Question 2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "What have you already tried?"
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What You're Testing</h4>
                  <p className="text-gray-700">
                    Have they spent money trying to solve this? Have they invested time? Or is this theoretical? Buyers have already tried something. They've already spent money. That's how you know they're serious.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Real Answer</h4>
                  <p className="text-gray-700">
                    "I tried [tool], it didn't work." "I hired [freelancer], waste of money." "I spent 6 months building it myself, still broken." These are buyers. "Nothing really, just exploring" = not a buyer. They're price shopping.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Secret</h4>
                  <p className="text-gray-700">
                    This question tells you their budget. If they've hired freelancers, they can afford to pay you. If they tried a £50 tool and got frustrated, they'll pay more for a real solution. If they've tried nothing, they might not have budget.
                  </p>
                </div>

                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example Good Response:</strong> "I tried MailChimp, Klaviyo, ConvertKit. Each cost me £50+ and 40 hours to set up. None worked the way I needed."
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Example Bad Response:</strong> "Nothing really. I've just been Googling around."
                  </p>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">Question 3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "If I could solve this, would you want to get started?"
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What You're Testing</h4>
                  <p className="text-gray-700">
                    Ready to close. No more questions. This is the yes/no moment. Don't ask discovery questions. Don't say "Let me think about your needs." Just: Can they start if you can solve it?
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Answers You Want</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>YES:</strong> "Yeah, if you can actually fix this I'm ready to go." → Send Calendly link. Move to call.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>MAYBE/THINK:</strong> "Maybe, I'd like to know more." → They're not ready. Stop here.
                  </p>
                  <p className="text-gray-700">
                    <strong>NO/COST:</strong> "Yeah but I can't afford much right now." → They don't have budget. Move on.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Move</h4>
                  <p className="text-gray-700">
                    If it's YES: Send Calendly link immediately. "Great. Let's jump on a 30-min call tomorrow or Thursday. Pick a time: [link]" Then move to the phone call section below.
                  </p>
                </div>

                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Good Send After YES:</strong> "Perfect. I have two 30-min slots available: Tomorrow 2pm or Thursday 10am. Which works? [Calendly link]"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Phone Call */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When They Say YES: The 30-Min Call</h2>
          
          <p className="text-gray-700 mb-6">
            You've qualified them in DM. Now the call is simple. This is not a discovery call. This is a "how do we solve this and when do you want to start" call.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Minutes 0-2: Context</h4>
              <p className="text-gray-700">
                "So I read about your frustration with [thing]. Before we jump into solutions, I want to make sure I understand the full picture. What does this cost you right now in terms of time and money?"
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Minutes 2-10: Understanding</h4>
              <p className="text-gray-700">
                Ask 1-2 follow-up questions. Listen. Write notes. Don't sell. Just understand. The goal is to confirm that solving this problem is worth their money and time.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Minutes 10-20: The Solution</h4>
              <p className="text-gray-700">
                "Here's what I would do..." Explain your approach in 3-5 sentences. Explain the timeline. Explain the cost. Then stop. Let them ask questions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Minutes 20-25: Objection Handling</h4>
              <p className="text-gray-700">
                See the objection section below. Most common: "Can you do it cheaper?" or "I need to think about it." Have a response ready.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Minutes 25-30: Close</h4>
              <p className="text-gray-700">
                "So, are you ready to get started?" If yes: "Great, I'll send an invoice after this call. We kick off [day]." If no: "No problem. Keep my info if circumstances change."
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-8">
            <p className="text-purple-900 font-bold">
              Solo Rule: "If they're not ready to start on the call, they're not ready. Don't follow up. Don't send a proposal. The sale either happens on the call or doesn't happen."
            </p>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling the 3 Common Objections</h2>

          <div className="space-y-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. "Can you do it for less?"</h3>
              <p className="text-gray-700 mb-4">
                This is not a real objection. This is them testing if you believe in your price. Your response:
              </p>
              <div className="bg-gray-100 rounded p-4 mb-4 font-mono text-sm text-gray-800">
                <p>"I price based on the value I deliver, not the hours I work. If you hire someone at £500/month, they'll work 10 hours and give you a 60% solution. I charge £2k because I guarantee a 95% solution and ongoing support."</p>
              </div>
              <p className="text-gray-700">
                If they push back: "I understand. If budget is a constraint right now, keep my info for next quarter." Then move on. Don't discount.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. "I need to think about it"</h3>
              <p className="text-gray-700 mb-4">
                Translation: "I'm not convinced this is urgent enough." Your response:
              </p>
              <div className="bg-gray-100 rounded p-4 mb-4 font-mono text-sm text-gray-800">
                <p>"Sure. What specifically do you want to think about? Is it the approach, the timeline, or the cost?"</p>
              </div>
              <p className="text-gray-700">
                Listen to their answer. They'll tell you the real objection. Address that. If they still need to think: "That's fine. How about I send you a one-page summary of what we discussed, and you can let me know by Friday?"
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. "I need to talk to [partner/boss/team]"</h3>
              <p className="text-gray-700 mb-4">
                They're not the decision maker. Your response:
              </p>
              <div className="bg-gray-100 rounded p-4 mb-4 font-mono text-sm text-gray-800">
                <p>"That makes sense. Are they going to want to hear what we discussed, or should I send over a summary first?"</p>
              </div>
              <p className="text-gray-700">
                If they need a summary: "Here's what I'd recommend: I'll record a 5-minute video of this solution and send it to you. You can share it with them and we'll follow up next week." Don't send a 20-page proposal. Keep it short.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-gray-900 mb-2">Anti-Example: The Long Proposal After Objection</h4>
            <p className="text-gray-700">
              I spent 3 hours writing a detailed proposal after someone said "I need to think about it." They never responded. Lesson: if they're not ready on the call, a proposal won't change that. Stop selling and move on.
            </p>
          </div>
        </section>

        {/* The Whole Conversation Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Example: From DM to Closed (23 Minutes)</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU (in DM)</p>
              <p className="text-gray-700">Hey Sarah, I noticed you asked about email automation in [community]. What's your biggest frustration with it right now?</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-6">
              <p className="text-sm text-green-600 font-semibold mb-2">SARAH</p>
              <p className="text-gray-700">Honestly it's exhausting. I'm manually sending follow-up emails and losing leads because I can't keep up with the volume.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">How much time is this costing you per week? And have you tried any tools to automate it?</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-6">
              <p className="text-sm text-green-600 font-semibold mb-2">SARAH</p>
              <p className="text-gray-700">About 12 hours/week. I tried MailChimp and ConvertKit but they're too complicated and I'm losing leads anyway because my sequences aren't right.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">Got it. If I could set up a complete automation system that cuts your manual time to 1 hour/week and increases your lead conversion by 30%, would you want to get started?</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-6">
              <p className="text-sm text-green-600 font-semibold mb-2">SARAH</p>
              <p className="text-gray-700">Yeah, definitely. How would that work?</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">YOU</p>
              <p className="text-gray-700">Perfect. Let's hop on a 30-min call tomorrow or Thursday to walk through it. Does 2pm tomorrow work, or Thursday 10am? [Calendly link]</p>
            </div>

            <p className="text-gray-700 text-sm mt-6 text-center">
              <strong>Result after call:</strong> Sarah said yes. £2,500 project. Closed in 23 minutes total.
            </p>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What NOT to Do (Natural Selling Anti-Patterns)</h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't send a long pitch after Question 1</p>
              <p className="text-gray-700 text-sm">Ask the questions. Listen. Let them talk.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't lower your price on the call</p>
              <p className="text-gray-700 text-sm">Ever. Not even a little. If they ask, explain the value. If they still can't afford it, move on.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't say "Let me send you a proposal"</p>
              <p className="text-gray-700 text-sm">If they're not ready to commit on the call, a proposal won't change that. Say "I'll follow up if circumstances change."</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't talk about yourself or your business</p>
              <p className="text-gray-700 text-sm">This is about their problem, not your story. Save the "here's my background" for when you're delivering.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't follow up after a "no"</p>
              <p className="text-gray-700 text-sm">Move on. If circumstances change, they'll contact you. Chasing disqualifies you.</p>
            </div>
          </div>
        </section>

        {/* Your Next Step */}
        <section className="bg-red-50 rounded-lg p-8 mb-16 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step</h2>
          <p className="text-gray-700 mb-4">
            Pick 3 people who are warm leads (people who asked about your offer or showed interest). Send them Question 1 in a DM today. Don't overthink it. Just ask.
          </p>
          <p className="text-gray-700 mb-4 font-bold">
            "Hey [name], I'm helping people with [problem]. What's your biggest frustration with [specific thing]?"
          </p>
          <p className="text-gray-700">
            That's it. See who replies. Qualif them with Questions 2 and 3. Book calls with the yeses. Close on the calls. Repeat.
          </p>
        </section>

        {/* Related */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sales/proposals" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Proposals (If You Prefer Written)</p>
              <p className="text-sm text-gray-600">1-page proposals that convert.</p>
            </Link>
            <Link href="/sales/pricing-conversations" className="p-4 border border-gray-200 rounded hover:border-green-500 transition">
              <p className="font-bold text-gray-900">Pricing Conversations</p>
              <p className="text-sm text-gray-600">Scripts for objections like "too expensive."</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
