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
    article: {
      href: "/start/business-ideas",
      title: "One-Person Business Ideas That Actually Work"
    }
  },
  {
    number: "2",
    label: "Build Offer",
    icon: Package,
    article: {
      href: "/offer/productized-services",
      title: "Productized Services: The $5K-$20K/Month Bridge to Scaling"
    }
  },
  {
    number: "3",
    label: "Marketing",
    icon: Megaphone,
    article: {
      href: "/marketing/content-marketing",
      title: "Content Marketing for Solopreneurs: Minimum Effort, Maximum Results"
    }
  },
  {
    number: "4",
    label: "Sales",
    icon: DollarSign,
    article: {
      href: "/sales/getting-clients",
      title: "Getting Your First 10 Clients: The Honest Playbook (No Theory, Just Numbers)"
    }
  },
  {
    number: "5",
    label: "Systems",
    icon: Settings,
    article: {
      href: "/systems/sops",
      title: "How to Create SOPs for Your Solo Business"
    }
  },
  {
    number: "6",
    label: "Tools",
    icon: Cpu,
    article: {
      href: "/tools/ai-tools",
      title: "15 AI Tools That Replace a Team for Solopreneurs in 2025"
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
            Reading time: 5 minutes | Last updated: December 2024
          </p>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "0px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "16px" }}>
            How OneFoundr Works
          </h2>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "24px" }}>
            OneFoundr is organized around the solo founder journey. Think of it as a roadmap.
          </p>

          {/* Journey Steps - Desktop (hidden on mobile, visible on md+) */}
          <div className="hidden md:flex flex-row items-center gap-2 justify-between mb-6">
            {JOURNEY_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center flex-1 relative">
                  {/* Icon above number */}
                  <Icon className="text-emerald-500 mb-1" size={24} />
                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mb-2">
                    <span className="text-sm font-bold text-accentDark">
                      {step.number}
                    </span>
                  </div>
                  {/* Label */}
                  <p className="text-sm font-medium text-primary text-center">
                    {step.label}
                  </p>
                  {/* Top pick link */}
                  <a
                    href={step.article.href}
                    className="text-sm text-emerald-600 hover:text-emerald-700 underline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📌 Start with: {step.article.title}
                  </a>
                  {/* Connector Line */}
                  {index < JOURNEY_STEPS.length - 1 && (
                    <div className="absolute right-0 top-1/2 w-full h-0.5 border-t-2 border-dashed border-gray-200 z-0" style={{ left: '100%', width: '40px', marginTop: '-1px' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Journey Steps - Mobile (visible on mobile, hidden on md+) */}
          <div className="md:hidden mb-8 flex flex-col gap-6">
            {JOURNEY_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <>
                  <div key={step.number} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <Icon className="text-emerald-500 mb-1" size={24} />
                      <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mb-1">
                        <span className="text-base font-bold text-accentDark">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-base font-semibold text-primary block mb-1">{step.label}</span>
                      <a
                        href={step.article.href}
                        className="text-sm text-emerald-600 hover:text-emerald-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📌 Start with: {step.article.title}
                      </a>
                    </div>
                  </div>
                  {index < JOURNEY_STEPS.length - 1 && (
                    <ArrowDown className="text-gray-300 my-2 mx-auto" size={20} />
                  )}
                </>
              );
            })}
          </div>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "64px" }}>
            You can follow the path step by step, or jump straight to the stage you're in right now.
          </p>
        </div>
      </section>

      {/* SECTION 3: PATH CARDS */}
      <PathCards />

      {/* SECTION 4: POPULAR GUIDES */}
      <PopularGuides />

      {/* SECTION 5: FREE RESOURCES */}
      <FreeResources />

      {/* SECTION 6: NEWSLETTER CTA */}
      <NewsletterCTA />

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />
    </>
  );
}
