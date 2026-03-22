import { getAllPosts } from "@/lib/mdx";
import LatestGuidesClient from "./LatestGuidesClient";

const DEFAULT_LATEST_GUIDES = [
  {
    category: "START",
    title: "One-Person Business Ideas That Actually Work",
    excerpt: "A curated list of proven business models for solopreneurs, categorized by skill set and revenue potential.",
    readTime: "12 min read",
    href: "/start/business-ideas"
  },
  {
    category: "TOOLS",
    title: "15 AI Tools That Replace a Team for Solopreneurs",
    excerpt: "The best AI tools for content, marketing, operations, and customer service — tested and ranked.",
    readTime: "10 min read",
    href: "/tools/ai-tools"
  },
  {
    category: "MARKETING",
    title: "SEO for Solopreneurs: How to Rank Without a Team",
    excerpt: "A practical SEO strategy designed for one-person businesses with limited time and budget.",
    readTime: "14 min read",
    href: "/marketing/seo"
  },
  {
    category: "OFFER",
    title: "Productized Services: How to Build One That Scales",
    excerpt: "Turn your freelance skills into a scalable, productized service with predictable revenue.",
    readTime: "11 min read",
    href: "/offer/productized-services"
  },
  {
    category: "SYSTEMS",
    title: "How to Create SOPs for Your Solo Business",
    excerpt: "Document every process so your business runs smoothly — even when you take a day off.",
    readTime: "8 min read",
    href: "/systems/sops"
  },
  {
    category: "SALES",
    title: "How to Get Your First 10 Clients as a Solopreneur",
    excerpt: "Proven strategies to land your first paying clients without a sales team or big budget.",
    readTime: "9 min read",
    href: "/sales/getting-clients"
  }
];

const FILTER_TABS = ["All", "Start", "Offer", "Marketing", "Sales", "Systems"];

export default async function LatestGuides() {
  const allPosts = getAllPosts();
  
  // Use real posts if available (up to 6), otherwise fall back to defaults
  let latestGuides = DEFAULT_LATEST_GUIDES;
  
  if (allPosts && allPosts.length > 0) {
    // Filter out posts with missing critical properties and map with safe fallbacks
    latestGuides = allPosts
      .filter(post => post && post.frontmatter)
      .slice(0, 6)
      .map(post => ({
        category: (post.frontmatter?.categoryLabel || post.category || "GENERAL").toUpperCase(),
        title: post.frontmatter?.title || "Untitled",
        excerpt: post.frontmatter?.description || "",
        readTime: post.frontmatter?.readTime || "5 min read",
        href: `/${post.category}/${post.slug}`
      }));
  }

  return <LatestGuidesClient articles={latestGuides} />;
}
