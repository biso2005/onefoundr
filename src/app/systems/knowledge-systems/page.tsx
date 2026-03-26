import Link from 'next/link';

export const metadata = {
  title: 'Knowledge Systems: The Solo SOP Framework | OneFoundr',
  description: 'Create once, use 100 times. SOPs, templates, and docs that save 5 hours/week. Never start from scratch again.',
  openGraph: {
    title: 'Knowledge Systems: The Solo SOP Framework',
    description: 'Create once, use 100 times. SOPs, templates, and docs that save 5 hours/week.',
  },
};

export default function KnowledgeSystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/systems" className="text-blue-600 hover:underline text-sm">
            ← Back to Systems Hub
          </Link>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Knowledge Systems: The Solo SOP Framework
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Create once, use 100 times. SOPs, templates, and docs that save 5 hours/week. Never start from scratch again.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mb-8">
            <p className="text-purple-900 font-semibold mb-0">
              "I spent 3 hours writing a client onboarding email. Wrote it 10 times for 10 clients. I templated it. Now it takes 5 minutes. I saved 25 hours. That's a week of work."
            </p>
          </div>
        </section>
      </div>

      {/* THE KNOWLEDGE MYTH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Documentation Feels Like Overhead</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Four Problems</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">1. The "Corporate" Problem</p>
                <p className="text-gray-700">
                  You think documentation means 20-page SOPs nobody reads. Corporate handbooks. 50-slide onboarding decks. You're not a big company. You don't need that. You need a one-page checklist. That's it.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">2. The "Time" Problem</p>
                <p className="text-gray-700">
                  You say "I don't have time to document." Then you spend 3 hours recreating the same email for the 10th client. You have time. You're just spending it on the wrong thing.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">3. The "Perfection" Problem</p>
                <p className="text-gray-700">
                  Your SOP needs to be perfect before you write it down. So you never write it down. You just keep doing it manually. Imperfect documentation is infinitely better than no documentation.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">4. The "Useless" Problem</p>
                <p className="text-gray-700">
                  You assume "I'll never use this again." Then you use it 50 times. You discover this on use 5. By then, you've wasted 20 hours recreating it manually.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-6">
              <strong>The Math:</strong> If it takes 30 minutes to document and saves you 1 hour per use, it's a 2x return on the first use. Do it.
            </p>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The 50-Hour Mistake</p>
            <p className="text-red-800">
              I wrote a proposal from scratch 10 times. 5 hours each. 50 hours total. I templated it in 30 minutes. Now it takes 30 minutes per proposal. I wasted 45 hours because I "didn't have time" to template. That's a month of work.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: The 45-Hour Saving</p>
            <p className="text-green-800">
              Sarah templated her onboarding: email, checklist, welcome doc. First 5 clients took 3 hours each to onboard. Next 20 clients took 30 minutes each. That's 15 hours vs 10 hours. She saved 45 hours in year one. Now she uses it on every client.
            </p>
          </div>
        </div>
      </div>

      {/* THE SOP FRAMEWORK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The SOP Framework: The 30-Minute SOP</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What is an SOP?</h3>
          <p className="text-gray-700 mb-6">
            An SOP is a one-page process for something you do repeatedly. Not a 20-page manual. A one-page checklist. It takes 30 minutes to write. It saves hours per week.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            <p className="font-bold text-gray-900 mb-4">The SOP Template:</p>
            <div className="space-y-3 font-mono text-sm text-gray-700">
              <p><strong>Title:</strong> [Task Name]</p>
              <p><strong>Time:</strong> [Minutes to complete]</p>
              <p><strong>Tools:</strong> [Tools needed]</p>
              <p><strong>Steps:</strong></p>
              <p className="ml-4">1. [Step 1]</p>
              <p className="ml-4">2. [Step 2]</p>
              <p className="ml-4">3. [Step 3]</p>
              <p className="ml-4">...</p>
              <p><strong>Notes:</strong> [Any gotchas or variations]</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-8">
            <p className="font-bold text-gray-900 mb-4">Example SOP: Client Onboarding</p>
            <div className="space-y-3 font-mono text-sm text-gray-700">
              <p><strong>Title:</strong> Client Onboarding</p>
              <p><strong>Time:</strong> 15 minutes</p>
              <p><strong>Tools:</strong> Gmail, Calendly, Google Drive, Spreadsheet</p>
              <p className="mb-4"><strong>Steps:</strong></p>
              <p className="ml-4">1. Send welcome email (use template below)</p>
              <p className="ml-4">2. Schedule kickoff call using Calendly (link in email)</p>
              <p className="ml-4">3. Create project folder in Google Drive (client name)</p>
              <p className="ml-4">4. Add client to tracking spreadsheet (Name, Status, Last Contact)</p>
              <p className="ml-4">5. Add to communication log (date, onboarding, next step)</p>
              <p className="mt-4"><strong>Notes:</strong> Customize the welcome email with their name and project type. If they don't schedule within 24 hours, send a reminder.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The SOP Library</h3>
          <p className="text-gray-700 mb-6">Start with these 5 core SOPs. Then add more as you discover patterns:</p>

          <div className="space-y-3 ml-4">
            <p className="text-gray-700"><strong>1. Onboarding:</strong> Welcome email, kickoff call, project setup</p>
            <p className="text-gray-700"><strong>2. Offboarding:</strong> Final delivery, testimonial request, invoice</p>
            <p className="text-gray-700"><strong>3. Invoicing:</strong> Generate invoice, send email, follow up</p>
            <p className="text-gray-700"><strong>4. Proposal:</strong> Draft proposal, customize, send with email</p>
            <p className="text-gray-700"><strong>5. Testimonial Request:</strong> Email template, timing, follow-up</p>
            <p className="text-gray-700"><strong>6. Project Kickoff:</strong> Call prep, setup checklist, brief client</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mt-8">
            <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
            <p className="text-blue-800">If you do it 3 times, SOP it. End of story.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The SOP Formats</h3>

          <p className="text-gray-700 mb-4">
            <strong>Option 1: Written (1 page)</strong>
          </p>
          <p className="text-gray-700 mb-6">
            Create a Google Doc. Format as: Title | Time | Tools | Steps. Copy to your SOP folder. Done.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Option 2: Loom (Video)</strong>
          </p>
          <p className="text-gray-700 mb-6">
            Record yourself doing the task. Narrate as you go. Save the link. That's your SOP. Faster than writing.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Option 3: Hybrid</strong>
          </p>
          <p className="text-gray-700">
            1-page checklist + video for the complex parts. Best of both worlds.
          </p>
        </div>

        {/* Anti-Example */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
          <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The Unread 5-Pager</p>
          <p className="text-red-800">
            I wrote a detailed 5-page SOP for my proposal process. Included all variations, edge cases, every possible scenario. I never read it again. Created a 1-page SOP instead: Title, Time, Tools, 5 Steps. Use it weekly.
          </p>
        </div>

        {/* Real Example */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <p className="text-sm font-bold text-green-900 mb-2">Real Example: The 17-Hour Saving</p>
          <p className="text-green-800">
            Tom created a 1-page SOP for his proposal process: 5 steps, 10 minutes per proposal. Sends 3 proposals/week. Without SOP: 30 minutes each. With SOP: 10 minutes each. Saves 20 minutes/week × 52 weeks = 17 hours/year. That's £850 in billable time saved.
          </p>
        </div>
      </div>

      {/* THE TEMPLATE LIBRARY */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Template Library: Your Email Arsenal</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-6">
              If you type it more than twice, template it. Start with these 6 core emails. Add more as you discover patterns.
            </p>
          </div>

          {/* Template 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">1. Welcome Email (Onboarding)</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">Welcome to [Your Company Name] — Here's what happens next</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Thanks for signing on. Excited to work on [project].</p>
              <p className="text-gray-700 mb-2">Here's the timeline:</p>
              <p className="text-gray-700 mb-2">— Kickoff call: [date] at [time] (link below)</p>
              <p className="text-gray-700 mb-2">— Project starts: [date]</p>
              <p className="text-gray-700 mb-2">— Delivery: [date]</p>
              <p className="text-gray-700 mb-4">Schedule your kickoff call here: [Calendly link]</p>
              <p className="text-gray-700 mb-2">Questions? Reply to this email.</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          {/* Template 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">2. Proposal Email</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">Quick proposal for [project]</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Here's the proposal for [project]. Attached PDF.</p>
              <p className="text-gray-700 mb-2">The TL;DR:</p>
              <p className="text-gray-700 mb-2">— Scope: [3-5 sentences what you're delivering]</p>
              <p className="text-gray-700 mb-2">— Timeline: [X weeks]</p>
              <p className="text-gray-700 mb-2">— Investment: £[amount]</p>
              <p className="text-gray-700 mb-4">Next steps: Reply if you have questions. If good to go, let me know and we'll schedule kickoff.</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          {/* Template 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">3. Invoice Email</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">Invoice [number] — [Project Name]</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Invoice attached for the [project] work completed.</p>
              <p className="text-gray-700 mb-2">Invoice details:</p>
              <p className="text-gray-700 mb-2">— Amount: £[X]</p>
              <p className="text-gray-700 mb-2">— Due date: [date, typically 14 days]</p>
              <p className="text-gray-700 mb-2">— Payment link: [link if accepting online]</p>
              <p className="text-gray-700 mb-4">Questions about the invoice? Reply here. Otherwise, looking forward to payment by [date].</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          {/* Template 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">4. Testimonial Request Email</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">Quick favor?</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Project's wrapped. Wanted to ask a quick favor.</p>
              <p className="text-gray-700 mb-2">Would you be willing to write a 2-3 sentence testimonial about working with me? Just needs to be honest—what went well, what was the result.</p>
              <p className="text-gray-700 mb-2">I use these to help other people understand my work.</p>
              <p className="text-gray-700 mb-4">Hit reply if you're up for it. Thanks!</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          {/* Template 5 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">5. Referral Request Email</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">Quick question</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Hope you're well. Quick question: do you know anyone else dealing with [problem you solve]?</p>
              <p className="text-gray-700 mb-2">I'm really good at helping with [specific outcome]. If you can intro me to someone, I'd be happy to help them.</p>
              <p className="text-gray-700 mb-4">No pressure—just if someone comes to mind, hit reply.</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          {/* Template 6 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">6. Offboarding Email (Project Complete)</h3>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4 border border-gray-200">
              <p className="font-bold mb-2">Subject:</p>
              <p className="text-gray-700 mb-4">[Project] is complete — Here's what we delivered</p>

              <p className="font-bold mb-2">Body:</p>
              <p className="text-gray-700 mb-2">Hi [Client Name],</p>
              <p className="text-gray-700 mb-2">Project's shipped. Here's everything delivered:</p>
              <p className="text-gray-700 mb-2">✓ [Deliverable 1]</p>
              <p className="text-gray-700 mb-2">✓ [Deliverable 2]</p>
              <p className="text-gray-700 mb-2">✓ [Deliverable 3]</p>
              <p className="text-gray-700 mb-2">Check it out and let me know if you see any issues. Otherwise, I'll invoice by end of week.</p>
              <p className="text-gray-700 mb-4">Thanks for working together!</p>
              <p className="text-gray-700">[Your name]</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mt-8">
            <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
            <p className="text-blue-800">If you type it more than twice, template it.</p>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mt-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The 2-Hour Email Mistake</p>
            <p className="text-red-800">
              I typed the same proposal email 20 times. Slight variations each time. Took 2 hours total. Templated it. Now it takes 5 minutes per client. I wasted time I didn't have to waste.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: The 5-Hour Weekly Saving</p>
            <p className="text-green-800">
              Sarah's template library: 10 emails. Uses 3-5 per week depending on project stage. Without templates: 10 minutes per email = 50 minutes/week. With templates: 1 minute per email (customize + send). Saves 45 minutes/week × 52 weeks = 39 hours/year. That's £1,950 in billable time.
            </p>
          </div>
        </div>
      </div>

      {/* THE DOCUMENTATION SYSTEM */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Documentation System: What to Track</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Document</h3>
          <p className="text-gray-700 mb-6">
            Don't document everything. Document what protects you. Document what you reference later.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-bold text-gray-900 mb-2">✓ DO Document:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Client decisions: What they chose and why</li>
                <li>— Project scope: What's included and what's not</li>
                <li>— Key dates: Deadlines, milestones, delivery date</li>
                <li>— Payment terms: Invoice date, amount, payment method</li>
                <li>— Scope changes: If client asks for something extra</li>
                <li>— Budget changes: If price changes mid-project</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded border border-red-200">
              <p className="font-bold text-gray-900 mb-2">✗ DON'T Document:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Every email: Waste of time</li>
                <li>— Every call: Unless it's a decision</li>
                <li>— Internal debates: Nobody cares</li>
                <li>— Casual chats: Just decisions matter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Documentation Storage</h3>
          <p className="text-gray-700 mb-6">Super simple structure:</p>

          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-6 border border-gray-200">
            <p className="text-gray-700">Google Drive/</p>
            <p className="text-gray-700 ml-4">└─ Clients/</p>
            <p className="text-gray-700 ml-8">├─ [Client Name 1]/</p>
            <p className="text-gray-700 ml-12">│   ├─ Scope.md</p>
            <p className="text-gray-700 ml-12">│   ├─ Decisions.md</p>
            <p className="text-gray-700 ml-12">│   ├─ Timeline.md</p>
            <p className="text-gray-700 ml-12">│   └─ Invoices/</p>
            <p className="text-gray-700 ml-8">└─ [Client Name 2]/</p>
            <p className="text-gray-700 ml-12">    └─ ...</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
            <p className="text-blue-800">If a client disputes it later, document it now. If not, skip it.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Decision Log Format</h3>
          <p className="text-gray-700 mb-4">
            Create a "Decisions.md" file for each client. Use this format:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm border border-gray-200">
            <p className="text-gray-700 mb-4">## Client Name — Decision Log</p>
            <p className="text-gray-700 mb-2">### Decision 1</p>
            <p className="text-gray-700 mb-2">Date: 2026-03-20</p>
            <p className="text-gray-700 mb-2">Decision: Homepage will have 3 sections, not 5.</p>
            <p className="text-gray-700 mb-2">Reason: Faster delivery, better UX.</p>
            <p className="text-gray-700 mb-2">Impact: Saves 1 week, improves load time by 40%.</p>
            <p className="text-gray-700 mb-4">Who approved: Alex (client)</p>

            <p className="text-gray-700 mb-2">### Decision 2</p>
            <p className="text-gray-700 mb-2">Date: 2026-03-22</p>
            <p className="text-gray-700 mb-2">Decision: Delay launch to April 5 instead of March 28.</p>
            <p className="text-gray-700 mb-2">Reason: Client asked for testimonials section (out of scope).</p>
            <p className="text-gray-700 mb-2">Impact: +£500 change order approved.</p>
            <p className="text-gray-700">Who approved: Alex (client)</p>
          </div>
        </div>

        {/* Anti-Example */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
          <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The £1,000 Lost to Bad Memory</p>
          <p className="text-red-800">
            I had a scope dispute with a client. They claimed I agreed to 5 sections. I said 3. No documentation. No log. Went back and forth for a month. I lost the argument and spent £1,000 redoing work. If I'd logged the decision: "You chose 3 sections on March 20." They'd have paid extra.
          </p>
        </div>

        {/* Real Example */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <p className="text-sm font-bold text-green-900 mb-2">Real Example: The £500 Made from Documentation</p>
          <p className="text-green-800">
            I log every client decision in a Google Doc. Had a scope question mid-project. Client asked for changes. I showed the log: "You chose 3 sections on March 20." They acknowledged it. Wanted the change anyway. I sent a change order for £500. They paid. I've made £2,000+ from similar documentation disputes.
          </p>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Knowledge Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good System ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Tools:</strong> Google Docs + Google Drive</p>
                <p><strong>Time invested:</strong> 2-3 hours initial setup, 15 mins/week maintenance</p>
                <p><strong>SOPs created:</strong> 5-10 core SOPs</p>
                <p><strong>Templates:</strong> 6-10 email templates</p>
                <p><strong>Documentation:</strong> Decision logs per client</p>
                <p><strong>Savings:</strong> 5 hours/week</p>
                <p><strong>Cost:</strong> £0</p>
                <p><strong>Result:</strong> Never start from scratch again. Consistent delivery. Scope disputes won.</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad System ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Tools:</strong> Everything in your head</p>
                <p><strong>Time invested:</strong> 0 hours (short term) = 50 hours/week later</p>
                <p><strong>SOPs created:</strong> 0</p>
                <p><strong>Templates:</strong> 0</p>
                <p><strong>Documentation:</strong> Email threads only</p>
                <p><strong>Waste:</strong> 5 hours/week reinventing</p>
                <p><strong>Cost:</strong> Countless hours lost</p>
                <p><strong>Result:</strong> Constant friction. Scope disputes lost. Proposals from scratch every time.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule Number One:</p>
            <p className="text-gray-700 text-lg">
              If you don't have templates, you're typing the same thing 10+ times per week. That's not efficiency. That's punishment.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-purple-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Step</h2>
          <p className="text-lg opacity-90 mb-8">
            This week (takes 2 hours):
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Create your first SOP for your onboarding process (30 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Copy the 6 email templates into your Google Docs (30 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Create a "Decisions.md" file for your current clients (30 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Document 3 decisions you've made this month (30 minutes)</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            Done. Your knowledge system exists. Now maintain it.
          </p>

          <div className="bg-purple-700 rounded-lg p-6 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Download the SOP Template (Google Doc)</p>
            <p className="text-sm opacity-90">Use this pre-built template. Just customize for your business.</p>
          </div>
        </div>
      </div>

      {/* RELATED & WARNINGS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/systems/business-operations">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Business Operations</h3>
              <p className="text-gray-600 text-sm">Document your financial decisions the same way. Invoicing, payment terms, expense tracking.</p>
            </div>
          </Link>

          <Link href="/systems/client-management">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Client Management</h3>
              <p className="text-gray-600 text-sm">Store client decisions in your tracking system. Link SOPs to your workflows.</p>
            </div>
          </Link>

          <Link href="/systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">All Systems</h3>
              <p className="text-gray-600 text-sm">Knowledge Systems is the final pillar. See how it connects to everything else.</p>
            </div>
          </Link>

          <Link href="/marketing/content-marketing">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Content Marketing</h3>
              <p className="text-gray-600 text-sm">Turn your SOPs into content. Repurpose templates into blog posts and guides.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Fall Into the Complexity Trap</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't perfect your SOPs.</strong> A 70% SOP used today beats a 100% SOP written next month.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't create 50 templates.</strong> Start with 6. Add as you need.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't log everything.</strong> Just decisions. Just scope. Just amounts.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't use complex tools.</strong> Google Docs works. Notion/Confluence is overkill.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't wait for the perfect system.</strong> Build it as you go. Month 1: SOPs. Month 2: Templates. Month 3: Documentation.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: The Weekly Audit</h3>
          <p className="text-gray-700 mb-3">
            Every Friday, ask yourself: "What did I do this week that I could SOP? What did I type twice that I should template? What client decision did I forget to log?"
          </p>
          <p className="text-gray-700">
            Add one new SOP, one new template, and update decision logs. Takes 15 minutes. Compounds to 50+ SOPs in a year.
          </p>
        </div>
      </div>
    </main>
  );
}
