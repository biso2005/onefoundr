'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function FreelancingPage() {
  const rateFloor = [
    { deliverable: 'Logo / Brand Identity', minimum: '£800–£1,500' },
    { deliverable: 'Website (5-10 pages)', minimum: '£2,400–£4,000' },
    { deliverable: 'Email Sequence (5-10 emails)', minimum: '£950–£1,500' },
    { deliverable: 'Landing Page (1-page)', minimum: '£1,200–£1,800' },
    { deliverable: 'Social Content (1 month)', minimum: '£1,000–£1,500' },
    { deliverable: 'Copywriting (article/page)', minimum: '£600–£950' },
    { deliverable: 'Design Package (3 mockups)', minimum: '£1,200–£2,000' },
    { deliverable: 'Video Editing (under 10 min)', minimum: '£800–£1,200' },
  ];

  const assetChecklist = [
    'Can I create a reusable template from 70%+ of this project?',
    'Will I deliver client-specific assets AND template components?',
    'Can I document my process so the next client goes 30% faster?',
    'Does this project teach me something I can package later?',
    'Am I building a portfolio piece OR extracting IP? (Both ideally)',
  ];

  const trapExamples = [
    {
      trap: 'Accepting projects under £800',
      cost: 'Even if it only takes 4 hours, you have zero margin for scope creep. One change request destroys your profitability.',
    },
    {
      trap: 'Hourly or Time-Based Billing',
      cost: 'Clients reward slowness (more billable hours). You are incentivized to work slowly. A solo founder needs flat fees only.',
    },
    {
      trap: 'Custom work without extracting templates',
      cost:
        'You complete a £2,000 website. Client is happy. You move to the next £2,000 website (zero leverage). You are now an employee earning employee rates.',
    },
    {
      trap: 'Platform dependence (Upwork, Fiverr, Freelancer)',
      cost:
        'Platforms take 20–30% cut. Updates kill your visibility. You compete on price not quality. Two years of Upwork work = zero business assets.',
    },
    {
      trap: 'Free work for "exposure" or portfolio',
      cost:
        'A solo founder has finite time. One unpaid project = one less paid project. Two days of free work = £400 lost revenue. Never acceptable.',
    },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '48px', textAlign: 'center' }}>
        <Breadcrumbs
          items={[
            { label: 'Start Solo', href: '/start' },
            { label: 'Business Models', href: '/start/business-models' },
            { label: 'Freelancing' },
          ]}
        />
        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          Freelancing: The Asset Extraction Game (Not a Career)
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6' }}>
          Freelancing is not a business model. It is a liquidity event. You trade output for cash right now. The only way it becomes a business is if you extract intellectual property (templates, processes, frameworks) from every project. Otherwise, you are a temp with a Stripe account.
        </p>
        <p style={{ fontSize: '16px', color: '#E65100', fontWeight: '600', marginBottom: '0' }}>
          Do not plan to freelance forever. The ceiling is £4k–£6k/month (output-bound). The exit is month 6, when you productize.
        </p>
      </section>

      {/* Section 1: Consulting vs Freelancing */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: Consulting vs Freelancing — Brain vs Hands
        </h2>
        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          These are fundamentally different sales propositions. Mixing them kills pricing.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>Consulting (Advisory)</h3>
            <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', lineHeight: '1.8' }}>
              <li>You sell: <strong>Decisions, strategy, advice</strong></li>
              <li>Delivery: Remote call, email recommendations</li>
              <li>Pricing: Daily rate (£800–£1,500/day)</li>
              <li>Scaling: Same hours, higher rates (expertise compounds value)</li>
              <li>Exit: Productize into courses or frameworks</li>
              <li style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #90CAF9', fontStyle: 'italic' }}>
                <strong>Read:</strong> <Link href="/start/business-models/consulting" style={{ color: '#1565C0', textDecoration: 'underline' }}>Solo Consulting Guide</Link>
              </li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#E65100', margin: '0 0 12px 0' }}>Freelancing (Production)</h3>
            <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', lineHeight: '1.8' }}>
              <li>You sell: <strong>Deliverables, output, work</strong></li>
              <li>Delivery: Website, design, copy, video, code</li>
              <li>Pricing: Project fees (£800–£3,000+ per project)</li>
              <li>Scaling: Same hours, same output (trapped by time)</li>
              <li>Exit: Productize into templates and services</li>
              <li style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #FFE0B2', fontStyle: 'italic' }}>
                <strong>You are here:</strong> This guide is your map.
              </li>
            </ul>
          </div>
        </div>

        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #636E72' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#2D3436' }}>
            The Hybrid Reality:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#636E72', lineHeight: '1.6' }}>
            Most solos do both. A web designer might consult on strategy (1 day at £1,000) then execute the design (1 week freelance at £2,400). The problem: If you mix pricing, you will undercharge for both. Keep them separate. Separate proposals. Separate conversations.
          </p>
        </div>
      </section>

      {/* Section 2: The Commodification Floor */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Commodification Floor — Why £50/Hour Kills You
        </h2>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#C62828' }}>
            <strong>Rule #1: Never use hourly billing as a freelancer.</strong> It is the fastest path to poverty. Flat project fees only.
          </p>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Math:</h3>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>Upwork Global Rate: £15/hour</p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>A designer in India or Pakistan accepts the platform rate. You cannot compete.</p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>UK Solo Living Minimum: £50/hour</p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>Rent, tax, NI, software, insurance. You need at least £50 to break even (40 hrs/week = £2,000 after tax).</p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>Expert Solo Rate: £100–£150/hour (project fees)</p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>If your rate is under £100/hr (on a project), you are competing on price. You will lose.</p>
          </div>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The "Package or Perish" Rule:</h3>

        <div style={{ backgroundColor: '#E8F5E9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #2E7D32', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            Never quote hourly. Always quote flat project fees.
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            If a client asks "How much per hour?", respond: "I don't work hourly. For this project, the fee is £X." If they push back, they are not your client.
          </p>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The GBP Floor:</h3>

        <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '16px' }}>
          Never accept a freelance project under <strong>£800</strong> (one week of living expenses). Even if it "only takes 5 hours," build in margin for scope creep and revision.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Deliverable</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Minimum Fee</th>
              </tr>
            </thead>
            <tbody>
              {rateFloor.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '12px', color: '#2D3436', fontWeight: '500' }}>{item.deliverable}</td>
                  <td style={{ padding: '12px', color: '#2E7D32', fontWeight: '600' }}>{item.minimum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#E65100' }}>
            <strong>If the project pays less than one week of runway (£800), it must take under 4 hours, or you reject it.</strong> No exceptions. Your time is your constraint. Protect it.
          </p>
        </div>
      </section>

      {/* Section 3: Asset Extraction Protocol */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The Asset Extraction Protocol — Why Templates Matter
        </h2>

        <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '24px', borderLeft: '4px solid #1565C0' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1565C0' }}>
            The First Principle: Every freelance project must generate two assets:
          </p>
          <ol style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', color: '#0D47A1' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>The Portfolio Piece</strong> — Proof of credibility for the next sale
            </li>
            <li>
              <strong>The Template/IP</strong> — A reusable framework that reduces future delivery time by 30–50%
            </li>
          </ol>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>Before You Say Yes:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          {assetChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
              <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>✓ {item}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '24px', fontStyle: 'italic' }}>
          If you cannot say "yes" to at least 3 of these 5 questions, decline the project.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>The Solo Extraction Method:</h3>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>Before accepting:</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Ask yourself: "Can I turn 70%+ of this bespoke request into a templated deliverable?"
            </p>
          </div>

          <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>During delivery:</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Build two versions: the custom deliverable (what the client sees) and the template (what you keep). Document client variations—these might apply to future clients.
            </p>
          </div>

          <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>After delivery:</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
              Strip client-specific details from your work. Save the skeleton. Turn it into a template. Later: productize (sell the template at £200 or offer a "Done-With-You" service at £800).
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>Real Example:</h3>

        <div style={{ backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#2D3436' }}>
            Client project: Custom Wix website for a restaurant (£1,200)
          </p>
          <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '13px', color: '#636E72', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '6px' }}>
              <strong>Custom deliverable:</strong> Beautiful restaurant website with menu, reservation system, photos
            </li>
            <li style={{ marginBottom: '6px' }}>
              <strong>Template extraction:</strong> "Wix Setup for Restaurants" — pre-built sections (menu, hours, reservation button, staff photos, testimonials)
            </li>
            <li style={{ marginBottom: '6px' }}>
              <strong>Month 3 productization:</strong> Sell "Wix Website Template for Restaurants" (£197 one-time) or "Done-With-You Restaurant Website" (£600 + your setup time)
            </li>
            <li>
              <strong>By month 6:</strong> You have created a product. You are no longer a freelancer.
            </li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#1B5E20' }}>
            <strong>The Checkpoint:</strong> If you complete 3 freelance projects and have zero reusable templates, you are not freelancing—you are temping. You must extract IP or the model fails.
          </p>
        </div>
      </section>

      {/* Section 4: Rate Engineering */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: Project Pricing Engineering — The Math
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Unlike consulting (day rates), freelancing uses project pricing. The formula is simple but brutal.
        </p>

        <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>The Calculation:</h4>
          <ol style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#0D47A1', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '8px' }}>Estimate true hours (be honest, include research)</li>
            <li style={{ marginBottom: '8px' }}>Add 50% buffer (scope creep is inevitable)</li>
            <li style={{ marginBottom: '8px' }}>Multiply by target hourly rate (£100 minimum for experts)</li>
            <li style={{ marginBottom: '8px' }}>Compare to "strategic value" (what does this enable for their business?)</li>
            <li>Charge the <strong>higher</strong> number</li>
          </ol>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '16px' }}>Examples:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          {[
            { project: '5-page website', calcEstimate: '40 hours', calcBuffer: '+50% = 60 hours', calcRate: '× £100 = £6,000', actualCharge: '£2,400–£3,000 (not £800)' },
            { project: 'Email sequence (10 emails)', calcEstimate: '8 hours', calcBuffer: '+50% = 12 hours', calcRate: '× £100 = £1,200', actualCharge: '£950–£1,500 (not £400)' },
            { project: 'Brand identity package', calcEstimate: '30 hours', calcBuffer: '+50% = 45 hours', calcRate: '× £100 = £4,500', actualCharge: '£3,500–£4,500 (not £1,200)' },
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
              <p style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#2D3436' }}>{item.project}</p>
              <p style={{ margin: '0 0 2px 0', fontSize: '12px', color: '#636E72' }}>Estimate: {item.calcEstimate}</p>
              <p style={{ margin: '0 0 2px 0', fontSize: '12px', color: '#636E72' }}>Buffer: {item.calcBuffer}</p>
              <p style={{ margin: '0 0 6px 0', fontSize: '12px', color: '#636E72' }}>Rate: {item.calcRate}</p>
              <p style={{ margin: '0', fontSize: '13px', fontWeight: '600', color: '#C62828' }}>Charge: {item.actualCharge}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            Common Mistake: "That seems high. Let me quote lower to win the project."
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
            <strong>Do not do this.</strong> Low quotes attract price shoppers. They will ask for more revisions, longer timelines, scope creep. You will deliver at a loss. Lose the project instead. Better clients will come.
          </p>
        </div>
      </section>

      {/* Section 5: The 6-Month Pivot */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 5: The 6-Month Pivot — Exit Strategy to Productization
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Freelancing is temporary. Here is the timeline to escape the output ceiling:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {[
            {
              phase: 'Month 1–2: The Extraction Phase',
              actions: [
                'Accept 3–4 bespoke projects (£800–£3,000 each)',
                'Document every pain point in your delivery',
                'Build 1 template from each project',
                'Calculate how much time each template saves on next iteration',
              ],
            },
            {
              phase: 'Month 3: The Pivot',
              actions: [
                'Stop accepting bespoke projects under £3,000',
                'Launch your first productized offer (e.g., "5-Page Wix Website Template": £197)',
                'Offer a "Done-With-You" service (template + your setup: £600–£1,200)',
                'Measure: Did templating reduce delivery time by 30%+?',
              ],
            },
            {
              phase: 'Month 4–6: The Scale',
              actions: [
                'Repeat the template for 3+ clients (measure faster delivery)',
                'Convert top 2–3 templates into productized offers',
                'Start selling "Done-For-You" white-label version (higher margin)',
                'Begin the transition to /offer/from-scratch (Cobblestone Method)',
              ],
            },
            {
              phase: 'Month 6+: The White Glove Filter',
              actions: [
                'Freelancing becomes "Premium Tier Only" (£5,000+ bespoke projects, rare)',
                'Everything else is templated or productized (£197–£1,200)',
                'Hire: Consider white-label freelancers to deliver templates (you manage)',
                'You shift to CEO role: Selling, templating, scaling—not executing',
              ],
            },
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', border: '2px solid #E2E8F0', padding: '16px', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>{item.phase}</h4>
              <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#636E72', lineHeight: '1.8' }}>
                {item.actions.map((action, i) => (
                  <li key={i} style={{ marginBottom: i === item.actions.length - 1 ? '0' : '8px' }}>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* The Traps */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Freelancing Traps — What Kills Solos
        </h2>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          {trapExamples.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '6px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#C62828', fontWeight: '700' }}>
                Trap: {item.trap}
              </p>
              <p style={{ margin: '0', fontSize: '13px', color: '#B71C1C' }}>
                Cost: {item.cost}
              </p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #F57C00', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#E65100', lineHeight: '1.6' }}>
            <strong>The Therapist Warning:</strong> "Freelancing feels safe because you are 'building a portfolio.' But after 6 months of £1,200 websites, you have £7,200 and a skill, but no machine. You are still trading time for money. Productize the skill or remain an employee of your clients forever."
          </p>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step — Choose Your Exit
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Freelancing gets you to £2k–£4k/month fast. But the ceiling is real: You cannot bill more hours than exist in a week. By month 6, you must productize or accept that you have built a job, not a business.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Link
            href="/start/business-models"
            style={{
              padding: '16px',
              backgroundColor: '#FFF',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#1565C0',
              fontWeight: '600',
              textAlign: 'center',
              border: '2px solid #1565C0',
            }}
          >
            Back to Business Models
          </Link>
          <Link
            href="/offer/from-scratch"
            style={{
              padding: '16px',
              backgroundColor: '#1565C0',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#FFF',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Go to Productization
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6', textAlign: 'center' }}>
          One proven strategy every Tuesday — so you can build a real business instead of renting your time.
        </p>
        <NewsletterCTA />
      </section>
    </div>
  );
}
