'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function DigitalProductsPage() {
  const trafficMathComparison = [
    {
      model: 'Consulting',
      price: '£2,000',
      monthlySales: '2',
      trafficNeeded: '20 emails',
      acquisitionMethod: 'Cold outreach (hours of labor)',
      soloViable: '✅ YES',
    },
    {
      model: 'Freelancing',
      price: '£1,200',
      monthlySales: '4',
      trafficNeeded: '10 proposals',
      acquisitionMethod: 'Network leverage (hours)',
      soloViable: '✅ YES',
    },
    {
      model: 'Digital Product',
      price: '£47',
      monthlySales: '85',
      trafficNeeded: '4,250 visitors',
      acquisitionMethod: 'Audience (paid ads or followers)',
      soloViable: '❌ NO (without distribution)',
    },
    {
      model: 'Digital Product',
      price: '£197',
      monthlySales: '20',
      trafficNeeded: '1,000 visitors',
      acquisitionMethod: 'Audience (email or social)',
      soloViable: '⚠️ MAYBE',
    },
  ];

  const entryPoints = [
    {
      path: 'Path A: The Pre-Sell (Validation-First)',
      overview: 'Sell the live version before building the recorded one',
      mechanism: 'Launch cohort-based course: "£200 for 6-week live program, starting next month"',
      prerequisite: '500+ warm connections OR 1,000 email subscribers',
      validation: 'If <10 sales: Kill it. If 10+ sales: Build it, deliver it, package as product',
      timeline: '2 weeks for pre-sell, 6 weeks for delivery, 4 weeks to productize = 12 weeks total',
      soloFit: 'High: You validate before building. Zero waste.',
      monthlyRevenue: 'Live: 10 × £200 = £2,000. Recorded: 0 (reinvestment phase).',
    },
    {
      path: 'Path B: The Audience-First (Distribution-First)',
      overview: 'Own the distribution before creating the product',
      mechanism: 'Spend 90 days building newsletter or Twitter following. Content is the job; product is monetization.',
      prerequisite: '3+ months runway (savings, part-time work, or side income)',
      validation: 'Build audience to 1,000+ engaged email subs or 5,000+ Twitter followers',
      timeline: '90 days of content creation → 30 days to build product → 30 days to launch',
      soloFit: 'Medium: Requires discipline to not monetize too early.',
      monthlyRevenue: '1,000 subs × 2% conversion × £47 = £940–£2,000 (varies)',
    },
    {
      path: 'Path C: The Services Bridge (Extraction Method)',
      overview: 'Extract templates from service work, then productize',
      mechanism: 'Deliver 5+ £1,200 consulting projects → Document → Sell £197 DIY template',
      prerequisite: '£6,000+ in service revenue (5 projects) and a documented process',
      validation: 'Existing customers ask "Can I do this myself?" → Productize',
      timeline: '6 months (service projects) → 4 weeks (productize) = ~7 months',
      soloFit: 'High: You already have validation and customer base.',
      monthlyRevenue: 'Services: £6,000 (while working). Product: 10–20 sales = £1,970–£3,940/month (passive)',
    },
  ];

  const supportBurdenBreakdown = [
    {
      productPrice: '£47',
      trafficForSurvival: '4,250 visitors/month (to get 85 sales)',
      estimatedCustomers: '100/month',
      supportEmails: '5–15 per week',
      timePerWeek: '1–2 hours',
      chargebackRate: '1–2%',
      effectiveRate: '£47 / (time spent + support) = £15–£20/hour (worse than minimum wage)',
      soloViability: '❌ Unsustainable',
    },
    {
      productPrice: '£197',
      trafficForSurvival: '1,000 visitors/month (to get 20 sales)',
      estimatedCustomers: '20/month',
      supportEmails: '2–5 per week (much less)',
      timePerWeek: '0.5–1 hour',
      chargebackRate: '0.5–1%',
      effectiveRate: '£197 × 20 = £3,940/month ÷ 30 hours work = £131/hour effective',
      soloViability: '✅ Manageable',
    },
    {
      productPrice: '£497',
      trafficForSurvival: '500 visitors/month (to get 10 sales)',
      estimatedCustomers: '10/month',
      supportEmails: '1–3 per week',
      timePerWeek: '0.5 hour',
      chargebackRate: '<0.5%',
      effectiveRate: '£497 × 10 = £4,970/month ÷ 20 hours work = £248/hour effective',
      soloViability: '✅ Very viable',
    },
  ];

  const dontStartChecklist = [
    'You have <1,000 email subscribers',
    'You need revenue in <60 days',
    'You have no "in-demand" problem to solve (no audience pain to address)',
    'You plan to price under £197',
    'You hate writing marketing copy (this is 80% of the work, not product quality)',
    'You expect revenue without either audience or paid ad budget (£1,000+ minimum)',
  ];

  const startIfChecklist = [
    'You have 3+ months runway (savings, part-time income, or spouse income)',
    'You have 1,000+ engaged email subscribers OR 5,000+ Twitter followers',
    'You have extracted templates from 5+ consulting engagements (Path C)',
    'You enjoy marketing/writing more than product delivery (honest assessment)',
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '48px', textAlign: 'center' }}>
        <Breadcrumbs
          items={[
            { label: 'Start Solo', href: '/start' },
            { label: 'Business Models', href: '/start/business-models' },
            { label: 'Digital Products' },
          ]}
        />
        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          Digital Products: The Distribution-First Model
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6' }}>
          Digital products are the only business model where revenue can detach from hours. But they require distribution infrastructure that services do not. A solo founder can get revenue from 10 cold emails. A £47 template requires 1,000+ warm leads or 10,000 cold ones.
        </p>
        <p style={{ fontSize: '16px', color: '#C62828', fontWeight: '600' }}>
          Do not start here. Build the distribution first.
        </p>
      </section>

      {/* Section 1: The Traffic Math */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: The Traffic Math — Why £47 Products Kill Solo Solos
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The fundamental difference: Services can brute-force revenue via labor. Digital products require capital—either social capital (audience) or financial capital (ad spend).
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Solo Founder Math:</h3>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Model</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Price</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Monthly Sales</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Traffic Needed</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Method</th>
              </tr>
            </thead>
            <tbody>
              {trafficMathComparison.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '12px', color: '#2D3436', fontWeight: '500' }}>{row.model}</td>
                  <td style={{ padding: '12px', color: '#636E72' }}>{row.price}</td>
                  <td style={{ padding: '12px', color: '#636E72' }}>{row.monthlySales}</td>
                  <td style={{ padding: '12px', color: '#636E72' }}>{row.trafficNeeded}</td>
                  <td style={{ padding: '12px', color: '#636E72', fontSize: '12px' }}>{row.acquisitionMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>Breaking Down the £47 Product Math:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Survival Revenue: £4,000/month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>Minimum income needed (not thriving, surviving)</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Sales Needed: 85 per month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>£4,000 ÷ £47 = 85.1 sales/month</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Conversion Rate: 2% (warm traffic)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>Realistic for email list or engaged social followers</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Traffic Needed: 4,250 visitors/month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>85 ÷ 0.02 = 4,250 people who see your product</p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              How to Get 4,250 Visitors (Realistic Options):
            </p>
            <ul style={{ margin: '0', fontSize: '13px', color: '#636E72', paddingLeft: '20px' }}>
              <li><strong>Google SEO:</strong> 12+ months to rank (no revenue until then)</li>
              <li><strong>Paid Ads:</strong> £2,000/month budget (80% of your profit margin)</li>
              <li><strong>Social Following:</strong> 10,000+ followers (takes 6+ months to build organically)</li>
              <li><strong>Email List:</strong> 7,000+ engaged subscribers (takes 3–6 months to build)</li>
            </ul>
          </div>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '20px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            The Critical Distinction:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            Consulting revenue = 20 hours of cold email work. Digital product revenue = 4,250 visitors (which requires either assets you built earlier or money you don't have). Pick your constraint.
          </p>
        </div>
      </section>

      {/* Section 2: The Three Entry Points */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Three Valid Entry Points — Only One Will Work for You
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Digital products are not entry points. But there are three valid paths to enter this model. Identify which one fits your situation.
        </p>

        {entryPoints.map((point, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', border: '2px solid #E2E8F0', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', margin: '0 0 16px 0' }}>
              {point.path}
            </h3>

            <div style={{ display: 'grid', gap: '12px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Overview
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.overview}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  The Mechanism
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.mechanism}</p>
              </div>

              <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#E65100', textTransform: 'uppercase' }}>
                  Prerequisite (Non-Negotiable)
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436', fontWeight: '600' }}>{point.prerequisite}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Validation
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.validation}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Timeline
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.timeline}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Solo Fit
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.soloFit}</p>
              </div>

              <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#1565C0', textTransform: 'uppercase' }}>
                  Monthly Revenue (First 6 Months)
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{point.monthlyRevenue}</p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: '#F5F5F5', borderLeft: '4px solid #636E72', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#2D3436' }}>
            The Model Marker:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
            Digital products are Tier 3 of the ladder (see <Link href="/offer/scale-without-hiring" style={{ color: '#1565C0', textDecoration: 'underline' }}>Scaling Without Hiring</Link>), not an entry point. You must have either validation (pre-sold), distribution (audience), or extraction (templates from paying clients).
          </p>
        </div>
      </section>

      {/* Section 3: The Support Burden */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The Support Burden — The "Passive" Lie Exposed
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Every product sold creates support overhead. The lower your price, the harder you work for each pound.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Price</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Traffic for Survival</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Customers/Month</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Support Burden</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Effective Rate</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Viable Solo?</th>
              </tr>
            </thead>
            <tbody>
              {supportBurdenBreakdown.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '10px', fontWeight: '600', color: '#2D3436' }}>{row.productPrice}</td>
                  <td style={{ padding: '10px', color: '#636E72' }}>{row.trafficForSurvival}</td>
                  <td style={{ padding: '10px', color: '#636E72' }}>{row.estimatedCustomers}</td>
                  <td style={{ padding: '10px', color: '#636E72', fontSize: '11px' }}>{row.supportEmails}</td>
                  <td style={{ padding: '10px', fontWeight: '600', color: idx === 0 ? '#C62828' : '#2E7D32' }}>
                    {row.effectiveRate}
                  </td>
                  <td style={{ padding: '10px', fontWeight: '600', color: idx === 0 ? '#C62828' : '#2E7D32' }}>
                    {row.soloViability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Hidden Costs:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Platform Fees: 3–10%
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Gumroad (10%) + Stripe (2.9% + £0.30) + Processing = Real cost is 13–15% of sale
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Chargebacks: 1–2% (higher for digital goods)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Every 50th customer disputes the charge. You lose the product + the fee.
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Update Cycle: Every 3–6 months
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Broken links, platform updates, new tools, outdated information. You fixthis, or customers refund.
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#2D3436', fontSize: '14px' }}>
              Refund Requests: 3–5% churn
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              "Not what I expected" + "I changed my mind" = 3–5 refunds per 100 sales
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            The £47 Trap:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
            If you spend 1 hour/day on support for a £47 product (5 support emails/day × 10 minutes each), you've earned £47 ÷ 20 hours = £2.35/hour. Same as a warehouse job, minus the benefits and the consistency.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px', marginTop: '24px' }}>The GBP Floor Rule:</h3>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.8' }}>
            <strong>Solo founders should not sell digital products under £197.</strong> The support-to-revenue ratio becomes unsustainable below this price point. If you want to sell £47 products, you need 100+ sales/month (which requires a marketing machine), or you need to accept that this is a job, not passive income.
          </p>
        </div>
      </section>

      {/* Section 4: The Platform Risk */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: The Platform Risk — Rented Land Is Not Your Land
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          You do not own your customer relationships on Gumroad, Teachable, or Etsy. One algorithm change buries your product. One policy violation kills your business overnight.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Real Risks:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Algorithm Changes
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Gumroad visibility dropped 40% in 2024. Teachable raised fees. Etsy algorithm buried templates overnight.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Fee Increases
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Gumroad recently increased fees from 3% to 10%. Your margin just got cut.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Account Bans
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Accidental policy violation (e.g., "educational content" vs "medical advice" gray area) = account suspended, all customers gone.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Zero Visibility Leverage
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              You cannot negotiate. You cannot appeal. You cannot control your discoverability.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Solo Mitigation Strategy:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1565C0', fontSize: '14px' }}>
              Own Your Email List
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Use Kajabi, ConvertKit, or Substack (not just Gumroad followers). Email is the only customer relationship you own.
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1565C0', fontSize: '14px' }}>
              Host Files on Your Own Domain
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Use S3, Cloudflare, or Dropbox (not just platform downloads). If Gumroad dies, you can redirect customers.
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1565C0', fontSize: '14px' }}>
              Diversify Payment Processors
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Use Stripe direct + Gumroad (not just platform checkout). Multiple sources = multiple revenue streams.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            <strong>Rule of Three:</strong> Distribute your product across 3+ channels (email, Gumroad, Stripe). Never rely on a single platform for customer relationships.
          </p>
        </div>
      </section>

      {/* Section 5: The Checklist */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 5: The "Digital Product Trap" Checklist — Be Honest
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Digital products are seductive because they promise passive income. They are also the fastest way to waste 3 months and earn £0. Before you build, be honest.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>❌ Do NOT Choose This Model If:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '32px' }}>
          {dontStartChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
              <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>☐ {item}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '8px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            If any box is checked:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
            Start with <Link href="/start/business-models/consulting" style={{ color: '#C62828', textDecoration: 'underline' }}>consulting</Link> or <Link href="/start/business-models/freelancing" style={{ color: '#C62828', textDecoration: 'underline' }}>freelancing</Link> instead. Build the distribution or the capital, then return to digital products.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>✅ Choose This Model If:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '32px' }}>
          {startIfChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
              <p style={{ margin: '0', fontSize: '14px', color: '#1B5E20' }}>☑ {item}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            If all (or most) boxes are checked:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            You are ready. Pick your entry point (Pre-Sell, Audience-First, or Services Bridge). Focus on distribution before product. Price at £197 minimum. Build with your email list as the primary channel.
          </p>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step — Build the Distribution First
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Digital products are not entry points—they are escape hatches from services. You want passive income? Great. Earn it by building the distribution first (3 months of content + 1,000 email subs), or by selling the live version before the recorded one (pre-sell validation).
        </p>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Building the asset in silence is gambling, not business. The difference between a £0-revenue product and a £4,000/month product is not the product—it is the distribution.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Link
            href="/marketing/lead-flow"
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
            Build Your Audience
          </Link>
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6', textAlign: 'center' }}>
          One proven strategy every Tuesday — so you can build profitable digital products without the "build it and hope" trap.
        </p>
        <NewsletterCTA />
      </section>
    </div>
  );
}
