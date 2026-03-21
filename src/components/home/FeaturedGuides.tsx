import Link from "next/link";
import { getFeaturedPosts } from "@/lib/mdx";
import FeaturedGuidesClient from "./FeaturedGuidesClient";

const DEFAULT_FEATURED = {
  featured: {
    category: "TOOLS & AI",
    title: "The Only 10 Tools You Actually Need as a Solopreneur",
    description: "A curated list of essential tools to run your entire solo business — from website to invoicing to automation.",
    readTime: "12 min read",
    href: "/tools/tech-stack"
  },
  small: [
    {
      category: "MARKETING",
      emoji: "📣",
      title: "Content Marketing for Solopreneurs: Minimum Effort, Maximum Results",
      readTime: "8 min read",
      href: "/marketing/content-marketing"
    },
    {
      category: "OFFER",
      emoji: "📦",
      title: "Pricing Strategy for Solopreneurs: The Complete Playbook",
      readTime: "10 min read",
      href: "/offer/pricing-strategy"
    },
    {
      category: "SYSTEMS",
      emoji: "⚙️",
      title: "The Solopreneur Operating System: Systemize Every Part of Your Business",
      readTime: "15 min read",
      href: "/systems"
    }
  ]
};

export default async function FeaturedGuides() {
  const featuredPosts = getFeaturedPosts();
  
  // Use real featured posts if available, otherwise fall back to defaults
  let featured = DEFAULT_FEATURED.featured;
  let small = DEFAULT_FEATURED.small;
  
  if (featuredPosts.length >= 4) {
    featured = {
      category: featuredPosts[0].frontmatter.categoryLabel.toUpperCase(),
      title: featuredPosts[0].frontmatter.title,
      description: featuredPosts[0].frontmatter.description,
      readTime: featuredPosts[0].frontmatter.readTime,
      href: `/${featuredPosts[0].category}/${featuredPosts[0].slug}`
    };
    
    small = featuredPosts.slice(1, 4).map(post => ({
      category: post.frontmatter.categoryLabel.toUpperCase(),
      emoji: "📚",
      title: post.frontmatter.title,
      readTime: post.frontmatter.readTime,
      href: `/${post.category}/${post.slug}`
    }));
  }
  return (
    <section style={{ backgroundColor: "#FFFFFF", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }} className="md:flex-row flex-col">
          <div>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
              Learn
            </p>
            <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", margin: 0 }}>
              Most Popular Guides
            </h2>
          </div>
          <Link
            href="/start"
            style={{
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "text-decoration 0.2s"
            }}
            className="hidden md:block hover:underline"
          >
            View All Guides →
          </Link>
        </div>

        <FeaturedGuidesClient featured={featured} small={small} />

        <div style={{ textAlign: "center", marginTop: "24px" }} className="md:hidden">
          <Link
            href="/start"
            style={{
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              textDecoration: "none",
              transition: "text-decoration 0.2s"
            }}
            className="hover:underline"
          >
            View All Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
