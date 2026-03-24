import { getAllPosts } from "@/lib/mdx";
import LatestGuidesClient from "./LatestGuidesClient";

const DEFAULT_LATEST_GUIDES = [
  {
    category: "START",
    title: "The AI-Powered Solopreneur Launchpad: From Idea to First Dollar in 30 Days",
    excerpt: "The 30-day rapid launch framework for solopreneurs. Validate, position, launch, and close your first customers—using AI to compress what normally takes 90 days.",
    readTime: "14 min read",
    href: "/start/ai-launch-30days"
  },
  {
    category: "OFFER",
    title: "The Pricing Trap: Why Solopreneurs Undercharge (And How to Stop)",
    excerpt: "You're leaving money on the table. Here's why—and the framework to fix it without losing customers.",
    readTime: "11 min read",
    href: "/offer/pricing-strategy"
  },
  {
    category: "MARKETING",
    title: "SEO for Solopreneurs: Zero-Click Optimization & E-E-A-T",
    excerpt: "The SEO strategy built for one-person teams. Master zero-click searches, E-E-A-T signals, and niche authority—the type that actually converts.",
    readTime: "13 min read",
    href: "/marketing/seo-2026"
  },
  {
    category: "SALES",
    title: "The Solopreneur's Guide to AI-Powered Cold Outreach: Land Clients Without Warm Introductions",
    excerpt: "Generic cold outreach often underperforms. AI-powered personalized cold outreach performs significantly better. Here's the exact system.",
    readTime: "10 min read",
    href: "/sales/ai-cold-outreach"
  },
  {
    category: "SYSTEMS",
    title: "Building Your AI Operations Team: A Solopreneur's Playbook",
    excerpt: "You don't need to hire. You need to architect. Meet the 3-tier AI operations team that replaces 2-4 full-time employees for under $100/month.",
    readTime: "12 min read",
    href: "/systems/ai-operations-team"
  },
  {
    category: "TOOLS",
    title: "Building Your AI Agent: A Step-by-Step Guide for Solopreneurs",
    excerpt: "Stop hiring support staff. Build an AI agent that handles customer inquiries 24/7, learns from interactions, and gets smarter every day.",
    readTime: "11 min read",
    href: "/tools/building-ai-agent"
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
