"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ArticleError({ error, reset }: ErrorProps) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }} className="px-6">
      <div style={{ maxWidth: "800px", width: "100%", paddingTop: "120px", paddingBottom: "120px", textAlign: "center" }}>
        {/* Emoji */}
        <div style={{ fontSize: "60px", marginBottom: "24px" }}>😵</div>

        {/* Heading */}
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#2D3436", marginBottom: "16px" }}>
          Article not found
        </h1>

        {/* Description */}
        <p style={{ fontSize: "16px", color: "#636E72", marginBottom: "32px", maxWidth: "448px", margin: "0 auto 32px" }}>
          We couldn't load this article. It may have been moved or there's a temporary issue.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {/* Try Again Button */}
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#00B894",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#009B7B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#00B894";
            }}
          >
            Try Again
          </button>

          {/* Browse Guides Link */}
          <Link
            href="/start"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#2D3436",
              textDecoration: "none",
              transition: "all 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2D3436";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2E8F0";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            }}
          >
            Browse Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
