"use client";

import Link from "next/link";

const JOURNEY_CARDS = [
  {
    emoji: "💡",
    title: "Start Solo",
    description: "Find your idea, validate it, and choose a business model that works for one person.",
    href: "/start",
    tag: "STEP 1"
  },
  {
    emoji: "📦",
    title: "Build Your Offer",
    description: "Turn your skills into sellable products and services people actually want to buy.",
    href: "/offer",
    tag: "STEP 2"
  },
  {
    emoji: "📣",
    title: "Get Found",
    description: "Content marketing, SEO, personal branding, and audience building — the solo way.",
    href: "/marketing",
    tag: "STEP 3"
  },
  {
    emoji: "🤝",
    title: "Win Clients",
    description: "Sell confidently without being pushy. Funnels, calls, proposals, and closing.",
    href: "/sales",
    tag: "STEP 4"
  },
  {
    emoji: "⚙️",
    title: "Build Systems",
    description: "SOPs, workflows, automation, and operations that run your business smoothly.",
    href: "/systems",
    tag: "STEP 5"
  },
  {
    emoji: "🛠️",
    title: "Tools & AI",
    description: "The essential tech stack and AI tools for running a one-person business efficiently.",
    href: "/tools",
    tag: "STEP 6"
  }
];

export default function Home() {
  return (
    <>
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Two-column grid: text on left (60%), stats on right (40%) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="md:grid-cols-[60%_40%] grid-cols-1">
          
          {/* LEFT COLUMN: Text Content */}
          <div>
            {/* Eyebrow */}
            <p style={{ fontSize: "14px", fontWeight: "500", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              For Solo Founders & Solopreneurs
            </p>

            {/* Main Heading */}
            <h1 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "24px" }}>
              Build a Profitable Business.{" "}
              <span style={{ color: "#00B894" }}>By Yourself.</span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", maxWidth: "540px", marginBottom: "32px" }}>
              Actionable guides, proven systems, and the right tools to start, grow, and run a one-person business — without a team.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }} className="md:flex-row flex-col sm:flex">
              <Link
                href="/start-here"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "#00B894",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                  border: "none",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#009B7B";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#00B894";
                }}
              >
                Start Here →
              </Link>
              <Link
                href="/start"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "#2D3436",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "2px solid #2D3436",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2D3436";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2D3436";
                }}
              >
                Browse All Guides
              </Link>
            </div>

            {/* Trust Indicators */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                50,000+ solo founders
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                200+ actionable guides
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                100% free resources
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats Card */}
          <div style={{ backgroundColor: "#F7F7F7", borderRadius: "16px", border: "1px solid #E2E8F0", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Stat 1 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                200+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Actionable Guides
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Stat 2 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                50K+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Solo Founders
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Stat 3 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                15+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Tool Categories
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Quote */}
            <div>
              <p style={{ fontSize: "14px", color: "#636E72", fontStyle: "italic", margin: 0 }}>
                "The resource I wish existed when I started my solo business."
              </p>
              <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "12px", margin: 0 }}>
                — A OneFoundr reader
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* JOURNEY MAP SECTION */}
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
            Your Roadmap
          </p>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "12px" }}>
            Everything You Need to Build Solo
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72" }}>
            Follow the path or jump to what you need
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "48px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {JOURNEY_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                display: "block",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "28px",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00B894";
                el.style.boxShadow = "0 4px 12px rgba(0, 184, 148, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#E2E8F0";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top Row: Tag + Emoji */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600" }}>
                  {card.tag}
                </span>
                <span style={{ fontSize: "28px" }}>
                  {card.emoji}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px", margin: 0 }}>
                {card.description}
              </p>

              {/* Explore Link */}
              <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0, marginTop: "16px" }}>
                Explore →
              </p>
            </Link>
          ))}
        </div>

        {/* Secondary Topics */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
            Plus: Money & Finance • Growth • Productivity • Mindset • Stories
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
