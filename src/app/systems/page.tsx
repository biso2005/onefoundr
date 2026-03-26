import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Running Lean: Systems That Run Your Solo Business',
  description: 'Client management, project delivery, business ops, and knowledge systems—built for one person, not a team.',
};

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Running Lean: Systems That Run While You Sleep
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Client management, project delivery, and business ops—built for one person, not a team.
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl border border-blue-100 p-6">
            <p className="text-gray-800 leading-relaxed italic">
              "I spent 6 months setting up a 'proper CRM' and project management system. Used it 3 times. I built a solo system in 2 hours. Used it 300 times. Complexity is the enemy. Simplicity is the system."
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">

        {/* SYSTEMS FORMULA SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Systems Formula</h2>
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 mb-12">
            <p className="text-center text-lg font-semibold text-gray-900 mb-0">
              Client Management + Project Delivery + Business Ops + Knowledge = Solo Operating System
            </p>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            You don't need enterprise software. You don't need a CRM that takes 20 hours to set up. You don't need a project management tool with 47 features you'll never use. You need four simple systems that handle the core operations of your business—and nothing else.
          </p>
          <p className="text-gray-700 text-lg">
            This section covers all four. Pick one system. Build it this week. Use it 100 times before you add complexity.
          </p>
        </section>

        {/* SUBCATEGORY CARDS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pick Your System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* CLIENT MANAGEMENT */}
            <Link href="/systems/client-management">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Client Management</h3>
                <p className="text-gray-700 mb-6">
                  Track leads, manage communication, store files—without a CRM.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore Hub + 3 Guides →
                </div>
              </div>
            </Link>

            {/* PROJECT DELIVERY */}
            <Link href="/systems/project-delivery">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Delivery</h3>
                <p className="text-gray-700 mb-6">
                  Deliver work on time, track progress, manage scope—without Asana.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore Hub + 3 Guides →
                </div>
              </div>
            </Link>

            {/* BUSINESS OPERATIONS */}
            <Link href="/systems/business-operations">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Operations</h3>
                <p className="text-gray-700 mb-6">
                  Invoices, finance, admin, legal—the boring stuff that keeps you in business.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore Hub + 3 Guides →
                </div>
              </div>
            </Link>

            {/* KNOWLEDGE SYSTEMS */}
            <Link href="/systems/knowledge-systems">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Knowledge Systems</h3>
                <p className="text-gray-700 mb-6">
                  SOPs, templates, documentation—so you never start from scratch.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore Hub + 3 Guides →
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ANTI-EXAMPLES SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Most Systems Fail (For Solo Founders)</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The CRM Trap</h3>
              <p className="text-gray-700">
                You spend £2,000+ on HubSpot or Salesforce. Your CAC (cost to acquire customer) is £500. You now need to close 4 clients just to pay for the software. You close 3. The software sits unused. You're down £500. Meanwhile, your competitor uses a spreadsheet and is profitable.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Asana Nightmare</h3>
              <p className="text-gray-700">
                You set up Asana with 5 workspaces, custom fields, automation rules, and templates. It takes 40 hours. You use it for one project. On the second project, you're adding tasks to the wrong workspace. By month 3, you're back to sticky notes on your monitor. Asana's now a £13/month bookmark you forgot to delete.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Enterprise Accounting Bleed</h3>
              <p className="text-gray-700">
                Someone tells you to set up Xero or QuickBooks and use "proper accounting." You do. Xero costs £10/month. You hire an accountant for £1,500/year to "interpret" your data. Meanwhile, you could manually invoice in 5 minutes and track profit in a spreadsheet. Total spend: £3,300/year. Actual benefit: confusing reports you don't understand.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">The Pattern</h3>
            <p className="text-gray-700">
              Every "professional" system is designed for companies with 5+ people. They're solving team problems you don't have. A solo founder using enterprise software is like buying a 50-seat conference table when you work alone. It's overhead dressed up as "scalability."
            </p>
          </div>
        </section>

        {/* SYSTEMS STORIES SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Systems Stories: Real Solo Operators</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
                STORY
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">I Ditched My CRM for a Spreadsheet</h3>
              <p className="text-gray-700 text-sm mb-4">
                How I manage 50 clients with 3 columns and no software. (Spoiler: It's faster than Salesforce.)
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">5 min read</span>
                <span className="text-blue-600 font-semibold">Read →</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
                STORY
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Solo Project Delivery System</h3>
              <p className="text-gray-700 text-sm mb-4">
                Deliver client work in 10 hours/week without missing deadlines. One system that replaces project management software.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">6 min read</span>
                <span className="text-blue-600 font-semibold">Read →</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold mb-2">
                STORY
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The £100/hour Admin Mistake</h3>
              <p className="text-gray-700 text-sm mb-4">
                Why doing your own admin is the most expensive mistake you can make. Even for a solo founder. Here's the fixing.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">4 min read</span>
                <span className="text-blue-600 font-semibold">Read →</span>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT STEPS SECTION */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Pick one system. Build it this week. Use it 100 times before you add complexity. Don't fall into the trap of setting up a "perfect" system that you use once. Boring systems that you actually use beat perfect systems you avoid.
          </p>
          <p className="text-gray-700 font-semibold text-lg mb-0">
            Start with the system you dread the most. (That's usually where the biggest waste is hiding.)
          </p>
        </section>

        {/* RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/offer/productization">
              <div className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
                <p className="font-bold text-gray-900">Productized Services</p>
                <p className="text-sm text-gray-600">Set your offer before you build systems around it.</p>
              </div>
            </Link>
            <Link href="/tools">
              <div className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
                <p className="font-bold text-gray-900">Tools & AI</p>
                <p className="text-sm text-gray-600">The tech stack to support your systems.</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
