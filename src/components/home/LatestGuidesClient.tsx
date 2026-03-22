"use client";

import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";

interface LatestGuidesClientProps {
  articles: Array<{
    category: string;
    title: string;
    excerpt: string;
    readTime: string;
    href: string;
  }>;
}

const FILTER_TABS = ["All", "Start", "Offer", "Marketing", "Sales", "Systems"];

export default function LatestGuidesClient({ articles }: LatestGuidesClientProps) {
  return (
    <>
      {/* Filter Tabs - Desktop Only */}
      <div style={{ display: "flex", gap: "24px" }} className="hidden md:flex">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            style={{
              fontSize: "14px",
              color: tab === "All" ? "#059669" : "#636E72",
              fontWeight: tab === "All" ? "500" : "400",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0",
              textTransform: "capitalize",
              borderBottom: tab === "All" ? "2px solid #059669" : "none",
              paddingBottom: tab === "All" ? "4px" : "0"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            style={{
              display: "block",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              overflow: "hidden",
              textDecoration: "none",
              transition: "all 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#059669";
              el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#E2E8F0";
              el.style.boxShadow = "none";
            }}
          >
            {/* Category Icon Visual */}
            <CategoryIcon category={article.category?.toLowerCase?.() || "start"} size="sm" />

            {/* Content Area */}
            <div style={{ padding: "24px" }}>
              {/* Top Row: Category + Read Time */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0" }}>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#059669", fontWeight: "600", margin: 0 }}>
                  {article.category}
                </p>
                <p style={{ fontSize: "12px", color: "#636E72", margin: 0 }}>
                  {article.readTime}
                </p>
              </div>


              {/* Title */}
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginTop: "12px", marginBottom: "0", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {article.title}
              </h3>
              {/* Reading Time */}
              <span className="text-xs text-gray-400" style={{ display: "block", marginTop: "4px", marginBottom: "0" }}>⏱ {article.readTime}</span>

              {/* Excerpt */}
              <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginTop: "8px", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {article.excerpt}
              </p>

              {/* Read Link */}
              <p style={{ fontSize: "14px", color: "#059669", fontWeight: "500", margin: 0 }}>
                Read Guide →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center" }}>
        <Link
          href="/start"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            backgroundColor: "#00B894",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "background-color 0.2s"
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#009B7B";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#00B894";
          }}
        >
          View All Guides →
        </Link>
      </div>
    </>
  );
}
