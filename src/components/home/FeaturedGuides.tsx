"use client";

import Link from "next/link";

const FEATURED_GUIDES = {
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

export default function FeaturedGuides() {
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
            className="hidden md:block"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
            }}
          >
            View All Guides →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px", alignItems: "flex-start" }} className="md:grid-cols-[55%_45%] grid-cols-1">
          <Link
            href={FEATURED_GUIDES.featured.href}
            style={{
              display: "block",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              overflow: "hidden",
              textDecoration: "none",
              transition: "box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <div style={{ height: "220px", background: "linear-gradient(135deg, rgba(0, 184, 148, 0.1) 0%, rgba(0, 184, 148, 0.05) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                {FEATURED_GUIDES.featured.category}
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginTop: "8px", margin: 0 }}>
                Featured
              </p>
            </div>

            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                {FEATURED_GUIDES.featured.category}
              </p>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginTop: "8px", marginBottom: 0 }}>
                {FEATURED_GUIDES.featured.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#636E72", marginTop: "8px", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {FEATURED_GUIDES.featured.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#636E72" }}>
                  {FEATURED_GUIDES.featured.readTime}
                </span>
                <span style={{ fontSize: "14px", color: "#00B894", fontWeight: "500" }}>
                  Read Guide →
                </span>
              </div>
            </div>
          </Link>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FEATURED_GUIDES.small.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                style={{
                  display: "flex",
                  padding: "16px",
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.2s"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                <div style={{ width: "80px", minWidth: "80px", height: "80px", backgroundColor: "#F7F7F7", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }} className="md:w-20 md:h-20 sm:w-16 sm:h-16">
                  {guide.emoji}
                </div>

                <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                  <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                    {guide.category}
                  </p>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2D3436", marginTop: "4px", marginBottom: 0 }}>
                    {guide.title}
                  </h4>
                  <p style={{ fontSize: "12px", color: "#636E72", marginTop: "4px", margin: 0 }}>
                    {guide.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
            }}
          >
            View All Guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
