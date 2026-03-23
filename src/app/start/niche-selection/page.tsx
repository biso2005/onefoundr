'use client';

import Link from 'next/link';
import { ChevronRight, Check, X } from 'lucide-react';
import NewsletterCTA from '@/components/NewsletterCTA';
import { nicheExamples, nicheQuestions } from '@/data/nicheSelection';
import { useState } from 'react';

export default function NicheSelectionPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent':
        return 'bg-emerald-100 text-emerald-700';
      case 'Good':
        return 'bg-blue-100 text-blue-700';
      case 'Avoid':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight size={16} />
            <Link href="/start" className="hover:text-gray-900">Start</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900">Niche Selection</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO SECTION */}
        <section className="mb-16 pb-12 border-b border-gray-200">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Niche Selection for Solopreneurs</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Everyone tells you "the riches are in the niches." Nobody tells you that 90% of people who follow this advice niche themselves into a dead end. Here is the actual, practical way to do it.
          </p>
        </section>

        {/* SECTION 1 — THE MYTH */}
        <section style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Why most niche advice is terrible for you</h2>
          <div style={{ maxWidth: '768px', color: '#374151' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              99% of niche selection advice was written for people with teams, investors and marketing budgets. It was not written for you.
            </p>
            <p style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #3b82f6', paddingLeft: '16px', paddingTop: '16px', paddingBottom: '16px', marginBottom: '16px', fontSize: '16px' }}>
              The standard advice: <strong>"Niche down as much as possible. Pick something super specific. Own it."</strong>
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>This is terrible advice for solo founders.</p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              If you niche too early before you have any clients, you will spend 6 months building something nobody wants. You will niche yourself into a dead end with zero customers.
            </p>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginTop: '32px', marginBottom: '16px' }}>
              The correct approach for solo founders is the exact opposite:
            </p>
            <ol style={{ marginTop: '16px', paddingLeft: '24px', color: '#374151' }}>
              <li style={{ fontSize: '18px', marginBottom: '12px' }}><strong>Start broad.</strong> Take any paying client.</li>
              <li style={{ fontSize: '18px', marginBottom: '12px' }}><strong>Notice patterns.</strong> Look for who pays well and who you enjoy working with.</li>
              <li style={{ fontSize: '18px', marginBottom: '12px' }}><strong>Narrow deliberately.</strong> Only when you have real data.</li>
            </ol>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginTop: '32px' }}>
              This is the anti-niche method. It works 10x better.
            </p>
          </div>
        </section>

        {/* SECTION 2 — THE 3 PHASES */}
        <section className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The 3 Phases of Niche Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                heading: 'Phase 1: Start Broad',
                text: 'Take any paying client. Say yes to almost everything. You are gathering data, not building a brand. This phase lasts 1-3 months.',
                badge: 'Beginner',
              },
              {
                heading: 'Phase 2: Notice Patterns',
                text: 'After 3-5 clients, patterns will emerge. Some clients pay on time, some are a nightmare. Some work feels easy, some feels like work. Write these down.',
                badge: 'Intermediate',
              },
              {
                heading: 'Phase 3: Narrow Deliberately',
                text: 'Now you can niche. Double down on the type of client that pays well, is easy to work with, and you enjoy. Cut everything else.',
                badge: 'Advanced',
              },
            ].map((phase, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.heading}</h3>
                <p className="text-gray-700 mb-4">{phase.text}</p>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {phase.badge}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — THE NICHE MATRIX */}
        <section className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Niche Sweet Spot</h2>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Cash Cow (Avoid)</div>
                <h3 className="font-bold text-gray-900 mb-2">Low interest, high demand</h3>
                <p className="text-sm text-gray-600">You hate it but it sells. This is unsustainable—you will burn out.</p>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-6 ring-2 ring-emerald-400">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Sweet Spot (Target)</div>
                <h3 className="font-bold text-gray-900 mb-2">High interest, high demand</h3>
                <p className="text-sm text-gray-600">You love it and people pay for it. This is your goal.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Dead Zone (Avoid)</div>
                <h3 className="font-bold text-gray-900 mb-2">Low interest, low demand</h3>
                <p className="text-sm text-gray-600">Nobody cares and nobody pays. Leave this alone.</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Hobby Trap (Avoid)</div>
                <h3 className="font-bold text-gray-900 mb-2">High interest, low demand</h3>
                <p className="text-sm text-gray-600">You love it but nobody will pay. This is a hobby, not a business.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Your goal is the top right quadrant.</strong> Ignore anyone who tells you to pick something from the bottom right.
            </p>
          </div>
        </section>

        {/* SECTION 4 — THE NICHE FORMULA */}
        <section className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Niche Formula</h2>
          <p className="text-lg text-gray-700 mb-6">
            Once you have data from clients, use this formula to turn it into a niche:
          </p>
          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 mb-6">
            <p className="text-center text-xl font-bold text-gray-900">
              Your Skill + Specific Audience + Specific Pain = Great Niche
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Not: "I am a web designer"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">
                  But: "I build simple websites for independent coffee shops who get no bookings from their current site."
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            <em>Every great niche follows this exact structure.</em>
          </p>
        </section>

        {/* SECTION 5 — THE 5 QUESTION STRESS TEST */}
        <section style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>The 5 Question Stress Test</h2>
          <p style={{ color: '#374151', marginBottom: '32px' }}>
            Any niche idea you have must pass all 5 of these questions. If it fails any one of them, pick something else.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {nicheQuestions.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedQuestion(expandedQuestion === idx ? null : idx)}
                style={{
                  width: '100%',
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                  <p style={{ fontWeight: '600', color: '#111827', margin: 0 }}>{item.question}</p>
                  <span style={{ color: '#6b7280', flexShrink: 0 }}>
                    {expandedQuestion === idx ? '−' : '+'}
                  </span>
                </div>
                {expandedQuestion === idx && (
                  <p style={{ color: '#4b5563', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #e5e7eb', margin: 0 }}>
                    {item.explanation}
                  </p>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 6 — REAL NICHE EXAMPLES */}
        <section style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>12 Real Niche Examples</h2>
          <p style={{ color: '#374151', marginBottom: '32px' }}>
            These are all real niches that solopreneurs are running profitably right now.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {nicheExamples.map((example) => (
              <div key={example.slug} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>{example.name}</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '16px' }}>{example.description}</p>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Skill: </span>
                    <span style={{ fontWeight: '600', color: '#111827' }}>{example.skill}</span>
                  </div>
                  <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Audience: </span>
                    <span style={{ fontWeight: '600', color: '#111827' }}>{example.audience}</span>
                  </div>
                  <div style={{ fontSize: '14px' }}>
                    <span style={{ color: '#6b7280' }}>Pain: </span>
                    <span style={{ fontWeight: '600', color: '#111827' }}>{example.pain}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>{example.revenueRange}</span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '9999px' }} className={getRatingColor(example.rating)}>
                    {example.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — COMMON MISTAKES */}
        <section style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '32px' }}>Mistakes to Avoid</h2>
          <div style={{ maxWidth: '896px' }}>
            {[
              'Niching before you have any clients',
              'Picking a niche where nobody is already paying',
              'Niching too narrow too early',
              'Picking something you hate just because it\'s profitable',
              'Listening to advice from people who have never run a solo business',
            ].map((mistake, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '18px', color: '#374151', marginBottom: '12px' }}>
                <span style={{ color: '#ef4444', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✕</span>
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8 — YOUR NEXT STEP */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Next Step</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl">
            <p className="text-lg text-gray-700 mb-6">
              Right now, you are in Phase 1. Stop researching niches. Stop overthinking. Go get your first paying client.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              You will not find your niche in a spreadsheet. You will find it by talking to real people and doing real work.
            </p>
            <Link
              href="/start/first-90-days"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next: The First 90 Days Plan <ChevronRight size={18} />
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <NewsletterCTA />
        </section>
      </div>
    </div>
  );
}
