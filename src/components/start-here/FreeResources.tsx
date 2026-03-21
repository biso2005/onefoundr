import Link from "next/link";

const RESOURCES = [
  { emoji: "📋", name: "Business Model Canvas", description: "Map your solo business on one page" },
  { emoji: "💰", name: "Pricing Calculator", description: "Figure out your rates based on value and goals" },
  { emoji: "📅", name: "Content Calendar", description: "Plan 30 days of content in one sitting" },
  { emoji: "📄", name: "Client Proposal Template", description: "Win clients with professional proposals" },
  { emoji: "⚙️", name: "SOP Template Library", description: "Document every process in your business" },
  { emoji: "✅", name: "Launch Checklist", description: "Every step from idea to first dollar" }
];

export default function FreeResources() {
  return (
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "8px", textAlign: "center" }}>
          Free Templates & Resources
        </h2>
        <p style={{ fontSize: "16px", color: "#636E72", marginBottom: "32px", textAlign: "center" }}>
          Tools to help you take action faster
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }} className="md:grid-cols-2 grid-cols-1">
          {RESOURCES.map((resource, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                border: "1px solid #E2E8F0",
                display: "flex",
                gap: "16px",
                alignItems: "center",
                transition: "all 0.2s"
              }}
              className="hover:shadow-sm"
            >
              {/* Emoji */}
              <span style={{ fontSize: "24px", minWidth: "32px", textAlign: "center" }}>
                {resource.emoji}
              </span>

              {/* Content */}
              <div>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#2D3436", margin: 0, marginBottom: "4px" }}>
                  {resource.name}
                </p>
                <p style={{ fontSize: "13px", color: "#636E72", margin: 0 }}>
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/resources"
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              textDecoration: "none"
            }}
          >
            Get All Templates Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
