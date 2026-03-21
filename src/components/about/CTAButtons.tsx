"use client";

import Link from "next/link";

export default function CTAButtons() {
  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap", justifyContent: "center" }} className="flex-col md:flex-row">
      <Link
        href="/start-here"
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "16px 20px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        🚀 Start Here →
      </Link>

      <Link
        href="/tools"
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "16px 20px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        🛠️ Browse Tools →
      </Link>

      <Link
        href="/newsletter"
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "16px 20px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        📧 Subscribe →
      </Link>
    </div>
  );
}
