import { ScrollToTop } from '@/components/ScrollToTop';
import { ShareButtons } from '@/components/ShareButtons';
import AuthorBox from '@/components/AuthorBox';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export const metadata = {
  title: 'The Referral-First Growth System: How Solopreneurs Turn Clients into Predictable Revenue',
  description: 'Stop chasing partnerships. Learn the exact system to get 5+ qualified referrals/month from existing clients—without being pushy or wasting time.',
};

export default function PartnershipsPage() {
  return (
    <>
      <ScrollToTop />
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Referral-First Growth System
          </h1>
          <p className="text-xl text-gray-600">
            How Solopreneurs Turn Clients into Predictable Revenue
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* ===== HOOK SECTION ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Referrals are the only marketing channel where revenue scales without more work—but 91% of solopreneurs activate them wrong. Here's why: Your happiest client wants to refer you. They just don't know when, how, or what to say without feeling pushy or risking their reputation.
          </p>
          
          <p className="text-lg leading-relaxed">
            Fix that gap, and referrals stop being random luck—they become your most predictable growth lever. The difference between a referral system that generates zero leads and one that generates five per month isn't luck. It's engineering.
          </p>

          <p className="text-lg leading-relaxed">
            This guide walks you through the exact mechanics: when to ask, what to say, how to track it, and why waiting until delivery is complete costs you 80% of your referral potential. {' '}
            <Link href="/offer/positioning" className="text-blue-600 hover:text-blue-700 underline">
              If clients can't articulate your value, referrals confuse them
            </Link>
            {' '}—so we start there.
          </p>
        </div>

        {/* ===== REFERRAL CHANNEL REALITY CHECK TABLE ===== */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Referral Channel Reality Check
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Channel
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Time to First Referral
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Ongoing Weekly Effort
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Referral Quality (1–10)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Solo Viability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Cold Outreach</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4–8 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5–10 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-red-50 text-red-600">❌ Unsustainable</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Content Marketing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3–6 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8–12 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-yellow-50 text-yellow-600">⚠️ Delayed ROI</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Customer Referrals (Systemized)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0–2 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1–2 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-green-50 text-green-600">✅ Sustainable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg mx-auto mt-6">
            <p className="text-lg leading-relaxed">
              Why this matters: Systemized referrals cost 90% less time than cold outreach and deliver 3× higher-quality leads—but only if you engineer the ask into your delivery workflow. {' '}
              <Link href="/start/first-90-days" className="text-blue-600 hover:text-blue-700 underline">
                New solopreneurs: nail delighting 3 clients first
              </Link>
              {' '}before you worry about referrals at scale.
            </p>
          </div>
        </div>

        {/* ===== SECTION 1: THE REFERRAL TRUTH ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Referral Truth: Why Your Clients Are Already Salespeople
          </h2>

          <p className="text-lg leading-relaxed">
            Last month, 68% of your happiest clients thought about referring you—but didn't. The gap isn't motivation. It's clarity and permission.
          </p>

          <p className="text-lg leading-relaxed">
            Most referral systems fail because they treat the ask as a transaction ("Tell your friend about me, and I'll give you £25 off"). Client reality: They're not salespeople. They're busy. Recommending you to someone carries social risk ("What if they hate it? I look bad"). You need to eliminate that risk.
          </p>

          <p className="text-lg leading-relaxed">
            Here's the first-principles rule: <strong>Referrals happen naturally when three conditions align:</strong>
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>The client just experienced a "wow" moment.</strong> Not just completion—joy. Relief. A result they didn't expect. This is your advocacy window. It closes fast (24–48 hours).</li>
            <li><strong>They know exactly what to say about you.</strong> Most clients can't. If you ask "Do you know anyone who needs help?", they'll say "I'm not sure" even if they do. But if you ask "Do you know any other service businesses struggling with client acquisition?", suddenly they remember three people.</li>
            <li><strong>The ask is frictionless.</strong> You make it stupidly easy. A link to forward. A specific name + problem. A way to refer that makes them look good, not like they're promoting you.</li>
          </ol>

          <p className="text-lg leading-relaxed">
            Real example: A Manchester web designer I worked with was getting zero referrals despite delivering beautiful work. Her clients loved her, but she only asked "Do you know anyone else who needs a website?" (generic, low specificity). We changed it to: "Do you know any other local service businesses whose websites look tired?"—asked 24 hours after launch. Referrals went from 0/month to 4/month in 60 days.
          </p>

          <p className="text-lg leading-relaxed">
            The difference: She moved the ask into the advocacy window, made it specific (local service businesses), and named the problem (websites look tired) instead of asking for the solution.
          </p>
        </div>

        {/* ===== SECTION 2: THE CUSTOMER REFERRAL SYSTEM ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Customer Referral System: How to Ask (Without Sounding Desperate)
          </h2>

          <p className="text-lg leading-relaxed">
            This is where most solopreneurs fail. They ask. They ask generically. They ask too late.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The Three Timing Rules:</strong>
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>The 24-Hour Rule:</strong> Ask within 24–48 hours of delivery or the "wow" moment. The emotional high fades. The client gets distracted. Move fast.</li>
            <li><strong>The Medium Rule:</strong> Use the same channel they used to contact you. If they emailed first, email. If they texted, text. Don't suddenly call if you've been text-based. Breaking pattern = breaking trust.</li>
            <li><strong>The Context Rule:</strong> Always tie the ask to something specific they just experienced, not general capability. "You loved the results on your homepage redesign—does anyone you know have a dated website killing their credibility?" beats "Do you know anyone who needs web design?"</li>
          </ol>

          <p className="text-lg leading-relaxed mt-6">
            <strong>The Exact Scripts (Adapt to Your Industry):</strong>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">For Service Businesses (Designer, Copywriter, Coach):</p>
            <p className="text-gray-700 italic mb-4">
              "Loved seeing [specific result] come together for you. If you know another [specific business type] who's struggling with [specific problem], I've got one spot opening up next month. No pressure at all—just passing along the value if it fits."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">For Productized Services (Template, Course, Audit):</p>
            <p className="text-gray-700 italic mb-4">
              "The £299 audit you just got revealed [specific insight]. If you know someone in [niche] dealing with this same issue, here's a link to the free quick-start version. No strings—just sharing what worked for you."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">For Local/In-Person Services (Plumber, Therapist, Trainer):</p>
            <p className="text-gray-700 italic mb-4">
              "[Show photo/video of completed work] Thrilled this came out so well for you. Do you know anyone on your street or in [neighborhood] dealing with [problem]? No big ask—just thought you might know someone."
            </p>
          </div>

          <p className="text-lg leading-relaxed mt-6">
            <strong>Why These Work:</strong>
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>They make the client the hero ("You know someone else who...") instead of asking them to promote you.</li>
            <li>They name the exact problem, not the solution (they'll think of specific people immediately).</li>
            <li>They use low-pressure language ("if it fits," "no pressure," "just passing along").</li>
            <li>They require zero effort from the client—they forward a link or mention a name. That's it.</li>
          </ul>

          <p className="text-lg leading-relaxed mt-6">
            <strong>The Reward Question: Cash, Discount, or Nothing?</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Most solopreneurs offer cash (£25) or a discount (10% off). Both backfire. Cash attracts transactional clients who cheap out. Discounts teach clients they should negotiate.
          </p>

          <p className="text-lg leading-relaxed">
            Better: Offer nothing, or offer something that makes them look good to the referred person.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Option A: The "Both Win" Approach</p>
            <p className="text-gray-700 mb-2">
              "If they decide to move forward, I'll send them (and you) a £50 Amazon voucher. No obligation—just a small thanks if it clicks."
            </p>
            <p className="text-gray-600 text-sm">Why: Frames it as a gift, not a transaction. Makes the referrer look generous to their friend.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Option B: The Resource Approach</p>
            <p className="text-gray-700 mb-2">
              "If they go ahead, I'll send them (and you) a Notion template worth £99 value. But honestly, if it's a fit, that's reward enough."
            </p>
            <p className="text-gray-600 text-sm">Why: Removes cash entirely. Gives actual value they'll use.</p>
          </div>

          <p className="text-lg leading-relaxed mt-6">
            Real example: An accountant I coached was offering £20 per referral. She was attracting bargain-hunting charities willing to nickel-and-dime her. We switched to "£50 Amazon voucher if they become a client." Her referrals went down 20%, but her average client value went up 300%. Fewer referrals, but higher quality.
          </p>
        </div>

        {/* ===== SECTION 3: BUSINESS-TO-BUSINESS REFERRALS ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Business-to-Business Referrals: The Invisible Network You Already Own
          </h2>

          <p className="text-lg leading-relaxed">
            Your best partners aren't supposed competitors. They're non-competing solopreneurs who serve the same client but solve different problems.
          </p>

          <p className="text-lg leading-relaxed">
            Example: A copywriter + a web designer + a brand strategist all have the same client—a SaaS founder who needs help. They don't compete. They complement. The copywriter refers the designer. The designer refers the strategist. You all eat.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The 5-Minute Complementarity Check:</strong>
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>Google "[Your Service] + [Your City/Niche] + freelance" or "[Your Service] + [Your City] + consultant"</li>
            <li>Find 10 profiles of solopreneurs doing non-competing work with similar clients</li>
            <li>Look at their recent projects (LinkedIn, portfolio, case studies)</li>
            <li>DM cold: "Love your work on [specific project]. I help [their clients] with [your service]. No pitch—just excited to find someone else doing quality work in this space. Worth coffee?"</li>
            <li>If they respond positively, propose a "mutual referral chat" (monthly 30-minute call to share pipeline opportunities)</li>
          </ol>

          <p className="text-lg leading-relaxed mt-6">
            <strong>The Referral Structure:</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Don't wait for them to refer. You go first. Before your first referral conversation, you must have referred them at least once. This builds reciprocity without obligation.
          </p>

          <p className="text-lg leading-relaxed">
            Example script after you've referred them: "I sent you [Client Name] last month because their needs matched your offering perfectly. Since it went well, I'd love to identify pockets in my pipeline where your service shines. Want to brainstorm monthly?"
          </p>

          <p className="text-lg leading-relaxed">
            Real example: A Bristol VA owner was drowning in bookkeeping requests from clients. Instead of declining, she partnered with two local bookkeepers. Over 90 days, she referred 7 clients to them. They referred 9 back. No formal contract. Just mutual trust built through consistent reciprocity.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Critical Rule: Refer Before You Ask.</strong> The moment you position this as "let's swap referrals" (transactional), it dies. The moment you just start referring (no expectation), they naturally reciprocate within weeks.
          </p>
        </div>

        {/* ===== SECTION 4: COMMUNITY & NETWORK LEVERAGE ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Community & Network Leverage: Where Warmth Beats Width
          </h2>

          <p className="text-lg leading-relaxed">
            You don't need 10,000 LinkedIn followers. You need 10 committed local business owners or niche peers who think of you when a problem matches your expertise.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The Coffee Chat Referral Loop:</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Commit to one monthly 1:1 coffee chat (30 minutes) with two complementary solopreneurs. One rule: You must refer before asking.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The Meeting Template:</strong>
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Share a referral (10 mins):</strong> "I know a potential client for you. They need [specific problem]. Here's their contact and context."</li>
            <li><strong>Listen to their referral (10 mins):</strong> Let them share what's in their pipeline.</li>
            <li><strong>Identify collaborations (10 mins):</strong> Are there mutual clients you should introduce? Services you can bundle?</li>
          </ol>

          <p className="text-lg leading-relaxed mt-6">
            Track this in a simple Notion table:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 font-mono text-sm">
              Name | Service | Last Referral Given | Last Referral Received | Referred Clients Closed | Status
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            Review monthly. If someone receives 3 referrals from you and hasn't given anything back in 90 days, they're not a referral partner—they're a buyer list. Deprioritize.
          </p>

          <p className="text-lg leading-relaxed">
            Real example: A London strategist joined a "mastermind" group of 4 solopreneurs (designer, copywriter, developer, her). They were doing £2k–£4k/month each. After 6 months of monthly coffee chats and referrals, one of them landed a £50k client and referred pieces to all three—£8k lifted to each of them. All happening because someone said "I know someone who could help."
          </p>
        </div>

        {/* ===== SECTION 5: THE PARTNERSHIP PITCH ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Partnership Pitch: How to Approach Allies (Without the Cringe)
          </h2>

          <p className="text-lg leading-relaxed">
            This section assumes you've already nailed customer referrals and you're seeing 3–5 new clients/month. Only then do formal partnerships make sense.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The 3-Referral Rule:</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Before you pitch a formal partnership to anyone, you must have referred them at least 3 times. This proves you're invested, not extracting.
          </p>

          <p className="text-lg leading-relaxed">
            Example: A copywriter wanted to partner formally with a web designer. She didn't know him. So she spent 3 months referring his work to her network (no expectation). Once she'd referred 3 solid fits (one converted), she messaged:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 italic">
              "I've referred [Client 1], [Client 2], and [Client 3] your way over the last quarter. All three loved working with you. I'm getting requests from my network for exactly the combo of what you do + what I do. Curious if you'd ever want to explore a formal referral relationship or even joint offerings? No pressure at all."
            </p>
          </div>

          <p className="text-lg leading-relaxed mt-6">
            When you lead with proof (referrals already given), the ask stops being transactional. It becomes obvious.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>What NOT to Say:</strong>
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>❌ "Let's collaborate and leverage each other's networks" (vague, corporate)</li>
            <li>❌ "I think we could explore synergies" (jargon)</li>
            <li>❌ "I have a partnership opportunity" (sounds like a pitch)</li>
          </ul>

          <p className="text-lg leading-relaxed">
            <strong>What TO Say:</strong>
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>✅ "I've been referring your work to my clients, and it's becoming clear we complement each other. Want to talk about how we formalize this?"</li>
            <li>✅ "I've noticed my clients need both what you do and what I do. How could we bundle this better?"</li>
            <li>✅ "I trust your work enough to recommend you consistently. Let's talk about making this official."</li>
          </ul>
        </div>

        {/* ===== SECTION 6: MAKING IT WORK ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Making It Work: Tracking That Doesn't Feel Like Homework
          </h2>

          <p className="text-lg leading-relaxed">
            You don't need a CRM. You need one simple thing: Visibility into where referrals are coming from and whether your ask timing is correct.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>The Referral Trigger Tag System (Works in Stripe, FreshBooks, or Excel):</strong>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">In your invoicing tool, add a custom field: "Referral Source"</p>
            <p className="text-gray-700 mb-3">Options: "Self-Referral, Direct-Ask, Partner-Referral, Organic-Growth, Content"</p>
            <p className="text-gray-700 mb-3">When you close a new client, tag it. Review monthly:</p>
            <p className="text-gray-700 font-mono text-sm">
              January Referrals: 2 (from existing clients after delivery asks)<br/>
              February Referrals: 3<br/>
              March Referrals: 5<br/>
              <br/>
              Top referrer: Sarah M (3 referrals) → Delight this client extra hard.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            <strong>The Monthly Audit (15 minutes):</strong>
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>Look at new clients last month. How many came from referrals? (Goal: 20−40% as you scale)</li>
            <li>Which referrers were most active? Thank them publicly (social mention, small gift, next referral priority)</li>
            <li>Did any referrals fail (client wasn't a fit)? Adjust your targeting in the next ask</li>
            <li>Did you ask every client within 48 hours of wow? If not, why? (Fix the trigger if it's not hitting your target window)</li>
          </ol>

          <p className="text-lg leading-relaxed mt-6">
            <strong>The Referral Red Flag:</strong>
          </p>

          <p className="text-lg leading-relaxed">
            If less than 15% of new clients are referrals after 3 months of deliberate asks, one of these is true:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Your delivery isn't good enough to trigger referrals (go back and audit client satisfaction)</li>
            <li>Your timing is off (you're not asking in the advocacy window)</li>
            <li>Your ask is too vague (clients don't know who to refer)</li>
            <li>Your clients are low-network people (solo founder clients for solo services don't have many peers to refer)</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Real example: A LinkedIn coach thought her delivery was amazing. After 3 months, zero referrals. We audited: Her clients were job-seekers (low network), and she was asking "Do you know anyone looking for LinkedIn help?" (too broad). She pivoted to only taking corporate HR clients, refined her ask to "HR leaders who've mentioned internal mobility challenges," and got 4 referrals in the next month.
          </p>
        </div>

        {/* ===== YOUR NEXT STEP ===== */}
        <div className="prose prose-lg mx-auto mb-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Next Step: Audit Your Last 3 Projects
          </h2>

          <p className="text-lg leading-relaxed">
            Referrals aren't built on future potential. They're built on past delivery. This week:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Audit your last 3 completed projects.</strong> For each one, identify the exact moment the client said or implied "This exceeded expectations." Was it delivery day? A week later? Not at all?</li>
            <li><strong>Mark that as your advocacy window.</strong> That's when you ask next time.</li>
            <li><strong>Identify 5 ideal referral partners</strong> (non-competing solopreneurs serving the same clients). DM one this week with "I loved your work on [specific project]—no pitch, just saying you're good."</li>
            <li><strong>Set a calendar reminder</strong> "Check referral tracking spreadsheet" for next Friday. Review: How many clients came from referrals last week?</li>
          </ol>

          <p className="text-lg leading-relaxed mt-6">
            Don't wait for perfect. Just start asking systematically. Within 60 days, you'll see the pattern. Within 90 days, you'll have a repeatable system. Within 6 months, 30% of your new business will come from referrals—the warmest, highest-lifetime-value channel available.
          </p>

          <p className="text-lg leading-relaxed">
            That's not luck. That's leverage. And leverage is how solos scale without hiring.
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
            title="The Referral-First Growth System: How Solopreneurs Turn Clients into Predictable Revenue" 
          />
        </div>
      </div>
    </>
  );
}
