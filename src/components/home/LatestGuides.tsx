"use client";

import Link from "next/link";

const LATEST_GUIDES = [
  {
    category: "START",
    title: "47 One-Person Business Ideas That Actually Work in 2024",
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

const FILTER_TABS = ["All", "Start", "Offer", "Marketing", "Sales", "Systems", "Tools"];

export default function LatestGuides() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }} className="md:flex-row flex-col">
          <div>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
              Latest
            </p>
            <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", margin: 0 }}>
              Latest Guides
            </h2>
          </div>

          {/* Filter Tabs - Desktop Only */}
          <div style={{ display: "flex", gap: "24px" }} className="hidden md:flex">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                style={{
                  fontSize: "14px",
                  color: tab === "All" ? "#00B894" : "#636E72",
                  fontWeight: tab === "All" ? "500" : "400",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  textTransform: "capitalize",
                  borderBottom: tab === "All" ? "2px solid #00B894" : "none",
                  paddingBottom: tab === "All" ? "4px" : "0"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {LATEST_GUIDES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              style={{
                display: "block",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00B894";
                el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#E2E8F0";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image Placeholder */}
              <div style={{ height: "180px", backgroundColor: "#F7F7F7", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#636E72", fontWeight: "500", margin: 0 }}>
                  {article.category}
                </p>
              </div>

              {/* Content Area */}
              <div style={{ padding: "24px" }}>
                {/* Top Row: Category + Read Time */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0" }}>
                  <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                    {article.category}
                  </p>
                  <p style={{ fontSize: "12px", color: "#636E72", margin: 0 }}>
                    {article.readTime}
                  </p>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginTop: "12px", marginBottom: "0", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginTop: "8px", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {article.excerpt}
                </p>

                {/* Read Link */}
                <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0 }}>
                  Read Guide →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/start"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              backgroundColor: "#00B894",
              color: "white",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#009B7B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#00B894";
            }}
          >
            View All Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
