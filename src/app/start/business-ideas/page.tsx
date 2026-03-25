'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GrowthRocket, Coins } from "@/components/icons";
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessIdeas, ideaCategories, ideaDifficulties } from '@/data/businessIdeas';
import type { IdeaCategory, Difficulty } from '@/data/businessIdeas';

const categoryClasses: Record<IdeaCategory, { badge: string; hoverBorder: string }> = {
  'Local Services':              { badge: 'bg-blue-50 text-blue-800',      hoverBorder: 'hover:border-blue-300' },
  'Digital Services':            { badge: 'bg-purple-50 text-purple-800',  hoverBorder: 'hover:border-purple-300' },
  'Physical Products':           { badge: 'bg-amber-50 text-amber-800',    hoverBorder: 'hover:border-amber-300' },
  'Digital Products & Online':   { badge: 'bg-emerald-50 text-emerald-800', hoverBorder: 'hover:border-emerald-300' },
  'Rental & Resale':             { badge: 'bg-pink-50 text-pink-800',      hoverBorder: 'hover:border-pink-300' },
};

const difficultyClasses: Record<Difficulty, string> = {
  'Beginner':     'bg-green-50 text-green-800',
  'Intermediate': 'bg-amber-50 text-amber-800',
  'Advanced':     'bg-red-50 text-red-800',
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
    <div className="bg-white w-full min-h-screen">

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 border-b border-border px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs 
            items={[
              { label: 'Start', href: '/start' },
              { label: 'Business Ideas' }
            ]}
          />
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">CATEGORY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            One-Person Business Ideas
          </h1>
          <p className="text-base text-textLight leading-relaxed max-w-xl">
            {businessIdeas.length}+ profitable ideas you can start alone. Low startup costs, proven demand, and revenue possible in 90 days.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto pt-12 pb-16 px-6">

        {/* Category Filters */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Category</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all ${
                selectedCategory === 'All'
                  ? 'bg-accent text-white'
                  : 'bg-muted text-textLight hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {ideaCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-muted text-textLight hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filters */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Difficulty Level</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedDifficulty('All Levels')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all ${
                selectedDifficulty === 'All Levels'
                  ? 'bg-accent text-white'
                  : 'bg-muted text-textLight hover:bg-gray-200'
              }`}
            >
              All Levels
            </button>
            {ideaDifficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-accent text-white'
                    : 'bg-muted text-textLight hover:bg-gray-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-textLight mb-8">
          Showing <span className="font-semibold text-primary">{filteredIdeas.length}</span> of{' '}
          <span className="font-semibold text-primary">{businessIdeas.length}</span> ideas
        </p>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIdeas.map((idea) => {
            const cc = categoryClasses[idea.category];
            return (
              <div
                key={idea.slug}
                className={`bg-white border border-border rounded-xl p-6 flex flex-col h-full transition-all hover:shadow-sm hover:border-gray-300 ${cc.hoverBorder}`}
              >
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-md uppercase tracking-wide ${cc.badge}`}>
                    {idea.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base md:text-base font-semibold text-primary mb-2 leading-snug">{idea.name}</h3>

                {/* Description */}
                <p className="text-sm text-textLight leading-relaxed mb-4 flex-1">{idea.description}</p>

                {/* Revenue & Cost Row */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <GrowthRocket size={14} color="#00B894" />
                    <span className="text-[13px] text-textLight">{idea.revenueRange}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Coins size={14} color="#9CA3AF" />
                    <span className="text-[13px] text-textLight">{idea.startupCost}</span>
                  </div>
                </div>

                {/* Difficulty + CTA Row */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-md ${difficultyClasses[idea.difficulty]}`}>
                    {idea.difficulty}
                  </span>
                  {idea.hasArticle ? (
                    <Link
                      href={`/start/business-ideas/${idea.slug}`}
                      className="text-[13px] font-semibold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      Read <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-400 italic">Coming soon</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base text-textLight mb-6">No ideas match your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All Levels');
              }}
              className="text-sm font-semibold text-accent bg-transparent border-none cursor-pointer hover:opacity-75 transition-opacity"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
