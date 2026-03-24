import Link from "next/link";
import {
  FileText,
  Split,
  Share2,
  Repeat,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Content Marketing for Solopreneurs | OneFoundr",
  description: "Build authority without a team, a budget, or 60 hours a week. Authority leverage + constraint-based strategy for one-person businesses.",
};

const flywheelSteps = [
  {
    title: "The Pillar (The Anchor)",
    icon: FileText,
    description:
      "One 2,000-word SEO-optimized article OR one 10-minute 'hot take' video per month",
    criteria: "Answers a buying question, not a 'nice to know' topic",
    example:
      "Email automation for solo consultants: 3 sequences that book calls while you sleep",
    value: "This one piece should theoretically be worth £2,000+ in future revenue",
  },
  {
    title: "The Splice (The Multiplier)",
    icon: Split,
    description:
      "Break the pillar into: 5 LinkedIn posts, 3 email newsletters, 1 Twitter thread, 1 short-form video script",
    criteria: "Use whatever you have—Descript, Canva, or copy-paste",
    example: "80% of your content time should be here, not creating new pillars",
    value: "20+ pieces from one comprehensive pillar",
  },
  {
    title: "The Direct Distribution (The Shortcut)",
    icon: Share2,
    description:
      "Don't wait for algorithm. Send to past clients, warm leads, relevant communities (with permission/context)",
    criteria: 'Use the "Personal Invite" template',
    example:
      "'Saw you asking about X earlier—wrote this specifically for that scenario...'",
    value: "Convert people who already respect you",
  },
  {
    title: "The Compound (The Asset)",
    icon: Repeat,
    description:
      "After 6 months: Turn 6 pillars into a lead magnet (guide, email course, workshop)",
    criteria: "This becomes your 'ethical bribe' for email signups",
    example: "Start with just 3 best-performing pillars",
    value: "Evergreen revenue stream from content library",
  },
];

const playbooks = [
  {
    title: "The Authority Builder",
    icon: TrendingUp,
    for: "Freelancers, consultants, agencies-of-one",
    strategy: "Case study content (client wins, anonymized)",
    channel: "LinkedIn + Email",
    cadence: "One detailed case study per month (problem → process → result with £ figures)",
    conversion: "Direct DM conversation starter",
    soloHack:
      "Write the case study as if explaining to a fellow founder in the pub—specific numbers, real struggles, no jargon",
  },
  {
    title: "The SEO Moat",
    icon: Target,
    for: "SaaS founders, template creators, info product sellers",
    strategy: "Bottom-of-funnel search ('Notion template for consultants' vs 'what is Notion')",
    channel: "Blog + YouTube (second largest search engine)",
    cadence: "One optimized pillar per month, updated quarterly",
    conversion: "Product-led (free tool → paid tier)",
    soloHack:
      "Answer the specific question your customers Google at 11pm when they're stressed. Use their exact words in the H1.",
  },
  {
    title: "The Thought Leadership",
    icon: Zap,
    for: "Coaches, advisors, 'personal brand' businesses",
    strategy: "Contrarian takes on industry norms",
    channel: "Newsletter (Substack/Beehiiv) + Twitter/X",
    cadence: "One essay per week (repurposed into daily micro-posts)",
    conversion: "High-ticket services (£3k+)",
    soloHack:
      "If you're not slightly embarrassed by your take, it's too safe. You're not Wikipedia; you're an advisor with skin in the game.",
  },
  {
    title: "The Product-Content Loop",
    icon: BookOpen,
    for: "Digital products, Notion templates, Gumroad sellers",
    strategy: "'Build in public' + educational tutorials",
    channel: "Twitter/X + Product Hunt + Reddit (niche subreddits)",
    cadence: "Ship small weekly, document monthly",
    conversion: "Direct sale via link in bio",
    soloHack:
      "Give away 80% of the 'how,' sell the 'done-for-you' implementation. Your free content is the messy version; the paid product is polished.",
  },
];

