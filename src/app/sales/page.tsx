'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { salesTopics, trackInfo, SalesTrack } from '@/data/salesTopics';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function SalesPage() {
  const [activeTrack, setActiveTrack] = useState<SalesTrack | null>(null);

  const handleTrackClick = (track: SalesTrack) => {
    setActiveTrack(track);
    const element = document.getElementById(track);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tracks: SalesTrack[] = ['services', 'products', 'local', 'everyone'];

  return (
    <div className="bg-white w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-16 pb-12 border-b border-border px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">PILLAR</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Sales for People Who Hate Selling
          </h1>
          <p className="text-base text-textLight leading-relaxed max-w-2xl">
            If you would rather do great work than pitch yourself, you are in the right place. This is not a sales course. It is a survival guide for solopreneurs who need clients but hate the hustle.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto pt-12 pb-16 px-6">
        {/* FEATURED PILLAR GUIDE */}
        <section className="mb-16">
          <Link href="/sales/selling-with-zero-proof" className="block no-underline">
            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all">
              <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-2">START HERE</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Selling With Zero Proof
              </h2>
              <p className="text-textLight mb-4">
                The starting point for every new solo founder. How to close your first paying client with no portfolio and no testimonials.
              </p>
              <p className="text-xs text-textLight italic">12 min read</p>
            </div>
          </Link>
        </section>

        {/* SELF-SELECTOR BUTTONS */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">What do you sell?</h2>
          <p className="text-textLight mb-8">Jump to the guides that apply to you.</p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {tracks.map((track) => {
              const info = trackInfo[track];
              return (
                <button
                  key={track}
                  onClick={() => handleTrackClick(track)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all ${
                    activeTrack === track
                      ? 'bg-emerald-600 text-white'
                      : 'bg-muted text-textLight hover:bg-gray-200'
                  }`}
                >
                  {info.emoji} {info.title}
                </button>
              );
            })}
          </div>
        </section>

        {/* TRACK SECTIONS */}
        {tracks.map((track) => {
          const info = trackInfo[track];
          const topicsForTrack = salesTopics
            .filter((topic) => topic.track === track)
            .sort((a, b) => a.order - b.order);

          const gridCols =
            track === 'services'
              ? 'grid-cols-1 md:grid-cols-2'
              : track === 'products'
              ? 'grid-cols-1 md:grid-cols-3'
              : track === 'local'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-3';

          return (
            <section key={track} id={track} className="mb-16 scroll-mt-20">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {info.emoji} {info.title}
                </h2>
                <p className="text-textLight">{info.subtitle}</p>
              </div>

              <div className={`grid ${gridCols} gap-6`}>
                {topicsForTrack.map((topic) => (
                  <div
                    key={topic.slug}
                    className="bg-white border border-border rounded-xl p-6 flex flex-col h-full hover:shadow-md hover:border-emerald-300 transition-all"
                  >
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-md ${info.badgeColor}`}>
                        {info.title}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-primary mb-2">{topic.title}</h3>

                    {/* Subtitle */}
                    <p className="text-sm text-accent font-medium mb-2">{topic.subtitle}</p>

                    {/* Description */}
                    <p className="text-sm text-textLight leading-relaxed mb-4 flex-1">{topic.description}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {topic.hasArticle ? (
                        <Link
                          href={`/sales/${topic.slug}`}
                          className="text-sm font-semibold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all no-underline"
                        >
                          Read guide <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <span className="text-xs text-gray-400 italic">Guide coming soon</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {track !== 'everyone' && (
                <hr className="my-16 border-border" />
              )}
            </section>
          );
        })}

        {/* BOTTOM CTA */}
        <section className="mb-16">
          <div className="bg-gray-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Selling is just helping
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              The best solopreneurs do not sell. They listen to problems, explain how they solve them, and let people decide. That is it. No tricks. No pressure. No sleaze.
            </p>
            <Link
              href="/sales/selling-with-zero-proof"
              className="inline-block text-accent font-semibold hover:underline transition-all no-underline"
            >
              Start with Selling With Zero Proof →
            </Link>
          </div>
        </section>
      </div>

      {/* NEWSLETTER CTA */}
      <NewsletterCTA />
    </div>
  );
}
