import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Your First Offer: The 7-Day Ship-It Framework',
  description: 'Build an offer you can sell in 7 days. Stop perfecting, start selling. The 4-part formula for your first £297-500 offer.',
};

export default function FirstOfferPage() {
  return (
    <>
      <ScrollToTop />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="mb-12">
          <Link href="/offer" className="text-orange-600 hover:underline text-sm">
            ← Back to Offer Hub
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Your First Offer: The 7-Day Ship-It Framework
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Stop perfecting. Start selling. Here's how to build an offer that you can sell in 7 days—even if you're starting from scratch.
            </p>
            <p className="text-lg text-gray-700 italic border-l-4 border-indigo-600 pl-6">
              "I spent 6 weeks perfecting my first offer. Result: 0 sales. I built my second offer in 3 days. Result: 2 clients, £4,600 revenue. The difference wasn't the offer—it was the deadline."
            </p>
          </div>
        </section>

        {/* The First Offer Myth */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Perfecting Your First Offer is a Trap</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The 'Perfect Offer' Illusion</h3>
              <p className="text-gray-700">
                Gurus say: "Your offer must be irresistible!" Reality: You don't know what's irresistible until someone pays for it. Perfection is procrastination disguised as quality. You can't design an irresistible offer in a vacuum. You need real feedback from real people willing to spend money. The first offer isn't about perfection—it's about validation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Research Trap</h3>
              <p className="text-gray-700">
                "I'm researching my market." Translation: "I'm scared to ask for money." Research is valuable, but 90% of research is stalling. You can read psychology books, analyze competitors, and survey people for 6 weeks. Or you can build something, ask 10 people if they'll buy it, and get real data in 7 days. One costs time. One costs money. One teaches you what actually works.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Feature Creep Problem</h3>
              <p className="text-gray-700">
                Your first offer starts as "I'll help with X." Then it becomes "I'll help with X, Y, Z, plus a bonus, plus a guarantee, plus lifetime access." Each feature you add makes people less likely to buy, not more likely. Why? More features = more reasons to hesitate. More complexity = more risk. Simple offers sell. Complex offers require trust you don't have yet.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: Feature Creep Death Spiral</h4>
              <p className="text-gray-700 text-sm">
                "My first offer: 'I'll help startups with growth, product design, fundraising coaching, plus networking introductions, plus ongoing support, plus a personal visit to your office!' Result: Spent 3 weeks building it. Posted it. Got 0 inquiries in 2 weeks. Too many options. Too much commitment. Too scary."
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
              <p className="text-purple-900 font-bold mb-2">
                Solo Rule: "If you can't explain your first offer in one sentence, it's too complex. 'I help [niche] with [problem] for [price].' That's it. If that doesn't fit, simplify."
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">The 7-Day Rule</h4>
              <p className="text-gray-700 text-sm">
                If it takes more than 7 days to build the offer, you're building a product, not an offer. Offers are simple. Products are complex. Offers are quick to ship. Products are quick to sink money into. You're building an offer.
              </p>
            </div>
          </div>
        </section>

        {/* The Offer Formula */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 4-Part First Offer Framework</h2>
          <p className="text-gray-700 mb-8">
            This is the only framework you need. Four simple parts. Every successful first offer has all four. No exceptions.
          </p>

          <div className="space-y-8">
            {/* Part 1 */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm">Part 1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Skill (What You Do)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-3">
                    Pick ONE skill you can deliver TODAY (not "learn next month"). This isn't theoretical. This is something you've done before for yourself or others, and you're good at it.
                  </p>
                  <div className="bg-white border border-blue-200 rounded p-4">
                    <p className="text-sm text-gray-700 font-bold mb-2">Examples of Real Skills:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Email copywriting (you've written sequences that convert)</li>
                      <li>• Shopify setup (you've built 3+ stores)</li>
                      <li>• LinkedIn strategy (you've grown your own to 2k+ followers)</li>
                      <li>• Google Ads audits (you've run campaigns that hit ROAS targets)</li>
                      <li>• Notion database setup (you've built systems for freelancers)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4">
                  Solo Rule: "Don't pick a skill you want to learn. Pick a skill you can deliver at 8/10 quality right now, today, without googling."
                </p>
              </div>
            </div>

            {/* Part 2 */}
            <div className="border-2 border-green-200 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">Part 2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem (What You Solve)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-3">
                    Find a specific problem that causes pain TODAY. This pain must be real: it costs them money, loses them sleep, or kills their business opportunities. Generic problems don't sell.
                  </p>
                  <div className="bg-white border border-green-200 rounded p-4">
                    <p className="text-sm text-gray-700 font-bold mb-2">✓ Strong Problems (Specific):</p>
                    <ul className="text-sm text-gray-700 space-y-1 mb-3">
                      <li>• SaaS founders' onboarding emails have &lt;10% open rate</li>
                      <li>• Shopify store owners lose £500/month to abandoned carts</li>
                      <li>• Freelancers can't track which clients are profitable</li>
                    </ul>
                    <p className="text-sm text-gray-700 font-bold mb-2">✗ Weak Problems (Generic):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Help businesses grow</li>
                      <li>• Improve your marketing</li>
                      <li>• Make more sales</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
                  Solo Rule: "If the problem doesn't cause them to lose money or sleep, it's not painful enough. Choose a different problem."
                </p>
              </div>
            </div>

            {/* Part 3 */}
            <div className="border-2 border-orange-200 rounded-lg p-8 bg-orange-50">
              <div className="mb-4">
                <span className="inline-block bg-orange-600 text-white font-bold px-3 py-1 rounded text-sm">Part 3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Price (What You Charge)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-3">
                    First offer pricing: £100-500. This is the impulse buy range. They can say yes immediately without scheduling a call or "thinking about it."
                  </p>
                  <div className="bg-white border border-orange-200 rounded p-4">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Why this range?</strong> Low enough that price isn't the objection. High enough that you feel compensation. Too low (£20-50) and people don't value it. Too high (£1000+) and they need a sales call.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4">
                  Solo Rule: "Price it so that YOU feel slightly underpaid. That means it's easy for them to say yes."
                </p>
              </div>
            </div>

            {/* Part 4 */}
            <div className="border-2 border-red-200 rounded-lg p-8 bg-red-50">
              <div className="mb-4">
                <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded text-sm">Part 4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Delivery (How You Do It)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-3">
                    Delivery must be: (1) under 10 hours, (2) async when possible, (3) with a clear outcome.
                  </p>
                  <div className="bg-white border border-red-200 rounded p-4">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Why 10 hours?</strong> At 10 hours, you're profitable. Beyond 10, you're trapped in time-for-money. Your hourly rate collapses.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Why async?</strong> Live calls require synchronization. Async (email, Loom, PDF) scales to multiple clients simultaneously.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 italic border-l-4 border-red-300 pl-4">
                  Solo Rule: "If delivery takes &gt;10 hours, you're selling a project, not an offer. Projects require enormous trust. Offers are low-risk buys."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Formula Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Formula in Action: 3 Real Examples</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Example A: Service Offer</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Skill:</strong> Email copywriting</p>
                <p><strong>Problem:</strong> SaaS onboarding emails convert at &lt;10% (should be 30%+)</p>
                <p><strong>Price:</strong> £297</p>
                <p><strong>Delivery:</strong> 3-hour audit of existing emails + 5-hour rewrite of sequence → deliver via Google Doc</p>
                <p className="text-sm text-gray-600 mt-3">Total time: 8 hours. Client gets new email sequence. You get £297. Your rate: £37/hour, but you have proof it works.</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Example B: Product Offer</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Skill:</strong> Notion database design</p>
                <p><strong>Problem:</strong> Freelancers manually track clients in spreadsheets (confusing, error-prone)</p>
                <p><strong>Price:</strong> £47</p>
                <p><strong>Delivery:</strong> Pre-built Notion template, instant download, 2-minute setup video</p>
                <p className="text-sm text-gray-600 mt-3">Total time to build: 6 hours. Sell unlimited copies. Zero delivery time (automated). Profit scales infinitely.</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Example C: Content Offer</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Skill:</strong> Google Ads analysis</p>
                <p><strong>Problem:</strong> E-commerce stores have low ROAS because their Ads setup wastes money</p>
                <p><strong>Price:</strong> £197</p>
                <p><strong>Delivery:</strong> Audit their Ads account (90 min) → record 30-minute Loom video with recommendations → deliver within 48 hours</p>
                <p className="text-sm text-gray-600 mt-3">Total time: 2 hours. Client gets specific fixes. You get £197. Deliver via video (scalable, no call needed).</p>
              </div>
            </div>
          </div>
        </section>

        {/* First Offer Scorecard */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your First Offer Scorecard</h2>
          <p className="text-gray-700 mb-6">
            Rate your offer 1-5 on each criterion. Total of 20 points possible. Threshold: 15+ = ready to ship.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-4 py-3 text-white font-bold">Criterion</th>
                  <th className="text-left px-4 py-3 text-white font-bold">Score (1-5)</th>
                  <th className="text-left px-4 py-3 text-white font-bold">What to Ask Yourself</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Skill Clarity</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5" /></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Can I explain what I do in 10 words? Do I have proof I can do it?</td>
                </tr>
                <tr className="border-t border-gray-200 bg-blue-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Problem Pain</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5" /></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Does this problem cost them money or lose them sleep? Is it painful enough to pay?</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Price Impulse</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5" /></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Can they say yes without a meeting? Is it in the £100-500 range?</td>
                </tr>
                <tr className="border-t border-gray-200 bg-blue-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Delivery Speed</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5" /></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Can I deliver in under 10 hours? Is it mostly async?</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">✅ Scoring Guide:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>15-20 points:</strong> Ready to ship. Build today.</li>
              <li><strong>10-14 points:</strong> Fix one weak area and retest.</li>
              <li><strong>&lt;10 points:</strong> Start over. Find a different offer.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
            <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: Low Scorecard</h4>
            <p className="text-gray-700 text-sm">
              "My first offer: 'I'll help you grow your business.' Score: Skill clarity 2/5 (vague), Problem pain 1/5 (not specific), Price impulse 2/5 (should be £297), Delivery speed 1/5 (I'm thinking 20 hours). Total: 6/20. Kill this offer. It's broken."
            </p>
          </div>
        </section>

        {/* Playbooks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">First Offer Playbooks That Actually Work</h2>
          <p className="text-gray-700 mb-8">
            Pick ONE playbook that matches your offer model. Follow the day-by-day timeline. Execute exactly as written.
          </p>

          <div className="space-y-12">
            {/* Playbook A */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook A: Service First Offer</h3>
              <p className="text-gray-700 mb-4">
                <strong>Template:</strong> I'll [skill] for [niche] to fix [problem] for [price]
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Real Examples:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• "I'll write your SaaS onboarding email sequence to increase opens from 8% to 30% for £297"</li>
                  <li>• "I'll design your Shopify homepage for e-commerce conversion for £497"</li>
                  <li>• "I'll audit your Google Ads account to improve your ROAS for £197"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">The 7-Day Timeline:</h4>
                <div className="bg-white border border-blue-200 rounded p-4 space-y-3 text-sm">
                  <p><strong>Day 1-2 Setup:</strong> Create a Carrd page: headline, 3 bullet points of outcomes, price, Calendly link. Write copy: "I help [niche] fix [problem]. I'm taking 3 clients at £[price]."</p>
                  <p><strong>Day 3 Launch:</strong> Post on LinkedIn: "I'm offering [your offer] to [niche]. 3 spots this week. Interested? Reply."</p>
                  <p><strong>Day 4-5 Outreach:</strong> DM 10 people in your network who fit the niche: "Hey [name], I'm now offering [offer]. Thought of anyone who needs this?" (Say yes/no, don't include the URL yet)</p>
                  <p><strong>Day 6-7 Close:</strong> If someone shows interest, send Calendly link. Keep call to 15 min. Send invoice immediately after.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-blue-200 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Real Example: Alex's Email Sequence Offer</h4>
                <p className="text-sm text-gray-700 mb-2">
                  "I'm offering 'Email Sequence Audit + Rewrite for SaaS Founders' for £297. Day 3 I posted on LinkedIn. Day 4: 3 comments. Day 5: Send Calendly to 2 who said interesting. Day 6: 1 person booked. £297 landed. Day 8-9: 8 hours delivery. Testimonial: 'Opens went 8% → 28%.' Now I have proof."
                </p>
                <p className="text-sm text-gray-600"><strong>Lesson:</strong> First offer gets you a client + testimonial. Not rich, just validated.</p>
              </div>
            </div>

            {/* Playbook B */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook B: Product First Offer</h3>
              <p className="text-gray-700 mb-4">
                <strong>Template:</strong> [Product] for [niche] that helps them [outcome]
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Real Examples:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Notion template for freelance designers to track all clients in one place (£47)</li>
                  <li>• Email course for SaaS founders on improving onboarding (£97)</li>
                  <li>• Google Sheets audit framework for e-commerce stores to track metrics (£197)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">The 7-Day Timeline:</h4>
                <div className="bg-white border border-green-200 rounded p-4 space-y-3 text-sm">
                  <p><strong>Day 1-3 Build:</strong> Create the minimal product. Template? Notion template. Course? Minimum 3 lessons. App? MVP only. No fancy features. Functional only.</p>
                  <p><strong>Day 3-4 Setup:</strong> Upload to Gumroad or Lemon Squeezy. Create a simple landing page or use Carrd.</p>
                  <p><strong>Day 5-6 Launch:</strong> Post in 3 communities where your niche hangs out (Reddit, Facebook Groups, Slack communities). Not as ads. As genuine help: "Built this for [niche], thought you might find it useful."</p>
                  <p><strong>Day 7 Nurture:</strong> DM 5 people outside communities: "I built [product], would love your feedback, £47."</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-green-200 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Real Example: Sarah's Notion Template</h4>
                <p className="text-sm text-gray-700 mb-2">
                  "I built a Notion template that helps freelancers track clients, projects, and profitability. Day 1-2: Built template. Day 3: Set up Gumroad. Day 4: Posted in 2 designer communities. Day 5-6: 4 organic sales, £188. Day 7: 2 more sales, £94. Week 1 total: £282. No back-and-forth. Instant delivery. Infinite scale."
                </p>
                <p className="text-sm text-gray-600"><strong>Lesson:</strong> Products are the only first offers where you can make money while sleeping.</p>
              </div>
            </div>

            {/* Playbook C */}
            <div className="border-2 border-orange-300 rounded-lg p-8 bg-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook C: Content First Offer</h3>
              <p className="text-gray-700 mb-4">
                <strong>Template:</strong> I'll analyze your [thing] and send you a [format] with [outcome]
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Real Examples:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• "I'll audit your Google Ads and send a 20-minute Loom video with fixes for £197"</li>
                  <li>• "I'll review your sales page and send a PDF of 10 specific improvements for £97"</li>
                  <li>• "I'll analyze your email sequence and send a report with copy rewrites for £147"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">The 7-Day Timeline:</h4>
                <div className="bg-white border border-orange-200 rounded p-4 space-y-3 text-sm">
                  <p><strong>Day 1-2 Setup:</strong> Create a Typeform for clients to submit their thing (Ads account, URL, email, etc.). Create a Calendly or just use email for delivery timing.</p>
                  <p><strong>Day 3-5 Warm-Up:</strong> Post in 3 communities: "I'm practicing [skill]. Doing 5 free audits this week. Reply if interested." Do 5 free audits (8-10 hours). Collect feedback.</p>
                  <p><strong>Day 6-7 Paid Launch:</strong> Post again: "Did 5 free audits. Now doing 3 paid this week at £197. I have 2 spots open. Reply." Close whoever bites.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-orange-200 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Real Example: Tom's Ads Audit</h4>
                <p className="text-sm text-gray-700 mb-2">
                  "I audited Google Ads for e-commerce stores. Day 1-2: Built Typeform. Day 3: Posted free audit offer in 3 communities. Day 4: Got 8 inquiries, did 5 free audits (took 10 hours). Day 5: Collected testimonials. Day 6: Posted paid offer at £197. Day 7: 2 sales = £394. Total time invested: 14 hours. Rate: £28/hour, but I now have 5 free leads + 2 paid customers + proof that it works."
                </p>
                <p className="text-sm text-gray-600"><strong>Lesson:</strong> Content offers let you validate with free first, then charge. Lowest risk.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-8">
            <p className="text-purple-900 font-bold">
              Solo Constraint: "You can only launch ONE first offer. Don't try all three playbooks. Pick the one that matches your skill and comfort level today."
            </p>
          </div>
        </section>

        {/* Pricing Decision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Price Your First Offer</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">The First Offer Pricing Formula</h3>
              <div className="bg-white border border-gray-300 rounded p-4 text-center mb-4">
                <p className="text-lg font-mono font-bold text-gray-900">
                  Your Hourly Rate × Delivery Hours × 0.5 = First Offer Price
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Why 0.5? Because you're learning, you're fast, and you want impulse buys instead of "thinking about it" delays.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-3">Example Calculation:</p>
                <p className="text-gray-700">
                  Your target hourly rate: £100/hour<br/>
                  Delivery time: 8 hours<br/>
                  Formula: £100 × 8 × 0.5 = £400
                </p>
              </div>

              <p className="text-gray-700 mb-3">
                <strong>But:</strong> All first offers should be £100-500. If this formula gives you &gt;£500, narrow the scope instead of raising the price.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">The 3 Pricing Rules</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 1: Impulse Buy Range</p>
                  <p className="text-gray-700 text-sm">£100-500. They can say yes without a meeting or internal approval.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 2: Half Your Rate</p>
                  <p className="text-gray-700 text-sm">You're learning. Price it as a "founding customer" deal. You'll raise it after 3 clients.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 3: Round Numbers</p>
                  <p className="text-gray-700 text-sm">£297 feels premium vs £289. £497 vs £485. Round numbers seem intentional.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Pricing by Model</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Service Offers:</strong> £297-497 (audit, strategy, design work)</p>
                <p><strong>Product Offers:</strong> £47-97 (template, small resource)</p>
                <p><strong>Content Offers:</strong> £97-197 (video analysis, PDF report)</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: Pricing Paralysis</h4>
              <p className="text-gray-700 text-sm">
                "I wasn't sure if £297 was right, so I priced my first offer at £1,500. I wanted it 'premium.' Result: 0 sales in 30 days. I lowered it to £297. Result: 3 sales in 7 days. Same offer, same skill. Price was the only problem."
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">✅ Real Pricing Arc</h4>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Alex's Email Offer Pricing Evolution:</strong>
              </p>
              <p className="text-gray-700 text-sm mb-2">
                First 3 clients: £297 each = £891<br/>
                Next 10 clients: Raised to £447 = £4,470<br/>
                Next 20 clients: Raised to £697 = £13,940<br/>
                <strong>Year 1 Total:</strong> £19,301
              </p>
              <p className="text-gray-700 text-sm">
                Started low to get yeses. Raised price every 3-10 clients. Never would have made £19k if he'd stuck with £1,500 and gotten 0 sales.
              </p>
            </div>
          </div>
        </section>

        {/* The 7-Day Validation Test */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 7-Day Validation Test</h2>
          <p className="text-gray-700 mb-6">
            This is your proof. Execute this exactly. No modifications. No "personalizing" it. Follow the steps.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">📅 Day-by-Day Breakdown</h3>
            </div>

            <div>
              <div className="flex gap-4 mb-3">
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded min-w-fit">Day 1-2</span>
                <div>
                  <p className="font-bold text-gray-900">Build</p>
                  <p className="text-sm text-gray-700">Create your offer page (Carrd or Notion). Write headline, describe outcomes, state price. Get Calendly link. Done by EOD Day 2.</p>
                </div>
              </div>

              <div className="flex gap-4 mb-3">
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded min-w-fit">Day 3</span>
                <div>
                  <p className="font-bold text-gray-900">Announce</p>
                  <p className="text-sm text-gray-700">Post on LinkedIn: "I'm offering [offer] to [niche]. 3 spots this week. Comment if interested."</p>
                </div>
              </div>

              <div className="flex gap-4 mb-3">
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded min-w-fit">Day 4-5</span>
                <div>
                  <p className="font-bold text-gray-900">DM Outreach</p>
                  <p className="text-sm text-gray-700">Send 10 DMs: "Hey [name], I'm now offering [offer] to [niche]. Know anyone who needs this? Just yes/no for now."</p>
                  <p className="text-xs text-gray-600 mt-2"><strong>Real DM Example:</strong> "Hey Sarah, I'm now offering email sequence audits for SaaS founders. I help them go from 8% open rate to 28%. Interested or know someone who is?"</p>
                </div>
              </div>

              <div className="flex gap-4 mb-3">
                <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded min-w-fit">Day 6-7</span>
                <div>
                  <p className="font-bold text-gray-900">Close</p>
                  <p className="text-sm text-gray-700">If someone shows interest: Send Calendly link. Keep call 15 min max. Send invoice immediately after call ends.</p>
                  <p className="text-xs text-gray-600 mt-2"><strong>Close Script:</strong> "Great! Let's chat 15 min and I'll show you exactly what I'd do. Pick a time: [Calendly]"</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 rounded p-4 mt-6">
              <h4 className="font-bold text-gray-900 mb-3">Success Metrics</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ <strong>1 sale:</strong> Validated. This offer works.</li>
                <li>✅ <strong>3+ conversations:</strong> Promising. Keep going.</li>
                <li>❌ <strong>0 conversations:</strong> Niche or offer is wrong. Pivot.</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">What to Do If No Sales</h4>
              <p className="text-gray-700 text-sm mb-3">
                Don't spend 30 days "improving" your offer. Diagnose fast:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Lower price by 30% and retest</li>
                <li>• Narrow the niche (too broad = no one buys)</li>
                <li>• Change the problem you're solving</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-8">
            <p className="text-purple-900 font-bold mb-2">
              Solo Rule: "If you can't get 1 sale in 7 days, your offer is wrong. Don't spend 30 days 'improving' it. Kill it and build a new one."
            </p>
            <p className="text-purple-900 text-sm">
              Your job is validation speed, not perfection.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-gray-900 mb-3">The 3-Client Rule</h4>
            <p className="text-gray-700 text-sm">
              After 3 clients, you know if the offer works. You have testimonials. You have a workflow. You have proof. After 10, you have a real business. Stop at 3 if you're not excited. Continue if you are. Don't waste time scaling something you hate.
            </p>
          </div>
        </section>

        {/* Your Next Step */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: Ship Your First Offer Today</h2>
          <p className="text-gray-700 mb-4">
            You have the framework. You have the examples. You have the pricing formula. Now: Pick ONE offer. Use the 4-Part Formula. Build it today. Launch tomorrow. Get your first client in 7 days.
          </p>
          <p className="text-gray-700 font-bold text-lg">
            The only way to learn if your offer works is to ask someone to pay for it.
          </p>
        </section>

        {/* Related Guides */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/start/niche-selection" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Niche Selection</p>
              <p className="text-sm text-gray-600">Pick your first niche before you build the offer.</p>
            </Link>
            <Link href="/start/business-models" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Business Models</p>
              <p className="text-sm text-gray-600">Choose Service, Product, or Content before you start.</p>
            </Link>
            <Link href="/marketing/first-customers" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Getting Your First Customers</p>
              <p className="text-sm text-gray-600">Once your offer is built, find 3 people to say yes.</p>
            </Link>
            <Link href="/sales/natural-selling" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Natural Selling</p>
              <p className="text-sm text-gray-600">Close those first customers without scripts.</p>
            </Link>
          </div>
        </section>

        {/* Warning */}
        <section className="mt-12 p-8 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ What NOT to Do</h3>
          <div className="space-y-3">
            <p className="text-gray-700"><strong>❌ Don't build a website.</strong> Carrd is enough. Website = delay.</p>
            <p className="text-gray-700"><strong>❌ Don't create a brand.</strong> Logo, colors, fonts all come after your first sale.</p>
            <p className="text-gray-700"><strong>❌ Don't research for 2 weeks.</strong> Build in 2 days. Research by selling.</p>
            <p className="text-gray-700"><strong>❌ Don't wait until it's perfect.</strong> Ugly offer with 1 sale beats perfect offer with 0.</p>
            <p className="text-gray-700"><strong>❌ Don't discount when someone hesitates.</strong> Say "No problem. Keep my info if circumstances change" and move on.</p>
          </div>
        </section>
      </div>
    </>
  );
}
