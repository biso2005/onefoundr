import PathCards from "@/components/start-here/PathCards";
import { Rocket, Package, Megaphone, DollarSign, Settings, Cpu, ArrowDown } from "lucide-react";
import PopularGuides from "@/components/start-here/PopularGuides";
import FreeResources from "@/components/start-here/FreeResources";
import NewsletterCTA from "@/components/start-here/NewsletterCTA";
import FinalCTA from "@/components/start-here/FinalCTA";

export const metadata = {
  title: "Start Here — OneFoundr | Your Guide to Building a One-Person Business",
  description:
    "New to OneFoundr? This page will point you to exactly what you need based on where you are in your solo founder journey."
};

const JOURNEY_STEPS = [
  {
    number: "1",
    label: "Start Solo",
    icon: Rocket,
    stage: "Stage 1: Foundation",
    article: {
      href: "/start/ai-launch-30days",
      title: "Launch Your Solo Business in 30 Days (with AI)"
    }
  },
  {
    number: "2",
    label: "Build Offer",
    icon: Package,
    stage: "Stage 1: Foundation",
    article: {
      href: "/offer/productized-services",
      title: "Productized Services: The $5K-$20K/Month Bridge to Scaling"
    }
  },
  {
    number: "3",
    label: "Marketing",
    icon: Megaphone,
    stage: "Stage 2: Growth",
    article: {
      href: "/marketing/content-marketing",
      title: "Content Marketing for Solopreneurs: Minimum Effort, Maximum Results"
    }
  },
  {
    number: "4",
    label: "Sales",
    icon: DollarSign,
    stage: "Stage 2: Growth",
    article: {
      href: "/sales/getting-clients",
      title: "Getting Your First 10 Clients: The Honest Playbook (No Theory, Just Numbers)"
    }
  },
  {
    number: "5",
    label: "Systems",
    icon: Settings,
    stage: "Stage 3: Scale",
    article: {
      href: "/systems/sops",
      title: "How to Create SOPs for Your Solo Business"
    }
  },
  {
    number: "6",
    label: "Tools",
    icon: Cpu,
    stage: "Stage 3: Scale",
    article: {
      href: "/tools/ai-tools",
      title: "15 AI Tools That Replace a Team for Solopreneurs"
    }
  }
];

export default function StartHerePage() {
  return (
    <>
      {/* SECTION 1: PAGE HERO */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "12px" }}>
            Welcome
          </p>

          <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "20px" }}>
            New to OneFoundr? Start Here.
          </h1>

          <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", marginBottom: "8px" }}>
            Whether you're just starting your solo business or looking to grow the one you have, this page will point you to exactly what you need. No overwhelm. Just the right next step.
          </p>

          <p style={{ fontSize: "14px", color: "#636E72", marginBottom: "48px" }}>
            Reading time: 5 minutes | Last updated: March 2026
          </p>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "0px", paddingBottom: "48px" }} className="px-6" id="your-journey">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "16px" }}>
            How OneFoundr Works
          </h2>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "24px" }}>
            OneFoundr is organized around the solo founder journey. Think of it as a roadmap.
          </p>

          {/* Quick Navigation Links */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Jump to a stage:</p>
            <div className="flex flex-wrap gap-3">
              <a href="#stage-1-foundation" className="px-3 py-1 bg-white border border-emerald-500 text-emerald-600 rounded text-sm hover:bg-emerald-50">
                Stage 1: Foundation
              </a>
              <a href="#stage-2-growth" className="px-3 py-1 bg-white border border-blue-500 text-blue-600 rounded text-sm hover:bg-blue-50">
                Stage 2: Growth
              </a>
              <a href="#stage-3-scale" className="px-3 py-1 bg-white border border-purple-500 text-purple-600 rounded text-sm hover:bg-purple-50">
                Stage 3: Scale
              </a>
            </div>
          </div>

          {/* Stage 1: Foundation */}
          <div id="stage-1-foundation" className="mb-16">
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#059669", marginBottom: "12px" }} className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Stage 1: Building Your Foundation
            </h3>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {JOURNEY_STEPS.filter(step => step.stage === "Stage 1: Foundation").map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex flex-col items-start p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition">
                    <Icon className="text-emerald-500 mb-3" size={28} />
                    <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center mb-3">
                      <span className="text-sm font-bold text-emerald-600">{step.number}</span>
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-2">{step.label}</p>
                    <p className="text-xs text-gray-500 mb-3">{step.stage}</p>
                    <a href={step.article.href} className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
                      📖 {step.article.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stage 2: Growth */}
          <div id="stage-2-growth" className="mb-16">
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#2563EB", marginBottom: "12px" }} className="flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              Stage 2: Growing Your Impact
            </h3>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {JOURNEY_STEPS.filter(step => step.stage === "Stage 2: Growth").map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex flex-col items-start p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition">
                    <Icon className="text-blue-500 mb-3" size={28} />
                    <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center mb-3">
                      <span className="text-sm font-bold text-blue-600">{step.number}</span>
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-2">{step.label}</p>
                    <p className="text-xs text-gray-500 mb-3">{step.stage}</p>
                    <a href={step.article.href} className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      📖 {step.article.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stage 3: Scale */}
          <div id="stage-3-scale" className="mb-16">
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#9333EA", marginBottom: "12px" }} className="flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              Stage 3: Scaling Smart
            </h3>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {JOURNEY_STEPS.filter(step => step.stage === "Stage 3: Scale").map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex flex-col items-start p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition">
                    <Icon className="text-purple-500 mb-3" size={28} />
                    <div className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center mb-3">
                      <span className="text-sm font-bold text-purple-600">{step.number}</span>
                    </div>
                    <p className="text-base font-semibold text-gray-900 mb-2">{step.label}</p>
                    <p className="text-xs text-gray-500 mb-3">{step.stage}</p>
                    <a href={step.article.href} className="text-sm text-purple-600 hover:text-purple-700 hover:underline font-medium">
                      📖 {step.article.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "64px" }}>
            You can follow the path step by step, or jump straight to the stage you're in right now using the links above.
          </p>
        </div>
      </section>

      {/* SECTION 3: PATH CARDS */}
      <section id="your-path">
        <PathCards />
      </section>

      {/* SECTION 4: POPULAR GUIDES */}
      <section id="popular-guides">
        <PopularGuides />
      </section>

      {/* SECTION 5: FREE RESOURCES */}
      <section id="resources">
        <FreeResources />
      </section>

      {/* SECTION 6: NEWSLETTER CTA */}
      <section id="newsletter">
        <NewsletterCTA />
      </section>

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />
    </>
  );
}
