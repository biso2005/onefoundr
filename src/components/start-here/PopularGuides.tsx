import Link from "next/link";

const POPULAR_GUIDES = [
  { rank: 1, title: "Best Tools for Solopreneurs", category: "TOOLS", href: "/tools" },
  { rank: 2, title: "47 One-Person Business Ideas", category: "START", href: "/start/business-ideas" },
  { rank: 3, title: "AI Tools That Replace a Team", category: "TOOLS", href: "/tools/ai-tools" },
  { rank: 4, title: "How to Get Your First 10 Clients", category: "SALES", href: "/sales/getting-clients" },
  { rank: 5, title: "Pricing Strategy for Solopreneurs", category: "OFFER", href: "/offer/pricing-strategy" },
  { rank: 6, title: "The Solopreneur Operating System", category: "SYSTEMS", href: "/systems" },
  { rank: 7, title: "Content Marketing for Solopreneurs", category: "MARKETING", href: "/marketing/content-marketing" },
  { rank: 8, title: "Productized Services Blueprint", category: "OFFER", href: "/offer/productized-services" },
  { rank: 9, title: "Discovery Call Script & Framework", category: "SALES", href: "/sales/discovery-calls" },
  { rank: 10, title: "How to Start a One-Person Business", category: "START", href: "/start" }
];

export default function PopularGuides() {
  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
          Reader Favorites
        </h2>
        <p style={{ fontSize: "16px", color: "#636E72", marginBottom: "32px" }}>
          Our most-read guides across all categories
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {POPULAR_GUIDES.map((guide, index) => (
            <Link
              key={index}
              href={guide.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                borderBottom: index < POPULAR_GUIDES.length - 1 ? "1px solid #E2E8F0" : "none",
                textDecoration: "none"
              }}
            >
              {/* Rank Number */}
              <span style={{ fontSize: "24px", fontWeight: "700", color: "rgba(0, 184, 148, 0.2)", minWidth: "40px", textAlign: "center" }}>
                {guide.rank}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "15px", fontWeight: "500", color: "#2D3436", margin: 0, marginBottom: "4px" }}>
                  {guide.title}
                </p>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                  {guide.category}
                </p>
              </div>

              {/* Arrow */}
              <span style={{ color: "#00B894", fontSize: "16px", minWidth: "20px", textAlign: "right" }}>
                →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/start"
          style={{
            display: "inline-block",
            fontSize: "14px",
            color: "#00B894",
            fontWeight: "500",
            textDecoration: "none",
            marginTop: "16px"
          }}
        >
          View All Guides →
        </Link>
      </div>
    </section>
  );
}
