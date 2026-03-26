import Link from 'next/link';

export const metadata = {
  title: 'Mid-Tier Automation: When Free Limits Cost You Money | OneFoundr',
  description: 'Zapier Starter (£20) + Make Core (£5) = £25/month. 100x ROI. For solos hitting task limits at £5k+ revenue.',
  openGraph: {
    title: 'Mid-Tier Automation: When Free Limits Cost You Money',
    description: 'Paid automation tools that pay for themselves in 15 minutes. Unlimited task growth.',
  },
};

export default function MidTierAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/tools/automation-integration/free" className="text-blue-600 hover:underline text-sm">
            ← Back to Free Automation
          </Link>
        </div>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mid-Tier Automation: When Free Limits Cost You Money
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Zapier Starter + Make Core. £25/month. Pays for itself when you hit 100 tasks. For solos at £5k+ revenue.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mb-8">
            <p className="text-purple-900 font-semibold mb-2">
              "I hit 100 tasks in 10 days on Zapier free. Automation stopped. Lost 5 hours that week. Upgraded to Starter (£20/month). Never hit the limit again. That's 25x ROI in the first month alone."
            </p>
            <p className="text-sm text-purple-800">
              This page is for solos who've outgrown free tier. You're making £5k+/month. Free limits now cost you real money.
            </p>
          </div>
        </section>
      </div>

      {/* UPGRADE TRIGGERS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">When to Upgrade from Free</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Four signs you've outgrown free tier. Each one costs you money if you don't upgrade.
            </p>
          </div>

          {/* Trigger 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 1: You Hit Task Limit</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Problem:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Zapier Free limit:</strong></span>
                  <span>100 tasks/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Expected tasks:</strong></span>
                  <span>150-200 per month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>What happens:</strong></span>
                  <span>Automation stops mid-month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>You do:</strong></span>
                  <span>Manual work (tasks restart next month)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-bold text-gray-900 mb-3">Revenue Cost (per incident):</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span>Manual work: 5 hours/week</span>
                  <span>= 20 hours/month</span>
                </div>
                <div className="flex justify-between">
                  <span>At £100/hour value</span>
                  <span>= £2,000/month lost</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-bold">Cost of upgrading:</span>
                  <span className="font-bold">£20/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-green-900 mb-2">ROI Calculation:</p>
              <p className="text-green-800 text-lg">
                £2,000 (revenue saved) ÷ £20 (upgrade cost) = <span className="font-bold">100x ROI</span>
              </p>
              <p className="text-sm text-green-700 mt-2">
                Your upgrade pays for itself 100 times over. Every month.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-6">
              <p className="text-sm font-bold text-yellow-900">The Solo Truth:</p>
              <p className="text-yellow-800">You hit 100 tasks because you have profitable automations. That's proof you need to upgrade.</p>
            </div>
          </div>

          {/* Trigger 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 2: You Need Faster Execution</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Problem:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Zapier Free delay:</strong></span>
                  <span>15 minutes between trigger and action</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Real-world impact:</strong></span>
                  <span>You wait 15 minutes for workflow to run</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Daily delay:</strong></span>
                  <span>30 minutes (average 2 triggers)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>You lose:</strong></span>
                  <span>30 minutes waiting per day</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-bold text-gray-900 mb-3">Revenue Cost (per day):</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span>30 minutes waiting/day</span>
                  <span>= £50/day value</span>
                </div>
                <div className="flex justify-between">
                  <span>5 days/week = £250/week</span>
                  <span>= £1,000/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-bold">Zapier Starter 2-min delay:</span>
                  <span className="font-bold">£20/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-green-900 mb-2">ROI Calculation:</p>
              <p className="text-green-800 text-lg">
                £1,000 (time freed) ÷ £20 (upgrade cost) = <span className="font-bold">50x ROI</span>
              </p>
              <p className="text-sm text-green-700 mt-2">
                Faster execution alone justifies the upgrade.
              </p>
            </div>
          </div>

          {/* Trigger 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 3: You Need More Zaps</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Problem:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Zapier Free limit:</strong></span>
                  <span>5 active Zaps</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Workflows you want to automate:</strong></span>
                  <span>8-10 (invoicing, leads, content, etc.)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>You can't automate:</strong></span>
                  <span>3-5 workflows</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Manual work:</strong></span>
                  <span>3 hours/week on non-automated workflows</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-bold text-gray-900 mb-3">Revenue Cost (per week):</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span>3 hours/week non-automated</span>
                  <span>= £300/week value</span>
                </div>
                <div className="flex justify-between">
                  <span>4 weeks × £300</span>
                  <span>= £1,200/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-bold">Zapier Starter (20 Zaps):</span>
                  <span className="font-bold">£20/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-green-900 mb-2">ROI Calculation:</p>
              <p className="text-green-800 text-lg">
                £1,200 (workflows enabled) ÷ £20 (upgrade cost) = <span className="font-bold">60x ROI</span>
              </p>
              <p className="text-sm text-green-700 mt-2">
                Upgrading lets you automate 3+ more workflows. That's massive ROI.
              </p>
            </div>
          </div>

          {/* Trigger 4 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 4: You Need Multi-Step Workflows</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Problem:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Zapier Free allows:</strong></span>
                  <span>Single-step Zaps only</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>You want:</strong></span>
                  <span>Complex workflows (if A, then B and C)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Workaround:</strong></span>
                  <span>Chain multiple Zaps (messy, unreliable)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Manual steps still needed:</strong></span>
                  <span>2 hours/week fixing broken chains</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-bold text-gray-900 mb-3">Revenue Cost (per week):</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span>2 hours/week fixing automation</span>
                  <span>= £200/week value</span>
                </div>
                <div className="flex justify-between">
                  <span>4 weeks × £200</span>
                  <span>= £800/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-2">
                  <span className="font-bold">Zapier Starter (multi-step):</span>
                  <span className="font-bold">£20/month</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-green-900 mb-2">ROI Calculation:</p>
              <p className="text-green-800 text-lg">
                £800 (reliable workflows) ÷ £20 (upgrade cost) = <span className="font-bold">40x ROI</span>
              </p>
              <p className="text-sm text-green-700 mt-2">
                Multi-step support alone saves 2 hours/week of manual fixes.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-6">
              <p className="text-sm font-bold text-yellow-900">The Solo Truth:</p>
              <p className="text-yellow-800">If you hit ANY of these four triggers, upgrade immediately. The ROI is obvious: 40x to 100x.</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Upgrade Decision Matrix</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-lg">→</span>
                <span className="text-gray-700"><strong>Hitting task limits:</strong> Upgrade this week. 100x ROI.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">→</span>
                <span className="text-gray-700"><strong>Waiting on delays:</strong> Upgrade this week. 50x ROI.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">→</span>
                <span className="text-gray-700"><strong>Can't build enough Zaps:</strong> Upgrade this week. 60x ROI.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">→</span>
                <span className="text-gray-700"><strong>Fixing broken chains:</strong> Upgrade this week. 40x ROI.</span>
              </div>
              <div className="flex gap-3 pt-4 border-t border-purple-300">
                <span className="text-lg">✓</span>
                <span className="text-gray-700"><strong>Not hitting any limits:</strong> Stay on free. Revisit at £5k revenue.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE MID-TIER STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Mid-Tier Stack: Zapier Starter + Make Core</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            £25/month gets you everything you need. This is the optimal mid-tier combination.
          </p>
        </div>

        {/* ZAPIER STARTER */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Zapier Starter</h3>
            <div className="text-2xl font-bold text-purple-600">£20/month</div>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 750 tasks/month (7.5x more than free)</li>
                <li>— 20 active Zaps (4x more than free)</li>
                <li>— 2-minute execution delay (7.5x faster than free)</li>
                <li>— Multi-step Zaps (not available on free)</li>
                <li>— Priority support</li>
                <li>— Custom status webhooks</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-bold text-gray-900 mb-3">Best For:</p>
              <p className="text-gray-700 mb-4">
                Any solo at £5k+ revenue who's hitting free limits.
              </p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Time saved:</strong></span>
                  <span>5-10 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Revenue impact:</strong></span>
                  <span>£2,000-4,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Break-even:</strong></span>
                  <span>6 minutes of time saved</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Workflows You Can Now Build:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>✓ Invoice automation → FreeAgent → Email → Slack</li>
                <li>✓ Lead capture → CRM → Trello → Email</li>
                <li>✓ Content publish → 3 platforms → Notion → Email</li>
                <li>✓ Complex conditionals (if A, then B else C)</li>
                <li>✓ Unlimited automation combinations</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Pro Tip:</p>
            <p className="text-yellow-800">750 tasks/month is plenty for most solos. If you hit this limit, you're at £15k+/month. Celebrate, then upgrade to Pro.</p>
          </div>
        </div>

        {/* MAKE CORE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Make Core</h3>
            <div className="text-2xl font-bold text-purple-600">£5/month</div>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— 10,000 operations/month (10x more than free)</li>
                <li>— Unlimited scenarios (vs 2 on free)</li>
                <li>— Advanced routing and conditionals</li>
                <li>— Data transformers and formatters</li>
                <li>— Email support included</li>
                <li>— Better performance and reliability</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-bold text-gray-900 mb-3">When to Use Instead of Zapier:</p>
              <p className="text-gray-700 mb-4">
                Use Make when you need complex logic or data transformation that Zapier can't handle.
              </p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Time saved per scenario:</strong></span>
                  <span>1-3 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Revenue impact:</strong></span>
                  <span>£400-1,200/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Break-even:</strong></span>
                  <span>30 minutes of time saved</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Workflows Only Make Can Handle:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>✓ Complex data transformation (XML to JSON)</li>
                <li>✓ Multiple conditional branches</li>
                <li>✓ Array/collection processing</li>
                <li>✓ Custom routing logic</li>
                <li>✓ API integrations requiring headers/auth</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Pro Tip:</p>
            <p className="text-yellow-800">Most solos only need 1-2 Make scenarios. Use it for your most complex workflow. Keep everything else in Zapier.</p>
          </div>
        </div>

        {/* TOTAL STACK */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Complete Mid-Tier Stack</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-purple-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">Zapier Starter</p>
                  <p className="text-sm text-gray-600">750 tasks, 20 Zaps, multi-step</p>
                </div>
                <p className="text-xl font-bold text-purple-600">£20/month</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-purple-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">Make Core</p>
                  <p className="text-sm text-gray-600">10,000 operations, unlimited scenarios</p>
                </div>
                <p className="text-xl font-bold text-purple-600">£5/month</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded border border-purple-300 flex justify-between items-center">
              <p className="font-bold text-gray-900">Total Investment:</p>
              <p className="text-2xl font-bold text-purple-600">£25/month</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-300">
              <p className="font-bold text-green-900">Revenue Freed: £2,000-4,000/month</p>
              <p className="text-sm text-green-800">ROI: 80x to 160x</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI SCENARIOS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">ROI Scenarios: Make the Business Case</h2>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 1: You Save 5 Hours/Week</h3>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="font-bold text-gray-900 mb-4">The Math:</p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <div className="flex justify-between">
                    <span><strong>5 hours/week freed</strong></span>
                    <span>= £500/week (at £100/hr)</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>20 hours/month freed</strong></span>
                    <span>= £2,000/month added value</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2">
                    <span className="font-bold">Cost (Zapier + Make):</span>
                    <span className="font-bold">£25/month</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-green-600">£2,000 ÷ £25 = 80x ROI</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-bold text-green-900">What This Means:</p>
                <p className="text-green-800 text-sm">Your £25 investment returns £2,000 in freed capacity. That investment pays for itself in 45 seconds.</p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 2: You Automate 3 More Workflows</h3>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="font-bold text-gray-900 mb-4">The Math:</p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <div className="flex justify-between">
                    <span><strong>Workflow 1: Invoicing</strong></span>
                    <span>3 hours/week saved</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Workflow 2: Lead capture</strong></span>
                    <span>2 hours/week saved</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Workflow 3: Content distribution</strong></span>
                    <span>1.5 hours/week saved</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2">
                    <span><strong>Total saved:</strong></span>
                    <span>6.5 hours/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Monthly value:</strong></span>
                    <span>26 hours × £100 = £2,600</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2">
                    <span className="font-bold">Cost:</span>
                    <span className="font-bold">£25/month</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-green-600">£2,600 ÷ £25 = 104x ROI</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-bold text-green-900">What This Means:</p>
                <p className="text-green-800 text-sm">You just automated 6.5 hours/week of work. That's equivalent to hiring a 2-day/week contractor (£200-300/week) at a cost of £6/week.</p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 3: You Avoid Hitting Task Limit</h3>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="font-bold text-gray-900 mb-4">The Math:</p>
                <div className="space-y-2 text-gray-700 ml-4">
                  <div className="flex justify-between">
                    <span><strong>You're at 140 tasks/month</strong></span>
                    <span>(40 over free limit)</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>If you stay on free:</strong></span>
                    <span>Automation stops on day 9</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Manual work for 3 weeks:</strong></span>
                    <span>15 hours/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Cost of 15 hours:</strong></span>
                    <span>£1,500</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-300 pt-2">
                    <span className="font-bold">Upgrade cost:</span>
                    <span className="font-bold">£25</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-green-600">£1,500 ÷ £25 = 60x ROI</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-bold text-green-900">What This Means:</p>
                <p className="text-green-800 text-sm">Upgrading costs £25. Not upgrading costs £1,500. The decision is obvious.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 20-MINUTE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Setup: 20 Minutes</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-gray-700 mb-8 text-lg">
            Upgrade from free to mid-tier. takes 20 minutes total. Everything you need.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-purple-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Upgrade Zapier to Starter (5 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <ol className="text-gray-700 space-y-2 ml-4">
                  <li>1. Go to zapier.com → Login</li>
                  <li>2. Click "Account" (bottom left)</li>
                  <li>3. Click "Plans and Usage"</li>
                  <li>4. Click "Upgrade to Starter"</li>
                  <li>5. Choose "Starter" (£20/month)</li>
                  <li>6. Add payment method (credit card)</li>
                  <li>7. Confirm upgrade (automatic)</li>
                  <li>8. All your Zaps now have 2-min delay + multi-step support</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-purple-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Upgrade Make to Core (5 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <ol className="text-gray-700 space-y-2 ml-4">
                  <li>1. Go to make.com → Login</li>
                  <li>2. Click profile icon (top right)</li>
                  <li>3. Click "Team settings"</li>
                  <li>4. Click "Plans & Billing"</li>
                  <li>5. Select "Core" (£5/month)</li>
                  <li>6. Add payment method</li>
                  <li>7. Confirm upgrade (immediate)</li>
                  <li>8. You now have 10,000 ops/month + unlimited scenarios</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-purple-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Build 3 New Automations (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <p className="text-gray-700 font-bold mb-3">Now that you have capacity, build what you couldn't before:</p>
                <ol className="text-gray-700 space-y-2 ml-4">
                  <li>1. Zapier: Create multi-step Zap #1 (lead-to-CRM-email sequence)</li>
                  <li>2. Zapier: Create Zap #2 (content distribution to 3 platforms)</li>
                  <li>3. Make: Create complex scenario (if-then-else workflow)</li>
                  <li>4. Test all three</li>
                  <li>5. Deploy and monitor</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-purple-900 mb-2">✓ Total Setup Time: 20 minutes</p>
            <p className="text-purple-800">After 20 minutes, you have doubled your automation capacity. You're ready to fully automate your business.</p>
          </div>
        </div>
      </div>

      {/* WORKFLOW EXPANSIONS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">3 Workflow Expansions: What You Can Now Build</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Lead Nurturing Pipeline</h3>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Complete Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>Lead books call via Calendly</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier detects booking</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier adds lead to your CRM (HubSpot/Notion)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier sends email sequence (personalized welcome)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier adds to Notion database (for tracking)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 6:</span>
                  <span>Zapier sends Slack alert (you manually approve)</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process:</strong></span>
                  <span>30 minutes per lead (CRM + email + notes)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>0 minutes (instant)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 20 leads/month:</strong></span>
                  <span>10 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£1,000/month freed</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
              <p className="font-bold text-yellow-900 mb-2">Multi-Step Required:</p>
              <p className="text-yellow-800 text-sm">Free tier can't do this (single-step only). Mid-tier Zapier Starter (multi-step) enables this entire workflow in one Zap.</p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Content Distribution + Notion Logging</h3>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Complete Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>You publish blog post (or press "post" on LinkedIn)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier detects LinkedIn post</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier shares to Twitter</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier shares to TikTok</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier adds to Notion content calendar</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 6:</span>
                  <span>Zapier sends email to your list (announcement)</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process:</strong></span>
                  <span>1 hour per post (copy-paste to platforms + email list)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>0 minutes (one-click publish)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 5 posts/week:</strong></span>
                  <span>20 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£2,000/month freed</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
              <p className="font-bold text-yellow-900 mb-2">Why Mid-Tier:</p>
              <p className="text-yellow-800 text-sm">This is 6 steps. Free tier gives you 5 active Zaps max. This workflow alone needs 2 Zaps (one for Twitter/TikTok, one for Notion/email). Mid-tier gives you 20 Zaps.</p>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Client Onboarding (Complete Automation)</h3>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Complete Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>Client pays via Stripe</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier creates invoice in FreeAgent</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier adds client to Notion database</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier sends welcome email + onboarding checklist</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier creates Trello card for project</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 6:</span>
                  <span>Zapier sends Slack alert that new client is ready</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process per client:</strong></span>
                  <span>45 minutes (invoice + email + CRM + setup)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>0 minutes (instant)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 10 clients/month:</strong></span>
                  <span>7.5 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£750/month per 10 clients</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
              <p className="font-bold text-yellow-900 mb-2">Why This Alone Justifies Mid-Tier:</p>
              <p className="text-yellow-800 text-sm">Automating client onboarding saves 45 minutes per client. At 10 clients/month, that's 7.5 hours/month = £750/month. Your £25 investment returns £750. That's 30x ROI on this workflow alone.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ANTI-EXAMPLES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What NOT to Do</h2>

        <div className="space-y-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 1: Stay on Free Too Long</p>
            <p className="text-gray-700">
              "I was at £6k/month revenue. Hit 100 tasks every month. Kept saying 'I'll upgrade next month.' Lost 5 hours/week for 3 months = 60 hours = £6,000 wasted. Then upgraded to Starter (£60 total over 3 months). Should've upgraded on day 1 of hitting the limit."
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> If you hit any free limit, upgrade immediately. Don't wait.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 2: Upgrade Make Too Early</p>
            <p className="text-gray-700">
              "I paid for Make Core thinking I'd need it. Turns out, I only needed Zapier for 95% of my automations. Wasted £5/month for 6 months on unused capacity. Should've used free Make for 1-2 scenarios and focused on Zapier optimization."
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> Only upgrade Make if you actually use complex features. Many solos only need Zapier + free Make.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 3: Build Too Many Workflows at Once</p>
            <p className="text-gray-700">
              "Got excited with Starter. Built 15 new Zaps in one week. Forgot to test them. 3 broke. Spent 6 hours debugging. Should've built 3-4, tested thoroughly, then moved to the next batch."
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> Build gradually. Test every Zap. One working Zap is better than 10 broken ones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WARNING BOX */}
      <div className="bg-yellow-50 py-20 border-t border-b border-yellow-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ You DON'T Need Mid-Tier If:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-lg">✗</span>
                <span><strong>You're not hitting free limits.</strong> Free tier handles £0-5k revenue easily. Stay on free.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✗</span>
                <span><strong>You're only doing 2-3 simple automations.</strong> Free tier is enough. Don't pay for unused capacity.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✗</span>
                <span><strong>You haven't tested your workflows yet.</strong> Test on free first. Upgrade when proven automations hit limits.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✗</span>
                <span><strong>You don't have repeatable processes.</strong> Build your SOP first. Then automate. Then upgrade if needed.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* REAL EXAMPLE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <p className="text-lg font-bold text-gray-900 mb-3">Real Example: Sarah's Coaching Business</p>
          <p className="text-gray-700 mb-4">
            "I'm a £8k/month coach. Started with free Zapier (invoicing + welcome email). Hit 100 tasks in day 9. Upgraded to Starter. Built 5 workflows: leads, invoicing, content, onboarding, admin. Saves 12 hours/week now."
          </p>
          <p className="text-gray-700 mb-4">
            Investment: £20/month Zapier Starter + £5/month Make Core = £25/month = £300/year
          </p>
          <p className="text-gray-700 mb-4">
            Time freed: 12 hours/week × 4 weeks = 48 hours/month = £4,800/month freed capacity
          </p>
          <div className="bg-white p-4 rounded border border-green-300">
            <p className="text-sm text-green-700">
              <strong>ROI: £4,800 ÷ £25 = 192x ROI every month.</strong> Best investment she's ever made.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-purple-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">ready to upgrade?</h2>
          <p className="text-lg opacity-90 mb-8">
            If you hit any free limit, upgrade this week. The ROI is obvious.
          </p>

          <div className="bg-purple-700 rounded-lg p-8 inline-block mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Decision Tree:</p>
            <ul className="text-left text-sm opacity-90 space-y-2">
              <li>→ Hitting 100 tasks/month? Upgrade.</li>
              <li>→ Waiting on 15-min delays? Upgrade.</li>
              <li>→ Can't build enough Zaps? Upgrade.</li>
              <li>→ Need multi-step workflows? Upgrade.</li>
              <li>→ Not hitting any limits? Stay on free.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg opacity-90">Upgrade takes 10 minutes. Build new workflows takes another 10. Total: 20 minutes.</p>
            <p className="text-lg font-bold">£25 investment. 100x ROI. No brainer.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/automation-integration/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">↙</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Free Automation (Previous)</h3>
              <p className="text-gray-600 text-sm">Zapier free, Make free. Starting point for all solos.</p>
            </div>
          </Link>

          <Link href="/tools/automation-integration/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">↗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pro Automation (Next)</h3>
              <p className="text-gray-600 text-sm">Zapier Pro, n8n enterprise. For £15k+ revenue solos.</p>
            </div>
          </Link>

          <Link href="/systems/knowledge-systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">SOP Documentation System</h3>
              <p className="text-gray-600 text-sm">Document your processes before you automate them. Critical foundation.</p>
            </div>
          </Link>

          <Link href="/marketing/scaling">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Scaling Without Hiring</h3>
              <p className="text-gray-600 text-sm">Automation is how you scale. Reference guide for growth stages.</p>
            </div>
          </Link>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tips for Mid-Tier Success</h3>
          <ol className="text-gray-700 space-y-3 ml-4">
            <li><strong>1. Prioritize multi-step Zaps.</strong> They were impossible on free. This is your killer feature at mid-tier.</li>
            <li><strong>2. Test before deployment.</strong> Build 3 Zaps. Test thoroughly. Then build 3 more.</li>
            <li><strong>3. Monitor your usage.</strong> You now have 750 tasks. Know when you're approaching limits (around 600).</li>
            <li><strong>4. Keep Zapier for simple workflows.</strong> Use Make only for complex logic that Zapier can't handle.</li>
            <li><strong>5. Document your Zaps.</strong> Add notes to each Zap explaining what it does. Future you will thank you.</li>
            <li><strong>6. Consider upgrading Make only if you have 2+ complex scenarios.</strong> Most solos only need Zapier.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}