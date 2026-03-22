"use client";

import EmailSignupForm from "../EmailSignupForm";

export default function FreeResources() {
  return (
    <section style={{ backgroundColor: "#00B894", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="md:grid-cols-[55%_45%] grid-cols-1">
          
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "4px 12px", borderRadius: "9999px", marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "white", fontWeight: "600" }}>
                Free Resource
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "white", lineHeight: "1.2", marginBottom: "12px" }}>
              The Solopreneur Starter Kit
            </h2>

            <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6", maxWidth: "480px", marginBottom: "32px" }}>
              Everything you need to start and run your one-person business — templates, checklists, and guides in one free bundle.
            </p>

            <div style={{ display: "flex", gap: "0px", marginBottom: "16px", flexWrap: "wrap" }} className="md:flex-row flex-col">
              <EmailSignupForm 
                variant="green" 
                buttonText="Get Free Access" 
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>
              Free for solo founders • No spam, ever
            </p>
          </div>

          <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "32px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginBottom: "20px", margin: 0 }}>
              What's Inside:
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Business Model Canvas Template",
                "Client Proposal Template",
                "Weekly Planning System",
                "Pricing Calculator Spreadsheet",
                "30-Day Content Calendar",
                "SOP Template Library"
              ].map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "16px" }}>✅</span>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#2D3436" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #E2E8F0", marginTop: "20px", paddingTop: "20px" }}></div>

            <div>
              <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
                Total value: <span style={{ textDecoration: "line-through" }}>$149</span>
              </p>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "#00B894", marginTop: "4px", margin: 0 }}>
                Yours free today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
