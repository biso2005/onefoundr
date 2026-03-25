'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function SaaSSoftwarePage() {
  const timeAllocationComparison = [
    {
      phase: 'Month 1–3 (Build Phase)',
      development: '40 hrs/week',
      supportAndBugs: '0',
      salesAndMarketing: '0',
      revenueGenerated: '£0',
      reality: 'Burning savings with zero runway visibility',
    },
    {
      phase: 'Month 4 (Launch)',
      development: '30 hrs/week',
      supportAndBugs: '5 hrs/week (early bugs)',
      salesAndMarketing: '5 hrs/week',
      revenueGenerated: '£100/month (2 customers)',
      reality: '35 hours of work generating £25/hour',
    },
    {
      phase: 'Month 5–6 (Support Hell)',
      development: '20 hrs/week',
      supportAndBugs: '15 hrs/week (feature requests, outages)',
      salesAndMarketing: '5 hrs/week',
      revenueGenerated: '£200–500/month',
      reality: '40 hours of work yet still underpaid relative to consulting',
    },
  ];

  const conciergeBuildSteps = [
    {
      step: 'Step 1: The Manual Service (Week 1–8)',
      description: 'Sell the outcome before building the app',
      mechanism:
        'Example: "I will generate your monthly VAT reports manually from your Shopify data for £500/month"',
      workRequired: 'You spend 40 hours/month on manual work (data pulls, calculations, formatting)',
      clientExperience: 'They get a polished PDF report every month. They do not see the Excel sheets or the pain.',
      revenue: '£500/month (immediate, no code)',
    },
    {
      step: 'Step 2: The Pain Identification (Week 9–16)',
      description: 'Discover what to automate',
      mechanism:
        'After 3 months of manual delivery, you identify: "I spend 10 hours just pulling data from Shopify API. The rest is formatting."',
      workRequired: 'Analyze your own workflow. Which 5 hours are most painful? Which 5 hours create the most value?',
      clientExperience: 'No change. They still get the same report.',
      revenue: '£500/month (unchanged)',
    },
    {
      step: 'Step 3: The Micro-Automation (Month 7+)',
      description: 'Code only the intersection of pain and value',
      mechanism:
        'Build a Python script (not a SaaS) that pulls Shopify data, formats into your template, and emails the PDF. You still do the VAT math (the value-add), the script does the copying.',
      workRequired: 'Week 1: 20 hours to code the script. Week 2+: 2 hours/month to monitor.',
      clientExperience: 'Report arrives more reliably. Still a PDF they open monthly.',
      revenue: '£500/month (unchanged) but now you work 2 hrs/month instead of 40',
    },
  ];

  const maintenanceBurdenTable = [
    {
      title: 'Micro-SaaS Trap',
      price: '£9/month',
      targetRevenue: '£3,000/month',
      customersNeeded: '334 customers',
      monthlyChurn: '5–10%',
      newCustomersMonthly: '17–34 (just to maintain)',
      supportBurden: '3–4 tickets/day at 1% contact rate',
      effectiveRate: '£9–15/hour after support costs',
      viability: '❌ Unsustainable (support overhead = revenue)',
    },
    {
      title: 'Concierge → Micro-SaaS',
      price: '£500/month',
      targetRevenue: '£3,000/month',
      customersNeeded: '6 customers',
      monthlyChurn: '5–10% (still losing 1 customer/month)',
      newCustomersMonthly: '1–2 (manageable)',
      supportBurden: '2–3 support emails/month per customer',
      effectiveRate: '£125–200/hour (you only support 6 people, not 334)',
      viability: '✅ Viable (support scales with price)',
    },
  ];

  const b2bCharacteristics = [
    {
      title: '"PDF Invoice Generator for Polish Contractors"',
      singleFeature: 'Generate VAT-compliant invoices for Polish tax law (not global - too complex)',
      apiIntegration: 'Optional Stripe connect (for direct invoicing) or manual payment',
      userAccounts: 'Minimal (just email + password)',
      pricing: '£200/month (15 customers = £3,000)',
      soloFit: '✅ High (you are the expert on Polish tax)',
    },
    {
      title: '"Email Cleaner for Real Estate Agents"',
      singleFeature: 'Parse emails from rental inquiries, extract tenant info into a CSV',
      apiIntegration: 'Gmail API (only integration needed)',
      userAccounts: 'Gmail auth only (use Clerk)',
      pricing: '£250/month (12 customers = £3,000)',
      soloFit: '✅ High (you know real estate pain points)',
    },
    {
      title: '"Analytics Exporter for Shopify Stores"',
      singleFeature: 'Export Shopify analytics to Google Sheets weekly (no dashboard UI)',
      apiIntegration: 'Shopify API + Google Sheets API',
      userAccounts: 'Shopify + Google auth (use Supabase)',
      pricing: '£300/month (10 customers = £3,000)',
      soloFit: '✅ High (solves a specific workflow)',
    },
  ];

  const whatNotToBuild = [
    'Authentication system (use Clerk or Supabase Auth)',
    'Billing/payment processing (use Stripe or Lemonsqueezy)',
    'User dashboard with charts (too much UI; use email reports instead)',
    'Team management (stick to individual accounts)',
    'Mobile app (web only; use responsive design)',
    'Admin panel for content management (use Airtable as your backend)',
    'API for customers to build on (too much support burden)',
  ];

  const dontStartChecklist = [
    'You need revenue in <90 days',
    'You do not have 6 months of expenses saved (or a financial safety net)',
    'The problem is not already solved by you manually (if you wouldn\'t pay £200/month for this yourself, users won\'t either)',
    'You are not already a developer (no-code tools like Bubble/Flutterflow are not production-ready for SaaS)',
    'You hate waking up to server outages at 2am (monitoring anxiety is real)',
    'You have not sold the manual version first (you are betting on assumptions)',
  ];

  const doStartChecklist = [
    'You have manually done this 5+ times and cried from the repetition (validation via pain)',
    'You have an audience of 3,000+ Twitter followers or 1,000+ email subscribers (launch distribution)',
    'You can describe the app in one sentence: "It connects X to Y" or "It generates Z automatically"',
    'You have a £5,000 emergency fund for when Stripe holds payouts or a customer charges back',
    'You already have customers willing to pay £200+/month for the manual version (pre-sell validation)',
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '48px', textAlign: 'center' }}>
        <Breadcrumbs
          items={[
            { label: 'Start Solo', href: '/start' },
            { label: 'Business Models', href: '/start/business-models' },
            { label: 'SaaS / Software' },
          ]}
        />
        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          SaaS: The Expert Mode (Do Not Code First)
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6' }}>
          SaaS is the only business model where you pay to work. Before you've earned a pound, you are paying for servers, uptime, security updates, and customer support. For a solo founder, SaaS is a liability masquerading as an asset unless architected as "Micro-SaaS" with specific constraints.
        </p>
        <p style={{ fontSize: '16px', color: '#C62828', fontWeight: '600' }}>
          Build the manual version first. Get paid to learn the requirements. Then automate the painful parts.
        </p>
      </section>

      {/* Section 1: The Solo SaaS Math */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: The Solo SaaS Math — Why 6 Months of Coding = Death
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The standard advice: "Build a minimum viable product, launch it, iterate." This advice is for funded teams. For a solo founder with £0 savings, it is a roadmap to failure.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Standard SaaS Timeline (For Solos):</h3>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Timeline</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Dev Time</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Support</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Sales</th>
                <th style={{ padding: '10px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {timeAllocationComparison.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '10px', fontWeight: '600', color: '#2D3436' }}>{row.phase}</td>
                  <td style={{ padding: '10px', color: '#636E72' }}>{row.development}</td>
                  <td style={{ padding: '10px', color: '#636E72' }}>{row.supportAndBugs}</td>
                  <td style={{ padding: '10px', color: '#636E72' }}>{row.salesAndMarketing}</td>
                  <td style={{ padding: '10px', fontWeight: '600', color: row.revenueGenerated.includes('£0') ? '#C62828' : '#2E7D32' }}>
                    {row.revenueGenerated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '20px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            The Reality Check:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C', lineHeight: '1.6' }}>
            You coded for 6 months earning £0. By Month 7, your savings are gone. You panic. You take a consulting gig. Your SaaS—half-finished, half-supported, half-marketed—dies. You have earned £0 and spent 1,000 hours.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px', marginTop: '24px' }}>The Maintenance Problem:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Server Monitoring (24/7)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>Your app is down at 2am. You alone can fix it. Sleep is a luxury.</p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Security Updates (Continuous)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              A zero-day vulnerability drops. You patch within 2 hours or you are liable if customer data leaks.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Feature Creep (Constant)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Every customer asks "Can you just add...?" You say yes to keep them. You gain 100 hours of work.
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Onboarding Support (Unpredictable)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Half your customers cannot figure out the UI. You spend 2 hours explaining per customer. Time = gone.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            <strong>The Rule:</strong> Solo SaaS only works if you have 6 months runway AND no immediate revenue needs AND coding is your therapy, not your job. Nearly no solo founder fits this profile.
          </p>
        </div>
      </section>

      {/* Section 2: The Concierge-First Method */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Concierge-First Method — Service → Script → Software
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The alternative: Sell the manual version first. Get paid while you learn the requirements. Then automate only the parts that cause you pain.
        </p>

        {conciergeBuildSteps.map((step, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', border: '2px solid #E2E8F0', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 12px 0' }}>
              {step.step}
            </h3>

            <div style={{ display: 'grid', gap: '10px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Description
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{step.description}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  The Mechanism
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436', fontStyle: 'italic' }}>{step.mechanism}</p>
              </div>

              <div style={{ backgroundColor: '#E3F2FD', padding: '10px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#1565C0', textTransform: 'uppercase' }}>
                  Your Work
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{step.workRequired}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  What They See
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436' }}>{step.clientExperience}</p>
              </div>

              <div style={{ backgroundColor: '#E8F5E9', padding: '10px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#1B5E20', textTransform: 'uppercase' }}>
                  Revenue
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', fontWeight: '600' }}>{step.revenue}</p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: '#F5F5F5', borderLeft: '4px solid #636E72', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#2D3436' }}>
            The Solo Constraint:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#636E72' }}>
            You never build a "platform." You build a "script that saves you 10 hours." The customer never sees the complexity. They see a polished output.
          </p>
        </div>
      </section>

      {/* Section 3 & 4: B2B Price Floor & Maintenance */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The B2B Price Floor & Maintenance Tax
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          SaaS only works solo if you target B2B businesses, charge high, and keep customer count low. The alternative (B2C, low price, high volume) is a support death trap.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Comparison: Micro-SaaS Trap vs Concierge-First:</h3>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Model</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Price</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Customers for £3k</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Churn Impact</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Support Load</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Viable?</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceBurdenTable.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '8px', fontWeight: '600', color: '#2D3436' }}>{row.title}</td>
                  <td style={{ padding: '8px', color: '#636E72' }}>{row.price}</td>
                  <td style={{ padding: '8px', color: '#636E72' }}>{row.customersNeeded}</td>
                  <td style={{ padding: '8px', color: '#636E72', fontSize: '10px' }}>{row.newCustomersMonthly}</td>
                  <td style={{ padding: '8px', color: '#636E72', fontSize: '10px' }}>{row.supportBurden}</td>
                  <td style={{ padding: '8px', fontWeight: '600', color: idx === 0 ? '#C62828' : '#2E7D32' }}>
                    {row.viability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Real Cost of "Passive" Income:</h3>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1B5E20', fontSize: '14px' }}>
              Revenue: £3,000/month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2E7D32' }}>Concierge SaaS with 6 paying customers at £500 each</p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #F57C00' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#E65100', fontSize: '14px' }}>
              Tools Cost: £200–400/month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              Hosting (£40), Database (£50), Auth (£30), Email (£20), Monitoring (£30), Stripe fees (variable), Emergency buffer (£50+)
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1565C0', fontSize: '14px' }}>
              True Profit: £2,600/month
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>If you spend 20 hours on dev/support, that is £130/hour. Viable.</p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #1565C0' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#1565C0', fontSize: '14px' }}>
              Profitability Checkpoint
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              SaaS beats consulting only when you have &gt;20 customers or &gt;£5k MRR with &lt;10 hours/week maintenance. Until then, you are underpaid.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What NOT to Build */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4 & 5: What NOT to Build (Plus B2B Characteristics)
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The secret to solo SaaS viability: Do not build the platform. Build the automation layer.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>❌ What NOT to Build (Pay for These Instead):</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '32px' }}>
          {whatNotToBuild.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
              <p style={{ margin: '0', fontSize: '13px', color: '#B71C1C' }}>✗ {item}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>✅ Real B2B Micro-SaaS Examples:</h3>

        {b2bCharacteristics.map((example, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', border: '2px solid #E2E8F0', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#2D3436', margin: '0 0 12px 0' }}>
              {example.title}
            </h4>

            <div style={{ display: 'grid', gap: '10px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Single Feature
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>{example.singleFeature}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  API Integration
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>{example.apiIntegration}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  User Accounts
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>{example.userAccounts}</p>
              </div>

              <div style={{ backgroundColor: '#E8F5E9', padding: '10px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '600', color: '#1B5E20', textTransform: 'uppercase' }}>
                  Pricing & Math
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#2E7D32' }}>{example.pricing}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  Solo Fit
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>{example.soloFit}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 6: The Gate Checklist */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 6: The "Don't Code First" Gate — Honest Assessment
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          Before you code a single line, be brutally honest about your situation.
        </p>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>❌ Do NOT Choose SaaS If:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '32px' }}>
          {dontStartChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
              <p style={{ margin: '0', fontSize: '13px', color: '#B71C1C' }}>☐ {item}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '8px', marginBottom: '32px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            If any box is checked:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
            Start with <Link href="/start/business-models/consulting" style={{ color: '#C62828', textDecoration: 'underline' }}>consulting</Link> or <Link href="/start/business-models/freelancing" style={{ color: '#C62828', textDecoration: 'underline' }}>freelancing</Link> instead. Build capital and distribution. Return to SaaS when you have both.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>✅ Choose SaaS Only If:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '32px' }}>
          {doStartChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
              <p style={{ margin: '0', fontSize: '13px', color: '#1B5E20' }}>☑ {item}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            If all (or most) boxes are checked:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32' }}>
            You are ready. Use the Concierge-First method: Sell the manual version for £500/month, get 3–6 customers, document which 5 hours hurt the most, then code only that automation layer.
          </p>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step — Sell the Manual Version First
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          SaaS is not an entry point—it is an escape hatch from manual services. You want to build software? Great. Do it manually first, get paid £500/month to learn the requirements, then automate the painful parts.
        </p>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Coding first is a £50,000 bet on your own assumptions. Selling first is a £500/month bet on reality.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
            Sell Your Manual Service
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
          One proven strategy every Tuesday — so you can build sustainable SaaS without the 6-month "bet on yourself" trap.
        </p>
        <NewsletterCTA />
      </section>
    </div>
  );
}
