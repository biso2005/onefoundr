"use client";

import Link from "next/link";

const JOURNEY_CARDS = [
  {
    emoji: "💡",
    title: "Start Solo",
    description: "Find your idea, validate it, and choose a business model that works for one person.",
    href: "/start",
    tag: "STEP 1"
  },
  {
    emoji: "📦",
    title: "Build Your Offer",
    description: "Turn your skills into sellable products and services people actually want to buy.",
    href: "/offer",
    tag: "STEP 2"
  },
  {
    emoji: "📣",
    title: "Get Found",
    description: "Content marketing, SEO, personal branding, and audience building — the solo way.",
    href: "/marketing",
    tag: "STEP 3"
  },
  {
    emoji: "🤝",
    title: "Win Clients",
    description: "Sell confidently without being pushy. Funnels, calls, proposals, and closing.",
    href: "/sales",
    tag: "STEP 4"
  },
  {
    emoji: "⚙️",
    title: "Build Systems",
    description: "SOPs, workflows, automation, and operations that run your business smoothly.",
    href: "/systems",
    tag: "STEP 5"
  },
  {
    emoji: "🛠️",
    title: "Tools & AI",
    description: "The essential tech stack and AI tools for running a one-person business efficiently.",
    href: "/tools",
    tag: "STEP 6"
  }
];

const FEATURED_GUIDES = {
  featured: {
    category: "TOOLS & AI",
    title: "The Only 10 Tools You Actually Need as a Solopreneur",
    description: "A curated list of essential tools to run your entire solo business — from website to invoicing to automation.",
    readTime: "12 min read",
    href: "/tools/tech-stack"
  },
  small: [
    {
      category: "MARKETING",
      emoji: "📣",
      title: "Content Marketing for Solopreneurs: Minimum Effort, Maximum Results",
      readTime: "8 min read",
      href: "/marketing/content-marketing"
    },
    {
      category: "OFFER",
      emoji: "📦",
      title: "Pricing Strategy for Solopreneurs: The Complete Playbook",
      readTime: "10 min read",
      href: "/offer/pricing-strategy"
    },
    {
      category: "SYSTEMS",
      emoji: "⚙️",
      title: "The Solopreneur Operating System: Systemize Every Part of Your Business",
      readTime: "15 min read",
      href: "/systems"
    }
  ]
};

const STORIES_CARDS = [
  {
    initials: "SK",
    name: "Sarah K.",
    business: "Productized Design Service",
    revenue: "$12K/mo",
    quote: "I replaced my agency salary by productizing one design service and automating everything I could.",
    href: "/stories/sarah-k"
  },
  {
    initials: "MR",
    name: "Mike R.",
    business: "Micro-SaaS",
    revenue: "$8K/mo",
    quote: "I built a simple SaaS tool with no-code. No investors, no team, just me and my laptop.",
    href: "/stories/mike-r"
  },
  {
    initials: "PS",
    name: "Priya S.",
    business: "Newsletter Business",
    revenue: "$6K/mo",
    quote: "From zero subscribers to a profitable newsletter in 14 months. Content is the best business model for solopreneurs.",
    href: "/stories/priya-s"
  }
];

