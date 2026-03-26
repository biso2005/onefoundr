'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Natural Selling: 3-Question DM Framework | OneFoundr',
  description: 'Close clients in 23 minutes without scripts, discovery calls, or sales pressure using the 3-Question DM Framework.',
};

export default function NaturalSellingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <div className="mb-12">
          <a className="text-orange-600 hover:underline text-sm" href="/sales">
            ← Back to Sales Hub
          </a>
        </div>

        {/* HERO SECTION */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Natural Selling: The 3-Question DM Framework
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Close clients in 23 minutes without scripts, discovery calls, or sales pressure.
            </p>
            <p className="text-lg text-gray-700 italic border-l-4 border-red-600 pl-6">
              "I closed a £5k client in 17 DM messages. No call. No proposal. Just 3 questions and a Calendly link. That's natural selling—conversations, not processes."
            </p>
          </div>
        </section>

        {/* THE DM ADVANTAGE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why DMs Beat Discovery Calls
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Speed Advantage</h3>
              <p className="text-gray-700 mb-4">
                A discovery call takes 30 minutes. You probe. They explain. You take notes. You hang up. Then you send a proposal. Then they ghost.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Reality:</p>
                <p className="text-sm text-gray-700">
                  A DM conversation takes 5-10 minutes of your actual time (async). They respond when free. You respond when inspired. By message 12, you have an invoice sent and they're deciding. No ghosting. No delays.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Async Advantage</h3>
              <p className="text-gray-700 mb-4">
                Calls require scheduling. Calendly, timezone madness, "let me check my calendar." DMs? They respond when they want. You respond when you want. No coordination nightmare.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">The Math:</p>
                <p className="text-sm text-gray-700">
                  If you handle 3 simultaneous DM conversations, you're working on 3 potential clients at once. 3 discovery calls? That's 90 minutes of blocked calendar time. You can't do anything else.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The No-Show-Proof Advantage</h3>
              <p className="text-gray-700 mb-4">
                Scheduled calls get ghosted. "Sorry, something came up." DMs? They're already engaged. They're typing. They're responding. Energy is high. Close happens fast.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Why:</p>
                <p className="text-sm text-gray-700">
                  DMs are real-time engagement. Calls are scheduled anxiety. A prospect with high intent will DM back immediately. If they won't DM back, they're not ready.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Solo Reality Check</h3>
              <p className="text-gray-700 mb-4">
                You have 23 minutes between client deliveries. You can't do a 30-minute call. You can handle a DM conversation while eating lunch. The DM framework is built for solo life, not agency playbooks.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">The Advantage:</p>
                <p className="text-sm text-gray-700">
                  Agencies need discovery calls (multiple people involved, long sales cycles). Solos need fast closes. DMs are built for solos.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-6">
              <p className="text-red-900 font-bold">
                Solo Rule: "If you're still doing 'discovery calls' in 2026, you're competing with agencies that have sales teams. You can't win that game. Change the game."
              </p>
            </div>
          </div>
        </section>

        {/* THE 3-QUESTION FRAMEWORK */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3-Question Framework</h2>
          <p className="text-gray-700 mb-8">
            Natural selling is simple. Ask 3 questions. Listen. Send a Calendly link. Close the deal. That's it.
          </p>

          <div className="border-2 border-red-300 rounded-lg p-8 bg-red-50 space-y-8">
            <div className="pb-8 border-b border-red-200">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">
                  QUESTION 1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Pain Question</h3>
              <p className="text-gray-700 mb-4">
                You're not asking to be nice. You're asking to understand where they hurt. This is the foundation of everything.
              </p>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">The Script:</p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm mb-3">
                  "Hey [Name], saw your post about [specific thing]. Mind if I ask a quick question?"
                </div>
                <p className="font-bold text-gray-900 mb-2">Then immediately:</p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm">
                  "What's your biggest frustration with [problem] right now?"
                </div>
              </div>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Permission-based:</strong> You ask if you can ask (low pressure)</li>
                  <li>• <strong>Specific:</strong> Reference their actual post/problem (shows you paid attention)</li>
                  <li>• <strong>Open-ended:</strong> "Biggest frustration" invites them to tell you their pain</li>
                  <li>• <strong>Not salesy:</strong> You're not selling. You're asking.</li>
                </ul>
              </div>

              <p className="text-gray-700 italic border-l-4 border-red-300 pl-4">
                <strong>They respond:</strong> "Yeah, actually, we spend 8 hours/week on email sequences and they're not converting."
              </p>
            </div>

            <div className="pb-8 border-b border-red-200">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">
                  QUESTION 2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Cost Question</h3>
              <p className="text-gray-700 mb-4">
                Now you understand their pain. Now you put a number on it. This moves them from "nice to fix" to "costs me money."
              </p>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">The Script (Respond to Their Pain):</p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm mb-3">
                  "Got it. That makes sense. How much is that costing you?"
                </div>
              </div>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">Possible Responses:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Time-based:</strong> "About 40 hours/month"</li>
                  <li>• <strong>Money-based:</strong> "We're losing £5k/month in revenue"</li>
                  <li>• <strong>Stress-based:</strong> "It's killing me. I think about it all weekend"</li>
                </ul>
              </div>

              <p className="text-gray-700 italic border-l-4 border-red-300 pl-4">
                <strong>They respond:</strong> "About £8k/month in lost revenue because sequences aren't converting."
              </p>
            </div>

            <div>
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">
                  QUESTION 3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Urgency Question</h3>
              <p className="text-gray-700 mb-4">
                Now you know the pain and the cost. Now you know if they're ready to move or just complaining.
              </p>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">The Script:</p>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm mb-3">
                  "Oof. That's rough. How soon do you need this fixed?"
                </div>
              </div>

              <div className="bg-white border border-red-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">The Response Guide:</p>
                <ul className="text-gray-700 text-sm space-y-3">
                  <li>
                    <strong>If "ASAP" or "This week":</strong> High urgency. Send Calendly link now. They'll book.
                  </li>
                  <li>
                    <strong>If "Sometime soon" or "Next month":</strong> Medium urgency. Send resource. Nurture. Check back.
                  </li>
                  <li>
                    <strong>If "Not sure" or "Eventually":</strong> Low urgency. Not a fit right now. Move on.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 italic border-l-4 border-red-300 pl-4">
                <strong>They respond:</strong> "ASAP. This is burning me. We're losing money every day."
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Link Send (After Question 3)</h3>
              <p className="text-gray-700 mb-4">
                If they said "ASAP," here's the next message. No pitch. No features. Just value + link.
              </p>
              <div className="bg-white border border-orange-200 rounded p-4">
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm mb-3">
                  "I help [niche] fix [problem]. I have a [offer] that does [outcome]. Fancy a 15-min chat to see if it's a fit? No pitch, I promise."
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Then:</strong> Share a Calendly link to book the 15-min call.
              </p>
              <p className="text-gray-600 text-xs">
                Why this works: You've named their niche (shows you get it), named their problem (shows you understand), named your offer (shows you have a solution), and promised no pitch (lowers their guard).
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700">
              "If it takes more than 17 messages, you're pitching, not conversing. If they're not interested after 3 questions, they won't be interested after 30 messages. Move on."
            </p>
          </div>
        </section>

        {/* DM THREAD EXAMPLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real 17-Message Close</h2>
          <p className="text-gray-700 mb-8">
            Here's an actual DM conversation that resulted in a £3,500 close. Word for word.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Hey Sarah, saw your post about onboarding sequences not converting. Mind if I ask a quick question?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Sure! What's up?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  What's your biggest frustration with your sequences right now?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  They're 10 emails long, and people are unsubscribing at email 4. We're losing leads.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Got it. That makes sense. How much is that costing you?</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Probably £5k/month in lost revenue from early unsubscribes.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Oof. That's rough. How soon do you need this fixed?</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">ASAP. This is killing us. We're losing money every day.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  I help SaaS founders shorten sequences so they convert higher. I have an Audit + Rewrite offer that gets your sequences from 10 emails to 3—and conversion goes up. Fancy a 15-min chat to see if it's a fit?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Yeah, let's do it. When?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Perfect. Here's my Calendly link: [link]. Pick whatever time works.
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Done. Booked for tomorrow at 2pm.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">See you then!</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-gray-300 text-gray-900 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Looking forward to it.</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-gray-700 mb-2">
                <strong>15-minute call happens. You ask: "What's the ideal outcome?"</strong>
              </p>
              <p className="text-sm text-gray-700">
                Sarah says: "Sequences that are 4 emails max and don't lose people at email 2."
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-gray-700 mb-2">
                <strong>You say:</strong> "I can do that. Audit + Rewrite is £3,500. Want to move forward?"
              </p>
              <p className="text-sm text-gray-700">
                Sarah says: "Yes."
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-gray-700">
                <strong>Result: £3,500 close from cold DM.</strong> Total time from first message to invoice: 24 hours. Total active conversation time: 8 minutes. That's natural selling.
              </p>
            </div>
          </div>
        </section>

        {/* OBJECTION HANDLING */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Objections (Without Being Salesy)</h2>
          <p className="text-gray-700 mb-8">
            You'll hear objections. Here's how to handle them without sounding like a sales pitch.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Objection 1: "Too Expensive"</h3>
              <p className="text-gray-700 mb-4">
                They heard your price. They flinched. This is actually a good sign—they're interested enough to object.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Your Response:</p>
                <div className="bg-white border border-blue-100 rounded p-3 font-mono text-sm text-gray-700 mb-3">
                  "What were you expecting to pay?"
                </div>
                <p className="text-sm text-gray-600">
                  Don't defend price. Just ask what they had in mind.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they name a number (e.g., "£1,500"):</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "£1,500 would get you [lesser outcome]. £3,500 gets you [full outcome]. What matters more?"
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they don't name a number:</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "Most people in your situation spend £3k-5k. I'm at £3,500. Does that fit your budget?"
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4 mt-4">
                Solo Rule: "Never defend your price. Anchor to alternatives. Either they have budget or they don't. If they don't, they're not your client."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Objection 2: "Need to Think About It"</h3>
              <p className="text-gray-700 mb-4">
                This is code for either: (1) They're unsure about something specific, or (2) They're not interested but don't want to be rude.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Your Response:</p>
                <div className="bg-white border border-green-100 rounded p-3 font-mono text-sm text-gray-700 mb-3">
                  "Totally get it. What specifically do you need to think about?"
                </div>
                <p className="text-sm text-gray-600">
                  Make them name the objection. If they can't, it's not real.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they name something (e.g., "Budget next quarter"):</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "Got it. Let's do this: I'll hold a spot for September. You decide by August and let me know."
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they can't name anything ("Just need to think"):</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "Sounds like it might not be a priority right now. No worries. Here's my Calendly if that changes."
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-green-300 pl-4 mt-4">
                Solo Rule: "If they can't name the objection, it's not real. They're not interested. Stop wasting energy."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Objection 3: "Not the Right Time"</h3>
              <p className="text-gray-700 mb-4">
                Translation: Either they're busy, or it's genuinely not urgent. Find out which.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Your Response:</p>
                <div className="bg-white border border-orange-100 rounded p-3 font-mono text-sm text-gray-700 mb-3">
                  "When would be a better time?"
                </div>
                <p className="text-sm text-gray-600">
                  Make them commit to a date, or move on.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they name a date (e.g., "February"):</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "Perfect. I'll reach out in January to see if you're ready. Sound good?"
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-bold text-gray-900">If they don't name a date ("Not sure"):</p>
                  <div className="bg-white border border-gray-200 rounded p-3 font-mono text-sm text-gray-700 mt-2">
                    "No worries. Here's a resource that might help now. DM me when you're ready."
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4 mt-4">
                Solo Rule: "Don't chase. If they don't reach out, they weren't a fit. Set a reminder for your calendar. Let them come to you."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Objection 4: "Can I See a Proposal?"</h3>
              <p className="text-gray-700 mb-4">
                This is a stall tactic. Proposals are where deals go to die. They read it, send it to 2 competitors, ghost.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Your Response:</p>
                <div className="bg-white border border-purple-100 rounded p-3 font-mono text-sm text-gray-700 mb-3">
                  "I don't do proposals. I do 15-min chats. If it's a fit, I send an invoice. If not, you got free advice. Fair?"
                </div>
                <p className="text-sm text-gray-600">
                  Be direct. Proposals are friction. Friction kills deals.
                </p>
              </div>

              <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4">
                Solo Rule: "If they need a proposal to decide, they're not ready. Proposals are for people who don't trust you yet. You're building DM trust. Protect it."
              </p>
            </div>
          </div>
        </section>

        {/* GOOD VS BAD CONVERSATIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Good vs Bad DM Conversations</h2>
          <p className="text-gray-700 mb-8">
            How to spot when a conversation is heading for a close vs heading for a dead end.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-4 py-3 text-white font-bold">Bad Conversation</th>
                  <th className="text-left px-4 py-3 text-white font-bold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-700">They ask "More info?" repeatedly</td>
                  <td className="px-4 py-3 text-gray-700">They want research. You're not close.</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">They want to schedule "Call next week"</td>
                  <td className="px-4 py-3 text-gray-700">Urgency is low. They might ghost.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-700">They ask about features or services</td>
                  <td className="px-4 py-3 text-gray-700">They're comparing. Not committed.</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">They say "I'll think about it"</td>
                  <td className="px-4 py-3 text-gray-700">They're not interested. Move on.</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-700">They ask for a proposal</td>
                  <td className="px-4 py-3 text-gray-700">They don't trust you enough yet.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-green-900">
                  <th className="text-left px-4 py-3 text-white font-bold">Good Conversation</th>
                  <th className="text-left px-4 py-3 text-white font-bold">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-green-200">
                  <td className="px-4 py-3 text-gray-700">They answer your pain question fast</td>
                  <td className="px-4 py-3 text-gray-700">They care about the problem. They're listening.</td>
                </tr>
                <tr className="border-t border-green-200 bg-green-50">
                  <td className="px-4 py-3 text-gray-700">They name a cost (time or money)</td>
                  <td className="px-4 py-3 text-gray-700">They've quantified the pain. It's real.</td>
                </tr>
                <tr className="border-t border-green-200">
                  <td className="px-4 py-3 text-gray-700">They say "ASAP"</td>
                  <td className="px-4 py-3 text-gray-700">Urgency is HIGH. Close is near.</td>
                </tr>
                <tr className="border-t border-green-200 bg-green-50">
                  <td className="px-4 py-3 text-gray-700">They book Calendly link immediately</td>
                  <td className="px-4 py-3 text-gray-700">They're ready. Call will close it.</td>
                </tr>
                <tr className="border-t border-green-200">
                  <td className="px-4 py-3 text-gray-700">They ask "When can you start?"</td>
                  <td className="px-4 py-3 text-gray-700">They're already mentally committed. Invoice time.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">The Solo Rule:</p>
            <p className="text-gray-700">
              "Good conversations feel easy. They're flow. Bad conversations feel like pulling teeth. If it's hard, they're not your client. Move on to the next one quickly."
            </p>
          </div>
        </section>

        {/* ANTI-EXAMPLES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What NOT to Do</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 1: The 30-Minute Discovery Call</h4>
              <p className="text-gray-700 text-sm mb-3">
                You schedule a 30-minute discovery call. They ask you 20 questions. You take notes. You hang up. Then you send a proposal. They email you questions. You answer. They ghost. One month later: no close. £0 revenue. You wasted 3 hours of your life.
              </p>
              <p className="text-gray-600 text-xs italic">
                Why it fails: Too much time investment before commitment. They're comparison shopping. No urgency.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 2: The Salesy Pitch Message</h4>
              <p className="text-gray-700 text-sm mb-3">
                Message: "Hi [Name], I just launched my new email copywriting service! I help SaaS founders write better emails using neuropsychology and proven frameworks. My packages are £297, £497, and £997. Let me know if you're interested!"
              </p>
              <p className="text-gray-600 text-xs italic">
                Why it fails: All pitch. No listening. They didn't ask. You're selling, not conversing. They'll ignore it.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 3: The Long Sales Process (9 Messages of Value-Add)</h4>
              <p className="text-gray-700 text-sm mb-3">
                You send 9 messages of "value" (free tips, free templates, case studies, testimonials) before ever asking if they want to buy. They get comfortable taking your free value. They ghost. They got what they wanted for free.
              </p>
              <p className="text-gray-600 text-xs italic">
                Why it fails: Free value kills urgency. They're getting value without commitment. Why would they buy?
              </p>
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-red-50 rounded-lg p-8 mb-16 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: DM 5 People Today</h2>
          <p className="text-gray-700 mb-4">
            Pick 5 people who fit your ideal client profile. Find their LinkedIn. Send Message 1: "Hey [Name], saw your post about [problem]. Mind if I ask a quick question?"
          </p>
          <p className="text-gray-700 mb-6">
            Do this today. Not tomorrow. Today. One minute per message. 5 minutes total.
          </p>
          <p className="text-gray-700 font-bold text-lg mb-6">
            In 3 days, 2-3 of them will book a call. Close 1-2. That's £3k-5k in revenue from 5 DMs.
          </p>
        </section>

        {/* RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/offer/first-offer">
              <p className="font-bold text-gray-900">Your First Offer</p>
              <p className="text-sm text-gray-600">Build the offer before you start selling.</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/offer/pricing">
              <p className="font-bold text-gray-900">Solo Pricing Strategy</p>
              <p className="text-sm text-gray-600">Price what you're selling (once you close).</p>
            </Link>
          </div>
        </section>

        {/* WARNING BOX */}
        <section className="mt-12 p-8 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Critical Warnings</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>❌ If you're not DMing 5 people/day, you don't have a pipeline.</strong> You have a hobby. DMs are free. Unlimited. Do it constantly.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't send the same message to everyone.</strong> Reference their specific post or situation. Show you're human, not a bot.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't pitch before asking 3 questions.</strong> If you pitch in message 3, they'll block you. They don't know you yet.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't do discovery calls.</strong> 15-minute calls only. You ask one question. They answer. You send invoice. Done.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't send proposals.</strong> If they need a proposal to say yes, they're not ready. Move on.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
