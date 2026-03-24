"use client";

import Link from "next/link";
import EmailSignupForm from "../EmailSignupForm";

export default function FinalCTA() {

  return (
    <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(24px, 6vw, 48px)",
          fontWeight: "700",
          color: "white",
          marginBottom: "12px"
        }}>
          Trusted by Solo Founders Worldwide
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#9CA3AF",
          marginBottom: "32px"
        }}>
          Get one actionable idea every Tuesday. Free forever.
        </p>

        {/* Email Form */}
        <div style={{ maxWidth: "448px", margin: "0 auto 24px" }}>
          <EmailSignupForm 
            variant="dark" 
            buttonText="Subscribe Free →" 
            placeholder="Enter your email address"
          />
        </div>

        <p style={{
          fontSize: "12px",
          color: "#6B7280",
          marginBottom: "32px"
        }}>
          No spam. No fluff. Unsubscribe anytime.
        </p>

        {/* Explore Links */}
        <p style={{ fontSize: "14px", color: "#9CA3AF", marginBottom: "8px" }}>
          Or explore the site:{" "}
          <Link href="/start-here" style={{ color: "#059669", textDecoration: "none" }} className="hover:underline">
            Start Here
          </Link>
          {" "}•{" "}
          <Link href="/tools" style={{ color: "#059669", textDecoration: "none" }} className="hover:underline">
            Browse Tools
          </Link>
          {" "}•{" "}
          <Link href="/start-here" style={{ color: "#059669", textDecoration: "none" }} className="hover:underline">
            Read Guides
          </Link>
        </p>
      </div>
    </section>
  );
}
