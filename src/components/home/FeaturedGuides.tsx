import Link from "next/link";
import { getFeaturedPosts } from "@/lib/mdx";
import FeaturedGuidesClient from "./FeaturedGuidesClient";

const DEFAULT_FEATURED = {
  featured: {
    category: "OFFER",
    title: "The Pricing Trap: Why Solopreneurs Undercharge (And How to Stop)",
    description: "You're leaving money on the table. Here's why—and the framework to fix it without losing customers.",
    readTime: "11 min read",
    href: "/offer/pricing-strategy"
  },
  small: [
    {
      category: "MARKETING",
      emoji: "📣",
      title: "The Content Repurposing Gold Mine: Turn 1 Article Into 15+ Assets",
      readTime: "10 min read",
      href: "/marketing/repurposing-content"
    },
    {
      category: "SYSTEMS",
      emoji: "⚙️",
      title: "Building Your AI Operations Team: A Solopreneur's Playbook",
      readTime: "12 min read",
      href: "/systems/ai-operations-team"
    },
    {
      category: "MINDSET",
      emoji: "🧠",
      title: "Energy, Not Time: The Real Bottleneck in Your Solopreneur Business",
      readTime: "9 min read",
      href: "/mindset/energy-management"
    }
  ]
};

export default async function FeaturedGuides() {
  const featuredPosts = getFeaturedPosts();
  
  // Use real featured posts if available, otherwise fall back to defaults
  let featured = DEFAULT_FEATURED.featured;
  let small = DEFAULT_FEATURED.small;
  
  // Filter posts with missing properties and ensure safe access
  const safeFeaturedPosts = featuredPosts.filter(post => post && post.frontmatter);
  
  if (safeFeaturedPosts && safeFeaturedPosts.length >= 4) {
    featured = {
      category: (safeFeaturedPosts[0].frontmatter?.categoryLabel || safeFeaturedPosts[0].category || "GENERAL").toUpperCase(),
      title: safeFeaturedPosts[0].frontmatter?.title || "Untitled",
      description: safeFeaturedPosts[0].frontmatter?.description || "",
      readTime: safeFeaturedPosts[0].frontmatter?.readTime || "5 min read",
      href: `/${safeFeaturedPosts[0].category}/${safeFeaturedPosts[0].slug}`
    };
    
    small = safeFeaturedPosts.slice(1, 4).map(post => ({
      category: (post.frontmatter?.categoryLabel || post.category || "GENERAL").toUpperCase(),
      emoji: "📚",
      title: post.frontmatter?.title || "Untitled",
      readTime: post.frontmatter?.readTime || "5 min read",
      href: `/${post.category}/${post.slug}`
    }));
  }
  return (
    <section style={{ backgroundColor: "#FFFFFF", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }} className="md:flex-row flex-col">
          <div>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "8px" }}>
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
              color: "#059669",
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
              color: "#059669",
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
