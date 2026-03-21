import Link from "next/link";
import CTAButtons from "@/components/about/CTAButtons";

export const metadata = {
  title: "About OneFoundr — The Playbook for One-Person Businesses",
  description:
    "OneFoundr is a resource hub for solopreneurs and solo founders. Practical guides, tools, and systems to start, run, and grow a one-person business."
};

const PRINCIPLES = [
  {
    number: "1",
    title: "One Person Is Enough",
    description:
      "You don't need a co-founder, a team, or venture capital to build a real business. You need the right strategy, the right tools, and the right systems."
  },
  {
    number: "2",
    title: "Systems Beat Hustle",
    description:
      "Working harder isn't the answer. Building smarter systems is. We believe in automation, SOPs, and leverage — not 18-hour days."
  },
  {
    number: "3",
    title: "Profit Over Growth",
    description:
      "We'd rather help you build a $10K/month business that gives you freedom than a $1M business that owns your life."
  },
  {
    number: "4",
    title: "Action Over Theory",
    description:
      "Every piece of content on this site is designed to help you do something today — not just learn something interesting."
  },
  {
    number: "5",
    title: "You're Not Alone in Going Solo",
    description:
      "Building alone doesn't mean being alone. We're building a community of people who get it — the wins, the struggles, and everything in between."
  }
];

const CONTENT_CATEGORIES = [
  { emoji: "🚀", name: "Start", description: "Validate ideas, choose a niche, pick a business model" },
  { emoji: "📦", name: "Offer", description: "Turn your skills into sellable products and services" },
  { emoji: "📣", name: "Marketing", description: "Get found, build an audience, generate leads" },
  { emoji: "🤝", name: "Sales", description: "Win clients without being pushy or salesy" },
  { emoji: "⚙️", name: "Systems", description: "Build SOPs, workflows, and operations that run smoothly" },
  { emoji: "🛠️", name: "Tools & AI", description: "The best tech stack for running a business solo" },
  { emoji: "💰", name: "Money", description: "Pricing, taxes, cash flow, and financial strategy" },
  { emoji: "📈", name: "Growth", description: "Scale your revenue without scaling your headcount" },
  { emoji: "🧠", name: "Mindset", description: "Stay motivated, avoid burnout, design your ideal life" },
  { emoji: "📖", name: "Stories", description: "Real solopreneurs sharing real numbers and lessons" }
];

