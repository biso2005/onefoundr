import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Project Delivery for Solopreneurs: Timeline + Checklist System | OneFoundr',
  description: 'Deliver every project on time. Timeline system, scope management, and pre-delivery checklist. No project management software needed.',
};

export default function ProjectDeliveryPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/systems" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-6 inline-block">
            ← Back to Systems Hub
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Project Delivery for Solopreneurs:<br />Timeline + Checklist System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deliver every project on time without project management software. One timeline. One checklist.
          </p>
          <div className="bg-white border-l-4 border-blue-600 p-6">
            <p className="text-lg text-gray-800 italic">
              "I missed 3 deadlines in one month. Clients were pissed. I built a delivery system in 1 hour. Haven't missed a deadline in 12 months. The system wasn't complex—it was just specific."
            </p>
          </div>
        </div>
      </div>

      {/* WHY PM SOFTWARE FAILS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Project Management Software Fails for Solos</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Overhead" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                Updating Asana takes 15 minutes. You skip it. Then you forget what you did. Then you miss a deadline. Then you blame the software. The software isn't the problem—the overhead is. You spend more time logging work than doing work.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Feature Bloat" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                You use 5% of ClickUp. Custom fields, timeline views, resource allocation, workload balancing—features built for 50-person teams managing 100 projects. You have 1 person and 5 active projects. You're paying £50/month for 95% waste.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Collaboration" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                These tools are built for teams. Team permissions, client access, approval workflows, team dashboards. You don't have a team. You don't need team features. You're paying for tools that make your life more complex.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Time Suck" Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                You spend more time managing the system than delivering work. Setting up templates, configuring views, updating statuses. By the time your system is "ready," you've lost 10 billable hours. A spreadsheet takes 10 minutes to set up and generates £0 in revenue.
              </p>
            </div>
          </div>

          {/* Solo Rule */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              If your delivery system takes more than 5 minutes/day to maintain, it's too complex. Period.
            </p>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The Asana Graveyard</p>
            <p className="text-red-800">
              I used Asana for 20 projects. Spent 30 minutes/day updating it. Set up custom fields, timeline views, dependencies. Used it for 3 weeks. Missed 2 deadlines anyway because I was too busy managing Asana. Switched to a Google Doc checklist. Spend 3 minutes/day. Haven't missed a deadline since. Asana subscription: £200/month × 18 months (never cancelled) = £3,600 wasted.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: Tom's 15-Client Sheet</p>
            <p className="text-green-800">
              Tom has 15 active clients and runs 25 projects/year. Uses a Google Sheet: Project | Client | Deadline | Status | 20% | 50% | 80% | Done. Updates it every morning for 3 minutes. Creates a Google Doc checklist for each project (same template each time, copy-paste). Delivers 100% on time. Clients ask him how he stays so organized. He says "A spreadsheet and discipline." That's it.
            </p>
          </div>
        </div>
      </div>

      {/* THE DELIVERY FRAMEWORK */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The 3-Part Delivery Framework</h2>
          <p className="text-lg text-gray-700 mb-12">
            This is it. Three parts. Do this and you'll never miss a deadline again.
          </p>

          {/* Part 1: Timeline */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 1: The Timeline (Google Calendar)</h3>
            <p className="text-gray-700 mb-6">
              Don't track projects in a spreadsheet. Track them on a calendar. You can see when things are due. You can see conflicts. You can see buffer.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-1">Client Deadline</p>
                <p className="text-gray-700">The date THEY need it. The hard deadline. Non-negotiable.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-1">Your Deadline</p>
                <p className="text-gray-700">3 days BEFORE client deadline. This is what you aim for. This is your real deadline.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-gray-900 mb-1">Milestone 1: Halfway Point</p>
                <p className="text-gray-700">Check-in with client. Show progress. Get early feedback.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-gray-900 mb-1">Milestone 2: 1 Day Before Your Deadline</p>
                <p className="text-gray-700">Final review. Run the pre-delivery checklist. No surprises.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6">
              <p className="text-sm font-bold text-yellow-900">Setup (5 minutes):</p>
              <ol className="text-yellow-800 text-sm space-y-1 list-decimal list-inside">
                <li>Create a "Projects" calendar in Google Calendar</li>
                <li>Add client deadline (all-day event, red color)</li>
                <li>Add your deadline 3 days earlier (green color)</li>
                <li>Add Milestone 1 at 50% (blue color)</li>
                <li>Add Milestone 2, 1 day before your deadline (orange color)</li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-blue-800">If it's not on the calendar, it doesn't exist. You'll forget it. Then you'll miss it.</p>
            </div>
          </div>

          {/* Part 2: Checklist */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 2: The Checklist (Google Doc)</h3>
            <p className="text-gray-700 mb-6">
              Every project has the same checklist. Copy-paste it. Customize the details. Check off items as you go. Done.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
              <p className="font-bold text-gray-900 mb-4">Example Checklist Template (Web Design):</p>
              <div className="space-y-2 text-gray-700 font-mono text-sm">
                <p>Project: [ Project Name ]</p>
                <p>Client: [ Client Name ]</p>
                <p>Deadline: [ Date ]</p>
                <p></p>
                <p><strong>DISCOVERY</strong></p>
                <p>☐ Kickoff call notes</p>
                <p>☐ Client approved scope</p>
                <p>☐ Design brief created</p>
                <p></p>
                <p><strong>DESIGN</strong></p>
                <p>☐ Homepage wireframe</p>
                <p>☐ Homepage design (first draft)</p>
                <p>☐ Client feedback received</p>
                <p>☐ Homepage design (final)</p>
                <p>☐ About page design</p>
                <p>☐ Contact page design</p>
                <p></p>
                <p><strong>TECHNICAL</strong></p>
                <p>☐ Mobile responsive test</p>
                <p>☐ Cross-browser test</p>
                <p>☐ Performance check</p>
                <p></p>
                <p><strong>DELIVERY</strong></p>
                <p>☐ Client final review</p>
                <p>☐ Invoice sent</p>
                <p>☐ Testimonial request sent</p>
                <p>☐ Referral ask sent</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6">
              <p className="text-sm font-bold text-yellow-900">Checklist Principles:</p>
              <ul className="text-yellow-800 text-sm space-y-2 list-disc list-inside">
                <li>10-15 items max (if >15, you're over-detailed)</li>
                <li>Same template for every project</li>
                <li>Customize the details, not the structure</li>
                <li>Check off as you complete, not as you imagine</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-blue-800">If the checklist has >15 items, it's too detailed. You're project managing, not delivering. Simplify.</p>
            </div>
          </div>

          {/* Part 3: Status Check */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Part 3: Daily Status Check (3-5 minutes)</h3>
            <p className="text-gray-700 mb-6">
              Every morning (or batch daily):
            </p>

            <ol className="space-y-4 mb-8 text-gray-700">
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">1.</span>
                <span>Open your Projects spreadsheet</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">2.</span>
                <span>Update completion % for each active project</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">3.</span>
                <span>Check calendar: any deadlines today?</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">4.</span>
                <span>Check calendar: any milestones this week?</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-lg text-blue-600 flex-shrink-0">5.</span>
                <span>Decide: what's one thing to finish today?</span>
              </li>
            </ol>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-bold text-gray-900 mb-3">Example Projects Spreadsheet:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 px-3 font-bold text-gray-900">Project</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900">Client</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900">Deadline</th>
                    <th className="text-left py-2 px-3 font-bold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 text-gray-700">Website Redesign</td>
                    <td className="py-3 px-3 text-gray-700">Acme Ltd</td>
                    <td className="py-3 px-3 text-gray-700">2026-03-28</td>
                    <td className="py-3 px-3 text-gray-700">80%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 text-gray-700">Marketing Strategy</td>
                    <td className="py-3 px-3 text-gray-700">Tech Startup</td>
                    <td className="py-3 px-3 text-gray-700">2026-04-05</td>
                    <td className="py-3 px-3 text-gray-700">50%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-gray-700">Logo Design</td>
                    <td className="py-3 px-3 text-gray-700">Local Shop</td>
                    <td className="py-3 px-3 text-gray-700">2026-04-02</td>
                    <td className="py-3 px-3 text-gray-700">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-blue-800">If this takes more than 5 minutes, you're over-updating. This is a tracking system, not a status report.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SCOPE MANAGEMENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Scope Management: Stop Scope Creep</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Scope Creep Pattern</h3>
          <p className="text-gray-700 mb-6">
            Scope creep happens the same way every time:
          </p>
          <div className="space-y-3 mb-8 text-gray-700">
            <p><strong>Day 1 (Start):</strong> You quote project at £2,000 for 20 hours. Client says yes.</p>
            <p><strong>Day 5 (Midpoint):</strong> Client asks: "Can you also...?" You say "Sure, no problem."</p>
            <p><strong>Day 10 (Crunch):</strong> You've worked 30 hours. Still in scope.</p>
            <p><strong>Day 14 (Delivery):</strong> You're 10 hours over. You've made £67/hour instead of £100/hour. You absorb the cost.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <p className="text-sm font-bold text-red-900">The Real Cost:</p>
            <p className="text-red-800">You lose £1,000. The client never sees this. They think you're profitable. You're not. Scope creep just killed your margin.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Scope Boundary Email</h3>
          <p className="text-gray-700 mb-4 text-sm">
            Send this before you start. In writing. Get confirmation. This is non-negotiable.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm border border-gray-200 mb-6">
            <p className="mb-2"><strong>Subject:</strong> Project Scope - [Project Name]</p>
            <p className="mb-4"></p>
            <p className="mb-2">Hey [Name],</p>
            <p className="mb-2"></p>
            <p className="mb-2">Just confirming scope for this project.</p>
            <p className="mb-2"></p>
            <p className="mb-2"><strong>INCLUDED:</strong></p>
            <p className="mb-2">• [Item 1]</p>
            <p className="mb-2">• [Item 2]</p>
            <p className="mb-2">• [Item 3]</p>
            <p className="mb-2"></p>
            <p className="mb-2"><strong>NOT INCLUDED:</strong></p>
            <p className="mb-2">• [Item A]</p>
            <p className="mb-2">• [Item B]</p>
            <p className="mb-2"></p>
            <p className="mb-2">If you need anything outside this scope, let me know and I'll quote it separately.</p>
            <p className="mb-2"></p>
            <p className="mb-2">Does this match your expectations?</p>
            <p className="mb-2"></p>
            <p>[Your name]</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6">
            <p className="text-sm font-bold text-yellow-900">Why this works:</p>
            <p className="text-yellow-800">Client reads it. Client says yes or no. You have written confirmation. If they ask for changes later, you have proof of what was agreed.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Change Request Response</h3>
          <p className="text-gray-700 mb-4 text-sm">
            Midway through project, client asks for something outside scope. Use this response:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm border border-gray-200 mb-6">
            <p className="mb-2"><strong>Subject:</strong> Change Request - [Item]</p>
            <p className="mb-4"></p>
            <p className="mb-2">Hey [Name],</p>
            <p className="mb-2"></p>
            <p className="mb-2">I can definitely add [item], but that's outside our current scope.</p>
            <p className="mb-2"></p>
            <p className="mb-2">I can add it for £[amount] (around [hours] hours of work). Does that work?</p>
            <p className="mb-2"></p>
            <p className="mb-2">Or, if you'd prefer, we can keep the project as-is and tackle [item] in phase 2.</p>
            <p className="mb-2"></p>
            <p className="mb-2">Let me know!</p>
            <p className="mb-2"></p>
            <p>[Your name]</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <p className="text-sm font-bold text-green-900">Real Example:</p>
            <p className="text-green-800">Tom's client asked for "just a few extra pages." He said "That's £500 extra." They said "Okay." Tom made £500 for 2 hours of work. If he said "Sure, no problem," he'd have worked 2 hours for free and resented the client.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Scope Boundary</h3>
          <p className="text-gray-700 mb-6">
            Print this and put it on your wall:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
              <span><strong>What's included:</strong> Explicitly list everything you're delivering</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
              <span><strong>What's NOT included:</strong> Explicitly list everything you're NOT delivering</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
              <span><strong>How to add more:</strong> How scope changes get quoted and approved</span>
            </li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
            <p className="text-blue-800">If scope isn't in writing, it doesn't exist. When the client says "but you said..." you have proof you never said it.</p>
          </div>
        </div>
      </div>

      {/* PRE-DELIVERY CHECKLIST */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Pre-Delivery Checklist</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Final Check (Before You Send)</h3>
            <p className="text-gray-700 mb-6">
              Run this checklist before you hit send/deliver:
            </p>
            <div className="space-y-3 mb-8 font-mono text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Scope matches what was promised in the boundary email</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Quality is 8/10 or better (not perfect, good enough)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Client has been updated on progress (no surprises)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Invoice is ready to send (don't forget this)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Testimonial request is queued (ask immediately)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-lg">☐</span>
                <span className="text-gray-700">Referral ask is queued (ask immediately)</span>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Why this matters:</p>
              <p className="text-yellow-800">I've forgotten £3,000 invoices. Didn't ask for testimonials from happy clients. Didn't ask for referrals. This checklist prevents all of that.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Delivery Email</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Use this template exactly:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm border border-gray-200 mb-6">
              <p className="mb-2"><strong>Subject:</strong> [Project] Complete</p>
              <p className="mb-4"></p>
              <p className="mb-2">Hey [Name],</p>
              <p className="mb-2"></p>
              <p className="mb-2">Project complete!</p>
              <p className="mb-2"></p>
              <p className="mb-2"><strong>HERE'S WHAT WE DELIVERED:</strong></p>
              <p className="mb-2">• [Item 1]</p>
              <p className="mb-2">• [Item 2]</p>
              <p className="mb-2">• [Item 3]</p>
              <p className="mb-2"></p>
              <p className="mb-2"><strong>NEXT STEPS:</strong></p>
              <p className="mb-2">Invoice attached. Due in 7 days.</p>
              <p className="mb-2"></p>
              <p className="mb-2">If you have a sec, I'd love a quick testimonial: [testimonial link]</p>
              <p className="mb-2"></p>
              <p className="mb-2">Also, if you know anyone else who needs [what you do], I'd love to help. Happy to connect.</p>
              <p className="mb-2"></p>
              <p className="mb-2">Cheers,</p>
              <p>[Your name]</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6">
              <p className="text-sm font-bold text-yellow-900">Non-negotiable:</p>
              <p className="text-yellow-800">Always attach invoice. Always ask for testimonial. Always ask for referral. Even if client says no, you've asked.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Timeline Buffer: Why 3 Days Early Matters</h3>
            <p className="text-gray-700 mb-6">
              Promise Friday. Deliver Wednesday. Here's what happens:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-2">Wednesday: You deliver</p>
                <p className="text-gray-700">Client gets work 3 days early. Client is happy. You don't panic.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-bold text-gray-900 mb-2">Wednesday-Thursday: Client reviews</p>
                <p className="text-gray-700">Client finds issues. Client asks for changes. Client sends feedback.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-gray-900 mb-2">Thursday-Friday: You revise</p>
                <p className="text-gray-700">You fix everything. You deliver final version Friday.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-bold text-gray-900 mb-2">Result: On time. No stress.</p>
                <p className="text-gray-700">Client thinks you're magic. You delivered on the deadline + incorporated feedback.</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm font-bold text-red-900 mb-2">Without Buffer:</p>
              <p className="text-red-800">
                Promise Friday. Deliver Friday. Client asks for changes. You have no buffer. You miss deadline. Client is upset. You're stressed. Margin destroyed.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-blue-800">The 3-day buffer is your insurance policy. It doesn't cost you money—it saves you stress (and money).</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Delivery Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Good System ✓</h3>
            <div className="space-y-3 text-green-900 mb-6">
              <p><strong>Tool:</strong> Google Calendar + Google Sheets</p>
              <p><strong>Time/day:</strong> 3-5 minutes</p>
              <p><strong>Projects:</strong> Up to 20 active</p>
              <p><strong>On-time:</strong> 100%</p>
              <p><strong>Scope creep:</strong> 0 (written boundaries)</p>
              <p><strong>Client satisfaction:</strong> 95%+</p>
              <p><strong>Cost:</strong> £0</p>
              <p><strong>Setup:</strong> 1 hour</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6">Bad System ✗</h3>
            <div className="space-y-3 text-red-900 mb-6">
              <p><strong>Tool:</strong> "Advanced PM software"</p>
              <p><strong>Time/day:</strong> 30+ minutes</p>
              <p><strong>Projects:</strong> Tracked but not followed</p>
              <p><strong>On-time:</strong> 70% (missed 3 in 10)</p>
              <p><strong>Scope creep:</strong> 2-3 projects/month</p>
              <p><strong>Client satisfaction:</strong> 60%</p>
              <p><strong>Cost:</strong> £50-150/month</p>
              <p><strong>Setup:</strong> 10+ hours</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
          <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
          <p className="text-gray-700 text-lg">
            The best system is the one you'll use every day. Not the fanciest. Not the most powerful. The simplest one that works.
          </p>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Step</h2>
          <p className="text-lg opacity-90 mb-8">
            Right now (takes 15 minutes):
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Create a "Projects" calendar in Google Calendar</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Create a Projects spreadsheet: Project | Client | Deadline | Status</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Add your 3 current projects with deadlines</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Create a checklist template in Google Docs</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">5.</span>
              <span>Set a calendar reminder: "Daily project check" at 9am</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            Done. Your delivery system is now 100x better than before.
          </p>

          <div className="bg-blue-700 rounded-lg p-6">
            <p className="font-bold text-sm opacity-75 mb-2">Download Templates (Google)</p>
            <p className="text-sm opacity-90">Pre-built calendar setup + spreadsheet + checklist template. Use immediately.</p>
          </div>
        </div>
      </div>

      {/* RELATED & WARNINGS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/systems/client-management">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Client Management System</h3>
              <p className="text-gray-600 text-sm">Before delivery: How to track and communicate with clients.</p>
            </div>
          </Link>

          <Link href="/systems/business-operations">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Business Operations</h3>
              <p className="text-gray-600 text-sm">After delivery: How to invoice and get paid.</p>
            </div>
          </Link>

          <Link href="/tools/project-delivery">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Tools for Project Delivery</h3>
              <p className="text-gray-600 text-sm">The actual software stack (Google, Notion, calendar tools) that supports this system.</p>
            </div>
          </Link>

          <Link href="/systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">All Systems</h3>
              <p className="text-gray-600 text-sm">Back to the Systems pillar. See delivery's place in the bigger picture.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Fall Into the Complexity Trap</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't use Asana, ClickUp, Monday, or fancy PM software.</strong> They're built for teams. You'll waste 30 hours setting them up.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't build Gantt charts or complex timelines.</strong> A calendar works. You're a solopreneur, not a project coordinator.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't over-update your spreadsheet.</strong> Once/day is enough. More updates don't improve delivery.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip scope boundaries.</strong> Every single project. In writing. Before you start.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
