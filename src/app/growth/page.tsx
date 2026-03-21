'use client';

import Link from 'next/link';

const GROWTH_FEATURED_ARTICLES = [
  {
    slug: 'account-based-marketing',
    category: 'marketing',
    title: 'Account-Based Marketing: Land Your Ideal Clients',
    description: 'Stop hoping strangers find you. Target your 20 ideal customers deliberately'
  },
  {
    slug: 'automation-trap',
    category: 'systems',
    title: 'The Automation Trap: Automate the Right Things',
    description: 'Avoid automation mistakes that cost you client relationships'
  },
  {
    slug: 'ai-operations-team',
    category: 'systems',
    title: 'The AI-Powered Operations Team',
    description: 'Build systems that scale without hiring. Use AI to multiply your output'
  },
  {
    slug: 'service-to-product',
    category: 'offer',
    title: 'From Service to Product: The Decision Framework',
    description: 'When and how to leverage your expertise into scalable products'
  },
  {
    slug: 'unfair-advantage',
    category: 'offer',
    title: 'Your Unfair Advantage: Leverage Your Weird Background',
    description: 'Position yourself for premium growth by being uniquely you'
  },
  {
    slug: 'done-over-perfect',
    category: 'systems',
    title: 'Done Over Perfect: Why Your MVP Should Ship This Week',
    description: 'Speed of iteration beats perfection. Shipping fast compounds growth'
  }
];

export default function GrowthPage() {
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
            Growth & Scaling
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            Scale your solo business without burning out or hiring a team. Strategy, systems, and sustainable growth for solopreneurs who want to reach 6-7 figures without complexity.
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
          Scaling Without Hiring
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {GROWTH_FEATURED_ARTICLES.map((article) => (
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

      {/* COMING SOON SECTION */}
      <section style={{
        padding: '64px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid #E2E8F0'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '24px'
        }}>
          Coming Soon
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          More articles on sustainable growth, building systems that compound, and scaling revenue without complexity. Deep dives into strategic positioning for premium markets.
        </p>
      </section>
    </main>
  );
}
