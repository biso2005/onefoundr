import CategoryHub from "@/components/CategoryHub";
import NewsletterCTA from "@/components/NewsletterCTA";
import Link from "next/link";

export const metadata = {
  title: "Idea Validation for Solopreneurs — OneFoundr",
  description: "A simple 5-step validation process to test your business idea before you invest months building the wrong thing."
};

const validationSteps = [
  {
    number: "01",
    title: "Step 1: Demand Research",
    description: "Find real demand signals before you commit.",
    href: "/start/idea-validation/demand-research"
  },
  {
    number: "02",
    title: "Step 2: Problem Discovery",
    description: "Learn what your customers actually struggle with.",
    href: "/start/idea-validation/problem-discovery"
  },
  {
    number: "03",
    title: "Step 3: Customer Conversations",
    description: "Talk to 10 people and validate willingness to pay.",
    href: "/start/idea-validation/customer-interviews"
  },
  {
    number: "04",
    title: "Step 4: Test Before You Build",
    description: "Pre-sell, prototype, or run a tiny experiment.",
    href: "/start/idea-validation/test-before-building"
  },
  {
    number: "05",
    title: "Step 5: Go / Pivot / Kill",
    description: "Make a decision with confidence and avoid sunk-cost traps.",
    href: "/start/idea-validation/go-pivot-kill"
  }
];

export default async function IdeaValidationPage() {
  return (
    <>
      <CategoryHub
        eyebrow="START SOLO"
        emoji="✅"
        title="Idea Validation"
        description="A simple 5-step process to test your idea before you build. Validate demand, pricing, and feasibility — as a solo founder."
        color="text-green-500"
        pillarGuide={{
          title: "The 7-Day Solo Validation Sprint (Start Here)",
          description: "Validate your business idea in one week using a lightweight process designed for solopreneurs.",
          readTime: "12 min read",
          href: "/start/idea-validation/7-day-validation-sprint"
        }}
        subcategories={[
          {
            name: "Step 1: Demand Research",
            description: "Find real demand signals before you commit.",
            href: "/start/idea-validation/demand-research",
            articleCount: 1
          },
          {
            name: "Step 2: Problem Discovery",
            description: "Learn what your customers actually struggle with.",
            href: "/start/idea-validation/problem-discovery",
            articleCount: 1
          },
          {
            name: "Step 3: Customer Conversations",
            description: "Talk to 10 people and validate willingness to pay.",
            href: "/start/idea-validation/customer-interviews",
            articleCount: 1
          },
          {
            name: "Step 4: Test Before You Build",
            description: "Pre-sell, prototype, or run a tiny experiment.",
            href: "/start/idea-validation/test-before-building",
            articleCount: 1
          },
          {
            name: "Step 5: Go / Pivot / Kill",
            description: "Make a decision with confidence and avoid sunk-cost traps.",
            href: "/start/idea-validation/go-pivot-kill",
            articleCount: 1
          }
        ]}
        featuredArticles={[]}
        relatedCategories={[]}
        dynamicArticles={[]}
      />

      {/* The 5-Step Solo Validation System Section */}
      <section style={{ backgroundColor: "#FFFFFF", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "700", color: "#2D3436", textAlign: "center", marginBottom: "16px" }}>
            The 5-Step Solo Validation System
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72", textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
            Validation isn't complicated — but most people skip it. This system helps you test demand and pricing with minimal time, zero code, and no team.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {validationSteps.map((step) => (
              <Link
                key={step.number}
                href={step.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    border: "1px solid #E2E8F0",
                    padding: "24px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                  className="hover:shadow-md hover:border-green-400"
                >
                  <p style={{ fontSize: "12px", fontWeight: "600", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0, marginBottom: "12px" }}>
                    {step.number}
                  </p>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#2D3436", margin: 0, marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px", flex: 1 }}>
                    {step.description}
                  </p>
                  <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0 }}>
                    Read step →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ backgroundColor: "#F7F7F7", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", margin: 0 }}>
              Short on time? Start with the{" "}
              <Link href="/start/idea-validation/7-day-validation-sprint" style={{ color: "#00B894", fontWeight: "600", textDecoration: "none" }}>
                7-day sprint
              </Link>
              {" "}and you'll know whether to build or pivot by next week.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ backgroundColor: "rgba(0, 184, 148, 0.05)", borderRadius: "16px", padding: "32px", textAlign: "center", border: "1px solid #E2E8F0" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#2D3436", marginBottom: "12px" }}>
            Want more solo founder playbooks like this?
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72", marginBottom: "24px", margin: "12px auto 24px" }}>
            Get one actionable strategy every week — designed for founders who do it all alone.
          </p>
          <NewsletterCTA />
        </div>
      </section>
    </>
  );
}
