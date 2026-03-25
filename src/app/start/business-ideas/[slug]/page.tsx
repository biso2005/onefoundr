import { notFound } from 'next/navigation';
import { businessIdeas } from '@/data/businessIdeas';

export function generateStaticParams() {
  return businessIdeas
    .filter(idea => idea.hasArticle)
    .map(idea => ({ slug: idea.slug }));
}

export default function BusinessIdeaPage({ params }: { params: { slug: string } }) {
  const idea = businessIdeas.find(i => i.slug === params.slug);
  
  if (!idea) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <a href="/start/business-ideas" className="text-accent hover:text-accentDark font-semibold text-sm mb-6 inline-block">← Back to Business Ideas</a>
      <h1 className="text-4xl font-bold mt-4 mb-6">{idea.name}</h1>
      
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-8 my-12">
        <p className="text-slate-700 font-semibold mb-2">Full guide in development</p>
        <p className="text-slate-600">We're building comprehensive guides for each business idea. In the meantime, explore our foundational resources on starting a business.</p>
        <a href="/start" className="inline-block mt-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accentDark transition-colors font-medium text-sm">Explore Start Resources →</a>
      </div>
    </div>
  );
}
