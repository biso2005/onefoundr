"use client";

import Link from "next/link";

interface FeaturedGuidesClientProps {
  featured: {
    category: string;
    title: string;
    description: string;
    readTime: string;
    href: string;
  };
  small: Array<{
    category: string;
    emoji: string;
    title: string;
    readTime: string;
    href: string;
  }>;
}

export default function FeaturedGuidesClient({ featured, small }: FeaturedGuidesClientProps) {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px", alignItems: "flex-start" }} className="md:grid-cols-[55%_45%] grid-cols-1">
        <Link
          href={featured.href}
          style={{
            display: "block",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            overflow: "hidden",
            textDecoration: "none",
            transition: "box-shadow 0.2s"
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          <div style={{ height: "220px", background: "linear-gradient(135deg, rgba(0, 184, 148, 0.1) 0%, rgba(0, 184, 148, 0.05) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#059669", fontWeight: "600", margin: 0 }}>
              {featured.category}
            </p>
            <p style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginTop: "8px", margin: 0 }}>
              Featured
            </p>
          </div>

          <div style={{ padding: "24px" }}>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#059669", fontWeight: "600", margin: 0 }}>
              {featured.category}
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginTop: "8px", marginBottom: 0 }}>
              {featured.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#636E72", marginTop: "8px", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {featured.description}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#636E72" }}>
                {featured.readTime}
              </span>
              <span style={{ fontSize: "14px", color: "#059669", fontWeight: "500" }}>
                Read Guide →
              </span>
            </div>
          </div>
        </Link>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {small.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              style={{
                display: "flex",
                padding: "16px",
                backgroundColor: "transparent",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background-color 0.2s"
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F7F7F7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              <div style={{ width: "80px", minWidth: "80px", height: "80px", backgroundColor: "#F7F7F7", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }} className="md:w-20 md:h-20 sm:w-16 sm:h-16">
                {guide.emoji}
              </div>

              <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#059669", fontWeight: "600", margin: 0 }}>
                  {guide.category}
                </p>
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#2D3436", marginTop: "4px", marginBottom: 0 }}>
                  {guide.title}
                </h4>
                <p style={{ fontSize: "12px", color: "#636E72", marginTop: "4px", margin: 0 }}>
                  {guide.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
