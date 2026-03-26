import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Client Management for Solopreneurs: The 3-Column System | OneFoundr',
  description: 'Track 30 clients without a CRM. One Google Sheet. 5 minutes/day. The Solo Client System—spreadsheet + follow-up automation that actually works.',
};

export default function ClientManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/systems" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-6 inline-block">
            ← Back to Systems Hub
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Client Management for Solopreneurs:<br />The 3-Column System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track 30 clients without a CRM. One spreadsheet. 5 minutes/day.
          </p>
          <div className="bg-white border-l-4 border-blue-600 p-6">
            <p className="text-lg text-gray-800 italic">
              "I tried Salesforce. Spent 40 hours setting it up. Used it 3 times. I switched to a Google Sheet. Set it up in 30 minutes. Use it 3 times/day. The best CRM is the one you'll actually use."
            </p>
          </div>
        </div>
      </div>

      {/* THE CRM MYTH */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why CRMs Don't Work for Solos</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Pipeline" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                CRMs force you into pipeline stages: Lead → Qualified → Proposal → Won → Customer. This is designed for teams with a sales manager tracking 100 leads. You have one person and 10-30 clients. Your stages are simpler: "Not a client" → "Client" → "Past client." That's it. When you force your reality into Salesforce's framework, you waste time fighting the software instead of fighting for clients.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Feature Bloat" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                CRMs have 50 features. You use 3: tracking who you talked to, when you talked to them, and what happens next. Everything else—custom fields, pipeline automation, sales forecasting, territory management—is weight you're carrying for no reason. You're paying for complexity you don't need.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Time Suck" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                Updating a CRM takes 10 minutes per client. You have 20 clients. That's 200 minutes (3+ hours) of data entry per week. Updating a spreadsheet takes 30 seconds per client. That's 10 minutes per week. You just saved 3 hours. What would you do with 3 extra hours per week?
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Cost" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                CRMs cost £50-200/month. Google Sheets costs £0. If you use a CRM for 2 years and spend 30 minutes/day updating it, you've paid £1,200 and lost 360 hours of your life. Your spreadsheet costs £0 and takes 5 minutes/day. The choice is obvious.
              </p>
            </div>
          </div>

          {/* Solo Rule */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              If you're spending more than 5 minutes/day on client management, your system is too complex.
            </p>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The CRM That Never Gets Used</p>
            <p className="text-red-800">
              I paid £100/month for HubSpot. Spent 20 hours learning it. Set up custom fields, automation, and pipelines. Used it for one week. Then went back to email and spreadsheets because it was faster. Stayed subscribed for 6 months because I felt guilty. Total waste: £600 and 20 hours.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: Sarah's 25-Client Sheet</p>
            <p className="text-green-800">
              Sarah has 25 active clients + 80 past clients. She uses one Google Sheet with columns: Name, Status, Last Contact, Next Step, Value. She updates it every morning in 3 minutes while drinking coffee. She never loses a client, never forgets a follow-up, and always knows who to prioritize. No CRM. No complexity. No waste.
            </p>
          </div>
        </div>
      </div>

      {/* THE SOLO CLIENT SYSTEM - CORE SECTION */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The 3-Column Spreadsheet</h2>
          <p className="text-lg text-gray-700 mb-12">
            This is the complete Solo Client System. It's simple by design. No more, no less.
          </p>

          {/* Column 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Column 1: Status (Dropdown)</h3>
            <p className="text-gray-700 mb-6">
              This is your first filter. Every client falls into one of three buckets:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-1">Lead</p>
                <p className="text-gray-700">Not yet a client. Had a conversation (email, call, DM). Might become a client.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-gray-900 mb-1">Active</p>
                <p className="text-gray-700">Paying client. Currently working together on a project or ongoing service.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                <p className="font-bold text-gray-900 mb-1">Past</p>
                <p className="text-gray-700">Completed project. Potential referral source. Should re-engage every 90 days.</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If last contact is {'>'}30 days ago, they're getting cold. Move to Past or delete if they never convert.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Column 2: Last Contact (Date)</h3>
            <p className="text-gray-700 mb-4">
              When did you last talk to this person? Email, call, DM, whatever. Just track it.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-gray-700"><strong>Format:</strong> YYYY-MM-DD (so sorting works automatically)</p>
              <p className="text-gray-700"><strong>When to update:</strong> Right after you talk to them (or batch at end of day)</p>
              <p className="text-gray-700"><strong>Example:</strong> 2026-03-26</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Why this matters:</p>
              <p className="text-blue-800">If you sort by this column, you immediately see who's getting cold. Then you know who to follow up with. This one column prevents clients from slipping through cracks.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Column 3: Next Step (Text)</h3>
            <p className="text-gray-700 mb-4">
              What needs to happen next? Write it in plain language.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-gray-700"><strong>Examples:</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                <li>Send proposal</li>
                <li>Schedule kickoff</li>
                <li>Wait for feedback</li>
                <li>Check in Friday</li>
                <li>Send invoice</li>
                <li>Follow up re: referrals</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Why this matters:</p>
              <p className="text-blue-800">This keeps you focused. Every morning you look at the spreadsheet and see exactly what to do. No decision fatigue. No forgotten next steps.</p>
            </div>
          </div>

          {/* Bonus Column 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bonus Column 4: Value (£)</h3>
            <p className="text-gray-700 mb-4">
              Total contract value (or estimated value for Leads). Helps you prioritize.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-gray-700"><strong>Example values:</strong> £1,500 | £5,000 | £0 (not yet quoted)</p>
              <p className="text-gray-700"><strong>Purpose:</strong> Sort by Value to see your most valuable clients. Prioritize accordingly.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <p className="text-sm font-bold text-green-900">Solo Rule:</p>
              <p className="text-green-800">If a Lead is worth £0 and you haven't talked in {'>'}14 days, delete them. Focus on what matters.</p>
            </div>
          </div>

          {/* The Setup */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Setup (30 minutes)</h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">1.</span>
                <span>Open Google Sheets (sheets.google.com)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">2.</span>
                <span>Create a new blank spreadsheet</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">3.</span>
                <span>Add column headers: <strong>Name | Status | Last Contact | Next Step | Value</strong></span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">4.</span>
                <span>Click Status column → Data → Data validation → Create dropdown with: Lead, Active, Past</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">5.</span>
                <span>Format Last Contact column as Date (YYYY-MM-DD)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">6.</span>
                <span>Add row 1 filter (Data → Create a filter)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">7.</span>
                <span>Add your first 5 clients</span>
              </li>
            </ol>
          </div>

          {/* The Daily Update */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Daily Update (3-5 minutes)</h3>
            <p className="text-gray-700 mb-6">Every morning (or batch at end of day):</p>
            <ol className="space-y-4 text-gray-700 mb-8">
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">1.</span>
                <span>Update Last Contact for anyone you talked to yesterday</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">2.</span>
                <span>Update Next Step for today's priorities</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">3.</span>
                <span>Filter by Status = Lead, sort by Last Contact, check for anyone {'>'}14 days old (follow up or delete)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">4.</span>
                <span>Filter by Status = Past, sort by Last Contact, check for anyone {'>'}90 days old (follow up with referral ask)</span>
              </li>
            </ol>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If it takes more than 5 minutes, you're over-updating. This is a tracking system, not a diary. Keep it simple.</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMMUNICATION LOG */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Communication Log: Proof You Delivered</h2>
        
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Track Every Interaction?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-gray-900">Remember what you said</p>
                <p className="text-gray-600">6 months later, client asks "what was our timeline again?" You have the proof.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-gray-900">Track follow-ups</p>
                <p className="text-gray-600">See which clients owe you responses. Who went silent. Who's moving forward.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-gray-900">Prove you delivered</p>
                <p className="text-gray-600">Scope dispute? You have evidence of what you promised and when.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold text-gray-900">Refer back</p>
                <p className="text-gray-600">Client claims they never said X. You have the log entry. Saves thousands.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Set Up the Log</h3>
          <p className="text-gray-700 mb-6">
            Create a second tab in your spreadsheet called "Communication Log". Columns:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 px-3 font-bold text-gray-900">Client</th>
                  <th className="text-left py-2 px-3 font-bold text-gray-900">Date</th>
                  <th className="text-left py-2 px-3 font-bold text-gray-900">Type</th>
                  <th className="text-left py-2 px-3 font-bold text-gray-900">Summary</th>
                  <th className="text-left py-2 px-3 font-bold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-gray-700">Alex</td>
                  <td className="py-3 px-3 text-gray-700">2026-03-26</td>
                  <td className="py-3 px-3 text-gray-700">Email</td>
                  <td className="py-3 px-3 text-gray-700">Sent proposal (scope: 40 hours)</td>
                  <td className="py-3 px-3 text-gray-700">Follow up Monday</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-3 text-gray-700">Jamie</td>
                  <td className="py-3 px-3 text-gray-700">2026-03-25</td>
                  <td className="py-3 px-3 text-gray-700">Call</td>
                  <td className="py-3 px-3 text-gray-700">Kickoff call. Launch date: April 1. Budget approved.</td>
                  <td className="py-3 px-3 text-gray-700">Send SOW</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-gray-700">Sam</td>
                  <td className="py-3 px-3 text-gray-700">2026-03-24</td>
                  <td className="py-3 px-3 text-gray-700">DM</td>
                  <td className="py-3 px-3 text-gray-700">Asked about timeline. No budget yet.</td>
                  <td className="py-3 px-3 text-gray-700">None yet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-sm font-bold text-blue-900">The 10-Second Rule:</p>
            <p className="text-blue-800">Log the interaction within 10 seconds. Or batch 5 logs at end of day (takes 2 minutes). Either way, it's done that day.</p>
          </div>
        </div>

        {/* Anti-Example */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
          <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The £1,000 Lost to Bad Memory</p>
          <p className="text-red-800">
            I had a dispute with a client about scope. They claimed I said the project was £2,000 fixed. I said it was hourly. No log. No proof. We went back and forth for a month. I gave in and lost £1,000. If I'd logged that call, I would have had evidence: "Scope: Hourly at £85/hr. Estimated 20 hours = ~£1,700."
          </p>
        </div>

        {/* Real Example */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <p className="text-sm font-bold text-green-900 mb-2">Real Example: The Log That Paid for Itself</p>
          <p className="text-green-800">
            I log every DM and email. Had a client dispute about delivery date. I showed the log: "2026-03-15: Confirmed delivery date is Friday, March 20." One screenshot. They paid in full. Three other disputes that year were resolved the same way. The log is now my insurance policy.
          </p>
        </div>
      </div>

      {/* FOLLOW-UP SYSTEM */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Follow-Up System: Automate Revenue</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The 30-14-7 Rule</h3>
            <p className="text-gray-700 mb-8">
              This is the only rule you need. Follow this, and you'll never lose a client:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-bold text-gray-900 mb-2">30-Day Rule: Past Clients</p>
                <p className="text-gray-700">Any Past client not contacted in 30 days → Follow up. They're cold. Time to re-engage or give up.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-bold text-gray-900 mb-2">14-Day Rule: Leads</p>
                <p className="text-gray-700">Any Lead not contacted in 14 days → Follow up. They're losing interest. Time to pitch or delete.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-2">7-Day Rule: Active Clients</p>
                <p className="text-gray-700">Any Active client not updated in 7 days → Check in. Send progress update or ask if they need anything.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Implement</h3>
            <p className="text-gray-700 mb-4">
              <strong>Option 1: Manual (Easiest)</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Every Monday morning, sort your spreadsheet by Last Contact. Anyone past the threshold gets a follow-up that day. Takes 10 minutes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Option 2: Calendar Reminder</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Set recurring reminders: Monday 9am "Follow up with cold Leads." Sunday 5pm "Check 30-day Past clients." Done.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Option 3: Automation (Zapier)</strong>
            </p>
            <p className="text-gray-700">
              \"If Last Contact date in Sheet 1 is {'>'}30 days, add to Slack reminder.\" (Requires Zapier setup, but ~£15/month)
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Follow-Up Email Template (30 seconds to write)</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Use this for any Lead or Past client. Keep it short. No pitch.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-6 border border-gray-200">
              <p className="mb-2"><strong>Subject:</strong> Quick check-in</p>
              <p className="mb-4"></p>
              <p className="mb-2">Hey [Name],</p>
              <p className="mb-2"></p>
              <p className="mb-2">Haven't talked in a while. How's [project/business] going?</p>
              <p className="mb-2"></p>
              <p className="mb-2">If you need anything, just reply.</p>
              <p className="mb-2"></p>
              <p>[Your name]</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">Follow-up emails should take 10 seconds to write. If you're spending time on the copy, you're pitching, not following up. Just check in.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Referral Ask (For Past Clients Only)</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Past clients are your #1 source of referrals. Ask every 90 days. This email works:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-6 border border-gray-200">
              <p className="mb-2"><strong>Subject:</strong> Quick favor?</p>
              <p className="mb-4"></p>
              <p className="mb-2">Hey [Name],</p>
              <p className="mb-2"></p>
              <p className="mb-2">Hope you're well. Quick question: do you know anyone else dealing with [problem you solve]?</p>
              <p className="mb-2"></p>
              <p className="mb-2">I'm excellent at helping with [specific outcome], and if you can intro me, I'd be happy to help them.</p>
              <p className="mb-2"></p>
              <p className="mb-2">No pressure, but if someone comes to mind, just hit reply.</p>
              <p className="mb-2"></p>
              <p>[Your name]</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <p className="text-sm font-bold text-green-900">Real math:</p>
              <p className="text-green-800">I follow up with 50 Past clients every 90 days. 30% reply. 10% refer. That's 1-2 referrals. At £2k/project, that's £2-4k from 10 minutes of emails. ROI is 200x.</p>
            </div>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The £60k Left on the Table</p>
            <p className="text-red-800">
              I never followed up with Past clients. Just moved to the next project. After 3 years, I realized I'd worked with 20 past clients and never asked for referrals. Never checked in. 20 clients × £3k average value × even 10% referral conversion = £6k in potential new revenue. Over my career, I've left ~£60k on the table by not following up.
            </p>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Client Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Good System ✓</h3>
            <div className="space-y-3 text-green-900 mb-6">
              <p><strong>Tool:</strong> Google Sheet</p>
              <p><strong>Time/day:</strong> 3-5 minutes</p>
              <p><strong>Clients tracked:</strong> 30+</p>
              <p><strong>Follow-ups:</strong> 1-2/week (automatic)</p>
              <p><strong>Outcome:</strong> Never lose a client. 2 referrals/month.</p>
              <p><strong>Cost:</strong> £0</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6">Bad System ✗</h3>
            <div className="space-y-3 text-red-900 mb-6">
              <p><strong>Tool:</strong> Salesforce "high-end CRM"</p>
              <p><strong>Time/day:</strong> 30+ minutes</p>
              <p><strong>Clients tracked:</strong> 30 (but only 60% updated)</p>
              <p><strong>Follow-ups:</strong> 0 (too complex to automate)</p>
              <p><strong>Outcome:</strong> 5 clients slip through cracks. 0 referrals. Feel guilty.</p>
              <p><strong>Cost:</strong> £150/month</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
          <p className="text-gray-700 text-lg">
            The best system is the one you'll use. Not the one with the most features. Not the prettiest interface. The one you actually open every day.
          </p>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Step</h2>
          <p className="text-lg opacity-90 mb-8">
            Right now (takes 5 minutes):
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Open Google Sheets</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Create columns: Name | Status | Last Contact | Next Step | Value</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Add your last 5 clients</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Set a calendar reminder: "Update client sheet" every Sunday 5pm</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            Done. Your system is now better than 90% of solopreneurs.
          </p>

          <div className="bg-blue-700 rounded-lg p-6 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Download Template (Google Sheets)</p>
            <p className="text-sm opacity-90">Use this pre-built spreadsheet. Just add your clients and go.</p>
          </div>
        </div>
      </div>

      {/* RELATED & WARNINGS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/systems/project-delivery">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Project Delivery System</h3>
              <p className="text-gray-600 text-sm">Once you have clients, how do you deliver consistently? See the next system.</p>
            </div>
          </Link>

          <Link href="/tools/communication-scheduling">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Communication Tools</h3>
              <p className="text-gray-600 text-sm">What tools support this system? Email, scheduling, video calls.</p>
            </div>
          </Link>

          <Link href="/sales/natural-selling">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">How to Get Clients First</h3>
              <p className="text-gray-600 text-sm">This system assumes you have clients. Start here if you don't.</p>
            </div>
          </Link>

          <Link href="/systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">All Systems</h3>
              <p className="text-gray-600 text-sm">Back to the Systems pillar. See client management's place in the bigger picture.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Fall Into the Complexity Trap</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't add columns.</strong> More data ≠ better decisions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't add complexity.</strong> This system works because it's simple.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't integrate with other tools.</strong> Google Sheets + manual updates = it works.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't build custom solutions.</strong> Use the spreadsheet as-is for 6 months. Then, only if you feel the need, iterate.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
