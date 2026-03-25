'use client';

import Link from 'next/link';

const PRODUCTIVITY_FEATURED_ARTICLES = [
  {
    slug: 'energy-management',
    category: 'mindset',
    title: 'Energy, Not Time: The Real Bottleneck',
    description: 'Your real constraint is energy, not hours. Master your energy budget'
  },
  {
    slug: 'productivity-burnout',
    category: 'mindset',
    title: 'The Productivity Paradox: Why Systems Burn You Out',
    description: 'Stop optimizing tasks. Build systems that respect your capacity'
  },
  {
    slug: 'automation-trap',
    category: 'systems',
    title: 'The Automation Trap: What to Automate and What Not To',
    description: 'Don\'t automate everything. Know what should stay manual for sanity'
  },
  {
    slug: 'ai-operations-team',
    category: 'systems',
    title: 'The AI-Powered Operations Team',
    description: 'Multiply your output without more hours. Use AI as your assistant'
  },
  {
    slug: 'done-over-perfect',
    category: 'systems',
    title: 'Done Over Perfect: Why Your MVP Should Ship This Week',
    description: 'Stop the perfectionism loop. Ship, learn, iterate, improve'
  },
  {
    slug: 'against-imposter-syndrome',
    category: 'mindset',
    title: 'Against Imposter Syndrome: You Don\'t Have Fraud to Hide',
    description: 'Your self-doubt is costing you money and burning you out. Stop it'
  }
];

export default function ProductivityPage() {
  return (
    <main style={{ width: '100%' }}>
      {/* HERO SECTION */}
      <section style={{
        backgroundColor: '#F9F9F9',
        padding: '80px 24px',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Productivity & Systems
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            Work less, produce more. Build systems and protect your energy so you can sustain your solo business long-term without burning out.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLES GRID */}
      <section style={{
        padding: '64px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          marginBottom: '48px'
        }}>
          Work Smarter, Not Harder
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {PRODUCTIVITY_FEATURED_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.category}/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article style={{
                padding: '24px',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#059669';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#2D3436',
                  flex: 1
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  {article.description}
                </p>
                <span style={{
                  fontSize: '13px',
                  color: '#059669',
                  fontWeight: '500'
                }}>
                  Read article →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>


    </main>
  );
}
