"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
            Your Next Step
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72" }}>
            Don't overthink it. Pick one:
          </p>
        </div>

        {/* CTA Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {[
            {
              emoji: "🌱",
              text: "Just starting? → Read: How to Start a One-Person Business",
              href: "/start"
            },
            {
              emoji: "🔧",
              text: "Need better systems? → Read: The Solopreneur Operating System",
              href: "/systems"
            },
            {
              emoji: "📈",
              text: "Ready to grow? → Read: How to Scale Solo",
              href: "/growth"
            },
            {
              emoji: "🛠️",
              text: "Want tool recommendations? → Browse: Best Tools for Solopreneurs",
              href: "/tools"
            }
          ].map((cta, index) => (
            <Link
              key={index}
              href={cta.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "16px 20px",
                border: "1px solid #E2E8F0",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              className="hover:shadow-sm"
            >
              <span style={{ fontSize: "18px", minWidth: "24px" }}>{cta.emoji}</span>
              <span style={{ fontSize: "14px", color: "#2D3436", fontWeight: "500", flex: 1 }}>
                {cta.text}
              </span>
              <span style={{ color: "#059669" }}>→</span>
            </Link>
          ))}
        </div>

        {/* Final Message */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436" }}>
            Welcome to OneFoundr. Let's build. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
