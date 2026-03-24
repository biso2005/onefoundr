import { notFound } from 'next/navigation';
import Link from 'next/link';
import { salesTopics } from '@/data/salesTopics';

export function generateStaticParams() {
  return salesTopics.map(topic => ({ slug: topic.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = salesTopics.find(t => t.slug === params.slug);
  if (!topic) return { title: 'Not Found' };
  
  return {
    title: `${topic.title} — OneFoundr`,
    description: topic.description,
  };
}

export default function SalesGuidePage({ params }: { params: { slug: string } }) {
  const topic = salesTopics.find(t => t.slug === params.slug);
  
  if (!topic) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link 
          href="/sales" 
          className="text-accent font-semibold mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all no-underline"
        >
          ← Back to Sales Guides
        </Link>
        
        <div className="mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">SALES GUIDE</p>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {topic.title}
          </h1>
          
          <p className="text-base text-textLight leading-relaxed">
            {topic.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 p-6 bg-gray-50 rounded-lg">
            <div>
              <p className="text-xs font-semibold text-textLight uppercase tracking-wider mb-2">
                Reading Time
              </p>
              <p className="text-lg font-semibold text-primary">8 min read</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-textLight uppercase tracking-wider mb-2">
                Category
              </p>
              <p className="text-lg font-semibold text-primary">{topic.subtitle}</p>
            </div>
          </div>
        </div>

        {/* CONTENT PLACEHOLDER */}
        <article className="prose prose-sm md:prose-base max-w-none mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-900 text-sm">
              <strong>Coming soon:</strong> This guide is currently being written. Sign up to be notified when it's published.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">What You'll Learn</h2>
          <ul className="text-textLight space-y-2">
            <li>The fundamentals of {topic.title.toLowerCase()}</li>
            <li>How to apply it to your solo business</li>
            <li>Common mistakes to avoid</li>
            <li>Real examples from successful solopreneurs</li>
          </ul>

          <p className="text-textLight mt-8">
            More details coming soon. Check back soon or subscribe to receive updates when new guides are published.
          </p>
        </article>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200 text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">Want to be notified when this is ready?</h2>
          <p className="text-textLight mb-4">Join other solopreneurs building sustainable solo businesses.</p>
          <Link 
            href="/#newsletter" 
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all no-underline"
          >
            Subscribe to Updates
          </Link>
        </div>
      </div>
    </div>
  );
}
