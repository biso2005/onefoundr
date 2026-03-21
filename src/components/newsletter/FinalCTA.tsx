"use client";

import Link from "next/link";

export default function FinalCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup when backend is ready
  };

  return (
    <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(24px, 6vw, 48px)",
          fontWeight: "700",
          color: "white",
          marginBottom: "12px"
        }}>
          Join 25,000+ Solo Founders
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#9CA3AF",
          marginBottom: "32px"
        }}>
          Get one actionable idea every Tuesday. Free forever.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto 24px" }}>
          <div style={{ display: "flex", gap: "0", flexDirection: "row" }} className="flex-col md:flex-row md:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "16px 20px",
                borderRadius: "10px 0 0 10px",
                border: "1px solid #4B5563",
                fontSize: "16px",
                fontFamily: "inherit",
                outline: "none",
                backgroundColor: "white",
                color: "#2D3436"
              }}
              className="md:rounded-l-xl md:rounded-r-none focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              style={{
                padding: "16px 32px",
                backgroundColor: "#00B894",
                color: "white",
                border: "none",
                borderRadius: "0 10px 10px 0",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "opacity 0.2s",
                whiteSpace: "nowrap"
              }}
              className="md:rounded-r-xl md:rounded-l-none hover:opacity-90"
            >
              Subscribe Free →
            </button>
          </div>
        </form>

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
          <Link href="/start-here" style={{ color: "#00B894", textDecoration: "none" }} className="hover:underline">
            Start Here
          </Link>
          {" "}•{" "}
          <Link href="/tools" style={{ color: "#00B894", textDecoration: "none" }} className="hover:underline">
            Browse Tools
          </Link>
          {" "}•{" "}
          <Link href="/stories" style={{ color: "#00B894", textDecoration: "none" }} className="hover:underline">
            Read Stories
          </Link>
        </p>
      </div>
    </section>
  );
}
