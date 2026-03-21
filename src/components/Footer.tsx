"use client";

import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, FOOTER_LINKS } from "@/lib/constants";
import EmailSignupForm from "./EmailSignupForm";

export default function Footer() {

  return (
    <footer>
      {/* NEWSLETTER SECTION */}
      <section style={{ backgroundColor: "#F7F7F7", width: "100%", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#00B894", marginBottom: "12px" }}>
            The OneFoundr Letter
          </h2>
          <p style={{ fontSize: "14px", color: "#636E72", marginBottom: "24px" }}>
            One actionable idea every Tuesday to help you build a better one-person business.
          </p>

          {/* Email Form */}
          <div style={{ maxWidth: "400px", margin: "0 auto 12px" }}>
            <EmailSignupForm variant="default" placeholder="Enter your email" />
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section style={{ backgroundColor: "#2D3436", color: "white", width: "100%", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Footer Grid - Responsive: 4 cols desktop, 2 cols tablet, 1 col mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "48px"
          }}>
            {/* Column 1: Brand */}
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "white", marginBottom: "12px" }}>
                {SITE_NAME}
              </h3>
              <p style={{ fontSize: "14px", color: "#9CA3AF", marginBottom: "24px" }}>
                {SITE_TAGLINE}
              </p>
              <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#059669"} onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}>
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#059669"} onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}>
                  LinkedIn
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#059669"} onMouseLeave={(e) => e.currentTarget.style.color = "#9CA3AF"}>
                  YouTube
                </a>
              </div>
            </div>

            {/* Column 2: Categories */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: "600", color: "white", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Categories
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {FOOTER_LINKS.Categories.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#059669";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: "600", color: "white", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Resources
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {FOOTER_LINKS.Resources.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#059669";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: "600", color: "white", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Company
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {FOOTER_LINKS.Company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#9CA3AF",
                      textDecoration: "none",
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#059669";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div style={{ borderTop: "1px solid #4B5563", paddingTop: "24px", paddingBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
              © 2024 {SITE_NAME}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {FOOTER_LINKS.Legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "12px",
                    color: "#6B7280",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#00B894";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#6B7280";
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
