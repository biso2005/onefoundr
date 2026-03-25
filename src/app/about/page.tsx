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

      {/* SECTION 1: THE REALITY OF BUILDING SOLO */}
      <section style={{ backgroundColor: "#F9FAFB", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            The Reality of Building Solo
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            Building a business alone isn't just hard — it's a specific kind of hard that most business advice doesn't address.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            <strong>You're making big decisions by yourself.</strong> Product? Pricing? Positioning? Which tool to use? Who your ideal customer is? Every choice lands on you. No co-founder to push back. No team meeting to reality-check your ideas. Just you, staring at the decision, wondering if you're making a huge mistake. That decision fatigue is real.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            <strong>You're doing this alone.</strong> And I don't just mean "without employees." I mean there's no one in your corner at 2 AM when doubt kicks in. No one to celebrate the small wins (that paying customer, the first testimonial, the month you hit your revenue goals). No one to talk to about the scary stuff — the cash flow gap, whether you're good enough, if this will actually work. Facebook groups and Twitter threads help, but they're not the same as someone who gets it. The loneliness is subtle. It sneaks up on you.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            <strong>You're wearing all the hats.</strong> You're the founder, the operator, the marketer, the salesperson, the finance person, and the customer support team. And because there's no end to the work, burnout isn't a warning sign — it's the default trajectory unless you build specific protections against it.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            But here's the other side: <strong>You have complete autonomy.</strong> You get to build exactly what you want, in exactly the way you want, on your terms. No investors demanding growth at all costs. No meetings. No politics. No one else's vision but yours. That freedom is worth defending.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHY ONEFOUNDR EXISTS */}
      <section style={{ backgroundColor: "#fff", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            Why OneFoundr Exists
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            Most business advice is written for startups with teams, funding, and resources you don't have. The playbooks assume headcount. The benchmarks target $100M companies. The strategies require a marketing department.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            OneFoundr exists to fill that gap. We're building the resource solo founders actually need: strategies designed for one person, advice that doesn't require a team, and frameworks that work when you're doing it alone.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            Not just business advice. But guidance for the decision fatigue, the loneliness, the self-doubt, and the burnout risk that comes with building solo. Because scaling revenue is only half the problem. The other half is staying sane while you do it.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHO'S BEHIND THIS */}
      <section style={{ backgroundColor: "#F9FAFB", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            Who's Behind This
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            I'm a solo founder building in public. I've been in the trenches. I've made pricing mistakes. I've hired the wrong tool and wasted a month learning it. I've felt the loneliness of making a big decision with no one to validate it. I've burned out, caught myself, and rebuilt a system that actually works.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            I know the win of landing your first paying customer. I know the anxiety of an unpredictable cash month. I know the 3 AM doubts. And I know that most business advice doesn't address any of that.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "16px" }}>
            I started OneFoundr because I wished I had this resource when I was figuring it out. A place that didn't assume I had a team. That understood the specific challenges of building alone. That gave me frameworks that actually worked.
          </p>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            Everything here comes from real experience — mistakes included. What worked, what didn't, and what I'd do differently. Because the best founders aren't the ones who have all the answers. They're the ones who are honest about what they don't know and share what they've learned along the way.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT YOU'LL FIND HERE */}
      <section style={{ backgroundColor: "#fff", width: "100%", paddingTop: "48px", paddingBottom: "48px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: "700", color: "#2D3436", marginBottom: "24px" }}>
            What You'll Find Here
          </h2>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "24px" }}>
            OneFoundr covers everything you need to start, run, and grow a one-person business:
          </p>
          <ul style={{ fontSize: "18px", color: "#636E72", lineHeight: "1.8", marginBottom: "32px", paddingLeft: "20px" }}>
            <li><strong><Link href="/start" className="text-accent hover:text-accentDark">Starting Solo</Link></strong> — Validate ideas, choose a niche, pick a business model, land your first dollar.</li>
            <li><strong><Link href="/offer" className="text-accent hover:text-accentDark">Build Your Offer</Link></strong> — Turn your skills into something people will actually pay for. Packaging, pricing, positioning.</li>
            <li><strong><Link href="/marketing" className="text-accent hover:text-accentDark">Marketing</Link></strong> — Get found, build an audience, generate leads. Without a team. Without a huge budget.</li>
            <li><strong><Link href="/sales" className="text-accent hover:text-accentDark">Sales</Link></strong> — Win clients without being pushy. Conversations, funnels, closing deals.</li>
            <li><strong><Link href="/systems" className="text-accent hover:text-accentDark">Systems & Ops</Link></strong> — SOPs, automation, workflows, and tools that actually make life easier.</li>
            <li><strong><Link href="/tools" className="text-accent hover:text-accentDark">Tools & AI</Link></strong> — The best tech stack for running a business solo. No bloat. Just what works.</li>
            <li><strong><Link href="/money" className="text-accent hover:text-accentDark">Money</Link></strong> — Pricing strategy, taxes, cash flow, and scaling revenue without scaling headcount.</li>
            <li><strong>Mindset & Wellbeing</strong> — The stuff nobody talks about but everyone needs. Decision fatigue, loneliness, imposter syndrome, burnout prevention, and building a life you actually want to live.</li>
          </ul>
          <p style={{ fontSize: "18px", color: "#636E72", marginBottom: "0" }}>
            Most resources focus only on the business side. OneFoundr focuses on both: growing revenue AND staying sane. Because if you burn out building your dream, you only get one of those things. And it's not the one that matters.
          </p>
        </div>
      </section>

      {/* SECTION 5: CTA SECTION */}
      <section style={{ backgroundColor: "#2D3436", width: "100%", paddingTop: "64px", paddingBottom: "64px" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 6vw, 48px)", fontWeight: "700", color: "white", marginBottom: "16px" }}>
            You're Not Building Alone
          </h2>
          <p style={{ fontSize: "16px", color: "#B2BEC3", marginBottom: "32px" }}>
            Start with a guide below, join the community, or reach out. OneFoundr is here for the hard parts.
          </p>
          {/* CTA Cards */}
          <CTAButtons />
          <p style={{ fontSize: "14px", color: "#9B9CA0", marginTop: "32px" }}>
            Questions or just want to chat? Email hello@onefoundr.com — I read every message.
          </p>
        </div>
      </section>
    </>
  );
}
