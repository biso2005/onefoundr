import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Get in touch with OneFoundr. Questions, feedback, partnerships, or just say hello."
};

export default function ContactPage() {
  return (
    <main style={{ width: "100%" }}>
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "#059669" }}>
            GET IN TOUCH
          </p>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#2D3436" }}>
            Contact OneFoundr
          </h1>
          <p className="text-lg mb-12" style={{ color: "#636E72", marginBottom: 48 }}>
            Have a question, feedback, or just want to say hello? I'd love to hear from you.
          </p>

          {/* Contact Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Card 1 */}
            <div style={{ background: "#F7F7F7", borderRadius: 16, padding: 24, display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontSize: 32, minWidth: 40 }}>📧</span>
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: "#2D3436" }}>General Inquiries</p>
                <p className="text-sm mb-1" style={{ color: "#636E72" }}>Questions about the site, content suggestions, or just want to connect.</p>
                <p className="text-sm font-medium" style={{ color: "#059669", margin: 0 }}>hello@onefoundr.com</p>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: "#F7F7F7", borderRadius: 16, padding: 24, display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontSize: 32, minWidth: 40 }}>🤝</span>
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: "#2D3436" }}>Partnerships & Sponsorships</p>
                <p className="text-sm mb-1" style={{ color: "#636E72" }}>Interested in sponsoring the newsletter or partnering with OneFoundr?</p>
                <p className="text-sm font-medium" style={{ color: "#059669", margin: 0 }}>hello@onefoundr.com</p>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: "#F7F7F7", borderRadius: 16, padding: 24, display: "flex", flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontSize: 32, minWidth: 40 }}>✍️</span>
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: "#2D3436" }}>Write for OneFoundr</p>
                <p className="text-sm mb-1" style={{ color: "#636E72" }}>Are you a solopreneur with a story to share? We accept guest contributions.</p>
                <p className="text-sm font-medium" style={{ color: "#059669", margin: 0 }}>hello@onefoundr.com</p>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div style={{ marginTop: 48 }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2D3436", marginBottom: 16 }}>
              Find Me Online
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://twitter.com/onefoundr" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#059669" }}>
                Twitter/X → @onefoundr
              </a>
              <a href="https://linkedin.com/company/onefoundr" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#059669" }}>
                LinkedIn → OneFoundr
              </a>
              <a href="mailto:hello@onefoundr.com" className="text-sm hover:underline" style={{ color: "#059669" }}>
                Email → hello@onefoundr.com
              </a>
            </div>
          </div>

          {/* Response Time Note */}
          <div style={{ marginTop: 32 }}>
            <p className="text-sm italic" style={{ color: "#636E72" }}>
              I typically respond within 24-48 hours. For urgent matters, Twitter DMs are fastest.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
