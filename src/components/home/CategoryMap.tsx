"use client";

import Link from "next/link";

const JOURNEY_CARDS = [
  {
    emoji: "💡",
    title: "Start Solo",
    description: "Find your idea, validate it, and choose a business model that works for one person.",
    href: "/start"
  },
  {
    emoji: "📦",
    title: "Build Your Offer",
    description: "Turn your skills into sellable products and services people actually want to buy.",
    href: "/offer"
  },
  {
    emoji: "📣",
    title: "Get Found",
    description: "Content marketing, SEO, personal branding, and audience building — the solo way.",
    href: "/marketing"
  },
  {
    emoji: "🤝",
    title: "Win Clients",
    description: "Sell confidently without being pushy. Funnels, calls, proposals, and closing.",
    href: "/sales"
  },
  {
    emoji: "⚙️",
    title: "Build Systems",
    description: "SOPs, workflows, automation, and operations that run your business smoothly.",
    href: "/systems"
  },
  {
    emoji: "🛠️",
    title: "Tools & AI",
    description: "The essential tech stack and AI tools for running a one-person business efficiently.",
    href: "/tools"
  }
];

export default function CategoryMap() {
  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
                <span style={{ fontSize: "28px" }}>
                  {card.emoji}
                </span>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
                {card.title}
              </h3>

              <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px", margin: 0 }}>
                {card.description}
              </p>

              <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0, marginTop: "16px" }}>
                Explore →
              </p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
            Plus: Money & Finance • Growth • Productivity • Mindset • Stories
          </p>
        </div>
      </div>
    </section>
  );
}
