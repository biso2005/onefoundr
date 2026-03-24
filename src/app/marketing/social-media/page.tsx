import Link from "next/link";
import {
  MessageCircle,
  Target,
  Zap,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Eye,
  Smartphone,
  PieChart,
} from "lucide-react";

export const metadata = {
  title: "Social Media for Solopreneurs: The Platform Trap | OneFoundr",
  description:
    "Why posting daily is killing your business. Pick one platform, make one profitable conversation per week, earn £24k/year in 4 hours.",
};

const platformPlaybooks = [
  {
    title: "LinkedIn (The B2B Goldmine)",
    icon: MessageCircle,
    for: "Consultants, agencies-of-one, coaches, SaaS founders",
    rhythm: [
      "Monday: Comment on 5 posts of target buyers (20 mins)",
      "Wednesday: Post one 'contrarian take' or case study (60 mins)",
      "Friday: Send 2 personalized DMs to warm connections (15 mins)",
    ],
    totalTime: "1.5 hours/week",
    conversion: "Comment → Profile visit → Calendly link → £1,500 discovery call",
    contentType: "Case studies with specific £ results and exact methods",
    example: {
      good:
        "I helped an ed-tech founder increase SaaS retention from 72% to 91% by rebuilding their email onboarding sequence. The breakthrough: segmenting by role (admin, teacher, student) and sending role-specific value before asking for anything. Template in comments if useful.",
      bad: "Just wrapped an amazing strategy session! 🚀 Helping founders scale. #entrepreneur #grindset #success",
    },
    soloHack:
      "Use the 'Broetry' format (short lines, white space) for maximum skim-value on feeds. Or don't—just be specific. Boring beats beautiful.",
  },
  {
    title: "Twitter/X (The Thinking Person's Network)",
    icon: Zap,
    for: "Developers, writers, info-product sellers, indie hackers",
    rhythm: [
      "Tuesday/Thursday: One thread per week (5-8 tweets, one complex idea)",
      "Daily: Reply to 3 established accounts with genuine additions (15 mins/day)",
    ],
    totalTime: "3 hours/week",
    conversion:
      "Thread → Follow → Newsletter signup → £300 product or £3k service",
    contentType:
      "Specific technical breakdowns ('How I migrated from Heroku to Railway for £12/month')",
    example: {
      good:
        "1/ Most Django devs think they need Celery for background jobs. They don't. Here's what actually matters:\n\n2/ Celery adds complexity and ops burden. Most SaaS founders should start with APScheduler.\n\n3/ The real win: process-level scheduling is simpler to debug and doesn't need Redis.",
      bad: "Excited to announce my new SaaS! It's like Zapier but better. RT for visibility! 🚀",
    },
    soloHack:
      "Quote-tweet popular posts in your niche with 'The implementation detail most miss...' Add value, don't just agree.",
  },
  {
    title: "Instagram (The Visual Trust Builder)",
    icon: TrendingUp,
    for: "Designers, photographers, physical product sellers, visual coaches",
    rhythm: [
      "One carousel post per week (5-7 slides, educational + Canva templates)",
      "Stories daily (process, behind-scenes, polls—5 mins each)",
    ],
    totalTime: "3-4 hours/week",
    conversion:
      "Carousel saves → DM 'Saw you saved the guide—want the spreadsheet version?' → £500 product",
    contentType:
      "Before/after, 'Day in the life' (relatable solo struggles), quick tips with branded backgrounds",
    example: {
      good:
        "Carousel slide 1: 'The 3 Mistakes Logo Designers Make (That Cost £1k+ in Rebrand)' | Slides 2-4: Specific visual examples + fixes | Slide 5: DM for portfolio link",
      bad: "Aesthetic flat-lay of coffee, notebook, and plant with caption: 'hustle' ✨",
    },
    soloHack:
      "Use Canva templates religiously. Do not custom-design each post. Speed > perfection.",
  },
  {
    title: "TikTok/Shorts (The Algorithm Lottery)",
    icon: Eye,
    for: "Course creators, B2C products, coaches with personality",
    rhythm: [
      "Batch 3 videos on Sunday (2 hours total, keep raw—no editing)",
      "Post Mon/Wed/Fri",
      "Respond to comments with video replies (adds content without creation)",
    ],
    totalTime: "5 hours/week",
    conversion: "Viral video → Link in bio → £47 impulse buy (low ticket only)",
    contentType:
      "'3 mistakes you're making with X,' 'POV: You're a solo founder learning this,' reaction videos to industry news",
    example: {
      good:
        "POV: Your pricing page says '£299/month' but you never tested if it's actually your optimal price. Here's the framework I use instead... [60-second breakdown]",
      bad: "Dancing to trending sound with random 'entrepreneur' text overlay",
    },
    burnoutWarning:
      "If you hit 90 days and haven't had one video crack 1k views, pivot. The algorithm owes you nothing.",
  },
];

