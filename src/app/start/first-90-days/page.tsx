'use client';

import Link from 'next/link';

export default function First90DaysPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-red-50 px-6 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 mb-4">
            The Solo Launch Blueprint
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Solo Founder's First 90 Days: Your Week-by-Week Launch Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Stop overthinking. Stop preparing. Here's exactly what to do from Day 1 through Day 90 to build your first real business.
          </p>
          
          {/* Story Box */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-orange-600 mb-2">REAL EXAMPLE</p>
            <p className="text-gray-900 font-medium mb-3">
              Sarah, a former HR manager, had 0 clients on Day 1. Using this exact roadmap:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Day 7: Offer page live with working Stripe payment</li>
              <li>✓ Day 14: 5 paid conversations documented</li>
              <li>✓ Day 21: Offer refined based on real feedback</li>
              <li>✓ Day 30: First £2,000 invoice sent</li>
              <li>✓ Day 60: 3 clients, £5,000 monthly revenue confirmed</li>
              <li>✓ Day 90: System documented, 2 referrals, £15,000 in pipeline</li>
            </ul>
            <p className="text-sm text-gray-600">
              She didn't have a logo, business cards, or 'perfect' website. She had customers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Start Your 90-Day Plan
            </button>
            <Link href="/start/niche-selection" className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition">
              Pick Your Niche First →
            </Link>
          </div>
        </div>
      </div>

      {/* Why 90 Days Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Why 90 Days Is Perfect</h2>

        {/* Grid Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">30 Days: Too Short</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Forces panic decisions</li>
              <li>• No time to validate niche</li>
              <li>• One bad week = failure</li>
              <li>• Burnout by Day 25</li>
            </ul>
          </div>
          <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
            <h3 className="text-lg font-bold text-orange-900 mb-4">90 Days: Sweet Spot ✓</h3>
            <ul className="space-y-2 text-sm text-orange-700 font-medium">
              <li>• Time to test and refine</li>
              <li>• Get 3+ paying customers</li>
              <li>• Prove repeatability</li>
              <li>• Build momentum</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">6 Months: Too Long</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Perfectionism creeps in</li>
              <li>• Lost momentum & focus</li>
              <li>• Time to overthink</li>
              <li>• Motivation fades</li>
            </ul>
          </div>
        </div>

        {/* Revenue Reality */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 mb-12">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Revenue Reality Checkpoint</h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div>
              <p className="text-sm text-blue-700 mb-1">Day 30</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">£1,000–£3,000</p>
              <p className="text-xs text-blue-600">1 client, 1st payment</p>
            </div>
            <div>
              <p className="text-sm text-blue-700 mb-1">Day 60</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">£3,000–£7,000</p>
              <p className="text-xs text-blue-600">2–3 clients paying</p>
            </div>
            <div>
              <p className="text-sm text-blue-700 mb-1">Day 90</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">£5,000–£15,000</p>
              <p className="text-xs text-blue-600">3+ clients, system live</p>
            </div>
            <div>
              <p className="text-sm text-blue-700 mb-1">Month 4+</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">£10,000–£30,000+</p>
              <p className="text-xs text-blue-600">Referrals kicking in</p>
            </div>
          </div>
        </div>

        {/* Constraint Advantage */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">The Constraint Advantage</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-600 pl-4 py-2">
              <p className="font-bold text-gray-900">Limited Time = Clear Priorities</p>
              <p className="text-sm text-gray-600">You'll cut the 80% that doesn't matter and focus on what actually sells.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4 py-2">
              <p className="font-bold text-gray-900">Limited Money = Forced Creativity</p>
              <p className="text-sm text-gray-600">No budget for ads or fancy tools. You'll reach people through relationships (the best way).</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4 py-2">
              <p className="font-bold text-gray-900">Limited Resources = High Probability of Sales</p>
              <p className="text-sm text-gray-600">You can't afford to be unfocused. You'll be ruthless about who to serve and why.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4 py-2">
              <p className="font-bold text-gray-900">Limited Runway = Urgency That Works</p>
              <p className="text-sm text-gray-600">Desperation is underrated. It makes you ask for the sale instead of waiting for permission.</p>
            </div>
          </div>
        </div>

        {/* Anti-Example */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 sm:p-8 mb-12">
          <p className="text-sm font-bold text-red-700 mb-2">⚠ THE 6-MONTH TRAP</p>
          <p className="text-gray-900 font-medium mb-3">
            Founder sets 6-month timeline. Plans perfect brand identity. Hires designer (£600). Builds custom website (3 weeks). Records 10-part onboarding video series. Launches ad campaign.
          </p>
          <p className="text-gray-700 mb-2">Result on Day 180? Zero paying customers. £2,000 spent. Gave up.</p>
          <p className="text-sm text-red-700 font-semibold">
            Moral: A 90-day urgency deadline forces the decisions that lead to revenue.
          </p>
        </div>

        <div className="bg-orange-100 border-l-4 border-orange-600 p-4 sm:p-6 mb-12 rounded">
          <p className="font-bold text-orange-900 text-lg">🎯 Solo Rule #1: Do Not Optimize Before You Validate</p>
          <p className="text-orange-800 text-sm mt-2">
            Your first 90 days are about survival and traction, not perfection. The "good enough" offer that gets customers beats the "perfect" offer that doesn't exist yet.
          </p>
        </div>
      </div>

      {/* Week-by-Week Plan */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gray-50 rounded-lg mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Week-by-Week Roadmap: Your 90-Day Blueprint</h2>

        {/* Week 1 */}
        <div className="mb-12 bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Week 1: The Setup Sprint (Days 1–7)</h3>
              <p className="text-sm text-gray-600 mt-1">Get a live offer page with working payment processing.</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 1–2: Business Name & Domain</p>
              <p className="text-sm text-gray-600">Register domain name (£8–12/year). Create free business email. Mark these as DONE.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 3–4: Payment Processing (Stripe)</p>
              <p className="text-sm text-gray-600">Create Stripe account. Connect UK bank account. Set up basic payment flow. Test £1 transaction to yourself.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 5–6: Offer Page (Carrd or Webflow)</p>
              <p className="text-sm text-gray-600">Build one-page offer site. Include: headline, problem statement, your solution, price, CTA button connected to Stripe. Use template if needed.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 7: Test Payment</p>
              <p className="text-sm text-gray-600">Send yourself a £1 test through your offer page. Verify it lands in your bank account. Celebrate.</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-6">
            <p className="font-bold text-orange-900 mb-2">What to IGNORE this week:</p>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>✗ Logo design</li>
              <li>✗ Business cards</li>
              <li>✗ Social media accounts</li>
              <li>✗ Perfect copy or branding</li>
              <li>✗ Complex website</li>
              <li>✗ Business plan documents</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Time Budget</p>
              <p className="font-bold text-gray-900">8 hours</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Money</p>
              <p className="font-bold text-gray-900">£8–40</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Deliverable</p>
              <p className="font-bold text-gray-900">Live offer + Stripe</p>
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-12 bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Week 2: The First 5 Conversations (Days 8–14)</h3>
              <p className="text-sm text-gray-600 mt-1">Your job is research, not sales. Listen and learn.</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 8–9: List 20 Potential Customers</p>
              <p className="text-sm text-gray-600">Write down 20 people from your niche who'd benefit from your offer. Include their email or LinkedIn. Go broad—don't filter yet.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 10–12: Send 5 Outreach Messages</p>
              <p className="text-sm text-gray-600">Send 1 message per day to people on your list. Use this template:</p>
              <p className="text-xs bg-gray-100 rounded p-3 mt-2 font-mono text-gray-700">
                "Hi [Name], I'm launching a [specific service] to help [niche] solve [specific problem]. I'm talking to a few people in your space to validate my approach before the full launch. Would you be open to a quick 15-min call? I have a few quick questions."
              </p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 13–14: Schedule & Run 5 Calls</p>
              <p className="text-sm text-gray-600">Get at least 3–5 people on calls. Ask: What's your biggest challenge? What are you doing now? Would [your offer] solve this?</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
            <p className="font-bold text-blue-900 mb-2">Your One Goal This Week</p>
            <p className="text-sm text-blue-800">Document the #1 problem you hear from all 5 calls. This becomes your Week 3 focus.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Time Budget</p>
              <p className="font-bold text-gray-900">6 hours</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Money</p>
              <p className="font-bold text-gray-900">£0</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Deliverable</p>
              <p className="font-bold text-gray-900">5 calls documented</p>
            </div>
          </div>
        </div>

        {/* Week 3 */}
        <div className="mb-12 bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Week 3: The Offer Polish (Days 15–21)</h3>
              <p className="text-sm text-gray-600 mt-1">Refine your offer based on real feedback. Ask for commitments.</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 15–16: Analyze Your Top Problem</p>
              <p className="text-sm text-gray-600">Review notes from Week 2 calls. Identify the #1 pain point 60% of people mentioned. This is your offer focus.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 17–18: Rewrite Your Offer Page</p>
              <p className="text-sm text-gray-600">Update your Carrd site to lead with the verified problem. Change headline, benefits, and CTA to match what people actually need.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 19–20: Get Feedback From 5 People</p>
              <p className="text-sm text-gray-600">Send your updated offer to 5 people from Week 2. Ask: "Does this solve your problem clearly?" Take notes on their reactions.</p>
            </div>
            <div className="pl-4 border-l-2 border-orange-200">
              <p className="font-semibold text-gray-900">Day 21: Ask for a Soft Commitment</p>
              <p className="text-sm text-gray-600">Message your 5 people: "If I launched this next week at [price], would you be interested?" Count yes/no/maybe responses.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
            <p className="font-bold text-green-900 mb-2">Offer Template for Your Page</p>
            <div className="text-xs text-green-800 font-mono space-y-2">
              <p><strong>Headline:</strong> Solve [specific pain] in [timeframe]</p>
              <p><strong>Problem:</strong> Most [niche] struggle with [validated problem]</p>
              <p><strong>Solution:</strong> I help by [your specific approach]</p>
              <p><strong>Proof:</strong> [Your credentials or client results]</p>
              <p><strong>Price:</strong> £[amount]/month or £[amount]/project</p>
              <p><strong>CTA:</strong> "Book a call" or "Start now"</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Time Budget</p>
              <p className="font-bold text-gray-900">6 hours</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Money</p>
              <p className="font-bold text-gray-900">£0</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Deliverable</p>
              <p className="font-bold text-gray-900">Polished offer</p>
            </div>
          </div>
        </div>

        {/* Week 4 */}
        <div className="mb-12 bg-white rounded-lg border-2 border-red-400 p-6 sm:p-8 relative">
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
            BINARY CHECKPOINT
          </div>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Week 4: The First Sale (Days 22–30)</h3>
              <p className="text-sm text-gray-600 mt-1">Get ONE paying customer before Day 30, or pivot.</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="pl-4 border-l-2 border-red-400">
              <p className="font-semibold text-gray-900">Day 22–24: Network Blitz (10 People)</p>
              <p className="text-sm text-gray-600">Email 10 people from your expanded list. No long pitch—just: "I'm launching [offer] next week. Thought of you. Interested?"</p>
            </div>
            <div className="pl-4 border-l-2 border-red-400">
              <p className="font-semibold text-gray-900">Day 25–27: Follow Up With Original 5</p>
              <p className="text-sm text-gray-600">Re-reach out to your Week 2 call people. Send them your updated offer page. Offer a discount for early commitment (20% off first month or project).</p>
            </div>
            <div className="pl-4 border-l-2 border-red-400">
              <p className="font-semibold text-gray-900">Day 28–30: Cold Outreach (If Needed)</p>
              <p className="text-sm text-gray-600">If no one has committed, it's time to be bold. Cold email 5 more people. Offer a consultation call and ask directly: "Can I help you with [problem]?"</p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded p-4 sm:p-6 mb-6">
            <p className="font-bold text-red-900 text-lg mb-3">🔴 THE CRITICAL DECISION: Day 30</p>
            <p className="text-gray-900 font-semibold mb-2">
              If you DON'T have one (1) paying client or committed invoice by Day 30:
            </p>
            <p className="text-red-800 font-medium mb-4">
              Your NICHE is wrong, not your offer. Your outreach is fine. People just don't need what you're selling to THIS group.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-red-300 rounded p-3">
                <p className="text-xs font-bold text-red-900 mb-1">OPTION A: Niche Pivot</p>
                <p className="text-xs text-gray-700">Same offer, different audience (ask Week 2 callers for referrals to their peers)</p>
              </div>
              <div className="bg-white border border-red-300 rounded p-3">
                <p className="text-xs font-bold text-red-900 mb-1">OPTION B: Quit</p>
                <p className="text-xs text-gray-700">Stop now. You've learned what works. Start a new business with this knowledge.</p>
              </div>
            </div>
            <p className="text-xs text-red-700 font-semibold">
              Do NOT do this: Keep grinding the same failing niche for 60 more days hoping it works.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
            <p className="font-bold text-green-900 mb-2">✓ If You WIN Before Day 30</p>
            <p className="text-sm text-green-800">Send your first invoice. Get paid. Move to Weeks 5–8 phase.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Time Budget</p>
              <p className="font-bold text-gray-900">10 hours</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Money</p>
              <p className="font-bold text-gray-900">£0</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs">Deliverable</p>
              <p className="font-bold text-gray-900">1 invoice</p>
            </div>
          </div>
        </div>

        {/* Weeks 5–8 and 9–12 Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Weeks 5–8: The Delivery Phase</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Your focus:</strong> Deliver so well your first client raves about you.</p>
              <p>Week 5–6: Execute flawlessly. Document your exact process (this is your playbook).</p>
              <p>Week 7–8: Close customers #2 and #3 (your Week 2 contacts are warm leads).</p>
              <p className="text-green-700 font-semibold">✓ Success = 3 customers by Day 60, documented process</p>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Weeks 9–12: The Systemize Phase</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Your focus:</strong> Document systems so you can scale or train help.</p>
              <p>Week 9–10: Write down your repeatable client workflow (Notion page or Google Doc).</p>
              <p>Week 11–12: Do 80/20 analysis—strip away low-impact work, obsess over what sells.</p>
              <p className="text-green-700 font-semibold">✓ Success = Scalable system, locked pricing, referrals flowing</p>
            </div>
          </div>
        </div>

        {/* Day 90 Checkpoint */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 90 Checkpoint: Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-3">REVENUE PROOF</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Month 1 Revenue</span>
                  <span className="font-bold text-gray-900">£1k–£3k</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Month 2 Revenue</span>
                  <span className="font-bold text-gray-900">£3k–£7k</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Month 3 Revenue</span>
                  <span className="font-bold text-gray-900">£5k–£15k+</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-3">CUSTOMER PROOF</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Paying Customers</span>
                  <span className="font-bold text-gray-900">3+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Reputable Referrals</span>
                  <span className="font-bold text-gray-900">2+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Client Satisfaction</span>
                  <span className="font-bold text-gray-900">9+/10 rating</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-3">SYSTEM PROOF</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Documented Process</span>
                  <span className="font-bold text-gray-900">✓ Complete</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Pricing Locked</span>
                  <span className="font-bold text-gray-900">✓ Set</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Pipeline Built</span>
                  <span className="font-bold text-gray-900">£10k+ next month</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-3">MINDSET PROOF</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Founder Confidence</span>
                  <span className="font-bold text-gray-900">Proven</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Sustainability</span>
                  <span className="font-bold text-gray-900">Confirmed</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-orange-200">
                  <span className="text-gray-700">Next Phase Ready</span>
                  <span className="font-bold text-gray-900">Month 4+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Startup Costs Section */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Your Startup Budget: The £200 Rule</h2>

        <p className="text-lg text-gray-700 mb-8">
          You don't need much money to launch. You need focus. Here's exactly what costs what.
        </p>

        {/* Budget Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Item</th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold">Timeline</th>
                <th className="px-4 py-3 text-right text-gray-700 font-semibold">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-900">Domain name (.com, .co.uk)</td>
                <td className="px-4 py-3 text-gray-600">Day 1</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">£8–15/year</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">Carrd landing page</td>
                <td className="px-4 py-3 text-gray-600">Day 5</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">£40/year</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">Stripe payments processor</td>
                <td className="px-4 py-3 text-gray-600">Day 3</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">Free setup</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">Email (Gmail)</td>
                <td className="px-4 py-3 text-gray-600">Day 1</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">Free</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">Calendar tool (Calendly free tier)</td>
                <td className="px-4 py-3 text-gray-600">Day 2</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">Free</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">Notion workspace</td>
                <td className="px-4 py-3 text-gray-600">Day 1</td>
                <td className="px-4 py-3 text-right font-semibold text-gray-900">Free</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Professional indemnity insurance</td>
                <td className="px-4 py-3 text-gray-600">Day 30–60</td>
                <td className="px-4 py-3 text-right font-semibold text-orange-900">£25–50/month</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Business bank account</td>
                <td className="px-4 py-3 text-gray-600">Day 30</td>
                <td className="px-4 py-3 text-right font-semibold text-orange-900">Free–£10/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 mb-12">
          <h3 className="font-bold text-green-900 mb-4">✓ Month 1 Out-of-Pocket Total: £49–99</h3>
          <p className="text-sm text-green-800 mb-4">
            That covers everything to get your first customer. Stripe takes 2.9% + £0.20 per transaction, but that's only when you WIN.
          </p>
          <p className="text-xs text-green-700 font-semibold">
            By Day 90, you'll have collected £5k–£15k+ in revenue. Your upfront cost will be 0.3–1% of earnings.
          </p>
        </div>

        {/* Anti-Examples Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">What NOT to Spend Money On</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Logo Design</p>
              <p className="text-sm text-red-800">£300–£1,000. You don't need it. Use Canva free templates Day 1.</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Business Cards</p>
              <p className="text-sm text-red-800">£50–£200. Zero impact on first sale. Spend it on ads if anything.</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Custom Website</p>
              <p className="text-sm text-red-800">£1k–£5k+. Carrd does the job for £40/year. You don't need WordPress.</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Google/Facebook Ads</p>
              <p className="text-sm text-red-800">£500–£2k minimum to test. Get customers through relationships first (better ROI).</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Premium SaaS Tools (HubSpot, Pipedrive, etc.)</p>
              <p className="text-sm text-red-800">£50–£300/month. Even free tiers are overkill. Use a spreadsheet.</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
              <p className="font-bold text-red-900 mb-2">❌ Lawyer on Day 1</p>
              <p className="text-sm text-red-800">£500–£2k. You don't have customers yet. Use Stripe's standard terms.</p>
            </div>
          </div>
        </div>

        {/* Incorporation Decision */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-6">Sole Trader vs Limited Company: Which Should You Pick?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-blue-900 mb-4 text-lg">Start Here: Sole Trader</p>
              <ul className="space-y-3 text-sm text-blue-800">
                <li>✓ Free to register (10 minutes on gov.uk)</li>
                <li>✓ Keep 70% after tax (20% income tax + 9% NI)</li>
                <li>✓ Simple accounting (spreadsheet fine)</li>
                <li>✓ No paperwork beyond that</li>
                <li>✓ Switch later without penalty</li>
              </ul>
              <p className="text-xs font-semibold text-blue-700 mt-4">
                Perfect for: Days 1–90 and first £50k revenue
              </p>
            </div>
            <div>
              <p className="font-bold text-blue-900 mb-4 text-lg">Upgrade When: Limited Company</p>
              <ul className="space-y-3 text-sm text-blue-800">
                <li>✓ £12 online registration</li>
                <li>✓ Better tax efficiency (19% corporation tax)</li>
                <li>✓ Limited liability protection</li>
                <li>✓ More structured for employees/investors</li>
                <li>✓ Required at £85k+ annual revenue (VAT threshold)</li>
              </ul>
              <p className="text-xs font-semibold text-blue-700 mt-4">
                Perfect for: £50k+ annual revenue
              </p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 border-l-4 border-orange-600 p-4 sm:p-6 rounded mt-12">
          <p className="font-bold text-orange-900 text-lg">🎯 Solo Rule #2: The £200 Rule</p>
          <p className="text-orange-800 text-sm mt-2">
            You can spend up to £200 total in your first 90 days, and it should all be on income-generating activities: a landing page (£40), payment processing (free), domain (£10), and insurance (£50–100). Everything else is a luxury tax on speed.
          </p>
        </div>
      </div>

      {/* Legal & Financial Setup */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 bg-gray-50 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Legal & Financial Setup: The Compliance Ladder</h2>

        <p className="text-lg text-gray-700 mb-8">
          Don't hire a lawyer on Day 1. Climb the ladder as you grow revenue. Here's exactly what you need at each stage.
        </p>

        {/* Tier 1 */}
        <div className="bg-white border-l-4 border-blue-600 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Tier 1: £0–£5K Revenue (Days 1–30)</h3>
              <p className="text-sm text-gray-600">The bare minimum to be legal.</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="pl-4 border-l-2 border-blue-200">
              <p className="font-semibold">Create a Business Email</p>
              <p className="text-gray-600">Gmail free account. Use [yourname]@[business].com (forwarding from domain to Gmail).</p>
            </div>
            <div className="pl-4 border-l-2 border-blue-200">
              <p className="font-semibold">Register as Sole Trader</p>
              <p className="text-gray-600">Go to gov.uk/ register-for-self-assessment. Takes 10 minutes. Free. You're now officially a business.</p>
            </div>
            <div className="pl-4 border-l-2 border-blue-200">
              <p className="font-semibold">Keep Receipts & Invoices</p>
              <p className="text-gray-600">Create a Notion folder for expenses and a simple Google Sheet for income. Save every receipt for 6 years.</p>
            </div>
            <div className="pl-4 border-l-2 border-blue-200">
              <p className="font-semibold">Track Income & Expenses</p>
              <p className="text-gray-600">Spreadsheet is fine. Date, amount, category, source. Update weekly.</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded mt-4 text-xs">
            <p className="text-blue-900 font-semibold">✓ Status: Legal and compliant.</p>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-white border-l-4 border-amber-600 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-600">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Tier 2: £5K–£50K Revenue (Days 30–60 onward)</h3>
              <p className="text-sm text-gray-600">You're making real money. Upgrade your system.</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-semibold">Open a Business Bank Account</p>
              <p className="text-gray-600">Starling, Wise, or NatWest. Costs £0–£10/month. Separate business money from personal immediately.</p>
            </div>
            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-semibold">Upgrade to Accounting Software</p>
              <p className="text-gray-600">FreeAgent (£30/month) or Wave (free) automatically categorizes expenses. Saves 5 hours per month.</p>
            </div>
            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-semibold">Set Aside Tax Money</p>
              <p className="text-gray-600">Save 29% of every £ earned (20% income tax + 9% National Insurance). Put it in a separate savings account immediately.</p>
            </div>
            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-semibold">Get Professional Indemnity Insurance</p>
              <p className="text-gray-600">£25–50/month. Protects you if a client sues. Non-negotiable if you're in services, consulting, or coaching.</p>
            </div>
            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-semibold">Consider VAT Registration</p>
              <p className="text-gray-600">Only if hitting £85k/year. You'll charge 20% VAT on invoices but can reclaim on expenses. Neutral impact financially if you have B2B clients.</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded mt-4 text-xs">
            <p className="text-amber-900 font-semibold">✓ Status: Professional, tax-compliant, protected.</p>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="bg-white border-l-4 border-green-600 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Tier 3: £50K+ Revenue (Year 1 if Profitable)</h3>
              <p className="text-sm text-gray-600">Time to optimize your structure.</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="pl-4 border-l-2 border-green-200">
              <p className="font-semibold">Talk to an Accountant (Not a Lawyer Yet)</p>
              <p className="text-gray-600">Costs £150–500 for advice. They'll tell you about Limited Company vs Sole Trader based on YOUR profit.</p>
            </div>
            <div className="pl-4 border-l-2 border-green-200">
              <p className="font-semibold">Consider Incorporating as Limited Company</p>
              <p className="text-gray-600">£12 online, 5 hours admin. Lower tax rate (19% corporation tax vs 20+% income tax). Better for growth. File annual accounts (£13).</p>
            </div>
            <div className="pl-4 border-l-2 border-green-200">
              <p className="font-semibold">Upgrade to Proper Bookkeeping</p>
              <p className="text-gray-600">Xero or FreeAgent Pro (£10–20/month). Companies House requires proper records if incorporated.</p>
            </div>
            <div className="pl-4 border-l-2 border-green-200">
              <p className="font-semibold">Plan for Corporation Tax</p>
              <p className="text-gray-600">19% on profits if Limited Company. Plan quarterly. Work with accountant to file timely.</p>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded mt-4 text-xs">
            <p className="text-green-900 font-semibold">✓ Status: Optimized for serious business. Ready for employees or investors.</p>
          </div>
        </div>

        {/* Anti-Example */}
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 sm:p-8 mb-12">
          <p className="text-sm font-bold text-red-700 mb-3">⚠ THE LAWYER TRAP (Anti-Example)</p>
          <p className="text-gray-900 mb-3">
            Founder hires lawyer on Day 1. Gets custom T&Cs drafted (£500), privacy policy (£300), client contract template (£200). Total: £1,000.
          </p>
          <p className="text-gray-900 mb-3">
            By Day 90? Zero paying customers. T&Cs never used. Money wasted. Founder quit and got a job.
          </p>
          <p className="text-sm text-red-700 font-semibold">
            ✗ Lesson: Invest in customers before lawyers. Use Stripe's standard terms until you have 10+ customers and £10k+ revenue.
          </p>
        </div>

        <div className="bg-orange-100 border-l-4 border-orange-600 p-4 sm:p-6 rounded">
          <p className="font-bold text-orange-900 text-lg">🎯 Solo Rule #3: Climb the Ladder, Not the Skyscraper</p>
          <p className="text-orange-800 text-sm mt-2">
            Tier 1 is free or £10/month. Tier 2 is £150/month. Tier 3 needs an accountant. You don't need all three on Day 1. Follow the revenue climb. Skip steps won't help you; they'll slow you down.
          </p>
        </div>
      </div>

      {/* Your Next Steps */}
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Your Next Steps: Start Tomorrow</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8 mb-12">
          <h3 className="font-bold text-gray-900 mb-6 text-lg">The Day 1 Action Plan (2 Hours)</h3>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-semibold text-gray-900">Register Your Domain</p>
                <p className="text-sm text-gray-600">Use Namecheap or GoDaddy. Cost: £8–15. Takes 10 minutes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-semibold text-gray-900">Create Business Email</p>
                <p className="text-sm text-gray-600">Gmail free account. Set up email forwarding from domain. Takes 5 minutes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-semibold text-gray-900">Register as Sole Trader</p>
                <p className="text-sm text-gray-600">Go to gov.uk, self-assessment registration. Takes 10 minutes. Free.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-semibold text-gray-900">Create Carrd Landing Page</p>
                <p className="text-sm text-gray-600">Use "Outline" template. Write headline, problem, price, CTA. Cost: £40/year. Takes 45 minutes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
              <div>
                <p className="font-semibold text-gray-900">Set Up Stripe Account</p>
                <p className="text-sm text-gray-600">Connect Carrd to Stripe. Set commission rate (e.g., £500, £2000, or £10k project). Takes 15 minutes.</p>
              </div>
            </li>
          </ol>
          <p className="text-sm text-gray-600 mt-6 pt-6 border-t border-gray-200">
            ✓ By end of Day 1: You have a live business, ready to take money. Total cost: £63–70. Time invested: 2 hours.
          </p>
        </div>

        <h3 className="font-bold text-gray-900 mb-6 text-lg">Related Guides That Help</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-600 transition">
            <h4 className="font-semibold text-gray-900 mb-2">
              <Link href="/start/niche-selection" className="text-orange-600 hover:underline">
                → Niche Selection Guide
              </Link>
            </h4>
            <p className="text-sm text-gray-600">Pick the right niche BEFORE you launch. This is your prerequisite.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-600 transition">
            <h4 className="font-semibold text-gray-900 mb-2">
              <Link href="/start/business-models" className="text-orange-600 hover:underline">
                → Business Models Guide
              </Link>
            </h4>
            <p className="text-sm text-gray-600">Choose your model: done-for-you services, digital products, memberships, or hybrid.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-600 transition">
            <h4 className="font-semibold text-gray-900 mb-2">
              <Link href="/sales/getting-clients" className="text-orange-600 hover:underline">
                → Getting Clients Guide
              </Link>
            </h4>
            <p className="text-sm text-gray-600">Your Week 2 outreach strategy. How to reach and convert your first customers.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-600 transition">
            <h4 className="font-semibold text-gray-900 mb-2">
              <Link href="/offer/pricing-strategy" className="text-orange-600 hover:underline">
                → Pricing Strategy Guide
              </Link>
            </h4>
            <p className="text-sm text-gray-600">Set your offer price so you attract customers AND make real money.</p>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8 mb-12">
          <p className="text-sm font-bold text-red-700 mb-2">⚠ DO NOT SKIP WEEK 1</p>
          <p className="text-gray-900 font-medium">
            Week 1 is the most important week. It forces you to get live fast, before perfectionism sets in. Do not:
          </p>
          <ul className="text-sm text-gray-700 mt-4 space-y-2">
            <li>✗ Wait for the perfect logo</li>
            <li>✗ Wait for the perfect copy</li>
            <li>✗ Wait for the perfect name</li>
            <li>✗ Spend a week on website design</li>
            <li>✗ Plan more than needed</li>
          </ul>
          <p className="text-sm text-red-700 font-semibold mt-4">
            If it doesn't live by Day 7, you've already failed the first test. Get imperfect and live. Perfect and dead is worse.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">You've Got 90 Days. Make Them Count.</h3>
          <p className="text-orange-50 mb-8 text-lg">
            Stop planning. Start launching. Your first customer is waiting, and they don't care about your logo.
          </p>
          <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition">
            Start Your Day 1 Now
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-12 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">The /start Pillar</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/start/business-ideas" className="text-orange-600 hover:underline">Business Ideas</Link></li>
                <li><Link href="/start/business-models" className="text-orange-600 hover:underline">Business Models</Link></li>
                <li><Link href="/start/niche-selection" className="text-orange-600 hover:underline">Niche Selection</Link></li>
                <li><Link href="/start/first-90-days" className="text-orange-600 hover:underline">First 90 Days</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sales/getting-clients" className="text-orange-600 hover:underline">Getting Clients</Link></li>
                <li><Link href="/sales/discovery-calls" className="text-orange-600 hover:underline">Discovery Calls</Link></li>
                <li><Link href="/offer/pricing-strategy" className="text-orange-600 hover:underline">Pricing Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Reference</h4>
              <ul className="space-y-2 text-sm">
                <li>Week 1: Setup (£40–70)</li>
                <li>Week 2: Validation (£0)</li>
                <li>Week 3: Polish (£0)</li>
                <li>Week 4: First Sale (£0)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
