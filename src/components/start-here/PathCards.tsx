"use client";

import Link from "next/link";

const PATHS = [
  {
    emoji: "🌱",
    label: "JUST STARTING",
    heading: "I have an idea but haven't started yet",
    description: "You're thinking about starting a solo business, or you're in your first few months.",
    guides: [
      { title: "How to Start a One-Person Business", href: "/start" },
      { title: "47 One-Person Business Ideas", href: "/start/business-ideas" },
      { title: "How to Validate Your Idea in 7 Days", href: "/start/idea-validation" },
      { title: "How to Create an Offer That Sells", href: "/offer" },
      { title: "The Only 10 Tools You Actually Need", href: "/tools/tech-stack" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/start"
  },
  {
    emoji: "🌿",
    label: "ALREADY RUNNING",
    heading: "I have clients but need better systems",
    description: "You're already making money, but things feel messy, overwhelming, or hard to sustain.",
    guides: [
      { title: "The Solopreneur Operating System", href: "/systems" },
      { title: "Marketing for Solopreneurs", href: "/marketing" },
      { title: "Client Onboarding Process", href: "/systems/client-onboarding" },
      { title: "Pricing Strategy for Solopreneurs", href: "/offer/pricing-strategy" },
      { title: "AI Tools That Replace a Team", href: "/tools/ai-tools" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/systems"
  },
  {
    emoji: "🌳",
    label: "READY TO SCALE",
    heading: "I want to grow without hiring",
    description: "Your business is working, and you want to grow revenue without adding a team.",
    guides: [
      { title: "How to Scale a One-Person Business", href: "/growth/scaling-solo" },
      { title: "Offer Stacking: Multiple Revenue Streams", href: "/offer/offer-stacking" },
      { title: "Building Recurring Revenue", href: "/growth/recurring-revenue" },
      { title: "Sales Funnel for Solopreneurs", href: "/sales/sales-funnels" },
      { title: "Email Marketing for Solo Businesses", href: "/marketing/email-marketing" }
    ],
    buttonText: "Start This Path →",
    buttonHref: "/growth"
  }
];

export default function PathCards() {
  return (
    <section className="bg-muted w-full py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-3">
            Pick Your Path
          </h2>
          <p className="text-base text-textLight">
            Choose the option that sounds most like you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {PATHS.map((path) => (
            <div
              key={path.label}
              className="bg-white rounded-xl p-8 border-t-4 border-accent shadow-sm transition-shadow flex flex-col hover:shadow-md"
            >
              {/* Emoji and Label */}
              <div className="mb-4">
                <span className="text-3xl mr-2">{path.emoji}</span>
                <p className="text-xs uppercase tracking-wider text-accentDark font-semibold m-0">
                  {path.label}
                </p>
              </div>

              {/* Heading */}
              <h3 className="text-lg font-bold text-primary m-0 mb-3">
                {path.heading}
              </h3>

              {/* Description */}
              <p className="text-sm text-textLight leading-relaxed m-0 mb-6">
                {path.description}
              </p>

              {/* Reading List */}
              <p className="text-[13px] font-semibold text-primary m-0 mb-4">
                Your reading list:
              </p>

              {/* Guide Links */}
              <div className="flex flex-col gap-3 mb-6">
                {path.guides.map((guide, index) => (
                  <Link
                    key={index}
                    href={guide.href}
                    className="flex gap-3 items-start no-underline"
                  >
                    <span className="text-[13px] font-bold text-accentDark min-w-[20px]">
                      {index + 1}
                    </span>
                    <span className="text-[13px] text-primary">
                      {guide.title}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={path.buttonHref}
                className="block w-full bg-accent text-white text-center py-3 rounded-lg text-[13px] font-semibold no-underline transition-opacity mt-auto hover:opacity-90"
              >
                {path.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
