"use client";

import EmailSignupForm from "../EmailSignupForm";

export default function NewsletterHero() {

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
            color: "#059669",
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
        <div style={{ maxWidth: "448px", margin: "0 auto 24px" }}>
          <EmailSignupForm 
            variant="default" 
            buttonText="Subscribe Free →" 
            placeholder="Enter your email address"
          />
        </div>

        {/* Trust Indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ Trusted by solo founders</p>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ Every Tuesday</p>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>✓ Unsubscribe anytime</p>
        </div>
      </div>
    </section>
  );
}
