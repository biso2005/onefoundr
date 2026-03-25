"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="md:grid-cols-[60%_40%] grid-cols-1">
          
          <div>
            <p style={{ fontSize: "14px", fontWeight: "500", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              For Solo Founders & Solopreneurs
            </p>

            <h1 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "12px" }}>
              Build Solo. Build Smart.
            </h1>

            <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", maxWidth: "540px", marginBottom: "32px" }}>
              Skip the guesswork. Proven frameworks, step-by-step systems, and real examples to build a profitable solo business—without the burnout.
            </p>

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
                Start Here
              </Link>
              <a
                href="/newsletter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "#00B894",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "2px solid #00B894",
                  transition: "all 0.2s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F0FDF4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                Join Newsletter
              </a>
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                12+ actionable guides
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                Built for solopreneurs, by solopreneurs
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                100% free resources
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#F7F7F7", borderRadius: "16px", border: "1px solid #E2E8F0", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                6+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Core Categories
              </div>
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                100%
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Free Resources
              </div>
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                15+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Tool Categories
              </div>
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            <div>
              <p style={{ fontSize: "14px", color: "#636E72", fontStyle: "italic", margin: 0 }}>
                "Built for solo founders, by solo founders."
              </p>
              <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "12px", margin: 0 }}>
                — Built for solo founders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
