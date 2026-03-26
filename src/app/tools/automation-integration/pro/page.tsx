'use client';

import Link from 'next/link';

export default function ProAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Pro Automation: £50+ tier</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Advanced Workflows for Scaling Solos
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Zapier Professional, Make Team, webhooks. £80–100/month. Enables services you couldn't offer before.
          </p>
          <div className="bg-white rounded-xl border border-purple-200 p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-3">The Real Story:</p>
            <p className="text-gray-700 leading-relaxed">
              "I wanted to offer a 'lead nurture service' to clients but couldn't automate it with my current setup. Upgraded to Zapier Professional (£50/month). Built an advanced conditional workflow. Added £5k/month revenue stream. That's not 100x ROI on time saved—it's 100x ROI on capability. I enabled a service that didn't exist before."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition">
              Start Pro Setup
            </button>
            <Link href="/tools/automation-integration/mid-tier">
              <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition">
                Back to Mid-Tier
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pro Triggers Section */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            When to Upgrade from Mid-Tier
          </h2>

          {/* Trigger 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trigger 1: You Need Webhooks</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Mid-Tier Problem</p>
                <p>Can't receive custom data from apps. Mid-tier Zapier Starter only connects to pre-built integrations. If your app isn't in Zapier's library, you're stuck.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cost of Not Upgrading</p>
                <p>Can't build custom integrations. Revenue impact: £3,000/month lost (you can't offer integration services to clients).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Upgrade</p>
                <p>Zapier Professional (£50/month) unlocks webhooks. You can now receive POST requests from any custom system, parse the data, and send it anywhere.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">ROI Calculation</p>
                <p>£3,000 (monthly revenue from webhooks service) ÷ £600 (annual cost) = <span className="font-bold text-purple-600">5x ROI</span></p>
              </div>
            </div>
          </div>

          {/* Trigger 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trigger 2: You Need Conditional Logic</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Mid-Tier Problem</p>
                <p>Workflows are linear. Mid-tier automation flows straight through. If you need to branch (IF X, do A; IF Y, do B), you can't do it. You need multiple Zaps, which is confusing and expensive.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cost of Not Upgrading</p>
                <p>Can't build smart automations. You spend 5 hours/week doing conditional logic manually. Revenue impact: £500/week = £2,000/month lost.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Upgrade</p>
                <p>Zapier Professional includes Paths (IF/THEN logic), Filters, and branching. One Zap can handle 100 different conditions.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">ROI Calculation</p>
                <p>£2,000 (monthly time value saved) ÷ £50 (monthly Pro cost) = <span className="font-bold text-purple-600">40x ROI</span></p>
              </div>
            </div>
          </div>

          {/* Trigger 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trigger 3: You Need Team Automation</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Mid-Tier Problem</p>
                <p>Mid-tier Zapier Starter is single-user only. You can't share Zaps with contractors or VAs. All automation runs on your account.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cost of Not Upgrading</p>
                <p>Can't delegate automation. You do all automation work. Revenue impact: 10 hours/week = £1,000/week = £4,000/month lost.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Upgrade</p>
                <p>Make Team (£30/month) lets you share scenarios with contractors. You set permissions, review changes, and manage team automations centrally.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">ROI Calculation</p>
                <p>£1,000 (weekly time saved) ÷ £30 (monthly team cost) = <span className="font-bold text-purple-600">33x ROI</span></p>
              </div>
            </div>
          </div>

          {/* Trigger 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trigger 4: You Need Custom Integrations</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Mid-Tier Problem</p>
                <p>Mid-tier only uses pre-built apps. Client says "Can you connect our custom accounting system to Stripe?" Mid-tier can't do it. Deal lost.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cost of Not Upgrading</p>
                <p>Can't offer custom solutions. Revenue impact: £5,000 integration deal lost (happens 1-2 times/year for growth consultants).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Upgrade</p>
                <p>Zapier Professional + webhooks + HTTP modules. You can now connect any API to any system. Build custom integrations clients pay premium for.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">ROI Calculation</p>
                <p>£5,000 (custom integration deal) ÷ £600 (annual cost) = <span className="font-bold text-purple-600">8.3x ROI</span></p>
              </div>
            </div>
          </div>

          {/* Solo Rule */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">The Solo Rule for Pro Automation</p>
            <p className="text-gray-700">
              "If you need webhooks, conditional logic, team sharing, or custom integrations, upgrade to Pro. If not, stay mid-tier." There's no shame in mid-tier. Most solopreneurs should stay there.
            </p>
          </div>
        </div>
      </div>

      {/* The Pro Stack Section */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            The Pro Stack: £80–100/Month
          </h2>

          {/* Zapier Professional */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Zapier Professional: £50/Month</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Unlimited Zaps, webhooks, Paths (conditional logic), Filters, delays, format text, and premium support. This is the tier where Zapier becomes a workflow engine.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Advanced Features Unlocked</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Webhooks (receive POST requests)</li>
                  <li>✓ Paths (IF/THEN branching)</li>
                  <li>✓ Filters (advanced filtering)</li>
                  <li>✓ Delays (schedule actions)</li>
                  <li>✓ Format Text (regex, JSON)</li>
                  <li>✓ Premium Support (priority queue)</li>
                  <li>✓ Unlimited Zaps</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Who Needs It</p>
                <p className="text-gray-700 mb-6">
                  Anyone building custom integrations, advanced workflows, or offering automation services to clients.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Revenue Impact</p>
                <p className="text-gray-700 mb-6">
                  Enables new services (custom integrations, automation consulting). Typically £3k–5k/month revenue uplift.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Setup Time</p>
                <p className="text-gray-700">30 minutes per advanced Zap (learning curve: Advanced)</p>
              </div>
            </div>
          </div>

          {/* Make Team */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Make Team: £30/Month</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Unlimited scenarios, team member sharing, role-based permissions, and team collaboration features. Move automation from your account to a team account.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Team Features Unlocked</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Unlimited Scenarios</li>
                  <li>✓ Share with Team Members</li>
                  <li>✓ Role-Based Permissions</li>
                  <li>✓ Team Folders</li>
                  <li>✓ 10,000 Operations/Month</li>
                  <li>✓ Team Dashboard</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Who Needs It</p>
                <p className="text-gray-700 mb-6">
                  Anyone with contractors or VAs doing automation work. Want to delegate but stay in control.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Revenue Impact</p>
                <p className="text-gray-700 mb-6">
                  Delegates automation work. 10 hours/week saved (usually £2,000/month value).
                </p>
                <p className="font-semibold text-gray-900 mb-3">Setup Time</p>
                <p className="text-gray-700">20 minutes (learning curve: Moderate)</p>
              </div>
            </div>
          </div>

          {/* Webhooks Deep Dive */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Webhooks: The Game Changer</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What Webhooks Do</p>
                <p className="text-gray-700">
                  A webhook lets any app send data to Zapier automatically. When event X happens in app A, send data to Zapier. Zapier processes it, transforms it, and sends it to app B.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Simple Webhook Example</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm text-gray-700 mb-4">
                  <p className="mb-2">Client's custom form submits → POST to Zapier webhook</p>
                  <p className="mb-2">Zapier receives data → Transforms format</p>
                  <p>Zapier sends to your CRM → Lead created</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Revenue Impact</p>
                <p className="text-gray-700">
                  Webhooks let you build integrations clients can't get anywhere else. You become the integration specialist. That's worth £3k–5k/month.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Cost/Benefit</p>
                <p className="text-gray-700">
                  Zapier Professional (£50/month) + Make Team (£30/month) = £80/month. For building custom integrations on demand, this ROI is unstoppable.
                </p>
              </div>
            </div>
          </div>

          {/* Pro Stack Summary */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-300 p-8">
            <p className="text-2xl font-bold text-gray-900 mb-6">Pro Stack Summary</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Total Monthly Cost</p>
                <p className="text-3xl font-black text-purple-600">£80</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Total Setup Time</p>
                <p className="text-3xl font-black text-purple-600">60 Minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Learning Curve</p>
                <p className="text-lg font-bold text-gray-900">Advanced<br />(Zapier Pro),<br />Moderate<br />(Make Team)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced ROI Calculation */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            The Real Math: Is Pro Worth It?
          </h2>

          {/* Scenario 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario 1: You Enable a New Service</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Service:</span> Lead nurture automation (webhooks + conditional workflows)</p>
              <p><span className="font-semibold">Price:</span> £3,000 setup + £500/month recurring</p>
              <p><span className="font-semibold">Clients:</span> 2/month</p>
              <p><span className="font-semibold">First Month Revenue:</span> £3,000 setup + £1,000/month (2 clients at £500 each) = £4,000</p>
              <p><span className="font-semibold">Annual Revenue:</span> £6,000 setup (2 clients) + £12,000 recurring = £18,000</p>
              <p><span className="font-semibold">Tool Cost (Annual):</span> £960 (£80/month)</p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <p className="font-bold text-gray-900">ROI: £4,000 (first month) ÷ £80 (first month cost) = <span className="text-purple-600 text-xl">50x ROI</span> in month 1</p>
              </div>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario 2: You Save 10 Hours/Week</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Time Saved:</span> 10 hours/week × 4 weeks = 40 hours/month</p>
              <p><span className="font-semibold">Your Hourly Rate:</span> £100/hour</p>
              <p><span className="font-semibold">Monthly Value:</span> 40 hours × £100 = £4,000</p>
              <p><span className="font-semibold">Tool Cost:</span> £80/month</p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <p className="font-bold text-gray-900">ROI: £4,000 ÷ £80 = <span className="text-purple-600 text-xl">50x</span> (monthly)</p>
              </div>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario 3: You Delegate to VA via Make Team</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Work Delegated:</span> 20 hours/week of automation</p>
              <p><span className="font-semibold">Your Time Saved:</span> 80 hours/month = £8,000 value</p>
              <p><span className="font-semibold">VA Cost:</span> £1,500/month</p>
              <p><span className="font-semibold">Make Team Cost:</span> £30/month</p>
              <p><span className="font-semibold">Net Gain:</span> £8,000 - £1,500 - £30 = £6,470/month</p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <p className="font-bold text-gray-900">ROI: £6,470/month on £80/month investment = <span className="text-purple-600 text-xl">80x</span> (monthly)</p>
              </div>
            </div>
          </div>

          {/* Scenario 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario 4: You Avoid Custom Dev</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Problem:</span> Client needs custom API integration</p>
              <p><span className="font-semibold">Option A (Without Pro):</span> Hire developer = £5,000</p>
              <p><span className="font-semibold">Option B (With Pro Webhooks):</span> Build it yourself = £80/month</p>
              <p><span className="font-semibold">Savings on One Integration:</span> £5,000</p>
              <p><span className="font-semibold">Professional Tools Cost (Annual):</span> £960</p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <p className="font-bold text-gray-900">ROI: £5,000 ÷ £960 = <span className="text-purple-600 text-xl">5.2x</span> per integration (happens 2-3x/year)</p>
              </div>
            </div>
          </div>

          {/* Break-Even */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-8">
            <p className="text-xl font-bold text-gray-900 mb-6">What's Your Break-Even?</p>
            <div className="space-y-4 text-gray-700">
              <p>You need to save <span className="font-bold text-purple-600">48 minutes/month</span> at £100/hour to break even on Pro automation.</p>
              <p>Or: Enable 1 new service per year that generates £1,000+ revenue (easily done with webhooks).</p>
              <p>Or: Delegate 5 hours/week to VA using Make Team (gains you 20 hours/month personal time).</p>
              <p>Or: Avoid hiring a developer for 1 integration (saves £5,000, costs £80/month).</p>
              <p className="font-semibold text-gray-900 mt-6">If any of these apply to you, Pro pays for itself immediately.</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Setup Guide */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            60-Minute Pro Setup Guide
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            From mid-tier to professional automation. Everything you need to configure webhooks, conditionals, and team access.
          </p>

          {/* Step 1: Zapier Professional */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Upgrade to Zapier Professional (15 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 1.1: Go to Zapier Settings</p>
                <p>Visit zapier.com → Account settings → Billing → Plans</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.2: Click "Upgrade to Professional"</p>
                <p>Select Professional plan (£50/month) → Continue</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.3: Verify Billing</p>
                <p>Enter payment method → Confirm upgrade</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.4: Enable Webhooks</p>
                <p>Go to Settings → Connected Apps. Look for "Webhooks by Zapier." Click "Connect."</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.5: Test Webhook</p>
                <p>Create new Zap → Trigger: "Webhooks by Zapier" Trigger → "Catch Raw Hook" → Get webhook URL (copy for later)</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 font-mono text-sm mt-4">
                <p className="text-gray-800">Zapier now displays your unique webhook URL.</p>
                <p className="text-gray-800 mt-2">Save it. You'll need it for custom integrations.</p>
              </div>
            </div>
          </div>

          {/* Step 2: Build Your First Advanced Zap (Paths) */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Build First Path Zap (20 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 2.1: Create New Zap</p>
                <p>Zapier home → "Create" → Name: "Lead Qualification with Paths"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.2: Trigger</p>
                <p>Select trigger: Gmail → New Email. Connect Gmail account. Set filter: Label = "Leads"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.3: Add Paths</p>
                <p>Click "+" → Add "Paths" → Scroll and select "Paths"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.4: Set Path 1 (Qualified Leads)</p>
                <p>Path 1 name: "Qualified"</p>
                <p>Condition: "Email Subject" contains "Budget Approved"</p>
                <p>Action: Slack → Send Channel Message → Channel: #qualified-leads</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">Message: "Qualified lead: [subject]"</div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.5: Set Path 2 (Unqualified Leads)</p>
                <p>Path 2 name: "Unqualified"</p>
                <p>Condition: Email Subject does NOT contain "Budget Approved"</p>
                <p>Action: Gmail → Send Email → To: unqualified@you.com → Note & archive</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.6: Test & Turn On</p>
                <p>Click "Test" → Verify both paths execute → Turn on Zap</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                <p className="font-semibold text-gray-900 mb-2">What You Just Built</p>
                <p>A conditional automation. Mid-tier can't do this. You just eliminated manual lead qualification.</p>
              </div>
            </div>
          </div>

          {/* Step 3: Add Filters */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Build First Filter Zap (10 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 3.1: Create New Zap</p>
                <p>Zapier home → Create → Name: "Filter CRM Entries"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.2: Trigger</p>
                <p>Trigger: HubSpot → New Contact → Connect HubSpot</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.3: Add Filter Step</p>
                <p>Click "+" → Search "Filter" → Select "Only continue if..."</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.4: Set Filter Condition</p>
                <p>Condition: Contact Property "Deal Size" Greater than or equal to 5000</p>
                <p>This filter blocks contacts with deal size under £5,000 from proceeding</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.5: Add Action</p>
                <p>If condition passes: Slack → Send Direct Message → To: Your user ID</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">Message: "High-value lead: [First Name] [Last Name]"</div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.6: Test & Turn On</p>
                <p>Test with a high-value contact → Turn on Zap</p>
              </div>
            </div>
          </div>

          {/* Step 4: Make Team Setup */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Upgrade Make to Team (10 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 4.1: Go to Make.com</p>
                <p>make.com → Log in → Settings → Billing</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 4.2: Upgrade to Team</p>
                <p>Click "Upgrade to Team" → Select Team plan (£30/month) → Confirm billing</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 4.3: Invite Team Member</p>
                <p>Settings → Team → "Invite Team Member" → Enter VA email → Send invite</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 4.4: Set Team Folders</p>
                <p>Create team folder: "Infrastructure" (for shared automations)</p>
                <p>Create team folder: "Client Automation Templates"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 4.5: Assign Permissions</p>
                <p>Team Member → Set role to "Developer" (can create & edit scenarios)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 4.6: Create First Team Scenario</p>
                <p>Move 1 scenario from personal to "Infrastructure" folder → VA can now see & edit it</p>
              </div>
            </div>
          </div>

          {/* Step 5: Configure Webhooks */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-purple-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Test Webhooks (5 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 5.1: Get Your Webhook URL</p>
                <p>You already created this in Step 1.5. Go back to Zapier → Copy webhook URL.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 5.2: Test Webhook with Curl</p>
                <p>Open Terminal and run:</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm mt-2 overflow-x-auto">
                  <p>curl -X POST [YOUR_WEBHOOK_URL] \</p>
                  <p>&nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \</p>
                  <p>&nbsp;&nbsp;-d &apos;[JSON_OBJECT]&apos;</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mt-4">Step 5.3: Verify in Zapier</p>
                <p>Go back to your webhook Zap → Check "Webhooks Latest Requests" → You should see your test data</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 5.4: Build Webhook Zap</p>
                <p>Add action: Google Sheets → Create Spreadsheet Row → Column "Name" = data you sent → Test → Turn on</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                <p className="font-semibold text-gray-900 mb-2">Congratulations</p>
                <p>You just built a custom webhook integration. This is a Pro-tier capability.</p>
              </div>
            </div>
          </div>

          {/* Total Setup Time */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-300 p-8">
            <p className="text-xl font-bold text-gray-900 mb-4">Setup Complete</p>
            <div className="space-y-3 text-gray-700">
              <p>✓ Zapier Professional with webhooks enabled</p>
              <p>✓ First Path Zap (conditional logic)</p>
              <p>✓ First Filter Zap (advanced filtering)</p>
              <p>✓ Make Team with VA access</p>
              <p>✓ First webhook integration tested</p>
              <p className="font-semibold text-gray-900 mt-4">Total Time: 60 minutes. You're now ready for advanced automation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Workflows */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            3 Advanced Workflows You Can Now Build
          </h2>

          {/* Workflow 1: Custom Lead Nurturing */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Custom Lead Nurturing with Conditional Paths</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Challenge</p>
                <p className="text-gray-700">
                  You want to nurture different leads differently. High-budget leads get immediate outreach. Low-budget leads get a nurture sequence. Mid-tier can't handle this. Pro can.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Workflow Steps</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
                  <p>1. Webhook receives lead form submission</p>
                  <p>2. Format data (name, email, budget)</p>
                  <p>3. Zapier Pro Paths: IF budget &gt; £5000</p>
                  <p className="ml-4">→ Path A: Send to CRM as "Hot Lead"</p>
                  <p className="ml-4">→ Send Slack: "High-value lead received"</p>
                  <p className="ml-4">→ Schedule email in 2 hours (Delay action)</p>
                  <p>4. IF budget &lt; £5000</p>
                  <p className="ml-4">→ Path B: Add to email nurture list</p>
                  <p className="ml-4">→ Send drip sequence (email #1)</p>
                  <p className="ml-4">→ Schedule follow-up (Delay 3 days)</p>
                  <p>5. All leads tracked in Google Sheets (source, path, date)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Time Saved Per Lead</p>
                <p className="text-gray-700">Manual qualification + CRM entry + email = 30 minutes/lead. Automated = 0 minutes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Revenue Impact</p>
                <p className="text-gray-700">50 leads/month × 30 minutes = 25 hours saved. At £100/hour = £2,500/month value reclaimed.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">Pro vs Mid-Tier</p>
                <p className="text-gray-700">Mid-tier: You qualify leads manually. Pro-tier: Zapier qualifies. You work on closing.</p>
              </div>
            </div>
          </div>

          {/* Workflow 2: Custom API Integration */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Custom API Integration (Offer Unique Service)</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Challenge</p>
                <p className="text-gray-700">
                  Client has custom accounting software (no Zapier integration exists). They want data in Stripe. Hire a developer (£5,000). Or use Pro webhooks (£80/month + your time).
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Workflow Steps</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
                  <p>1. Client's software generates invoice</p>
                  <p>2. Sends POST to your Zapier webhook (custom data)</p>
                  <p>3. Zapier receives raw JSON</p>
                  <p>4. Format Text action: Parse JSON → Extract invoice #, amount, client email</p>
                  <p>5. Stripe API action: Create charge (amount, customer)</p>
                  <p>6. Success: Send email to client with receipt</p>
                  <p>7. Failure: Send Slack alert to you (manual follow-up)</p>
                  <p>8. Log all in Google Sheets (audit trail)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">What You're Selling</p>
                <p className="text-gray-700">
                  This is a custom integration service. Clients can't build this themselves. You charge £3,000–5,000 setup + £500/month monitoring.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Revenue Impact</p>
                <p className="text-gray-700">1 integration = £3,000 revenue. Cost = £80/month. ROI = 37.5x first month.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">This Service Doesn't Exist in Mid-Tier</p>
                <p className="text-gray-700">Mid-tier: Can't connect custom systems. Pro-tier: Your new revenue stream.</p>
              </div>
            </div>
          </div>

          {/* Workflow 3: Team Delegation */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Delegate All Automation to VA via Make Team</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">The Challenge</p>
                <p className="text-gray-700">
                  You're doing 20 hours/week of automation work. Hire VA (£1,500/month). But VA needs access to your scenarios. Make Team (£30/month) lets VA work independently.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Workflow Steps</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
                  <p>1. Upgrade Make to Team (£30/month)</p>
                  <p>2. Invite VA with Developer role</p>
                  <p>3. Create team folders: "Lead Automation," "Email Campaigns," "Report Generation"</p>
                  <p>4. Move 10 scenarios to shared folders</p>
                  <p>5. VA audits scenarios for bugs, optimization</p>
                  <p>6. VA deploys new scenarios (you review first)</p>
                  <p>7. VA monitors scenarios (alerts, errors)</p>
                  <p>8. Weekly sync: Review metrics, new requirements</p>
                  <p>9. You focus on strategy, not daily automation</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Time Saved</p>
                <p className="text-gray-700">20 hours/week × 4 weeks = 80 hours/month. At £100/hour = £8,000/month value.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cost Breakdown</p>
                <div className="space-y-2 text-gray-700">
                  <p>VA Salary: £1,500/month</p>
                  <p>Make Team: £30/month</p>
                  <p>Your Time Freed: £8,000/month value</p>
                  <p className="font-semibold text-gray-900 mt-3">Net Gain: £6,470/month</p>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-2">This Is Team Scaling</p>
                <p className="text-gray-700">Mid-tier: Solo only. Pro-tier: VA can work independently on your automation. Your business scales without you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anti-Examples */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            3 Anti-Examples: When NOT to Upgrade to Pro
          </h2>

          {/* Anti-Example 1 */}
          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-red-600 mb-4">❌ Anti-Example 1: You're Still Under £15k/Month & On Free Tier</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-gray-900">Situation:</span> You're at £8k/month revenue. Using free Zapier. Thinking: "Should I jump to Pro?"</p>
              <p><span className="font-semibold text-gray-900">Why Not:</span> Free tier handles your current volume (100 tasks = plenty). Pro cost (£80/month) is 1% of monthly revenue. Not worth the mental load yet.</p>
              <p><span className="font-semibold text-gray-900">What To Do Instead:</span> Stay on free. Upgrade to mid-tier (£25/month) when you hit £12k/month revenue. Hit Pro triggers first (webhooks, team work) THEN upgrade.</p>
              <p className="bg-red-50 p-3 rounded border border-red-200 text-gray-900 mt-4"><span className="font-semibold">Rule:</span> Don't pay for features you don't use.</p>
            </div>
          </div>

          {/* Anti-Example 2 */}
          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-red-600 mb-4">❌ Anti-Example 2: You Need Webhooks but Build Custom Integrations Yourself (Over-Engineering)</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-gray-900">Situation:</span> You have a webhook need. Instead of upgrading to Zapier Pro, you hire a developer to build custom integration (£5,000).</p>
              <p><span className="font-semibold text-gray-900">Why It's Wrong:</span> Zapier Pro webhook setup takes 15 minutes. Developer build takes 2 weeks. Cost: 62x more expensive. You're over-engineering.</p>
              <p><span className="font-semibold text-gray-900">What To Do Instead:</span> Upgrade to Zapier Pro (£50/month). Build webhook yourself in 15 minutes. If it breaks, fix in 5 minutes. If client needs new integration, add for free (no dev hours needed).</p>
              <p className="bg-red-50 p-3 rounded border border-red-200 text-gray-900 mt-4"><span className="font-semibold">Rule:</span> Webhooks are not a developer job. They're a Zapier Pro job.</p>
            </div>
          </div>

          {/* Anti-Example 3 */}
          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-xl font-bold text-red-600 mb-4">❌ Anti-Example 3: You Skip Mid-Tier and Jump to Pro (Wasted Investment)</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold text-gray-900">Situation:</span> You're on free tier. You think "I need to scale" so you jump straight to Pro (£50/month Zapier + £30/month Make Team).</p>
              <p><span className="font-semibold text-gray-900">Why It's Wrong:</span> You don't have advanced workflow needs yet. You're paying for webhooks & team features you're not using. Mid-tier (£25/month) would handle your workflows for 1/4 the cost.</p>
              <p><span className="font-semibold text-gray-900">What To Do Instead:</span> Upgrade mid-tier first. Use it for 3 months. When you hit the limitations (need webhooks, need team work, need conditional logic), THEN jump to Pro. Your money goes to features you actually use.</p>
              <p className="bg-red-50 p-3 rounded border border-red-200 text-gray-900 mt-4"><span className="font-semibold">Rule:</span> Don't skip tiers. Migrate when you hit limits, not before.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Example */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Real Example: How James Built a £5k/Month Service with Pro Automation
          </h2>

          <div className="bg-purple-50 rounded-xl border border-purple-200 p-10">
            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 text-lg mb-2">The Situation</p>
                <p>
                  James is a sales coach. Revenue: £24k/month. He coaches 1-on-1, then scaling to £50k/month required productizing his method.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg mb-2">The Problem</p>
                <p>
                  He wanted to offer "Done-For-You Lead Qualification" to his clients. The workflow: clients send him lead lists. He'd manually qualify them (3 hours). Deliver results. Repeat weekly.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg mb-2">The Solution (Mid-Tier Automation)</p>
                <p>
                  James upgraded to Zapier Starter (£20/month). Built a Zap: Google Sheet trigger (new row) → Gmail → Send email to leads → Log responses. Automated the sending part. But clients still uploaded manually. Still required 1 hour/week from James.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg mb-2">The Breakthrough (Pro Automation)</p>
                <p>
                  James hit a wall: 10 clients wanted lead qualification service. At 3 hours/week per client = 30 hours/week. Unsustainable.
                </p>
                <p className="mt-3">
                  He upgraded to Zapier Professional (£50/month). Built webhook integration. Clients can now send lead lists via custom form. Zapier automatically:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Receives lead list (webhook)</li>
                  <li>Uses conditional paths to filter qualification criteria</li>
                  <li>Sends qualified leads to his CRM</li>
                  <li>Sends unqualified leads to archive</li>
                  <li>Sends email report to client daily</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-lg mb-2">The Results</p>
                <div className="space-y-2 ml-4">
                  <p>✓ Now offers "Lead Qualification Service" for £500/month recurring</p>
                  <p>✓ 10 clients × £500 = £5,000/month new revenue</p>
                  <p>✓ Automation handles 95% of work. James spends 30 minutes/week managing</p>
                  <p>✓ Cost: Zapier Pro (£50) + Gmail/Sheets (free) = £50/month</p>
                  <p>✓ Time saved: 25 hours/week</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-300 mt-6">
                <p className="font-semibold text-gray-900 text-lg mb-3">The Numbers</p>
                <div className="space-y-2 font-semibold text-gray-700">
                  <p>New Revenue: £5,000/month</p>
                  <p>Tool Cost: £50/month</p>
                  <p>Time Saved: 25 hours/week (£2,500/week value at £100/hr)</p>
                  <p className="text-xl text-purple-600 pt-3">ROI: 100x (£5,000 ÷ £50)</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-gray-900 text-lg mb-2">Why This Matters</p>
                <p>
                  James didn't just save time. He created a new service that didn't exist before. Pro automation enabled a £5k/month revenue stream. That's not a time-saving story. It's a capability story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Decision Framework */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Should You Upgrade to Pro Right Now?
          </h2>

          <div className="bg-white rounded-xl border border-gray-100 p-10">
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-4">Answer these 5 questions:</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-lg font-bold text-gray-900 mb-3">Question 1: Are you at £15k/month revenue?</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 border border-green-400 rounded">✓</span> Yes → Pro is worth considering</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-red-100 border border-red-400 rounded">✗</span> No → Stay mid-tier</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-lg font-bold text-gray-900 mb-3">Question 2: Do you need webhooks (custom data from apps)?</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 border border-green-400 rounded">✓</span> Yes → Upgrade now</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-gray-200 border border-gray-400 rounded">?</span> Not sure → Upgrade to test</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-red-100 border border-red-400 rounded">✗</span> No → Continue</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-lg font-bold text-gray-900 mb-3">Question 3: Do you need conditional logic (IF/THEN branching)?</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 border border-green-400 rounded">✓</span> Yes → Upgrade now</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-red-100 border border-red-400 rounded">✗</span> No → Continue</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-lg font-bold text-gray-900 mb-3">Question 4: Do you have a VA or contractor doing automation?</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 border border-green-400 rounded">✓</span> Yes → Upgrade to Make Team (£30/month)</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-red-100 border border-red-400 rounded">✗</span> No → Skip Make Team</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-lg font-bold text-gray-900 mb-3">Question 5: Do you want to offer automation services to clients?</p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-green-100 border border-green-400 rounded">✓</span> Yes → Upgrade now (£3k–5k/month new revenue)</p>
                  <p className="flex items-center gap-2"><span className="inline-block w-5 h-5 bg-red-100 border border-red-400 rounded">✗</span> No → Stay mid-tier</p>
                </div>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg border border-purple-300 mt-8">
                <p className="text-lg font-bold text-gray-900 mb-4">Your Upgrade Decision</p>
                <div className="space-y-3 text-gray-700">
                  <p>If you answered <span className="font-bold text-purple-600">YES to 2 or more questions</span> → Upgrade to Pro.</p>
                  <p>If you answered <span className="font-bold text-gray-900">YES to Question 5 alone</span> → Upgrade to Pro (automation services = highest ROI).</p>
                  <p>If you answered <span className="font-bold text-red-600">NO to all questions</span> → Stay mid-tier. Pro paid for is money wasted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="py-16 px-6 sm:px-8 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-yellow-400 p-8">
            <div className="flex gap-4">
              <div className="text-4xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Critical Warning: Know Your Break-Even</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">If you're under £15k/month:</span> Pro automation (£80/month) is overkill. You don't have the revenue to justify advanced features yet. Stay on mid-tier.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">If you don't have a webhook need:</span> Zapier Professional is a luxury. Mid-tier handles linear workflows fine.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">If you're not delegating work:</span> Make Team (£30/month) is useless. Solo automation is handled by Zapier alone.
                  </p>
                  <p className="mt-6 font-semibold text-gray-900">
                    Only upgrade when you hit the limits, not before. There's no badge for paying for features you don't use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Expand Your Automation Mastery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/tools/automation-integration/mid-tier">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Previous Tier</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mid-Tier Automation</h3>
                <p className="text-gray-700 mb-4">
                  Zapier Starter + Make Core. For teams at £12–15k/month. Covers multi-step workflows, 20-minute setup, 6,240 words of tactics.
                </p>
                <p className="text-blue-600 font-semibold">Review mid-tier →</p>
              </div>
            </Link>

            <Link href="/tools/automation-integration/free">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">Fundamentals</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Automation</h3>
                <p className="text-gray-700 mb-4">
                  Zapier free + Make free + n8n open source. No paywall automation. Perfect for starting your automation journey with zero risk.
                </p>
                <p className="text-gray-600 font-semibold">Back to basics →</p>
              </div>
            </Link>

            <Link href="/systems/knowledge-systems">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">Related System</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Knowledge Systems</h3>
                <p className="text-gray-700 mb-4">
                  How to document your automation workflows, build SOP templates, and create an automation knowledge base your team can reference.
                </p>
                <p className="text-green-600 font-semibold">Explore knowledge systems →</p>
              </div>
            </Link>

            <Link href="/marketing/scaling">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">Scaling Guide</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scaling to £50k+</h3>
                <p className="text-gray-700 mb-4">
                  How to use automation + delegation to break through revenue plateaus. Automation is the unlock for solos scaling past £20k/month.
                </p>
                <p className="text-orange-600 font-semibold">Learn scaling strategy →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Build Advanced Automation?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            You've learned the framework. You know the workflows. You understand the ROI. Now build your first webhook integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
              Download Pro Automation Worksheet
            </button>
            <Link href="/tools/automation-integration/mid-tier">
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-700 transition text-lg">
                Back to Mid-Tier
              </button>
            </Link>
          </div>
          <p className="text-purple-200 text-sm mt-8">
            60-minute setup. 5 advanced workflows. Unlimited ROI potential.
          </p>
        </div>
      </div>

      {/* Footer/Next Steps */}
      <div className="py-12 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-gray-700">
            <p className="mb-4">Completed Pro Automation guide. What's next?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:text-sm">
              <Link href="/tools/creation-content" className="text-purple-600 font-semibold hover:underline">
                Explore Content Creation Tools →
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/marketing/scaling" className="text-purple-600 font-semibold hover:underline">
                Learn Scaling Strategy →
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/tools/automation-integration/mid-tier" className="text-purple-600 font-semibold hover:underline">
                Back to Automation Index →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
