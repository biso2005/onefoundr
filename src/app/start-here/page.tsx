import PathCards from "@/components/start-here/PathCards";
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
  { number: "1", label: "Start" },
  { number: "2", label: "Offer" },
  { number: "3", label: "Market" },
  { number: "4", label: "Sell" },
  { number: "5", label: "Systemize" },
  { number: "6", label: "Grow" }
];

export default function StartHerePage() {
  return (
    <>
      {/* SECTION 1: PAGE HERO */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00B894", fontWeight: "600", marginBottom: "12px" }}>
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
            {JOURNEY_STEPS.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1">
                {/* Circle */}
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center mb-2">
                  <span className="text-sm font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-primary text-center">
                  {step.label}
                </p>

                {/* Connector Line */}
                {index < JOURNEY_STEPS.length - 1 && (
                  <div className="flex-1 border-t-2 border-dashed border-gray-200 mt-2 w-full" />
                )}
              </div>
            ))}
          </div>

          {/* Journey Steps - Mobile (visible on mobile, hidden on md+) */}
          <div className="flex md:hidden flex-col gap-4 mb-6">
            {JOURNEY_STEPS.map((step) => (
              <div key={step.number} className="flex gap-3 items-center">
                <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">
                  {step.label}
                </p>
              </div>
            ))}
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
