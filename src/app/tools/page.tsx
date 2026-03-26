import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'The Solo Stack: Tools That Don\'t Get in Your Way | OneFoundr',
  description: 'Minimum viable software for every revenue stage. Communication, project management, finance, automation, and creation tools—nothing more, nothing less.',
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Tools & Stack</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            The Solo Stack:<br />Tools That Don't Get in Your Way
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Minimum viable software, apps, and hardware for every revenue stage. No bloat. No enterprise plans. Just what you actually need.
          </p>
          <div className="bg-white border-l-4 border-indigo-600 p-6 mb-8">
            <p className="text-lg text-gray-800 italic">
              "I spent £300/month on tools I never used. Cut it to £47/month. Got more done. The tool stack is about removing friction, not adding features."
            </p>
          </div>
        </div>
      </div>

      {/* SUBCATEGORIES */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Five Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Communication & Scheduling */}
            <Link href="/tools/communication-scheduling">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Communication & Scheduling</h3>
                  <p className="text-sm text-gray-600 flex-grow">Email, calendar, video calls—what you actually need to talk to clients.</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium">Explore →</div>
                </div>
              </div>
            </Link>

            {/* Project & Delivery */}
            <Link href="/tools/project-delivery">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Project & Delivery</h3>
                  <p className="text-sm text-gray-600 flex-grow">Task management, time tracking, file storage—deliver without chaos.</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium">Explore →</div>
                </div>
              </div>
            </Link>

            {/* Finance & Legal */}
            <Link href="/tools/finance-legal">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">£</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Finance & Legal</h3>
                  <p className="text-sm text-gray-600 flex-grow">Invoicing, accounting, contracts—stay legal and get paid.</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium">Explore →</div>
                </div>
              </div>
            </Link>

            {/* Automation & Integration */}
            <Link href="/tools/automation-integration">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Automation & Integration</h3>
                  <p className="text-sm text-gray-600 flex-grow">Zapier, Make, n8n—connect your stack without coding.</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium">Explore →</div>
                </div>
              </div>
            </Link>

            {/* Creation & Content */}
            <Link href="/tools/creation-content">
              <div className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                  <div className="text-4xl mb-4">✏️</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Creation & Content</h3>
                  <p className="text-sm text-gray-600 flex-grow">Design, writing, recording—make what you sell.</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium">Explore →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* YOUR STACK BY REVENUE STAGE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Stack by Revenue Stage</h2>
          <p className="text-lg text-gray-600 mb-12">Most solopreneurs over-tool at every stage. Here's what you actually need.</p>

          {/* Stage 1: £0-5k/month */}
          <div className="mb-12 bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Stage 1: £0-5k/month</h3>
            <p className="text-gray-600 mb-6 font-semibold">Free Tier (£0/month total)</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Communication</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gmail</li>
                  <li>• Google Calendar</li>
                  <li>• Calendly free</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Project</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Notion free</li>
                  <li>• Trello free</li>
                  <li>• Google Drive</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Finance</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wave free</li>
                  <li>• Google Sheets</li>
                  <li>• Stripe (pay per transaction)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Automation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Zapier free (100 tasks/month)</li>
                  <li>• Make free</li>
                  <li>• Manual work</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Creation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Canva free</li>
                  <li>• Loom free</li>
                  <li>• Descript free</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
              <p className="text-sm text-blue-900"><strong>Solo Rule:</strong> This is enough for your first 10 clients. Don't pay until you're making revenue.</p>
            </div>
          </div>

          {/* Stage 2: £5-15k/month */}
          <div className="mb-12 bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Stage 2: £5-15k/month</h3>
            <p className="text-gray-600 mb-6 font-semibold">Lean Tier (£47/month total)</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Communication</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Google Workspace £6</li>
                  <li>• Calendly Pro £8</li>
                  <li>• Total: £14</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Project</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Notion Plus £8</li>
                  <li>• Trello Premium £10</li>
                  <li>• Total: £18</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Finance</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FreeAgent £30</li>
                  <li>• Stripe (2.9%)</li>
                  <li>• Total: £30</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Automation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Zapier Starter £15</li>
                  <li>• Make free</li>
                  <li>• Total: £15</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Creation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Canva Pro £10</li>
                  <li>• Loom Pro £10</li>
                  <li>• Total: £20</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded border border-green-200">
              <p className="text-sm text-green-900"><strong>Total: £47/month.</strong> This is where 70% of solopreneurs stay. It's the sweet spot.</p>
            </div>
          </div>

          {/* Stage 3: £15k+/month */}
          <div className="mb-12 bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Stage 3: £15k+/month</h3>
            <p className="text-gray-600 mb-6 font-semibold">Professional Tier (£155/month total)</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Communication</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Google Workspace £6</li>
                  <li>• Calendly Pro £8</li>
                  <li>• Zoom Pro £12</li>
                  <li>• Total: £26</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Project</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Notion Plus £8</li>
                  <li>• Trello Premium £10</li>
                  <li>• Sunsama £15</li>
                  <li>• Total: £33</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Finance</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• FreeAgent £30</li>
                  <li>• Stripe (2.9%)</li>
                  <li>• Wise Business £8</li>
                  <li>• Total: £38</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Automation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Zapier Professional £50</li>
                  <li>• Make free</li>
                  <li>• Total: £50</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Creation</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Canva Pro £10</li>
                  <li>• Loom Pro £10</li>
                  <li>• Riverside £15</li>
                  <li>• Figma £12</li>
                  <li>• Total: £47</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-purple-50 rounded border border-purple-200">
              <p className="text-sm text-purple-900"><strong>Total: £155/month.</strong> Stop here. Everything beyond this is feature creep.</p>
            </div>
          </div>

          {/* The 5% Rule */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The 5% Rule</h3>
            <p className="text-gray-700 mb-4">
              <strong>If you're spending more than 5% of revenue on tools, you're over-tooled.</strong>
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              <div>At £10k/month revenue: £500/month max on tools</div>
              <div>At £20k/month revenue: £1,000/month max on tools</div>
              <div>At £50k/month revenue: £2,500/month max on tools</div>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Reality: Most solopreneurs at £10k/month spend £50-100/month on tools. They're in the sweet spot.</p>
          </div>
        </div>
      </div>

      {/* TOOL SELECTION PRINCIPLES */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose Tools (Without Getting Lost)</h2>
        <p className="text-lg text-gray-600 mb-12">Four principles that keep your stack lean.</p>

        <div className="space-y-8">
          {/* Principle 1 */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Principle 1: One Tool Per Job</h3>
            <p className="text-gray-700 mb-4">
              Don't use 3 project tools. Use one. Don't use 2 finance tools. Use one. The temptation is to "have options," but options create decision fatigue.
            </p>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
              <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The Tool Collector</p>
              <p className="text-sm text-red-800">
                Sarah used Asana for projects, Monday for team tasks, Trello for client deliverables, and Notion for documentation. She spent 30 minutes every day deciding which tool to use, then copying information between them. Six months later: burnout. Solution: Pick Notion, delete the rest.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-sm text-blue-800">If you have 2 tools that do the same thing, delete one. If you can't decide which, you don't need either.</p>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Principle 2: Free Until £5k</h3>
            <p className="text-gray-700 mb-4">
              Don't pay for tools before you have revenue. Free tier is enough for your first 5-10 clients. Paid plans are for when you've proven the model works.
            </p>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
              <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: Paying Before Revenue</p>
              <p className="text-sm text-red-800">
                Mark launched a consulting business with £200/month in tools: HubSpot CRM (£50), Stripe (payable later), Zapier (£15), Loom Pro (£10), Notion Plus (£8). He had zero clients for 4 months. He canceled everything and restarted with free tools. He'd already wasted £800.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-sm text-blue-800">If you're paying £50/month before £5k/month revenue, you're avoiding the real work (selling).</p>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Principle 3: Pay for Time Saved</h3>
            <p className="text-gray-700 mb-4">
              If a tool saves you 2 hours/month and costs £10, it's worth it. If it saves 0 hours, delete it immediately. Solo math: Your hourly rate is £100. A £10 tool must save you at least 6 minutes/month to break even.
            </p>
            <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
              <p className="text-sm font-bold text-green-900 mb-2">Real Example: The £10 Win</p>
              <p className="text-sm text-green-800">
                Calendly Pro costs £8/month. It saves me 3 minutes per client meeting (no back-and-forth on timing). At 15 clients/month, that's 45 minutes saved. At £100/hour, I save £75/month. ROI: 937%. Worth it.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-sm text-blue-800">Every tool must justify its cost in time saved. If you can't measure the time saved, the tool doesn't stay.</p>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Principle 4: No Annual Plans</h3>
            <p className="text-gray-700 mb-4">
              Pay monthly until you're sure. Annual plans lock you in to tools you might outgrow. Most tools offer a 15-20% discount for annual commitment—it's not worth the lock-in.
            </p>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
              <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: The Annual Trap</p>
              <p className="text-sm text-red-800">
                I paid £300/year upfront for a project management tool. I used it for 2 weeks, then switched to Notion. I called support: "Non-refundable." I kept paying for it "just in case" for 10 months. I never used it again. Cost: £300 for nothing.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm font-bold text-blue-900">Solo Rule:</p>
              <p className="text-sm text-blue-800">Only pay annually after 6 months of consistent use. The monthly price is worth the flexibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Step</h2>
          <p className="text-lg opacity-90 mb-8">
            Right now, audit your tool stack. Make a list of every tool you're paying for. For each one, ask: "Did I use this in the last 30 days?"
          </p>
          <p className="text-lg opacity-90 mb-8 font-semibold">
            If the answer is no, cancel it. Today. Most people save £50-100/month this way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">
              Download the Solo Stack Audit
            </div>
            <Link href="/systems" className="bg-indigo-700 hover:bg-indigo-800 px-8 py-4 rounded-lg font-semibold transition">
              Read the Systems Guide
            </Link>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Tools Work When Systems Are First</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/systems">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">Build Your Systems First</h3>
                <p className="text-gray-600 text-sm">Done Over Perfect: Implement your core workflows before you buy tools. Most solopreneurs buy tools to solve problems they haven't even defined yet.</p>
              </div>
            </Link>

            <Link href="/marketing/content-marketing">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer">
                <div className="text-3xl mb-3">✏️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">Creation Tools in Depth</h3>
                <p className="text-gray-600 text-sm">For tools specific to content creation, video production, and design—see how to pick them for your content model.</p>
              </div>
            </Link>

            <Link href="/sales/natural-selling">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">Communication Without Tools</h3>
                <p className="text-gray-600 text-sm">Most solopreneurs don't need a fancy communication tool—they need a process. See how to sell without a CRM.</p>
              </div>
            </Link>

            <Link href="/offer/productization">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition cursor-pointer">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600">Automation Changes Everything</h3>
                <p className="text-gray-600 text-sm">When your offer is locked in, automation tools become 10x more valuable. See how to build the workflows that matter.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
