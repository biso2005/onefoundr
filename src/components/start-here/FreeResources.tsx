import Link from "next/link";

const RESOURCES = [
  { emoji: "📋", name: "Business Model Canvas", description: "Map your solo business on one page" },
  { emoji: "💰", name: "Pricing Calculator", description: "Figure out your rates based on value and goals" },
  { emoji: "📅", name: "Content Calendar", description: "Plan 30 days of content in one sitting" },
  { emoji: "📄", name: "Client Proposal Template", description: "Win clients with professional proposals" },
  { emoji: "⚙️", name: "SOP Template Library", description: "Document every process in your business" },
  { emoji: "✅", name: "Launch Checklist", description: "Every step from idea to first dollar" }
];

export default function FreeResources() {
  return (
    <section className="bg-muted w-full py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(24px,5vw,42px)] font-bold text-primary mb-2 text-center">
          Free Templates & Resources
        </h2>
        <p className="text-base text-textLight mb-8 text-center">
          Tools to help you take action faster
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {RESOURCES.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 border border-border flex gap-4 items-center transition-all hover:shadow-sm"
            >
              {/* Emoji */}
              <span className="text-2xl min-w-[32px] text-center">
                {resource.emoji}
              </span>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-primary mb-1">
                  {resource.name}
                </p>
                <p className="text-[13px] text-textLight m-0">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tools"
            className="inline-block text-sm text-accent font-medium no-underline hover:text-accentDark transition-colors"
          >
            Get All Templates Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
