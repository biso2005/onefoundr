export default function WhatYouGet() {
  const features = [
    {
      emoji: "💡",
      title: "One Actionable Strategy",
      description: "A tested tactic you can implement in your solo business today — not next month, today."
    },
    {
      emoji: "🛠️",
      title: "Tool Recommendations",
      description: "Curated tool picks and deals to help you work faster and smarter without a team."
    },
    {
      emoji: "💰",
      title: "Income Breakdowns",
      description: "Real numbers from real solopreneurs — how they earn, what they spend, and what works."
    },
    {
      emoji: "📋",
      title: "Templates & Resources",
      description: "Early access to new templates, checklists, and resources before anyone else."
    }
  ];

  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: "700",
          color: "#2D3436",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          What You'll Get Every Week
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px"
        }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "28px",
                textAlign: "center",
                border: "1px solid #E2E8F0"
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "16px", display: "block" }}>
                {feature.emoji}
              </div>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#2D3436",
                marginBottom: "8px"
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "#636E72",
                lineHeight: "1.6",
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
