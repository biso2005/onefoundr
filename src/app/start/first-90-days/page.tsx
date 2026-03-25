'use client';

import Link from 'next/link';
import { CheckCircle, AlertCircle, TrendingUp, Calendar, DollarSign, MessageSquare, Zap } from 'lucide-react';

export default function First90DaysPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 24px', fontSize: '16px', lineHeight: '1.8', color: '#2D3436' }}>
      
      {/* Hero */}
      <section style={{ marginBottom: '64px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          The 90-Day Solo Survival Guide
        </h1>
        <p style={{ fontSize: '20px', color: '#636E72', marginBottom: '24px', fontWeight: '500' }}>
          Stop planning. Start eliminating uncertainty about whether anyone will pay you.
        </p>
        <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '20px', borderRadius: '8px', margin: '32px 0' }}>
          <p style={{ margin: '0', fontSize: '15px', color: '#E65100' }}>
            <strong>The Solo Founder Reality:</strong> You have 90 days of mental energy and financial runway. Most startup failure happens on Day 91 because Days 1–90 were spent on beautiful business cards instead of revenue. This guide eliminates that. By Day 30, you'll know if anyone will pay you. By Day 60, you'll know if you can deliver. By Day 90, you'll have a system. Or you'll kill the idea and move on.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          The 90-Day Startup Cemetery
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Most solopreneurs fail between Day 31 and Day 90. Not because the idea is bad. But because they spent Days 1–30 on the wrong things:
        </p>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '12px' }}>Building a website before talking to customers</li>
          <li style={{ marginBottom: '12px' }}>Creating a logo instead of creating an offer</li>
          <li style={{ marginBottom: '12px' }}>Writing a business plan instead of making a sale</li>
          <li style={{ marginBottom: '12px' }}>Optimizing for compliance instead of validating demand</li>
        </ul>
        <p style={{ marginBottom: '24px' }}>
          By Day 30, they've spent £0 and earned £0. By Day 60, the momentum is gone. By Day 90, they're "taking a different direction" (code for: quit).
        </p>
        <p style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
          <strong>This page is the opposite architecture:</strong> Revenue is the only metric. Everything else is a distraction.
        </p>
      </section>

      {/* Phase 1 */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ backgroundColor: '#E3F2FD', borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1565C0', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Calendar size={32} />
            Phase 1: The Pre-Sale Sprint (Days 1–30)
          </h2>
          <p style={{ fontSize: '16px', color: '#1976D2', margin: '8px 0 0 0' }}>
            The validation phase. Do this or die.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderLeft: '4px solid #1565C0', padding: '24px', marginBottom: '32px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Checkpoint: Day 30</h3>
          <p style={{ marginBottom: '16px' }}>
            By Day 30, you must have <strong>one of these two outcomes</strong>:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#E8F5E9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2E7D32' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1B5E20', margin: '0 0 8px 0' }}>Option A: Revenue</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
                <strong>3 paid clients at £500+ each</strong><br />
                OR<br />
                <strong>10 pre-sales at £50+ each</strong>
              </p>
            </div>
            <div style={{ backgroundColor: '#E8F5E9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2E7D32' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1B5E20', margin: '0 0 8px 0' }}>Option B: Kill</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
                <strong>Zero revenue on Day 30</strong><br />
                → Pivot to a different offer<br />
                → Try a different market<br />
                → Or abandon the idea
              </p>
            </div>
          </div>
          <p style={{ color: '#C62828', fontWeight: '600', margin: '16px 0 0 0' }}>
            ⚠️ There is no "continue building." There is no "wait until Month 4." Day 30 is binary: revenue or pivot.
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What You Do (Days 1–30)</h3>
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Day 1–7: Offer Packaging</h4>
          <p style={{ marginBottom: '12px' }}>
            You do NOT have a product yet. You have a skill or a solution. Package it into a sellable offer.
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Download the Cobblestone Method:</strong> <Link href="/offer/from-scratch" style={{ color: '#00B894', textDecoration: 'none' }}>Go through /offer/from-scratch</Link> and fill out the 3 sections: Problem → Offer → Price.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Set one price:</strong> Don't overthink. For services: £500–£2,000 per project. For pre-sales (SaaS/Product): £50–£500 upfront. For done-for-you: £2,000–£10,000. You'll adjust after Day 30 based on market feedback.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Write one pitch:</strong> 2–3 sentences. "I help [specific person] solve [specific problem] by doing [specific thing]. It costs £X and takes Y weeks."
            </li>
          </ul>
          <p style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Budget:</strong> £0. Everything free: Notion, Google Docs, pen and paper.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Day 7–30: Manual Outreach (20 Attempts)</h4>
          <p style={{ marginBottom: '12px' }}>
            You have 20 manual outreach attempts to make before Day 30. That's slightly less than 1 per day (gives you weekends/buffer).
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>What "outreach" means:</strong> A direct, personal message to someone in your target market. Not LinkedIn automation. Not email blasts. <strong>Human to human.</strong>
          </p>
          <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
              <strong>The 20 Outreach Attempts:</strong>
            </p>
            <ul style={{ paddingLeft: '24px', margin: '0', fontSize: '14px' }}>
              <li style={{ marginBottom: '6px' }}>5 direct LinkedIn messages to people in your network</li>
              <li style={{ marginBottom: '6px' }}>5 cold emails to potential customers (find via LinkedIn, Google, industry lists)</li>
              <li style={{ marginBottom: '6px' }}>5 Slack/Discord messages in relevant communities</li>
              <li style={{ marginBottom: '6px' }}>5 in-person conversations or phone calls</li>
            </ul>
          </div>
          <p style={{ marginBottom: '12px' }}>
            <strong>Expected conversion:</strong> 1 in 10 will reply. 1 in 20 will become a customer. So: 20 outreach attempts = ~1 sale. If you want 3 clients by Day 30, you need ~60 attempts. Adjust your daily pace accordingly.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <Link href="/marketing/first-customers" style={{ color: '#00B894', textDecoration: 'none', fontWeight: '600' }}>
              Full playbook → /marketing/first-customers
            </Link>
          </p>
          <p style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Budget:</strong> £0 (coffee shops are free, LinkedIn is free, email is free).
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>Model Markers: How to Interpret "3 Clients"</h3>
        <p style={{ marginBottom: '16px' }}>
          The checkpoint is the same (binary: revenue or pivot), but what "revenue" means depends on your model:
        </p>
        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>Service (Freelancing, Consulting, Done-for-You)</h4>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <strong>Day 30 checkpoint:</strong> 1 paying client at £500+, OR 3 clients at £200+<br />
              <strong>Example:</strong> You sell "LinkedIn profile optimization" for £800. You land one client. ✅ Pass.
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>SaaS / Subscription</h4>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <strong>Day 30 checkpoint:</strong> 10 people who put down £10+ for early access, OR 3 people at £100+ MRR<br />
              <strong>Example:</strong> You're building an AI writing tool. You get 10 beta customers to put £10 down "when it's ready." ✅ Pass.
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>Digital Product (Course, Template, Ebook)</h4>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <strong>Day 30 checkpoint:</strong> 5 pre-sales at £50+ (before the product exists)<br />
              <strong>Example:</strong> You sell a notion email template. 5 people buy it for £99. ✅ Pass.
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>Content / Affiliate</h4>
            <p style={{ margin: '0', fontSize: '14px' }}>
              <strong>Day 30 checkpoint:</strong> NOT revenue. Instead: 100 email subscribers on Day 30 (you'll monetize later).<br />
              <strong>Why?</strong> Affiliate/content is slower. Switch to this model ONLY if you're already a good writer and have built an audience.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What NOT to Do (Days 1–30)</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '8px' }}>Don't build a website. Use Carrd (£39/year) or a Calendly link if you need somewhere to send people.</li>
          <li style={{ marginBottom: '8px' }}>Don't register an LLC or company. You'll do that at £5k revenue. For now: sole trader / Schedule C.</li>
          <li style={{ marginBottom: '8px' }}>Don't buy business cards, logos, or a domain name. This is distraction.</li>
          <li style={{ marginBottom: '8px' }}>Don't spend on Slack workspaces, Notion, fancy tools. Free tier, always.</li>
          <li style={{ marginBottom: '8px' }}>Don't create a "content calendar" or "personal brand." No one cares yet. Sell first, then build an audience.</li>
          <li style={{ marginBottom: '8px' }}>Don't overthink pricing. Charge something. You'll adjust.</li>
        </ul>
      </section>

      {/* Phase 2 */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ backgroundColor: '#F3E5F5', borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#6A1B9A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Zap size={32} />
            Phase 2: The Delivery Crucible (Days 31–60)
          </h2>
          <p style={{ fontSize: '16px', color: '#7B1FA2', margin: '8px 0 0 0' }}>
            Deliver the work. Prove you can do it without burning out.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderLeft: '4px solid #6A1B9A', padding: '24px', marginBottom: '32px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Checkpoint: Day 60</h3>
          <p style={{ marginBottom: '16px' }}>
            By Day 60, you must have <strong>delivered the work for at least 1 client</strong> and captured:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '8px' }}>1 written testimonial or case study (what problem did you solve, how much did they pay, would they recommend you?)</li>
            <li style={{ marginBottom: '8px' }}>Proof that you can deliver without crying (the scope fits your 4-hour delivery week estimate, or you discovered it doesn't)</li>
          </ul>
          <p style={{ color: '#C62828', fontWeight: '600' }}>
            ⚠️ If by Day 60 you're still delivering and want to crawl under your desk, your offer is too complex. Kill it. The problem isn't you—it's the scope.
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What You Do (Days 31–60)</h3>
        <p style={{ marginBottom: '16px' }}>
          <strong>One rule:</strong> Deliver beautifully but manually. No automation. No "scaling." Just you and your client.
        </p>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>Deliver the work.</strong> Do exactly what you promised. If you promised 5 days delivery, take 5 days. If you promised it would take 10 hours, track every hour.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Document the delivery process.</strong> Keep a log of what you did: "Day 1: research, 3 hours. Day 2: strategy call, 1 hour. Day 3: execution, 4 hours." This becomes your template for scaling later.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Collect feedback from your client.</strong> Ask: "What exceeded your expectations? What didn't? Would you pay 20% more for Y feature?" Record their answers. This informs your pricing and offer for Phase 3.
          </li>
          <li style={{ marginBottom: '12px' }}>
            <strong>Get a testimonial or case study.</strong> Ask your client: "Would you write 2–3 sentences about working with me?" Or offer to write it for them and get approval. Include: the problem, what you did, the result/outcome they'd recommend.
          </li>
        </ul>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Scope Discipline</h3>
        <p style={{ marginBottom: '16px' }}>
          During Days 31–60, you're testing: <strong>Can I deliver this profitably in 4 hours a week?</strong>
        </p>
        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 12px 0' }}>
            <strong>Example math:</strong> You charge £1,000 per project. It takes 20 hours. That's £50/hour. You're free. But if it takes 40 hours, that's £25/hour. You're broke.
          </p>
          <p style={{ margin: '0' }}>
            By Day 60, you should know: "My offer is a 15-hour project that clients pay £1,500 for. That's sustainable long-term."
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What NOT to Do (Days 31–60)</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '8px' }}>Don't hire a freelancer to help. You need to know what's hard about this work.</li>
          <li style={{ marginBottom: '8px' }}>Don't build a process. Build a manual playbook (document in Notion).</li>
          <li style={{ marginBottom: '8px' }}>Don't upgrade to "premium" software. Stick with free tools.</li>
          <li style={{ marginBottom: '8px' }}>Don't launch a second offer. Master this one.</li>
        </ul>
      </section>

      {/* Phase 3 */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ backgroundColor: '#E0F2F1', borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#00695C', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <TrendingUp size={32} />
            Phase 3: Stabilization (Days 61–90)
          </h2>
          <p style={{ fontSize: '16px', color: '#00897B', margin: '8px 0 0 0' }}>
            Build the machine that replaces manual labor.
          </p>
        </div>

        <div style={{ backgroundColor: '#FFF', borderLeft: '4px solid #00695C', padding: '24px', marginBottom: '32px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Checkpoint: Day 90</h3>
          <p>
            By Day 90, you'll have:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '8px' }}>A repeatable 4-hour delivery week (templated work, documented process)</li>
            <li style={{ marginBottom: '8px' }}>A simple system for scheduling, invoicing, and payment (Calendly + Stripe + Notion)</li>
            <li style={{ marginBottom: '8px' }}>6–9 months of financial runway (salary replacement + personal runway)</li>
            <li style={{ marginBottom: '8px' }}>Clear pricing locked in (you've tested it with 2–5 clients, know what margin works)</li>
            <li style={{ marginBottom: '8px' }}>Two customer testimonials or case studies (for future marketing)</li>
          </ul>
          <p style={{ color: '#00695C', fontWeight: '600', marginTop: '16px' }}>
            ✅ If all of the above is true on Day 90, you have a viable business. Time to decide: grow it, automate it, or step back.
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What You Do (Days 61–90)</h3>
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Task 1: Template Your Delivery (Days 61–75)</h4>
          <p style={{ marginBottom: '12px' }}>
            Take the playbook you documented in Phase 2. Turn it into a template:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>Create a Notion template or checklist with the exact steps you take</li>
            <li style={{ marginBottom: '8px' }}>Estimate time for each step (you have real data from Phase 2)</li>
            <li style={{ marginBottom: '8px' }}>Identify any task that takes &gt;2 hours that could be delegated later</li>
          </ul>
          <p style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Goal:</strong> By Day 75, you can deliver the entire offer by following a 1-page checklist. Any new client reuses 80% of the work from the last client.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Task 2: Lock in Systems (Days 76–85)</h4>
          <p style={{ marginBottom: '12px' }}>
            Set up the three tools you'll use forever:
          </p>
          <div style={{ display: 'grid', gap: '16px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#2D3436' }}>1. Scheduling (Calendly) — Free</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>Clients book consultation calls. You set your availability once.</p>
            </div>
            <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#2D3436' }}>2. Invoicing & Payment (Stripe or PayPal) — 2–3% fee</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>Send invoice, client pays, money lands in your bank. Automate this completely.</p>
            </div>
            <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#2D3436' }}>3. Financial Tracking (Notion or Spreadsheet) — Free</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>Each client: cost to deliver, revenue, net profit, delivery time. This becomes your data.</p>
            </div>
          </div>
          <p style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Time investment:</strong> 3 hours to set up all three. You're done by Day 80.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Task 3: Financial Checkup (Days 86–90)</h4>
          <p style={{ marginBottom: '12px' }}>
            Look at your Phase 2 + Phase 3 data. Calculate:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Per-client profitability:</strong> Revenue £X – Cost £Y = Profit £Z. What's the median?
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Delivery time per client:</strong> You estimated 4 hours/week. What was actual? (Phase 2 data says this.)
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Runway math:</strong> You've earned £X in 90 days. At this rate, do you have 6 months to grow? Or do you need to find clients faster?
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Pricing power:</strong> Did clients push back on price? Or did they pay quickly? Are you leaving money on the table?
            </li>
          </ul>
          <p style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
            Link: See <Link href="/offer/pricing" style={{ color: '#00B894', textDecoration: 'none' }}>pricing strategies</Link> — if data says clients have budget for more, raise price 20%.
          </p>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>What NOT to Do (Days 61–90)</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '32px' }}>
          <li style={{ marginBottom: '8px' }}>Don't hire someone yet. You haven't proven the business can support two salaries.</li>
          <li style={{ marginBottom: '8px' }}>Don't build complex systems (no CRM, no custom software, no "ops stack").</li>
          <li style={{ marginBottom: '8px' }}>Don't scale to 5 offers. Master 1.</li>
          <li style={{ marginBottom: '8px' }}>Don't neglect financial tracking. This data is your competitive advantage.</li>
        </ul>
      </section>

      {/* The Forbidden List */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#C62828', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertCircle size={32} />
          The Forbidden List: What You Do NOT Do (Days 1–90)
        </h2>
        <p style={{ marginBottom: '24px', fontSize: '16px' }}>
          These are the things solopreneurs do in the first 90 days that kill momentum. Every one of these is a distraction from revenue.
        </p>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No LLC / Company Registration</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Wait until revenue exceeds £5,000. Until then: sole trader / Schedule C (US). It's simpler and costs £0.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Custom Website</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Use Carrd (£39/year), a Calendly link, or a Google Doc. A custom website is 40 hours and £0 customers gained.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Logo / Branding / Business Cards</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Distraction. Your customers care about results, not your typeface. Do this at Month 4 if you're still in business.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Content Calendar / Personal Brand</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>You don't have an audience. Build one after you've proven revenue. For now: 1-to-1 outreach, not broadcasts.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Co-Working Space / Fancy Office</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Coffee shops are free. Your home is free. £30–200/month on workspace is £30–200 not going to customers.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No "Premium" SaaS Stack</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Notion (free) + Stripe (free) + Calendly (free) + Gmail (free) + Google Docs (free). You don't need HubSpot. You need revenue.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Hiring</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Not until Day 91. You're proving you can deliver solo first. Payroll kills solo founders at the 120-day mark.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No Pivot to a Second Offer</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>You get one offer in 90 days. If it doesn't work on Day 30, iterate the pitch, not the offer. Two offers = half focus on each.</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: '#C62828' }}>No "Perfecting" the offer before selling</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>Your offer is good enough today. The customer will tell you what to fix. Ship, sell, learn.</p>
          </div>
        </div>
      </section>

      {/* The Solo Safety Net */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          The Solo Safety Net: Do You Have a Runway?
        </h2>
        <p style={{ marginBottom: '24px' }}>
          Before you start, answer this truthfully:
        </p>
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#1B5E20' }}>Option A: You Have 3+ Months Savings</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
              Commit 90 days full-time to Days 1–60. You need to sell fast (Days 1–30) and deliver flawlessly (Days 31–60). Half-time won't work.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#E65100' }}>Option B: You Don't Have Savings</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#E65100' }}>
              Keep your part-time job. Run this in your evenings and weekends. Expect: 120 days, not 90. The timeline is the same; you're just slower.
            </p>
          </div>
          <div style={{ backgroundColor: '#FCE4EC', borderLeft: '4px solid #C2185B', padding: '16px', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#880E4F' }}>Option C: You MUST Quit Your Job (High Risk)</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#C2185B' }}>
              Only if: (1) you have 6+ months savings, (2) you have <strong>already validated</strong> the idea with customers, and (3) you can live on £500/month. Even then: risk.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '600' }}>Budget Planning:</p>
          <ul style={{ paddingLeft: '24px', margin: '0', fontSize: '14px' }}>
            <li style={{ marginBottom: '6px' }}>Carrd website: £39/year</li>
            <li style={{ marginBottom: '6px' }}>Domain name (if you want one): £10/year</li>
            <li style={{ marginBottom: '6px' }}>Stripe fees (2.9% + £0.30 per transaction): eat this from profit</li>
            <li>Everything else: free</li>
          </ul>
          <p style={{ margin: '12px 0 0 0', fontStyle: 'italic', color: '#636E72' }}>
            Total out-of-pocket cost for 90 days: £49–100. Your runway isn't about startup costs. It's about your living expenses.
          </p>
        </div>
      </section>

      {/* The Next 90 Days */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Days 91–365: What Comes After
        </h2>
        <p style={{ marginBottom: '24px' }}>
          If you pass Day 90 with revenue, a template, and a system, here's your next move:
        </p>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>Growth Path (£1K–£10K/Month)</h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Optimize your sales: find more customers using the outreach method that worked (LinkedIn? Cold email? Referrals?). Raise prices 20%. Invest in a website (Day 91+). Build an email list from customers.
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>Efficiency Path (£500–£2K/Month, 10 Hours/Week)</h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Automate the 2-hour tasks from your template. Delegate 1 task to a freelancer (costs £200/project, saves 5 hours). Transform service delivery into a semi-passive system.
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>Product Path (SaaS or Digital Product)</h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Take your manual template and productize it: bundle into a course, create an app, or sell it as a template. This unlocks £10K+/month (but requires Day 91+).
            </p>
          </div>
          <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>Audience Path (Content / Affiliate)</h3>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Now that you have revenue and proof, start writing: case studies, guides, tutorials. Build an email list. Monetize via affiliates or sponsorships. (This is the long game, but by Day 91 you have proof to back it up.)
            </p>
          </div>
        </div>
      </section>

      {/* Your Day 1 Action */}
      <section style={{ marginBottom: '64px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '24px' }}>
          Your Day 1 Action
        </h2>
        <p style={{ marginBottom: '20px', fontSize: '16px' }}>
          Don't read more. Start here:
        </p>
        <ol style={{ paddingLeft: '24px', marginBottom: '0' }}>
          <li style={{ marginBottom: '12px', fontSize: '15px' }}>
            <strong>Go to <Link href="/offer/from-scratch" style={{ color: '#00B894', textDecoration: 'none' }}>/offer/from-scratch</Link></strong> and fill out the Cobblestone Method. 30 minutes. You'll have: problem, offer, price.
          </li>
          <li style={{ marginBottom: '12px', fontSize: '15px' }}>
            <strong>Write your 3-sentence pitch.</strong> "I help [person] solve [problem] by doing [thing]. It costs £X and takes Y weeks." Post it where you'll see it daily.
          </li>
          <li style={{ marginBottom: '12px', fontSize: '15px' }}>
            <strong>Open a spreadsheet.</strong> Title: "20 Outreach Targets." List 20 people in your network or market you could contact. Name, why they're a fit, how to reach them.
          </li>
          <li style={{ marginBottom: '12px', fontSize: '15px' }}>
            <strong>Send 1 message today.</strong> "Hey [name], I'm starting a solo business helping [people] with [problem]. Do you know anyone who struggles with [specific pain]? I'd love to chat for 15 minutes."
          </li>
          <li style={{ marginBottom: '0', fontSize: '15px' }}>
            <strong>Go to <Link href="/marketing/first-customers" style={{ color: '#00B894', textDecoration: 'none' }}>/marketing/first-customers</Link></strong> and study the full outreach playbook. You'll need it for the next 29 days.
          </li>
        </ol>
      </section>

      {/* Closing */}
      <section style={{ marginBottom: '32px', backgroundColor: '#F5F5F5', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>
          The 90-Day Truth
        </h2>
        <p style={{ fontSize: '16px', color: '#636E72', lineHeight: '1.8', margin: '0' }}>
          Most solopreneurs fail between Day 31 and Day 90 because they confuse motion with progress. You'll know the truth on Day 30: will someone pay you? If yes, you manage delivery. If no, you pivot. This is not cruel. This is honest. By Day 90, you'll either have a machine that generates revenue, or you'll have eliminated the uncertainty and moved on to the next idea. <strong>Both outcomes are wins.</strong>
        </p>
      </section>
    </div>
  );
}
