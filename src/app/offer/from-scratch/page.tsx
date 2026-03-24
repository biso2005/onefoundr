import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Target,
  Zap,
  DollarSign,
  MessageSquare,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "The 48-Hour Offer: From Zero to Sellable | OneFoundr",
  description:
    "Package your skills into a sellable offer in 48 hours. Pre-sell before you build. Validate with real clients before perfecting.",
};

const cobblestoneCases = [
  {
    model: "Service Businesses (Freelancers/Agencies-of-One)",
    marker: "A",
    pattern: '"How do I...?" questions',
    example: "How do I write launch emails?",
    offer: "The Email Sequence Sprint",
    price: "£800",
    delivery: "48 hours",
    audit: "Your sent emails for repeat explanations you give verbally",
  },
  {
    model: "Productized Services",
    marker: "B",
    pattern: '"Can you just...?" (scope creep you currently do free)',
    example: "Can you just set up my Notion?",
    offer: "Notion Workspace Setup",
    price: "£1,200",
    delivery: "3-day delivery, fixed scope",
    audit:
      "The 'quick tasks' that take 2 hours but clients think take 10 minutes",
  },
  {
    model: "Digital Products",
    marker: "C",
    pattern: '"Where did you get...?" (templates, systems, frameworks)',
    example: "Where did you get that contract template?",
    offer: "The Freelance Contract Pack",
    price: "£47",
    delivery: "Instant download",
    audit: "Your Downloads folder for files you send to every new client",
  },
  {
    model: "SaaS/Micro-SaaS",
    marker: "D",
    pattern: '"I wish there was a tool that..." (your pain)',
    example: "I wish I could generate invoices from my Trello cards",
    offer: "TrelloInvoice",
    price: "£12/month",
    delivery: "Set up in 10 minutes",
    audit: "Tools you pay £20/month for and could build better",
  },
  {
    model: "Content/Creator Businesses",
    marker: "E",
    pattern: '"How did you learn to...?" (your journey is the product)',
    example: "How did you grow to 10k newsletter subs?",
    offer: "The Newsletter Launch Kit",
    price: "£197",
    delivery: "Video + templates",
    audit: "Your last 5 'reply to this' DMs—they are your outline",
  },
];

const constraintMatrix = [
  {
    model: "Service",
    constraint: "Must fit in 1 week or less initially",
    delivery: "You are the labor",
    maxPrice: "£800–£2,000",
  },
  {
    model: "Productized",
    constraint: "Template + 1:1 tweaks max",
    delivery: "Productized delivery",
    maxPrice: "£500–£1,500",
  },
  {
    model: "Digital Product",
    constraint: "Instant download or auto-delivery",
    delivery: "Support burden is the risk",
    maxPrice: "£27–£197",
  },
  {
    model: "SaaS",
    constraint: "One feature only",
    delivery: "You're dev + support",
    maxPrice: "£9–£49/month",
  },
  {
    model: "Content",
    constraint: "Pre-recorded, not live",
    delivery: "Community management kills solos",
    maxPrice: "£47–£297",
  },
];

const offerAnatomy = [
  {
    part: "1. The Outcome",
    description: '"You will have..." (not "I will help you"—passive kills sales)',
    service:
      '"A GDPR-compliant privacy policy and implementation checklist for your website"',
    productized:
      '"A fully configured Notion workspace with linked databases"',
    digital:
      '"12 months of content ideas and scheduling templates"',
    saas: '"Automated invoice generation from Trello cards"',
  },
  {
    part: "2. The Timeline",
    description: '"Delivered in X days/hours" (removes ambiguity)',
    service: '"Delivered within 5 business days"',
    productized: '"3-day delivery"',
    digital: '"Instant download"',
    saas: '"Set up in 10 minutes"',
  },
  {
    part: "3. The Deliverables",
    description:
      '"You get..." (concrete list, not "access to my brain")',
    service:
      '"1x policy document, 1x cookie banner implementation, 1x staff changelog"',
    productized:
      '"1x dashboard, 3x linked databases, 1x 30-min handover video"',
    digital: '"1x Notion template, 1x Airtable base, 52-week calendar PDF"',
    saas: '"Unlimited invoices, 3 templates, email support"',
  },
  {
    part: "4. The Boundaries",
    description: "(Critical: prevents scope creep)",
    service:
      '"Does NOT include e-commerce custom checkout flows or mobile app compliance"',
    productized:
      '"Includes up to 50 entries per database. Does NOT include historical data import"',
    digital:
      '"Template only. Does NOT include strategy calls or customization"',
    saas:
      '"Trello integration only. Does NOT include Asana/Monday/ClickUp"',
  },
  {
    part: "5. The Price",
    description: "One number. Not 'from £X' or 'depends.'",
    service: '"£1,200 (fixed fee)"',
    productized: '"£850"',
    digital: '"£47"',
    saas: '"£12/month"',
  },
  {
    part: "6. The Guarantee",
    description: "Solo-friendly: 'If [condition], I'll [fix/revise]'",
    service:
      '"If your legal advisor rejects the policy, one free revision within 14 days"',
    productized: '"30-day bug fixes for broken links"',
    digital: '"If the file is corrupted, instant replacement"',
    saas:
      '"Cancel anytime. Prorated refund if bugs prevent invoicing"',
  },
];

