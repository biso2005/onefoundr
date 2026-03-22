import { notFound } from 'next/navigation';
import Link from 'next/link';
import { businessModels } from '@/data/businessModels';

export function generateStaticParams() {
  return businessModels.map(model => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const model = businessModels.find(m => m.slug === params.slug);
  if (!model) return { title: 'Not Found' };
  
  return {
    title: `${model.name} Business Model — OneFoundr`,
    description: model.description,
  };
}

export default function BusinessModelPage({ params }: { params: { slug: string } }) {
  const model = businessModels.find(m => m.slug === params.slug);
  
  if (!model) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/start/business-models" style={{ color: '#00B894', fontWeight: '500', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            ← Back to Business Models
          </Link>
          
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '700', color: '#2D3436', marginBottom: '24px', lineHeight: '1.2' }}>
            {model.name}
          </h1>
          
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#00B894', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
            Business Model
          </p>
          
          <div style={{ fontSize: '16px', color: '#636E72', lineHeight: '1.8' }}>
            <p>{model.description}</p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', margin: '32px 0', padding: '24px', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                Revenue Potential
              </p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: 0 }}>
                {model.revenueRange}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                Time to First Revenue
              </p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: 0 }}>
                {model.timeToFirstRevenue}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#636E72', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                Scalability
              </p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#2D3436', margin: 0 }}>
                {model.scalability}
              </p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: '#636E72', lineHeight: '1.6', margin: '24px 0' }}>
            <span style={{ fontWeight: '600', color: '#2D3436' }}>Best for:</span> {model.bestFor}
          </p>
        </div>

        <div style={{ backgroundColor: '#FEF3C7', borderRadius: '12px', padding: '24px', marginBottom: '48px', borderLeft: '4px solid #F59E0B' }}>
          <p style={{ margin: 0, color: '#92400E', fontSize: '16px', fontWeight: '500' }}>
            Full guide coming soon.
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#92400E', fontSize: '14px' }}>
            Check back soon for a complete breakdown of this business model, including how to get started, pricing strategies, and real examples.
          </p>
        </div>

        <Link href="/start/business-models" style={{ color: '#00B894', fontWeight: '600', textDecoration: 'none', display: 'inline-block', padding: '12px 24px', backgroundColor: '#F7F7F7', borderRadius: '8px', transition: 'all 0.2s' }} className="hover:bg-gray-100">
          Back to Business Models
        </Link>
      </div>
    </div>
  );
}
