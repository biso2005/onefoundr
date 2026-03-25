import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXComponents } from '@/components/MDXComponents';
import { mdxSerializeOptions } from '@/lib/mdx-options';
import { businessModels } from '@/data/businessModels';

interface BusinessModelFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  author: string;
  tags: string[];
}

interface BusinessModelPost {
  frontmatter: BusinessModelFrontmatter;
  content: string;
  slug: string;
}

function getBusinessModelBySlug(slug: string): BusinessModelPost | null {
  try {
    const contentDirectory = path.join(process.cwd(), 'content', 'start', 'business-models');
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      frontmatter: data as BusinessModelFrontmatter,
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading business model ${slug}:`, error);
    return null;
  }
}

function getAllBusinessModelSlugs(): string[] {
  try {
    const contentDirectory = path.join(process.cwd(), 'content', 'start', 'business-models');
    
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const files = fs.readdirSync(contentDirectory).filter(f => f.endsWith('.mdx'));
    return files.map(f => f.replace('.mdx', ''));
  } catch (error) {
    console.error('Error reading business model slugs:', error);
    return [];
  }
}

// Slugs that have dedicated page.tsx files — must not be pre-rendered by [slug]
const DEDICATED_PAGE_SLUGS = ['consulting', 'freelancing', 'digital-products', 'productized-services', 'saas-software'];

export function generateStaticParams() {
  const mdxSlugs = getAllBusinessModelSlugs();
  const dataSlugs = businessModels
    .filter(model => !DEDICATED_PAGE_SLUGS.includes(model.slug))
    .map(model => ({ slug: model.slug }));
  
  // Combine MDX files (excluding dedicated pages) with remaining data slugs
  const allSlugs = new Map();
  dataSlugs.forEach(item => allSlugs.set(item.slug, item));
  mdxSlugs
    .filter(slug => !DEDICATED_PAGE_SLUGS.includes(slug))
    .forEach(slug => {
      if (!allSlugs.has(slug)) {
        allSlugs.set(slug, { slug });
      }
    });
  
  return Array.from(allSlugs.values());
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBusinessModelBySlug(params.slug);
  
  if (post) {
    return {
      title: `${post.frontmatter.title}`,
      description: post.frontmatter.description,
    };
  }

  // Fallback to data structure
  const model = businessModels.find(m => m.slug === params.slug);
  if (model) {
    return {
      title: `${model.name} Business Model — OneFoundr`,
      description: model.description,
    };
  }
  
  return { title: 'Not Found' };
}

export default async function BusinessModelPage({ params }: { params: { slug: string } }) {
  const post = getBusinessModelBySlug(params.slug);
  
  if (post) {
    return (
      <article className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link 
            href="/start/business-models" 
            className="text-accent hover:text-accentDark font-semibold text-sm mb-6 inline-flex items-center gap-2"
          >
            ← Back to Business Models
          </Link>
          
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-text">
              {post.frontmatter.title}
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              {post.frontmatter.description}
            </p>
            <div className="flex gap-6 text-sm text-gray-700">
              <span>📅 {new Date(post.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>⏱️ {post.frontmatter.readTime}</span>
              <span>✍️ {post.frontmatter.author}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote 
              source={post.content} 
              components={MDXComponents}
              options={mdxSerializeOptions}
            />
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/start/business-models" 
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accentDark transition-colors font-semibold"
            >
              ← Back to All Models
            </Link>
          </footer>
        </div>
      </article>
    );
  }

  // Fallback to data structure for backward compatibility
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

        <Link href="/start/business-models" style={{ color: '#00B894', fontWeight: '600', textDecoration: 'none', display: 'inline-block', padding: '12px 24px', backgroundColor: '#F7F7F7', borderRadius: '8px', transition: 'all 0.2s' }} className="hover:bg-gray-100">
          Back to Business Models
        </Link>
      </div>
    </div>
  );
}
