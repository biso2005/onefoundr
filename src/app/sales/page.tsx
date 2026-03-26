import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MessageCircle, FileText, PoundSterling } from 'lucide-react';

export const metadata = {
  title: 'Sales for Solopreneurs: The Conversation Framework',
  description: 'Close deals in DMs without being pushy. The 3-step conversation that turns interested leads into paying clients.',
};

export default function SalesPage() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sales for Solopreneurs: The Conversation Framework
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            You don't need a sales process. You need a 3-step conversation that turns interested leads into paying clients—without being pushy or 'salesy.'
          </p>
          <div className="bg-red-100 border border-red-200 rounded-lg p-6 text-left inline-block">
            <p className="text-red-900 font-medium">
              "I closed my first £5k client in a 23-minute DM conversation. No discovery call, no proposal, no negotiation. Just three questions and a Calendly link. That's the solo sales advantage—conversations, not processes."
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* The Sales Myth */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why Sales Training is Built for Teams, Not Solos
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Sales Process" Problem</h3>
              <p className="text-gray-700 mb-4">
                Enterprise sales training teaches: pipeline stages, CRM management, discovery calls, proposal review, negotiation tactics. Solo reality? You have one conversation to close. If it takes more than 30 minutes, you're over-complicating it.
              </p>
              <p className="text-gray-700">
                The irony: Traditional sales training is built on the assumption of a team. A dedicated salesperson handles discovery, another handles proposals, another handles negotiation. Solos have to do all of it in one conversation—which means you CAN'T use their framework. It will kill you.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-2">The Commission Mindset Trap</h3>
              <p className="text-gray-700">
                Salespeople are taught to "close at all costs." Solos need the opposite: qualify out bad fits. A bad client costs you £2k in time and stress. Better to lose the sale than gain a nightmare client.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Always Be Closing" Lie</h3>
              <p className="text-gray-700">
                Solos should "always be qualifying," not always be closing. Your goal isn't to close everyone—it's to close the right people who you can help without burning out. This is your advantage: you can say no. Big sales teams can't.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold">
                Solo Constraint: "If your sales 'process' has more than 3 steps, you're building a machine for a team you don't have. Have conversations, not pipelines."
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Anti-Example</h4>
              <p className="text-gray-700">
                I tried a 5-step sales process: Discovery call → Proposal → Follow-up → Negotiation → Close. Conversion rate: 10%. Time per client: 4 hours. After rebuilding to a 3-question DM conversation: Conversion rate: 60%. Time per client: 23 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Subcategory Overview */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Pick Your Conversion Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <Link href="/sales/natural-selling" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-red-500 hover:shadow-lg transition-all h-full">
                <div className="mb-4">
                  <MessageCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">
                  Natural Selling
                </h3>
                <p className="text-gray-600 mb-4">
                  How to turn DMs and calls into clients without scripts or pressure.
                </p>
                <div className="text-red-600 font-semibold text-sm">
                  Read guide →
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/sales/proposals" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all h-full">
                <div className="mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  Proposals That Convert
                </h3>
                <p className="text-gray-600 mb-4">
                  One-page proposals. No fluff. Send via email, get a yes in 24 hours.
                </p>
                <div className="text-blue-600 font-semibold text-sm">
                  Read guide →
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/sales/pricing-conversations" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition-all h-full">
                <div className="mb-4">
                  <PoundSterling className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                  Talk About Money
                </h3>
                <p className="text-gray-600 mb-4">
                  How to state your price, handle objections, and never discount.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Read guide →
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
            <p className="text-purple-900">
              <strong>Solo Rule:</strong> "You only need ONE of these. If you master natural selling, you don't need proposals. If you use proposals, you don't need pricing conversation frameworks. Pick your strength and ignore the rest."
            </p>
          </div>
        </section>

        {/* The 3-Question Framework (Quick Preview) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The 3-Question DM Framework (Quick Preview)
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            <div>
              <div className="inline-block bg-red-100 text-red-900 font-bold px-3 py-1 rounded text-sm mb-3">
                Question 1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                "What's your biggest frustration with [specific problem]?"
              </h4>
              <p className="text-gray-700">
                Listen. Don't pitch. Just listen for 5 minutes. They either describe a problem that's urgent or they don't. If they don't, they're not ready. Move on.
              </p>
            </div>

            <div>
              <div className="inline-block bg-blue-100 text-blue-900 font-bold px-3 py-1 rounded text-sm mb-3">
                Question 2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                "What have you tried so far?"
              </h4>
              <p className="text-gray-700">
                This tells you if they've already spent money or time on solutions. If they've tried 5 other things and they're frustrated, you have a sale. If they've never tried anything, they're not motivated.
              </p>
            </div>

            <div>
              <div className="inline-block bg-green-100 text-green-900 font-bold px-3 py-1 rounded text-sm mb-3">
                Question 3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                "If I could solve this, would you want to get started?"
              </h4>
              <p className="text-gray-700">
                If the answer is yes: Send Calendly link. Period. If it's "maybe," "I have to think about it," or "I can't afford it," they're not qualified. Stop here.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-6 text-center">
            That's it. Three questions. 23 minutes. 60% conversion rate. This is natural selling.
          </p>
        </section>

        {/* Why This Hub Exists */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why You Need This Hub (And Why Enterprise Sales Training Will Bankrupt You)
          </h2>
          
          <p className="text-gray-700 mb-6">
            Most sales advice is built for teams with specialized roles. Your advantage as a solo is not that you can do everything—it's that you only need to do ONE thing well: have conversations that close.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-1">✓ Natural Selling wins if:</p>
              <p className="text-gray-700 text-sm">You're comfortable in DMs/calls. You can read energy and pivot quickly. You want to close fast and move on.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-1">✓ Proposals win if:</p>
              <p className="text-gray-700 text-sm">Your clients want written documentation. Your offer is complex and needs explanation. You prefer async communication.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-bold text-gray-900 mb-1">✓ Pricing Conversations win if:</p>
              <p className="text-gray-700 text-sm">You struggle with "Can you do it cheaper?" Your price is higher than market and you need strong positioning. Your deal flow is high enough to reject bad fits.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-50 rounded-lg p-8 mb-16 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Next Step
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900 mb-2">Primary:</p>
              <p className="text-gray-700">
                Read <Link href="/sales/natural-selling" className="text-red-600 hover:underline">Natural Selling</Link>. Master the 3-question DM conversation. Close your next lead in 30 minutes.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Secondary:</p>
              <p className="text-gray-700">
                Download the Solo Sales Checklist (3 questions, 1-page proposal template, pricing script).
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Prepare:</p>
              <p className="text-gray-700">
                Before you sell, make sure your offer page is solid. See <Link href="/offer/pricing" className="text-red-600 hover:underline">/offer/pricing</Link> for positioning your price.
              </p>
            </div>
          </div>
        </section>

        {/* Warning Box */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
          <p className="text-amber-900 font-bold mb-2">⚠️ Critical Warning</p>
          <p className="text-amber-900">
            Do not start sales messaging until you have an offer page to link to. Traffic without conversion is just noise. Finish <Link href="/offer/pricing" className="text-amber-700 hover:underline font-bold">/offer/pricing</Link> first.
          </p>
        </div>

        {/* Related Guides */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/marketing/first-customers" className="p-4 border border-gray-200 rounded hover:border-red-500 transition">
              <p className="font-bold text-gray-900 hover:text-red-600">Where Your Leads Come From</p>
              <p className="text-sm text-gray-600">First-Customers Playbook</p>
            </Link>
            <Link href="/offer/pricing" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900 hover:text-blue-600">Your Offer Must Be Solid</p>
              <p className="text-sm text-gray-600">Pricing Strategy</p>
            </Link>
            <Link href="/marketing/lead-flow" className="p-4 border border-gray-200 rounded hover:border-green-500 transition">
              <p className="font-bold text-gray-900 hover:text-green-600">Systematize Sales After Manual</p>
              <p className="text-sm text-gray-600">Lead Flow Systems</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