const COMPARISONS = [
  { old: "Written for funded startups", new: "Written for solo founders" },
  { old: "\"Hire a team\" mindset", new: "\"Build a system\" mindset" },
  { old: "Scale at all costs", new: "Grow with intention" },
  { old: "Theory and thought leadership", new: "Actionable guides you can use today" },
  { old: "Generic advice for everyone", new: "Specific strategies for one-person ops" },
  { old: "Celebrity founder interviews", new: "Real solopreneurs with real numbers" }
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1: PAGE HERO */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#059669", fontWeight: "600", marginBottom: "12px" }}>
            About OneFoundr
          </p>

          <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "700", color: "#2D3436", lineHeight: "1.2", marginBottom: "20px" }}>
            You Don't Need a Team to Build Something Great.
          </h1>

          <p style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.6", marginBottom: "48px" }}>
            OneFoundr is the playbook for solo founders who want to start, run, and grow profitable one-person businesses — without the burnout, confusion, or loneliness.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "0px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "20px" }}>
            Here's the Truth Nobody Talks About
          </h2>

          <p style={{ fontSize: "16px", color: "#2D3436", fontWeight: "500", marginBottom: "16px" }}>
            Most business advice isn't built for you.
          </p>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px" }}>
            It's built for funded startups with teams of 20. For companies with marketing departments, sales teams, and a CFO handling the numbers.
          </p>

          <p style={{ fontSize: "16px", color: "#2D3436", fontWeight: "500", fontStyle: "italic", marginBottom: "16px" }}>
            But what about the person doing everything alone?
          </p>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "24px" }}>
            The one who's the CEO in the morning, the marketer at lunch, the customer support rep at 3pm, and the bookkeeper at midnight?
          </p>

          {/* Bullet List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              "How do I get my first 10 clients?",
              "What tools can replace a team?",
              "How do I price my services without leaving money on the table?",
              "How do I build systems so my business doesn't fall apart when I take a day off?",
              "How do I grow without burning out?"
            ].map((question, index) => (
              <div key={index} style={{ display: "flex", borderLeft: "4px solid #00B894", paddingLeft: "16px" }}>
                <p style={{ fontSize: "16px", color: "#2D3436", fontWeight: "500", margin: 0 }}>
                  {question}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "18px", color: "#2D3436", fontWeight: "700", marginBottom: "48px" }}>
            That's what OneFoundr is for.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT ONEFOUNDR IS */}
      <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "20px" }}>
            Built for the One-Person Business
          </h2>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px" }}>
            OneFoundr is a resource hub for solopreneurs and solo founders.
          </p>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginBottom: "16px" }}>
            We publish actionable guides, tool recommendations, proven systems, and real stories from people who are building profitable businesses — by themselves.
          </p>

          <p style={{ fontSize: "16px", color: "#2D3436", fontWeight: "500", marginBottom: "16px" }}>
            No fluff. No theory. No "just hustle harder" nonsense. Just practical, tested strategies you can use today.
          </p>

          <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6" }}>
            Whether you're a freelancer turning into a solo business owner, a side hustler ready to go full-time, or a seasoned solopreneur looking to scale without hiring — this is your home.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT WE BELIEVE (PRINCIPLES) */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "32px" }}>
            The OneFoundr Principles
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {PRINCIPLES.map((principle) => (
              <div key={principle.number} style={{ display: "flex", gap: "20px" }} className="flex-col md:flex-row">
                {/* Number Circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    backgroundColor: "#E8F8F3",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#00B894" }}>
                    {principle.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#2D3436", marginBottom: 0 }}>
                    {principle.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#636E72", lineHeight: "1.6", marginTop: "4px", margin: 0 }}>
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT YOU'LL FIND HERE */}
      <section style={{ backgroundColor: "#F7F7F7", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "32px" }}>
            What You'll Find Here
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }} className="md:grid-cols-2 grid-cols-1">
            {CONTENT_CATEGORIES.map((item, index) => (
              <div key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "20px", minWidth: "24px" }}>{item.emoji}</span>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: "600", color: "#2D3436", margin: 0, marginBottom: "2px" }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/start-here"
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#059669",
              fontWeight: "500",
              textDecoration: "none",
              marginTop: "24px"
            }}
          >
            Explore All Categories →
          </Link>
        </div>
      </section>

      {/* SECTION 6: THE DIFFERENCE */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "32px" }}>
            How We're Different
          </h2>

          {/* Comparison Table */}
          <div style={{ borderTop: "1px solid #E2E8F0" }}>
            {/* Header Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", paddingTop: "16px", paddingBottom: "16px", borderBottom: "1px solid #E2E8F0" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#636E72", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                Most Business Sites
              </p>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#00B894", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                OneFoundr
              </p>
            </div>

            {/* Rows */}
            {COMPARISONS.map((row, index) => (
              <div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", paddingTop: "16px", paddingBottom: "16px", borderBottom: index < COMPARISONS.length - 1 ? "1px solid #E2E8F0" : "none" }}>
                <p style={{ fontSize: "14px", color: "#636E72", margin: 0 }}>
                  {row.old}
                </p>
                <div style={{ borderLeft: "2px solid #00B894", paddingLeft: "16px" }}>
                  <p style={{ fontSize: "14px", color: "#2D3436", fontWeight: "500", margin: 0 }}>
                    {row.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA SECTION */}
      <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 6vw, 48px)", fontWeight: "700", color: "white", marginBottom: "16px" }}>
            Ready to Build?
          </h2>

          <p style={{ fontSize: "16px", color: "#B2BEC3", marginBottom: "32px" }}>
            Start with our most popular guides or get weekly tips delivered to your inbox.
          </p>

          {/* CTA Cards */}
          <CTAButtons />

          <p style={{ fontSize: "14px", color: "#636E72", marginTop: "32px" }}>
            Or email us at hello@onefoundr.com
          </p>
        </div>
      </section>
    </>
  );
}