export default function Home() {
  return (
    <>
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Two-column grid: text on left (60%), stats on right (40%) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="md:grid-cols-[60%_40%] grid-cols-1">
          
          {/* LEFT COLUMN: Text Content */}
          <div>
            {/* Eyebrow */}
            <p style={{ fontSize: "14px", fontWeight: "500", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              For Solo Founders & Solopreneurs
            </p>

            {/* Main Heading */}
            <h1 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "24px" }}>
              Build a Profitable Business.{" "}
              <span style={{ color: "#00B894" }}>By Yourself.</span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", maxWidth: "540px", marginBottom: "32px" }}>
              Actionable guides, proven systems, and the right tools to start, grow, and run a one-person business — without a team.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }} className="md:flex-row flex-col sm:flex">
              <Link
                href="/start-here"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "#00B894",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                  border: "none",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#009B7B";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#00B894";
                }}
              >
                Start Here →
              </Link>
              <Link
                href="/start"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "#2D3436",
                  fontWeight: "600",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "2px solid #2D3436",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2D3436";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2D3436";
                }}
              >
                Browse All Guides
              </Link>
            </div>

            {/* Trust Indicators */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                50,000+ solo founders
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                200+ actionable guides
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                <span style={{ marginRight: "8px" }}>✓</span>
                100% free resources
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats Card */}
          <div style={{ backgroundColor: "#F7F7F7", borderRadius: "16px", border: "1px solid #E2E8F0", padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Stat 1 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                200+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Actionable Guides
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Stat 2 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                50K+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Solo Founders
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Stat 3 */}
            <div>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#00B894", marginBottom: "8px" }}>
                15+
              </div>
              <div style={{ fontSize: "14px", color: "#636E72" }}>
                Tool Categories
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0" }}></div>

            {/* Quote */}
            <div>
              <p style={{ fontSize: "14px", color: "#636E72", fontStyle: "italic", margin: 0 }}>
                "The resource I wish existed when I started my solo business."
              </p>
              <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "12px", margin: 0 }}>
                — A OneFoundr reader
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* JOURNEY MAP SECTION */}
    <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
            Your Roadmap
          </p>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "12px" }}>
            Everything You Need to Build Solo
          </h2>
          <p style={{ fontSize: "16px", color: "#636E72" }}>
            Follow the path or jump to what you need
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px", marginBottom: "48px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {JOURNEY_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              style={{
                display: "block",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "28px",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00B894";
                el.style.boxShadow = "0 4px 12px rgba(0, 184, 148, 0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#E2E8F0";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top Row: Tag + Emoji */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600" }}>
                  {card.tag}
                </span>
                <span style={{ fontSize: "28px" }}>
                  {card.emoji}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginBottom: "8px" }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px", margin: 0 }}>
                {card.description}
              </p>

              {/* Explore Link */}
              <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0, marginTop: "16px" }}>
                Explore →
              </p>
            </Link>
          ))}
        </div>

        {/* Secondary Topics */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
            Plus: Money & Finance • Growth • Productivity • Mindset • Stories
          </p>
        </div>
      </div>
    </section>

    {/* FEATURED GUIDES SECTION */}
    <section style={{ backgroundColor: "#FFFFFF", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }} className="md:flex-row flex-col">
          <div>
            <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
              Learn
            </p>
            <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", margin: 0 }}>
              Most Popular Guides
            </h2>
          </div>
          <Link
            href="/start"
            style={{
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "text-decoration 0.2s"
            }}
            className="hidden md:block"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
            }}
          >
            View All Guides →
          </Link>
        </div>

        {/* Featured Content Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px", alignItems: "flex-start" }} className="md:grid-cols-[55%_45%] grid-cols-1">
          {/* Large Featured Card */}
          <Link
            href={FEATURED_GUIDES.featured.href}
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
            {/* Placeholder Image Area */}
            <div style={{ height: "220px", background: "linear-gradient(135deg, rgba(0, 184, 148, 0.1) 0%, rgba(0, 184, 148, 0.05) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                {FEATURED_GUIDES.featured.category}
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginTop: "8px", margin: 0 }}>
                Featured
              </p>
            </div>

            {/* Content Area */}
            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
                {FEATURED_GUIDES.featured.category}
              </p>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2D3436", marginTop: "8px", marginBottom: 0 }}>
                {FEATURED_GUIDES.featured.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#636E72", marginTop: "8px", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {FEATURED_GUIDES.featured.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#636E72" }}>
                  {FEATURED_GUIDES.featured.readTime}
                </span>
                <span style={{ fontSize: "14px", color: "#00B894", fontWeight: "500" }}>
                  Read Guide →
                </span>
              </div>
            </div>
          </Link>

          {/* Right Column: 3 Smaller Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FEATURED_GUIDES.small.map((guide) => (
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
                {/* Left: Colored Placeholder Square */}
                <div style={{ width: "80px", minWidth: "80px", height: "80px", backgroundColor: "#F7F7F7", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }} className="md:w-20 md:h-20 sm:w-16 sm:h-16">
                  {guide.emoji}
                </div>

                {/* Right: Text Content */}
                <div style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                  <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#00B894", fontWeight: "600", margin: 0 }}>
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

        {/* Mobile View All Link */}
        <div style={{ textAlign: "center", marginTop: "24px" }} className="md:hidden">
          <Link
            href="/start"
            style={{
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              textDecoration: "none",
              transition: "text-decoration 0.2s"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
            }}
          >
            View All Guides →
          </Link>
        </div>
      </div>
    </section>

    {/* SOLOPRENEUR STORIES SECTION */}
    <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "80px", paddingBottom: "80px", color: "white" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "8px" }}>
            Real Stories
          </p>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "white", lineHeight: "1.2", marginBottom: "12px" }}>
            Built Alone. Thriving.
          </h2>
          <p style={{ fontSize: "16px", color: "#B2BEC3" }}>
            Real solopreneurs sharing real numbers and real lessons
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }} className="md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {STORIES_CARDS.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              style={{
                display: "block",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid #404D4D",
                borderRadius: "12px",
                padding: "28px",
                textDecoration: "none",
                transition: "all 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00B894";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#404D4D";
              }}
            >
              {/* Top Row: Avatar + Name/Business */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                {/* Avatar Circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    backgroundColor: "#00B894",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "white"
                  }}
                >
                  {story.initials}
                </div>

                {/* Name and Business */}
                <div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "white", margin: 0 }}>
                    {story.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "#B2BEC3", margin: 0 }}>
                    {story.business}
                  </p>
                </div>
              </div>

              {/* Revenue Badge */}
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(0, 184, 148, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  marginBottom: "16px"
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#00B894" }}>
                  {story.revenue}
                </span>
              </div>

              {/* Quote */}
              <p style={{ fontSize: "14px", color: "#D4D8D9", lineHeight: "1.6", fontStyle: "italic", margin: 0, marginTop: "16px", marginBottom: "20px" }}>
                "{story.quote}"
              </p>

              {/* Read Story Link */}
              <p style={{ fontSize: "14px", color: "#00B894", fontWeight: "500", margin: 0 }}>
                Read Story →
              </p>
            </Link>
          ))}
        </div>

        {/* View All Stories Button */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/stories"
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#00B894",
              fontWeight: "500",
              border: "1px solid #00B894",
              padding: "10px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#00B894";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#00B894";
            }}
          >
            View All Stories →
          </Link>
        </div>
      </div>
    </section>

    {/* FREE RESOURCES / LEAD MAGNET SECTION */}
    <section style={{ backgroundColor: "#00B894", width: "100%", paddingTop: "80px", paddingBottom: "80px" }} className="md:py-20 py-12 px-6">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="md:grid-cols-[55%_45%] grid-cols-1">
          
          {/* LEFT COLUMN: Text Content and Email Form */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "4px 12px", borderRadius: "9999px", marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "white", fontWeight: "600" }}>
                Free Resource
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "white", lineHeight: "1.2", marginBottom: "12px" }}>
              The Solopreneur Starter Kit
            </h2>

            {/* Description */}
            <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.6", maxWidth: "480px", marginBottom: "32px" }}>
              Everything you need to start and run your one-person business — templates, checklists, and guides in one free bundle.
            </p>

            {/* Email Form */}
            <div style={{ display: "flex", gap: "0px", marginBottom: "16px", flexWrap: "wrap" }} className="md:flex-row flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: "200px",
                  padding: "14px 20px",
                  borderRadius: "8px 0 0 8px",
                  border: "none",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  outline: "none",
                  color: "#2D3436",
                  backgroundColor: "white"
                }}
                className="md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                style={{
                  padding: "14px 28px",
                  backgroundColor: "#2D3436",
                  color: "white",
                  border: "none",
                  borderRadius: "0 8px 8px 0",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  whiteSpace: "nowrap"
                }}
                className="md:rounded-r-lg md:rounded-l-none"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1f1f";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2D3436";
                }}
              >
                Get Free Access
              </button>
            </div>

            {/* Trust Text */}
            <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>
              Downloaded by 12,000+ solo founders • No spam, ever
            </p>
          </div>

          {/* RIGHT COLUMN: Checklist Card */}
          <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "32px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}>
            {/* Card Heading */}
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginBottom: "20px", margin: 0 }}>
              What's Inside:
            </h3>

            {/* Checklist Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Business Model Canvas Template",
                "Client Proposal Template",
                "Weekly Planning System",
                "Pricing Calculator Spreadsheet",
                "30-Day Content Calendar",
                "SOP Template Library"
              ].map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "16px" }}>✅</span>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#2D3436" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #E2E8F0", marginTop: "20px", paddingTop: "20px" }}></div>

            {/* Value Text */}
            <div>
              <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
                Total value: <span style={{ textDecoration: "line-through" }}>$149</span>
              </p>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "#00B894", marginTop: "4px", margin: 0 }}>
                Yours free today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
