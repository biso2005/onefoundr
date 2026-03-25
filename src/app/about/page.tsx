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
      {/* HERO SECTION */}
      <section style={{ backgroundColor: "white", width: "100%", paddingTop: "80px", paddingBottom: "24px" }} className="md:py-20 py-12 px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "800", marginBottom: "8px" }}>
            About OneFoundr
          </h1>
          <p className="text-lg mb-6" style={{ color: "#636E72" }}>
            Built by a solo founder, for solo founders.
          </p>
        </div>
      </section>

      {/* SECTION 1: WHY ONEFOUNDR EXISTS */}
      <section style={{ backgroundColor: "#F9FAFB", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            Why OneFoundr Exists
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            Most business advice assumes you have a team, funding, and a marketing department. But what if you're building alone?
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            OneFoundr exists because solo founders face a completely different set of challenges — and deserve strategies built specifically for them.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            Every framework, tool recommendation, and guide on this site is designed for one person running one business. No fluff. No advice that requires a team you don't have. No strategies that only work with a $50K ad budget.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHO'S BEHIND THIS */}
      <section style={{ backgroundColor: "#fff", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            Who's Behind This
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            I'm a solo founder building in public. I've been in the trenches — figuring out pricing, finding clients, choosing tools, and trying not to burn out while wearing every hat.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            I started OneFoundr to build the resource I wished existed when I was starting out: practical, honest, and built for people doing it alone.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            Everything here comes from real experience — what worked, what didn't, and what I'd do differently.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT YOU'LL FIND HERE */}
      <section style={{ backgroundColor: "#F9FAFB", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            What You'll Find Here
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "24px" }}>
            OneFoundr covers five core areas of building a solo business:
          </p>
          <ul style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.8", marginBottom: "0", paddingLeft: "20px" }}>
            <li><strong><Link href="/start" className="text-accent hover:text-accentDark">Starting Solo</Link></strong> — Go from idea to first dollar. Business models, validation, niche selection, and your first 90 days.</li>
            <li><strong><Link href="/marketing" className="text-accent hover:text-accentDark">Getting Clients</Link></strong> — Marketing and sales strategies that work without a team. Content, outreach, funnels, and closing.</li>
            <li><strong><Link href="/systems" className="text-accent hover:text-accentDark">Running Lean</Link></strong> — Systems, SOPs, automation, and the only tools you actually need.</li>
            <li><strong><Link href="/sales" className="text-accent hover:text-accentDark">Scaling Solo</Link></strong> — Grow revenue without hiring. Pricing, recurring income, and smart outsourcing.</li>
            <li><strong>Staying Sane</strong> — Burnout prevention, decision fatigue, loneliness, and building a life you actually enjoy.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: CTA SECTION */}
      <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 6vw, 48px)", fontWeight: "700", color: "white", marginBottom: "16px" }}>
            Ready to Build?
          </h2>
          <p style={{ fontSize: "16px", color: "#B2BEC3", marginBottom: "32px" }}>
            Start with my most popular guides or get weekly tips delivered to your inbox.
          </p>
          {/* CTA Cards */}
          <CTAButtons />
          <p style={{ fontSize: "14px", color: "#636E72", marginTop: "32px" }}>
            Or email me at hello@onefoundr.com
          </p>
        </div>
      </section>
    </>
  );
}
