"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActivePath = (href: string) => {
    return pathname === href;
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, width: "100%", backgroundColor: "white", borderBottom: "1px solid #E2E8F0", minHeight: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", height: "64px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#2D3436" }}>
            <span style={{ fontWeight: "400" }}>One</span>
            <span style={{ fontWeight: "700" }}>Foundr</span>
          </div>
        </Link>

        {/* Desktop Navigation - Only show if not mobile */}
        {!isMobile && (
          <nav aria-label="Main navigation" style={{ display: "flex", gap: "32px" }}>
            {NAV_LINKS.map((link) => {
              const isActive = isActivePath(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    color: isActive ? "#059669" : "#636E72",
                    fontWeight: isActive ? "500" : "400",
                    transition: "color 0.2s"
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Mobile Hamburger Menu Button - Only show if mobile */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#2D3436",
                transition: "all 0.3s",
                transform: mobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none"
              }}
            ></span>
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#2D3436",
                transition: "opacity 0.3s",
                opacity: mobileMenuOpen ? "0" : "1"
              }}
            ></span>
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#2D3436",
                transition: "all 0.3s",
                transform: mobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none"
              }}
            ></span>
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && mobileMenuOpen && (
        <nav aria-label="Mobile navigation menu" style={{ borderTop: "1px solid #E2E8F0", backgroundColor: "#FFFFFF" }}>
          {NAV_LINKS.map((link) => {
            const isActive = isActivePath(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "16px 24px",
                  borderBottom: "1px solid #E2E8F0",
                  textDecoration: "none",
                  fontSize: "14px",
                  color: isActive ? "#059669" : "#2D3436",
                  fontWeight: isActive ? "500" : "400",
                  backgroundColor: isActive ? "#F7F7F7" : "transparent"
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
