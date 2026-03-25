'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function ConsultingPage() {
  const consultingModels = [
    {
      title: 'The Expert Advisor',
      description:
        'Deep expertise sold hourly or daily. Best for corporate clients who want strategic advice on complex problems.',
      rate: '£800–£1,500/day',
      ideal: 'Executives, boards, strategy work',
      example: 'Strategy consultant for SaaS scaling',
    },
    {
      title: 'The Embedded Specialist',
      description: 'You become part of their team (usually remote, part-time). They get you 2-3 days/week for 3+ months.',
      rate: '£800–£1,200/day',
      ideal: 'Growth-stage startups, scale-ups',
      example: 'Marketing consultant working with growth team',
    },
    {
      title: 'The Project Consultant',
      description: 'Fixed-scope project delivery. You deliver a specific output: audit, strategy, framework, or implementation.',
      rate: '£3k–£10k per project',
      ideal: 'Businesses wanting clear deliverables',
      example: 'Go-to-market strategy for a product launch',
    },
    {
      title: 'The Implementation Consultant',
      description: 'Hands-on work: you execute the strategy + teach their team. Most time-intensive but often most valuable.',
      rate: '£1,500–£2,500/day',
      ideal: 'Companies that need hands-on help',
      example: 'Implementing CRM system + training team',
    },
  ];

  const traps = [
    {
      trap: 'Underpricing yourself',
      rebuttal:
        'The lower you price, the less you appear to be worth. Clients will question your value and demand more scope for the same fee. Start at £750+/day minimum.',
    },
    {
      trap: 'Taking on too much scope',
      rebuttal:
        'A "diagnostic audit" becomes a full implementation. Always define scope in writing. When scope expands, you renegotiate terms or end the engagement.',
    },
    {
      trap: 'Trying to do everything yourself',
      rebuttal:
        'Hire a VA to manage admin (calendly, invoices, emails). Hire a junior consultant to do the research. Your job: be the expert, not the admin.',
    },
    {
      trap: 'Staying in consulting too long',
      rebuttal:
        'By Month 6, you should have a productized tier. By Month 12, your consulting should be just 20% of your business (premiumized). Otherwise, you are stuck in a job forever.',
    },
    {
      trap: 'Not documenting repeatable work',
      rebuttal:
        'Every time you deliver, save templates, frameworks, tools. These become the foundation of your productized offers or future courses.',
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
            { label: 'Consulting' },
          ]}
        />
        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
          Solo Consulting: The Complete Guide
        </h1>
        <p style={{ fontSize: '18px', color: '#636E72', marginBottom: '16px', lineHeight: '1.6' }}>
          Consulting is not freelancing with a nicer title. You are selling your experience and opinions, not your labor.
          Get to £5k/month in 2 weeks. By Day 90, you must productize or you have just built a complicated job.
        </p>
      </section>

      {/* Section 1: The Bridge — Freelancer vs Consultant */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 1: The Bridge — Freelancer vs Consultant
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1565C0', margin: '0 0 12px 0' }}>Freelancer</h3>
            <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', lineHeight: '1.8' }}>
              <li>You sell <strong>labor</strong></li>
              <li>Output-based: writing, coding, design, etc.</li>
              <li>Easier to start (lower barrier)</li>
              <li>Scales with hiring</li>
              <li>Client: &ldquo;Do this work for me&rdquo;</li>
              <li>Day rate: £150–£600/day</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#F3E5F5', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#6A1B9A', margin: '0 0 12px 0' }}>Consultant</h3>
            <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', lineHeight: '1.8' }}>
              <li>You sell <strong>expertise</strong></li>
              <li>Advice-based: strategy, audits, frameworks</li>
              <li>Requires 5+ years experience</li>
              <li>Scales with productization</li>
              <li>Client: &ldquo;Tell me what to do and why&rdquo;</li>
              <li>Day rate: £700–£1,500+/day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: The Four Solo Consulting Models */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 2: The Four Solo Consulting Models
        </h2>
        <p style={{ marginBottom: '24px', fontSize: '16px', color: '#636E72' }}>
          Not all consulting is the same. Pick the model that matches your experience and lifestyle:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {consultingModels.map((model, i) => (
            <div key={i} style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #1565C0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 12px 0' }}>{model.title}</h3>
              <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#636E72' }}>{model.description}</p>
              <div style={{ backgroundColor: '#FFF', padding: '12px', borderRadius: '4px', borderLeft: '3px solid #00B894' }}>
                <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#636E72' }}>
                  <strong>Rate:</strong> {model.rate}
                </p>
                <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#636E72' }}>
                  <strong>Best for:</strong> {model.ideal}
                </p>
                <p style={{ margin: '0', fontSize: '13px', color: '#636E72' }}>
                  <strong>Example:</strong> {model.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: The Solo Consulting Starter Kit (5 Steps) */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 3: The Solo Consulting Starter Kit (5 Steps)
        </h2>
        <p style={{ marginBottom: '32px', fontSize: '16px', color: '#636E72' }}>
          Here is how to go from £0 to £5k/month in 30 days:
        </p>
        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          {[
            {
              step: 1,
              title: 'Positioning (Day 1)',
              desc: 'Write: "I help [specific person] solve [specific problem] using [your method]." Not "I am a consultant." Example: "I help B2B SaaS companies reduce churn by optimizing onboarding."',
            },
            {
              step: 2,
              title: 'Your Offer (Day 2–5)',
              desc: 'Create a specific offer: "Diagnostic Audit: £600. Includes: competitive review, your process audit, recommendations report. Delivered in 48 hours."',
            },
            {
              step: 3,
              title: 'Your Network (Day 6–10)',
              desc: 'List 20 people from your past: former colleagues, LinkedIn connections, people you have worked with. These are your first warm outreach targets.',
            },
            {
              step: 4,
              title: 'The Pitch (Day 11–25)',
              desc: 'Reach out: "I am starting consulting. I would love your opinion on my positioning. Also, know any [target client] who might need [your solution]?"',
            },
            {
              step: 5,
              title: 'First Delivery (Day 26–30)',
              desc: 'Land your first client, deliver the diagnostics flawlessly, ask for a testimonial, upsell if relevant. By Day 30, you have either got £600+ revenue or you have proof of concept.',
            },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div
                style={{
                  backgroundColor: '#1565C0',
                  color: '#FFF',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '20px',
                  flexShrink: 0,
                }}
              >
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: '0 0 8px 0' }}>{item.title}</h3>
                <p style={{ margin: '0', fontSize: '14px', color: '#636E72', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Common Traps */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2D3436', marginBottom: '24px' }}>
          Section 4: Common Consulting Traps
        </h2>
        <p style={{ marginBottom: '24px', fontSize: '16px', color: '#636E72' }}>
          Here are the 5 biggest mistakes solos make:
        </p>
        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {traps.map((t, i) => (
            <div key={i} style={{ backgroundColor: '#FFEBEE', borderLeft: '4px solid #C62828', padding: '16px', borderRadius: '6px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#C62828', fontWeight: '700' }}>
                Trap: {t.trap}
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#B71C1C' }}>
                <strong>Reality:</strong> {t.rebuttal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Your Next Step */}
      <section style={{ marginBottom: '48px', backgroundColor: '#E3F2FD', padding: '32px', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1565C0', marginBottom: '16px' }}>
          Section 5: Your Next Step — Choose Your Path
        </h2>
        <p style={{ fontSize: '15px', color: '#0D47A1', marginBottom: '24px', lineHeight: '1.8' }}>
          Consulting gets you to £5k/month faster than any other model. But it has a ceiling: £12k–£16k/month (the time
          constraint). By Day 90, you must decide your next move:
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
            href="/offer"
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
          One proven strategy every Tuesday — so you can land your first client and build a real consulting business.
        </p>
        <NewsletterCTA />
      </section>

    </div>
  );
}
