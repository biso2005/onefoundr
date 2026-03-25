'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessModels, modelScenarios, Scalability } from '@/data/businessModels';
import NewsletterCTA from '@/components/NewsletterCTA';

const iconMap: Record<string, React.ComponentType<any>> = {
  Pencil: LucideIcons.Pencil,
  Briefcase: LucideIcons.Briefcase,
  Package: LucideIcons.Package,
  Download: LucideIcons.Download,
  Code: LucideIcons.Code,
  FileText: LucideIcons.FileText,
  Users: LucideIcons.Users,
  Building: LucideIcons.Building,
};

const scalabilityColors: Record<Scalability, { bg: string; text: string }> = {
  'Low': { bg: '#F3F4F6', text: '#4B5563' },
  'Low–Medium': { bg: '#F3F4F6', text: '#4B5563' },
  'Medium': { bg: '#DBEAFE', text: '#1E40AF' },
  'Medium–High': { bg: '#E9D5FF', text: '#6B21A8' },
  'High': { bg: '#D1FAE5', text: '#065F46' },
  'Very High': { bg: '#A7F3D0', text: '#065F46' },
};

export default function BusinessModelsPage() {
  const [expandedTable, setExpandedTable] = useState(false);

  return (
    <div style={{ backgroundColor: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #E2E8F0' }} className="px-6">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <Breadcrumbs 
              items={[
                { label: 'Start', href: '/start' },
                { label: 'Business Models' }
              ]}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#00B894', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              CATEGORY
            </p>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
            Solo Business Models
          </h1>
          <p style={{ fontSize: '16px', color: '#636E72', lineHeight: '1.6', maxWidth: '700px', margin: 0 }}>
            Not all business models work solo. These 8 do. Compare them side by side and find the one that fits your skills, timeline, and income goals.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }} className="px-6">
        {/* SECTION 1 - COMPARISON TABLE */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>
            Compare All Models at a Glance
          </h2>
          <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '24px' }}>
            Swipe on mobile to see all columns.
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <table style={{ width: '100%', fontSize: '14px', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E2E8F0' }}>
                  <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: '#636E72', fontWeight: '600', letterSpacing: '0.05em' }}>Model</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: '#636E72', fontWeight: '600', letterSpacing: '0.05em' }}>Revenue</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: '#636E72', fontWeight: '600', letterSpacing: '0.05em' }}>First £ in</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: '#636E72', fontWeight: '600', letterSpacing: '0.05em' }}>Scalability</th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', textTransform: 'uppercase', color: '#636E72', fontWeight: '600', letterSpacing: '0.05em' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {businessModels.map((model) => (
                  <tr key={model.slug} style={{ borderBottom: '1px solid #E2E8F0' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                    <td style={{ padding: '12px 16px' }}>
                      <a href={`#${model.slug}`} style={{ color: '#00B894', fontWeight: '600', textDecoration: 'none', cursor: 'pointer' }}>
                        {model.name}
                      </a>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#636E72' }}>{model.revenueRange}</td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#636E72' }}>{model.timeToFirstRevenue}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '6px', backgroundColor: scalabilityColors[model.scalability].bg, color: scalabilityColors[model.scalability].text }}>
                        {model.scalability}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '13px', color: '#636E72' }}>{model.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2 - SCENARIO CARDS */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>
            Which Model Fits You?
          </h2>
          <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '24px' }}>
            Start with your situation, not a business model name.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {modelScenarios.map((scenario) => (
              <div
                key={scenario.question}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  transition: 'all 0.2s',
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2D3436', margin: '0 0 8px 0' }}>
                  {scenario.question}
                </h3>
                <p style={{ fontSize: '13px', color: '#636E72', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  {scenario.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {scenario.recommendedModels.map((modelSlug) => {
                    const model = businessModels.find(m => m.slug === modelSlug);
                    return (
                      <a
                        key={modelSlug}
                        href={`#${modelSlug}`}
                        style={{
                          display: 'inline-block',
                          fontSize: '12px',
                          fontWeight: '500',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          backgroundColor: '#ECFDF5',
                          color: '#065F46',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D1FAE5')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ECFDF5')}
                      >
                        {model?.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 - MODEL CARDS */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: '700', color: '#2D3436', marginBottom: '8px' }}>
            The 8 Solo Business Models
          </h2>
          <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '24px' }}>
            Click any model to read the full breakdown.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {businessModels.map((model) => {
              const IconComponent = iconMap[model.icon];
              return (
                <div
                  key={model.slug}
                  id={model.slug}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00B894';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,184,148,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icon */}
                  {IconComponent && (
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#ECFDF5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComponent size={28} style={{ color: '#00B894' }} />
                    </div>
                  )}

                  {/* Name */}
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2D3436', margin: '16px 0 8px 0' }}>
                    {model.name}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '14px', color: '#636E72', lineHeight: '1.6', margin: '0 0 16px 0', flex: 1 }}>
                    {model.description}
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '16px', borderTop: '1px solid #F0F0F0' }}>
                    <div>
                      <p style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0', fontWeight: '600' }}>Revenue</p>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#2D3436', margin: 0 }}>{model.revenueRange}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0', fontWeight: '600' }}>First £ in</p>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#2D3436', margin: 0 }}>{model.timeToFirstRevenue}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0', fontWeight: '600' }}>Scalability</p>
                      <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', backgroundColor: scalabilityColors[model.scalability].bg, color: scalabilityColors[model.scalability].text }}>
                        {model.scalability}
                      </span>
                    </div>
                  </div>

                  {/* Best For */}
                  <p style={{ fontSize: '13px', color: '#636E72', margin: '16px 0 0 0', fontStyle: 'italic' }}>
                    <span style={{ fontWeight: '600', fontStyle: 'normal' }}>Best for:</span> {model.bestFor}
                  </p>

                  {/* CTA */}
                  <div style={{ paddingTop: '16px', borderTop: '1px solid #F0F0F0', marginTop: '16px' }}>
                    {model.hasArticle ? (
                      <Link
                        href={`/start/business-models/${model.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#00B894',
                          textDecoration: 'none',
                          transition: 'gap 0.2s',
                        }}
                      >
                        Read the full guide <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0, fontStyle: 'italic' }}>
                        Full guide coming soon
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 - BOTTOM CTA */}
        <section style={{ backgroundColor: '#F7F7F7', borderRadius: '12px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2D3436', marginBottom: '8px' }}>
            Not sure which model to pick?
          </h3>
          <p style={{ fontSize: '14px', color: '#636E72', lineHeight: '1.6', margin: '0 0 16px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Start by validating your idea. Once you know there is real demand, the right model usually becomes obvious.
          </p>
          <Link
            href="/start/idea-validation"
            style={{
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#00B894',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Validate your idea →
          </Link>
        </section>
      </div>

      {/* Newsletter CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '48px', paddingBottom: '48px' }} className="px-6">
        <div style={{ backgroundColor: 'rgba(0, 184, 148, 0.05)', borderRadius: '16px', padding: '32px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#2D3436', marginBottom: '12px' }}>
            Ready to build solo?
          </h2>
          <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px', margin: '12px auto 24px' }}>
            Get one actionable strategy every week — designed for founders who do it all alone.
          </p>
          <NewsletterCTA />
        </div>
      </section>
    </div>
  );
}
