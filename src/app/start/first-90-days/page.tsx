import Link from 'next/link';

export default function First90DaysPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-20 text-base sm:text-lg leading-relaxed text-gray-900">
      
      {/* Hero Section */}
      <section className="mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          The Solo Founder's First 90 Days
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
          Your week-by-week launch plan: from Day 1 to first revenue
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded mb-8">
          <p className="text-amber-900 m-0">
            <strong>Personal Story:</strong> By Day 87, I had 3 clients and £6,200 in revenue. By Day 120, I was at £11k/month. Most founders quit between Day 31–90 because they're building the wrong thing. This guide makes sure you're not one of them.
          </p>
        </div>
      </section>

      {/* The 90-Day Mindset */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Why 90 Days Is Perfect
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">30 Days Is Too Short</h3>
            <p className="text-gray-700">
              You need time to iterate. By Day 30, most founders either have their first sale or nothing. If you only give yourself 30 days, you panic on Day 25 and either lower your price to zero or quit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Six Months Is Too Long</h3>
            <p className="text-gray-700">
              This is when founders lose focus. By Month 4, they're building features no one asked for. By Month 5, they're burning out. By Month 6, they're dead. 90 days is the constraint that forces execution.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">90 Days Is Just Right</h3>
            <p className="text-gray-700">
              12 weeks + 2 weekend buffers = enough time to sell, deliver, and build a repeatable system. Not enough time to overthink. The pressure keeps you focused.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-blue-900 m-0">
              <strong>Reality Check:</strong> By Day 30, you know if anyone will pay. By Day 60, you know if you can deliver without burning out. By Day 90, you have a real business or a clear signal to pivot. No exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Week-by-Week Plan */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          The 12-Week Timeline
        </h2>

        {/* Week 1 */}
        <div className="mb-12 border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 1: The Setup Sprint (Days 1–7)</h3>
          <p className="text-gray-700 mb-4">
            <strong>Objective:</strong> Get payment-ready. By Day 7, someone should be able to buy from you.
          </p>
          
          <div className="space-y-4 mb-6 bg-gray-50 p-6 rounded">
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 1–2: Offer Definition</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Go through <Link href="/start/niche-selection" className="text-blue-600 hover:underline">/start/niche-selection</Link> and lock in your niche</li>
                <li>Define: Problem, Solution, Price (charge something: £200–£2,000 minimum)</li>
                <li>Write 3-sentence pitch: "I help [person] solve [problem] by doing [thing]. It costs £X and takes Y weeks."</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 3–4: Payment Setup</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Create Stripe account (free): stripe.com</li>
                <li>Test a £1 transaction to verify it works</li>
                <li>Add Calendly (free calendly.com) for booking calls</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 5–6: Landing Page</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Create a one-page offer page: <strong>Carrd (£39/year)</strong> or Google Doc link</li>
                <li>Include: Problem, your solution, testimonial (fake one from a friend OK for now), price, Calendly link</li>
                <li>Do NOT build a custom website. Do NOT overthink design.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 7: First Outreach</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Send 3 messages today to people in your network: "Hey [name], I'm starting X. Do you know anyone who struggles with [problem]?"</li>
                <li>Include your offer page link</li>
                <li>Track: who you messaged, when, if they replied</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mb-4">
            <p className="text-red-900 text-sm m-0">
              <strong>What NOT to Do Week 1:</strong> Logo, business cards, domain name, legal registration, fancy website, content calendar, social media setup. Only: offer definition → payment → landing page → first outreach.
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <p className="text-purple-900 text-sm m-0">
              <strong>Solo Rule:</strong> "Your landing page must have a payment button by Day 7." If someone wants to buy, they should be able to click and pay. No "coming soon."
            </p>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-12 border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 2: First 5 Conversations (Days 8–14)</h3>
          <p className="text-gray-700 mb-4">
            <strong>Objective:</strong> Talk to 5 potential customers. Learn if your offer resonates.
          </p>
          
          <div className="space-y-4 mb-6 bg-gray-50 p-6 rounded">
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 8–9: Scheduling</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Send 5 calendar booking links: "Want to chat about your [problem]? 15-min call, free."</li>
                <li>Track: who you invited, who booked</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 10–12: Calls</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Have 3–5 calls (even if only 2 booked, that's progress)</li>
                <li>Listen: "What's your biggest frustration?" "Would you pay £X for this solution?" "Who else has this problem?"</li>
                <li>Record notes on their budget, timeline, and whether they'd commit</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 13–14: Follow-up</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Send 1 follow-up email to each: "Thanks for the call. To move forward, click here [payment link]."</li>
                <li>If they have questions, answer them same-day</li>
                <li>Continue outreach: send 3 more booking invites</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mb-4">
            <p className="text-red-900 text-sm m-0">
              <strong>What NOT to Do Week 2:</strong> Perfecting your pitch, building features, creating a content calendar. Just: calls and listening.
            </p>
          </div>
        </div>

        {/* Week 3 */}
        <div className="mb-12 border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 3: Offer Polish (Days 15–21)</h3>
          <p className="text-gray-700 mb-4">
            <strong>Objective:</strong> Iterate your offer based on feedback. Get closer to first sale.
          </p>
          
          <div className="space-y-4 mb-6 bg-gray-50 p-6 rounded">
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 15–16: Review Feedback</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Look at Week 2 calls: What questions came up? What objections?</li>
                <li>Adjust your offer slightly: scope, price, or positioning</li>
                <li>Don't change everything—just what's broken</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 17–18: New Outreach</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Send 5 new booking requests with updated pitch</li>
                <li>Include social proof if you have it: "3 people are testing this, 1 was interested"</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 19–20: More Calls</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Aim for 3–5 more calls</li>
                <li>If anyone says "yes," move them to payment ASAP (don't lose momentum)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 21: Weekly Review</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Total outreach attempts so far: ~18 (3 Week 1 + 5 Week 2 + 5 Week 3, plus follow-ups)</li>
                <li>Sales so far: 0? 1? 2?</li>
                <li>If 0 sales by Day 21: You have 9 days to adjust. Go back to niche or offer iteration.</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mb-4">
            <p className="text-red-900 text-sm m-0">
              <strong>What NOT to Do Week 3:</strong> Adding features, redesigning your website, lowering price too much, second-guessing. Just: listen and iterate.
            </p>
          </div>
        </div>

        {/* Week 4 */}
        <div className="mb-12 border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Week 4: The First Sale (Days 22–30)</h3>
          <p className="text-gray-700 mb-4">
            <strong>Objective:</strong> Close at least 1 paying customer. This is binary: revenue or pivot.
          </p>
          
          <div className="space-y-4 mb-6 bg-gray-50 p-6 rounded">
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 22–24: Full Push</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Send 6 booking invites (this is your last push before Day 30 checkpoint)</li>
                <li>Follow up with Week 2 and 3 people who said "maybe": "I'm opening 2 spots this week. If interested, book here."</li>
                <li>If anyone is on the fence, offer: "First month at 50% off if you commit by Day 24"</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 25–27: Close</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Have calls with everyone who booked</li>
                <li>Goal: Close 1 customer (or 2, or 3—the more the better)</li>
                <li>When they say yes: "Great, click here to pay [Stripe link]"</li>
                <li>Track exact details: Price, scope, timeline, deliverables</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Day 28–30: Document</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Create a Notion page: "Customer 1: [Name], [Price], [Scope], [Timeline]"</li>
                <li>Start a delivery plan: what will you actually do to serve them?</li>
                <li>Total outreach: 25–30 attempts over 30 days</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
            <p className="text-yellow-900 text-sm m-0">
              <strong>Anti-Example: The Week 4 Redesign Trap</strong><br />
              Founder gets nervous on Day 25. Cancels calls. Decides to rebuild website as a "safety net." Loses momentum. Hits Day 30 with zero revenue and a shiny new website nobody sees. Quits Week 5.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mb-4">
            <p className="text-red-900 text-sm m-0">
              <strong>What NOT to Do Week 4:</strong> Redesigning anything, hiring, building features, writing content, being "perfect." Only: close the sale.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <p className="text-purple-900 text-sm m-0">
              <strong>Day 30 Checkpoint (Binary):</strong> Either you have 1+ paying customer OR you pivot. No middle ground. No "continue building." If zero revenue by Day 30, you change niche, offer, or target market. Then restart the 30-day clock.
            </p>
          </div>
        </div>

        {/* Weeks 5-6 */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Weeks 5–6: Delivery Sprint (Days 31–42)</h3>
          <p className="text-gray-700 mb-6">
            <strong>What You Do:</strong> Deliver the work you promised. Do it beautifully. Do it manually. Do NOT hire or automate.
          </p>
          <div className="bg-gray-50 p-6 rounded mb-4">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Follow your delivery plan from Day 30</li>
              <li>Track every hour: "Spent 4 hours on research, 3 hours on execution, 1 hour on client feedback"</li>
              <li>Document the playbook as you go: "Step 1: X, estimated 2 hours. Step 2: Y, estimated 3 hours."</li>
              <li>Get client feedback weekly</li>
              <li>Get a testimonial by Day 40: "What exceeded expectations? Would you recommend?"</li>
              <li>Ongoing: send 5–8 new booking requests (you're still selling while delivering)</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <p className="text-red-900 text-sm m-0">
              <strong>Week 5–6 Reality:</strong> If delivery takes 30+ hours for one client at £1,000, you have a problem. Scope is too big. By Day 45, you'll know if this is sustainable. If not, kill the offer and design a smaller scope.
            </p>
          </div>
        </div>

        {/* Weeks 7-8 */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Weeks 7–8: Referral Engine (Days 43–56)</h3>
          <p className="text-gray-700 mb-6">
            <strong>What You Do:</strong> Finish delivery. Build your referral ask. Get Customer 2.
          </p>
          <div className="bg-gray-50 p-6 rounded mb-4">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Complete delivery for Customer 1 by Day 45</li>
              <li>Send testimonial request + case study outline</li>
              <li>Ask referrals: "Who do you know that has this problem? I'll give you £100 if they become a customer."</li>
              <li>Send 8–10 new outreach messages (different niches or angles if needed)</li>
              <li>Target: 1–2 more sales by Day 56 (your pipeline from Week 1–4 is still active)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <p className="text-purple-900 text-sm m-0">
              <strong>Solo Rule:</strong> "Referrals are your fuel." Customer 1 should refer you to Customer 2. If not, your offer isn't good enough or your delivery wasn't impactful enough. Note this.
            </p>
          </div>
        </div>

        {/* Weeks 9-12 */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Weeks 9–12: Systematize (Days 57–90)</h3>
          <p className="text-gray-700 mb-6">
            <strong>What You Do:</strong> Turn the manual playbook into a system. Achieve 4-hour/week delivery. Lock in pricing.
          </p>
          <div className="bg-gray-50 p-6 rounded">
            <div className="mb-4">
              <p className="font-bold text-gray-900 mb-2">Days 57–63: Template Your Playbook</p>
              <p className="text-gray-700">Create a 1-page checklist: Step 1 (X hours), Step 2 (Y hours), Step 3 (Z hours). Each customer should follow it.</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-gray-900 mb-2">Days 64–70: Lock in Systems</p>
              <p className="text-gray-700">Set up: Calendly (scheduling) + Stripe (payments) + Notion (tracking). These three shouldn't change for 2 years.</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-gray-900 mb-2">Days 71–77: Pricing Audit</p>
              <p className="text-gray-700">Look at all 2–5 customers: price, hours, profit per customer. If profitable: raise price 20%. If not: change scope.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">Days 78–84: Referral Push</p>
              <p className="text-gray-700">Send 10–15 more outreach messages. Ask all customers for referrals. Target: 6–9 customers total by Day 90.</p>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <p className="font-bold text-gray-900 mb-2">Day 85–90: Final Review</p>
              <p className="text-gray-700">Calculate: revenue, clients, delivery hours per customer, profit per client, system readiness. What's your £/hour rate? Can you do 4 hours/week indefinitely?</p>
            </div>
          </div>
        </div>

        {/* Day 90 Checkpoint */}
        <div className="mb-12 border-l-4 border-green-600 pl-6 bg-green-50 p-6 rounded">
          <h3 className="text-2xl font-bold text-green-900 mb-6">Day 90 Checkpoint: Final Truth</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-green-900 mb-1">✅ Revenue (£1K–£15K or 2–9 customers)</p>
              <p className="text-green-900">You have proof. Decision: grow, automate, or steady-state.</p>
            </div>
            <div>
              <p className="font-bold text-green-900 mb-1">✅ Delivery System (4 hours/week, repeatable)</p>
              <p className="text-green-900">You can deliver without burning out. Sustainable.</p>
            </div>
            <div>
              <p className="font-bold text-green-900 mb-1">✅ Referral Pipeline (organic leads from customers)</p>
              <p className="text-green-900">Next customers come from referrals. You don't need to outreach as hard.</p>
            </div>
            <div>
              <p className="font-bold text-green-900 mb-1">✅ System (Calendly, Stripe, Notion, testimonials)</p>
              <p className="text-green-900">Your machine is built. You can hire, delegate, or stay solo.</p>
            </div>
            <div className="pt-4 border-t-2 border-green-200">
              <p className="text-green-900 font-bold">
                If all 4 are YES by Day 90: You have a real business. Time to decide your next 90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Costs Budget Table */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Startup Costs: The Real Numbers
        </h2>
        <p className="text-gray-700 mb-6">
          You don't need much money to start. Here's what you actually spend:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left px-4 py-3 font-bold text-gray-900">Item</th>
                <th className="text-left px-4 py-3 font-bold text-gray-900">Cost</th>
                <th className="text-left px-4 py-3 font-bold text-gray-900">When</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-700">Domain Name (optional)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">£10/year</td>
                <td className="px-4 py-3 text-gray-600">Day 1 (optional)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Landing Page (Carrd)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">£39/year</td>
                <td className="px-4 py-3 text-gray-600">Day 5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Email (Gmail)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">Free</td>
                <td className="px-4 py-3 text-gray-600">Day 1</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Calendly (free tier)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">Free</td>
                <td className="px-4 py-3 text-gray-600">Day 3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Stripe (payment processing)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">2.9% + £0.20/transaction</td>
                <td className="px-4 py-3 text-gray-600">Day 3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Notion (free tier)</td>
                <td className="px-4 py-3 font-semibold text-gray-900">Free</td>
                <td className="px-4 py-3 text-gray-600">Day 1</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Professional Indemnity Insurance</td>
                <td className="px-4 py-3 font-semibold text-gray-900">£25–50/month</td>
                <td className="px-4 py-3 text-gray-600">Day 30–60</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-bold text-gray-900">Business Bank Account</td>
                <td className="px-4 py-3 font-bold text-gray-900">Free–£10/month</td>
                <td className="px-4 py-3 text-gray-600">Day 30</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-6">
          <p className="text-green-900 m-0">
            <strong>Month 1 Total Out-of-Pocket:</strong> £49–99 (just Carrd + optional domain). That's it.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">What NOT to Spend On (Days 1–90)</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">Logo Design (£300–1,000)</p>
                <p className="text-gray-700 text-sm">No customer cares. Save this for Year 2.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">Business Cards (£50–200)</p>
                <p className="text-gray-700 text-sm">Digital is free. Printing is waste.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">Custom Website (£1K–5K+)</p>
                <p className="text-gray-700 text-sm">Carrd is £39 and converts just as well.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">Ads (Google, Facebook, LinkedIn)</p>
                <p className="text-gray-700 text-sm">You don't have a repeatable pitch yet. Organic first.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">LLC Registration (£200–500)</p>
                <p className="text-gray-700 text-sm">Wait until revenue hits £5K. Sole Trader costs £0.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-600 font-bold">❌</span>
              <div>
                <p className="font-bold text-gray-900">Premium SaaS Tools (HubSpot, Pipedrive, etc.)</p>
                <p className="text-gray-700 text-sm">You don't need CRM. You have 5 customers. Use a spreadsheet.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
          <p className="text-purple-900 font-bold m-0">
            Solo Rule – The £200 Rule: You can spend up to £200 total in your first 90 days, and it should all be on income-generating activities (landing page, payment processing, calendar tool). Everything else is distraction until you hit £5K revenue.
          </p>
        </div>
      </section>

      {/* Legal & Financial Setup */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Legal & Financial Setup: Minimum Viable Compliance
        </h2>
        <p className="text-gray-700 mb-8">
          Don't hire a lawyer. Don't overcomplicate this. Do the minimum, then scale.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Compliance Ladder</h3>
            <p className="text-gray-700 mb-6">
              What you do depends on your revenue stage. Not before.
            </p>

            <div className="space-y-6">
              {/* Tier 1 */}
              <div className="border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-bold text-green-700">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">£0–£5K Revenue: Sole Trader (Days 1–30)</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Create email for business (Gmail, free)</li>
                  <li>Register as Sole Trader online (gov.uk, 10 minutes, £0)</li>
                  <li>Keep all receipts and invoices in a folder (Notion works)</li>
                  <li>Track income and expenses in a spreadsheet</li>
                  <li>This is legal. You're compliant.</li>
                </ul>
              </div>

              {/* Tier 2 */}
              <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-700">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">£5K–£50K Revenue: Business Bank Account (Day 30–60)</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Open a business bank account (Starling, Wise, or traditional bank, £0–10/month)</li>
                  <li>Set up accounting software: FreeAgent (£30/month on Day 30) or Wave (free)</li>
                  <li>Save 29% of every pound: 20% income tax + 9% National Insurance (put in separate account)</li>
                  <li>Get professional indemnity insurance (£25–50/month, required for most services)</li>
                  <li>Register VAT if you hit £85K/year (not before)</li>
                </ul>
              </div>

              {/* Tier 3 */}
              <div className="border-2 border-purple-300 rounded-lg p-6 bg-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="font-bold text-purple-700">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">£50K+ Revenue: Limited Company (Year 1 if profitable)</h4>
                </div>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Talk to an accountant (not a lawyer for now)</li>
                  <li>Register Limited Company (£12 online, ~5 hours admin)</li>
                  <li>File Companies House accounts annually (£13)</li>
                  <li>Use proper bookkeeping software (Xero, FreeAgent Pro, ~£10–20/month)</li>
                  <li>Pay corporation tax (19%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-yellow-900 mb-2">
              <strong>Anti-Example: The Lawyer Trap</strong><br />
              Founder hires lawyer on Day 1 to draft T&Cs, privacy policy, and client contracts. Cost: £800. By Day 90: zero customers. T&Cs never used. Money wasted.
            </p>
            <p className="text-yellow-900 m-0">
              <strong>The Rule:</strong> No lawyer until you have 10+ customers and £10K+ revenue. Until then: simple Stripe terms are enough.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Your Day 1 Action Plan
        </h2>
        <p className="text-gray-700 mb-8">
          Don't read another page. Do these 5 things today:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Go to <Link href="/start/niche-selection" className="text-blue-600 hover:underline">/start/niche-selection</Link></strong> and lock your niche in. 30 minutes. Do it now.
          </li>
          <li>
            <strong>Fill out the Cobblestone Method.</strong> Problem → Your Solution → Price. Write it down in Notion or a Google Doc.
          </li>
          <li>
            <strong>Write your 3-sentence pitch:</strong> "I help [person] solve [problem] by doing [thing]. It costs £X and takes Y weeks." Print it. Put it on your wall.
          </li>
          <li>
            <strong>Create a Stripe account</strong> (stripe.com, 10 minutes). Test a £1 transaction to yourself.
          </li>
          <li>
            <strong>Send 1 message today.</strong> Pick someone in your network. "Hey [name], I'm starting X. Do you know anyone who struggles with [specific problem]?" Include your offer page link (Carrd or Google Doc).
          </li>
        </ol>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <p className="text-blue-900 mb-3">
            <strong>Related Guides:</strong>
          </p>
          <ul className="list-disc pl-6 text-blue-900 space-y-1">
            <li><Link href="/marketing/first-customers" className="text-blue-600 hover:underline">First Customers: The Full Outreach Playbook</Link> — once you've got your offer, use this to make your 30 sales calls</li>
            <li><Link href="/start/business-models" className="text-blue-600 hover:underline">Business Models</Link> — if your niche doesn't feel right, explore different models</li>
            <li><Link href="/marketing/lead-flow" className="text-blue-600 hover:underline">Lead Flow Systems</Link> — once you hit Day 60, use this to systematize your referrals</li>
          </ul>
        </div>
      </section>

      {/* Warning Box */}
      <section className="mb-16 sm:mb-20 bg-red-50 border-l-4 border-red-600 p-8 rounded">
        <h2 className="text-2xl font-bold text-red-900 mb-6">
          ⚠️ The Critical Warning: Do Not Skip Week 1
        </h2>
        <div className="space-y-4 text-red-900">
          <p>
            Week 1 is not optional. You must have a payment-ready offer by Day 7. This is where 90% of solo founders fail: they spend Weeks 1–4 building a perfect website, logo, or business plan. Then they run out of runway.
          </p>
          <p>
            <strong>Your priorities in Week 1 (in order):</strong>
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Offer definition (Days 1–2)</li>
            <li>Stripe setup (Days 3–4)</li>
            <li>Landing page (Days 5–6)</li>
            <li>First outreach (Day 7)</li>
          </ol>
          <p>
            Everything else can wait. Logo? Month 4. LLC? Month 3. Website? Month 2. Content calendar? Month 6. Marketing funnel? Day 31+.
          </p>
          <p className="mt-6 font-bold">
            If you don't have revenue by Day 30, you pivot or quit. There is no Plan B. There is only revenue or iteration.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-gray-900 text-white p-8 sm:p-12 rounded-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          The 90-Day Truth
        </h2>
        <p className="text-gray-100 text-lg leading-relaxed max-w-2xl mx-auto">
          Most solo founders fail between Day 31 and Day 90 because they confuse motion with progress. This guide removes that confusion. By Day 30, you'll know if anyone will pay you. By Day 60, you'll know if you can deliver. By Day 90, you'll have a real business or a clear signal to move on. Both outcomes are wins. The only loss is the founder who builds for 6 months and quits without knowing if their idea works.
        </p>
        <p className="text-gray-100 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          <strong>You've got 90 days. Use them.</strong>
        </p>
      </section>
    </div>
  );
}
