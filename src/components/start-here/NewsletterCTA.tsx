"use client";

export default function NewsletterCTA() {
  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
            Stay in the Loop
          </h2>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "#059669", marginBottom: "16px" }}>
            The OneFoundr Letter
          </p>
        </div>

        {/* Two Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }} className="md:grid-cols-2 grid-cols-1">
          {/* What You Get */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#2D3436", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              What you get:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "✅ One practical strategy per week",
                "✅ New tool recommendations and reviews",
                "✅ Solopreneur income breakdowns",
                "✅ Early access to templates"
              ].map((item, index) => (
                <p key={index} style={{ fontSize: "14px", color: "#2D3436", margin: 0 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* What You Don't Get */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#2D3436", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              What you don't get:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["❌ Spam", "❌ Fluff", "❌ Motivational quotes", "❌ Someone selling you a $997 course"].map((item, index) => (
                <p key={index} style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Email Form */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "0", marginBottom: "8px" }} className="flex-col md:flex-row">
            <label htmlFor="email-start-here" className="sr-only">Email address</label>
            <input
              id="email-start-here"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "12px 20px",
                borderRadius: "8px 0 0 8px",
                border: "1px solid #E2E8F0",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none"
              }}
              className="md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#00B894",
                color: "white",
                border: "none",
                borderRadius: "0 8px 8px 0",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s",
                whiteSpace: "nowrap"
              }}
              className="md:rounded-r-lg md:rounded-l-none hover:opacity-90"
            >
              Subscribe Free →
            </button>
          </div>
          <p style={{ fontSize: "12px", color: "#636E72", marginTop: "8px" }}>
            Trusted by solo founders worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
