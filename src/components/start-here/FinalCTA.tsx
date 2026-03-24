"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-muted w-full py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-2">
            Your Next Step
          </h2>
          <p className="text-base text-textLight">
            Don't overthink it. Pick one:
          </p>
        </div>

        {/* CTA Rows */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            {
              emoji: "🌱",
              text: "Just starting? → Read: How to Start a One-Person Business",
              href: "/start"
            },
            {
              emoji: "🔧",
              text: "Need better systems? → Read: The Solopreneur Operating System",
              href: "/systems"
            },
            {
              emoji: "📈",
              text: "Ready to grow? → Read: How to Scale Solo",
              href: "/growth"
            },
            {
              emoji: "🛠️",
              text: "Want tool recommendations? → Browse: Best Tools for Solopreneurs",
              href: "/tools"
            }
          ].map((cta, index) => (
            <Link
              key={index}
              href={cta.href}
              className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-border no-underline transition-all hover:shadow-sm"
            >
              <span className="text-lg min-w-[24px]">{cta.emoji}</span>
              <span className="text-sm text-primary font-medium flex-1">{cta.text}</span>
              <span className="text-accentDark">→</span>
            </Link>
          ))}
        </div>

        {/* Final Message */}
        <div className="text-center">
          <p className="text-lg font-bold text-primary">
            Welcome to OneFoundr. Let's build. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
