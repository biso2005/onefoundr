import Link from 'next/link';
import { ChevronRight, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function NicheSelectionPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumbs */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <ChevronRight size={14} />
            <Link href="/start" className="text-gray-600 hover:text-gray-900">Start</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900">Niche Selection</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">Start Solo</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Niche Selection for Solopreneurs
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
            The Profitability Matrix: Why "pick a niche" advice is killing your business—and how to find one that actually pays you £100+/hour without hiring.
          </p>
          
          {/* Hook Anecdote */}
          <div className="bg-white border-l-4 border-emerald-500 p-6 rounded-r-lg max-w-2xl">
            <p className="text-sm text-gray-600 mb-2"><strong>Real example:</strong></p>
            <p className="text-base text-gray-900 leading-relaxed mb-2">
              I tested two niches in 90 days. <strong>Coaching (personality niches):</strong> Six clients over 6 months = £2,400 total. <strong>Email automation (B2B SaaS):</strong> Three clients in 30 days = £8,500 total. Same person. Same skills. Different niche = 3.5x more revenue in half the time.
            </p>
            <p className="text-sm text-gray-600">
              The difference wasn't the work. It was niche selection.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-20">

        {/* SECTION 1 — THE NICHE MYTH */}
        <section className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Four Niche Myths Killing Your Business</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Myth 1: Specificity Lie */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">❌ Myth 1: The Specificity Lie</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bad:</strong> "Yoga coaching for executives" (too narrow before you have clients)
              </p>
              <p className="text-xs text-gray-600">
                You niche yourself into a corner. Zero organic leads. No network. Takes 12 months to validate you picked wrong.
              </p>
            </div>

            {/* Myth 2: Passion Trap */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">❌ Myth 2: The Passion Trap</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bad:</strong> "I love photography so I'll be a photographer" (nobody pays what you're worth)
              </p>
              <p className="text-xs text-gray-600">
                70% of photographers earn less than £15k/year. Your passion doesn't mean the market will pay.
              </p>
            </div>

            {/* Myth 3: Size Problem */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">❌ Myth 3: The Size Problem</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bad:</strong> "I'll sell to solopreneurs" (biggest market, lowest payment power, zero budget)
              </p>
              <p className="text-xs text-gray-600">
                Competing on price with 50,000 other solopreneurs. Pick market with money, not market with numbers.
              </p>
            </div>

            {/* Myth 4: Feasibility Illusion */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">❌ Myth 4: The Feasibility Illusion</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bad:</strong> "I'll target anyone who needs X service" (you can't sell to everyone)
              </p>
              <p className="text-xs text-gray-600">
                "Anyone who needs it" = zero messaging. Zero differentiation. Zero conversions. Specificity wins when paired with payment power.
              </p>
            </div>
          </div>

          {/* Anti-Example: Yoga for Executives */}
          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ The Yoga for Executives Story (Anti-Example)</h3>
            <p className="text-sm text-gray-700 mb-2">
              A coach once told me: "I'm pivoting to yoga for executives. It's niche, it's specific, executives are rich."
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Results after 4 months: 3 inquiries, 0 sales, £0 revenue. Why? Because:
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>• Executives don't search "yoga coaching"</li>
              <li>• No existing community of yoga-seeking execs</li>
              <li>• Can't generate organic leads (niche = no Google traffic)</li>
              <li>• Picked niche in spreadsheet, not from real client data</li>
            </ul>
            <p className="text-sm font-semibold text-gray-900 mt-3">
              The test failed because it violated Rule #1: Never niche before you have paying clients.
            </p>
          </div>
        </section>

        {/* SECTION 2 — PROFITABILITY MATRIX */}
        <section className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Profitability Matrix: 3 Variables That Actually Matter</h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Forget TAM, TAB, SOM, ICPs, and all that MBA nonsense. Here are the three variables that determine if a niche is profitable for you as a solo operator:
          </p>

          {/* Matrix Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold text-gray-900">Variable</th>
                  <th className="text-left p-4 font-bold text-gray-900">Definition</th>
                  <th className="text-left p-4 font-bold text-gray-900">Scoring (1–5)</th>
                  <th className="text-left p-4 font-bold text-gray-900">Threshold (Must Pass)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Market Pain</td>
                  <td className="p-4 text-gray-700">Does your market have a specific, expensive problem they're actively trying to solve?</td>
                  <td className="p-4 text-gray-700"><strong>5</strong> = Bleeding (losing £1000s/month). <strong>1</strong> = Nice-to-have</td>
                  <td className="p-4"><span className="bg-green-100 text-green-900 px-2 py-1 rounded font-semibold">3+</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Payment Power</td>
                  <td className="p-4 text-gray-700">Do they have budget? Are they already paying for similar solutions?</td>
                  <td className="p-4 text-gray-700"><strong>5</strong> = Spending £5k+. <strong>1</strong> = Zero budget</td>
                  <td className="p-4"><span className="bg-green-100 text-green-900 px-2 py-1 rounded font-semibold">4+</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Solo Feasibility</td>
                  <td className="p-4 text-gray-700">Can you deliver this without hiring? Can you serve them in 30 hours/month?</td>
                  <td className="p-4 text-gray-700"><strong>5</strong> = Pure leverage (software, content). <strong>1</strong> = Needs team</td>
                  <td className="p-4"><span className="bg-green-100 text-green-900 px-2 py-1 rounded font-semibold">3+</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Scoring Rubric */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-4">How to Score Each Variable (1–5)</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>5:</strong> Crystal clear, no doubt, this is obvious from talking to 3 people</p>
              <p><strong>4:</strong> Pretty confident, heard it from 2+ people, supporting evidence</p>
              <p><strong>3:</strong> Medium confidence, mixed signals, some validation needed</p>
              <p><strong>2:</strong> Weak signal, heard from 1 person, lots of doubts</p>
              <p><strong>1:</strong> No signal, just guessing, nobody mentioned it</p>
            </div>
          </div>

          {/* Real Example: Email for SaaS */}
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-4">✓ Real Example: Email Automation for SaaS Founders</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase mb-1">Market Pain</p>
                <p className="text-2xl font-bold text-blue-900">5</p>
                <p className="text-xs text-gray-700">SaaS founders lose £5k/month in churn (bleeding)</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase mb-1">Payment Power</p>
                <p className="text-2xl font-bold text-blue-900">5</p>
                <p className="text-xs text-gray-700">Already paying £200–500/month for tools</p>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase mb-1">Solo Feasibility</p>
                <p className="text-2xl font-bold text-blue-900">4</p>
                <p className="text-xs text-gray-700">Deliver via templates, automation (40-50 hrs/client)</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
              <p className="text-sm font-bold text-gray-900">Total Score: 5×5×4 = <span className="text-emerald-600">100 ✓ HELL YES</span></p>
              <p className="text-xs text-gray-600 mt-1">Charge £3k–5k per project. 3 clients = £100k+ first year</p>
            </div>
          </div>

          {/* Threshold Boxes */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 border-2 border-emerald-500 p-6 rounded-lg">
              <p className="text-xs font-bold text-emerald-900 uppercase mb-2">Hell Yes (75+)</p>
              <p className="text-2xl font-bold text-emerald-900 mb-2">✓</p>
              <p className="text-sm text-gray-700">All variables strong. High confidence. Pick this. Start selling Monday.</p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-500 p-6 rounded-lg">
              <p className="text-xs font-bold text-yellow-900 uppercase mb-2">Maybe (50–75)</p>
              <p className="text-2xl font-bold text-yellow-900 mb-2">?</p>
              <p className="text-sm text-gray-700">Mix of strong + weak signals. Run 14-day test. Get 3 discovery calls first.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg">
              <p className="text-xs font-bold text-red-900 uppercase mb-2">Run Away (&lt;50)</p>
              <p className="text-2xl font-bold text-red-900 mb-2">✕</p>
              <p className="text-sm text-gray-700">One or more variables are weak. Don't waste 90 days. Pick something else.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — 3 BUSINESS PLAYBOOKS */}
        <section className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Three Playbooks: Services, Products, Content</h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Your business model determines which niches work best. Here's how to apply the matrix to each:
          </p>

          {/* Playbook A: Services */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">A</div>
              <h3 className="text-2xl font-bold text-gray-900">Playbook A: Services</h3>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-900 mb-2"><strong>Formula:</strong></p>
              <p className="text-base font-mono text-gray-900">(Market Pain × 1) + (Payment Power × 2) + (Solo Feasibility × 1) = Score</p>
              <p className="text-xs text-gray-600 mt-2">Payment Power weights most because you're limited by billable hours.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-gray-900 mb-2">❌ Bad Service Niche</p>
                <p className="text-sm text-gray-700 mb-2">"General business consulting for startups"</p>
                <p className="text-xs text-gray-600">Problem: Startups have zero budget. You can't charge £150+/hour.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-gray-900 mb-2">✓ Good Service Niche</p>
                <p className="text-sm text-gray-700 mb-2">"Email strategy for B2B SaaS founders losing customers"</p>
                <p className="text-xs text-gray-600">They're already paying for tools. Charge £200+/hour. Solo-doable.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-sm font-bold text-gray-900 mb-2">🔹 Real Example: Alex, Email Strategist</p>
              <p className="text-sm text-gray-700 mb-2">Started positioning as "general email consultant" → 5 inquiries, 2 clients, £25/hour (nobody picked him)</p>
              <p className="text-sm text-gray-700 mb-2">Repositioned for "Email for D2C founders losing repeat customers" → 8 inquiries in Month 2, 3 clients, <strong>£200/hour</strong></p>
              <p className="text-xs text-gray-600">Year 1 revenue: Alex could do 15 projects × £5k average = £75k (working solo, 30 hours/week)</p>
            </div>
          </div>

          {/* Playbook B: Products */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">B</div>
              <h3 className="text-2xl font-bold text-gray-900">Playbook B: Digital Products (Courses, Templates, Software)</h3>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-4 border-l-4 border-purple-500">
              <p className="text-sm text-gray-900 mb-2"><strong>Formula:</strong></p>
              <p className="text-base font-mono text-gray-900">(Market Pain × 2) + (Payment Power × 1) + (Solo Feasibility × 2) = Score</p>
              <p className="text-xs text-gray-600 mt-2">Leverage matters most. Market pain matters (they must want it). Payment power matters less (can be £19–199).</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-gray-900 mb-2">❌ Bad Product Niche</p>
                <p className="text-sm text-gray-700 mb-2">"General productivity course for anyone"</p>
                <p className="text-xs text-gray-600">Competing with Skilshare, productivity YouTubers, free content. Sell 50 copies at £47.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-gray-900 mb-2">✓ Good Product Niche</p>
                <p className="text-sm text-gray-700 mb-2">"Email template pack for indie SaaS founders (ready-made automation)"</p>
                <p className="text-xs text-gray-600">Solves specific pain (losing customers). Product is 1-time build. Scales infinitely solo.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="text-sm font-bold text-gray-900 mb-2">🔹 Real Example: Sarah, Email Template Creator</p>
              <p className="text-sm text-gray-700 mb-2">Built "Email Templates for SaaS" → £97 per sale × 350 customers (Year 1) = £33,950</p>
              <p className="text-sm text-gray-700 mb-2">Added £197 "Templates + Installation Service" tier → 25 customers at premium = additional £4,925</p>
              <p className="text-xs text-gray-600">
                Year 1 revenue: £38,875 total. Time spent: 200 hours (£194/hour blended rate). Passive income grows Year 2–3.
              </p>
            </div>
          </div>

          {/* Playbook C: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">C</div>
              <h3 className="text-2xl font-bold text-gray-900">Playbook C: Content (Newsletter, YouTube, Guides)</h3>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-4 border-l-4 border-orange-500">
              <p className="text-sm text-gray-900 mb-2"><strong>Formula:</strong></p>
              <p className="text-base font-mono text-gray-900">(Market Pain × 1) + (Payment Power × 1) + (Solo Feasibility × 3) = Score</p>
              <p className="text-xs text-gray-600 mt-2">Solo feasibility is everything. You're building audience then monetizing later.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-gray-900 mb-2">❌ Bad Content Niche</p>
                <p className="text-sm text-gray-700 mb-2">"General business advice for everyone"</p>
                <p className="text-xs text-gray-600">1.2 million other business newsletters. Zero differentiation. No monetization path.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-gray-900 mb-2">✓ Good Content Niche</p>
                <p className="text-sm text-gray-700 mb-2">"Email psychology for indie SaaS founders (case studies)"</p>
                <p className="text-xs text-gray-600">5k subscribers interested in monetization. Can sell sponsorships, products, services.</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-sm font-bold text-gray-900 mb-2">🔹 Real Example: Tom, Newsletter Creator</p>
              <p className="text-sm text-gray-700 mb-2">Started newsletter about "SaaS email case studies" → grew to 8k subscribers in 12 months</p>
              <p className="text-sm text-gray-700 mb-2">Monetized via 3 channels: Sponsorships (£800/month), affiliate links (£600/month), own email consulting (£5k/month)</p>
              <p className="text-xs text-gray-600">
                Year 1 revenue: £19,200 (passive) + £60,000 (services) = £79,200. Year 2: More sponsors = £24k passive, could reduce services.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg mt-4">
              <p className="text-xs font-bold text-yellow-900 uppercase mb-2">The Solo Rule</p>
              <p className="text-sm text-gray-700">
                <strong>If your niche requires hiring before Month 6, it's not a good solo niche.</strong> Services might demand hiring earlier. Products/Content scale without it.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — 14-DAY VALIDATION SPRINT */}
        <section className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The 14-Day Niche Validation Sprint</h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Don't spend 90 days wondering. Run this 2-week sprint. At the end, you'll have real data about whether your niche is viable or not.
          </p>

          {/* Days 1–2: Research Blitz */}
          <div className="mb-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">1–2</span>
              <h3 className="font-bold text-gray-900 text-lg">Days 1–2: Research Blitz (Market Pain)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span><strong>Keyword research:</strong> Google "your niche problem" + related keywords. Check search volume (£5k+ annual spend topic = market pain)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span><strong>Reddit/communities:</strong> Find 5 Reddit threads or online communities discussing your niche. Do they talk about it? Do they complain? (If not, price too cheap)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span><strong>Competitor analysis:</strong> List 10 competitors/solutions already solving this problem. Price each. (If existing solutions at £1k+, market pain = 4–5)</span>
              </li>
            </ul>
            <div className="mt-3 text-xs text-gray-600 bg-white p-2 rounded border-l-2 border-blue-500">
              <strong>Validation threshold (GREEN):</strong> 5+ keywords with 1k+/month searches, 3+ communities discussing it, 5+ competitors charging £1k+
            </div>
          </div>

          {/* Days 3–5: Network Test */}
          <div className="mb-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">3–5</span>
              <h3 className="font-bold text-gray-900 text-lg">Days 3–5: Network Outreach (Payment Power)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Find 10 people</strong> in your niche on LinkedIn. DM them: "Hey, quick question—when you face [problem], do you spend money fixing it? What solutions are you using?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Listen for:</strong> Complaints about existing solutions (high pain), mentions of budget (payment power), frequency of the problem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Goal:</strong> Aim for 5–7 conversations. Yes, actually call/DM them. Don't use surveys.</span>
              </li>
            </ul>
            <div className="mt-3 text-xs text-gray-600 bg-white p-2 rounded border-l-2 border-green-500">
              <strong>Validation threshold (GREEN):</strong> 4+ people say they spend £1k+/year on solutions, 3+ mention current solution frustrations
            </div>
          </div>

          {/* Days 6–10: Offer Test */}
          <div className="mb-6 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">6–10</span>
              <h3 className="font-bold text-gray-900 text-lg">Days 6–10: Offer Test (Solo Feasibility)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">•</span>
                <span><strong>Draft offer:</strong> Write a 1-page description: "I help [audience] solve [problem] by doing [solution]. Result: [outcome]. Price: [£X]"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">•</span>
                <span><strong>Email 20 people:</strong> Send to prospects you found. "I'm testing a new offer. Would you be interested in [offer] for [price]? Yes/No?"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold mt-0.5">•</span>
                <span><strong>Measure:</strong> % who respond, % who say yes, feedback on price (too low = demand signal, too high = fear signal)</span>
              </li>
            </ul>
            <div className="mt-3 text-xs text-gray-600 bg-white p-2 rounded border-l-2 border-purple-500">
              <strong>Validation threshold (GREEN):</strong> 20%+ click-through on email, 3+ people say "yes" (even conditional), zero price objections (if they say yes, price worked)
            </div>
          </div>

          {/* Days 11–14: Delivery Test */}
          <div className="mb-6 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">11–14</span>
              <h3 className="font-bold text-gray-900 text-lg">Days 11–14: Delivery Test (Can You Do It?)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">•</span>
                <span><strong>Close 1 test client:</strong> Take the 1–2 people who said yes. Deliver a 5-hour "beta" version of your offer. Charge 50% of your full price.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">•</span>
                <span><strong>Measure:</strong> Can you actually deliver in the timeline? Did it solve their problem? Would they refer you?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">•</span>
                <span><strong>Solo test:</strong> Can you do this 3–4 times per month without burning out? If not, niche isn't solo-feasible.</span>
              </li>
            </ul>
            <div className="mt-3 text-xs text-gray-600 bg-white p-2 rounded border-l-2 border-orange-500">
              <strong>Validation threshold (GREEN):</strong> 1+ client completed, client happy (7+/10 NPS), client would refer you (says yes to "would you recommend?")
            </div>
          </div>

          {/* Real Example: Email Validation */}
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-4">✓ Real 14-Day Sprint Result: Email Automation for SaaS</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Days 1–2:</strong> Found 8k searches/month for "SaaS email retention." 12 competitors at £1k–5k pricing.</p>
              <p><strong>Days 3–5:</strong> Interviewed 6 SaaS founder. 5 said they spend £3k+/year on email tools. All complained about complexity.</p>
              <p><strong>Days 6–10:</strong> Emailed offer to 20 prospects. 5 replied (25%), 3 said "yes" at £3k price point.</p>
              <p><strong>Days 11–14:</strong> Onboarded 1 beta client, spent 8 hours, client loved it, asked to refer friends.</p>
              <p className="font-semibold text-gray-900 pt-2">Result after 14 days: <span className="text-emerald-600">Ready to sell. By day 90: 3 clients at £3k each = £84k annualized first-year revenue.</span></p>
            </div>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-4">❌ What NOT to Do: The "General Coaching" Plan</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>What this person did:</strong> No validation. Just launched "life coaching for busy professionals" without talking to anyone.</p>
              <p><strong>Days 1–14:</strong> Posted on LinkedIn, got 0 inquiries. Spent time writing blog posts, zero traction.</p>
              <p><strong>Month 2:</strong> Realized they picked wrong niche. Now pivoting (lost 60 days).</p>
              <p className="font-bold text-gray-900">The lesson: Run the sprint BEFORE you pick. Your niche is either validated or it's not.</p>
            </div>
          </div>

          {/* Validation Chart */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-4">The Validation Pyramid</h3>
            <div className="space-y-2">
              <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                <p className="text-xs font-bold text-red-900 uppercase">Red (Fail):</p>
                <p className="text-xs text-gray-700">Any stage fails validation. Pivot or pick different niche.</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-xs font-bold text-yellow-900 uppercase">Yellow (Caution):</p>
                <p className="text-xs text-gray-700">2–3 stages have weak signals. Run longer tests (30–60 days) before committing.</p>
              </div>
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                <p className="text-xs font-bold text-green-900 uppercase">Green (Go):</p>
                <p className="text-xs text-gray-700">All 4 stages pass. You're validated. Start taking clients immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — CTA: NEXT STEPS */}
        <section className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Next Step: Pick 3 Niches & Run the Matrix</h2>
          
          <div className="bg-emerald-50 border-2 border-emerald-500 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              You now have a framework. Here's what to do this week:
            </p>
            <ol className="space-y-4 text-gray-900">
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600 min-w-6">1.</span>
                <span><strong>Pick 3 niche ideas</strong> based on problems you can solve + industries with money</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600 min-w-6">2.</span>
                <span><strong>Score each in the matrix</strong> (Market Pain × Payment Power × Solo Feasibility = Score)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600 min-w-6">3.</span>
                <span><strong>Pick the highest scorer</strong> (75+ = Hell Yes. 50–75 = Maybe. &lt;50 = Run Away)</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600 min-w-6">4.</span>
                <span><strong>Run the 14-day sprint</strong> on the winning niche</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600 min-w-6">5.</span>
                <span><strong>If it passes: Start taking clients Monday</strong>. If it fails: Swap to niche #2.</span>
              </li>
            </ol>
          </div>

          {/* Links to Related Pages */}
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/start/business-ideas" className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg hover:border-blue-400 transition">
              <h4 className="font-bold text-gray-900 mb-2">Stuck on niches?</h4>
              <p className="text-sm text-gray-700 mb-4">Browse 50+ real business ideas people are making money with right now.</p>
              <span className="text-blue-600 font-semibold text-sm">Browse Business Ideas →</span>
            </Link>

            <Link href="/start/business-models" className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg hover:border-purple-400 transition">
              <h4 className="font-bold text-gray-900 mb-2">Choosing your model?</h4>
              <p className="text-sm text-gray-700 mb-4">Learn the pros/cons of services, products, and content businesses for your niche.</p>
              <span className="text-purple-600 font-semibold text-sm">Compare Models →</span>
            </Link>

            <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Keep learning</h4>
              <p className="text-sm text-gray-700 mb-4">Download free "Niche Scorecard" template to track your 3 niches & scores.</p>
              <button className="text-yellow-600 font-semibold text-sm">Get Template (Email) →</button>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WARNING BOX */}
        <section className="py-16">
          <div className="bg-yellow-50 border-2 border-yellow-400 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">⚠️ Critical Rule: Validate Before Building</h3>
                <p className="text-gray-900 mb-3">
                  Do NOT build a product. Do NOT quit your job. Do NOT spend money on branding/website before you validate your niche with real clients.
                </p>
                <p className="text-gray-900 font-semibold">
                  "A validated niche with a mediocre offer beats an unvalidated niche with a perfect offer every single time."
                </p>
                <p className="text-xs text-gray-600 mt-3">
                  The #1 mistake solo founders make: They spend 3 months perfecting an offer for a niche nobody wants. Run the 14-day sprint first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterCTA />

      </div>
    </div>
  );
}