const dmSteps = [
  {
    step: 1,
    title: "The Trigger",
    description: "They like two posts, comment 'So true,' or view your profile",
  },
  {
    step: 2,
    title: "The Opener",
    description:
      '"Saw you [specific detail from their bio/recent activity]. Dealt with similar for a [type of business] last quarter. [Specific insight]. Happy to share the doc if useful."',
  },
  {
    step: 3,
    title: "The Value Exchange",
    description:
      "Send the resource (Notion template, Loom video, PDF). No Calendly link yet.",
  },
  {
    step: 4,
    title: "The Bridge (48 hours later)",
    description:
      '"Glad it helped. If you\'re ever looking to [your service outcome], I\'ve got a playbook that might save you a few grand. Fancy a 15-min chat next Tuesday?"',
  },
];

export default function SocialMediaPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
            MARKETING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Social Media for Solopreneurs: The Platform Trap
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Why posting daily is killing your business (and which single platform to pick if you must)
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Agencies sell social media packages because they profit from your confusion. You don't need a
            "content strategy"—you need one profitable conversation per week. Here's how to get it without
            becoming a full-time influencer.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Optionality Test Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Do You Actually Need Social Media?
          </h2>
          <p className="text-gray-600 mb-8">
            The honest test before you spend another hour posting
          </p>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 mb-8">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Referral Exception</h3>
                <p className="text-gray-700">
                  If you're a consultant charging £3k+ and have 3+ past clients, social media might be
                  optional. Email + referrals could suffice. Your existing clients are your best
                  distributor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Creator Imperative</h3>
                <p className="text-gray-700">
                  If you sell £47 templates or courses, you must own an audience. No social = no
                  distribution. You're entirely dependent on paid ads or luck.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The B2B Reality</h3>
                <p className="text-gray-700">
                  Twitter/X and LinkedIn are your only viable B2B channels. Instagram/TikTok are consumer
                  pools—distracting unless you're selling B2C. Don't chase the algorithm if your buyer
                  isn't there.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Time Math</h3>
                <p className="text-gray-700">
                  "If you spend 5 hours/week on social but close 0 clients from it, that's £500/week in
                  lost billable hours (assuming £100/hour rate). It needs to pay for itself in Month 1 or
                  it's wasting your life."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Diagnostic</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">→</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">"I sell to businesses"</p>
                  <p className="text-sm text-gray-600">LinkedIn (or Twitter if technical/dev)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">→</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">"I sell to consumers"</p>
                  <p className="text-sm text-gray-600">Instagram/TikTok (visual) or Twitter (text-heavy)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">→</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">"I sell expertise/trust"</p>
                  <p className="text-sm text-gray-600">LinkedIn or Twitter</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 mt-0.5 flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">→</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">"I sell entertainment/escapism"</p>
                  <p className="text-sm text-gray-600">TikTok/YouTube Shorts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-base text-gray-900 leading-relaxed">
              <strong>Constraint Check:</strong> You can only do ONE platform well as a solo. Anyone
              telling you to 'repurpose across all channels' has a team. Pick one. Delete the others from
              your phone.
            </p>
          </div>
        </section>

        {/* The Sniper Method Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sniper vs. Spray-and-Pray</h2>
          <p className="text-gray-600 mb-8">The strategic difference that actually makes money</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4">Spray-and-Pray (What Agencies Do)</h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Post 3x/day across 4 platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Chase algorithm visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Focus on vanity metrics (followers, likes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Result: Burnout, zero revenue, "I hate social media"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">Sniper Method (Solo Strategy)</h3>
              <ul className="space-y-3 text-green-900">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>One platform. One format. One hour/day maximum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Goal: 3-5 high-leverage DMs per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Tactic: Comment on whales, post insight grenades, vanish</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Metric: Conversations started, not impressions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">The Sniper Protocol (5 Steps)</h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 font-bold text-blue-600 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The 20-Minute Audit</h4>
                  <p className="text-gray-700">
                    Scroll your chosen platform. Find 10 people who would pay you £1,000+ (their pain is
                    visible in bio or recent posts). Follow them. This is your sniper list.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 font-bold text-blue-600 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Value-First Comment</h4>
                  <p className="text-gray-700">
                    Not "Great post!" but "I tried this in 2022 and the compliance angle actually backfired
                    for UK GDPR—here's what worked instead..." Specific. Helpful. No pitch.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 font-bold text-blue-600 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Profile Optimization</h4>
                  <p className="text-gray-700">
                    Your bio isn't "Helping businesses grow." It's "B2B email sequences for £2-10M SaaS.
                    Response time: &lt;2hrs. Book: [link to Calendly]" Specific. Outcome-focused. Frictionless.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 font-bold text-blue-600 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Weekly Insight</h4>
                  <p className="text-gray-700">
                    One original post per week maximum. Make it a "hot take" that your specific buyer would
                    screenshot and Slack to their team. Contrarian. Useful. Worth the space.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 font-bold text-blue-600 flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The DM Bridge</h4>
                  <p className="text-gray-700">
                    When they engage twice, message: "Saw your thread on X—dealt with similar for a client
                    in [industry]. Happy to share the framework if useful. No pitch." Establish value before
                    asking for time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Solo Constraint:</strong> If you can't do Steps 1-5 in 5 hours per week total, your
                platform is too noisy or your offer is too vague. Reconsider both.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Playbooks Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Pick Your Weapon (Then Put the Others Down)</h2>
          <p className="text-gray-600 mb-8">Four playbooks. Pick one based on your business model.</p>

          <div className="space-y-8 mb-12">
            {platformPlaybooks.map((playbook, idx) => {
              const Icon = playbook.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{playbook.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">For: {playbook.for}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-3">
                      Solo Operating Rhythm
                    </p>
                    <ul className="space-y-2">
                      {playbook.rhythm.map((item, i) => (
                        <li key={i} className="text-sm text-blue-900">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-bold text-blue-900 mt-4 pt-4 border-t border-blue-200">
                      Total: {playbook.totalTime}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        GBP Conversion Path
                      </p>
                      <p className="text-sm text-gray-700">{playbook.conversion}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Content Type
                      </p>
                      <p className="text-sm text-gray-700">{playbook.contentType}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Good vs Bad Example
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">
                          ✓ Good Example
                        </p>
                        <div className="bg-white p-3 rounded border border-green-200 text-sm text-gray-700 italic leading-relaxed">
                          "{playbook.example.good}"
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
                          ✗ Bad Example
                        </p>
                        <div className="bg-white p-3 rounded border border-red-200 text-sm text-gray-700 italic leading-relaxed">
                          "{playbook.example.bad}"
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-900">
                      <strong>Solo Hack:</strong> {playbook.soloHack}
                    </p>
                  </div>

                  {playbook.burnoutWarning && (
                    <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-gray-900 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Burnout Warning:</strong> {playbook.burnoutWarning}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Platform Matcher Table */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 overflow-x-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Platform Matcher</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Business Model</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best Platform</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Primary Content</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Weekly Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Freelancer / Consultant</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">LinkedIn</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Case studies, results</td>
                  <td className="py-3 px-4 text-gray-700">1.5</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Developer / SaaS Founder</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">Twitter/X</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Threads, technical breakdowns</td>
                  <td className="py-3 px-4 text-gray-700">3</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Designer / Visual Coach</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">Instagram</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Carousels, before/after</td>
                  <td className="py-3 px-4 text-gray-700">3-4</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">Course Creator / B2C Product</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">TikTok/Shorts</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Short videos, POV, tips</td>
                  <td className="py-3 px-4 text-gray-700">5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Solo Content Cadence Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            The "Minimum Effective Dose" Schedule
          </h2>
          <p className="text-gray-600 mb-8">What a realistic week looks like for time-constrained solo founders</p>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">The 4-Hour Social Media Week (Template)</h3>
            <div className="space-y-4">
              <div className="flex gap-6 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                    Mon
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">Engagement</p>
                  <p className="text-sm text-gray-600">Comments on 5 target accounts (30 mins)</p>
                </div>
              </div>

              <div className="flex gap-6 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                    Wed
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">Create</p>
                  <p className="text-sm text-gray-600">Write one anchor piece: case study, take, or insight (60 mins)</p>
                </div>
              </div>

              <div className="flex gap-6 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                    Thu
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">Distribute</p>
                  <p className="text-sm text-gray-600">
                    Schedule 3 "async" pieces (repurposed from content pillar or simple shares, 30 mins)
                  </p>
                </div>
              </div>

              <div className="flex gap-6 pb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                    Fri
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">DMs & Relationships</p>
                  <p className="text-sm text-gray-600">
                    Send 2 personalized DMs, reply to warm engagement (60 mins) — THIS IS THE MONEY ACTIVITY
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Weekend:</strong> Ghost mode. No 'community building.' No notifications. You're not
                  a full-time social manager.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                The Automation Rule
              </h4>
              <p className="text-sm text-gray-700">
                If it requires you to be 'on' in real-time (Twitter Spaces, Instagram Lives, LinkedIn
                Audio), it doesn't exist for solo founders until you have £5k/month consistent revenue.
                Async only.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                The Phone Boundary
              </h4>
              <p className="text-sm text-gray-700">
                Delete the app from your phone. Use the desktop version or automation tools only. You are
                not an influencer; you're a business owner borrowing an audience. Protect your mental health.
              </p>
            </div>
          </div>
        </section>

        {/* DM Framework Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How to Actually Make Money: The DM Conversation Framework
          </h2>
          <p className="text-gray-600 mb-8">
            Social media is the venue; DMs are the sales floor. This is where it converts.
          </p>

          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-10 mb-8">
            <div className="space-y-6">
              {dmSteps.map((item, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-gray-100 last:pb-0 last:border-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 italic">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3">The Solo Math (That Works)</h4>
              <p className="text-sm text-green-900 leading-relaxed">
                If you send 5 personalized DMs per week and close 1 client per month at £2,000, that's
                £24,000 per year from "social media" working 4 hours per week. Better than 10k followers and
                £0 revenue.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-900 mb-3">Forbidden Phrases</h4>
              <p className="text-sm text-red-900 leading-relaxed">
                Never write: "Jump on a call to explore synergies," "Pick your brain," "Let's collab."
                <strong> Be specific or silent.</strong> Your message should inspire action or save time.
              </p>
            </div>
          </div>

          <Link
            href="/sales"
            className="inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Read: How to Convert DMs to Calls →
          </Link>
        </section>

        {/* Metrics That Matter Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Unfollow Your Follower Count
          </h2>
          <p className="text-gray-600 mb-8">What to track. What to ignore. What actually matters.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-red-900 mb-4">Ignore These</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-red-900 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Follower growth</span>
                </li>
                <li className="flex items-center gap-3 text-red-900 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Engagement rate</span>
                </li>
                <li className="flex items-center gap-3 text-red-900 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Impressions / views</span>
                </li>
                <li className="flex items-center gap-3 text-red-900 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Algorithm "reach"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-lg font-bold text-green-900 mb-4">Track These Weekly</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-green-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Warm conversations started (DMs where they reply)</span>
                </li>
                <li className="flex items-center gap-3 text-green-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Calls booked from social (use UTM links)</span>
                </li>
                <li className="flex items-center gap-3 text-green-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Revenue attributed to platform</span>
                </li>
                <li className="flex items-center gap-3 text-green-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Cost-per-lead (time invested ÷ leads)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Two Critical Rules</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">The £100 Test</h4>
                <p className="text-gray-700">
                  If you had to pay £100 per social media post, would you still post it? If not, don't
                  write it. Ruthlessly cut low-ROI content.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">The 90-Day Commitment</h4>
                <p className="text-gray-700">
                  Commit to one platform, one playbook, for 90 days. If you haven't generated £2k+ in
                  revenue or 10 warm leads by Day 90, your offer is wrong or your platform is wrong. Not
                  your consistency. Pivot or pivot harder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Connection Section */}
        <section className="mb-20 bg-blue-50 border border-blue-200 rounded-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Social Amplifies Content. It Doesn't Replace It.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This page covers distribution (where you show up). But you need something to distribute. See
            the{" "}
            <Link href="/marketing/content-marketing" className="text-blue-600 font-medium hover:underline">
              Content Marketing guide
            </Link>
            {" "}for what to actually create and say. Social is the megaphone; content is the message.
          </p>
          <p className="text-sm text-gray-600">
            The worst-case scenario: Amazing social presence, nothing of value to say. You'll be performing
            clown instead of running a business.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Ready to Start?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
            Pick ONE platform above based on your business model. Spend 30 minutes today doing the
            20-Minute Audit (Step 1 of the Sniper Method). Find your first 10 targets.
          </p>

          <div className="border-2 border-yellow-300 bg-yellow-50 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Critical Warning</h3>
                <p className="text-sm text-gray-700">
                  Do not start social media until you have an offer page to link to. Traffic without
                  conversion is just noise. Finish{" "}
                  <Link href="/offer" className="text-blue-600 font-medium hover:underline">
                    /offer/from-scratch
                  </Link>
                  {" "}
                  first. Your social presence is worthless without a destination.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap max-w-2xl mx-auto">
            <Link
              href="/marketing/content-marketing"
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center text-sm"
            >
              What to Post: Content Guide
            </Link>
            <Link
              href="/start/business-models"
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-center text-sm"
            >
              Find Your Business Model
            </Link>
            <Link
              href="/offer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm"
            >
              Build Your Offer First
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
