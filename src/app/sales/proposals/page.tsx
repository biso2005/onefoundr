'use client';

import Link from 'next/link';

export default function ProposalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <div className="mb-12">
          <a className="text-green-600 hover:underline text-sm" href="/sales">
            ← Back to Sales Hub
          </a>
        </div>

        {/* HERO SECTION */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              One-Page Proposals: The 24-Hour Yes Framework
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Stop writing 12-page PDFs. Start sending 1-page emails that get signed in a day.
            </p>
            <p className="text-lg text-gray-700 italic border-l-4 border-green-600 pl-6">
              "I sent a 12-page proposal. Result: 1 client, 3 weeks, 2 follow-ups. I sent a 1-page email. Result: 3 clients, 3 days, 0 follow-ups. The proposal didn't change. The format did."
            </p>
          </div>
        </section>

        {/* THE PROPOSAL MYTH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Long Proposals Kill Deals</h2>
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Professional" Trap</h3>
              <p className="text-gray-700 mb-2">
                You think: "I need to look professional" → 12 pages → client overwhelmed → no decision
              </p>
              <p className="text-gray-600 text-sm">
                Reality: Professionals send short proposals. Amateurs write novels.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Cover Everything" Trap</h3>
              <p className="text-gray-700 mb-2">
                You think: "I'll explain every detail" → client confused → "let me think about it"
              </p>
              <p className="text-gray-600 text-sm">
                Reality: More detail = more objections. Less detail = faster yes.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Justify Price" Trap</h3>
              <p className="text-gray-700 mb-2">
                You think: "I'll show them the value" → client skims → doesn't see it
              </p>
              <p className="text-gray-600 text-sm">
                Reality: If they don't see the value in your conversation, a 12-page document won't convince them.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Legal Protection" Trap</h3>
              <p className="text-gray-700 mb-2">
                You think: "I need terms and conditions" → client scared → ghosts
              </p>
              <p className="text-gray-600 text-sm">
                Reality: If you're sending a 12-page contract to a solo founder, you're competing with the wrong people.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="font-bold text-gray-900 mb-2">The 24-Hour Rule:</p>
              <p className="text-gray-700">
                "If they don't say yes within 24 hours, they won't. A proposal that sits is a proposal that dies."
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-bold text-gray-900 mb-3">Solo Rule:</p>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>If your proposal takes more than 10 minutes to write,</strong> it's too long.</li>
                <li>• <strong>If it takes them more than 5 minutes to read,</strong> it's too long.</li>
              </ul>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: The 14-Page PDF</h4>
              <p className="text-gray-700 mb-4">
                My first proposal: 14 pages, scope of work, timeline, bio, case studies, terms. Each section "justified."
              </p>
              <p className="text-gray-700 mb-4">
                Result: 0 signings. Lots of "let me think about its." A few "we're going with someone else."
              </p>
              <p className="text-gray-700">
                My second proposal: 1 email, 3 paragraphs, price upfront, 1 call to action.
              </p>
              <p className="text-gray-900 font-bold">
                Result: 3 signings out of 5 sends.
              </p>
            </div>
          </div>
        </section>

        {/* THE ONE-PAGE STRUCTURE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 6-Section Proposal Email</h2>
          <p className="text-gray-700 mb-8">
            A proposal is not a document. It's an email. 6 sentences. That's it.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 1
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Subject Line</h3>
              <p className="text-gray-700 mb-4">
                Formula: "Quick proposal: [Project] for [Client Name]"
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">Examples:</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• "Quick proposal: Email audit for SaaSApp"</li>
                  <li>• "Quick proposal: Homepage redesign for EcomStore"</li>
                  <li>• "Quick proposal: Onboarding sequence for StartupXYZ"</li>
                </ul>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>"Quick"</strong> sets expectation (not a 12-pager)</li>
                  <li>• <strong>"Proposal"</strong> signals decision time</li>
                  <li>• <strong>Client Name</strong> shows it's custom, not templated</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 2
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem Statement (1 Sentence)</h3>
              <p className="text-gray-700 mb-4">
                Formula: "From our chat, your biggest issue is [specific problem]."
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700 text-sm italic">
                  "From our chat, your biggest issue is onboarding emails have &lt;10% open rate."
                </p>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Shows you listened during the conversation</li>
                  <li>• Reminds them why they're buying</li>
                  <li>• One sentence = clarity</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 3
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution (2-3 Sentences)</h3>
              <p className="text-gray-700 mb-4">
                Formula: "I'll [specific solution]. You'll get [specific outcome]."
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700 text-sm italic">
                  "I'll rewrite your onboarding sequence. You'll get 40%+ open rates and 15%+ click rates."
                </p>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Specificity builds trust. Vagueness creates doubt.</li>
                  <li>• You own the outcome, not just the tasks</li>
                  <li>• No fluff about "industry best practices"</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 4
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Price (1 Sentence)</h3>
              <p className="text-gray-700 mb-4">
                Formula: "This is £X, delivered in [timeframe]."
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700 text-sm italic">
                  "This is £997, delivered in 7 days."
                </p>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Price upfront = no negotiation games</li>
                  <li>• No "let's chat about budget" follow-ups</li>
                  <li>• They know the cost before they decide</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 5
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Timeline (1 Sentence)</h3>
              <p className="text-gray-700 mb-4">
                Formula: "I'll start [day], deliver by [day]. Payment due on start."
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700 text-sm italic">
                  "I'll start Monday, deliver by Friday. Invoice sent on start."
                </p>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Creates urgency (specific dates, not "within 2 weeks")</li>
                  <li>• Shows you're ready to start immediately</li>
                  <li>• Payment upfront = you're confident</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">
                  SECTION 6
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Call to Action (1 Sentence)</h3>
              <p className="text-gray-700 mb-4">
                Formula: "Reply 'yes' and I'll send the invoice."
              </p>

              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Example:</p>
                <p className="text-gray-700 text-sm italic">
                  "Reply 'yes' and I'll send the invoice."
                </p>
              </div>

              <div className="bg-white border border-green-200 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Why This Works:</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Lowest friction possible (just type "yes")</li>
                  <li>• No PDFs to sign. No e-signature tools.</li>
                  <li>• Just one word = instant decision</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="font-bold text-gray-900 mb-3">Solo Rule:</p>
            <p className="text-gray-700">
              "If you can't write it on your phone, it's too long."
            </p>
          </div>
        </section>

        {/* FULL EMAIL TEMPLATE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Complete Email Template</h2>
          <p className="text-gray-700 mb-8">
            Copy this. Customize the brackets. Send. That's your entire proposal system.
          </p>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 overflow-x-auto mb-8">
            <div className="font-mono text-sm text-gray-100 whitespace-pre-wrap break-words">
{`Subject: Quick proposal: [Project Name] for [Client Name]

Hey [Client First Name],

From our chat, your biggest issue is [specific problem they described].

I'll [specific solution]. You'll get [specific outcome they want].

This is £[amount], delivered in [number] days.

I'll start [day], deliver by [day]. Invoice sent on start.

Reply "yes" and I'll send the invoice.

[Your name]`}
            </div>
          </div>

          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-4">Filled-In Real Example:</h3>
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Subject: Quick proposal: Email audit for SaaSApp

Hey Alex,

From our chat, your biggest issue is onboarding emails have <10% open rate.

I'll rewrite your onboarding sequence. You'll get 40%+ open rates and 15%+ click rates.

This is £997, delivered in 7 days.

I'll start Monday, deliver by Friday. Invoice sent on start.

Reply "yes" and I'll send the invoice.

Sarah`}
              </div>
            </div>
          </div>
        </section>

        {/* THE EMAIL SEND */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When and How to Send</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Timing: Send Within 2 Hours</h3>
              <p className="text-gray-700">
                Send the proposal while their pain is fresh. While they're still thinking about the problem. Not tomorrow. Not "when you get a chance." Now.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">From: Your Email (Not a Tool)</h3>
              <p className="text-gray-700">
                From [your-name@yoursite.com]. Not from "proposals@company.com." Not from Proposify. Not from HelloSign. Personal beats corporate.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">To: Just Them. No CCs.</h3>
              <p className="text-gray-700">
                One recipient. If it's a team decision, send to them. Let them loop in their team if needed. Your job is to send one proposal, not manage a committee.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Body: Plain Text. No PDFs. No Attachments.</h3>
              <p className="text-gray-700">
                Email body. That's it. No links to download files. No "See attached proposal." Just plain text. They read it on their phone. They reply "yes." Done.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">The Follow-Up Rule: ONE Message Only</h3>
              <p className="text-gray-700 mb-4">
                If they don't reply in 24 hours, send ONE follow-up:
              </p>
              <div className="bg-white border border-blue-200 rounded p-4 mb-4">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Hey [Name],

Did you get the proposal? No pressure—just want to make sure it didn't get lost.

[Your name]`}
                </div>
              </div>
              <p className="text-gray-700">
                That's it. No third follow-up. No "just checking in." If they don't reply to that, move on.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">⚠️ The 24-Hour Rule</h3>
              <p className="text-gray-700">
                If they don't reply in 24 hours, they're not a fit. Archive and move on. Don't chase. Don't negotiate. Don't send a "revised proposal." The answer is no.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Solo Rule:</h4>
              <p className="text-gray-700 mb-3">
                "If you have to follow up more than once, they're not interested. Move on."
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: The 3-Follow-Up Disaster</h4>
              <p className="text-gray-700 mb-3">
                I sent a proposal to Tom. No reply. I followed up. No reply. I followed up again. No reply. One week later, I sent a "revised proposal with updated pricing."
              </p>
              <p className="text-gray-700 mb-3">
                Finally, Tom replied: "Thanks, but we're going with someone else. They decided last week."
              </p>
              <p className="text-gray-900 font-bold mt-3">
                I wasted 2 weeks chasing a dead deal and sent 4 messages. The answer was no on day 1.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Real Example: Tom's 60% Close Rate</h4>
              <p className="text-gray-700 mb-2">
                Tom sends proposals within 1 hour of chats. No follow-ups unless they ask. He gets:
              </p>
              <ul className="text-gray-700 space-y-2 mb-3">
                <li>• 60% reply rate (within 24 hours)</li>
                <li>• 40% close rate (out of those who reply)</li>
                <li>• 24% total close rate (60% × 40%)</li>
              </ul>
              <p className="text-gray-600 text-sm">
                His secret: "I don't follow up. I just send good proposals to people who are ready."
              </p>
            </div>
          </div>
        </section>

        {/* GOOD VS BAD PROPOSALS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Good vs Bad Proposals</h2>

          <div className="mb-8 space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">✅ Good Proposal Example</h3>
              <div className="bg-white border border-green-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Subject: Quick proposal: Email audit for SaaSApp

Hey Alex,

From our chat, your biggest issue is onboarding emails have <10% open rate.

I'll rewrite your onboarding sequence. You'll get 40%+ open rates and 15%+ click rates.

This is £997, delivered in 7 days.

I'll start Monday, deliver by Friday. Invoice sent on start.

Reply "yes" and I'll send the invoice.

Sarah`}
                </div>
              </div>
              <div className="bg-green-100 rounded p-3">
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Result:</strong> Alex replied "yes" in 2 hours. Invoice paid same day. Project delivered Friday.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">❌ Bad Proposal Example</h3>
              <div className="bg-white border border-red-200 rounded-lg p-4 mb-4">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Subject: Proposal for Email Marketing Services

Dear Alex,

Thank you for your interest in our services. We're excited about the opportunity to work with you.

Attached is a comprehensive proposal outlining our approach, timeline, deliverables, case studies, testimonials, and terms.

Our team has over 15 years of experience in email marketing. We use industry best practices and proven frameworks.

We offer flexible engagement models and can customize our approach to your specific needs.

Please review the attached 14-page proposal and let us know if you have any questions.

Best regards,
Sarah
Campaign Marketing Solutions`}
                </div>
              </div>
              <div className="bg-red-100 rounded p-3">
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Result:</strong> Alex opened PDF. Got overwhelmed. Sent to 2 competitors for comparison. Ghosted.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-4 py-3 text-white font-bold w-1/4">Element</th>
                  <th className="text-left px-4 py-3 text-white font-bold w-3/8">Good Proposal</th>
                  <th className="text-left px-4 py-3 text-white font-bold w-3/8">Bad Proposal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Length</td>
                  <td className="px-4 py-3 text-gray-700">6 sentences</td>
                  <td className="px-4 py-3 text-gray-700">14 pages + PDF</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Format</td>
                  <td className="px-4 py-3 text-gray-700">Plain email</td>
                  <td className="px-4 py-3 text-gray-700">Attached PDF</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Price Placement</td>
                  <td className="px-4 py-3 text-gray-700">Section 4 (visible)</td>
                  <td className="px-4 py-3 text-gray-700">Page 8 (buried)</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Call to Action</td>
                  <td className="px-4 py-3 text-gray-700">Reply "yes"</td>
                  <td className="px-4 py-3 text-gray-700">Review & let me know</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Reply Time</td>
                  <td className="px-4 py-3 text-gray-700">2 hours average</td>
                  <td className="px-4 py-3 text-gray-700">Never (ghosted)</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Close Rate</td>
                  <td className="px-4 py-3 text-gray-700">40%+</td>
                  <td className="px-4 py-3 text-gray-700">&lt;5%</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Follow-Ups Needed</td>
                  <td className="px-4 py-3 text-gray-700">0-1 (usually none)</td>
                  <td className="px-4 py-3 text-gray-700">3-5+ (they still ghost)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* OBJECTION HANDLING */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When They Say "I Need to Think About It"</h2>
          <p className="text-gray-700 mb-8">
            This is the most common response. Here's exactly what it means and what to do.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What It Really Means</h3>
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>"I'm not convinced"</strong> → Your solution didn't hit home</li>
                <li>• <strong>"It's too expensive"</strong> → Price is higher than they expected</li>
                <li>• <strong>"It's not urgent"</strong> → They don't see the problem as pressing</li>
                <li>• <strong>"I don't know you"</strong> → Trust isn't built yet</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Your Response Email</h3>
              <p className="text-gray-700 mb-4">
                Don't say "No problem, take your time." Instead, ask what they're thinking about:
              </p>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <div className="font-mono text-sm text-gray-700 whitespace-pre-wrap break-words">
{`Hey [Name],

You mentioned you need to think about it. Totally get it.

What specifically is the hold-up? Price? Timing? Something else?

If it's price, I can adjust scope. If it's timing, I can follow up later. Just want to make sure I understand.

[Your name]`}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Their Response: 50/50 Outcome</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">50% Show Up: They Name the Objection</p>
                  <p className="text-gray-700 text-sm">
                    "It's the price. We were hoping for £697." → Now you can adjust scope or decline. At least you know.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">50% Ghost: They Don't Reply</p>
                  <p className="text-gray-700 text-sm">
                    They don't reply to your objection email. This is actually good news—you now know they're not genuinely interested. Move on.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-gray-900 mb-3">Solo Rule:</h4>
              <p className="text-gray-700">
                "If they can't name the objection, it's not real. They're not interested. Stop wasting energy."
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Anti-Example: The Long Negotiation</h4>
              <p className="text-gray-700 mb-3">
                Client says "I need to think about it." I say "No problem, take your time." A week goes by. I send another proposal. They ask for a discount. I give them 10% off.
              </p>
              <p className="text-gray-700 mb-3">
                They say "Still thinking." I reduce price another 10%. They finally say "We're going with someone else."
              </p>
              <p className="text-gray-900 font-bold">
                I discounted twice and still lost. Should've asked the question on day 1.
              </p>
            </div>
          </div>
        </section>

        {/* MORE ANTI-EXAMPLES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More Anti-Examples: What NOT to Do</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">❌ Anti-Example 1: The Proposal Tool Trap</h4>
              <p className="text-gray-700 mb-3">
                You use Proposify/PandaDoc/Proposify. Looks fancy. Client receives PDF link. Gets an account. Creates login. Forgets password. Finally logs in 3 days later. By then, they've moved on to a competitor.
              </p>
              <p className="text-gray-600 text-sm">
                Friction kills deals. Email beats tools.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">❌ Anti-Example 2: The Buried Price</h4>
              <p className="text-gray-700 mb-3">
                Proposal page 1: Problem. Page 2-3: Solution. Page 4-5: Approach. Page 6-7: Timeline. Page 8: Price.
              </p>
              <p className="text-gray-700 mb-3">
                Client reads pages 1-3. Gets the gist. Thinks "Let me read this later." Closes PDF. Never opens it again.
              </p>
              <p className="text-gray-600 text-sm">
                Price should be visible before they open the file. If they're reading your email, they see the price.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">❌ Anti-Example 3: The "Let Me Know" CTA</h4>
              <p className="text-gray-700 mb-3">
                Proposal ends with: "Please review and let me know if you have any questions or concerns."
              </p>
              <p className="text-gray-700 mb-3">
                This gives them an out. They reply "I have a question about timeline." Now you're back in email ping-pong for 2 weeks.
              </p>
              <p className="text-gray-600 text-sm">
                CTA should be binary: yes or no. "Reply yes and I'll send the invoice" = they know the next step.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">❌ Anti-Example 4: The Case Study Bluff</h4>
              <p className="text-gray-700 mb-3">
                You send a 12-page proposal that includes 3 case studies. Client thinks "Wow, lots of options." Proceeds to compare your offer against competitors' case studies.
              </p>
              <p className="text-gray-700 mb-3">
                You lose. Not because your work is bad, but because you gave them comparison ammunition.
              </p>
              <p className="text-gray-600 text-sm">
                Save case studies for after they say "yes." Right now, you're selling conviction, not proof.
              </p>
            </div>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-green-50 rounded-lg p-8 mb-16 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: Send a One-Page Proposal Today</h2>
          <p className="text-gray-700 mb-6">
            Pick your next qualified lead (someone who said they want to move forward). Write a 6-sentence email using the template above. Send it.
          </p>
          <p className="text-gray-700 mb-6 font-bold">
            That's your entire proposal. No PDF. No 12 pages. Just 6 sentences. That's it.
          </p>
          <p className="text-gray-700 mb-6">
            Wait 24 hours. If they say yes, send the invoice. If they don't reply, send one follow-up. If no reply to that, move on.
          </p>
          <div className="mt-8 p-4 bg-white border border-green-300 rounded">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Save the template above as a shortcut in your email client. Every proposal takes 5 minutes to customize.
            </p>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/natural-selling">
              <p className="font-bold text-gray-900">Natural Selling: 3-Question DM Framework</p>
              <p className="text-sm text-gray-600">How to get to the proposal stage (qualification).</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/offer/pricing">
              <p className="font-bold text-gray-900">Solo Pricing Strategy</p>
              <p className="text-sm text-gray-600">How to decide what price goes in that proposal.</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/pricing-conversations">
              <p className="font-bold text-gray-900">Pricing Conversations</p>
              <p className="text-sm text-gray-600">How to handle objections when they mention price.</p>
            </Link>
            <Link className="p-4 border border-gray-200 rounded hover:border-blue-500 transition" href="/sales/getting-clients">
              <p className="font-bold text-gray-900">Getting Your First 10 Clients</p>
              <p className="text-sm text-gray-600">End-to-end system including proposal framework.</p>
            </Link>
          </div>
        </section>

        {/* WARNING BOX */}
        <section className="mt-12 p-8 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Critical Warnings</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>❌ Don't send a proposal until you've had a conversation.</strong> Proposals sent cold have 1% close rate. Proposals sent after a chat have 40% close rate. The difference: trust.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't use proposal software.</strong> Email beats PDFs. Tools add friction (login screens, notifications, distractions).
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't bury the price.</strong> Price upfront in section 4. If they're reading your email, they're reading the price.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't follow up more than once.</strong> After your one follow-up email, move on. They had their chance.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't negotiate after the proposal.</strong> Price is the price. Scope is the scope. If they want to negotiate, send a new proposal with adjusted scope.
            </p>
            <p className="text-gray-700">
              <strong>❌ Don't include case studies, testimonials, or your bio.</strong> Those are distractions. You're selling conviction now. Save social proof for after they say yes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
