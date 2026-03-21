"use client";

export default function NewsletterHero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup when backend is ready
  };

  return (
    <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "64px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          backgroundColor: "rgba(0, 184, 148, 0.1)",
          padding: "6px 16px",
          borderRadius: "9999px",
          marginBottom: "24px"
        }}>
          <p style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#00B894",
            fontWeight: "600",
            margin: 0
          }}>
            Free Weekly Newsletter
          </p>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(28px, 6vw, 56px)",
          fontWeight: "700",
          color: "#2D3436",
          lineHeight: "1.2",
          marginBottom: "16px"
        }}>
          One Actionable Idea. Every Tuesday.
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: "18px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "36px",
          maxWidth: "600px",
          margin: "0 auto 36px"
        }}>
          The OneFoundr Letter helps solopreneurs build better one-person businesses — with practical strategies, tool recommendations, and real founder insights.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto 24px" }}>
          <div style={{ display: "flex", gap: "0", flexDirection: "row" }} className="flex-col md:flex-row md:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "16px 20px",
                borderRadius: "10px 0 0 10px",
                border: "2px solid #E2E8F0",
                fontSize: "16px",
                fontFamily: "inherit",
                outline: "none",
                backgroundColor: "white"
              }}
              className="md:rounded-l-xl md:rounded-r-none focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              style={{
                padding: "16px 32px",
                backgroundColor: "#00B894",
                color: "white",
                border: "none",
                borderRadius: "0 10px 10px 0",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "opacity 0.2s",
                whiteSpace: "nowrap"
              }}
              className="md:rounded-r-xl md:rounded-l-none hover:opacity-90"
            >
              Subscribe Free →
            </button>
          </div>
        </form>

        {/* Trust Indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ 25,000+ subscribers</p>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ Every Tuesday</p>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ Unsubscribe anytime</p>
        </div>
      </div>
    </section>
  );
}
