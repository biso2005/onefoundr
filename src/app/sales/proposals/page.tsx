import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'One-Page Proposals: Stop Sending 12-Page PDFs',
  description: 'Close deals with single-page proposals. The exact 6-section structure that converts better than 20-page documents.',
};

export default function ProposalsPage() {
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
            One-Page Proposals: Stop Sending 12-Page PDFs
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your 20-page proposal isn't impressive—it kills deals. Here's the 6-section structure that closes more clients.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-900 font-medium">
              "I used to send beautiful 15-page proposals. Clients went quiet. Then I switched to one page. Same price. Faster close. Higher conversion. The page I'm not sending is the page they're not reading."
            </p>
          </div>
        </section>

        {/* The Proposal Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why 12-Page Proposals Kill Deals</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nobody Reads Them</h3>
              <p className="text-gray-700">
                You spend 4 hours writing a proposal. Your client opens it, scrolls past page 2, and closes it. They forward it to a decision maker who delegates it to someone else. Nobody actually reads what you wrote.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">They Negotiate Everything</h3>
              <p className="text-gray-700">
                A long proposal signals "this is flexible." Item #7 on page 9? Negotiable. Delivery date? Negotiable. Bundle structure? Let's talk. A one-page proposal signals "this is fixed." Clear. Final.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">They Compare You to Competitors</h3>
              <p className="text-gray-700">
                A 15-page document makes comparison shopping easy. "Let me put this next to ServiceCo's proposal..." A one-page proposal is harder to compare. Different format. Different structure. You win by being different.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">They Lose It</h3>
              <p className="text-gray-700">
                A PDF attachment in email gets buried. You send it. They don't see it in the attachment thread. You follow up. They say "Can you resend?" You resend. Weeks pass. This is how deals die.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold">
                Solo Constraint: "Your proposal should fit on one page, printed. If it doesn't, it's not a proposal—it's an essay."
              </p>
            </div>
          </div>
        </section>

        {/* The One-Page Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 6-Section One-Page Structure</h2>
          <p className="text-gray-700 mb-8">
            Every proposal has these six sections. Nothing more. No executive summary. No appendix. No "about us" page. Just this.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm">Section 1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Name + Problem Statement</h3>
              <p className="text-gray-700 mb-4">
                "Proposal for: Sarah Chen | Problem: Manual email follow-ups are eating 12+ hours/week and losing qualified leads."
              </p>
              <div className="bg-white border border-blue-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>That's it.</strong> One sentence. The problem they said, in their language. Don't reframe. Don't add interpretation. Repeat it back.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">Section 2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-700 mb-4">
                "Here's what we'll do: Set up a 3-email automation sequence that triggers when a prospect opens your lead magnet. Each email is personalized to their industry. Leads are tagged in your CRM for easy follow-up."
              </p>
              <div className="bg-white border border-green-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Formula:</strong> "Set up..." + "that..." + specific outcome. 2-3 sentences. No jargon. No marketing speak. Just the mechanics.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-2 border-yellow-200 rounded-lg p-8 bg-yellow-50">
              <div className="mb-4">
                <span className="inline-block bg-yellow-600 text-white font-bold px-3 py-1 rounded text-sm">Section 3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliverables (The Actual Stuff)</h3>
              <p className="text-gray-700 mb-4">
                "✓ 3 email templates (written for your industry, not generic)<br/>✓ Automation sequence set up in Klaviyo<br/>✓ Lead tagging system configured<br/>✓ 30-min review call (weeks 2 &amp; 4)"
              </p>
              <div className="bg-white border border-yellow-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Use bullets.</strong> Be specific. "Email templates" is vague. "3 email templates written for SaaS founders" is specific. Specific = credible.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-2 border-purple-200 rounded-lg p-8 bg-purple-50">
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">Section 4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h3>
              <p className="text-gray-700 mb-4">
                "Week 1: Research + Template Draft (email on Wed for your feedback)<br/>Week 2: Setup + Review Call<br/>Week 3: Final tweaks<br/>Week 4: Handoff + Training Call"
              </p>
              <div className="bg-white border border-purple-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Specific dates beat off weeks.</strong> "By 3/15/2024" is better than "within 3 weeks." Dates signal you take this seriously.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-2 border-red-200 rounded-lg p-8 bg-red-50">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">Section 5</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment</h3>
              <p className="text-gray-700 mb-4">
                "Total Investment: £2,500<br/>Payment Terms: 50% deposit to start. 50% on completion.<br/>Status page: You'll get a live dashboard to track progress."
              </p>
              <div className="bg-white border border-red-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Be direct.</strong> No discounts. No "negotiable." Just the price, payment terms, and one small perk. Done.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="border-2 border-indigo-200 rounded-lg p-8 bg-indigo-50">
              <div className="mb-4">
                <span className="inline-block bg-indigo-600 text-white font-bold px-3 py-1 rounded text-sm">Section 6</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h3>
              <p className="text-gray-700 mb-4">
                "Approved? Reply with 'approved' or just sign below. Once we have approval, I'll send the payment link. We kick off on [date].<br/><br/>Questions? Reply to this email or call [number]."
              </p>
              <div className="bg-white border border-indigo-200 rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Make it stupid simple.</strong> They literally just reply "approved." No signature page. No DocuSign. Just email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Send */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Send the Proposal (The Email)</h2>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Subject Line</h3>
            <p className="bg-white border border-gray-300 rounded p-4 text-gray-800 font-mono text-sm mb-6">
              "Proposal: One-Page Email Automation Setup for Sarah Chen"
            </p>

            <h3 className="font-bold text-gray-900 mb-4">Email Body</h3>
            <div className="bg-white border border-gray-300 rounded p-4 text-gray-800 space-y-4">
              <p>Hi Sarah,</p>
              <p>Great conversation yesterday. Per what we discussed, here's the proposal for your email automation setup.</p>
              <p>[Paste the 6-section proposal as plain text]</p>
              <p>Ready to move forward? Just reply with "approved" and I'll send the payment link.</p>
              <p>Questions on anything? Let me know.</p>
              <p>Thanks,<br/>[Your name]</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-8">
              <h4 className="font-bold text-gray-900 mb-2">Why Plain Text?</h4>
              <p className="text-purple-900">
                Don't send a PDF. Plain text in the email means they don't have to download anything. They see it immediately. They can reply inline. They don't lose the attachment.
              </p>
            </div>
          </div>
        </section>

        {/* The Follow-Up */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Follow-Up (If They Go Quiet)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">24-Hour Wait</h3>
              <p className="text-gray-700">
                Send the proposal. Wait a full day. They might be busy or just reading it offline.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">48-Hour Follow-Up (if no reply)</h3>
              <div className="bg-gray-100 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                <p>"Hey Sarah, just checking in on the proposal. Any questions on the approach or timeline?"</p>
              </div>
              <p className="text-gray-700">
                That's it. One sentence. Don't resend the proposal. Just checking temperature.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">72-Hour Final Check</h3>
              <div className="bg-gray-100 rounded p-4 font-mono text-sm text-gray-800 mb-4">
                <p>"Sarah, I'll assume this isn't the right fit right now. Happy to circle back anytime. Let me know if circumstances change."</p>
              </div>
              <p className="text-gray-700">
                After this, stop. Don't follow up again. You've qualified them. Either they're in or they're out.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-gray-900 mb-2">Anti-Example: The 5-Email Follow-Up Sequence</h4>
            <p className="text-gray-700">
              I used to follow up 5 times over 3 weeks if they didn't reply. "Are you there?" "Checking in again" "Final reminder" ... None of them replied. They ghosted for a reason. If they haven't replied by day 3, they're not interested. Stop chasing.
            </p>
          </div>
        </section>

        {/* Full Template */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete One-Page Proposal Template</h2>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-8">
            <div className="text-gray-800 space-y-4 text-sm">
              <div className="border-b border-gray-300 pb-4">
                <p className="font-bold">PROPOSAL</p>
                <p className="text-xs text-gray-600">Date: [TODAY] | Expires: [DATE 3 WEEKS OUT]</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">Client: [CLIENT NAME]</p>
                <p className="font-bold">Problem: [SPECIFIC PROBLEM THEY MENTIONED]</p>
              </div>

              <div className="border-t border-b border-gray-300 py-4 my-4">
                <p className="font-bold mb-2">OUR SOLUTION</p>
                <p>[2-3 sentence description of what you'll do]</p>
              </div>

              <div>
                <p className="font-bold mb-2">DELIVERABLES</p>
                <p>✓ [Deliverable 1 - be specific]</p>
                <p>✓ [Deliverable 2 - be specific]</p>
                <p>✓ [Deliverable 3 - be specific]</p>
                <p>✓ [Deliverable 4 - often a call/training]</p>
              </div>

              <div>
                <p className="font-bold mb-2">TIMELINE</p>
                <p>[Week 1]: [What you do]</p>
                <p>[Week 2]: [What you do]</p>
                <p>[Week 3]: [What you do]</p>
              </div>

              <div>
                <p className="font-bold mb-2">INVESTMENT</p>
                <p>Total: £[PRICE]</p>
                <p>Terms: 50% deposit to start. 50% on completion.</p>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold">NEXT STEPS</p>
                <p>Ready? Reply with "approved" and I'll send the payment link. We start on [DATE].</p>
                <p className="text-xs text-gray-600 mt-2">Questions? Reply here or call [NUMBER].</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-600">This entire template should fit on ONE printed page</p>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Example: One-Page That Closed</h2>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 text-sm text-gray-800 space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <p className="font-bold">PROPOSAL</p>
              <p className="text-xs text-gray-600">Date: March 1, 2024 | Expires: March 22, 2024</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold">Client: TechStart Co</p>
              <p className="font-bold">Problem: Losing £15k/month in leads because sales reps don't have a system for follow-up.</p>
            </div>

            <div className="border-t border-b border-gray-300 py-4 my-4">
              <p className="font-bold mb-2">OUR SOLUTION</p>
              <p>Build a CRM-based follow-up system that automatically triggers reminders to touch base with cold prospects every 10 days. Track which touches get replies. Scale from 3 reps to 7 reps without hiring a sales manager.</p>
            </div>

            <div>
              <p className="font-bold mb-2">DELIVERABLES</p>
              <p>✓ CRM audit + competitive bench (what other SaaS companies are doing)</p>
              <p>✓ HubSpot setup with automated follow-up workflows</p>
              <p>✓ Training for all 7 sales reps (2 sessions)</p>
              <p>✓ 30-day check-in call to optimize</p>
            </div>

            <div>
              <p className="font-bold mb-2">TIMELINE</p>
              <p>Week 1: CRM audit + HubSpot config planning</p>
              <p>Week 2: Setup complete + Sales team training</p>
              <p>Week 3-4: Optimization + check-in call</p>
            </div>

            <div>
              <p className="font-bold mb-2">INVESTMENT</p>
              <p>Total: £8,000</p>
              <p>Terms: £4,000 deposit to start. £4,000 on training completion.</p>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <p className="font-bold">NEXT STEPS</p>
              <p>Approved? Reply with "approved" and I'll send the payment link. Kickoff: March 5th.</p>
              <p className="text-xs text-gray-600 mt-2">Questions? Reply here or call 07700 900123.</p>
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <p className="text-xs text-gray-600"><strong>Result:</strong> They replied "approved" within 2 hours. Closed in 23 minutes. Started on time.</p>
            </div>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What NOT to Do (Proposal Anti-Patterns)</h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't write 15 pages</p>
              <p className="text-gray-700 text-sm">If it takes more than one page, you don't understand the solution well enough.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't include "About Us"</p>
              <p className="text-gray-700 text-sm">They don't care about your background. This proposal is about them.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't use vague deliverables</p>
              <p className="text-gray-700 text-sm">"Strategy" and "optimization" mean nothing. Be specific: "14-day email sequence" not "campaign setup."</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't send as PDF attachment</p>
              <p className="text-gray-700 text-sm">Send as plain text in email. PDFs get lost. Text gets read.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="font-bold text-gray-900 mb-1">❌ Don't negotiate the price after sending</p>
              <p className="text-gray-700 text-sm">If they ask "Can you do it for less?" you've already lost. Stand by your price or walk away.</p>
            </div>
          </div>
        </section>

        {/* Your Next Step */}
        <section className="bg-red-50 rounded-lg p-8 mb-16 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step</h2>
          <p className="text-gray-700 mb-4">
            Take one client you're working with this week. Write a one-page proposal using the 6-section template above. That's it. Don't overthink it. Plain text in an email.
          </p>
          <p className="text-gray-700">
            If they ask for more details, you didn't understand the scope. Go back to them and clarify. Then update the proposal.
          </p>
        </section>

        {/* Related */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sales/natural-selling" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Natural Selling (DMs)</p>
              <p className="text-sm text-gray-600">Use the 3-question framework before sending proposals.</p>
            </Link>
            <Link href="/sales/pricing-conversations" className="p-4 border border-gray-200 rounded hover:border-green-500 transition">
              <p className="font-bold text-gray-900">Pricing Conversations</p>
              <p className="text-sm text-gray-600">Scripts for objections when price gets pushed back.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
