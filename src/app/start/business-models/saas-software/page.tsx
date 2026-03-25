'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function SaaSSoftwarePage() {
  const timelineData = [
    {
      month: '1',
      consulting: '£2,000',
      saaS_codeFIrst: '£0 (building)',
      saaS_conciergeFIrst: '£1,500 (manual service)',
    },
    {
      month: '2',
      consulting: '£4,000',
      saaS_codeFIrst: '£0 (building)',
      saaS_conciergeFIrst: '£1,500 (manual service)',
    },
    {
      month: '3',
      consulting: '£6,000',
      saaS_codeFIrst: '£0 (still building)',
      saaS_conciergeFIrst: '£1,500 + automation starts',
    },
    {
      month: '4',
      consulting: '£4,000',
      saaS_codeFIrst: '£100 (2 paying users)',
      saaS_conciergeFIrst: '£1,500 (20% automated)',
    },
    {
      month: '5',
      consulting: '£0 (pivot)',
      saaS_codeFIrst: '£300 (support hell)',
      saaS_conciergeFIrst: '£1,500 (50% automated)',
    },
    {
      month: '6',
      consulting: '-',
      saaS_codeFIrst: '£0 (burnout)',
      saaS_conciergeFIrst: '£3,000 (software + service clients)',
    },
  ];

  const conciergePath = [
    {
      step: 'Step 1: The Concierge MVP (Days 1–14)',
      description: 'The Pitch',
      detail:
        '"I will manually generate these compliance reports for you for £500/month while I build the automation."',
    },
    {
      step: '',
      description: 'The Delivery',
      detail:
        'You use Google Sheets, Airtable, Zapier, and manual data entry. It takes you 10 hours. They pay £500. Hourly rate: £50/hour (viable).',
    },
    {
      step: '',
      description: 'The Value',
      detail:
        'They get the outcome (the report). They do not care how it is made.',
    },
    {
      step: '',
      description: 'The Validation',
      detail:
        'If nobody pays £500 for the manual version, nobody will pay £49 for the software version. Kill it here, not after 6 months coding.',
    },
    {
      step: 'Step 2: The Pain Audit (Month 2–3)',
      description: 'Document Everything',
      detail:
        'Which part of the 10-hour manual process makes you want to cry? Which part is most painful for you to do?',
    },
    {
      step: '',
      description: 'The "Automation ROI" Test',
      detail:
        'If automating Step 3 saves you 3 hours, and you have 5 clients, that is 15 hours/month saved. This is worth coding. If it saves 30 minutes, leave it manual.',
    },
    {
      step: '',
      description: 'The "Invisible Automation" Rule',
      detail:
        'Automate the parts painful for you, invisible to them (data scraping, formatting, calculations—not the UI or auth system).',
    },
    {
      step: 'Step 3: The Gradual Replacement (Month 4–6)',
      description: 'Week 1',
      detail:
        'Write a Python script that does 20% of the manual work. You now work 8 hours, deliver same result.',
    },
    {
      step: '',
      description: 'Week 4',
      detail: 'Script does 50%. You work 5 hours.',
    },
    {
      step: '',
      description: 'Week 8',
      detail: 'Script does 80%. You work 2 hours (oversight only).',
    },
    {
      step: '',
      description: 'Month 6',
      detail:
        'You charge the same £500, work 30 minutes (checking outputs). This is now "software" but with proven demand and existing revenue.',
    },
  ];

  const dontDoChecklist = [
    'You need revenue in <90 days',
    'You have <£5,000 emergency fund',
    'You have not manually done this service 5+ times (you do not understand the edge cases)',
    'You cannot describe the app in one sentence ("Connects X to Y")',
    'You have <1,000 email subs or <3,000 Twitter followers (distribution gap)',
    'You are learning to code while building this (learn first, build second)',
    'The problem is not painful enough that you would pay £200/month to make it go away',
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section - WARNING */}
      <section style={{ marginBottom: '48px' }}>
        <Breadcrumbs
          items={[
            { label: 'Start Solo', href: '/start' },
            { label: 'Business Models', href: '/start/business-models' },
            { label: 'SaaS / Software' },
          ]}
        />
        
        <div style={{ backgroundColor: '#FEF2F2', borderLeft: '6px solid #DC2626', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#DC2626', fontSize: '16px', textTransform: 'uppercase' }}>
            🚨 STOP: Read This First
          </p>
          <p style={{ margin: '0', fontSize: '15px', color: '#7F1D1D', lineHeight: '1.6' }}>
            If you need revenue in the next 60 days, close this page now and go to <Link href="/start/business-models/consulting" style={{ color: '#DC2626', fontWeight: '600', textDecoration: 'underline' }}>consulting</Link>. SaaS requires 6 months runway minimum. No exceptions. No part-time jobs.
          </p>
        </div>

        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          SaaS: The Solo Founder Trap
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '24px', lineHeight: '1.6' }}>
          (Sell the Manual Version First)
        </p>

        <div style={{ backgroundColor: '#F3F4F6', padding: '20px', borderRadius: '8px', marginBottom: '32px', borderLeft: '4px solid #636E72' }}>
          <p style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#1F2937', lineHeight: '1.6', fontStyle: 'italic' }}>
            "I spent 8 months building a customer portal that nobody wanted. Beautiful code. Perfect auth flow. Stripe integration. Unit tests. Then I met a founder who sold the manual version of the same service for £2,000/month while building the software in the background. She owned the customer relationship before she owned the codebase. I owned a GitHub repo and an empty bank account."
          </p>
          <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
            — Every developer who learned SaaS the wrong way
          </p>
        </div>

        <p style={{ fontSize: '15px', color: '#2D3436', marginBottom: '16px', lineHeight: '1.6' }}>
          <strong>The only way to build software alone without going broke:</strong> Manual service → Automated script → Paid product.
        </p>
        <p style={{ fontSize: '15px', color: '#2D3436', lineHeight: '1.6' }}>
          SaaS is the only business model where you pay to work. Unlike services (immediate cash) or digital products (build once, sell often), SaaS requires ongoing rent—servers, security patches, customer support—before you have earned a single pound.
        </p>
      </section>

      {/* Section 1: The Math */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: Why Coding First Kills Solo Founders
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          The timeline tells the story. Three paths. Only one survives to Month 6.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F5F5F5', borderBottom: '2px solid #2D3436' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Month</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>Consulting</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>SaaS (Code First)</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '700', color: '#2D3436' }}>SaaS (Concierge First)</th>
              </tr>
            </thead>
            <tbody>
              {timelineData.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FAFB' }}>
                  <td style={{ padding: '12px', fontWeight: '600', color: '#2D3436' }}>Month {row.month}</td>
                  <td style={{ padding: '12px', color: '#2E7D32', fontWeight: '500' }}>{row.consulting}</td>
                  <td style={{ padding: '12px', color: '#C62828', fontWeight: '500' }}>{row.saaS_codeFIrst}</td>
                  <td style={{ padding: '12px', color: '#1565C0', fontWeight: '500' }}>{row.saaS_conciergeFIrst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Maintenance Tax:</h3>

        <div style={{ backgroundColor: '#E8F5E9', padding: '20px', borderRadius: '8px', marginBottom: '24px', borderLeft: '4px solid #2E7D32' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20' }}>
            Revenue: £3,000/month SaaS MRR
          </p>
          <div style={{ display: 'grid', gap: '8px', fontSize: '14px', color: '#2D3436' }}>
            <p style={{ margin: '0' }}>
              <strong>Tools Cost:</strong> £300/month (Vercel Pro, Supabase, Stripe, Auth)
            </p>
            <p style={{ margin: '0' }}>
              <strong>True Profit:</strong> £2,700
            </p>
            <p style={{ margin: '0' }}>
              <strong>Time Required:</strong> 25 hours/week (coding, support, bug fixes, security patches)
            </p>
            <p style={{ margin: '0' }}>
              <strong>Hourly Rate:</strong> £27/hour (worse than McDonald's shift manager)
            </p>
            <p style={{ margin: '0' }}>
              <strong>The Burnout:</strong> Server goes down at 2am. You fix it. Customer finds edge case. You patch it. Stripe flags account for "high risk." You appeal it. All before you have earned enough to pay rent.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#7F1D1D', lineHeight: '1.6' }}>
            <strong>GBP Reality Check:</strong> Solo SaaS only beats consulting at &gt;£5,000 MRR with &lt;10 hours/week maintenance. Until then, it is a low-paid job with equity that may never materialize.
          </p>
        </div>
      </section>

      {/* Section 2: The Concierge-First Methodology */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Concierge-First Methodology — Sell the Manual Version First
        </h2>

        <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>
          You are not building software. You are productizing a manual service that you automate incrementally. This is the only path that guarantees customer validation before you write a single line of code.
        </p>

        {conciergePath.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '16px' }}>
            {item.step && (
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>
                {item.step}
              </h4>
            )}
            <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', padding: '12px', borderRadius: '6px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase' }}>
                  {item.description}
                </p>
                <p style={{ margin: '0', fontSize: '14px', color: '#2D3436', lineHeight: '1.5' }}>
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: '#E3F2FD', borderLeft: '4px solid #1565C0', padding: '16px', borderRadius: '8px', marginTop: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1565C0' }}>
            The Solo Constraint:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#0D47A1' }}>
            You never build a "platform." You build a script that saves you 10 hours. The customer pays for the outcome (the report), not the codebase. If you cannot describe your product in terms of customer outcomes, you do not have a SaaS business yet.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px', marginTop: '24px' }}>
          Model Markers by Business Type:
        </h3>

        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '14px' }}>
              Service → SaaS
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              "VAT calculations for EU ecommerce stores" (manual accountant → automated tool)
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '14px' }}>
              Consulting → SaaS
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              "SEO audits" (manual review → automated crawler)
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '14px' }}>
              Freelancing → SaaS
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
              "Website backups" (manual downloads → automated sync)
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '16px', borderRadius: '8px', marginTop: '24px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#7F1D1D', fontWeight: '600' }}>
            Critical Distinction: If you cannot sell 3 manual monthly retainers (£1,500/month total), you do not have a SaaS idea. You have a hypothesis.
          </p>
        </div>
      </section>

      {/* Section 3: The B2B Imperative */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The B2B Imperative — The £200/Month Minimum (Or Death)
        </h2>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#C62828', marginBottom: '12px' }}>❌ B2C SaaS (Do Not Do This):</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Price: £9/month</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>
              You need 334 customers for £3k/month survival revenue
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Support: 3–4 tickets/day</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>
              Even at 1% contact rate, 334 customers = overwhelming support load
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Churn: 5–10% monthly</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>
              You lose 17–34 customers every month (must acquire new ones just to stay flat)
            </p>
          </div>

          <div style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Result: Bankruptcy</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>
              You spend 40 hours on support for £2,000 revenue. You burn out by Month 4.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2E7D32', marginBottom: '12px' }}>✅ B2B SaaS (This Is Your Only Path):</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#1B5E20', fontSize: '13px' }}>Price: £200–500/month</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#2E7D32' }}>
              15 customers × £200 = £3,000/month (solo maximum)
            </p>
          </div>

          <div style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#1B5E20', fontSize: '13px' }}>Support: 2–3 tickets/week</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#2E7D32' }}>
              Business users figure it out. They do not call you for "how do I use this?"
            </p>
          </div>

          <div style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#1B5E20', fontSize: '13px' }}>Churn: 2–3% monthly</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#2E7D32' }}>
              Businesses do not switch tools monthly. They stick around.
            </p>
          </div>

          <div style={{ backgroundColor: '#E8F5E9', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #2E7D32' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#1B5E20', fontSize: '13px' }}>Result: Viable</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#2E7D32' }}>
              You can handle 15 customers solo. You work 30–35 hours/week. You earn £5,000+/month profit.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The "One Feature" Architecture:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#E65100', fontSize: '13px' }}>
              ✓ One integration (e.g., "PDF exports from Shopify," not "universal e-commerce integration")
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#E65100', fontSize: '13px' }}>
              ✓ No user management (single user accounts, invite-only, or no auth—use Stripe Customer Portal for billing)
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#E65100', fontSize: '13px' }}>
              ✓ No dashboard (Email reports, not login portals—reduces hosting complexity)
            </p>
          </div>

          <div style={{ backgroundColor: '#FFF3E0', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#E65100', fontSize: '13px' }}>
              ✓ No teams (If they need multi-user, they are too big for you; churn them to enterprise tools)
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The "Just Use" Dependencies (Do Not Build These):</h3>

        <div style={{ display: 'grid', gap: '8px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0', fontSize: '13px', color: '#1565C0' }}>
              <strong>Auth:</strong> Clerk or Supabase Auth (not Passport.js from scratch)
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0', fontSize: '13px', color: '#1565C0' }}>
              <strong>Billing:</strong> Stripe Customer Portal (not custom dashboard)
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0', fontSize: '13px', color: '#1565C0' }}>
              <strong>Database:</strong> Supabase or Railway (not DigitalOcean + manual backups)
            </p>
          </div>

          <div style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '6px' }}>
            <p style={{ margin: '0', fontSize: '13px', color: '#1565C0' }}>
              <strong>Hosting:</strong> Vercel (not AWS EC2 with Terraform)
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Emergency Fund & Runway */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: The Emergency Fund & Runway Requirements
        </h2>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The 6-Month Rule:</h3>

        <p style={{ fontSize: '15px', color: '#636E72', marginBottom: '16px' }}>
          You must have 6 months of expenses saved before starting SaaS. No exceptions. Here is why:
        </p>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '13px' }}>Month 1–3: Building (£0–£1,500/month)</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>Concierge service phase. Some revenue, but not enough.</p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '13px' }}>Month 4–6: Automation (Revenue flat, time debt increasing)</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>You are coding while servicing. Double workload.</p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '13px' }}>Month 6+: Stripe Holds Payouts for 90 Days</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>
              New SaaS accounts are flagged as "high risk." You cannot access revenue for 60–90 days. You still pay server costs. You still need to eat.
            </p>
          </div>

          <div style={{ backgroundColor: '#F5F5F5', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #636E72' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#2D3436', fontSize: '13px' }}>Month 9+: First Profitable Month (Maybe)</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#636E72' }}>Assuming nothing breaks, nobody churns, and you do not panic and take a consulting gig.</p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The Emergency Fund:</h3>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#1B5E20', fontSize: '14px' }}>
            £5,000 minimum (3 months bare survival) in a separate account labeled "SaaS Death Fund."
          </p>
          <p style={{ margin: '0', fontSize: '13px', color: '#2E7D32' }}>
            This money is not for development. This is your food, rent, and utilities fund while Stripe holds your payouts.
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>The "Kill It" Checkpoints:</h3>

        <div style={{ display: 'grid', gap: '8px' }}>
          <div style={{ backgroundColor: '#FEF2F2', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #DC2626' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Day 30</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#7F1D1D' }}>
              If 0 manual service sales: Kill it. This means nobody wants this, even for free.
            </p>
          </div>

          <div style={{ backgroundColor: '#FEF2F2', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #DC2626' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Day 90</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#7F1D1D' }}>
              If &lt;£1,500/month from manual service: Kill it. Scale does not happen in Month 6.
            </p>
          </div>

          <div style={{ backgroundColor: '#FEF2F2', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #DC2626' }}>
            <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#C62828', fontSize: '13px' }}>Day 180</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#7F1D1D' }}>
              If automation has not reduced your hours by 50%: Kill it. The code is not saving you time, just debt.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Tech Stack */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 5: Technical Architecture — The "Never Build" Stack
        </h2>

        <p style={{ fontSize: '15px', color: '#636E72', marginBottom: '24px' }}>
          Your job is not to build technology. Your job is to automate customer pain. Use off-the-shelf services for everything except the one automation layer that saves you 10 hours/month.
        </p>

        <div style={{ backgroundColor: '#E3F2FD', border: '2px solid #1565C0', padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1565C0', margin: '0 0 16px 0' }}>The Solo Stack:</h4>
          <div style={{ display: 'grid', gap: '8px' }}>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Frontend:</strong> Next.js 14 (App Router) deployed to Vercel (zero config hosting)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Backend:</strong> Serverless functions (Vercel/Netlify), not persistent servers
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Database:</strong> Supabase (Postgres with auth/billing built-in)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Auth:</strong> Clerk or Supabase Auth (password reset emails handled for you)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Billing:</strong> Stripe Checkout + Customer Portal (never build your own billing dashboard)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Email:</strong> Resend or Loops (transactional only, no marketing automation)
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: '#2D3436' }}>
              <strong>Monitoring:</strong> Vercel Analytics + simple UptimeRobot (free tier)
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            The "One Serverless Function" Rule:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#7F1D1D' }}>
            If your app requires a constantly running server (WebSocket, cron jobs, background workers), it is too complex for solo. Use Vercel Edge Functions, Supabase Edge Functions, or do not build it.
          </p>
        </div>
      </section>

      {/* Section 6: Don't Do This Checklist */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 6: Read This Before You Write Code
        </h2>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#C62828', marginBottom: '12px' }}>❌ Do NOT Proceed If:</h3>

        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          {dontDoChecklist.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#FFEBEE', padding: '12px', borderRadius: '6px', borderLeft: '3px solid #C62828' }}>
              <p style={{ margin: '0', fontSize: '13px', color: '#7F1D1D' }}>☐ {item}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#FEF2F2', borderLeft: '4px solid #DC2626', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: '700', color: '#C62828' }}>
            If you checked any box above:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#7F1D1D' }}>
            <Link
              href="/start/business-models/consulting"
              style={{ color: '#C62828', fontWeight: '600', textDecoration: 'underline' }}
            >
              Go to Consulting Instead
            </Link>
          </p>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2E7D32', marginBottom: '12px' }}>✅ Proceed Only If:</h3>

        <div style={{ backgroundColor: '#E8F5E9', borderLeft: '4px solid #2E7D32', padding: '16px', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#2E7D32', lineHeight: '1.6' }}>
            You are already a developer, have 6 months runway, have manually serviced 3+ clients, and understand you will not see "passive income" for 12 months minimum.
          </p>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Your Next Step — Validate the SaaS Idea First
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Do not buy exampleapp.com. Do not set up a GitHub repo. Do not install Node packages. Send the manual service offer first. The code can wait. The customer cannot.
        </p>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Draft a £500/month concierge service offer using your business problem. Send it to 10 prospects this week. If 0 buy, kill the SaaS idea before you buy the domain.
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
            Package the Manual Service
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
