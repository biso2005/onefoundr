import Link from 'next/link';

export const metadata = {
  title: 'Positioning for Solopreneurs: The Category of One Framework | OneFoundr',
  description: 'Become the only option for your ideal clients. The positioning formula: specific skill + niche + contrarian view. Own your category.',
};

export default function PositioningPage() {
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Positioning for Solopreneurs: The Category of One</h1>
            <p className="text-xl text-gray-600 mb-6">Why "standing out" is a trap—and how to become the only option for your ideal clients.</p>
            <p className="text-lg text-gray-700 italic border-l-4 border-purple-600 pl-6">
              "I positioned as 'the email guy for SaaS founders.' Not 'marketing consultant.' Not 'copywriter.' Just email. For SaaS. Result: 80% of my leads were pre-sold. I didn't pitch. They already knew I was the one."
            </p>
          </div>
        </section>

        {/* SECTION: THE POSITIONING MYTH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why "Standing Out" is Killing Your Business</h2>
          <div className="space-y-6">

            {/* Problem 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Look Different" Trap</h3>
              <p className="text-gray-700 mb-4">Branding says: "Make your logo memorable. Choose the right colours. Tell your story." So you spend 3 weeks on branding, get a "unique" design, and compete on aesthetics while everyone else does the same.</p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Problem:</p>
                <p className="text-sm text-gray-700">An agency spent £10k on branding. You don't have £10k. They beat you on logo budget, not on who you're for. You both attract "anyone with a budget." Neither of you owns anything.</p>
              </div>
            </div>

            {/* Problem 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Unique Value Proposition" Fallacy</h3>
              <p className="text-gray-700 mb-4">Every website says: "We deliver quality on time with care." Not one person has ever said: "I choose them because they deliver mediocrity late with indifference." Your UVP is identical to 10,000 competitors.</p>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">Reality:</p>
                <p className="text-sm text-gray-700">Most solos create a UVP that's so generic it could be copied and pasted on 100 other websites. If your value proposition is invisible when you remove your name, it's not a position—it's marketing fluff.</p>
              </div>
            </div>

            {/* Problem 3 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Niche Down" Problem</h3>
              <p className="text-gray-700 mb-4">Business advice says: "Niche down." So you say "I help e-commerce startups." That's 500,000 businesses in the UK. You haven't niched. You've just narrowed the audience slightly.</p>
              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">The Niche Illusion:</p>
                <p className="text-sm text-gray-700">"I help coaches," "I help agencies," "I help consultants." All vague. All do-able. All invisible. You need a niche within a niche within a niche: "I help 1-person email agencies scale to £50k/month."</p>
              </div>
            </div>

            {/* Problem 4 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">The "Personal Brand" Illusion</h3>
              <p className="text-gray-700 mb-4">LinkedIn advice says: "Build your personal brand." So you post daily. You share your morning thoughts. You become "the guy who posts." But whether they hire you doesn't depend on your brand—it depends on whether you solve their problem.</p>
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <p className="text-sm text-gray-700 font-bold mb-2">The Truth:</p>
                <p className="text-sm text-gray-700">Personal brands don't sell offers. Positioning sells offers. A founder with zero followers but crystal clear positioning ("the Shopify designer for dropshipping stores") outconverts a "personal brand" influencer with 50k followers but vague messaging.</p>
              </div>
            </div>

            {/* Anti-Example */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example: The Generic Position</h4>
              <p className="text-gray-700 text-sm">"I'm a marketing consultant with 10 years experience helping businesses grow through digital marketing and social media strategies." Problem: 50,000 people say this. Result: 20 inquiries/year at £75/hour because you compete on price. £60k revenue, 40 hours/week. You're replaceable.</p>
            </div>

            {/* Solo Constraint */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mt-6">
              <p className="text-purple-900 font-bold">Solo Constraint: "If your positioning requires explaining what you do to more than 1 in 50 people, it's too complex. Your ideal client should get it immediately."</p>
            </div>

          </div>
        </section>

        {/* SECTION: THE POSITIONING FRAMEWORK */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Category of One Framework</h2>
          <p className="text-gray-700 mb-8">Positioning is simple. It's the intersection of three things: what you're known for, who you're known to, and what you believe.</p>

          <div className="space-y-8">

            {/* The 3-Part Formula */}
            <div className="border-2 border-purple-300 rounded-lg p-8 bg-purple-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The 3-Part Positioning Formula</h3>
              
              {/* Part 1 */}
              <div className="mb-8 pb-8 border-b border-purple-200">
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">PART 1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Your Unique Skill (What You Do Differently)</h4>
                <p className="text-gray-700 mb-4">This is NOT what you're good at. It's what you're good at that others either can't do, won't do, or don't believe in.</p>
                <div className="bg-white border border-purple-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Real Examples:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• <strong>Email copywriting</strong> (not "marketing")</li>
                    <li>• <strong>Shopify homepage design</strong> (not "web design")</li>
                    <li>• <strong>Google Ads account audits</strong> (not "digital marketing")</li>
                    <li>• <strong>Notion system design</strong> (not "automation")</li>
                  </ul>
                </div>
                <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4">Solo Rule: "Pick the ONE thing you're known for. If you say you do design AND copy AND strategy, you're known for nothing."</p>
              </div>

              {/* Part 2 */}
              <div className="mb-8 pb-8 border-b border-purple-200">
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">PART 2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Specific Niche (Who You Do It For)</h4>
                <p className="text-gray-700 mb-4">Not "small businesses." Not "startups." Not "e-commerce." Your niche is specific enough that the people in it recognize themselves immediately.</p>
                <div className="bg-white border border-purple-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Niche Specificity Levels:</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>❌ Too broad:</strong> "Businesses" or "entrepreneurs"</p>
                    <p><strong>❌ Still too broad:</strong> "E-commerce stores" or "SaaS companies"</p>
                    <p><strong>✅ Getting there:</strong> "Shopify stores doing £100k+ ARR" or "SaaS founders with under £5m ARR"</p>
                    <p><strong>✅✅ Perfect:</strong> "Dropshipping stores with 6 months or less of data trying to scale beyond £50k/month"</p>
                  </div>
                </div>
                <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4">Solo Rule: "Your niche should be small enough that you can name 5 specific companies in it. If you can't, it's still too broad."</p>
              </div>

              {/* Part 3 */}
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white font-bold px-3 py-1 rounded text-sm">PART 3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Contrarian View (What You Believe That Others Don't)</h4>
                <p className="text-gray-700 mb-4">This is the HOT TAKE. The belief that makes you different. The thing you'd lose clients over because you won't compromise on it.</p>
                <div className="bg-white border border-purple-200 rounded p-4 mb-4">
                  <p className="font-bold text-gray-900 mb-3">Real Examples:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• "Onboarding sequences should be 3 emails max, not 12"</li>
                    <li>• "Shopify default themes are a waste of money"</li>
                    <li>• "Google Ads accounts should be audited quarterly, not optimized daily"</li>
                    <li>• "Most Notion systems are over-engineered"</li>
                  </ul>
                </div>
                <p className="text-gray-700 italic border-l-4 border-purple-300 pl-4">Solo Rule: "Your contrarian view should make 50% of your market say 'wrong,' and 50% say 'finally, someone who gets it.' If everyone agrees, it's not contrarian."</p>
              </div>
            </div>

            {/* The Only Test */}
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Only" Test</h3>
              <p className="text-gray-700 mb-4">If you can't finish this sentence, your positioning isn't ready:</p>
              <div className="bg-white border border-blue-200 rounded-lg p-6 text-center mb-4">
                <p className="text-lg font-mono font-bold text-gray-900">"I'm the ONLY [skill] for [niche] who [contrarian view]."</p>
              </div>
              <div className="bg-white border border-blue-200 rounded p-4 space-y-3 text-sm text-gray-700">
                <p><strong>Example 1:</strong> "I'm the ONLY email copywriter for SaaS founders who believes onboarding should be 3 emails max."</p>
                <p><strong>Example 2:</strong> "I'm the ONLY Shopify designer for dropshippers who refuses to use default themes."</p>
                <p><strong>Example 3:</strong> "I'm the ONLY Google Ads auditor for e-commerce stores who believes accounts should be audited quarterly, not daily."</p>
              </div>
              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4 mt-4">If "only" feels false, your positioning isn't specific enough. Adjust one of the three parts (skill, niche, or view) until "only" feels true.</p>
            </div>

            {/* Positioning Scorecard */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Positioning Scorecard</h3>
              <p className="text-gray-700 mb-6">Rate yourself 1-5 on each dimension. Total of 12+ = Category of One.</p>
              <div className="bg-white border border-gray-200 rounded overflow-hidden">
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
                      <td className="px-4 py-3 font-bold text-gray-900">Skill Clarity</td>
                      <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                      <td className="px-4 py-3 text-sm text-gray-700">Can you explain your skill in ONE word? (Email, design, audit, strategy)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-purple-50">
                      <td className="px-4 py-3 font-bold text-gray-900">Niche Specificity</td>
                      <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                      <td className="px-4 py-3 text-sm text-gray-700">Can you name 5 specific companies/people in your niche right now?</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 font-bold text-gray-900">Contrarian Strength</td>
                      <td className="px-4 py-3"><input type="text" className="w-12 border border-gray-300 rounded px-2 py-1" placeholder="1-5"/></td>
                      <td className="px-4 py-3 text-sm text-gray-700">Does your view make 50% disagree? Or do 90% agree?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">✅ Scoring Guide:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>12-15 points:</strong> Category of One. You're positioned.</li>
                  <li><strong>9-11 points:</strong> Almost there. Strengthen the contrarian view.</li>
                  <li><strong>&lt;9 points:</strong> Not positioned yet. Go back and narrow by 50%.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: POSITIONING PLAYBOOKS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What "Category of One" Looks Like for Your Business</h2>
          <div className="space-y-8">

            {/* Playbook A: Service */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook A: Service Business</h3>
              <div className="bg-white border border-blue-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">I'm the [skill] for [niche] who [contrarian view]</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Real Positioned Examples:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>✅ "Email copywriter for SaaS founders who believes onboarding should be 3 emails max, not 12"</li>
                    <li>✅ "Shopify designer for e-commerce stores who refuses to use default themes"</li>
                    <li>✅ "Google Ads auditor for dropshippers who believes accounts should be audited quarterly, not daily"</li>
                    <li>✅ "Systems designer for 1-person agencies who believes Notion systems are over-engineered"</li>
                  </ul>
                </div>

                <div className="bg-white border border-blue-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">The "No" List (What You DON'T Do)</p>
                  <p className="text-gray-700 text-sm mb-3">Define your positioning by what you refuse to do:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• "I don't work with agencies (only founders)"</li>
                    <li>• "I don't build email sequences (I audit existing ones)"</li>
                    <li>• "I don't work on retainer (only project-based)"</li>
                    <li>• "I don't design for B2C businesses (only B2B SaaS)"</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4">Solo Rule: "Your 'No' list is more important than your 'Yes' list. It attracts the right clients and repels tire-kickers."</p>
            </div>

            {/* Playbook B: Product */}
            <div className="border-2 border-green-300 rounded-lg p-8 bg-green-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook B: Product Business</h3>
              <div className="bg-white border border-green-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">[Product] for [niche] that [contrarian benefit]</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Real Positioned Examples:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>✅ "Notion template for 1-person agencies that tracks profitability by client (not just hours)"</li>
                    <li>✅ "Email course for SaaS founders about onboarding sequences without funnels"</li>
                    <li>✅ "Google Sheets framework for dropshippers that tracks ROAS by campaign, not daily budget"</li>
                    <li>✅ "Airtable setup for consultants who believe CRMs are bloated"</li>
                  </ul>
                </div>

                <div className="bg-white border border-green-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">The "Opinionated Product" Principle</p>
                  <p className="text-gray-700 text-sm">Your product should have opinions. Not "a product that works for everyone," but "a product for X that fixes Y by using Z approach instead of the traditional A approach."</p>
                  <p className="text-gray-700 text-sm italic mt-3">Why: Products without opinions blend in. Products with opinions attract raving fans.</p>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">Solo Rule: "If your product could be used by 5 different niches, it's not opinionated. Make it for one."</p>
            </div>

            {/* Playbook C: Content */}
            <div className="border-2 border-orange-300 rounded-lg p-8 bg-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Playbook C: Content Business</h3>
              <div className="bg-white border border-orange-200 rounded p-4 text-center mb-6">
                <p className="text-lg font-mono font-bold text-gray-900">The [contrarian view] take on [topic] for [niche]</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">Real Positioned Examples:</p>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>✅ "The anti-hustle newsletter for bootstrappers (not growth-at-all-costs founders)"</li>
                    <li>✅ "Email strategy insights for SaaS founders who think longer sequences = better conversions"</li>
                    <li>✅ "The no-code movement for traditional developers who think building is faster"</li>
                    <li>✅ "Automation reality check for solopreneurs who believe every tool is worth learning"</li>
                  </ul>
                </div>

                <div className="bg-white border border-orange-200 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">The "Hot Take" Requirement</p>
                  <p className="text-gray-700 text-sm">Content without a hot take is commentary. Commentary is invisible. Your positioning should make 50% of people think "finally!" and 50% think "no way."</p>
                  <p className="text-gray-700 text-sm italic mt-3">If everyone agrees with your take, it's not a position—it's journalism.</p>
                </div>
              </div>

              <p className="text-gray-700 italic border-l-4 border-orange-300 pl-4">Solo Rule: "Your first post should generate 10-20% disagree reactions. If it doesn't, your take isn't hot enough."</p>
            </div>

          </div>
        </section>

        {/* SECTION: THE POSITIONING TEST */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prove Your Positioning Works in 14 Days</h2>
          <p className="text-gray-700 mb-6">Don't guess if your positioning is working. Test it. Here's how:</p>

          <div className="bg-purple-50 border border-purple-300 rounded-lg p-8 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">The 14-Day Positioning Sprint Checklist</h3>

            <div className="space-y-4">
              {/* Days 1-3 */}
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded min-w-fit h-fit">Days 1-3</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Define Your Category of One Statement</p>
                  <p className="text-gray-700 text-sm mt-1">Write out: "I'm the ONLY [skill] for [niche] who [contrarian view]." Refine until it makes you slightly uncomfortable (good sign). Make it one sentence.</p>
                  <p className="text-gray-600 text-xs italic mt-2">Example: "I'm the only email copywriter for SaaS founders who believes onboarding should be 3 emails max."</p>
                </div>
              </div>

              {/* Days 4-7 */}
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded min-w-fit h-fit">Days 4-7</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Share in 3 Communities</p>
                  <p className="text-gray-700 text-sm mt-1">Find 3 places where your niche hangs out (Reddit, Facebook Groups, Slack communities). Share your positioning (not in ads—as genuine, helpful comment). Track responses.</p>
                  <p className="text-gray-600 text-xs italic mt-2">Script: "Hey [community]. For founders building SaaS, onboarding sequences should be 3 emails max. Most agencies send 12. Here's why and how I do it."</p>
                </div>
              </div>

              {/* Days 8-10 */}
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded min-w-fit h-fit">Days 8-10</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">DM 10 People in Your Niche</p>
                  <p className="text-gray-700 text-sm mt-1">Find 10 people who fit your exact niche. DM them your positioning. Not selling—just sharing. Track responses.</p>
                  <p className="text-gray-600 text-xs italic mt-2">Script: "Hey [name]. I position as 'the email guy for SaaS who believes onboarding should be 3 emails max.' Does that resonate or miss the mark?"</p>
                </div>
              </div>

              {/* Days 11-14 */}
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded min-w-fit h-fit">Days 11-14</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Count Responses & Score</p>
                  <p className="text-gray-700 text-sm mt-1">Calculate: How many people said "exactly what I need" vs "interesting" vs "not relevant." Decide: Keep positioning or pivot.</p>
                  <p className="text-gray-600 text-xs italic mt-2">Success: 5+ "that's exactly what I need" = Category of One. 2-4 "interesting" = close. 0-1 = reposition.</p>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="border-t border-purple-300 pt-6">
              <p className="font-bold text-gray-900 mb-3">Success Metrics:</p>
              <div className="bg-white border border-purple-200 rounded p-4 space-y-2 text-sm">
                <p><strong>✅ 5+ "that's exactly what I need":</strong> Category of One confirmed. Proceed with confidence.</p>
                <p><strong>⚠️ 2-4 "interesting":</strong> Close. Keep testing. Strengthen contrarian view or narrow niche.</p>
                <p><strong>❌ 0-1 responses:</strong> Positioning needs work. Niche is too broad, view not contrarian, or skill unclear. Reposition and retest.</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: REAL EXAMPLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Example: How Positioning Changed Everything</h2>
          <div className="border-l-4 border-purple-600 pl-6 py-2">
            <p className="text-gray-700 mb-3"><strong>Before Positioning:</strong> "Marketing consultant helping businesses grow online. 10 years experience. Specialised in digital marketing."</p>
            <p className="text-gray-600 text-sm mb-4">Result: Generic cold DMs. 15 inquiries/year. £40k revenue. 50 hours/week. Competes on price (£50/hour).</p>
            
            <p className="text-gray-700 mb-3 mt-6"><strong>After Positioning:</strong> "Email copywriter for SaaS founders. I believe onboarding should be 3 emails max. I've increased open rates from 8% to 28% for 20+ SaaS companies."</p>
            <p className="text-gray-600 text-sm">Result: Pre-sold leads. 50 inquiries/year. £95k revenue. 30 hours/week. Charges £2k/project (speciality premium).</p>
            
            <p className="text-gray-700 italic mt-6">Difference: Same person. Same skill. Different positioning. 2.4x revenue. 40% less work. No price negotiations.</p>
          </div>
        </section>

        {/* SECTION: ANTI-EXAMPLES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What NOT to Do</h2>
          <div className="space-y-4">

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 1: Too Broad</h4>
              <p className="text-gray-700 text-sm">"I'm a business consultant helping companies succeed." Problem: 100,000 people say this. You blend in. You compete on price. Result: £30k/year at £50/hour.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 2: Too Complex</h4>
              <p className="text-gray-700 text-sm">"I help female founders in tech build sustainable businesses through integrated marketing, product positioning, and team culture." Problem: Takes 30 seconds to explain. People zone out. Positioning should be 5 seconds.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">❌ Anti-Example 3: No Contrarian View</h4>
              <p className="text-gray-700 text-sm">"Email copywriter for SaaS founders. I write great emails on time with excellent grammar." Problem: So does everyone else. No differentiation. No positioning. Compete on price (£150/hr) vs positioned position (£2k/project).</p>
            </div>

          </div>
        </section>

        {/* SECTION: YOUR NEXT STEP */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Next Step: Own Your Category Today</h2>
          <p className="text-gray-700 mb-4">Write your Category of One statement right now. Use the formula: "I'm the ONLY [skill] for [niche] who [contrarian view]."</p>
          <p className="text-gray-700 mb-4">If it takes more than 15 seconds to explain, simplify. If it doesn't make you slightly uncomfortable, make it more contrarian.</p>
          <p className="text-gray-700 font-bold text-lg">Then do the 14-day test. Don't wait for perfection.</p>
        </section>

        {/* SECTION: RELATED GUIDES */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/offer/first-offer" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Your First Offer</p>
              <p className="text-sm text-gray-600">Build your offer before positioning it.</p>
            </Link>
            <Link href="/offer/pricing" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Solo Pricing Strategy</p>
              <p className="text-sm text-gray-600">Price your positioned offer 2-3x higher.</p>
            </Link>
            <Link href="/marketing/content-marketing" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Content Marketing</p>
              <p className="text-sm text-gray-600">Amplify your positioning through content.</p>
            </Link>
            <Link href="/sales/natural-selling" className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
              <p className="font-bold text-gray-900">Natural Selling</p>
              <p className="text-sm text-gray-600">Close positioned prospects (they're pre-sold).</p>
            </Link>
          </div>
        </section>

        {/* SECTION: WARNING BOX */}
        <section className="mt-12 p-8 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Critical Warnings</h3>
          <div className="space-y-3">
            <p className="text-gray-700"><strong>❌ Don't try to appeal to everyone.</strong> Every time you broaden your niche, you lose positioning. "For everyone" is the same as "for no one."</p>
            <p className="text-gray-700"><strong>❌ Don't make your contrarian view too spicy.</strong> You want 50/50 agreement/disagreement, not 90/10 (too extreme). If 9 in 10 think you're crazy, you've overdone it.</p>
            <p className="text-gray-700"><strong>❌ Don't change your positioning every month.</strong> Own it for 6+ months before you pivot. Positioning compounds over time. Too many pivots = no authority.</p>
            <p className="text-gray-700"><strong>❌ Don't confuse positioning with branding.</strong> You can have terrible branding and amazing positioning. You can have beautiful branding and terrible positioning. Positioning sells. Branding doesn't.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
