"use client";

import EmailSignupForm from "../EmailSignupForm";

export default function FreeResources() {
  return (
    <section style={{ backgroundColor: "#00B894", width: "100%", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>

        {/* LEFT COLUMN */}
        <div>
          <div style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.3)", color: "white", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 12px", borderRadius: "20px", marginBottom: "20px" }}>
            Free Resource
          </div>
          <h2 style={{ fontSize: "42px", fontWeight: 800, color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.15" }}>
            The Solopreneur Starter Kit
          </h2>
          <p style={{ fontSize: "17px", color: "#1a3a2a", fontWeight: 500, marginBottom: "32px", lineHeight: "1.6" }}>
            Everything you need to start and run your one-person business — templates, checklists, and guides in one free bundle.
          </p>
          <div style={{ marginBottom: "16px" }}>
            <EmailSignupForm
              variant="green"
              buttonText="Get Free Access"
              placeholder="Enter your email"
            />
          </div>
          <p style={{ fontSize: "13px", color: "#1a3a2a" }}>Free for solo founders • No spam, ever</p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "36px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#2D3436", marginBottom: "24px" }}>What's Inside:</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
            {[
              "Business Model Canvas Template",
              "Client Proposal Template",
              "Weekly Planning System",
              "Pricing Calculator Spreadsheet",
              "30-Day Content Calendar",
              "SOP Template Library"
            ].map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ color: "#00B894", fontSize: "18px", flexShrink: 0 }}>✅</span>
                <span style={{ fontSize: "15px", color: "#2D3436", fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
            <p style={{ fontSize: "14px", color: "#636E72", marginBottom: "4px" }}>
              Total value: <span style={{ textDecoration: "line-through" }}>$149</span>
            </p>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#059669" }}>Yours free today</p>
          </div>
        </div>

      </div>
    </section>
  );
}
