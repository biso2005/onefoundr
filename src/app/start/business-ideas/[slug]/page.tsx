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
      <h1 className="text-3xl font-bold">{idea.name}</h1>
      <p className="text-gray-600 mt-4">Full guide for "{idea.name}" coming soon.</p>
    </div>
  );
}
