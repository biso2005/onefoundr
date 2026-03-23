'use client';

import Link from 'next/link';
import { ChevronRight, Check, X } from 'lucide-react';
import NewsletterCTA from '@/components/NewsletterCTA';
import { nicheExamples, nicheQuestions } from '@/data/nicheSelection';
import { useState } from 'react';

const ratingStyles: Record<string, { backgroundColor: string; color: string }> = {
  Excellent: { backgroundColor: '#d1fae5', color: '#065f46' },
  Good: { backgroundColor: '#dbeafe', color: '#1e40af' },
  Avoid: { backgroundColor: '#fee2e2', color: '#991b1b' },
};

export default function NicheSelectionPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
            <Link href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/start" style={{ color: '#6b7280', textDecoration: 'none' }}>Start</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#111827' }}>Niche Selection</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section style={{ borderBottom: '1px solid #e5e7eb', paddingTop: '64px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#00B894', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            START SOLO
          </p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '700', color: '#111827', lineHeight: '1.15', marginBottom: '16px' }}>
            Niche Selection for Solopreneurs
          </h1>
          <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6', maxWidth: '700px' }}>
            Everyone tells you "the riches are in the niches." Nobody tells you that 90% of people who follow this advice niche themselves into a dead end. Here is the actual, practical way to do it.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 64px' }}>

        {/* SECTION 1 — THE MYTH */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
            Why most niche advice is terrible for you
          </h2>
          <div style={{ maxWidth: '760px' }}>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#374151', marginBottom: '20px' }}>
              99% of niche selection advice was written for people with teams, investors and marketing budgets. It was not written for you.
            </p>
            <div style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #3b82f6', padding: '16px 20px', marginBottom: '20px', borderRadius: '0 6px 6px 0' }}>
              <p style={{ fontSize: '16px', color: '#374151', fontStyle: 'italic', margin: 0 }}>
                The standard advice: <strong>&quot;Niche down as much as possible. Pick something super specific. Own it.&quot;</strong>
              </p>
            </div>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#374151', marginBottom: '20px' }}>
              This is terrible advice for solo founders.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#374151', marginBottom: '28px' }}>
              If you niche too early before you have any clients, you will spend 6 months building something nobody wants. You will niche yourself into a dead end with zero customers.
            </p>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
              The correct approach for solo founders is the exact opposite:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                { n: '1', label: 'Start broad.', rest: ' Take any paying client.' },
                { n: '2', label: 'Notice patterns.', rest: ' Look for who pays well and who you enjoy working with.' },
                { n: '3', label: 'Narrow deliberately.', rest: ' Only when you have real data.' },
              ].map((step) => (
                <div key={step.n} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#1d4ed8', fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.n}</span>
                  <p style={{ fontSize: '17px', color: '#374151', margin: 0, lineHeight: '1.7' }}>
                    <strong style={{ color: '#111827' }}>{step.label}</strong>{step.rest}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '17px', fontWeight: '700', color: '#111827' }}>
              This is the anti-niche method. It works 10x better.
            </p>
          </div>
        </section>

        {/* SECTION 2 — THE 3 PHASES */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px' }}>
            The 3 Phases of Niche Selection
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { heading: 'Phase 1: Start Broad', text: 'Take any paying client. Say yes to almost everything. You are gathering data, not building a brand. This phase lasts 1–3 months.', badge: 'Beginner', badgeBg: '#dbeafe', badgeColor: '#1e40af', borderTop: '#3b82f6' },
              { heading: 'Phase 2: Notice Patterns', text: 'After 3–5 clients, patterns will emerge. Some clients pay on time, some are a nightmare. Some work feels easy, some feels like work. Write these down.', badge: 'Intermediate', badgeBg: '#e9d5ff', badgeColor: '#6b21a8', borderTop: '#a855f7' },
              { heading: 'Phase 3: Narrow Deliberately', text: 'Now you can niche. Double down on the type of client that pays well, is easy to work with, and you enjoy. Cut everything else.', badge: 'Advanced', badgeBg: '#d1fae5', badgeColor: '#065f46', borderTop: '#10b981' },
            ].map((phase, idx) => (
              <div key={idx} style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', borderTop: `3px solid ${phase.borderTop}` }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>{phase.heading}</h3>
                <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>{phase.text}</p>
                <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '600', padding: '4px 10px', borderRadius: '9999px', backgroundColor: phase.badgeBg, color: phase.badgeColor }}>
                  {phase.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — THE NICHE MATRIX */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '32px' }}>
            The Niche Sweet Spot
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px', maxWidth: '700px' }}>
            <div style={{ backgroundColor: '#fefce8', border: '2px solid #fde047', borderRadius: '8px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cash Cow — Avoid</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>Low interest, high demand</p>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>You hate it but it sells. This is unsustainable — you will burn out.</p>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #4ade80', borderRadius: '8px', padding: '20px', boxShadow: '0 0 0 3px #16a34a' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#065f46', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>✓ Sweet Spot — Target This</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>High interest, high demand</p>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>You love it and people pay for it. This is your goal.</p>
            </div>
            <div style={{ backgroundColor: '#f9fafb', border: '2px solid #d1d5db', borderRadius: '8px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Dead Zone — Avoid</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>Low interest, low demand</p>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>Nobody cares and nobody pays. Leave this alone.</p>
            </div>
            <div style={{ backgroundColor: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '8px', padding: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#9a3412', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Hobby Trap — Avoid</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>High interest, low demand</p>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>You love it but nobody will pay. This is a hobby, not a business.</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '14px 18px', borderRadius: '0 6px 6px 0', maxWidth: '700px' }}>
            <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
              <strong>Your goal is the top right quadrant.</strong> Ignore anyone who tells you to pick something from the bottom right.
            </p>
          </div>
        </section>

        {/* SECTION 4 — THE NICHE FORMULA */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
            The Niche Formula
          </h2>
          <p style={{ fontSize: '17px', color: '#374151', lineHeight: '1.7', marginBottom: '24px' }}>
            Once you have data from clients, use this formula to turn it into a niche:
          </p>
          <div style={{ backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '28px', textAlign: 'center' }}>
            <p style={{ fontSize: '20px', fontWeight: '700', color: '#111827', letterSpacing: '-0.01em', margin: 0 }}>
              Your Skill + Specific Audience + Specific Pain = <span style={{ color: '#00B894' }}>Great Niche</span>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '6px' }}>
              <X style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} size={18} />
              <p style={{ fontSize: '16px', color: '#374151', margin: 0 }}>
                Not: <span style={{ fontWeight: '600', color: '#111827' }}>&quot;I am a web designer&quot;</span>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '6px' }}>
              <Check style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} size={18} />
              <p style={{ fontSize: '16px', color: '#374151', margin: 0 }}>
                But: <span style={{ fontWeight: '600', color: '#111827' }}>&quot;I build simple websites for independent coffee shops who get no bookings from their current site.&quot;</span>
              </p>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: '#6b7280', fontStyle: 'italic', marginTop: '20px' }}>
            Every great niche follows this exact structure.
          </p>
        </section>

        {/* SECTION 5 — THE 5 QUESTION STRESS TEST */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
            The 5 Question Stress Test
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', marginBottom: '28px' }}>
            Any niche idea you have must pass all 5 of these questions. If it fails any one of them, pick something else.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '760px' }}>
            {nicheQuestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
                style={{ width: '100%', backgroundColor: expandedQuestion === idx ? '#f0fdf4' : '#f9fafb', border: `1px solid ${expandedQuestion === idx ? '#86efac' : '#e5e7eb'}`, borderRadius: '8px', padding: '16px 20px', cursor: 'pointer', textAlign: 'left' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#dbeafe', color: '#1d4ed8', fontWeight: '700', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{idx + 1}</span>
                    <span style={{ fontWeight: '600', color: '#111827', fontSize: '16px' }}>{item.question}</span>
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '20px', flexShrink: 0, lineHeight: '1' }}>{expandedQuestion === idx ? '−' : '+'}</span>
                </div>
                {expandedQuestion === idx && (
                  <p style={{ fontSize: '15px', color: '#4b5563', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #d1fae5', lineHeight: '1.6', marginBottom: 0 }}>
                    {item.explanation}
                  </p>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 6 — REAL NICHE EXAMPLES */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
            12 Real Niche Examples
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', marginBottom: '32px' }}>
            These are all real niches that solopreneurs are running profitably right now.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
            {nicheExamples.map((example) => (
              <div key={example.slug} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>{example.name}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5', marginBottom: '16px' }}>{example.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#9ca3af' }}>Skill: </span>
                    <strong style={{ color: '#111827' }}>{example.skill}</strong>
                  </div>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#9ca3af' }}>Audience: </span>
                    <strong style={{ color: '#111827' }}>{example.audience}</strong>
                  </div>
                  <div style={{ fontSize: '13px' }}>
                    <span style={{ color: '#9ca3af' }}>Pain: </span>
                    <strong style={{ color: '#111827' }}>{example.pain}</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #f3f4f6', marginTop: 'auto' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>{example.revenueRange}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '9999px', ...(ratingStyles[example.rating] || ratingStyles['Good']) }}>
                    {example.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — COMMON MISTAKES */}
        <section style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '28px' }}>
            Mistakes to Avoid
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '680px' }}>
            {[
              'Niching before you have any clients',
              'Picking a niche where nobody is already paying',
              'Niching too narrow too early',
              "Picking something you hate just because it's profitable",
              'Listening to advice from people who have never run a solo business',
            ].map((mistake, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '6px' }}>
                <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '16px', flexShrink: 0, lineHeight: '1', marginTop: '1px' }}>✕</span>
                <span style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5' }}>{mistake}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8 — YOUR NEXT STEP */}
        <section style={{ paddingTop: '56px', paddingBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
            Your Next Step
          </h2>
          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '32px', maxWidth: '600px' }}>
            <p style={{ fontSize: '17px', color: '#374151', lineHeight: '1.7', marginBottom: '16px' }}>
              Right now, you are in Phase 1. Stop researching niches. Stop overthinking. Go get your first paying client.
            </p>
            <p style={{ fontSize: '17px', color: '#374151', lineHeight: '1.7', marginBottom: '28px' }}>
              You will not find your niche in a spreadsheet. You will find it by talking to real people and doing real work.
            </p>
            <Link
              href="/start/first-90-days"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: '700', fontSize: '16px', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}
            >
              Next: The First 90 Days Plan <ChevronRight size={18} />
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterCTA />

      </div>
    </div>
  );
}
