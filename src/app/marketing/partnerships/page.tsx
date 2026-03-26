import { ScrollToTop } from '@/components/ScrollToTop';
import { ShareButtons } from '@/components/ShareButtons';
import AuthorBox from '@/components/AuthorBox';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export const metadata = {
  title: 'The Partnership Myth: Why Strategic Partnerships Are Stealing Your Time',
  description: 'You don\'t need a partnership manager. You need a referral kit. Here\'s the 2-hour/week system that generated £127k revenue—without a single partner meeting.',
};

export default function PartnershipsPage() {
  return (
    <>
      <ScrollToTop />
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Partnership Myth: Why 'Strategic Partnerships' Are Stealing Your Time
          </h1>
          <p className="text-xl text-gray-600">
            You don't need a partnership manager. You need a referral kit. Here's the 2-hour/week system that generated £127k of my revenue last year—without a single 'partner meeting.'
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* HOOK */}
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-lg leading-relaxed font-semibold text-purple-900 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            I spent 40 hours in 'partner exploration calls' in 2021. Result: 2 leads, 0 clients. I spent 5 hours building a customer referral system. Result: 12 leads, 4 clients, £47k revenue. Partnerships aren't about relationships—they're about systems that transfer trust while you sleep.
          </p>
        </div>

        {/* ===== SECTION 1: THE PARTNERSHIP TAX ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Traditional Partnerships Cost Solo Founders £500/Week
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">The Meeting Trap</h3>
              <p className="text-gray-700">A '30-minute coffee' is 60 minutes travel + 30 minutes chat + 15 minutes follow-up email. That's £150 in billable time. Do 3 per week and you've lost £450—more than your entire ad budget should be.</p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">The Formal Agreement Fallacy</h3>
              <p className="text-gray-700">You don't need a 12-page referral agreement. You need a forwardable email template. Contracts are what companies use when they don't trust each other. Trust moves faster than legal.</p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">The Size Mismatch</h3>
              <p className="text-gray-700">Stop trying to partner with HubSpot. Their smallest partner tier requires 10 employees and £50k in revenue. Your best partner is a copywriter with 3 clients who needs a web designer.</p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">The Activity Illusion</h3>
              <p className="text-gray-700">Attending 'networking events' feels like progress. It's not. One customer referral {'>'}  100 business cards. I tracked this for 6 months: 12 events, 0 clients. 3 referral emails, 2 clients.</p>
            </div>

            <p className="text-lg leading-relaxed font-semibold border-l-4 border-gray-900 pl-4 mt-6">
              <strong>Solo Constraint:</strong> If you're spending more than 3 hours/week on partnerships, you don't have a partnership problem—you have an offer problem. A tight offer markets itself.
            </p>
          </div>
        </div>

        {/* ===== SECTION 2: THE REFERRAL-FIRST FRAMEWORK ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Trust Ladder: Where to Focus Based on Your Revenue
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Hierarchy (Highest to Lowest Trust)</h3>
          
          <div className="space-y-3 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gray-900">Customer Referrals (trust: 10/10)</p>
              <p className="text-gray-700 text-sm mt-1">They've paid you. They've experienced the outcome.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-gray-900">Provider Reciprocity (trust: 8/10)</p>
              <p className="text-gray-700 text-sm mt-1">Complementary service providers. Same client, different problem.</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <p className="font-semibold text-gray-900">Community Nodes (trust: 6/10)</p>
              <p className="text-gray-700 text-sm mt-1">Newsletter/podcast hosts. Need value for audience.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
              <p className="font-semibold text-gray-900">Affiliate Programs (trust: 3/10)</p>
              <p className="text-gray-700 text-sm mt-1">Link-sharers. Low trust, low conversion.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Decision Matrix: Where Should YOU Focus?</h3>

          <div className="overflow-x-auto border border-gray-200 rounded-lg mb-8">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Your Stage</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Focus</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Why</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Time/Week</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Under £5k/month</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Customer Referrals ONLY</td>
                  <td className="px-6 py-4 text-sm text-gray-700">You need cash, not leverage. 1 referral = £2-5k.</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 hour</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">£5-15k/month</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">Customer + Providers</td>
                  <td className="px-6 py-4 text-sm text-gray-700">You have proof. Providers can 2x your pipeline.</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2 hours</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">£15k+/month</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">All 3 (No affiliates)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">You need volume. Community nodes scale reach.</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed">
            <strong>The Solo Test:</strong> Could you explain your partnership system to a 12-year-old? If not, it's too complex. My customer referral system: "I help my clients, then I ask them to tell their friends." That's it.
          </p>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mt-6">
            <strong>Constraint Check:</strong> You can only execute ONE system well. Anyone telling you to 'layer multiple partnership channels' has a partnership manager. Pick one. Master it. Add a second only when the first generates £10k/month on autopilot.
          </p>
        </div>

        {/* ===== SECTION 3: THE CUSTOMER REFERRAL SYSTEM ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Last Client is Your Best Partner
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Customer Referrals Dominate</h3>
          
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>They've paid you (trust is proven)</li>
            <li>They know your process (can vouch authentically)</li>
            <li>They know who needs you (peer network)</li>
            <li>Conversion rate: 60-80% (vs. 1-5% for cold outreach)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The 3-Part System</h3>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Part 1: The Ask (Timing & Script)</h4>
            
            <p className="text-gray-700 mb-4">
              <strong>Timing:</strong> Ask 48-72 hours after you've delivered the "win." Not at project end (they're busy), not 3 months later (they've forgotten).
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Email Script</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-2">
                <p>Subject: Quick favour?</p>
                <p>&nbsp;</p>
                <p>Hey [Name],</p>
                <p>&nbsp;</p>
                <p>Just saw [specific win: "the new homepage live"]. Looks brilliant.</p>
                <p>&nbsp;</p>
                <p>Quick question: do you know another founder who needs a [your service]?</p>
                <p>&nbsp;</p>
                <p>I'm not looking for an intro—just if someone comes to mind, here's a £300 credit you can share: [link to referral kit]</p>
                <p>&nbsp;</p>
                <p>No pressure at all. Just thought I'd ask while we're both excited about the result.</p>
                <p>&nbsp;</p>
                <p>Thanks again,<br />[Your name]</p>
              </div>
            </div>

            <p className="text-gray-700">
              <strong>Why this works:</strong> Low pressure, specific credit, forwardable link.
            </p>

            <p className="text-gray-700 border-l-4 border-gray-900 pl-4 mt-4">
              <strong>Solo Constraint:</strong> If you can't write this email in 3 minutes, your offer isn't specific enough.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Part 2: The Referral Kit (Make It Forwardable)</h4>
            
            <p className="font-semibold text-gray-900 mb-3">The Kit Includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>2-sentence description of what you do (not a pitch)</li>
              <li>One-sentence social proof: "I helped [similar company] get [specific result]"</li>
              <li>Forwardable email template (they copy/paste)</li>
              <li>£200-500 credit or 10% discount (not both)</li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Forwardable Template</p>
              <p className="text-gray-700 text-sm font-mono">
                "Hey [Friend], thought you might find this useful: [Your Name] helps [niche] with [problem]. He just helped us [result]. His details: [link/calendly]"
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-gray-900 mb-2">✅ Example</p>
              <p className="text-gray-700 text-sm">Tom runs a SaaS (£30k MRR). You design his new dashboard. 48 hours post-launch, you send the kit. He forwards it to 2 founder friends. One books a £5k project. Your total time: 15 minutes. ROI: £5k.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
              <p className="font-semibold text-gray-900 mb-2">❌ Anti-Example</p>
              <p className="text-gray-700 text-sm">Don't create a 'referral portal' they have to log into. Don't make them 'register as an affiliate.' Don't offer 30% commission on a £5k project—you look desperate.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Part 3: The Automation Trigger</h4>
            
            <p className="font-semibold text-gray-900 mb-3">Setup:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Invoice paid → 30-day delay → automated email (via Zapier or ConvertKit)</li>
              <li>Email includes referral kit link</li>
              <li>You personally follow up 7 days later: "Hey, did you get the referral kit? Happy to tweak it."</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Why automation works:</strong> You don't forget. They don't feel pressured.
            </p>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Solo Math Box</p>
              <p className="text-gray-700 text-sm">Set this up once: 2 hours. Then it runs forever. If it generates 1 referral/month at £3k average, that's <strong>£36k/year</strong> from a 2-hour setup.</p>
            </div>

            <p className="text-gray-700 border-l-4 border-gray-900 pl-4">
              <strong>The 90-Day Rule:</strong> If you haven't received 3 referrals in 90 days, your delivery is weak or your ask is vague. Fix the work, not the script.
            </p>
          </div>
        </div>

        {/* ===== SECTION 4: B2B PROVIDER PLAYBOOK ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complementary Providers: Your Unofficial Sales Team
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Qualifies as a "Provider Partner"</h3>
          <p className="text-gray-700 mb-4">Solves a different problem for the same Ideal Client</p>
          <p className="text-gray-700 mb-8"><strong>Example:</strong> Web designer + Copywriter, SEO consultant + Paid ads manager, Business coach + Accountant</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Reciprocity Engine</h3>

          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Step 1: The Vetting Question</p>
            <p className="text-gray-700 mb-2">Before you invest time, ask: "When's the last time you referred someone to a partner?"</p>
            <p className="text-gray-700 text-sm">If they can't answer in 10 seconds, move on. They're takers, not givers.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Step 2: The Value-First Lead</p>
            <p className="text-gray-700">Send them 1 qualified lead before you ask for anything.</p>
            <p className="text-gray-700 text-sm mt-2 font-mono">"Hey, my client needs [their service]. I recommended you. Here's their email. CC'ing you both."</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
            <p className="font-semibold text-gray-900 mb-2">Step 3: The Soft Ask</p>
            <p className="text-gray-700">48 hours later: "Thanks for taking that intro. By the way, if you ever run into someone who needs [your service], here's a quick blurb you can forward."</p>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>The No-Commission Rule:</strong> Never offer a referral fee. It commoditizes the relationship. If they need payment to refer you, they don't trust you enough. Trust-based referrals convert 3x better anyway.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="font-semibold text-gray-900 mb-4">✅ The Provider Loop</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Sarah</strong> (web design, £3k/project)</li>
              <li><strong>Alex</strong> (copywriting, £2k/project)</li>
              <li><strong>Same client:</strong> SaaS founders</li>
              <li>Sarah's client mentions copy: "Talk to Alex. Here's his Calendly." (30 seconds)</li>
              <li>Alex's client mentions redesign: "Talk to Sarah. Here's her booking link." (30 seconds)</li>
            </ul>
            <p className="text-sm font-semibold text-gray-900">Result: Sarah gets 2 referrals/month from Alex = £72k/year. Alex gets 1.5 referrals/month from Sarah = £36k/year. Total time investment: 1 hour/month each.</p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-4">
            <p className="font-semibold text-gray-900 mb-2">❌ Anti-Example</p>
            <p className="text-gray-700">Don't schedule a 'partner sync call' to 'align on messaging.' Just send leads. Actions {'>'}  meetings.</p>
          </div>

          <p className="text-gray-700 border-l-4 border-red-500 pl-4 mt-6">
            <strong>⚠️ Warning:</strong> If you refer a client to a provider and they do bad work, that reflects on you. Vet them like you'd vet for your own business.
          </p>
        </div>

        {/* ===== SECTION 5: COMMUNITY NODE STRATEGY ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Newsletter Writers & Podcast Hosts: Your Scaling Leverage
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Who is a "Community Node"</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Newsletter writer (2k-50k subscribers, niche audience)</li>
            <li>Podcast host (niche business/industry)</li>
            <li>Community manager (Slack/Discord, paid community)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why They Need You</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>They need content/value for their audience</li>
            <li>They can't be experts in everything</li>
            <li>A guest post/interview saves them creation time</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="font-semibold text-gray-900 mb-3">The Value-First Pitch (Email)</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-2">
              <p>Subject: Guest post for [Newsletter Name]</p>
              <p>&nbsp;</p>
              <p>Hey [Name],</p>
              <p>&nbsp;</p>
              <p>Your piece on [specific article] resonated—especially the point about [detail].</p>
              <p>&nbsp;</p>
              <p>I've got a 1,500-word case study on [specific topic] that your [audience type] would find actionable. It's about [specific result] for [similar company].</p>
              <p>&nbsp;</p>
              <p>Happy for you to run it as a guest post. No link spam—just a bio link to my Calendly.</p>
              <p>&nbsp;</p>
              <p>Either way, keep up the great work.</p>
              <p>&nbsp;</p>
              <p>[Your name]</p>
            </div>
            <p className="text-gray-700 text-sm mt-4">
              <strong>Why this works:</strong> You're solving their content problem, not asking for a favor.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The ROI Math</h3>
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-8">
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li>One guest post in a 10k subscriber newsletter</li>
              <li>{'>'}200 click your bio link (2%)</li>
              <li>{'>'}20 book a call (10%)</li>
              <li>{'>'}5 become clients (25%)</li>
              <li>Average project: £3k</li>
              <li><strong>Revenue: £15k</strong></li>
              <li><strong>Time: 3 hours to write the post</strong></li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>Solo Constraint:</strong> Only guest post for audiences that match your Ideal Client profile. A post for 'all entrepreneurs' is a post for no one.
          </p>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
            <p className="font-semibold text-gray-900 mb-2">✅ Example</p>
            <p className="text-gray-700 text-sm">You help e-commerce brands with email. You guest post for a Shopify newsletter (8k subscribers). 3 clients at £4k each = £12k. That's a quarter's revenue from one article.</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
            <p className="font-semibold text-gray-900 mb-2">❌ Anti-Examples</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Don't pitch 'I'd love to be on your podcast' with no topic.</li>
              <li>Don't pitch 'I help businesses grow' (too vague).</li>
              <li>Don't ask for a backlink (you're not doing SEO, you're getting clients).</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4">
            <strong>The One-Post Rule:</strong> Guest post once per quarter max. More than that and you're a writer, not a business owner.
          </p>
        </div>

        {/* ===== SECTION 6: AFFILIATE DECISION ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Affiliate Programs Are Usually a Distraction
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Affiliate Math</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8 text-sm">
            <p className="text-gray-700 mb-2">You sell a £197 email template pack</p>
            <p className="text-gray-700 mb-2">You offer 30% commission = £59 per sale</p>
            <p className="text-gray-700 mb-2">Affiliate sends 10 sales/month = £1970 revenue, £591 commission</p>
            <p className="text-gray-700">Your margin: 90% = £1,773 profit</p>
          </div>

          <p className="text-gray-700 mb-8">Sounds good. Here's why it fails for most solos:</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">When Affiliate Programs Work</h3>
          <ul className="list-disc pl-6 space-y-1 mb-8 text-gray-700">
            <li>Digital products, £47-£197</li>
            <li>High volume (50+ sales/month)</li>
            <li>Low/no delivery time (templates, courses)</li>
            <li>You have existing organic sales</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">When Affiliate Programs Fail</h3>
          <ul className="list-disc pl-6 space-y-1 mb-8 text-gray-700">
            <li>Services £2k+ (commission would be £600—too high)</li>
            <li>Low volume (you lose more time managing affiliates than they generate)</li>
            <li>High-touch delivery (consulting, done-for-you)</li>
          </ul>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>Solo Rule:</strong> Don't launch affiliates until you have £10k/month in organic sales. Before that, focus on customer referrals—they convert better and cost zero management time.
          </p>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4">
            <strong>Bottom Line:</strong> Affiliate programs feel like leverage. For most solos, they're a time sink disguised as scale.
          </p>
        </div>

        {/* ===== SECTION 7: THE PARTNERSHIP CADENCE ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The 2-Hour Weekly Partnership Block
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Time Block: Friday, 3-5pm</h3>
          <p className="text-gray-700 mb-6"><strong>Why Friday:</strong> Partnerships are important but not urgent. Don't let them bleed into deep work time.</p>

          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 mb-8">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Segment 1: Customer Referrals (30 min)</p>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>Identify 2 recent wins (last 30 days)</li>
                <li>Send referral kit emails</li>
                <li>Log in tracking sheet</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900 mb-2">Segment 2: Provider Nurturing (30 min)</p>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>Send 1 lead to a provider partner</li>
                <li>Comment/share their recent content (LinkedIn)</li>
                <li>Quick email: "Saw your post on [topic]. Solid."</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900 mb-2">Segment 3: Community Outreach (30 min)</p>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>Find 1 newsletter/podcast to pitch</li>
                <li>Send value-first guest post pitch</li>
                <li>Log response</li>
              </ul>
            </div>

            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900 mb-2">Segment 4: Tracking & Optimization (30 min)</p>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>Update partnership spreadsheet</li>
                <li>Identify highest-ROI partner type</li>
                <li>Cut lowest-performing partner (if any)</li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-6">
            <strong>The Async-Only Rule:</strong> If it requires a scheduled call (partner sync, exploration chat, 'brainstorm'), it doesn't exist for solos. All partnership building is email, DM, or async video.
          </p>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>The Phone Boundary:</strong> Delete LinkedIn from your phone. Partnership building is desktop work. You are not 'networking'—you're building a revenue system. Treat it like bookkeeping: scheduled, focused, then you're done.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="font-semibold text-gray-900 mb-3">Example Cadence</p>
            <p className="text-gray-700 mb-2"><strong>Sarah</strong> (web designer) does Fridays 3-5pm</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
              <li>Week 1: 2 referral kits sent → 1 referral received</li>
              <li>Week 2: 1 provider lead sent → 0 immediate return (but reciprocity banked)</li>
              <li>Week 3: 1 guest post pitch → accepted → £12k revenue 3 weeks later</li>
            </ul>
            <p className="font-semibold text-gray-900">Total time: 6 hours/month. Revenue: £15k. Hourly rate: £2,500.</p>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mt-6">
            <strong>Solo Constraint:</strong> If you miss a week, don't double up. Just restart. This is a system, not a sprint.
          </p>
        </div>

        {/* ===== SECTION 8: THE PITCH FRAMEWORK ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Ask Without Sounding Like a Networker
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The 3-Sentence Ask (Email/DM)</h3>

          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Sentence 1: Context</p>
                <p className="text-gray-700 text-sm">"I've been working with [customer type] on [specific problem]."</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sentence 2: Value (Forwardable Asset)</p>
                <p className="text-gray-700 text-sm">"If you ever run into someone dealing with that, here's a 2-pager on my approach: [link]."</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sentence 3: No Pressure</p>
                <p className="text-gray-700 text-sm">"No pressure at all—just thought it might be useful."</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 border-t pt-4">
              <strong>Why This Works:</strong> No "pick your brain" or "explore synergies". Gives them a concrete asset to forward. Low pressure = they actually think about it.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Forwardable Asset (Examples)</h3>

          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 text-sm mb-1">Option A: The Case Study</p>
              <p className="text-gray-700 text-sm">"How I helped [Similar Company] reduce churn 40% in 30 days: [Notion link]"</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 text-sm mb-1">Option B: The Quick Audit</p>
              <p className="text-gray-700 text-sm">"Here's a 3-question audit to see if you're leaking revenue: [Typeform link]"</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="font-semibold text-gray-900 text-sm mb-1">Option C: The Calculator</p>
              <p className="text-gray-700 text-sm">"Customer Lifetime Value calculator for SaaS founders: [Google Sheet]"</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>Solo Rule:</strong> If you can't create this asset in 30 minutes, it's too complex.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Follow-Up (48 hours later)</h3>
          <p className="text-gray-700 mb-4">
            "Thanks for checking it out. If you ever make an intro, I'll CC you on the thank-you so you see the value you created."
          </p>
          <p className="text-gray-700 mb-8"><strong>Why:</strong> Creates accountability loop. They see the outcome of their referral.</p>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
            <p className="font-semibold text-gray-900 mb-2">✅ Example - The Good Pitch</p>
            <p className="text-gray-700 text-sm">You (SEO) to a business coach: "Hey, I've been working with SaaS founders on technical SEO audits. If you ever run into a client hitting a traffic plateau, here's my 1-pager on the 3 technical issues I see most: [link]. No pressure—just thought it might be useful."</p>
            <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> Coach reads it, forwards it to a client 2 weeks later. £5k project. Total time: 5 minutes.</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-gray-900 mb-2">❌ Anti-Examples</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Don't say: 'I'd love to hop on a call to explore how we can collaborate.' That's 1998 sales speak.</li>
              <li>Don't say: 'I think there's synergy between our businesses.' Vague = ignored.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mt-6">
            <strong>Solo Constraint:</strong> If you feel 'icky' asking, your offer isn't strong enough. Fix the delivery, then the referrals come naturally.
          </p>
        </div>

        {/* ===== SECTION 9: TRACKING & RECIPROCITY ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Spreadsheet That Makes It Real
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Tracking Sheet (Columns)</h3>
          <p className="text-gray-700 mb-8 font-mono bg-gray-100 p-4 rounded text-sm">
            Date | Partner Type | Who | Action | Lead Sent? | Revenue | Thank You Sent?
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Tracking Matters</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
            <li>You see which partner type actually delivers revenue</li>
            <li>You see who's reciprocating (send leads to givers only)</li>
            <li>You can calculate true ROI: Revenue ÷ Time Spent</li>
          </ul>

          <p className="text-lg leading-relaxed border-l-4 border-purple-500 bg-purple-50 p-4 rounded mb-8">
            <strong>The Reciprocity Rule:</strong> Every time you receive a referral, you must send one within 30 days. Why? Partnerships are living systems, not ledgers. Reciprocity keeps them alive.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Thank You (Public)</h3>
          <p className="text-gray-700 mb-4">LinkedIn post: "Huge thanks to [Partner Name] for the intro to [Client]. If you need [partner's service], they're the one. [link]"</p>
          <p className="text-gray-700 mb-8"><strong>Why public:</strong> Shows you're a giver. Makes them look good. Encourages more referrals.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Annual Audit (30 min, December)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
            <li>Export spreadsheet</li>
            <li>Sort by revenue generated</li>
            <li>Top 3 partners: Double down next year</li>
            <li>Bottom 3 partners: Stop investing time</li>
            <li>Calculate: % of total revenue from referrals</li>
          </ul>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>Benchmark:</strong> A healthy referral system should generate 30-50% of your revenue by year 2.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="font-semibold text-gray-900 mb-4">Example: Sarah (web designer) audits her year</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
              <li>Customer referrals: £84k (7 clients)</li>
              <li>Provider referrals: £36k (3 clients)</li>
              <li>Community nodes: £12k (1 client)</li>
              <li><strong>Total: £132k (42% of revenue)</strong></li>
              <li><strong>Time spent: 90 hours</strong></li>
              <li><strong>Effective hourly rate: £1,467</strong></li>
            </ul>
            <p className="font-semibold text-gray-900 text-sm">Decision for next year: "Double down on customer referrals. Maintain provider relationships. Do 2 more guest posts."</p>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mt-6">
            <strong>Solo Constraint:</strong> If you have more than 10 active partners, you're managing relationships, not building a system. Cap it at 5-7 core partners.
          </p>
        </div>

        {/* ===== SECTION 10: METRICS THAT MATTER ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Unfollow Your 'Partner Count'
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Track These Weekly</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
            <li>Referrals received (by type: customer, provider, community)</li>
            <li>Referral conversion rate (leads → calls → clients)</li>
            <li>Revenue attributed to referrals (even if indirect)</li>
            <li>Time spent on partnership activities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ignore These</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
            <li>Number of partners (vanity)</li>
            <li>Meetings had (activity)</li>
            <li>Partnership agreements signed (overhead)</li>
            <li>Introductions made (unless they convert)</li>
          </ul>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-8">
            <strong>The 90-Day Rule:</strong> Commit to one partnership system for 90 days. If you haven't generated £5k+ in revenue or 5 warm leads by Day 90, your system is wrong or your offer is weak.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">The ROI Calculation</h3>
          <p className="text-gray-700 mb-4 font-mono bg-gray-100 p-4 rounded">
            Partnership ROI = (Revenue from referrals - Time spent × your hourly rate) ÷ Time spent
          </p>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 mb-8">
            <p className="font-semibold text-gray-900 mb-3">Example</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
              <li>Revenue: £15k</li>
              <li>Time: 10 hours</li>
              <li>Your rate: £100/hour</li>
            </ul>
            <p className="font-mono bg-gray-900 text-white p-3 rounded text-sm">
              ROI = (£15k - £1k) ÷ 10 = £1,400/hour
            </p>
          </div>

          <p className="text-lg leading-relaxed border-l-4 border-gray-900 pl-4 mb-6">
            <strong>Solo Rule:</strong> If your partnership ROI drops below £500/hour, you're over-investing. Cut complexity.
          </p>

          <p className="text-lg leading-relaxed border-l-4 border-red-500 bg-red-50 p-4 rounded">
            <strong>⚠️ Warning:</strong> Never compare partnership ROI to 'free' organic social. Compare it to your paid channels. If Google Ads costs you £200 to acquire a client, and referrals cost £50 (time), double down on referrals.
          </p>
        </div>

        {/* ===== YOUR NEXT STEP ===== */}
        <div className="prose prose-lg mx-auto mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Next Step: Email Your Last 3 Clients Today
          </h2>

          <p className="text-lg leading-relaxed text-gray-900 font-semibold mb-6">
            Take 15 minutes. Send them the referral kit script. Do it before you close this page.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Then, this week:</h3>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
            <li>Set up partnership tracking spreadsheet (template: <Link href="#" className="text-emerald-600 hover:text-emerald-700 underline">Google Sheets link</Link>)</li>
            <li>Identify 3 complementary providers in your network</li>
            <li>Write one guest post case study (30 minutes)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended next reads:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><Link href="/marketing/lead-flow" className="text-emerald-600 hover:text-emerald-700 underline">Systematize your incoming leads</Link></li>
            <li><Link href="/offer/pricing" className="text-emerald-600 hover:text-emerald-700 underline">Ensure your offer is tight before scaling referrals</Link></li>
            <li><Link href="/marketing/first-customers" className="text-emerald-600 hover:text-emerald-700 underline">Building proof with early customers</Link></li>
          </ul>
        </div>

        {/* WARNING BOX */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-12">
          <p className="text-gray-900 font-semibold mb-2">⚠️ Critical Warning</p>
          <p className="text-gray-700">
            Do not build a partnership system until you have 3 happy clients. A referral system without proof is just begging. Deliver first, then leverage.
          </p>
        </div>

        {/* ===== AUTHOR BOX ===== */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <AuthorBox />
        </div>

        {/* ===== NEWSLETTER CTA ===== */}
        <NewsletterCTA />

        {/* ===== SHARE BUTTONS ===== */}
        <div className="mt-8">
          <ShareButtons 
            url="https://onefoundr.com/marketing/partnerships" 
            title="The Partnership Myth: Why Strategic Partnerships Are Stealing Your Time" 
          />
        </div>
      </div>
    </>
  );
}
