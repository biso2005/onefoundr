import Link from "next/link";

export const metadata = {
  title: "Demand Research for Business Ideas — OneFoundr",
  description: "Find real demand signals before you commit to building your business idea."
};

export default function DemandResearchPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "64px", paddingBottom: "64px" }}>
        <div style={{ marginBottom: "48px" }}>
          <Link href="/start/idea-validation" style={{ color: "#00B894", fontWeight: "500", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            ← Back to Idea Validation
          </Link>
          
          <h1 style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px", lineHeight: "1.2" }}>
            Step 1: Demand Research
          </h1>
          
          <p style={{ fontSize: "12px", fontWeight: "600", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "24px" }}>
            Validation Step • 8 min read
          </p>
          
          <div style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.8" }}>
            <p>
              Find real demand signals before you commit. This step walks you through proven methods to validate that people actually want what you're thinking of building—without building anything yet.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: "#F0F9FF", borderRadius: "12px", padding: "24px", marginBottom: "48px", borderLeft: "4px solid #0EA5E9", border: "1px solid #E0F2FE" }}>
          <p style={{ margin: 0, color: "#0C4A6E", fontSize: "16px", fontWeight: "600" }}>
            Guide in development
          </p>
          <p style={{ margin: "8px 0 0 0", color: "#0369A1", fontSize: "14px" }}>
            Deep-dive guides with research frameworks and templates are coming soon. Subscribe to our newsletter to get notified when this guide is ready.
          </p>
        </div>

        <Link href="/start/idea-validation" style={{ color: "#00B894", fontWeight: "600", textDecoration: "none", display: "inline-block", padding: "12px 24px", backgroundColor: "#F7F7F7", borderRadius: "8px", transition: "all 0.2s" }} className="hover:bg-gray-100">
          Back to Idea Validation Hub
        </Link>
      </div>
    </div>
  );
}
