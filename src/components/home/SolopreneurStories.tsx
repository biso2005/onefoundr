"use client";

import Link from "next/link";

const STORIES_CARDS = [
  {
    initials: "SK",
    name: "Sarah K.",
    business: "Productized Design Service",
    revenue: "$12K/mo",
    quote: "I replaced my agency salary by productizing one design service and automating everything I could.",
    href: "/stories/sarah-k"
  },
  {
    initials: "MR",
    name: "Mike R.",
    business: "Micro-SaaS",
    revenue: "$8K/mo",
    quote: "I built a simple SaaS tool with no-code. No investors, no team, just me and my laptop.",
    href: "/stories/mike-r"
  },
  {
    initials: "PS",
    name: "Priya S.",
    business: "Newsletter Business",
    revenue: "$6K/mo",
    quote: "From zero subscribers to a profitable newsletter in 14 months. Content is the best business model for solopreneurs.",
    href: "/stories/priya-s"
  }
];

export default function SolopreneurStories() {
  return (
    <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "80px", paddingBottom: "80px", color: "white" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
            Real Stories
          </p>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "white", lineHeight: "1.2", marginBottom: "12px" }}>
            Built Alone. Thriving.
          </h2>
          <p style={{ fontSize: "16px", color: "#B2BEC3" }}>
            Real solopreneurs sharing real numbers and real lessons
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {STORIES_CARDS.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              style={{
                display: "block",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid #404D4D",
                borderRadius: "12px",
                padding: "28px",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00B894";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#404D4D";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    backgroundColor: "#00B894",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "white"
                  }}
                >
                  {story.initials}
                </div>

                <div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "white", margin: 0 }}>
                    {story.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "#B2BEC3", margin: 0 }}>
                    {story.business}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(0, 184, 148, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  marginBottom: "16px"
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#00B894" }}>
                  {story.revenue}
                </span>
              </div>

              <p style={{ fontSize: "14px", color: "#D4D8D9", lineHeight: "1.6", fontStyle: "italic", margin: 0, marginTop: "16px", marginBottom: "20px" }}>
                "{story.quote}"
              </p>

              <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0 }}>
                Read Story →
              </p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/stories"
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              border: "1px solid #00B894",
              padding: "10px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#00B894";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#00B894";
            }}
          >
            View All Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
