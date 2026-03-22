import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — OneFoundr",
  description: "OneFoundr privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* DISCLAIMER BANNER */}
      <section style={{ backgroundColor: "#FEF3C7", width: "100%", paddingTop: "16px", paddingBottom: "16px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", color: "#78350F", margin: "0", fontWeight: "500" }}>
            ⚠️ <strong>Legal Disclaimer:</strong> This is a template. Before publishing, consult a legal professional.
          </p>
        </div>
      </section>

      {/* PAGE HEADER */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "12px" }}>
            Privacy Policy
          </p>

          <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "20px" }}>
            Your Privacy Matters to Us
          </h1>

          <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", marginBottom: "24px" }}>
            Last Updated: March 22, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "0px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Section 1: Information We Collect */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Information We Collect
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          When you use OneFoundr, we collect limited information:
        </p>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            <strong>Email address</strong> — when you subscribe to our newsletter
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            <strong>Usage data</strong> — pages visited, time on site, referral source (via analytics)
          </li>
        </ul>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          <strong>We do NOT collect:</strong> passwords, payment information, personal documents, or any sensitive data.
        </p>

        {/* Section 2: How We Use Your Information */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          How We Use Your Information
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          We use the information we collect solely for:
        </p>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Sending our weekly newsletter (The OneFoundr Letter)
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Improving our content and site experience
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Responding to your inquiries or support requests
          </li>
        </ul>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px",
          fontWeight: "600"
        }}>
          We NEVER sell your data to third parties or marketers.
        </p>

        {/* Section 3: Email Communications */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Email Communications
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            You can unsubscribe from our newsletter at any time using the unsubscribe link in every email
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Your email is stored securely and never shared with third parties
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We don't email you with promotional content unrelated to our newsletter
          </li>
        </ul>

        {/* Section 4: Cookies & Analytics */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Cookies & Analytics
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We use analytics tools to understand how visitors use our site
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We may use cookies for basic site functionality (e.g., navigation state)
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We do NOT use advertising cookies or third-party trackers
          </li>
        </ul>

        {/* Section 5: Third-Party Links */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Third-Party Links
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Our site contains links to external websites and tools
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            <strong>Affiliate disclosure:</strong> Some links are affiliate links, and we may earn a commission if you purchase through them
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            We are not responsible for the privacy practices of other websites
          </li>
        </ul>

        {/* Section 6: Your Rights */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Your Rights
        </h2>

        <ul style={{
          listStyle: "disc",
          paddingLeft: "24px",
          marginBottom: "20px",
          color: "#636E72"
        }}>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            You can request deletion of your data at any time
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            You can request a copy of your stored data
          </li>
          <li style={{ fontSize: "16px", marginBottom: "8px", lineHeight: "1.6" }}>
            Contact us at hello@onefoundr.com for any privacy requests
          </li>
        </ul>

        {/* Section 7: Changes to This Policy */}
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#2D3436",
          marginTop: "32px",
          marginBottom: "12px"
        }}>
          Changes to This Policy
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#636E72",
          lineHeight: "1.6",
          marginBottom: "16px"
        }}>
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Your continued use of our site after changes means you accept the updated policy.
        </p>

        {/* Section 8: Contact */}
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
          If you have questions about this privacy policy or your data, please contact us at:
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
