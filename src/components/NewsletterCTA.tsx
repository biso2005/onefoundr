"use client";

import EmailSignupForm from "./EmailSignupForm";

export function NewsletterCTA() {
  return (
    <div style={{
      backgroundColor: "#00B894",
      borderRadius: "12px",
      padding: "32px",
      textAlign: "center"
    }}>
      <h2 style={{
        fontSize: "20px",
        fontWeight: "700",
        color: "white",
        marginBottom: "4px"
      }}>
        Want more guides like this?
      </h2>
      <p style={{
        fontSize: "14px",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: "20px",
        margin: "0 0 20px 0"
      }}>
        Get one actionable tip every Tuesday.
      </p>

      {/* Email Form */}
      <div style={{ marginBottom: "12px" }}>
        <EmailSignupForm 
          variant="green" 
          buttonText="Subscribe" 
          placeholder="Enter your email"
        />
      </div>
      <p style={{
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.7)",
        margin: 0
      }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
