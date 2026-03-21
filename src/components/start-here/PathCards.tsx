"use client";

import Link from "next/link";

const PATHS = [
  {
    emoji: "🌱",
    label: "JUST STARTING",
    heading: "I have an idea but haven't started yet",
    description: "You're thinking about starting a solo business, or you're in your first few months.",
    guides: [
      { title: "How to Start a One-Person Business", href: "/start" },
      { title: "47 One-Person Business Ideas", href: "/start/business-ideas" },
      { title: "How to Validate Your Idea in 7 Days", href: "/start/idea-validation" },
      { title: "How to Create an Offer That Sells", href: "/offer" },
      { title: "The Only 10 Tools You Actually Need", href: "/tools/tech-stack" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/start"
  },
  {
    emoji: "🌿",
    label: "ALREADY RUNNING",
    heading: "I have clients but need better systems",
    description: "You're already making money, but things feel messy, overwhelming, or hard to sustain.",
    guides: [
      { title: "The Solopreneur Operating System", href: "/systems" },
      { title: "Marketing for Solopreneurs", href: "/marketing" },
      { title: "Client Onboarding Process", href: "/systems/client-onboarding" },
      { title: "Pricing Strategy for Solopreneurs", href: "/offer/pricing-strategy" },
      { title: "AI Tools That Replace a Team", href: "/tools/ai-tools" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/systems"
  },
  {
    emoji: "🌳",
    label: "READY TO SCALE",
    heading: "I want to grow without hiring",
    description: "Your business is working, and you want to grow revenue without adding a team.",
    guides: [
      { title: "How to Scale a One-Person Business", href: "/growth/scaling-solo" },
      { title: "Offer Stacking: Multiple Revenue Streams", href: "/offer/offer-stacking" },
      { title: "Building Recurring Revenue", href: "/growth/recurring-revenue" },
      { title: "Sales Funnel for Solopreneurs", href: "/sales/sales-funnels" },
      { title: "Email Marketing for Solo Businesses", href: "/marketing/email-marketing" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/growth"
  }
];

export default function PathCards() {
  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "12px" }}>
            Pick Your Path
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72" }}>
            Choose the option that sounds most like you
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "stretch" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {PATHS.map((path) => (
            <div
              key={path.label}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "32px",
                borderTop: "4px solid #00B894",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.2s",
                display: "flex",
                flexDirection: "column"
              }}
              className="hover:shadow-md"
            >
              {/* Emoji and Label */}
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "32px", marginRight: "8px" }}>{path.emoji}</span>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#059669", fontWeight: "600", margin: 0 }}>
                  {path.label}
                </p>
              </div>

              {/* Heading */}
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", margin: 0, marginBottom: "12px" }}>
                {path.heading}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", margin: 0, marginBottom: "24px" }}>
                {path.description}
              </p>

              {/* Reading List */}
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#2D3436", margin: 0, marginBottom: "16px" }}>
                Your reading list:
              </p>

              {/* Guide Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {path.guides.map((guide, index) => (
                  <Link
                    key={index}
                    href={guide.href}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      textDecoration: "none"
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#059669", minWidth: "20px" }}>
                      {index + 1}
                    </span>
                    <span style={{ fontSize: "13px", color: "#2D3436" }}>
                      {guide.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={path.buttonHref}
                style={{
                  display: "block",
                  width: "100%",
                  backgroundColor: "#00B894",
                  color: "white",
                  textAlign: "center",
                  padding: "12px 0",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  marginTop: "auto"
                }}
                className="hover:opacity-90"
              >
                {path.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
