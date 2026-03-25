'use client';

import Link from 'next/link';
import { getPostsByCategory } from '@/lib/mdx';

const MONEY_FEATURED_ARTICLES = [
  {
    slug: 'pricing-strategy',
    category: 'offer',
    title: 'The Pricing Trap: Why Solopreneurs Undercharge',
    description: 'Master value-based pricing to 2-3x your revenue'
  },
  {
    slug: 'offer-menu-tiers',
    category: 'offer',
    title: 'The Offer Menu: A 3-Tier System to Serve More Customers',
    description: 'Segment customers and capture more revenue with tiered pricing'
  },
  {
    slug: 'service-to-product',
    category: 'offer',
    title: 'From Service to Product: The Decision Framework',
    description: 'Leverage your expertise into scalable revenue streams'
  },
  {
    slug: 'unfair-advantage',
    category: 'offer',
    title: 'Your Unfair Advantage: Positioning Your Weird Background',
    description: 'Turn your unique background into premium positioning'
  },
  {
    slug: 'hyper-niche-positioning',
    category: 'offer',
    title: 'Hyper-Niche Positioning: The Unfair Advantage for Solopreneurs',
    description: 'Command premium prices by serving a specific audience'
  }
];

export default function MoneyPage() {
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
            Money & Revenue
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '16px'
          }}>
            How solopreneurs build profitable, sustainable businesses. From pricing strategy to revenue diversification, here's how to make more money with your solo business.
          </p>
        </div>
      </section>

      {/* FEATURED GUIDE */}
      <section style={{
        padding: '64px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link href="/money/solo-ceiling" style={{ textDecoration: 'none' }}>
          <article style={{
            background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
            padding: '48px',
            borderRadius: '12px',
            border: '2px solid #9333ea',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginBottom: '24px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(147, 51, 234, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <p style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#7c3aed',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              Featured Guide
            </p>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '12px',
              lineHeight: '1.3'
            }}>
              Scale Without Hiring
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Break through your £4k–£6k ceiling. Learn the three levers—productization, premium pricing, automation—to 2-3x revenue without hiring.
            </p>
            <span style={{
              fontSize: '14px',
              color: '#7c3aed',
              fontWeight: '600'
            }}>
              Read full guide →
            </span>
          </article>
        </Link>
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
          Core Revenue Lessons
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {MONEY_FEATURED_ARTICLES.map((article) => (
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
