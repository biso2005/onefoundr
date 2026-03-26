import Link from 'next/link';

export const metadata = {
  title: 'Mid-Tier Communication: When Free Tools Start Costing You Money | OneFoundr',
  description: 'Google Workspace, Calendly Pro, Zoom Pro, Loom Pro. £47/month. Revenue impact calculations. Pays for itself when you close one extra client or save 30 minutes/week.',
  openGraph: {
    title: 'Mid-Tier Communication: When Free Tools Start Costing You Money',
    description: 'Upgrade triggers with revenue impact. ROI calculations. The real math on professionalism.',
  },
};

export default function MidTierCommunicationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/tools" className="text-blue-600 hover:underline text-sm">
            ← Back to Tools Hub
          </Link>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mid-Tier Communication: When Free Tools Start Costing You Money
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Google Workspace, Calendly Pro, Zoom Pro, Loom Pro. £47/month. Pays for itself when you keep one client or save 30 minutes/week.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-blue-900 font-semibold mb-2">
              "I lost a £3k client because Zoom cut out at 40 minutes. Upgraded to Pro (£12/month). Kept the next £3k client. That's 250x ROI. The upgrade wasn't an expense—it was insurance."
            </p>
            <p className="text-sm text-blue-800">
              This page shows you the honest triggers for upgrading, and the exact ROI math that justifies it.
            </p>
          </div>
        </section>
      </div>

      {/* THE UPGRADE TRIGGERS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">When to Upgrade from Free</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Upgrade triggers matter. Don't upgrade because you "want pro features." Upgrade when free limits cost you money. Here are the four triggers that matter:
            </p>

            <div className="space-y-8">
              {/* TRIGGER 1 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Need Custom Domain Email</h3>
                    <p className="text-gray-700 mb-4">
                      Clients notice. Gmail shows you're just starting. Custom domain (@yourdomain.com) shows you're legit.
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                      <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                      <p className="text-gray-700 mb-4">Free Gmail means yourname@gmail.com. Looks amateur for £3k+ clients.</p>
                      <p className="font-bold text-gray-900 mb-2">The Trigger:</p>
                      <p className="text-gray-700">You have 5+ clients asking "do you have a business email?"</p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Free Route:</p>
                        <p className="text-gray-700 text-sm">Gmail + domain = £10/year</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Upgrade:</p>
                        <p className="text-gray-700 text-sm">Google Workspace = £6/month</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
                      <p className="text-yellow-800">If clients ask "do you have a business email?", upgrade.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRIGGER 2 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Need Multiple Event Types</h3>
                    <p className="text-gray-700 mb-4">
                      Calendly free = 1 event type. When you have discovery calls, project kickoffs, and check-ins, you need to differentiate.
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                      <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                      <p className="text-gray-700 mb-4">You're sending different Calendly links for different call types, or manually scheduling some calls.</p>
                      <p className="font-bold text-gray-900 mb-2">The Trigger:</p>
                      <p className="text-gray-700">You're scheduling 10+ calls/week or juggling multiple links.</p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Free Limit:</p>
                        <p className="text-gray-700 text-sm">1 event type (all calls same)</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Upgrade:</p>
                        <p className="text-gray-700 text-sm">Calendly Pro = £8/month</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
                      <p className="text-yellow-800">If you're manually sending "here's the link for X, here's for Y", upgrade.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRIGGER 3 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Need Calls Longer Than 40 Minutes</h3>
                    <p className="text-gray-700 mb-4">
                      Zoom free = 40-minute limit on group calls. This kills longer discovery calls and project planning sessions.
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                      <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                      <p className="text-gray-700 mb-4">A call cuts off. Client is frustrated. You lose credibility.</p>
                      <p className="font-bold text-gray-900 mb-2">The Trigger:</p>
                      <p className="text-gray-700">A call has cut off once, or you're scheduling 60-min calls regularly.</p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Free Limit:</p>
                        <p className="text-gray-700 text-sm">40 min on group calls</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Upgrade:</p>
                        <p className="text-gray-700 text-sm">Zoom Pro = £12/month</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
                      <p className="text-yellow-800">If a 40-min limit costs you one £3k client, it cost you more than a year of Zoom.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRIGGER 4 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're Recording 5+ Videos Per Week</h3>
                    <p className="text-gray-700 mb-4">
                      Loom free = 25 videos/month. That's under 7 per week. When you're highly engaged with async communication, you hit the limit.
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                      <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                      <p className="text-gray-700 mb-4">You can't record more videos. Client communication slows down.</p>
                      <p className="font-bold text-gray-900 mb-2">The Trigger:</p>
                      <p className="text-gray-700">You're hitting 25-video limit or wanting to record longer videos.</p>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Free Limit:</p>
                        <p className="text-gray-700 text-sm">25 videos, 5 min each</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm mb-1">Upgrade:</p>
                        <p className="text-gray-700 text-sm">Loom Pro = £10/month</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
                      <p className="text-yellow-800">If you're hitting 25 videos, you're sending enough to justify £10.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: Upgrade Because "I Want Pro Features"</p>
            <p className="text-red-800">
              I upgraded to Calendly Pro because "I want advanced features." Used the multiple event types once. Used reminders twice. Then cancelled. Wasted £8/month for 6 months. That's £48 I didn't have an ROI for.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: Upgrade Because Free Cost a Client</p>
            <p className="text-green-800">
              I lost a £3k project because a Zoom call cut off at 40 minutes mid-proposal. Upgraded to Zoom Pro (£12/month) the next day. Booked the next £3k client 2 weeks later with a 75-minute call. ROI: 6,300%.
            </p>
          </div>
        </div>
      </div>

      {/* THE MID-TIER STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Get for £47/Month</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8">
            The mid-tier stack is designed for people doing £5k-50k/month revenue. You've outgrown free limits, but you don't need enterprise tools yet.
          </p>
        </div>

        {/* GOOGLE WORKSPACE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Google Workspace</h3>
            <div className="text-xl font-bold text-blue-600">£6/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Custom email: yourname@yourdomain.com</li>
                <li>— 30GB storage (enough for 3+ years of emails)</li>
                <li>— Shared calendar (for future team members)</li>
                <li>— Unlimited Google Docs/Sheets</li>
                <li>— Team Drive (organize everything)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (10 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to workspace.google.com</li>
                <li>2. Sign up with your domain (or connect existing)</li>
                <li>3. Create your business admin account</li>
                <li>4. Add email signature with Calendly link</li>
                <li>5. Enable two-factor authentication</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Google Workspace:</p>
            <p className="text-yellow-800">When clients ask about your business email or when you want shared calendars.</p>
          </div>
        </div>

        {/* CALENDLY PRO */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Calendly Pro</h3>
            <div className="text-xl font-bold text-blue-600">£8/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited event types (sales, kickoff, check-in, etc.)</li>
                <li>— SMS reminders (not just email)</li>
                <li>— 15-minute buffers (before and after calls)</li>
                <li>— Custom questions (ask client needs upfront)</li>
                <li>— Workflows (automate follow-ups)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to calendly.com</li>
                <li>2. Click "Upgrade" on your account</li>
                <li>3. Select "Pro" plan</li>
                <li>4. Create 3 event types: "Discovery Call" (30min), "Kickoff" (60min), "Check-in" (20min)</li>
                <li>5. Add custom question: "What's your main challenge?"</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Calendly Pro:</p>
            <p className="text-yellow-800">When you're scheduling 10+ calls/week and need to differentiate by type.</p>
          </div>
        </div>

        {/* ZOOM PRO */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Zoom Pro</h3>
            <div className="text-xl font-bold text-blue-600">£12/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited time on all calls (no 40-min cutoff)</li>
                <li>— Cloud recording (auto-saves to Zoom storage)</li>
                <li>— Webinar mode (host 100+ participants)</li>
                <li>— Meeting reporting (see who attended, duration)</li>
                <li>— Virtual backgrounds (look professional from anywhere)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to zoom.us</li>
                <li>2. Sign in to your account</li>
                <li>3. Click "Upgrade" on your account</li>
                <li>4. Select "Pro" plan</li>
                <li>5. Enable cloud recording in settings</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Zoom Pro:</p>
            <p className="text-yellow-800">When you've had a 40-minute call cut off, or when you regularly schedule 1-hour+ calls.</p>
          </div>
        </div>

        {/* LOOM PRO */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Loom Pro</h3>
            <div className="text-xl font-bold text-blue-600">£10/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited videos (no 25-video limit)</li>
                <li>— No time limit (record 1-hour+ videos)</li>
                <li>— Video analytics (see who watched, for how long)</li>
                <li>— Team workspace (share recordings with clients)</li>
                <li>— Custom branding (personalize video player)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (5 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to loom.com</li>
                <li>2. Sign in to your account</li>
                <li>3. Click "Upgrade" in the top menu</li>
                <li>4. Select "Pro" plan</li>
                <li>5. Record a test video and check analytics</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Loom Pro:</p>
            <p className="text-yellow-800">When you're recording 5+ videos/week or need to record videos longer than 5 minutes.</p>
          </div>
        </div>

        {/* TOTAL */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-blue-900 mb-2">Total Monthly Cost:</p>
              <p className="text-gray-700">Google Workspace (£6) + Calendly Pro (£8) + Zoom Pro (£12) + Loom Pro (£10)</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-blue-900 mb-2">Total:</p>
              <p className="text-3xl font-bold text-blue-600">£47/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI CALCULATION */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Is £47/Month Worth It?</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8">
              The question isn't "do I want pro features?" The question is "will this help me make more money or save time?" Here are three scenarios:
            </p>

            {/* SCENARIO 1 */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-4">Scenario 1: You Keep One More Client</p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>Client value:</span>
                    <span className="font-bold">£3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly tool cost:</span>
                    <span className="font-bold">£47</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-green-900">6,300%</span>
                  </div>
                </div>
                <p className="text-sm text-green-800">
                  If a Zoom call that cut off would have cost you a £3k client, paying £47 to prevent that is a no-brainer.
                </p>
              </div>

              {/* SCENARIO 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <p className="font-bold text-blue-900 mb-4">Scenario 2: You Save 30 Minutes Per Week</p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>Your hourly rate:</span>
                    <span className="font-bold">£100/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time saved per week:</span>
                    <span className="font-bold">30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time saved per month:</span>
                    <span className="font-bold">2 hours (£200)</span>
                  </div>
                  <div className="border-t border-blue-300 pt-3 flex justify-between">
                    <span className="font-bold">Tool cost:</span>
                    <span className="font-bold">£47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Net profit per month:</span>
                    <span className="font-bold text-blue-900">£153</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-blue-900">325%</span>
                  </div>
                </div>
                <p className="text-sm text-blue-800">
                  Multiple event types in Calendly saves you from manually scheduling. SMS reminders in Calendly save you follow-up emails.
                </p>
              </div>

              {/* SCENARIO 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                <p className="font-bold text-purple-900 mb-4">Scenario 3: You Win One More Lead Due to Professionalism</p>
                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>Perceived value boost with custom email:</span>
                    <span className="font-bold">+20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your typical client value:</span>
                    <span className="font-bold">£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional client per year from professionalism:</span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annualized client value:</span>
                    <span className="font-bold">£500</span>
                  </div>
                  <div className="border-t border-purple-300 pt-3 flex justify-between">
                    <span className="font-bold">Annual tool cost:</span>
                    <span className="font-bold">£564</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-purple-900">89%</span>
                  </div>
                </div>
                <p className="text-sm text-purple-800">
                  This is conservative. Many people find business email dramatically improves client perception.
                </p>
              </div>
            </div>
          </div>

          {/* BREAK-EVEN ANALYSIS */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Break-Even Analysis</h3>
            <p className="text-gray-700 mb-6">
              How much do you need to benefit to justify £47/month?
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">You need ONE of these to be true:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>— Save 30 minutes/month at £100/hour (£50/month value)</li>
                  <li>— Keep 1 client that free limits would cost you</li>
                  <li>— Win 1 additional client per year due to professionalism</li>
                  <li>— Reduce call-related issues by 50% (fewer reschedules)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-8">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If ANY of these are true, upgrade. If NONE are true, stay free.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mt-4">
              <p className="text-sm font-bold text-red-900">Critical Rule:</p>
              <p className="text-red-800">If you can't measure the ROI, don't upgrade. You're paying for features you don't need.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 25-MINUTE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">25-Minute Upgrade Walkthrough</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8">
            Upgrade all 4 tools in 25 minutes. Total cost: £47/month. No hidden fees or surprises.
          </p>

          <div className="space-y-8">
            {/* STEP 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
                <h3 className="text-xl font-bold text-gray-900">Google Workspace (10 minutes)</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                <ol className="space-y-2 text-gray-700">
                  <li>1. Go to workspace.google.com</li>
                  <li>2. Click "Start Free Trial" (then upgrade to paid after 14 days)</li>
                  <li>3. Choose your domain (£10/year from Google Domains or connect existing)</li>
                  <li>4. Enter your name and business name</li>
                  <li>5. Create your admin account (yourname@yourdomain.com)</li>
                  <li>6. Add password</li>
                  <li>7. Verify domain ownership</li>
                  <li>8. Go to Gmail settings and update your signature with Calendly link</li>
                </ol>
              </div>
            </div>

            {/* STEP 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
                <h3 className="text-xl font-bold text-gray-900">Calendly Pro (5 minutes)</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                <ol className="space-y-2 text-gray-700">
                  <li>1. Go to calendly.com and sign in</li>
                  <li>2. Click your profile icon → "Settings"</li>
                  <li>3. Click "Upgrade" → Choose "Pro" (£8/month)</li>
                  <li>4. Enter payment method</li>
                  <li>5. Go to "Event Types" and click "Add Event Type"</li>
                  <li>6. Create "Discovery Call" (30 min, title: "Sales Call")</li>
                  <li>7. Create "Project Kickoff" (60 min)</li>
                  <li>8. Create "Check-in" (20 min)</li>
                </ol>
              </div>
            </div>

            {/* STEP 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
                <h3 className="text-xl font-bold text-gray-900">Zoom Pro (5 minutes)</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                <ol className="space-y-2 text-gray-700">
                  <li>1. Go to zoom.us and sign in</li>
                  <li>2. Click your profile icon → "My Account"</li>
                  <li>3. Click "Plan" tab</li>
                  <li>4. Click "Upgrade" next to your current plan</li>
                  <li>5. Choose "Pro" (£12/month based on your region)</li>
                  <li>6. Enter payment method</li>
                  <li>7. Go to "Settings" → "Recording" → Enable "Cloud Recording"</li>
                </ol>
              </div>
            </div>

            {/* STEP 4 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
                <h3 className="text-xl font-bold text-gray-900">Loom Pro (5 minutes)</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 ml-10">
                <ol className="space-y-2 text-gray-700">
                  <li>1. Go to loom.com and sign in</li>
                  <li>2. Click your profile icon → "Settings"</li>
                  <li>3. Click "Plans" tab</li>
                  <li>4. Click "Upgrade to Pro" (£10/month)</li>
                  <li>5. Enter payment method</li>
                  <li>6. Record a test video to verify everything works</li>
                  <li>7. Check if video analytics are working</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-12">
            <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
            <p className="text-yellow-800">If setup takes more than 25 minutes, you're over-thinking it. Pay, connect, go.</p>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Use Mid-Tier Tools</h2>

          {/* WORKFLOW 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Lead to Paid Client (Pro)</h3>
            <p className="text-gray-700 mb-6">Full journey from DM to booked kickoff using pro tools.</p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4 font-mono text-sm">
                <p><strong>Step 1: Lead messages you</strong></p>
                <p className="ml-4 text-gray-700">"Hi, interested in working with you. When can we talk?"</p>
                <p className="mt-4"><strong>Step 2: You reply (Google Workspace email)</strong></p>
                <p className="ml-4 text-gray-700">"Thanks for reaching out! Here's my calendar: [Calendly link for Sales Call]"</p>
                <p className="mt-4"><strong>Step 3: They book "Sales Call" (Calendly Pro)</strong></p>
                <p className="ml-4 text-gray-700">Automatically syncs to your Google Calendar. SMS reminder sent 24h before.</p>
                <p className="mt-4"><strong>Step 4: Call happens on Zoom Pro</strong></p>
                <p className="ml-4 text-gray-700">60+ minutes if needed. Cloud recording auto-saves. No cutoff.</p>
                <p className="mt-4"><strong>Step 5: They want to move forward</strong></p>
                <p className="ml-4 text-gray-700">"Great! Here's my next available slot: [Calendly link for Project Kickoff]"</p>
                <p className="mt-4"><strong>Step 6: You send proposal via Loom Pro video</strong></p>
                <p className="ml-4 text-gray-700">Record 15-min video explaining scope/timeline/investment. You see analytics: they watched 14:55.</p>
                <p className="mt-4"><strong>Step 7: They book kickoff call (Calendly Pro)</strong></p>
                <p className="ml-4 text-gray-700">Project begins.</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Time Breakdown:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Read message: 1 minute</li>
                <li>— Reply: 1 minute (template)</li>
                <li>— Sales call: 45 minutes</li>
                <li>— Record proposal: 20 minutes</li>
                <li>— Send proposal: 2 minutes</li>
                <li>Total active time: 69 minutes (spread over 1 week)</li>
              </ul>
            </div>
          </div>

          {/* WORKFLOW 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Project Delivery Using Pro Tools</h3>
            <p className="text-gray-700 mb-6">From kickoff to completion with async communication via Loom.</p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4 font-mono text-sm">
                <p><strong>Step 1: Kickoff call (Zoom Pro)</strong></p>
                <p className="ml-4 text-gray-700">60-min call to align on scope. Cloud recording saves automatically.</p>
                <p className="mt-4"><strong>Step 2: Day 1 - Send status video (Loom Pro)</strong></p>
                <p className="ml-4 text-gray-700">"Started on your project. Here's what I'm working on [5-min Loom]." You see: viewed 4:32.</p>
                <p className="mt-4"><strong>Step 3: Day 3 - Send first draft review video</strong></p>
                <p className="ml-4 text-gray-700">"Here's draft 1. Questions? Book a check-in: [Calendly link for Check-in]"</p>
                <p className="mt-4"><strong>Step 4: They book Check-in (Calendly Pro)</strong></p>
                <p className="ml-4 text-gray-700">20-min call to discuss feedback. SMS reminder sent.</p>
                <p className="mt-4"><strong>Step 5: You iterate</strong></p>
                <p className="ml-4 text-gray-700">Send updated version via Loom video showing changes.</p>
                <p className="mt-4"><strong>Step 6: Client approves</strong></p>
                <p className="ml-4 text-gray-700">"Perfect! Ready to deliver."</p>
                <p className="mt-4"><strong>Step 7: Send invoice (Google Workspace)</strong></p>
                <p className="ml-4 text-gray-700">"Project complete. Invoice attached. Due [date]."</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Time Breakdown (5-day project):</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Kickoff call: 60 minutes</li>
                <li>— Status videos (2): 20 minutes</li>
                <li>— Check-in call: 20 minutes</li>
                <li>— Iteration and delivery: 40 minutes</li>
                <li>— Invoice: 5 minutes</li>
                <li>Total: 145 minutes (admin time, not including actual work)</li>
              </ul>
            </div>
          </div>

          {/* WORKFLOW 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Hybrid (When You Hire)</h3>
            <p className="text-gray-700 mb-6">Using pro tools to scale with a team member (future).</p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4 font-mono text-sm">
                <p><strong>Step 1: You add VA to Google Workspace</strong></p>
                <p className="ml-4 text-gray-700">Give them access to shared Google Drive for projects.</p>
                <p className="mt-4"><strong>Step 2: You add VA to Calendly Pro</strong></p>
                <p className="ml-4 text-gray-700">VA can see all bookings and send reminders.</p>
                <p className="mt-4"><strong>Step 3: You add VA to Loom Pro</strong></p>
                <p className="ml-4 text-gray-700">VA can access team workspace to see all recorded communications.</p>
                <p className="mt-4"><strong>Step 4: Delegate scheduling</strong></p>
                <p className="ml-4 text-gray-700">VA answers emails, schedules calls, sends calendar links.</p>
                <p className="mt-4"><strong>Step 5: You focus on client work</strong></p>
                <p className="ml-4 text-gray-700">VA handles admin. You deliver.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">These tools are built for growth. You don't need a VA now, but when you do, they'll scale perfectly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Upgrade Decisions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good Upgrade ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Trigger:</strong> Lost £3k client due to Zoom cutoff</p>
                <p><strong>Upgrade decision:</strong> £47/month mid-tier</p>
                <p><strong>Result:</strong> Kept next £3k client with 75-min call</p>
                <p><strong>ROI:</strong> 6,300% ($3,000 saved / £47/month costs)</p>
                <p><strong>Outcome:</strong> Paid for a year of upgrades on one project</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad Upgrade ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Trigger:</strong> "I want professional tools"</p>
                <p><strong>Upgrade decision:</strong> £47/month mid-tier</p>
                <p><strong>Result:</strong> Used Calendly once, forgot Zoom Pro feature existed</p>
                <p><strong>ROI:</strong> -100% (no measurable benefit)</p>
                <p><strong>Cost:</strong> £470/year for nothing</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-4">The Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              Upgrade when free costs you money. Not when you want shiny features. If you can't track the ROI, you're wasting £47.
            </p>
          </div>
        </div>
      </div>

      {/* UPGRADE DECISION FRAMEWORK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Should You Upgrade? Answer These 5 Questions</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="space-y-6">
            {/* Question 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Question 1: Have you hit a free tool limit?</h3>
              <p className="text-gray-700 mb-4">Not "could you hit one" — have you actually hit one?</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-3">
                <p className="text-sm text-gray-700 mb-2"><strong>Examples of "yes":</strong></p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>— A Zoom call cut off mid-call</li>
                  <li>— You've recorded 25+ Loom videos this month</li>
                  <li>— A client said "do you have a business email?"</li>
                  <li>— You're scheduling 10+ calls weekly</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600"><strong>If you answered "no":</strong> Stop here. Upgrade later. You're not ready.</p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Question 2: Did it cost you money?</h3>
              <p className="text-gray-700 mb-4">Did that limit result in a lost client, lost time, or lost opportunity?</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-3">
                <p className="text-sm text-gray-700 mb-2"><strong>Examples of "yes":</strong></p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>— A £3k client disappeared after a Zoom cutoff</li>
                  <li>— You're manually scheduling calls instead of using Calendly</li>
                  <li>— You can't record all the videos you want in Loom</li>
                  <li>— A prospect asked about your "professional email"</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600"><strong>If you answered "no":</strong> The free tools are working. Don't upgrade.</p>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Question 3: Can you calculate the ROI?</h3>
              <p className="text-gray-700 mb-4">Can you actually measure the benefit? If not, you're guessing.</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-3">
                <p className="text-sm text-gray-700 mb-2"><strong>Examples of "yes":</strong></p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>— Lost a £3k client to Zoom. Pro would have prevented it = 6,300% ROI</li>
                  <li>— Save 30 min/week at £100/hour = £200/month benefit on £47 cost = 325% ROI</li>
                  <li>— Google Workspace makes you look professional, potentially worth 1 extra client/year</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600"><strong>If you answered "no":</strong> You can't justify the expense. Stay free.</p>
            </div>

            {/* Question 4 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Question 4: Is the ROI positive?</h3>
              <p className="text-gray-700 mb-4">Does the benefit outweigh £47/month?</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-3">
                <p className="text-sm text-gray-700 mb-2"><strong>Minimum thresholds:</strong></p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>— Saves you 20+ minutes/month at your hourly rate</li>
                  <li>— Prevents 1 lost client per year</li>
                  <li>— Gains you 1 additional client per year due to professionalism</li>
                  <li>— Eliminates a single costly incident (demo cutoff, etc.)</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600"><strong>If you answered "no":</strong> The math doesn't work yet. Wait.</p>
            </div>

            {/* Question 5 */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Question 5: Will you actually use it?</h3>
              <p className="text-gray-700 mb-4">Be honest. This is where most upgrades fail.</p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-3">
                <p className="text-sm text-gray-700 mb-2"><strong>Red flags:</strong></p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>— You're not sure what the upgrade does</li>
                  <li>— You're upgrading "just to have it"</li>
                  <li>— You haven't used the free version in a month</li>
                  <li>— You can't name 3 features you'll actually use</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600"><strong>If you answered "no" to this:</strong> You'll cancel in 2 months. Don't waste the money.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="text-lg font-bold text-green-900 mb-2">✓ All 5 questions = "yes"?</p>
            <p className="text-green-800">Upgrade now. You're ready. Spend 25 minutes setting it up this week.</p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Upgrade?</h2>
          <p className="text-lg opacity-90 mb-8">
            Here's your 25-minute setup:
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Answer the 5 questions above honestly</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Pick ONE tool to upgrade first (whichever limits you most)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Sign up and set it up using the guides in this page</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Track the result. Did it help?</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            If you get results, add the next tool. If not, downgrade and save the money.
          </p>

          <div className="bg-blue-700 rounded-lg p-6 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Track Your Upgrade ROI</p>
            <p className="text-sm opacity-90">After 30 days, score how many times each upgrade prevented a problem or saved time.</p>
          </div>
        </div>
      </div>

      {/* PROFESSIONAL EMAIL SCRIPTS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Email Scripts: How to Communicate Your Upgrade</h2>

          <p className="text-gray-700 text-lg mb-8">
            When you upgrade to mid-tier tools, your communication changes. Here are professional email templates you can use.
          </p>

          {/* Script 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Script 1: For New Prospects (Business Email)</h3>
            <p className="text-gray-600 mb-4">Send this when introducing yourself:</p>
            <div className="bg-blue-50 p-6 rounded border border-blue-200 font-mono text-sm mb-4 text-gray-800 whitespace-pre-wrap">
{`Subject: Quick question about working together

Hi [Name],

Thanks for reaching out. I'd love to chat about [topic].

I usually start with a quick discovery call. Here's my calendar link: [Calendly link]

Pick whatever time works best. I have 30-min, 60-min, or a quick 20-min slot depending on what you prefer.

Looking forward to it.

[Your Name]
[your@yourdomain.com]
[Your Website]`}
            </div>
            <p className="text-gray-700 text-sm mb-4"><strong>Why this works:</strong> Custom email domain signals professionalism. Multiple calendar types show you're organized. Calendly link removes the back-and-forth.</p>
          </div>

          {/* Script 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Script 2: For Delivery Updates (Using Recorded Videos)</h3>
            <p className="text-gray-600 mb-4">Send this to clients when you're providing feedback or updates:</p>
            <div className="bg-blue-50 p-6 rounded border border-blue-200 font-mono text-sm mb-4 text-gray-800 whitespace-pre-wrap">
{`Subject: Quick feedback on [project/deliverable]

Hi [Name],

I recorded a 5-minute walkthrough of my thoughts on [what they're asking about]. It's easier than typing it all out.

Watch it here: [Loom link]

Let me know if you have questions—I can hop on a call or send another video.

[Your Name]`}
            </div>
            <p className="text-gray-700 text-sm mb-4"><strong>Why this works:</strong> Loom videos feel personal and save you typing time. Clients perceive this as higher-touch service. It's much faster than a 30-min call for simple feedback.</p>
          </div>

          {/* Script 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Script 3: For Scheduling (Multiple Options)</h3>
            <p className="text-gray-600 mb-4">Send this after a discovery call to schedule next steps:</p>
            <div className="bg-blue-50 p-6 rounded border border-blue-200 font-mono text-sm mb-4 text-gray-800 whitespace-pre-wrap">
{`Subject: Next Steps—Project Kickoff

Hi [Name],

Thanks for the great call today. I'm excited about working on [project].

For next week, let's do a project kickoff (60 minutes). Here's my calendar:

[Calendly link for "Project Kickoff" event]

This gives us time to dive deep into your goals and make sure we're aligned.

Talk soon,
[Your Name]`}
            </div>
            <p className="text-gray-700 text-sm mb-4"><strong>Why this works:</strong> Multiple event types in Calendly mean you're not sending confusing "pick any time" links. You're sending specific, labeled event types. That feels organized.</p>
          </div>

          {/* Script 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Script 4: For Rescheduling (Professional Transparency)</h3>
            <p className="text-gray-600 mb-4">When you need to reschedule or a client needs to:</p>
            <div className="bg-blue-50 p-6 rounded border border-blue-200 font-mono text-sm mb-4 text-gray-800 whitespace-pre-wrap">
{`Subject: Let's reschedule our call

Hi [Name],

Something came up on my end, and I want to give you my full attention on this call. Would you rather reschedule to [day/date] or [alternative day/date]?

Here's my calendar if neither of those work: [Calendly link]

Sorry for the inconvenience—I know your time is valuable.

[Your Name]`}
            </div>
            <p className="text-gray-700 text-sm mb-4"><strong>Why this works:</strong> You're not just canceling—you're showing respect for their time. Offering specific dates + a Calendly link feels professional. Clients appreciate this vs. "let me know what works."</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-sm font-bold text-yellow-900 mb-2">Pro Tip: Before Sending</p>
            <p className="text-yellow-800 text-sm">
              All emails should be sent from your custom domain email (yourname@yourdomain.com). This single change signals professionalism more than anything else.
            </p>
          </div>
        </div>
      </div>

      {/* RELATED & WARNINGS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/communication-scheduling/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Free Tier</h3>
              <p className="text-gray-600 text-sm">Start here. Everything you need at £0/month.</p>
            </div>
          </Link>

          <Link href="/tools/communication-scheduling/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pro Tier (Coming)</h3>
              <p className="text-gray-600 text-sm">When you're doing £50k+/month (enterprise tools).</p>
            </div>
          </Link>

          <Link href="/systems/client-management">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Client Management</h3>
              <p className="text-gray-600 text-sm">Track clients in a spreadsheet. These tools connect to that system.</p>
            </div>
          </Link>

          <Link href="/sales/getting-clients">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Getting Clients</h3>
              <p className="text-gray-600 text-sm">These tools help you manage the leads you're generating.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Upgrade For Status</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade because you "want to look professional."</strong> You already look professional with free tools.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade because competitors use paid tools.</strong> Competitors are probably wasting £47/month too.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade if you haven't hit a limit.</strong> You'll use 2 features and cancel.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade if you can't measure the ROI.</strong> You're throwing money away.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade all at once if unsure.</strong> Pick the ONE tool that limits you most. Upgrade that first.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: Staggered Upgrade Strategy</h3>
          <p className="text-gray-700 mb-3">
            Don't upgrade all 4 tools at once. Upgrade one at a time based on what's limiting you:
          </p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>— Week 1: Upgrade Google Workspace only (£6/month) if clients ask about email</li>
            <li>— Week 2: Add Calendly Pro (£8/month) if you're scheduling 10+ calls/week</li>
            <li>— Week 3: Add Zoom Pro (£12/month) if a 40-min limit cost you a client</li>
            <li>— Week 4: Add Loom Pro (£10/month) if you're recording 5+ videos/week</li>
          </ul>
          <p className="text-gray-700 mt-4">
            This way, you only pay for what you actually need.
          </p>
        </div>
      </div>
    </main>
  );
}
