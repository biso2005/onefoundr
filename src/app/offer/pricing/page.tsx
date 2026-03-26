import Link from 'next/link';

export const metadata = {
  title: 'Solo Pricing Framework: £100-300/hour Without Leaving Money on the Table | OneFoundr',
  description: 'Stop pricing like an employee. Start pricing like a specialist. The solo pricing formula: project-based, productized, or retainer. Raise prices 25% every 90 days.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/offer" className="text-orange-600 hover:underline text-sm">
            ← Back to Offer Hub
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Pricing for Solopreneurs: The Solo Surcharge</h1>
            <p className="text-xl text-gray-600 mb-6">Stop pricing like an employee. Start pricing like a specialist. Here's how to charge £100-300/hour (or £2k-5k/project) without losing clients.</p>
            <p className="text-lg text-gray-700 italic border-l-4 border-teal-600 pl-6">
              "I charged £50/hour for my first 10 clients. I was 'expensive' compared to employees. I raised it to £150/hour. I got MORE clients, not fewer. The difference wasn't my skill—it was my positioning."
            </p>
          </div>
        </section>

        {/* SECTION: THE PRICING MYTH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hourly and Tiered Pricing Fails for Solos</h2>
          <div className="space-y-6">
            
            {/* The Hourly Trap */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Hourly Trap</h3>
              <p className="text-gray-700 mb-4">Employees make £25-50/hour. You think £75/hour is "good." Agencies charge £150/hour. You don't know this. So you compete on price.</p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <p className="text-sm text-gray-700 font-bold mb-2">The Math:</p>
                <p className="text-sm text-gray-700 mb-2">£75/hour × 20 billable hours/week = £1,500/week</p>
                <p className="text-sm text-gray-700 mb-2">£1,500 × 4 weeks = £6,000/month</p>
                <p className="text-sm text-gray-700">£6,000 × 12 months = £72,000/year (before tax and expenses)</p>
                <p className="text-sm text-gray-700 italic mt-3">After tax (20%), National Insurance (8%), and tools (£200/month): You net £45k. You could've made that as an employee with benefits, holidays, and no "finding clients" stress.</p>
              </div>
              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4">Solo Rule: "If you're charging hourly, you're an expensive employee. If you're charging project rates, you're a specialist. Specialists charge 2-3x hourly rates."</p>
            </div>

            {/* The Tiered Pricing Trap */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Tiered Pricing Trap</h3>
              <p className="text-gray-700 mb-4">Bronze (£500), Silver (£1,000), Gold (£2,000). Problem: 80% of clients pick Bronze. You work 3x as hard for half the money.</p>
              <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Real Example:</p>
                <p className="text-sm text-gray-700">"I offered web design in 3 tiers: Bronze (£500), Silver (£1,500), Gold (£2,500). Result: 16 Bronze, 2 Silver, 0 Gold. I was delivering custom work on 16 projects for £500 each. Revenue: £8,000. Effort: 200 hours. Rate: £40/hour. I switched to ONE tier: £3,000. Revenue: £18,000 from 6 clients. Effort: 100 hours. Rate: £180/hour."</p>
              </div>
              <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">Solo Reality: You can't deliver "Gold" to 10 clients. You'd need a team. You're not building a product; you're trapped in service delivery.</p>
            </div>

            {/* The Competitive Pricing Trap */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Competitive Pricing" Trap</h3>
              <p className="text-gray-700 mb-4">"Market rate" is what agencies charge. You think you must be cheaper. Reality: Clients pay agencies for overhead (offices, managers, profit). You have none of that.</p>
              <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Agency vs. Solo Math:</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Agency Charges:</strong> £200/hour</p>
                <p className="text-sm text-gray-700 mb-2">- Office rent: £500/day</p>
                <p className="text-sm text-gray-700 mb-2">- Manager (20% overhead): £40/hour</p>
                <p className="text-sm text-gray-700 mb-2">- Profit margin (30%): £60/hour</p>
                <p className="text-sm text-gray-700">They keep: £100/hour. You could charge £150/hour and still undercut them.</p>
              </div>
              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4">Solo Constraint: "You should be more expensive per hour than agencies, not cheaper. You have no overhead. All the margin is yours."</p>
            </div>

            {/* Anti-Example */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: The Hourly Burnout Trap</h4>
              <p className="text-gray-700 text-sm">"I charged £50/hour for web design. Result: £40k/year, 60 hours/week, burnout. I switched to £3k/project flat rate. Same clients. Result: £90k/year, 30 hours/week, alive. The difference: 1 pricing model."</p>
            </div>

          </div>
        </section>

        {/* SECTION: THE SOLO PRICING FRAMEWORK */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3 Pricing Models That Work for Solos</h2>
          <div className="space-y-8">
            
            {/* Model 1: Project-Based */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-blue-50">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm">MODEL 1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project-Based Pricing (Most Common)</h3>
              <div className="bg-white border border-blue-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">Your Hourly Rate × Estimated Hours × 1.5 = Project Price</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">The 1.5x is for scope creep, revisions, and your risk.</p>
                <div className="bg-white border border-blue-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Real Example Calculation:</p>
                  <p className="text-gray-700 mb-1"><strong>Your rate:</strong> £100/hour</p>
                  <p className="text-gray-700 mb-1"><strong>Estimated hours:</strong> 20 hours</p>
                  <p className="text-gray-700">£100 × 20 × 1.5 = <strong>£3,000 project price</strong></p>
                </div>
                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">When to Use:</p>
                  <p className="text-gray-700">Service businesses (design, copywriting, consulting, audits, strategy).</p>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4">Solo Rule: "Never reveal your hourly rate. Just give the project price. If they ask your rate, say 'I work on project basis. This will be £3,000.'"</p>
            </div>

            {/* Model 2: Productized Service */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white font-bold px-3 py-1 rounded text-sm">MODEL 2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Productized Service (Best for Scale)</h3>
              <div className="bg-white border border-green-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">Fixed Scope + Fixed Price + Fixed Timeline</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">You've done 5+ projects and see a pattern. You templatize 80% of the work.</p>
                <div className="bg-white border border-green-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Real Examples:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• "Website audit: £497, delivered in 3 days"</li>
                    <li>• "Email sequence: £997, delivered in 7 days"</li>
                    <li>• "SEO audit: £1,497, delivered in 5 days"</li>
                    <li>• "Sales page review: £697, delivered in 2 days"</li>
                  </ul>
                </div>
                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Real Success Story:</p>
                  <p className="text-gray-700 text-sm">"Alex productized his email audits. First 5 audits: 10 hours each at £297 = £30/hour. After productizing: 3 hours each at £997 = £332/hour. Same outcome, 3x revenue, 70% less time."</p>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">Solo Advantage: You deliver in 50% of the time because you're not reinventing. Your effective hourly rate is £200-300/hour, but clients see a fixed price.</p>
            </div>

            {/* Model 3: Retainer */}
            <div className="border-2 border-orange-300 rounded-lg p-8 bg-orange-50">
              <div className="mb-4">
                <span className="inline-block bg-orange-600 text-white font-bold px-3 py-1 rounded text-sm">MODEL 3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retainer (Best for Predictable Revenue)</h3>
              <div className="bg-white border border-orange-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">Monthly Fee for Ongoing Access + Limited Hours</p>
              </div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">Best if you've delivered results for 3+ clients and they want "more."</p>
                <div className="bg-white border border-orange-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Real Examples:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• "£1,500/month for 10 hours of my consulting time"</li>
                    <li>• "£2,000/month for unlimited email copy revisions"</li>
                    <li>• "£997/month for 4 blog posts (monthly)"</li>
                    <li>• "£1,497/month for weekly strategy calls + copy audits"</li>
                  </ul>
                </div>
                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Critical Warning:</p>
                  <p className="text-gray-700 text-sm mb-2">Retainers are time traps if not scoped. You MUST define:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Exactly what's included</li>
                    <li>• What's NOT included (out of scope)</li>
                    <li>• How they request work</li>
                    <li>• Your response time (24 hours? 48 hours?)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4">Solo Rule: "Only offer retainers when you have a productized system. Otherwise you're selling time, and time is finite."</p>
            </div>

            {/* Hybrid Model */}
            <div className="border-2 border-purple-300 rounded-lg p-8 bg-purple-50">
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">ADVANCED</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hybrid Model (Project → Productized → Retainer)</h3>
              <p className="text-gray-700 mb-4">This is what experts do (once you've mastered one model):</p>
              <div className="bg-white border border-purple-200 rounded p-4 space-y-3">
                <p className="text-gray-700"><strong>1. Project (£3k):</strong> Website redesign → Get initial client</p>
                <p className="text-gray-700"><strong>2. Productized (£497):</strong> Website audit → Lead magnet for future projects</p>
                <p className="text-gray-700"><strong>3. Retainer (£1k/month):</strong> Unlimited tweaks after project → Predictable revenue</p>
              </div>
              <p className="text-gray-700 text-sm mt-4">Revenue: £3k (project) + £497 × 10 (audits) = £7,970 Year 1. Plus 3 retainers at £1k/month = £36k Year 2.</p>
            </div>

            {/* Model Selection */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-900 font-bold">Solo Constraint: "You can only run ONE model well. Don't offer project, productized, AND retainer simultaneously. Pick the one that matches your offer and client type. Master it first. Then expand."</p>
            </div>

          </div>
        </section>

        {/* SECTION: PRICING PLAYBOOKS BY BUSINESS TYPE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Charge for Your Business Model</h2>
          <div className="space-y-8">

            {/* Playbook A: Service Business */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook A: Service Business</h3>
              <div className="space-y-4">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-1">Pricing Model:</p>
                  <p className="text-gray-700 text-sm">Project-based or productized</p>
                </div>
                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-1">Hourly Rate Target:</p>
                  <p className="text-gray-700 text-sm">£100-300/hour (effective, not billed hourly)</p>
                </div>
                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Project Rates by Scope:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Audit/Review:</strong> £297-497</li>
                    <li><strong>Small project (5-10 hours):</strong> £1,000-2,000</li>
                    <li><strong>Medium project (20-30 hours):</strong> £3,000-5,000</li>
                    <li><strong>Large project (50+ hours):</strong> £7,500-15,000</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4 mt-4">Solo Rule: "Never charge less than £1,000 for a project. If you do, it's not a project—it's a service—and you're competing with Fiverr for tables scraps."</p>
              <div className="bg-blue-100 border border-blue-300 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Real Example: Sarah's Pricing Journey</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Year 1:</strong> £50/hour → £40k revenue → 60 hours/week (burnout)</p>
                  <p><strong>Year 2:</strong> £100/hour → £65k revenue → 35 hours/week (better)</p>
                  <p><strong>Year 3:</strong> £3,000/project → £95k revenue → 30 hours/week (sustainable)</p>
                  <p className="italic mt-2">Same skill. Different pricing. Different life.</p>
                </div>
              </div>
            </div>

            {/* Playbook B: Product Business */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook B: Product Business</h3>
              <div className="space-y-4">
                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-1">Pricing Model:</p>
                  <p className="text-gray-700 text-sm">Tiered (but simple – only 3 tiers max)</p>
                </div>
                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Tier Structure:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Tier 1:</strong> £47-97 (impulse, low touch, no support)</li>
                    <li><strong>Tier 2:</strong> £197-497 (mid-tier, 2 weeks support, extras)</li>
                    <li><strong>Tier 3:</strong> £997-2,997 (premium, 30-day access, personal support)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-green-300 pl-4 mt-4">Solo Rule: "Only offer Tier 1 for your first product. Don't create a product ladder until you have 100 customers at Tier 1 and clear demand for more."</p>
              <div className="bg-green-100 border border-green-300 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Real Example: Tom's Pricing Mistake</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Product Launch:</strong> Template (£47), Course (£297), Coaching (£1,997)</p>
                  <p><strong>Results:</strong> 400 template sales (£18,800) + 50 course sales (£14,850) + 5 coaching (£9,985) = £43,635</p>
                  <p><strong>Problem:</strong> Spread effort across 3 products. Should've focused only on template until 500+ customers, THEN added course.</p>
                  <p className="italic mt-2">Most revenue came from the cheap offer. He should've doubled down there first.</p>
                </div>
              </div>
            </div>

            {/* Playbook C: Content Business */}
            <div className="border-2 border-orange-300 rounded-lg p-8 bg-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook C: Content Business</h3>
              <div className="space-y-4">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-1">Primary Monetization:</p>
                  <p className="text-gray-700 text-sm">Sponsorships or products (not both at first)</p>
                </div>
                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Sponsorship Rates (by audience size):</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>5k subscribers:</strong> £500 per sponsorship</li>
                    <li><strong>15k subscribers:</strong> £1,000 per sponsorship</li>
                    <li><strong>50k subscribers:</strong> £2,000+ per sponsorship</li>
                  </ul>
                </div>
                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-1">Post Frequency:</p>
                  <p className="text-gray-700 text-sm">Typically 2-4 sponsor posts/month = £1,000-8,000/month at scale</p>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4 mt-4">Solo Rule: "Content businesses monetize via sponsorships OR products. Don't try both simultaneously. Sponsorships need audience first. Products can work at 1k followers."</p>
              <div className="bg-orange-100 border border-orange-300 rounded p-4 mt-4">
                <p className="font-bold text-gray-900 mb-2">Real Example: Tom's Newsletter Strategy</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Audience:</strong> 12k subscribers (took 18 months to build)</p>
                  <p><strong>Sponsorship Model:</strong> £500/post, 4 posts/month = £2,000/month recurring</p>
                  <p><strong>Issue:</strong> Took 18 months for audience. Product path would have generated revenue at 1k subscribers (12 months earlier).</p>
                  <p className="italic mt-2">Lesson: If you have an audience, sponsorships win. If you're building audience, products generate revenue faster.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: THE PRICING TEST */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Know If Your Price is Right</h2>
          <div className="space-y-8">

            {/* Test 1 */}
            <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Test 1: The First 3 Clients</h3>
              <div className="bg-white border border-blue-200 rounded p-4 mb-4">
                <p className="text-gray-700 mb-3"><strong>Close your first 3 clients at your price and track the response:</strong></p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li><strong>✅ All 3 say yes immediately:</strong> Price is too low. Leave money on table</li>
                  <li><strong>✅ 1-2 say yes, 1 hesitates/ghosts:</strong> Price is right. Perfect balance</li>
                  <li><strong>❌ All 3 ghost or say "expensive":</strong> Price is too high. Lower 25%</li>
                </ul>
              </div>
              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4">Solo Rule: "If your first 3 clients all say yes without hesitation, you left £1,000+ on the table. Raise it 50% after 3 clients."</p>
            </div>

            {/* Test 2 */}
            <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Test 2: The Price Increase (After 10 Sales)</h3>
              <div className="bg-white border border-green-200 rounded p-4 mb-4">
                <p className="text-gray-700 mb-3"><strong>After 10 clients, raise price 50% and measure conversion:</strong></p>
                <ul className="text-gray-700 text-sm space-y-3">
                  <li><strong>Conversion stays above 30%:</strong> Keep new price. Raise again in 90 days</li>
                  <li><strong>Conversion drops to 20-30%:</strong> You found your ceiling. Keep this price 6-12 months</li>
                  <li><strong>Conversion drops below 20%:</strong> Lowered too much. Lower by 25% instead</li>
                </ul>
              </div>
              <div className="bg-green-100 border border-green-300 rounded p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">Real Example: Alex's Price Escalation</p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>First 3 clients at £297:</strong> All 3 said yes → Raise to £447</p>
                  <p><strong>Next 5 clients at £447:</strong> 3 said yes (60% conversion) → Keep it</p>
                  <p><strong>Next 10 clients at £447:</strong> 7 said yes (70% conversion) → Raise to £697</p>
                  <p><strong>Next 10 clients at £697:</strong> 6 said yes (60% conversion) → Found sweet spot, stay here</p>
                  <p className="italic mt-2">Income progression: £891 (first 3) → £2,235 (5 more) → £6,970 (10 more) → £4,182 (last 6) = £14,278 in 28 sales</p>
                </div>
              </div>
            </div>

            {/* Test 3 */}
            <div className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Test 3: The Alternative Test (Ask "What Would an Agency Charge?")</h3>
              <div className="bg-white border border-orange-200 rounded p-4 mb-4">
                <p className="text-gray-700 mb-3"><strong>Ask your clients (after delivering):</strong> "What would you pay an agency for this same work?"</p>
                <ul className="text-gray-700 text-sm space-y-3">
                  <li><strong>They say £5,000 and you charged £1,000:</strong> You're 5x too cheap. Raise to £3,000</li>
                  <li><strong>They say £5,000 and you charged £4,000:</strong> Perfect pricing</li>
                  <li><strong>They say £2,000 and you charged £1,500:</strong> Slightly underpriced. Raise 25%</li>
                </ul>
              </div>
              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4">Solo Rule: "Price against alternatives (what they'd pay elsewhere), not your costs (what it takes you to produce). Your costs are irrelevant."</p>
            </div>

            {/* The 90-Day Rule */}
            <div className="bg-purple-50 border border-purple-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 90-Day Pricing Rule</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Every 90 days, raise your price 25-50%</strong></p>
                <p className="text-gray-700">If you lose clients, you know your ceiling. If you don't, keep raising.</p>
                <div className="bg-white border border-purple-300 rounded p-4">
                  <p className="text-sm text-gray-700"><strong>Example progression (£297 starting point):</strong></p>
                  <p className="text-sm text-gray-700">Days 1-90: £297 | Days 91-180: £447 | Days 181-270: £697 | Days 271-365: £1,000</p>
                  <p className="text-sm text-gray-700 italic mt-2">Same offer, 4 price increases per year. £45k (first quarter) → £65k (second) → £90k (third) → £130k+ (fourth)</p>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4 mt-4">Solo Constraint: "If you haven't raised your price in 6 months, you're undercharging. Guaranteed."</p>
            </div>

          </div>
        </section>

        {/* SECTION: RAISING PRICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Raise Prices Without Losing Clients</h2>
          <div className="space-y-6">

            {/* The 25% Rule */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rule 1: The 25% Raise</h3>
              <p className="text-gray-700 mb-2">Raise 25% at a time. Clients won't notice the difference.</p>
              <p className="text-gray-700 text-sm">Example: £400 → £500. That's only £100 difference per project. If they paid £400, they'll pay £500.</p>
            </div>

            {/* The New Client Rule */}
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rule 2: The New Client Rule</h3>
              <p className="text-gray-700 mb-2">Only raise prices on new clients. Keep existing clients locked in at old price (or raise 10% per year).</p>
              <p className="text-gray-700 text-sm">Why: Goodwill. Existing clients got you to where you are. Protect that relationship.</p>
            </div>

            {/* The Grandfather Rule */}
            <div className="border-l-4 border-orange-600 pl-6 py-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rule 3: The Grandfather Rule</h3>
              <p className="text-gray-700 mb-2">If someone bought at £297, they're locked in at £297 until capacity is hit.</p>
              <p className="text-gray-700 text-sm">Once you're at capacity: "Hey! I'm fully booked. New clients are £447. You're still £297 for follow-up work, but new prospects are at the new rate. Sound good?"</p>
            </div>

            {/* Email Script */}
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Price Increase Email (For New Clients)</h3>
              <div className="bg-white border border-blue-200 rounded p-4 font-mono text-sm text-gray-700 space-y-3">
                <p><strong>Subject: Price update – 3 spots left at current rate</strong></p>
                <p>Hi there,</p>
                <p>A quick heads-up: Starting [DATE], my [offer name] price is increasing from £X to £Y.</p>
                <p>Current clients are locked in at £X. If you've been thinking about working together, now's the time.</p>
                <p>I'm booking 3 more clients at £X before the increase kicks in. After that, all new projects are at £Y.</p>
                <p>Open? Calendly: [LINK]</p>
                <p>Cheers,<br/>[Your Name]</p>
              </div>
              <div className="mt-4 bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-bold text-gray-900 mb-2">Expected Response Rates:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 30% will book immediately (scarcity works)</li>
                  <li>• 60% will ignore (fine, they weren't ready)</li>
                  <li>• 10% will say "too expensive" (they weren't your client)</li>
                </ul>
              </div>
            </div>

            {/* The Annual Raise */}
            <div className="bg-green-50 border border-green-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Rule 4: The Annual Raise (Every January)</h3>
              <p className="text-gray-700 mb-3">Raise prices 20-30% every year. This is your "cost of living" increase. Your clients expect it.</p>
              <div className="bg-white border border-green-200 rounded p-4 text-sm text-gray-700">
                <p><strong>Real Example Timeline:</strong></p>
                <p>Jan 2024: £1,000/project</p>
                <p>Jan 2025: £1,300/project (+30%)</p>
                <p>Jan 2026: £1,700/project (+30%)</p>
                <p className="italic mt-2">Year 1: 20 projects = £20k. Year 2: 18 projects (lost 2 to price) = £23.4k. Year 3: 16 projects (lost 2 more) = £27.2k. Revenue up 36% while working 20% less.</p>
              </div>
            </div>

            {/* Anti-Example */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: Analysis Paralysis</h4>
              <p className="text-gray-700 text-sm">"I kept my price at £297 for 2 years because I was scared to lose clients. When I finally raised to £497 (after 2 years!), I lost 2 clients but gained 5. The 2 I lost were discounters anyway. I was leaving £10k+ on the table every year."</p>
            </div>

            {/* Real Success Story */}
            <div className="bg-green-50 border border-green-300 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">✅ Real Success: Sarah's Price Raise</h4>
              <p className="text-gray-700 text-sm">"I raised my web design from £1,500 to £2,000. Lost 20% of leads. Revenue increased 40% because I worked fewer hours for more money. New rate: £2,000 × 20 projects = £40k (vs. £1,500 × 25 projects = £37.5k). Same workload, more money."</p>
            </div>

          </div>
        </section>

        {/* SECTION: PRICING SCORECARD */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Pricing Scorecard</h2>
          <p className="text-gray-700 mb-6">Rate yourself 1-5 on each dimension. Total of 20 points. Above 15 = confident, below 10 = needs work.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-4 py-3 text-white font-bold">Dimension</th>
                  <th className="text-left px-4 py-3 text-white font-bold">Your Score (1-5)</th>
                  <th className="text-left px-4 py-3 text-white font-bold">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Clarity</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Do you have ONE pricing model (not 3)? Can you explain it in 1 sentence?</td>
                </tr>
                <tr className="border-t border-gray-200 bg-blue-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Competence</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Have you delivered 3+ projects? Do you know your actual time?</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 font-bold text-gray-900">Confidence</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Would you feel defensive discussing your price? Or are you proud of it?</td>
                </tr>
                <tr className="border-t border-gray-200 bg-blue-50">
                  <td className="px-4 py-3 font-bold text-gray-900">Market Awareness</td>
                  <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Do you know what clients would pay an agency? Are you pricing based on that?</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">✅ Scoring Guide:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>15-20 points:</strong> Your pricing is solid. Raise it 25% every 90 days.</li>
              <li><strong>10-14 points:</strong> You're close. Fix one weak area (usually "Market Awareness").</li>
              <li><strong>&lt;10 points:</strong> You need to rethink pricing completely. Go back to first-offer page.</li>
            </ul>
          </div>
        </section>

        {/* SECTION: NEXT STEP */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: Raise Prices Today</h2>
          <p className="text-gray-700 mb-4">Calculate your project price using the formula above. If you've had 3+ clients, raise it 25%. Post your new price on LinkedIn today with the email script provided.</p>
          <p className="text-gray-700 font-bold text-lg">"The best time to raise prices was yesterday. The second-best time is today."</p>
        </section>

        {/* SECTION: RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/offer/first-offer" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Your First Offer</p>
              <p className="text-sm text-gray-600">If you don't have an offer yet, start here.</p>
            </Link>
            <Link href="/offer/positioning" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Positioning for Solos</p>
              <p className="text-sm text-gray-600">Price is meaningless without positioning. Do this next.</p>
            </Link>
            <Link href="/sales/pricing-conversations" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Pricing Conversations</p>
              <p className="text-sm text-gray-600">How to talk about money without flinching.</p>
            </Link>
            <Link href="/offer" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Offer Hub</p>
              <p className="text-sm text-gray-600">Back to all offer frameworks.</p>
            </Link>
          </div>
        </section>

        {/* SECTION: WARNING BOX */}
        <section className="mt-12 p-8 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Critical Warning</h3>
          <div className="space-y-3">
            <p className="text-gray-700"><strong>❌ If you're charging hourly, stop today.</strong> Switch to project pricing immediately. Hourly pricing caps your income at hours worked. Project pricing caps your income at value delivered.</p>
            <p className="text-gray-700"><strong>❌ If your rate is under £75/hour effective, you're undercharging.</strong> Even McDonald's pays better. You have leverage, experience, and judgment. Price accordingly.</p>
            <p className="text-gray-700"><strong>❌ If you haven't raised prices in 6 months, you're leaving thousands on the table.</strong> Not hundreds. Thousands. Raise today.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