export default function ContentMarketingPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 pt-20 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
            MARKETING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Content Marketing for One-Person Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            How to build authority without a team, a budget, or 60 hours a week to write
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Agencies publish 12 times a week because they have interns. You have Tuesday morning and a shower thought. Here's how to turn that constraint into a competitive advantage—one piece at a time.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* The Volume Trap Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">The Volume Trap</h2>
          <p className="text-gray-600 mb-8">
            Why the "content calendar" myth kills solo businesses
          </p>
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Here's the trap: You read that successful bloggers publish daily. So you commit to 3 posts a week.
                By week 3, you're burnt out. By week 6, you quit. Then you feel guilty for months.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <p className="font-semibold text-gray-900 mb-2">The Solo Rule:</p>
                <p>
                  <strong>One pillar piece per month, maximum.</strong> Everything else is repurposing.
                </p>
              </div>

              <p>
                Why mediocre daily posts kill solo businesses: They create time debt (you're always "behind"),
                breed imposter syndrome ("I put this out but it's not perfect"), and almost never convert (volume
                without depth is noise).
              </p>

              <p>
                The Alternative: <strong>Depth-first SEO + Insight-first Social</strong>. One truly great piece
                per month beats 30 mediocre ones.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                <p className="font-semibold text-gray-900 mb-2">Constraint Check:</p>
                <p>
                  If it takes you more than 4 hours to create, it's not sustainable. Build systems to make 4
                  hours produce 20 assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solo Flywheel Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">The 4-Step Solo Flywheel</h2>
          <p className="text-gray-600 mb-8">
            How to create once and distribute everywhere (without burning out)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flywheelSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{step.description}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Criteria
                      </p>
                      <p className="text-sm text-gray-700">{step.criteria}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Example
                      </p>
                      <p className="text-sm text-gray-700">{step.example}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                        Value
                      </p>
                      <p className="text-sm text-purple-700 font-medium">{step.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Playbooks Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Content Engine</h2>
          <p className="text-gray-600 mb-8">
            Pick the playbook that matches your business type and goals
          </p>

          <div className="grid grid-cols-1 gap-6 mb-12">
            {playbooks.map((playbook, idx) => {
              const Icon = playbook.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{playbook.title}</h3>
                      <p className="text-sm text-purple-600 font-medium">For: {playbook.for}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Strategy
                      </p>
                      <p className="text-sm text-gray-700">{playbook.strategy}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Channel
                      </p>
                      <p className="text-sm text-gray-700">{playbook.channel}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Cadence
                      </p>
                      <p className="text-sm text-gray-700">{playbook.cadence}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Conversion
                      </p>
                      <p className="text-sm text-gray-700">{playbook.conversion}</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-purple-900 uppercase tracking-wider mb-2">
                      Solo Hack
                    </p>
                    <p className="text-sm text-gray-700">{playbook.soloHack}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 overflow-x-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Reference: Which Playbook?</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Business Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best Playbook</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Primary Channel</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Time Commitment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Freelancer / Consultant</td>
                  <td className="py-3 px-4 text-purple-600 font-medium">Authority Builder</td>
                  <td className="py-3 px-4 text-gray-700">LinkedIn</td>
                  <td className="py-3 px-4 text-gray-700">6-8 hrs/month</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">SaaS / Template Creator</td>
                  <td className="py-3 px-4 text-purple-600 font-medium">SEO Moat</td>
                  <td className="py-3 px-4 text-gray-700">Blog</td>
                  <td className="py-3 px-4 text-gray-700">8-10 hrs/month</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Coach / Advisor</td>
                  <td className="py-3 px-4 text-purple-600 font-medium">Thought Leadership</td>
                  <td className="py-3 px-4 text-gray-700">Newsletter</td>
                  <td className="py-3 px-4 text-gray-700">4-6 hrs/week</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Digital Product Seller</td>
                  <td className="py-3 px-4 text-purple-600 font-medium">Product-Content Loop</td>
                  <td className="py-3 px-4 text-gray-700">Twitter/X</td>
                  <td className="py-3 px-4 text-gray-700">5-8 hrs/week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Solo Editorial System Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How to Actually Do This Without Burning Out
          </h2>
          <p className="text-gray-600 mb-8">The system that makes it sustainable</p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                The 4-Hour Content Sprint
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Batch creation schedule: Monday AM (research), Friday AM (write), Sunday PM (schedule).
                This removes context-switching and makes content a recurring ritual, not a constant stress.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                Template Library
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Create 3 reusable formats to reduce decision fatigue:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>
                    <strong>"The Mistake"</strong> (What I got wrong, what I learned)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>
                    <strong>"The Win"</strong> (Results, the exact process, why it worked)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>
                    <strong>"The Framework"</strong> (Step-by-step guide to solve a specific problem)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                Tools Constraint
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pick two: One for writing (Notion/Obsidian), one for scheduling (Buffer/Native). No more
                tool hopping. Tool paralysis kills more content than lack of ideas.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                Repurposing Checklist
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Every pillar must become:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 5 social posts (LinkedIn, Twitter, etc.)</li>
                <li>• 1 email to your list</li>
                <li>• 1 forum answer (Reddit, IndieHackers)</li>
                <li>• 1 "evergreen" response template for future DMs</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-base text-gray-900 leading-relaxed">
                <strong>The "Good Enough" Metric:</strong> If it helps one specific person solve a
                £500+ problem, publish it. Perfection is procrastination with better branding.
              </p>
            </div>
          </div>
        </section>

        {/* Distribution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Distribution &gt; Creation</h2>
          <p className="text-gray-600 mb-8">The 80/20 rule that solo creators always miss</p>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Spend 20% creating, 80% distributing. Here's your solo distribution checklist:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">1</span>
                </div>
                <p className="text-gray-700 pt-0.5">
                  <strong>Email list first:</strong> If &lt;100 people, personally message the top 10
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">2</span>
                </div>
                <p className="text-gray-700 pt-0.5">
                  <strong>Primary social:</strong> Post to your main platform (LinkedIn or Twitter)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">3</span>
                </div>
                <p className="text-gray-700 pt-0.5">
                  <strong>Forum engagement:</strong> Reply to 3 relevant questions with "I actually wrote
                  about this here..." (organic, not spammy)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">4</span>
                </div>
                <p className="text-gray-700 pt-0.5">
                  <strong>Email signature:</strong> Add to signature for 1 week
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-purple-600">5</span>
                </div>
                <p className="text-gray-700 pt-0.5">
                  <strong>Syndication:</strong> Republish to Medium/Dev.to with canonical link back to
                  your site (SEO + reach)
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <p className="text-base text-gray-900 leading-relaxed">
                <strong>Sniper vs. Shotgun:</strong> Solo founders should have 3-5 "home run" posts they
                update and redistribute quarterly, not 50 mediocre posts cluttering their feed.
              </p>
            </div>
          </div>
        </section>

        {/* Measuring What Matters Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vanity Metrics vs. Solo Business Metrics</h2>
          <p className="text-gray-600 mb-8">What to track and what to ignore</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-red-900 mb-4">Ignore</h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Follower count</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Impressions/views</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>"Engagement rate"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-green-900 mb-4">Track</h3>
              <ul className="space-y-3 text-green-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Email signups from content</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Inbound DMs: "I saw your post about..."</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Time-to-close for content-sourced vs. cold leads</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The £100 Test</h3>
              <p className="text-gray-700">
                If you had to pay £100 per article, would you still write it? If not, kill the idea.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The 3-Month Rule</h3>
              <p className="text-gray-700">
                Content marketing for solos takes 90 days minimum to show revenue impact. Commit to one
                playbook for one quarter before pivoting.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Ready to Start?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
            Pick your playbook above. Schedule your first 4-hour content sprint for this week. Create one
            piece. Distribute it personally to 5 people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <Link
              href="/marketing/lead-flow"
              className="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm border border-gray-200"
            >
              Tie to Lead Flow
            </Link>
            <Link
              href="/marketing/first-customers"
              className="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm border border-gray-200"
            >
              Distribution Tactics
            </Link>
            <Link
              href="/offer/pricing"
              className="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm border border-gray-200"
            >
              Build Your Offer
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto border border-gray-200">
            <p className="text-sm text-gray-700 leading-relaxed text-center">
              <strong>Critical reminder:</strong> Content without an offer is a hobby. Make sure your offer
              is tight before you drive traffic to it.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
