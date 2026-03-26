import Link from 'next/link';

export const metadata = {
  title: 'Free Communication Tools: £0/Month to £5k/Month | OneFoundr',
  description: 'Gmail, Google Calendar, Calendly free, Zoom free, Loom free. All you need for your first 10 clients. Complete setup guide.',
  openGraph: {
    title: 'Free Communication Tools: £0/Month to £5k/Month',
    description: 'Everything you need at £0/month. Gmail, Calendar, Calendly, Zoom, Loom. Setup in 30 minutes.',
  },
};

export default function FreeCommunicationToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/tools" className="text-blue-600 hover:underline text-sm">
            ← Back to Tools Hub
          </Link>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Free Communication Tools: £0/Month to £5k/Month
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Gmail, Google Calendar, Calendly free, Zoom free, Loom free. All you need for your first 10 clients. Setup in 30 minutes. Zero cost.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-blue-900 font-semibold mb-0">
              "I spent £50/month on tools before I had revenue. Switched to free. Kept free until £5k/month. No difference. The tools don't matter. The work matters."
            </p>
          </div>
        </section>
      </div>

      {/* THE FREE TOOL MYTH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Free Tools Are Enough</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Four Traps</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">1. The "Professional" Trap</p>
                <p className="text-gray-700">
                  You think "I need a professional email tool." Gmail is professional. gmail.com is amateur. yourname@yourbusiness.com is professional. Cost: £10/year for the domain. That's it.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">2. The "Paid is Better" Trap</p>
                <p className="text-gray-700">
                  Paid tools add features you don't use. Calendar features? Google Calendar has them. Email templates? Gmail has them. Zoom recording? Free Zoom records. You're paying for features you'll never touch.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">3. The "Scale" Trap</p>
                <p className="text-gray-700">
                  You think "I'll need better tools when I scale." Wrong. You scale clients, not tools. When you hit £5k/month and have 10 clients, you'll realize the free tools still work. By then, you'll have revenue to buy better tools if you actually need them.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 text-lg mb-2">4. The "Look Legit" Trap</p>
                <p className="text-gray-700">
                  You think using Zoom shows you're legit. You think using a custom email address shows you're legit. Legitimacy comes from results. If your client got paid, they don't care if you used Zoom or Google Meet. They care that you delivered.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-6">
              <strong>The Math:</strong> If you have 3 clients at £500 each (£1,500/month revenue), paying £50/month for tools is 3.3% of revenue. Waste. If you have 10 clients at £500 each (£5,000/month revenue), that's 1% of revenue. Still not worth it if free works.
            </p>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The £50/Month Before Revenue</p>
            <p className="text-red-800">
              I paid £50/month for email marketing, Calendly, and Zoom before I had any clients. Spent 6 months at £0 revenue, £300 in tools. First year, made £3k. That £300 was 10% of my annual revenue. I could have eaten on that.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: Free Tools Until £5k/Month</p>
            <p className="text-green-800">
              Tom used free tools for his entire first year. Gmail, Calendar, Calendly, Zoom, Loom. Built to £5k/month revenue with 10 clients. Never had a single complaint about his tools. His clients didn't care. They cared about the work. He's still using free tools.
            </p>
          </div>
        </div>
      </div>

      {/* THE FREE TOOL STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Free Tool Stack: What You Actually Need</h2>

        {/* GMAIL */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gmail (Free)</h3>
          <p className="text-gray-700 mb-6">
            The center of your communication. 15GB storage, custom domain support, filters, labels, templates. Everything you need.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 text-lg mb-2">Why Gmail</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 15GB storage (enough for years of emails)</li>
                <li>— Custom domain support (yourname@yourbusiness.com)</li>
                <li>— Filters and labels for organization</li>
                <li>— Email templates (formerly Canned Responses)</li>
                <li>— Integrates with Calendar, Calendly, Zoom</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (10 minutes):</p>
              <div className="space-y-3 font-mono text-sm text-gray-700">
                <p><strong>Step 1:</strong> Buy domain at Google Domains (£10/year or cheaper)</p>
                <p><strong>Step 2:</strong> Set up Gmail with custom domain</p>
                <p><strong>Step 3:</strong> Create signature: [Your Name] | [Business] | [Calendly Link]</p>
                <p><strong>Step 4:</strong> Create filters: All client emails → Label "Clients"</p>
                <p><strong>Step 5:</strong> Create templates for common replies</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Check email 2x/day: 11am and 4pm</li>
                <li>— Use templates for common replies (30 seconds)</li>
                <li>— Archive everything else immediately</li>
                <li>— Clients label keeps important emails visible</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If you're checking email more than 2x/day, you're avoiding real work.</p>
            </div>
          </div>
        </div>

        {/* GOOGLE CALENDAR */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Calendar (Free)</h3>
          <p className="text-gray-700 mb-6">
            Time blocking. The only way to control your schedule. Integrates perfectly with Gmail, Calendly, Zoom.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 text-lg mb-2">Why Google Calendar</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Time blocking to control your day</li>
                <li>— Integrates with Gmail (events in emails)</li>
                <li>— Integrates with Calendly (auto-sync)</li>
                <li>— Integrates with Zoom (meeting links auto-add)</li>
                <li>— Color coding for different activities</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <div className="space-y-3 font-mono text-sm text-gray-700">
                <p><strong>Step 1:</strong> Create calendar called "Clients"</p>
                <p><strong>Step 2:</strong> Set working hours: 9am-5pm</p>
                <p><strong>Step 3:</strong> Block deep work: 2pm-4pm daily</p>
                <p><strong>Step 4:</strong> Block admin: 4pm-4:30pm daily</p>
                <p><strong>Step 5:</strong> Connect Calendly (auto-sync your availability)</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Color Coding System:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Green = Client call (1-2 hours available)</li>
                <li>— Blue = Project deadline (blocked time)</li>
                <li>— Red = Personal (not open to clients)</li>
                <li>— Gray = Deep work (no interruptions)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If your calendar isn't time-blocked, you're not in control of your time.</p>
            </div>
          </div>
        </div>

        {/* CALENDLY */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Calendly Free</h3>
          <p className="text-gray-700 mb-6">
            One event type, unlimited meetings, auto-syncs with your Google Calendar. Never manually schedule again.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 text-lg mb-2">Why Calendly Free</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 1 event type (perfect for solopreneurs)</li>
                <li>— Unlimited meetings on that event</li>
                <li>— Auto-syncs with Google Calendar</li>
                <li>— No more "What time works for you?" emails</li>
                <li>— Clients book at their convenience</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <div className="space-y-3 font-mono text-sm text-gray-700">
                <p><strong>Step 1:</strong> Sign up at Calendly.com</p>
                <p><strong>Step 2:</strong> Connect your Google Calendar</p>
                <p><strong>Step 3:</strong> Create event: "30-min call"</p>
                <p><strong>Step 4:</strong> Add description: "Quick chat about your project."</p>
                <p><strong>Step 5:</strong> Add 15-min buffer before/after (breathing room)</p>
                <p><strong>Step 6:</strong> Copy link: calendly.com/yourname/30min</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Send Calendly link in DMs and emails</li>
                <li>— Never schedule manually</li>
                <li>— Let them book their own time</li>
                <li>— Auto-adds to your Google Calendar</li>
                <li>— Saves 5 minutes per call</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If you're scheduling calls manually, you're wasting time that compounds.</p>
            </div>
          </div>
        </div>

        {/* ZOOM FREE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Zoom Free</h3>
          <p className="text-gray-700 mb-6">
            40-minute group call limit (perfect for 1-on-1 calls with solo clients). Records locally to your computer.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 text-lg mb-2">Why Zoom Free</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 40-min limit on group calls (solo calls unlimited)</li>
                <li>— Records video locally (you control the files)</li>
                <li>— Screen sharing included</li>
                <li>— HD quality</li>
                <li>— Waiting room available</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <div className="space-y-3 font-mono text-sm text-gray-700">
                <p><strong>Step 1:</strong> Download Zoom app</p>
                <p><strong>Step 2:</strong> Configure waiting room: "Hey! I'll let you in at our call time."</p>
                <p><strong>Step 3:</strong> Set recording to local drive</p>
                <p><strong>Step 4:</strong> Test audio/video</p>
                <p><strong>Step 5:</strong> Create a "Calls" folder in Google Drive for recordings</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Start call on time (clients value punctuality)</li>
                <li>— Record if you want a reference</li>
                <li>— End at 38 min so buffer matches Calendly</li>
                <li>— Upload recording to Google Drive folder</li>
                <li>— Share recording link only if relevant</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If calls run over 40 min, you're chatting, not working.</p>
            </div>
          </div>
        </div>

        {/* LOOM */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Loom Free</h3>
          <p className="text-gray-700 mb-6">
            25 videos/month, 5-minute limit per video, screen + camera recording. Async communication at scale.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 text-lg mb-2">Why Loom Free</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 25 videos/month (enough for solopreneurs)</li>
                <li>— 5-min max per video (forces clarity)</li>
                <li>— Screen recording + camera overlay</li>
                <li>— Loom hosts the videos (no storage needed)</li>
                <li>— Explain something once, use 10 times</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <div className="space-y-3 font-mono text-sm text-gray-700">
                <p><strong>Step 1:</strong> Install Loom Chrome extension</p>
                <p><strong>Step 2:</strong> Test: Record a 5-min video of yourself explaining your services</p>
                <p><strong>Step 3:</strong> Copy the shareable link</p>
                <p><strong>Step 4:</strong> Create a "Loom Videos" spreadsheet to track them</p>
                <p><strong>Step 5:</strong> Set default title: "[Client Name] — [Topic]"</p>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Use Cases:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Send video proposals instead of writing</li>
                <li>— Show mockups/prototypes to clients</li>
                <li>— Explain complex points (5 min max)</li>
                <li>— Record your SOP (save as reference)</li>
                <li>— Send project update videos</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-3">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Record once, send 10 times (save 40 min of explanation time)</li>
                <li>— Embed link in client emails</li>
                <li>— Use for async (no scheduled call needed)</li>
                <li>— Track videos in spreadsheet for reuse</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If you explain something 2x, Loom it. Saves dozens of hours.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 30-MINUTE SETUP GUIDE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">30-Minute Complete Setup</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <p className="text-gray-700 mb-8">
              Everything you need, fully set up, in 30 minutes. Follow this order.
            </p>

            <div className="space-y-8">
              {/* GMAIL SETUP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-blue-600">1.</span>
                  <h3 className="text-xl font-bold text-gray-900">Gmail (10 minutes)</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Buy domain at Google Domains (£10/year)</li>
                    <li>2. Set up Gmail with custom domain</li>
                    <li>3. Create signature with your Calendly link</li>
                    <li>4. Create filter: All from @yourdomain → "Clients" label</li>
                    <li>5. Create 3 email templates (welcome, proposal, follow-up)</li>
                  </ol>
                </div>
              </div>

              {/* CALENDAR SETUP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-blue-600">2.</span>
                  <h3 className="text-xl font-bold text-gray-900">Google Calendar (5 minutes)</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Create calendar: "Clients"</li>
                    <li>2. Set working hours: 9am-5pm</li>
                    <li>3. Block deep work: 2pm-4pm (green)</li>
                    <li>4. Block admin: 4pm-4:30pm (yellow)</li>
                    <li>5. Leave 1-2 hours open for client calls</li>
                  </ol>
                </div>
              </div>

              {/* CALENDLY SETUP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-blue-600">3.</span>
                  <h3 className="text-xl font-bold text-gray-900">Calendly (5 minutes)</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Sign up at Calendly.com</li>
                    <li>2. Connect Google Calendar</li>
                    <li>3. Create event: "30-min call"</li>
                    <li>4. Add 15-min buffer before/after</li>
                    <li>5. Copy your Calendly link and add to Gmail signature</li>
                  </ol>
                </div>
              </div>

              {/* ZOOM SETUP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-blue-600">4.</span>
                  <h3 className="text-xl font-bold text-gray-900">Zoom (5 minutes)</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Download Zoom app</li>
                    <li>2. Enable waiting room</li>
                    <li>3. Set recording to local drive</li>
                    <li>4. Test audio/video</li>
                    <li>5. Create "Calls" folder in Google Drive</li>
                  </ol>
                </div>
              </div>

              {/* LOOM SETUP */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-blue-600">5.</span>
                  <h3 className="text-xl font-bold text-gray-900">Loom (5 minutes)</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Install Loom Chrome extension</li>
                    <li>2. Record a test video (30 seconds)</li>
                    <li>3. Copy the link</li>
                    <li>4. Create "Loom Videos" spreadsheet</li>
                    <li>5. You're done</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-8">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If setup takes more than 30 minutes, you're over-engineering. Stop. Use what you have.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Solo Workflows: How It All Works Together</h2>

        {/* WORKFLOW 1 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: New Lead to Booked Call</h3>
          <p className="text-gray-700 mb-6">From first contact to scheduled call. Total time: 5 minutes.</p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>Step 1: Lead messages you on DM</strong></p>
              <p className="ml-4 text-gray-700">"Hey, interested in your services. When can we chat?"</p>
              <p className="mt-4"><strong>Step 2: You reply with Gmail template</strong></p>
              <p className="ml-4 text-gray-700">"Hey [Name], thanks for reaching out. Here's my calendar: [Calendly link]. Pick a time that works."</p>
              <p className="mt-4"><strong>Step 3: They book on Calendly</strong></p>
              <p className="ml-4 text-gray-700">Auto-syncs to your Google Calendar. You get notification.</p>
              <p className="mt-4"><strong>Step 4: Hour before call, you send Zoom link</strong></p>
              <p className="ml-4 text-gray-700">"Looking forward to our call at [time]. Here's the Zoom link: [link]. I'll have you in the waiting room."</p>
              <p className="mt-4"><strong>Step 5: Call happens on Zoom</strong></p>
              <p className="ml-4 text-gray-700">Record it. You might need reference later.</p>
              <p className="mt-4"><strong>Step 6: After call, follow up</strong></p>
              <p className="ml-4 text-gray-700">"Great chat today. Here's next steps: [email template]. Let me know if questions."</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Time Breakdown:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Read DM: 1 minute</li>
              <li>— Reply: 1 minute (template)</li>
              <li>— Call: 30 minutes</li>
              <li>— Follow-up: 2 minutes (template)</li>
              <li>— Upload recording: 1 minute</li>
              <li>Total: 35 minutes (including the call)</li>
            </ul>
          </div>
        </div>

        {/* WORKFLOW 2 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Project Delivery Start to Finish</h3>
          <p className="text-gray-700 mb-6">From kickoff to invoice. Total time: Depends on project, but admin is under 1 hour.</p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>Step 1: Client emails project brief</strong></p>
              <p className="ml-4 text-gray-700">"Need a new homepage. Here's what I want..."</p>
              <p className="mt-4"><strong>Step 2: You acknowledge (Gmail template)</strong></p>
              <p className="ml-4 text-gray-700">"Got it. I'll get started and have first draft by [date]. I'll record a walkthrough video."</p>
              <p className="mt-4"><strong>Step 3: Add deadline to Google Calendar</strong></p>
              <p className="ml-4 text-gray-700">Blue block on [date] at 4pm "Project Delivery: [Client]"</p>
              <p className="mt-4"><strong>Step 4: Day before deadline, create Loom video</strong></p>
              <p className="ml-4 text-gray-700">Record 5-min walkthrough of the work. "Here's what I built..."</p>
              <p className="mt-4"><strong>Step 5: Send video to client</strong></p>
              <p className="ml-4 text-gray-700">"[Client], here's the first draft. Video walkthrough: [Loom]. Let me know thoughts."</p>
              <p className="mt-4"><strong>Step 6: They reply with feedback</strong></p>
              <p className="ml-4 text-gray-700">"Looks good but change X."</p>
              <p className="mt-4"><strong>Step 7: Iterate and deliver final</strong></p>
              <p className="ml-4 text-gray-700">Send second Loom video with changes. "All set. Ready to go live."</p>
              <p className="mt-4"><strong>Step 8: Send invoice (Gmail template)</strong></p>
              <p className="ml-4 text-gray-700">"Invoice attached for [project]. Amount: £X. Due: [date]."</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Time Breakdown (Admin):</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Read brief: 10 minutes</li>
              <li>— Acknowledge: 2 minutes (template)</li>
              <li>— Record Loom video: 10 minutes</li>
              <li>— Send video: 2 minutes</li>
              <li>— Reply to feedback: 2 minutes</li>
              <li>— Send invoice: 3 minutes (template)</li>
              <li>Total admin: 29 minutes (not including actual work)</li>
            </ul>
          </div>
        </div>

        {/* WORKFLOW 3 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Referral Generation</h3>
          <p className="text-gray-700 mb-6">From project completion to new referral. Total time: 15 minutes spread over 2 weeks.</p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>Step 1: Project completes</strong></p>
              <p className="ml-4 text-gray-700">Send final delivery email</p>
              <p className="mt-4"><strong>Step 2: Week 1 - Send testimonial request (Gmail template)</strong></p>
              <p className="ml-4 text-gray-700">"Project's done! Would love a 2-3 sentence testimonial. What went well?"</p>
              <p className="mt-4"><strong>Step 3: They reply</strong></p>
              <p className="ml-4 text-gray-700">"Great work! You really delivered on time and communicated well."</p>
              <p className="mt-4"><strong>Step 4: Save testimonial</strong></p>
              <p className="ml-4 text-gray-700">Add to Google Doc titled "Testimonials" for website later</p>
              <p className="mt-4"><strong>Step 5: Week 2 - Send referral request (Gmail template)</strong></p>
              <p className="ml-4 text-gray-700">"Do you know anyone else who needs [service]? I help solve [problem]. Open to intros."</p>
              <p className="mt-4"><strong>Step 6: They refer someone</strong></p>
              <p className="ml-4 text-gray-700">"This person might need you: [Name] at [email]"</p>
              <p className="mt-4"><strong>Step 7: Contact referral</strong></p>
              <p className="ml-4 text-gray-700">"Hi [Name], [Past Client] recommended we chat..."</p>
              <p className="mt-4"><strong>Step 8: They book your Calendly</strong></p>
              <p className="ml-4 text-gray-700">Cycle repeats</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Time Breakdown:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Send testimonial request: 1 minute</li>
              <li>— Save testimonial: 1 minute</li>
              <li>— Send referral request: 1 minute</li>
              <li>— Contact referral: 5 minutes</li>
              <li>Total: 8 minutes across 2 weeks</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-8">
          <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
          <p className="text-yellow-800">If a workflow takes more than 30 minutes (not including the actual work), you're doing too many steps. Simplify.</p>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Tool Setups</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good Setup ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Tools:</strong> Gmail + Calendar + Calendly + Zoom + Loom</p>
                <p><strong>Cost:</strong> £0/month (+ £10/year domain)</p>
                <p><strong>Setup time:</strong> 30 minutes</p>
                <p><strong>Clients handled:</strong> 10+</p>
                <p><strong>Client issues:</strong> None (they work perfectly)</p>
                <p><strong>Your headaches:</strong> 0</p>
                <p><strong>Result:</strong> Smooth, scalable, professional.</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad Setup ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Tools:</strong> 8 different paid subscriptions</p>
                <p><strong>Cost:</strong> £50-100/month</p>
                <p><strong>Setup time:</strong> 5+ hours</p>
                <p><strong>Clients handled:</strong> 10 (same as free)</p>
                <p><strong>Client experience:</strong> Identical</p>
                <p><strong>Your headaches:</strong> Managing 8 subscriptions</p>
                <p><strong>Result:</strong> Wasted £600/year for no benefit.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-2">The Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              Free tools work until £5k/month. Don't buy anything before then. The money you "save" isn't worth the complexity you add.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Action</h2>
          <p className="text-lg opacity-90 mb-8">
            This week (takes 30 minutes):
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Buy domain (Google Domains, £10/year) — 2 minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Set up Gmail with custom domain — 5 minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Time block your Google Calendar — 5 minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Set up Calendly and connect Google Calendar — 5 minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">5.</span>
              <span>Install Zoom and Loom — 5 minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">6.</span>
              <span>Create 3 Gmail templates — 3 minutes</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            Done. You have a professional communication stack. Zero cost. Ready for 10+ clients.
          </p>

          <div className="bg-blue-700 rounded-lg p-6 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Download the Free Tool Setup Checklist (Google Doc)</p>
            <p className="text-sm opacity-90">Copy this checklist and check off each step as you go.</p>
          </div>
        </div>
      </div>

      {/* RELATED & WARNINGS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/systems/client-management">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Client Management</h3>
              <p className="text-gray-600 text-sm">Track clients in a spreadsheet. These tools help you communicate with them.</p>
            </div>
          </Link>

          <Link href="/systems/knowledge-systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Knowledge Systems</h3>
              <p className="text-gray-600 text-sm">Use Loom to record your SOPs. Never explain the same thing twice.</p>
            </div>
          </Link>

          <Link href="/tools">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">All Tools</h3>
              <p className="text-gray-600 text-sm">See every tool tier. Understand when to upgrade (spoiler: not for a year).</p>
            </div>
          </Link>

          <Link href="/marketing/content-marketing">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Short-Form Content</h3>
              <p className="text-gray-600 text-sm">Repurpose Loom videos into social content and email sequences.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Upgrade Too Soon</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't pay for email.</strong> Gmail is fine. Custom domain is all you need (£10/year).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't buy Calendly Plus.</strong> The free version does everything. Multiple event types? You don't need them.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't add 10 tools.</strong> Five tools is max. More tools = more complexity. Simpler wins.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade until £5k/month revenue.</strong> Not before. You won't benefit.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't integrate everything.</strong> Keep tools separate. Less vendor lock-in.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: The Weekly Tool Audit</h3>
          <p className="text-gray-700 mb-3">
            Every Friday, spend 2 minutes asking: "Did I use all 5 tools this week? Did they work? Did I complain about any of them?"
          </p>
          <p className="text-gray-700">
            If you're complaining, you have a workflow problem, not a tool problem. Fix the workflow. Don't buy a new tool.
          </p>
        </div>
      </div>
    </main>
  );
}
