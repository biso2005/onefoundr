import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Social Media for Solopreneurs: The Platform Trap',
  description: 'Why posting daily kills your business. A skeptical guide to picking ONE platform and making money without becoming an influencer.',
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* Custom Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Social Media for Solopreneurs: The Platform Trap
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Why posting daily is killing your business (and which single platform to pick if you must)
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl border border-blue-100 p-6">
            <p className="text-gray-800 leading-relaxed">
              Agencies sell social media packages because they profit from your confusion. You don't need a "content strategy"—you need one profitable conversation per week. Here's how to get it without becoming a full-time influencer...
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">

        {/* The Optionality Test Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Do You Actually Need Social Media?</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-4">
              The first honest question: do you need social media at all? The answer is probably no. But if you must be there, you need a framework to make it work without it consuming your life.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 transition">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Referral Exception</h3>
              <p className="text-gray-700">
                If you're a consultant charging £3,000+, already have 3+ past clients, and they refer business to you, social media is noise. Stop reading. Focus on asking each client "Who should I be talking to?" That alone generates £50k+ annually for most solo consultants.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 transition">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Creator Imperative</h3>
              <p className="text-gray-700">
                If you're selling £47 templates, £197 courses, or £297 frameworks, social media is your distribution channel. You need visibility at scale. This guide still applies, but your math changes—one viral post might bring 500 customers at £47 = £23,500 in a week. That's worth 5 hours/week.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 transition">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">B2B Reality</h3>
              <p className="text-gray-700">
                Business-to-business selling? Twitter/X and LinkedIn are viable. Instagram and TikTok are dead weight for B2B (unless you're selling to Gen-Z wellness coaches or creators—then TikTok works). Facebook dies with your attention. Pick one platform that matches your buyer's habitat.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-200 transition">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Time Math (The Real Cost)</h3>
              <p className="text-gray-700">
                5 hours per week with zero clients right now = £500 in lost billable hours (at £100/hr). That's £26,000/year. If social media doesn't generate £26,000 in revenue within 90 days, you've lost money. Most solopreneurs add social to their todo list and generate zero from it—that's a £26,000 annual loss. This calculation alone should scare you straight.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-8 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Decision Framework</h3>
            <p className="text-gray-700 mb-6">Before choosing any platform, answer these honestly:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-3">1.</span>
                <span>Do 80% of your customers hang out on one specific platform? (If no, stop here.)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-3">2.</span>
                <span>Can you generate £5,000+ in revenue within 90 days if you work this platform 5 hours/week? (If unsure, the answer is no.)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-3">3.</span>
                <span>Will you commit to ONE platform for 90 days without checking analytics daily? (If no, you'll burn out and blame the algorithm instead of your discipline.)</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-6">
            <h3 className="font-semibold text-red-900 mb-3">Constraint Check</h3>
            <p className="text-red-800">
              You can only do ONE platform well as a solo. Anyone telling you to "repurpose across all channels" has a team of three people handling it. Pick one. Delete the others from your phone. This is not negotiable if you want to stay sane.
            </p>
          </div>
        </section>

        {/* The Sniper Method Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sniper vs. Spray-and-Pray</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Spray-and-Pray (What You're Doing Now)</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Sniper Method (What Works)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Post every day (pressure to be "visible")</td>
                  <td className="p-4 text-gray-700">Post 1-2x per week with intent</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 text-gray-700">Wait for followers to DM you</td>
                  <td className="p-4 text-gray-700">Initiate conversations with 10 ideal clients/week</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Measure success by likes/impressions</td>
                  <td className="p-4 text-gray-700">Measure: DMs started, calls booked, revenue closed</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 text-gray-700">Generic "inspiring" content (hustle porn)</td>
                  <td className="p-4 text-gray-700">Specific insights people will pay to learn</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">React to algorithm (check app 20x daily)</td>
                  <td className="p-4 text-gray-700">Scheduled action (desktop/async only)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-12">
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">The Sniper Protocol (5 Steps)</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-900">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">20-Minute Audit (Sunday, 20 min)</h4>
                  <p className="text-gray-700">List 10 people in your target market on the platform. Who are they? What problems do they post about? What's their audience size? (You're looking for signal, not noise: people with 1k-50k followers, not celebrities.)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-900">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Value-First Comment (Mon/Wed/Thu, 30 min total)</h4>
                  <p className="text-gray-700">Comment on 10 posts from your list with something actually useful—no "Great post! 🎯" nonsense. Something that takes 3 sentences to say. That's it. You're not selling; you're introducing yourself as someone who thinks.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-900">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Profile Optimization (Sunday, 20 min)</h4>
                  <p className="text-gray-700">Bio should say: what you do, who you help, one specific result. "I help £X companies with £Y result" or "Audit/pricing/framework—link in bio." Your profile is not your resume; it's a filter.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-900">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Insight Post (Friday, 30 min)</h4>
                  <p className="text-gray-700">One post that teaches something you learned this week from client work. Not theory; not inspiration. Real insight. "I charged £800 for this audit 6 months ago. Here's what I'd do differently today..." That's a post.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-900">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">DM Bridge (Ongoing, 1-2 per week)</h4>
                  <p className="text-gray-700">Someone comments on your post or you vibe with their content? DM them with a genuine question or observation (not a sales pitch). Build the habit of turning followers into conversations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">Solo Constraint</h3>
            <p className="text-yellow-800">
              If you can't do Steps 1-5 in 5 hours per week total, your platform is too noisy or your offer is too vague. Twitter/X at peak engagement hours requires less friction than Instagram during quiet hours. Choose accordingly. An average week: Sunday audit/profile (40 min) + Mon/Wed/Thu comments (30 min total) + Friday post (30 min) + 2 DMs (10 min) = 1 hour 50 minutes. Real time, not fantasy time.
            </p>
          </div>
        </section>

        {/* Platform Playbooks Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pick Your Weapon (Then Put the Others Down)</h2>
          
          <div className="space-y-8">
            {/* LinkedIn Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 hover:border-blue-200 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">LinkedIn: The B2B Exception</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Who It's For</h4>
                  <p className="text-gray-700">
                    Consultants selling to companies (£5k-£50k projects). Coaches selling group workshops to HR/L&D teams. Anyone with a GTM (go-to-market) that involves warm introductions and £2k+ deals.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solo Operating Rhythm (5 hours/week)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Monday (45 min):</span> Audit 10 target accounts. Note their recent posts.</li>
                    <li><span className="font-medium">Tuesday/Wednesday (1 hour):</span> Comment on 5 of their recent posts with value.</li>
                    <li><span className="font-medium">Thursday (30 min):</span> Write one long-form post (500-800 words) on a client case study or framework insight.</li>
                    <li><span className="font-medium">Friday (30 min):</span> Follow up with 2 commenters via DM, ask one genuine question.</li>
                    <li><span className="font-medium">Ongoing (2 hours/week):</span> Respond to comments and DMs from followers.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">£ Conversion Path</h4>
                  <p className="text-gray-700 mb-3">
                    A former client sees your post about "3 pricing mistakes I see every week"—resonates because they made all three. Comments publicly. You DM them asking how this compares to their current situation. They say "Interesting, we're actually restructuring offers." You ask to have a chat. 30-minute call, £800 audit project. One post = one £800 project. 2 posts/month = £1,600/month = £19,200/year from cold audience.
                  </p>
                  <p className="text-gray-700">
                    At £5k average project value, 5 conversions/year from LinkedIn = £25,000 annual revenue. That's worth your 5 hours/week.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Burnout Warning</h4>
                  <p className="text-red-800">
                    LinkedIn can become a second job if you feed the algorithm (posting daily, LinkedIn Lives, long-form obsession). If after 4 weeks you're spending more than 5 hours/week and generating zero DMs, your positioning is wrong, not the platform. Stop and fix your offer page first.
                  </p>
                </div>
              </div>
            </div>

            {/* Twitter/X Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 hover:border-blue-200 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Twitter/X: The DM Machine (If You Can Tolerate It)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Who It's For</h4>
                  <p className="text-gray-700">
                    B2B service providers (£2k-£20k deals). Creators with courses/products (£47-£497). SaaS founders. Anyone whose customers actively discuss their problems on Twitter. Anyone who can write fast, witty, and substantive. If you're slow at writing, skip this.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solo Operating Rhythm (5 hours/week)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Monday/Wednesday (1.5 hours):</span> Audit your niche. Find 10 accounts posting about your topic. Note patterns in what gets replies.</li>
                    <li><span className="font-medium">Tuesday/Thursday (1.5 hours):</span> Reply to 5-10 tweets in your niche with value (not shameless self-promo). Spark mini-threads if relevant.</li>
                    <li><span className="font-medium">Friday (1 hour):</span> Write one longer thread (5-7 tweets) on a framework, case study, or contrarian take. Make the first tweet a hook: "Most people do X. It's backward. Here's why..."</li>
                    <li><span className="font-medium">Ongoing (1 hour/week):</span> Respond to replies and DMs. DM 1-2 people with genuine interest.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">£ Conversion Path</h4>
                  <p className="text-gray-700 mb-3">
                    You post: "Charging £5k for a positioning audit. My process: 6 calls over 3 weeks, then a 20-page audit. 3 closures this month, all came from Twitter." Someone replies: "How much is the call?" You DM them the price. 1 in 5 booked this month leads to a close (£5k). You get 10-15 DMs like this per month. 2-3 close = £10k-£15k/month from Twitter. Pure cold audience.
                  </p>
                  <p className="text-gray-700">
                    Twitter compresses the sales cycle (people are primed to buy), so conversion is faster but the volume is lower than LinkedIn. Tradeoff: less noise, more qualified interest.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Burnout Warning</h4>
                  <p className="text-red-800">
                    Twitter is designed for addiction. If you find yourself checking it more than 3x daily, doom-scrolling arguments, or feeling bad about low engagement, step away. The algorithm is adversarial. Either you're getting 20+ replies per tweet (which means something clicked) or you're shouting into the void. After 4 weeks, if your best tweet gets fewer than 5 replies, your positioning or timing is off. Fix that, not the platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 hover:border-blue-200 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Instagram: Only If You're Selling to Creators</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Who It's For</h4>
                  <p className="text-gray-700">
                    Selling to coaches, personal brands, creators, wellness/fitness professionals, designers. If your customer spends time on Instagram (not LinkedIn or Twitter), Instagram works. Otherwise: skip it.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solo Operating Rhythm (5 hours/week)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Sunday (45 min):</span> Identify 20 target accounts (your ideal customers or micro-influencers in your niche).</li>
                    <li><span className="font-medium">Mon/Wed/Fri (1.5 hours):</span> Engage: like 10 posts/day, comment meaningfully on 3 posts/day. This is noise, but it's signal on Instagram.</li>
                    <li><span className="font-medium">Tuesday/Thursday (1.5 hours):</span> Create and post 2 Reels or carousel posts. Formula: teach a framework or case study in 30-90 seconds (Reel) or 5 carousel slides.</li>
                    <li><span className="font-medium">Ongoing (1 hour/week):</span> DM responses, nurture 1-2 warm prospects.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">£ Conversion Path</h4>
                  <p className="text-gray-700 mb-3">
                    You post a Reel: "Why coaches charge too little" (1M views is possible if it resonates). Thousands of creators watch it. 50 DM you asking for your coaching offer (£297/month or £3k for one-on-one). 5 convert to paying customers = £1,485-£15,000 revenue from one viral Reel. Upside is massive but unpredictable. Downside: you spend 5 hours/week and get nothing. Instagram is high-risk, high-reward.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Burnout Warning</h4>
                  <p className="text-red-800">
                    Instagram is the most time-consuming platform for solos (engagement is table stakes). If you're not naturally skilled at video editing or you hate video, this will destroy you. Don't force it. After 8 weeks of consistent Reels (2x/week), if you're not getting 1,000+ views per Reel or 5+ qualified DMs/week, your content positioning is wrong. Either find a different platform or hire video editing out (£400-£800/month).
                  </p>
                </div>
              </div>
            </div>

            {/* TikTok/Shorts Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 hover:border-blue-200 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">TikTok/YouTube Shorts: The Lottery Ticket</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Who It's For</h4>
                  <p className="text-gray-700">
                    Selling to Gen-Z creators, wellness creators, micro-influencers. B2B = don't waste your time. Corporate buyers aren't on TikTok discovering services. If your customer is Gen-Z and spends 2+ hours/day on TikTok, this works. Otherwise: lottery odds at best.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solo Operating Rhythm (5 hours/week)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="font-medium">Sunday (30 min):</span> Watch 50 trending TikToks in your niche. What's the hook? What holds attention?</li>
                    <li><span className="font-medium">Mon/Tue/Wed/Thu/Fri (4 hours):</span> Create and post 5 short-form videos (15-60 seconds). Batching is key: film 5 on one day, post throughout the week.</li>
                    <li><span className="font-medium">Ongoing (30 min/week):</span> Respond to comments and DMs.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">£ Conversion Path</h4>
                  <p className="text-gray-700 mb-3">
                    You post a TikTok: "How I grew my course to £50k in revenue" (1.5M views). 200 creators DM asking for your course (£297 one-time or £47/month subscription). 10% convert at average £150 revenue each = £300 revenue minimum, £1,500 if higher-tier buyers. Upside: one viral video could generate £5k. Downside: you post 5 videos/week for 2 months, average 200 views each, zero conversions. TikTok is high-effort, low-predictability.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Burnout Warning</h4>
                  <p className="text-red-800">
                    TikTok's algorithm is ruthless and changes weekly. If after 8 weeks of 5 posts/week you're not hitting 1,000+ views average, the algorithm has shadowbanned you or your content doesn't resonate. Don't fight it. The time investment is too high for solos if you're not seeing traction fast (2-3 weeks). Also: if you hate video, if you feel awkward on camera, or if you don't have a natural voice-first teaching style, skip TikTok entirely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solo Content Cadence Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The "Minimum Effective Dose" Schedule</h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700">
              If 5 hours per week feels like too much, you've already lost. But here's how to squeeze social into your life without it becoming your life:
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="font-semibold text-gray-900 mb-6">The 4-Hour Social Media Week</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Monday (45 min)</p>
                <p className="text-gray-700">Audit. Desktop only. Find 10 targets. Note their last 3 posts. Close computer.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Wednesday (45 min)</p>
                <p className="text-gray-700">Value comments. Desktop only. Spend 3-5 minutes per comment. No phone. Make 5 substantive comments. Close computer.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Thursday (30 min)</p>
                <p className="text-gray-700">DM bridge. Find 2 people from Wednesday comments who are engaging. Send a genuine DM. Not a pitch. A question. Close computer.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Friday (1 hour)</p>
                <p className="text-gray-700">Post day. Write your one insight post (300-500 words). Post. Close computer for the week. (Batch-writing on Friday morning saves mental switching costs.)</p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900 mb-1">Sun–Sat (async, 15 min/day max)</p>
                <p className="text-gray-700">Check DMs and replies once per day on desktop via email notifications. Respond with substance or a scheduling question. DO NOT OPEN THE APP. Email-only interaction preserves your attention.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Automation Rule</h3>
            <p className="text-gray-700 mb-4">
              Delete the social media app from your phone. Seriously. Install it only on Wednesday, Thursday, Friday for breaks. Any other day you want to check social? You have to open a browser on your computer and log in (friction is your friend). This single rule—app deletion—adds 10+ hours/week back to your life.
            </p>
            <p className="text-gray-700">
              The rule: Until you hit £5k/month revenue from your core business, delete these apps. The app is designed to make you feel productive (notifications, dopamine hits) while actually stealing time. Once you're at £5k/month, you've earned the mental space to optimize social.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
            <h3 className="font-semibold text-orange-900 mb-4">The Phone Boundary (Solo Mental Health)</h3>
            <div className="space-y-3 text-orange-800">
              <p>
                <span className="font-semibold">No checking social before 12 PM.</span> Morning clarity gets stolen by notifications. Protect your first 4 hours of work.
              </p>
              <p>
                <span className="font-semibold">No checking social after 6 PM.</span> FOMO kills your ability to rest. The platform survives without you. You don't survive well without rest.
              </p>
              <p>
                <span className="font-semibold">No social in the bedroom.</span> If you wake up thinking about engagement metrics instead of your actual business, you've let the platform colonize your subconscious.
              </p>
              <p>
                <span className="font-semibold">One person running social who is NOT you?</span> Hire it out or use a co-founder. Trying to build a business AND run social AND stay sane is a myth that only works for people posting about optimization while ignoring the reality that they're burned out.
              </p>
            </div>
          </div>
        </section>

        {/* The DM Conversation Framework Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Actually Make Money (The Part Nobody Teaches)</h2>

          <p className="text-lg text-gray-700 mb-12">
            Social media doesn't sell. Conversations sell. Here's the framework:
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Trigger</h3>
              <p className="text-gray-700">Someone comments on your post, or you notice they've posted something you genuinely have perspective on. They've shown signal that they might be your customer (engaged in your niche, thinking about your topic, asking questions).</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Opener</h3>
              <p className="text-gray-700 mb-3">DM with genuine curiosity. Not: "Hey, your post was great, check my thing."</p>
              <p className="italic text-gray-700 mb-2">Bad:</p>
              <p className="bg-red-50 p-3 rounded text-red-800 mb-3">
                "Hi Sarah, loved your post on pricing! Btw I do the same thing, let's connect 🤝"
              </p>
              <p className="italic text-gray-700 mb-2">Good:</p>
              <p className="bg-green-50 p-3 rounded text-green-800">
                "Hey Sarah, this line from your post stuck with me: 'Most coaches undercharge.' I've seen that too. When I raised prices from £200 to £800, my close rate went up (fewer tire-kickers). Have you experienced the same?"
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Value Exchange</h3>
              <p className="text-gray-700 mb-3">They reply. You offer something tiny. Not a call (yet). Just one insight that's worth their attention.</p>
              <p className="italic text-gray-700 mb-2">Example:</p>
              <p className="bg-blue-50 p-3 rounded text-blue-800">
                "Cool, yeah that resonates. I actually track three metrics: calls booked, close rate, and revenue per call. Most people obsess over call volume instead of increasing the value per call. If you want, I could send you my pricing framework—it's the sheet I use with clients."
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4: Bridge to Paid</h3>
              <p className="text-gray-700 mb-3">After 2-3 valuable exchanges, if there's genuine fit, you ask for a call—but you frame it as them potential getting more value, not you pitching.</p>
              <p className="italic text-gray-700 mb-2">Example:</p>
              <p className="bg-purple-50 p-3 rounded text-purple-800">
                "This is helpful to explore. Would it make sense to hop on a brief call? I could audit your pricing page against the three metrics I mentioned. Usually takes 20 minutes, and you'll walk away with one specific change to test."
              </p>
              <p className="text-gray-700 mt-3">
                They say yes or no. If yes: 20-minute call. You do the mini-audit. At the end: "Would you like to go deeper on this? I offer a full positioning audit, £1,500, takes 3 weeks." Some yes, some no. The yes's are your customers.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-8">
            <h3 className="font-semibold text-green-900 mb-4">Solo Constraint Math</h3>
            <p className="text-green-800 mb-4">
              If you start 5 meaningful DMs per week (not creepy mass DMs, but real conversations):
            </p>
            <ul className="space-y-2 text-green-800">
              <li>• <span className="font-medium">5 DMs/week × 4 weeks = 20 conversations/month</span></li>
              <li>• <span className="font-medium">20 conversations → 5 people interested in a mini-call</span> (25% interested)</li>
              <li>• <span className="font-medium">5 mini-calls → 2-3 buy a paid offer</span> (40-60% convert after value demo)</li>
              <li>• <span className="font-medium">2-3 offers at £2,000 each = £4,000-£6,000/month from cold social audience</span></li>
              <li>• <span className="font-medium">Annual: £48k-£72k revenue from 5 DMs/week social activity</span></li>
            </ul>
            <p className="text-green-800 mt-6">
              That's why social is worth the time. Not for the posts. For the DMs. The posts are the net to catch attention. The DMs are the line that converts.
            </p>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-6 mt-6">
            <h3 className="font-semibold text-red-900 mb-4">Forbidden Phrases in Your DMs</h3>
            <ul className="space-y-2 text-red-800">
              <li>• "Jump on a call to explore synergies" (sounds corporate and fake)</li>
              <li>• "Let's connect soon!" (vague, no signal)</li>
              <li>• "Would love to pick your brain" (implies one-way value, transactional)</li>
              <li>• "Growing fast and looking to collab" (nobody cares about your growth)</li>
              <li>• "Check out my thing" (spammy, skippable)</li>
              <li>• "I have something that might interest you" (vague, salesy)</li>
            </ul>
          </div>
        </section>

        {/* Metrics That Matter Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unfollow Your Follower Count</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-xl border border-green-200 p-6">
              <h3 className="font-semibold text-green-900 mb-4">Metrics to Track ✓</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><span className="font-semibold">Warm conversations started (DMs)</span> per week. Goal: 5+</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><span className="font-semibold">Calls booked from social</span> per month. Goal: 5+</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span><span className="font-semibold">Revenue directly attributed</span> to social (DM → call → close). Goal: 1+ deal/month</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-semibold text-red-900 mb-4">Metrics to Ignore ✗</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex gap-2">
                  <span className="font-bold">×</span>
                  <span><span className="font-semibold">Follower growth</span> (vain metric, doesn't correlate to money)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">×</span>
                  <span><span className="font-semibold">Engagement rate</span> (unless it's correlating to DMs—it usually isn't)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">×</span>
                  <span><span className="font-semibold">Impressions, reach, views</span> (platform wants you obsessed with these)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">The 90-Day Rule</h3>
            <p className="text-gray-700 mb-4">
              Commit to ONE platform and ONE playbook for exactly 90 days. No switching, no "also trying LinkedIn." At day 90, check your results:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">Revenue:</span>
                <span>Less than £2,000 total? This platform isn't your channel. Pivot.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">Warm leads:</span>
                <span>Fewer than 10 qualified DMs/conversations? Your positioning or offer is unclear. Fix that first, not the platform.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">Vibes:</span>
                <span>Hating it? Feeling drained? Your body is telling you something. Trust it. Life's too short to hate your own marketing.</span>
              </li>
            </ul>
            <p className="text-gray-700">
              If you hit 2+ of these: revenue OR warm leads, and you don't hate it → keep going. Increase to 10 hours/week if revenue supports it. If not: try a different platform in the next 90 days.
            </p>
          </div>
        </section>

        {/* Your Next Step Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Next Step</h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-8 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Primary Action</h3>
            <p className="text-gray-900 mb-6 text-lg leading-relaxed">
              Pick ONE platform above based on your business model. Spend 30 minutes today doing the 20-Minute Audit (Step 1 of the Sniper Method from earlier). Find your first 10 targets. List them. Just that. You don't follow, DM, or post yet. You just observe.
            </p>
            <p className="text-gray-700">
              Tomorrow: Start the audit. Next Monday: Commit the 90-Day Rule. Three months from now: You'll either have made money or learned that social isn't your channel. Either way, you'll be done guessing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/marketing/content-marketing" className="group">
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-300 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">Content Marketing</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Social amplifies content; it doesn't replace it. Learn what to actually say.
                </p>
                <p className="text-blue-600 group-hover:text-blue-700 text-sm font-medium">Read guide →</p>
              </div>
            </Link>

            <Link href="/sales/discovery-calls" className="group">
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-300 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">Discovery Calls</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Once you get a DM → call, here's how to convert it to a sale.
                </p>
                <p className="text-blue-600 group-hover:text-blue-700 text-sm font-medium">Read guide →</p>
              </div>
            </Link>

            <Link href="/start/business-models" className="group">
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-300 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">Business Models</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Platform choice depends on your offer. Confirm your model first.
                </p>
                <p className="text-blue-600 group-hover:text-blue-700 text-sm font-medium">Read guide →</p>
              </div>
            </Link>
          </div>

          <div className="bg-red-50 rounded-xl border-2 border-red-300 p-8">
            <div className="flex gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <h3 className="font-bold text-red-900 text-lg">Critical: DON'T START SOCIAL YET</h3>
            </div>
            <p className="text-red-800 mb-3">
              Before posting a single thing on any platform, confirm you have an offer page. Traffic without conversion is just noise. If someone DMs you and asks "What do you offer?" and you don't have a clear £ price, you've wasted their time and yours.
            </p>
            <p className="text-red-800">
              Make sure you've completed a pricing page, offer clarity, and ideally one successful sale. Then come back here and start the Sniper Protocol. Social is the megaphone. Clarity is the message. Message first.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
