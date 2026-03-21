import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OneFoundr terms of service — rules and guidelines for using our website.",
};

export default function TermsPage() {
  return (
    <main id="main-content" style={{ width: "100%", paddingTop: "80px", paddingBottom: "48px", paddingLeft: "24px", paddingRight: "24px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Legal Disclaimer */}
        <div style={{
          fontSize: "14px",
          fontStyle: "italic",
          color: "#636E72",
          backgroundColor: "#F7F7F7",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "32px"
        }}>
          <p style={{ margin: 0 }}>
            This is a simplified terms of service. For legal compliance in your jurisdiction, consult a legal professional.
          </p>
        </div>

        {/* Page Heading */}
        <h1 style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#2D3436",
          marginBottom: "8px"
        }}>
          Terms of Service
        </h1>

        <p style={{
          fontSize: "14px",
          color: "#636E72",
          marginBottom: "48px"
        }}>
          Last updated: December 2024
        </p>

        {/* Section 1: Acceptance of Terms */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Acceptance of Terms
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          By accessing and using OneFoundr, you agree to be bound by these terms of service. If you disagree with any part of these terms, you should not use our website.
        </p>

        {/* Section 2: Use of Content */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Use of Content
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          All content on OneFoundr is provided for informational purposes. You may:
        </p>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Read and share our content with others
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Reference our guides and advice
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Quote excerpts with attribution and a link back to our site
          </li>
        </ul>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          <strong>You may NOT:</strong> Copy our entire guides, republish our content without permission, or sell our content or services.
        </p>

        {/* Section 3: Affiliate Disclosure */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Affiliate Disclosure
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Some links on our site are affiliate links
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We earn a commission if you purchase through these links (at no extra cost to you)
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            This doesn't affect our recommendations or pricing
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We only recommend tools and services we genuinely believe in
          </li>
        </ul>

        {/* Section 4: Disclaimer */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Disclaimer
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            All content on OneFoundr is for educational purposes only
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We are NOT providing legal, financial, tax, or professional advice
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Results may vary — we don't guarantee specific outcomes or income claims
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Use our advice at your own discretion and consult professionals for specific guidance
          </li>
        </ul>

        {/* Section 5: User Conduct */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          User Conduct
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          When using OneFoundr, you agree not to:
        </p>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Use our site for illegal purposes or to violate any laws
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Attempt to hack, disrupt, or damage our website or services
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Spam or abuse our contact forms or email
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Violate the intellectual property rights of others
          </li>
        </ul>

        {/* Section 6: Intellectual Property */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Intellectual Property
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          OneFoundr, including our name, logo, and all content, are our intellectual property. You may not use our branding, logo, or name without our permission. Unauthorized use is prohibited.
        </p>

        {/* Section 7: Limitation of Liability */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Limitation of Liability
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            OneFoundr provides content "as-is" without warranties or guarantees
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We are not liable for any decisions made based on our content
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We are not responsible for third-party websites or services linked from our site
          </li>
        </ul>

        {/* Section 8: Changes to Terms */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Changes to Terms
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          We may update these terms at any time. Changes will be posted on this page with an updated date. Your continued use of OneFoundr after changes means you accept the new terms.
        </p>

        {/* Section 9: Contact */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Contact Us
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          If you have questions about these terms of service, please contact us at:
        </p>

        <p style={{
          fontSize: "16px",
          color: "#2D3436",
          fontWeight: "600"
        }}>
          hello@onefoundr.com
        </p>
      </div>
    </main>
  );
}
