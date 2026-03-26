import Link from 'next/link';

export const metadata = {
  title: 'Mid-Tier Project Tools: When Free Limits Cost You Deliveries | OneFoundr',
  description: 'Notion Plus, Trello Premium, Sunsama. £30/month. Upgrade triggers and ROI calculations when free tools start losing you clients.',
  openGraph: {
    title: 'Mid-Tier Project Tools: When Free Limits Cost You Deliveries',
    description: 'Paid tools that prevent missed deadlines. ROI-focused upgrade decision for £5k+/month revenue.',
  },
};

export default function MidTierProjectDeliveryPage() {
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
              Mid-Tier Project Tools: When Free Limits Cost You Deliveries
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Notion Plus, Trello Premium, Sunsama. £30/month. Pays for itself when you miss one deadline.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-blue-900 font-semibold mb-2">
              "I missed a £2k deadline because Notion free was down. Lost the client. Upgraded to Plus (£8/month). Never missed again. That's 250x ROI."
            </p>
            <p className="text-sm text-blue-800">
              This page shows you exactly when free tools stop working, and what £30/month fixes.
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
              Upgrade when free limits cost you money. Not when you want more features. Here are the three triggers that matter:
            </p>

            <div className="space-y-8">
              {/* Trigger 1 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Hit Notion Block Limit</h3>
                    <p className="text-gray-700 mb-4">
                      Notion free = 1,000 blocks. That's fine for 10 projects. When you hit 20+, you can't add more documentation without losing old work.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">You stop documenting scope because you're out of space. Scope creeps. Deadline slips. Client loses confidence.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Revenue Impact:</p>
                          <p className="text-gray-700 text-lg">1 missed deadline = £2,000 lost</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Notion Plus = £8/month = Unlimited blocks</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £2,000 ÷ £96 = <span className="text-2xl">20x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 2 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Need Unlimited Boards</h3>
                    <p className="text-gray-700 mb-4">
                      Trello free = 10 boards. At £5k/month, you're managing 15+ concurrent projects. 10 boards isn't enough.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">You're combining projects into boards. You lose track. A task gets buried. Deadline missed.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Revenue Impact:</p>
                          <p className="text-gray-700 text-lg">1 missed task = £500 lost (or 1 unhappy client)</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Trello Premium = £10/month = Unlimited boards + Timeline view</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £500 ÷ £120 = <span className="text-2xl">4x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 3 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Don't Know Where Time Goes</h3>
                    <p className="text-gray-700 mb-4">
                      Free tools don't track time. You work 10 hours but only deliver 5 hours' worth of output. You're losing £500/week to invisible time.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">You can't see that you're wasting 5 hours/week on busywork. You stay busy but aren't profitable.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Revenue Impact:</p>
                          <p className="text-gray-700 text-lg">5 hours/week wasted = £2,000/month lost opportunity</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Sunsama = £12/month = Time tracking + Calendar sync + Focus mode</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £2,000 ÷ £144 = <span className="text-2xl">13x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700">
              Any ONE of these triggers = upgrade. You don't need all three. If you're hitting deadlines, losing tasks, or wasting time, then the upgrade pays for itself immediately.
            </p>
          </div>
        </div>
      </div>

      {/* THE MID-TIER STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Get for £30/Month</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            The mid-tier stack is designed for solos at £5k-50k/month. You've outgrown free. You need reliability, unlimited capacity, and real-time tracking.
          </p>
        </div>

        {/* NOTION PLUS */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Notion Plus</h3>
            <div className="text-xl font-bold text-blue-600">£8/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited blocks (no cap)</li>
                <li>— Version history (restore old versions)</li>
                <li>— Unlimited guests (share with clients)</li>
                <li>— API access (automation)</li>
                <li>— Priority support</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why It Matters:</p>
              <p className="text-gray-700 mb-4">
                Unlimited capacity means you document everything without fear of hitting a limit. You share with clients directly. You automate workflows.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow:</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Track all 20+ projects in one database</li>
                <li>2. Never hit block limit</li>
                <li>3. Share entire workspace with client</li>
                <li>4. Version history saves when you make mistakes</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Notion Plus:</p>
            <p className="text-yellow-800">When you're close to 1,000 blocks or want to share workspace with clients.</p>
          </div>
        </div>

        {/* TRELLO PREMIUM */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Trello Premium</h3>
            <div className="text-xl font-bold text-blue-600">£10/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited boards (20+ boards)</li>
                <li>— Timeline view (gantt-like view)</li>
                <li>— Dashboard (overview of all progress)</li>
                <li>— Custom stickers and backgrounds</li>
                <li>— Priority support</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why It Matters:</p>
              <p className="text-gray-700 mb-4">
                Unlimited boards = one board per project. Timeline view shows you deadlines at a glance. Dashboard gives you real-time progress on all work.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow:</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Create 1 board per project (unlimited)</li>
                <li>2. View timeline to spot deadline conflicts</li>
                <li>3. Check dashboard for real-time progress</li>
                <li>4. Never lose track of a task</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade to Trello Premium:</p>
            <p className="text-yellow-800">When you're managing 15+ concurrent projects and need clear visibility.</p>
          </div>
        </div>

        {/* SUNSAMA */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Sunsama</h3>
            <div className="text-xl font-bold text-blue-600">£12/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700 mb-4">
                Daily planner that syncs with your calendar, email, and Trello/Notion. It tracks time, blocks distractions, and shows you where your day actually goes.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Time tracking (see exactly where time goes)</li>
                <li>— Calendar sync (tasks show in your calendar)</li>
                <li>— Email inbox (tasks sync from email)</li>
                <li>— Daily standup (AI-generated summary)</li>
                <li>— Focus mode (blocks distracting websites)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow:</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Morning: See your day in Sunsama calendar</li>
                <li>2. Work on tasks (time tracking runs automatically)</li>
                <li>3. End of day: See exactly where time went</li>
                <li>4. Realize 5 hours/week is wasted on busywork</li>
                <li>5. Fix the process → profit</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to add Sunsama:</p>
            <p className="text-yellow-800">When you need to see where time actually goes and want focus mode to eliminate busywork.</p>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Total Mid-Tier Stack</h3>
          <div className="flex justify-between items-center mb-4 p-4 bg-white rounded border border-indigo-200">
            <div>
              <p className="font-bold text-gray-900">Notion Plus</p>
              <p className="text-gray-600 text-sm">£8/month</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Trello Premium</p>
              <p className="text-gray-600 text-sm">£10/month</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Sunsama</p>
              <p className="text-gray-600 text-sm">£12/month</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-bold text-indigo-900 text-xl">£30/month</p>
              <p className="text-indigo-700 text-sm">Combined</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            All three together cost less than Asana Pro. And they work better for solos because they're designed for different purposes, not one bloated tool.
          </p>
        </div>
      </div>

      {/* THE ROI CALCULATION */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">ROI Calculations: Is It Worth It?</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              The tools cost £30/month (£360/year). Here's what they prevent:
            </p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-4">Scenario 1: You Save 1 Deadline</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Avoided loss (1 missed deadline):</span>
                    <span className="font-bold">£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual tool cost:</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-green-900 text-2xl">555x</span>
                  </div>
                </div>
                <p className="text-sm text-green-800">
                  If the tools prevent just one missed deadline per year, they've paid for themselves 5.5x over.
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <p className="font-bold text-blue-900 mb-4">Scenario 2: You Save 5 Hours/Week</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Hours wasted per week (before):</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your hourly rate:</span>
                    <span className="font-bold">£100/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly time value recovered:</span>
                    <span className="font-bold">£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual time value:</span>
                    <span className="font-bold">£24,000</span>
                  </div>
                  <div className="border-t border-blue-300 pt-3 flex justify-between">
                    <span className="font-bold">Annual cost:</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="border-t border-blue-300 pt-2 flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-blue-900 text-2xl">6,666%</span>
                  </div>
                </div>
                <p className="text-sm text-blue-800">
                  If Sunsama helps you recover just 5 lost hours/week, the ROI is extraordinary.
                </p>
              </div>

              {/* Scenario 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                <p className="font-bold text-purple-900 mb-4">Scenario 3: You Don't Miss Tasks</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Missed tasks per year (before):</span>
                    <span className="font-bold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average value per task:</span>
                    <span className="font-bold">£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual value protected:</span>
                    <span className="font-bold">£2,000</span>
                  </div>
                  <div className="border-t border-purple-300 pt-3 flex justify-between">
                    <span className="font-bold">Annual tool cost:</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">ROI:</span>
                    <span className="font-bold text-purple-900 text-2xl">455%</span>
                  </div>
                </div>
                <p className="text-sm text-purple-800">
                  Outlier scenario: You save an average of just 4 tasks/year. Each task is worth £500.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-4">Break-Even Analysis</p>
            <p className="text-gray-700 mb-4">
              To break even on £30/month, you need to prevent just ONE of these:
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>— Missing 1 deadline worth £2,000+</li>
              <li>— Wasting 3 hours/week on busywork</li>
              <li>— Losing 6+ tasks per year</li>
            </ul>
          </div>
        </div>
      </div>

      {/* THE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">30-Minute Setup Guide</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8">
            Moving from free to paid tools takes 30 minutes. You're just upgrading and connecting everything.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-blue-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Upgrade to Notion Plus (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-3">
                  <li>1. Go to notion.so settings (top left)</li>
                  <li>2. Click "Upgrade" button</li>
                  <li>3. Select "Plus" plan (£8/month)</li>
                  <li>4. Add payment method</li>
                  <li>5. Done. You now have unlimited blocks.</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-blue-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Upgrade to Trello Premium (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-3">
                  <li>1. Go to trello.com settings (bottom left)</li>
                  <li>2. Click "Upgrade to Premium"</li>
                  <li>3. Select Premium plan (£10/month)</li>
                  <li>4. Add payment method</li>
                  <li>5. Done. You now have unlimited boards.</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-blue-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Sign Up for Sunsama (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-3">
                  <li>1. Go to sunsama.com</li>
                  <li>2. Click "Sign up free"</li>
                  <li>3. Connect your Google Calendar</li>
                  <li>4. Connect Trello</li>
                  <li>5. Start 14-day trial</li>
                  <li>6. Add payment method after trial</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-green-900 mb-2">✓ You're All Set</p>
            <p className="text-green-800">30 minutes of setup. 1 month of value at minimum. All three tools now work together.</p>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Use Mid-Tier Tools Together</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Project Tracking (End-to-End)</h3>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Create in Notion Plus</p>
                  <p className="text-gray-700">Create project page with unlimited blocks. Document scope, timeline, status, notes.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Visualize in Trello Premium</p>
                  <p className="text-gray-700">Create board for project. Add tasks. Use timeline view to see all deadlines at once.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Track Daily in Sunsama</p>
                  <p className="text-gray-700">Sunsama pulls tasks from Trello. Shows them in calendar. You work on tasks. Time tracked automatically.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 4: Review</p>
                  <p className="text-gray-700">End of project: check Notion for documentation, Trello for timeline, Sunsama for time spent.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Advantage:</p>
              <p className="text-gray-700">
                Each tool does one thing well. Notion documents. Trello visualizes. Sunsama tracks time. You never miss a deadline because all views are always visible.
              </p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Time Accountability</h3>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Morning: Sunsama Standup</p>
                  <p className="text-gray-700">Open Sunsama. It shows your calendar + Trello tasks + AI-generated standup. You know exactly what's due today.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Midday: Check Trello Timeline</p>
                  <p className="text-gray-700">See if you're on pace. Timeline view shows which projects are at risk of deadline slips.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">End of Day: Review Sunsama Time Report</p>
                  <p className="text-gray-700">See where time actually went. 8 hours tracking → 3 hours productive work. 5 hours busywork. Fix tomorrow.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Weekly: Notion Summary</p>
                  <p className="text-gray-700">Update Notion with week's progress. One place to see all project status.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Advantage:</p>
              <p className="text-gray-700">
                Complete visibility. You know what's happening, where time goes, and when you're at risk of missing deadlines.
              </p>
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
                <p><strong>Revenue:</strong> £8k/month (£5k minimum)</p>
                <p><strong>Trigger:</strong> Missed 2 deadlines last month</p>
                <p><strong>Upgrade Decision:</strong> All three (Notion + Trello + Sunsama)</p>
                <p><strong>Result (1 month):</strong> Saved 5 hours/week + 1 potential deadline miss prevented</p>
                <p><strong>ROI:</strong> 500%+ (immediately)</p>
                <p><strong>Verdict:</strong> Money well spent</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad Upgrade ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Revenue:</strong> £2k/month (too early)</p>
                <p><strong>Trigger:</strong> "I want to be professional"</p>
                <p><strong>Upgrade Decision:</strong> All three at once</p>
                <p><strong>Result (1 month):</strong> Not using Sunsama. Confused by Notion Plus features. Never needed unlimited boards.</p>
                <p><strong>ROI:</strong> -100% (wasted money)</p>
                <p><strong>Verdict:</strong> Upgraded too early</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-4">The Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              Upgrade when free tools have cost you money (a missed deadline, lost task, wasted time). Not before. Once you hit a trigger, upgrade immediately. You'll pay off the upgrade in days, not months.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Is It Time to Upgrade?</h2>
          <p className="text-lg opacity-90 mb-8">
            Do any of these sound familiar?
          </p>
          <ul className="text-left max-w-md mx-auto mb-12 space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You're managing 15+ concurrent projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You've missed a deadline in the last 3 months</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You work 10 hours but only deliver 5 hours of output</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You're making £5k+/month</span>
            </li>
          </ul>
          <p className="text-lg opacity-90 mb-8">
            If all four: Upgrade now. You're ready.
          </p>
          <p className="text-lg opacity-90 mb-12">
            If three: Run the numbers. You'll likely break even within 1 month.
          </p>

          <div className="bg-blue-700 rounded-lg p-6">
            <p className="font-bold text-sm opacity-75 mb-2">Download the Mid-Tier Upgrade Worksheet</p>
            <p className="text-sm opacity-90">Calculate your specific ROI before committing to all three tools.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/project-delivery/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Free Tier</h3>
              <p className="text-gray-600 text-sm">Notion free + Trello free + Drive. Everything for £0/month.</p>
            </div>
          </Link>

          <Link href="/tools/project-delivery/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pro Tier (Coming)</h3>
              <p className="text-gray-600 text-sm">Enterprise tools when you're doing £50k+/month.</p>
            </div>
          </Link>

          <Link href="/systems/project-delivery">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Project Delivery System</h3>
              <p className="text-gray-600 text-sm">The complete system for delivering on time, every time.</p>
            </div>
          </Link>

          <Link href="/sales/getting-clients">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Getting Clients</h3>
              <p className="text-gray-600 text-sm">These tools help you deliver what you sell.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Don't Upgrade Too Early</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade under £5k/month revenue.</strong> Free tools still work. You don't have enough complexity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't "try" all three casually.</strong> Either commit fully or stay on free. Using them half-heartedly won't help.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade if you haven't hit a trigger.</strong> If deadlines aren't being missed and time isn't being wasted, free is fine.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip Sunsama.</strong> Of the three, Sunsama gives the fastest ROI because it reveals hidden time waste.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: Staggered Upgrade Strategy</h3>
          <p className="text-gray-700 mb-3">
            If budget is tight, upgrade in this order (each solves one problem):
          </p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>— Week 1: Notion Plus (£8/month) - prevents scope creep and deadline misses</li>
            <li>— Week 2: Sunsama (£12/month) - reveals 5 hours/week waste immediately</li>
            <li>— Week 3: Trello Premium (£10/month) - organize 20+ projects visually</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Even staggered, you'll see ROI within the first month. The tools compound.
          </p>
        </div>
      </div>
    </main>
  );
}