const validationDay1Tasks = [
  {
    time: "Hour 1–4",
    task: 'Write the offer anatomy (Section 4 below) using the Cobblestone method',
  },
  {
    time: "Hour 4–6",
    task:
      'Create the "sales asset" (simple one-pager or Notion page with the 6 parts)',
  },
  {
    time: "Hour 6–8",
    task:
      'Set up payment (Stripe, PayPal link, or even bank transfer for your first one)',
  },
];

const validationScript = [
  {
    step: 1,
    message:
      '"I\'m building something for [specific person type] who struggles with [specific problem]."',
  },
  {
    step: 2,
    message: '"It\'s called [Offer Name]. It gets you [outcome] in [timeline] for [price]."',
  },
  {
    step: 3,
    message:
      '"I\'m taking on 3 beta clients this week at [price/beta discount]. Are you in, or know someone who is?"',
  },
];

export default function FromScratchPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 pt-20 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">
            BUILD YOUR OFFER
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The 48-Hour Offer: From Zero to Sellable
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            You don't have an offer problem. You have a packaging problem. Here's how to fix it before
            the weekend.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              I spent 6 months "perfecting" a course that nobody wanted. The logo was beautiful. The
              modules were comprehensive. The sales page got 3 visitors—all me checking if it loaded.
              Then I met a consultant who had an "ugly" Google Doc she sold for £2,000. She built it in a
              day. I built a ghost town in half a year.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Here's the difference: She sold it before building it. I built it before selling it.
            </p>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            By the end of this guide, you'll have a named offer with a defined scope, a price, and a
            sales asset. Not a business plan. Not a brand strategy. Something you can actually ask money
            for.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-gray-900">
              <strong>Constraint Notice:</strong> If you can't deliver it alone within 48 hours of
              purchase (or the first milestone if it's a multi-week service), it's not a solo offer.
              It's a startup. Scale down.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Step 1: Cobblestone Method */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Find the Expensive Problem</h2>
          </div>
          <p className="text-gray-600 mb-8">The Cobblestone Method: 90 minutes to identify what to sell</p>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Audit</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              List the last 10 times someone asked you for help, advice, or "just a quick look" at
              something. Not hypothetical—actual conversations. Now cluster them into themes. I guarantee
              80% fall into 2–3 buckets.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-4">Cobblestone Worksheet</h4>
              <p className="text-sm text-gray-600 mb-4">Write directly in this space:</p>
              <div className="space-y-3">
                <div className="bg-white border border-indigo-300 rounded p-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">My 3 most expensive pains:</p>
                  <div className="text-gray-500 italic text-sm">1. ________________</div>
                  <div className="text-gray-500 italic text-sm">2. ________________</div>
                  <div className="text-gray-500 italic text-sm">3. ________________</div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">The Filter: "The Expensive Pain"</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Of those buckets, identify the one worth selling:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Frequency:</strong> Does this happen monthly for your target?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Urgency:</strong> Is there a deadline or cost to not solving it?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Solo-Fit:</strong> Can you solve it with your current skills + laptop?
                </span>
              </li>
            </ul>
          </div>

          {/* Model Markers */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Model Markers: Your Offer Archetype
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {cobblestoneCases.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex-shrink-0">
                      {item.marker}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {item.model}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-3 ml-14">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        The Pattern
                      </p>
                      <p className="text-sm text-gray-700">{item.pattern}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Example
                      </p>
                      <p className="text-sm text-gray-700 italic">"{item.example}"</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                          Your Offer
                        </p>
                        <p className="text-sm font-bold text-gray-900">{item.offer}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                          Price
                        </p>
                        <p className="text-sm font-bold text-gray-900">{item.price}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Delivery
                      </p>
                      <p className="text-sm text-gray-700">{item.delivery}</p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 rounded p-3">
                      <p className="text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-1">
                        Cobblestone Audit
                      </p>
                      <p className="text-sm text-indigo-900">{item.audit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <p className="text-base text-gray-900 leading-relaxed">
              <strong>The Selection Criteria:</strong> Pick the problem where you'd feel slightly
              guilty charging for it because it's "easy for you." That's your edge. Easy for you = 
              valuable to them because it saves learning time.
            </p>
          </div>
        </section>

        {/* Step 2: Solo Constraint Matrix */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">The Delivery Test: Can You Actually Do This Alone?</h2>
          </div>
          <p className="text-gray-600 mb-8">The solo constraint matrix: Know your limits before you sell</p>

          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Model</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Solo Constraint</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Fulfillment Reality</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Max Price (V1)</th>
                  </tr>
                </thead>
                <tbody>
                  {constraintMatrix.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">{row.model}</td>
                      <td className="py-3 px-4 text-gray-700">{row.constraint}</td>
                      <td className="py-3 px-4 text-gray-700">{row.delivery}</td>
                      <td className="py-3 px-4 font-bold text-emerald-600">{row.maxPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The 48-Hour Rule (Explained 3 Ways)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If your offer takes longer than 48 hours to deliver the first version, you haven't found
              the Cobblestone. You've found a boulder. Break it:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold flex-shrink-0 text-sm">
                  •
                </div>
                <div>
                  <p className="font-bold text-gray-900">Service:</p>
                  <p className="text-sm text-gray-700">
                    Don't sell "Monthly Marketing Management." Sell "The Marketing Audit" (£950, 2-day
                    delivery).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold flex-shrink-0 text-sm">
                  •
                </div>
                <div>
                  <p className="font-bold text-gray-900">SaaS:</p>
                  <p className="text-sm text-gray-700">
                    Don't build "Project Management for Agencies." Build "The Agency Proposal
                    Calculator" (one function, £29).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold flex-shrink-0 text-sm">
                  •
                </div>
                <div>
                  <p className="font-bold text-gray-900">Digital:</p>
                  <p className="text-sm text-gray-700">
                    Don't write "The Complete Guide to SEO." Write "The 10-Minute Technical SEO Checklist
                    for Shopify" (£47).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-2">Critical Reality Check</p>
              <p className="text-sm text-gray-700">
                If you need to hire someone else to deliver this, you're building an agency, not a solo
                business. That's fine—but that's Stage 5 (Scale), not Stage 2. You can't start there.
              </p>
            </div>
          </div>
        </section>

        {/* Step 3: Packaging Protocol */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Design the Container: Offer Anatomy</h2>
          </div>
          <p className="text-gray-600 mb-8">Every sellable offer has 6 required parts. Here they are with real examples.</p>

          <div className="space-y-6 mb-12">
            {offerAnatomy.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.part}</h3>
                <p className="text-sm text-gray-600 mb-6">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                      Service
                    </p>
                    <p className="text-sm text-blue-900 italic">{item.service}</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-purple-900 uppercase tracking-wider mb-2">
                      Productized
                    </p>
                    <p className="text-sm text-purple-900 italic">{item.productized}</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-green-900 uppercase tracking-wider mb-2">
                      Digital Product
                    </p>
                    <p className="text-sm text-green-900 italic">{item.digital}</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-orange-900 uppercase tracking-wider mb-2">
                      SaaS
                    </p>
                    <p className="text-sm text-orange-900 italic">{item.saas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Writing Your Sales Asset</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You don't need a funnel. You don't need a landing page builder. You need a Google Doc, a
              Notion page, or a Loom video. It must contain:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">The Problem</p>
                  <p className="text-sm text-gray-700">Agitate the pain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">The Solution</p>
                  <p className="text-sm text-gray-700">Your offer anatomy (the 6 parts above)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">The Investment</p>
                  <p className="text-sm text-gray-700">Price</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">The Next Step</p>
                  <p className="text-sm text-gray-700">How to buy (usually "Reply to this email with YES")</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <p className="text-base text-gray-900 leading-relaxed">
                <strong>Solo-Specific Pricing Psychology:</strong> Your first offer should feel slightly
                embarrassing. If you're proud of the price, it's too high for validation. You're not
                charging for your time; you're charging for their speed. £800 feels like a risk to you.
                To a business losing £5k/month on the problem, it's a bargain.
              </p>
            </div>
          </div>
        </section>

        {/* Step 4: 48-Hour Validation Sprint */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Sell Before You Build: The Validation Sprint</h2>
          </div>
          <p className="text-gray-600 mb-8">
            48 hours to test demand and get your first "Yes"
          </p>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Philosophy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Building first is ego protection. Selling first is risk elimination. If you can't sell the
              outline, you can't sell the cathedral.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is the 48-hour rule applied: You have 48 hours to get one person to say "Yes, I want
              this." If you can't, you pivot the offer, not the marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                Day 1 (Hours 1–24): Build the Sales Asset
              </h3>
              <div className="space-y-4">
                {validationDay1Tasks.map((task, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 text-indigo-600 font-bold flex-shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{task.time}</p>
                      <p className="text-sm text-gray-700 mt-1">{task.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Minimum Viable Sales Asset
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                It can be a typed email, a Canva one-pager, or a Carrd site. It needs:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Your face/name (trust)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">The specific outcome (clarity)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">The price (commitment)</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">A 'Buy' or 'Book' button (action)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Day 2 (Hours 24–48): The Validation Conversations</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You need 3 conversations minimum. Use the tactics from{" "}
              <Link href="/marketing/first-customers" className="text-indigo-600 font-medium hover:underline">
                /marketing/first-customers
              </Link>
              {" "}(warm outreach, communities), but with this specific script:
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <p className="text-sm font-semibold text-indigo-900 uppercase tracking-wider mb-4">
                The Solo Pre-Sale Script
              </p>
              <div className="space-y-3">
                {validationScript.map((item, idx) => (
                  <p key={idx} className="text-sm text-indigo-900">
                    <span className="font-bold">Step {item.step}:</span> {item.message}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3">3 Yes's</h4>
              <p className="text-sm text-green-900">
                You have validation. Build immediately (or deliver if service).
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-yellow-900 mb-3">3 No's</h4>
              <p className="text-sm text-yellow-900">
                Pivot the offer, not the marketing. Wrong problem, wrong price, or wrong audience.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-900 mb-3">3 Ghosts</h4>
              <p className="text-sm text-red-900">
                Your outreach was too cold. Warm up the leads first (see communities/warm outreach).
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-base text-gray-900 leading-relaxed">
              <strong>The Emergency Brake:</strong> If you reach Hour 48 with zero interest, you haven't
              failed. You've spent 2 days, not 2 years. Go back to The Cobblestone. Pick a more
              expensive pain. Try again Monday.
            </p>
          </div>
        </section>

        {/* Hidden Offer Anatomy Checklist */}
        <section className="mb-20 bg-indigo-50 border border-indigo-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✓ 48-Hour Checklist</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item1"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item1"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 0–4:</strong> Completed the Cobblestone audit (identified 3 expensive pains)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item2"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item2"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 4–8:</strong> Wrote the 6-part offer anatomy (outcome, timeline, deliverables,
                boundaries, price, guarantee)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item3"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item3"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 8–12:</strong> Created the sales asset (Google Doc, Notion page, or Carrd)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item4"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item4"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 12–24:</strong> Set up payment (Stripe, PayPal, or bank transfer link)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item5"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item5"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 24–36:</strong> Completed 3 validation conversations (using the script)
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="item6"
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label
                htmlFor="item6"
                className="text-gray-700 cursor-pointer"
              >
                <strong>Hour 36–48:</strong> Got 1 "Yes" (or pivoted and trying again)
              </label>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What to Do Right Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600" />
                The 90-Minute Sprint
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Set a timer. Pick your Cobblestone. Write the 6-part anatomy. Send it to one person who
                has that problem. Ask:
              </p>
              <p className="text-sm italic text-gray-700 bg-indigo-50 p-3 rounded">
                "Would you pay £X for this? If not, what would you pay for?"
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                Your Primary Win Condition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Draft your offer outline using the Cobblestone Method. If you get one "Yes, tell me when
                it's ready," you have permission to build.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Secondary Bridges</h3>
            <div className="space-y-3">
              <Link
                href="/offer/pricing"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
              >
                <DollarSign className="w-4 h-4" />
                Next: Refine your pricing model
              </Link>
              <Link
                href="/marketing/first-customers"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                Next: Find those 3 validation conversations
              </Link>
              <Link
                href="/start/business-models"
                className="flex items-center gap-2 text-indigo-600 font-medium hover:underline"
              >
                <Target className="w-4 h-4" />
                Remind me which model I picked
              </Link>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-2">Critical Reality Check</p>
              <p className="text-sm text-gray-700">
                Do not pass Go. Do not collect £200. Do not build a website. Do not buy a domain. Do not
                register an LLC until you have one person who said "Yes, I'll buy that." The business
                starts when someone pays, not when you're ready.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
