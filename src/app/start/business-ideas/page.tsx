'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Coins, ArrowRight } from 'lucide-react';
import { businessIdeas, ideaCategories, ideaDifficulties } from '@/data/businessIdeas';
import type { IdeaCategory, Difficulty } from '@/data/businessIdeas';

const categoryColors: Record<IdeaCategory, { bg: string; text: string; border: string }> = {
  'Local Services': { bg: '#EFF6FF', text: '#1E40AF', border: '#93C5FD' },
  'Digital Services': { bg: '#F3E8FF', text: '#6B21A8', border: '#E9D5FF' },
  'Physical Products': { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D' },
  'Digital Products & Online': { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0' },
  'Rental & Resale': { bg: '#FCE7F3', text: '#831843', border: '#FBCFE8' },
};

const difficultyColors: Record<Difficulty, { bg: string; text: string }> = {
  'Beginner': { bg: '#F0FDF4', text: '#166534' },
  'Intermediate': { bg: '#FFFBEB', text: '#92400E' },
  'Advanced': { bg: '#FEF2F2', text: '#991B1B' },
};

export default function BusinessIdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All Levels');

  const filteredIdeas = businessIdeas.filter((idea) => {
    const categoryMatch = selectedCategory === 'All' || idea.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All Levels' || idea.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #E2E8F0' }} className="px-6">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#00B894', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              CATEGORY
            </p>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '700', color: '#2D3436', marginBottom: '16px', lineHeight: '1.2' }}>
            One-Person Business Ideas
          </h1>
          <p style={{ fontSize: '16px', color: '#636E72', lineHeight: '1.6', maxWidth: '600px', margin: 0 }}>
            41+ profitable ideas you can start alone. Low startup costs, proven demand, and revenue possible in 90 days.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '48px', paddingBottom: '64px' }} className="px-6">
        {/* Category Filters */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#2D3436', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Category
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedCategory === 'All' ? '#00B894' : '#F7F7F7',
                color: selectedCategory === 'All' ? 'white' : '#636E72',
                transition: 'all 0.2s',
              }}
            >
              All Categories
            </button>
            {ideaCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === category ? '#00B894' : '#F7F7F7',
                  color: selectedCategory === category ? 'white' : '#636E72',
                  transition: 'all 0.2s',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filters */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: '#2D3436', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Difficulty Level
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={() => setSelectedDifficulty('All Levels')}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedDifficulty === 'All Levels' ? '#00B894' : '#F7F7F7',
                color: selectedDifficulty === 'All Levels' ? 'white' : '#636E72',
                transition: 'all 0.2s',
              }}
            >
              All Levels
            </button>
            {ideaDifficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: selectedDifficulty === diff ? '#00B894' : '#F7F7F7',
                  color: selectedDifficulty === diff ? 'white' : '#636E72',
                  transition: 'all 0.2s',
                }}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p style={{ fontSize: '14px', color: '#636E72', marginBottom: '32px' }}>
          Showing <span style={{ fontWeight: '600', color: '#2D3436' }}>{filteredIdeas.length}</span> of{' '}
          <span style={{ fontWeight: '600', color: '#2D3436' }}>{businessIdeas.length}</span> ideas
        </p>

        {/* Ideas Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {filteredIdeas.map((idea) => {
            const categoryColor = categoryColors[idea.category];

            return (
              <div
                key={idea.slug}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = categoryColor.border;
                  el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = '#E2E8F0';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Category Badge */}
                <div style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: '600',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      backgroundColor: categoryColor.bg,
                      color: categoryColor.text,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {idea.category}
                  </span>
                </div>

                {/* Name */}
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2D3436', margin: '0 0 8px 0' }}>
                  {idea.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '14px', color: '#636E72', lineHeight: '1.5', margin: '0 0 16px 0', flex: 1 }}>
                  {idea.description}
                </p>

                {/* Revenue & Cost Row */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <TrendingUp size={14} style={{ color: '#00B894' }} />
                    <span style={{ fontSize: '13px', color: '#636E72' }}>{idea.revenueRange}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Coins size={14} style={{ color: '#9CA3AF' }} />
                    <span style={{ fontSize: '13px', color: '#636E72' }}>{idea.startupCost}</span>
                  </div>
                </div>

                {/* Difficulty + CTA Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F0F0F0' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      backgroundColor: difficultyColors[idea.difficulty].bg,
                      color: difficultyColors[idea.difficulty].text,
                    }}
                  >
                    {idea.difficulty}
                  </span>
                  {idea.hasArticle ? (
                    <Link
                      href={`/start/business-ideas/${idea.slug}`}
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#00B894',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'gap 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.gap = '10px';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.gap = '6px';
                      }}
                    >
                      Read <ArrowRight size={14} style={{ transition: 'transform 0.2s' }} />
                    </Link>
                  ) : (
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontStyle: 'italic' }}>Coming soon</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredIdeas.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: '64px', paddingBottom: '64px' }}>
            <p style={{ fontSize: '16px', color: '#636E72', marginBottom: '24px' }}>No ideas match your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All Levels');
              }}
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#00B894',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '1';
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
