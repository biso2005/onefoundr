import Link from 'next/link';

export const metadata = {
  title: 'Free Automation: Connect Your Tools Without Coding | OneFoundr',
  description: 'Zapier free, Make free, n8n open source. Automate repetitive tasks. £0/month. For solopreneurs who want to stop doing manual work.',
  openGraph: {
    title: 'Free Automation: Connect Your Tools Without Coding',
    description: 'Zero-code automation for solos. Connect 2,000+ tools. Save 10+ hours/month. All free.',
  },
};

export default function FreeAutomationPage() {
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Free Automation: Connect Your Tools Without Coding
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Zapier free, Make free, n8n open source. Automate repetitive tasks. All free. No coding required.
            </p>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded mb-8">
            <p className="text-indigo-900 font-semibold mb-2">
              "I spent 5 hours/week manually copying email data into Sheets. Built a Zapier automation in 1 hour. Saved 5 hours/week forever. That's £500/week in freed time. Free automation is the highest ROI activity you'll ever do."
            </p>
            <p className="text-sm text-indigo-800">
              This page shows you how to automate anything. With free tools. In minutes.
            </p>
          </div>
        </section>
      </div>

      {/* THE AUTOMATION MYTH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Automation Isn't Just for Techies</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <p className="text-gray-700 mb-8 text-lg">
              Four myths stop solopreneurs from automating. None of them are true.
            </p>

            <div className="space-y-6">
              {/* Myth 1 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Myth 1: "Automation is too complex"</h3>
                <p className="text-gray-700 mb-4">
                  Reality: Zapier is point-and-click. You click "New Email" → "Create Row in Sheets". That's it. No code. No logic. If you can click a button, you can automate.
                </p>
                <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                  <p className="text-sm text-indigo-900">
                    <strong>Proof:</strong> 500,000+ solopreneurs use Zapier. Most have never written code.
                  </p>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Myth 2: "I don't have time to set up automation"</h3>
                <p className="text-gray-700 mb-4">
                  Reality: Setting up a Zap takes 10-15 minutes. You're already spending 5 hours/week doing it manually. Spend 15 minutes once. Save 260 hours/year.
                </p>
                <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                  <p className="text-sm text-indigo-900">
                    <strong>Math:</strong> 15 min (setup) ÷ 5 hours/week = Pays for itself in 3 hours. You save 257 hours that year.
                  </p>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Myth 3: "Automation will break. I'll lose data"</h3>
                <p className="text-gray-700 mb-4">
                  Reality: Zapier is 99.99% reliable. You manually copying data? You're your biggest risk. Typos. Rows skipped. Wrong columns. Automation is more reliable.
                </p>
                <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                  <p className="text-sm text-indigo-900">
                    <strong>True story:</strong> Zapier has processed 100 billion tasks. With 99.99% success. Your manual process fails at 95%.
                  </p>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Myth 4: "Free tier automation is pointless"</h3>
                <p className="text-gray-700 mb-4">
                  Reality: Zapier free gives you 100 tasks/month. That's:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4 mb-4">
                  <li>— 20 invoices (5 tasks each)</li>
                  <li>— 100 emails parsed into Sheets</li>
                  <li>— 25 form submissions to CRM</li>
                  <li>— 50 Slack notifications</li>
                  <li>— All automated. All free.</li>
                </ul>
                <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                  <p className="text-sm text-indigo-900">
                    <strong>That's worth:</strong> 10 hours/month = £1,000 in freed time. Free tier saves you £1,000/month.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded mt-8">
              <p className="font-bold text-gray-900 mb-2">The Solo Automation Rule:</p>
              <p className="text-gray-700">
                "If you do a task 3 times, automate it. If you do it 1 time but it takes 30+ minutes, automate it. If it's email-based or form-based, automate it."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ANTI/REAL EXAMPLES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 mb-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example: The Manual Martyr</p>
            <p className="text-gray-700">
              "I manually copied email addresses into Sheets every morning. Took 30 minutes. Did it for 6 months = 12 hours of my time. Then I realized: I could build a Zap. Took 30 minutes. Saved 12 hours instantly. I was dumb for waiting 6 months."
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> If you're doing it manually, you're probably wasting time. Automate it.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Real Example: Tom's Invoice Automation</p>
            <p className="text-gray-700 mb-3">
              "I automated my entire invoice workflow. Client pays in Stripe → Zap creates invoice in FreeAgent → Zap sends email confirmation. Previously I did this manually: 15 minutes per invoice. I do 20 invoices/month = 5 hours of pure busywork."
            </p>
            <p className="text-gray-700">
              "Built the automation in 45 minutes. Now it's instant. Zero time. I saved 5 hours/month. At £100/hour that's £500/month freed time. That's £6,000/year saved on something that cost me nothing to build."
            </p>
            <div className="bg-white p-4 rounded border border-green-300 mt-4">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> Automation is the highest ROI activity. Free automation is even better.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE FREE AUTOMATION STACK */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Free Automation Stack</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Three free tools. Together they handle 99% of automation tasks solopreneurs need.
            </p>
          </div>

          {/* ZAPIER */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Zapier</h3>
              <div className="text-xl font-bold text-indigo-600">FREE</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">What It Is:</p>
                <p className="text-gray-700">
                  The easiest automation tool. Connect any two apps with a Zap. No code. No API knowledge. Click → Configure → Test → Deploy.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Free Tier Limits:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>— 100 tasks/month</li>
                  <li>— 5 active Zaps (can have unlimited inactive)</li>
                  <li>— 15-minute delay between trigger and action</li>
                  <li>— Access to 2,000+ apps</li>
                  <li>— Unlimited test runs</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Best For:</p>
                <p className="text-gray-700">
                  Email automation, form processing, invoice creation, lead capture, Slack notifications, CRM updates.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-bold text-gray-900 mb-3">Popular Free Zaps:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>1. <strong>Stripe → FreeAgent:</strong> Payment received → Create invoice automatically</li>
                  <li>2. <strong>Gmail → Sheets:</strong> New email → Extract data → Save to spreadsheet</li>
                  <li>3. <strong>Google Form → Trello:</strong> Form submitted → Create Trello card</li>
                  <li>4. <strong>Calendly → Gmail:</strong> Booking confirmed → Send email</li>
                  <li>5. <strong>LinkedIn → Slack:</strong> New mention → Post to Slack channel</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-bold text-gray-900 mb-3">Solo Workflow: Use Zapier</p>
                <ol className="text-gray-700 space-y-2 ml-4">
                  <li>1. Identify a repetitive task (manual email copying, form processing, etc.)</li>
                  <li>2. Go to zapier.com → Click "Create Zap"</li>
                  <li>3. Choose trigger app (Gmail, Stripe, Form, etc.)</li>
                  <li>4. Choose action app (Sheets, Trello, CRM, etc.)</li>
                  <li>5. Configure what to trigger on + what to do</li>
                  <li>6. Test with real data</li>
                  <li>7. Turn on Zap</li>
                  <li>8. Monitor usage (stay under 100 tasks/month)</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
              <p className="text-yellow-800">If you hit the 100-task limit consistently, you're at £5k+/month revenue. Time to upgrade to Zapier Pro (£20-35/month). But don't upgrade early.</p>
            </div>
          </div>

          {/* MAKE (INTEGROMAT) */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Make (Integromat)</h3>
              <div className="text-xl font-bold text-indigo-600">FREE</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">What It Is:</p>
                <p className="text-gray-700">
                  Visual workflow builder. More powerful than Zapier. Better for complex multi-step automations. Feels more like "programming" but still no-code.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Free Tier Limits:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>— 1,000 operations/month</li>
                  <li>— 2 scenarios (workflows)</li>
                  <li>— Community support (no priority)</li>
                  <li>— 15-minute delay between runs</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Best For:</p>
                <p className="text-gray-700">
                  Complex workflows, data transformation, conditional logic ("if X, then Y"), multi-step sequences.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-bold text-gray-900 mb-3">Popular Free Scenarios:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>1. <strong>Email → Trello:</strong> Email received → Extract info → Create Trello card</li>
                  <li>2. <strong>Google Form → Notion:</strong> Form submitted → Add to Notion database → Send confirmation</li>
                  <li>3. <strong>Invoice → Slack:</strong> New invoice created → Send summary to Slack</li>
                  <li>4. <strong>Lead Form → CRM + Email:</strong> Form submitted → Add to CRM → Send email</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-bold text-gray-900 mb-3">Solo Workflow: Build a Scenario</p>
                <ol className="text-gray-700 space-y-2 ml-4">
                  <li>1. Go to make.com → Click "Create Scenario"</li>
                  <li>2. Add trigger (Gmail "Watch Emails")</li>
                  <li>3. Add action (Trello "Create Card")</li>
                  <li>4. Configure mappings (email subject → card name)</li>
                  <li>5. Test with real email</li>
                  <li>6. Turn on scenario</li>
                  <li>7. Monitor operations (1,000/month is generous)</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">When to Use Make Over Zapier:</p>
              <p className="text-yellow-800">Use Make when you need conditional logic ("If email contains 'invoice', create card in Trello. Otherwise, create in Notion"). Zapier does this but Make is better for complex workflows.</p>
            </div>
          </div>

          {/* N8N OPEN SOURCE */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">n8n Open Source</h3>
              <div className="text-xl font-bold text-indigo-600">FREE (self-hosted)</div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">What It Is:</p>
                <p className="text-gray-700">
                  Open-source automation platform. You host on your own server. No limits. Unlimited tasks. Unlimited workflows. But requires technical setup.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Free Tier Limits:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>— Unlimited workflows</li>
                  <li>— Unlimited executions</li>
                  <li>— Unlimited integrations</li>
                  <li>— Limited only by your server capacity</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Best For:</p>
                <p className="text-gray-700">
                  Unlimited volume automation, sensitive data (self-hosted = private), HIPAA compliance, complex custom workflows.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-2">Technical Requirement:</p>
                <p className="text-gray-700">
                  You need to self-host (or pay someone to). Usually on Heroku, Digital Ocean, or AWS. Setup is 30-60 minutes for technical users.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <p className="font-bold text-gray-900 mb-2">When to Use n8n:</p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>✓ You need unlimited automation (100k+/month tasks)</li>
                  <li>✓ You have sensitive data (HIPAA compliance)</li>
                  <li>✓ You're comfortable with self-hosting</li>
                  <li>✓ You want zero per-task costs</li>
                  <li>✗ You're not technical (skip this)</li>
                  <li>✗ You need support (n8n has limited free support)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
              <p className="text-sm font-bold text-yellow-900">Truth About n8n:</p>
              <p className="text-yellow-800">It's the most powerful. But 95% of solopreneurs don't need it. Zapier + Make cover 99% of use cases. Only use n8n if you're technical and have unlimited volume.</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Which Should You Start With?</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3">
                <span className="font-bold text-indigo-900">→ Most Solos:</span>
                <span>Start with Zapier. 100 tasks/month is plenty. 5 Zaps is enough for most workflows.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-indigo-900">→ Complex Workflows:</span>
                <span>Use Make for conditional logic. Better for "if X, then Y else Z" scenarios.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-indigo-900">→ Technical + Unlimited:</span>
                <span>Use n8n if you're hosting your own server and need unlimited volume.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-indigo-900">→ Recommendation:</span>
                <span><strong>Start with Zapier. Free tier is your proving ground.</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30-MINUTE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Setup: 30 Minutes</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-gray-700 mb-8 text-lg">
            Get your first three automations running in 30 minutes. No experience needed.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-indigo-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Create Your First Zapier Zap (15 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Example: Gmail → Sheets (Email to Spreadsheet)</p>
                  <ol className="text-gray-700 space-y-2 ml-4">
                    <li>1. Go to zapier.com</li>
                    <li>2. Click "Sign up free"</li>
                    <li>3. Click "Create Zap"</li>
                    <li>4. Choose Trigger App: Gmail</li>
                    <li>5. Choose Trigger: "New Email"</li>
                    <li>6. Connect your Gmail (authorize via Gmail popup)</li>
                    <li>7. Choose filter (e.g., from specific sender or with subject)</li>
                    <li>8. Click "Continue"</li>
                    <li>9. Choose Action App: Google Sheets</li>
                    <li>10. Choose Action: "Create Spreadsheet Row"</li>
                    <li>11. Connect Google Sheets (authorize)</li>
                    <li>12. Choose spreadsheet + worksheet</li>
                    <li>13. Map fields (Email Subject → Column A, From → Column B, Body → Column C)</li>
                    <li>14. Click "Test" (send yourself test email)</li>
                    <li>15. Confirm row was added</li>
                    <li>16. Click "Turn on Zap"</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-indigo-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Build Your Second Zapier Zap (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Example: Google Form → Trello (Form to Card)</p>
                  <ol className="text-gray-700 space-y-2 ml-4">
                    <li>1. Create Zap (repeat process above)</li>
                    <li>2. Trigger: Google Forms "New Response"</li>
                    <li>3. Action: Trello "Create Card"</li>
                    <li>4. Map form fields to card fields</li>
                    <li>5. Test</li>
                    <li>6. Turn on</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-indigo-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Try Make for Complex Workflow (5 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4 space-y-3">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Optional: Build a Make scenario for multi-step workflow</p>
                  <ol className="text-gray-700 space-y-2 ml-4">
                    <li>1. Go to make.com</li>
                    <li>2. Click "Sign up free"</li>
                    <li>3. Click "Create Scenario"</li>
                    <li>4. Choose trigger + actions (skip if you're happy with Zapier)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-indigo-900 mb-2">✓ Total Setup Time: 30 minutes</p>
            <p className="text-indigo-800">After 30 minutes, you have 2 Zaps running. Saving you 10+ hours/month on repetitive tasks.</p>
          </div>
        </div>
      </div>

      {/* WORKFLOW EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Real Workflow Examples: Time Saved</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Invoice Automation (Stripe → FreeAgent)</h3>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>Client pays you in Stripe (automated)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier trigger fires: "New Paid Invoice in Stripe"</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier action: Create invoice in FreeAgent (auto-populates client name, amount, date)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier action: Send email confirmation to client</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier action: Log to Sheets (for record-keeping)</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process:</strong></span>
                  <span>15 minutes per invoice</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>0 minutes (instant)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 20 invoices/month:</strong></span>
                  <span>5 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£500/month freed time</span>
                </div>
              </div>
              <p className="text-sm text-green-800 mt-4 font-semibold">
                Automation setup: 30 min. Time saved: 5 hours/month. That's 10x ROI on setup time.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-4">
              <p className="font-bold text-gray-900 mb-2">Tasks Used: 3/100</p>
              <p className="text-sm text-gray-600">Stripe event (1 task) → Create FreeAgent invoice (1 task) → Send email (1 task) = 3 tasks total per invoice. At 20 invoices = 60 tasks/month. Plenty of free quota left.</p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Lead Management (Form → CRM + Email + Trello)</h3>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>Start: New form submission (Google Form or Typeform)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier adds lead to Trello (create card in "New Leads" list)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier sends email to you (lead notification)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier adds to CRM (Typeform → HubSpot or Notion CRM)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier creates Calendly booking link in card</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process:</strong></span>
                  <span>10 minutes per lead</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>30 seconds (you open notification)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 30 leads/month:</strong></span>
                  <span>4.5 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£450/month freed</span>
                </div>
              </div>
              <p className="text-sm text-green-800 mt-4 font-semibold">
                Lead management automation = 4+ hours/month saved, better lead tracking, no manual entry errors.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-4">
              <p className="font-bold text-gray-900 mb-2">Tasks Used: 5/100</p>
              <p className="text-sm text-gray-600">Form submission (1) → Trello card (1) → Email to you (1) → CRM update (1) → Create calendar link (1) = 5 tasks per lead. At 30 leads = 150 tasks. This exceeds free quota. Upgrade needed at this volume.</p>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Content Distribution (LinkedIn → Twitter + Notion Log)</h3>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
              <p className="font-bold text-gray-900 mb-4">The Process:</p>
              <div className="space-y-3 text-gray-700 ml-4">
                <div className="flex gap-2">
                  <span className="font-bold">Step 1:</span>
                  <span>Start: You post content on LinkedIn</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 2:</span>
                  <span>Zapier trigger: "New LinkedIn post by you"</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 3:</span>
                  <span>Zapier action: Copy post to Twitter</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 4:</span>
                  <span>Zapier action: Add to Notion content log</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Step 5:</span>
                  <span>Zapier action: Send summary email (for backup)</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-3">Time Comparison:</p>
              <div className="space-y-2 text-gray-700 ml-4">
                <div className="flex justify-between">
                  <span><strong>Manual process:</strong></span>
                  <span>20 minutes per post</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Automated process:</strong></span>
                  <span>0 minutes (fire and forget)</span>
                </div>
                <div className="flex justify-between border-t border-green-300 pt-2">
                  <span><strong>At 5 posts/week:</strong></span>
                  <span>6 hours saved/month</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>At £100/hour:</strong></span>
                  <span>£600/month freed</span>
                </div>
              </div>
              <p className="text-sm text-green-800 mt-4 font-semibold">
                Content distribution automation = 6+ hours/month saved, consistent multi-platform presence, automated documentation.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-4">
              <p className="font-bold text-gray-900 mb-2">Tasks Used: 4/100</p>
              <p className="text-sm text-gray-600">LinkedIn post (1) → Twitter (1) → Notion log (1) → Email backup (1) = 4 tasks per post. At 5 posts/week = 20 posts/month = 80 tasks. Well within free quota.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIMIT AWARENESS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Free Tier Limits: Know Your Boundaries</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            Free tiers are powerful. But they have limits. Know them before you hit them.
          </p>

          <div className="space-y-6">
            {/* Zapier Limits */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Zapier Free Tier Limits</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Tasks/month:</strong></span>
                  <span className="font-bold text-indigo-600">100 tasks</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Active Zaps:</strong></span>
                  <span className="font-bold text-indigo-600">5 Zaps (unlimited inactive)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Execution delay:</strong></span>
                  <span className="font-bold text-indigo-600">15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>App integrations:</strong></span>
                  <span className="font-bold text-indigo-600">2,000+ apps</span>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded border border-indigo-200 mt-4">
                <p className="font-bold text-indigo-900 mb-2">When is 100 tasks NOT enough?</p>
                <ul className="text-indigo-800 space-y-1 ml-4 text-sm">
                  <li>— 30+ leads/month (5 tasks each = 150+ tasks)</li>
                  <li>— 15+ invoices + other automations (20 tasks total)</li>
                  <li>— 100+ daily emails being processed</li>
                  <li>— You're doing 10+ different Zaps heavily</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                <p className="font-bold text-yellow-900 mb-2">When to Upgrade:</p>
                <p className="text-yellow-800 text-sm">If you consistently hit 100 tasks/month, upgrade to Zapier Pro (£20-35/month). But don't upgrade early. Free tier is your proving ground.</p>
              </div>
            </div>

            {/* Make Limits */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Make Free Tier Limits</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Operations/month:</strong></span>
                  <span className="font-bold text-indigo-600">1,000 operations</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Scenarios:</strong></span>
                  <span className="font-bold text-indigo-600">2 active scenarios</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Execution delay:</strong></span>
                  <span className="font-bold text-indigo-600">15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Support:</strong></span>
                  <span className="font-bold text-indigo-600">Community (no priority)</span>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm">
                1,000 operations is more generous than Zapier's 100 tasks. Make is good if you're hitting Zapier limits.
              </p>
            </div>

            {/* n8n Limits */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">n8n Open Source (Self-Hosted)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span><strong>Workflows:</strong></span>
                  <span className="font-bold text-indigo-600">UNLIMITED</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Executions:</strong></span>
                  <span className="font-bold text-indigo-600">UNLIMITED</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Cost:</strong></span>
                  <span className="font-bold text-indigo-600">FREE (hosting cost varies)</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Constraint:</strong></span>
                  <span className="font-bold text-indigo-600">Your server capacity</span>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm">
                No limits except your hosting. But requires technical setup. Only if you're hitting 1,000+/month.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Solo Automation Rule</h3>
            <p className="text-gray-700 mb-4">
              Free tier limits are GOOD. They force you to prioritize. Don't automate everything. Automate the high-impact tasks first.
            </p>
            <div className="space-y-2 text-gray-700 ml-4">
              <div className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>Automate tasks that save 30+ min/week first</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Automate repetitive tasks (runs 20+ times/month)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>Then automate nice-to-have tasks (if budget/quota allows)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">4.</span>
                <span>Monitor quota. Don't let it surprise you.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANTI-EXAMPLE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What NOT to Do</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example: The Over-Zealous Automator</p>
            <p className="text-gray-700 mb-4">
              "I got excited and built 20 Zaps on free tier. Thought I was a genius. Hit 100 tasks in the first 10 days. Automation shut off. Lost 5 hours waiting for manual work to return. Should've monitored quota."
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300">
              <p className="text-sm text-gray-600">
                <strong>Lesson:</strong> Monitor your usage. Don't build everything at once. Test. Deploy one automation. Verify it works. Then build the next one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">ready to automate?</h2>
          <p className="text-lg opacity-90 mb-8">
            Stop doing repetitive work. Build your first Zap.
          </p>
          <ul className="text-left max-w-md mx-auto mb-12 space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You do a task 3+ times/week</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>It involves copying data between tools</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>It takes 15+ minutes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You want to reclaim your time</span>
            </li>
          </ul>
          <p className="text-lg opacity-90 mb-8">
            If 2+: Start now. Free. 15 minutes to build your first Zap.
          </p>

          <div className="bg-indigo-700 rounded-lg p-8 inline-block">
            <p className="font-bold text-sm opacity-75 mb-2">Next Step: Build Your First Zap</p>
            <p className="text-sm opacity-90">Go to zapier.com. Click "Create Zap". Choose trigger. Choose action. Test. Deploy. Save 10+ hours/month starting today.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/finance-legal/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pro Finance Tools</h3>
              <p className="text-gray-600 text-sm">Pair automation with Xero for invoice-to-payment workflows.</p>
            </div>
          </Link>

          <Link href="/systems/knowledge-systems">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">SOP Automation System</h3>
              <p className="text-gray-600 text-sm">Document your processes before you automate them.</p>
            </div>
          </Link>

          <Link href="/marketing/lead-flow">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Lead Flow Automation</h3>
              <p className="text-gray-600 text-sm">Automate lead capture, CRM entry, and email sequences.</p>
            </div>
          </Link>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Coming Next</h3>
            <p className="text-gray-600 text-sm">Mid-tier automation tools (Make Pro, Zapier Premium). When free tier limits aren't enough.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ What NOT to Do</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't automate low-impact tasks first.</strong> Prioritize tasks saving 30+ min/week.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't build 20 Zaps at once.</strong> You'll hit quota limits before you optimize.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't ignore quota.</strong> Monitor your usage. Don't get surprised at month-end.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip testing.</strong> Test each Zap with real data before turning on.</span>
            </li>
          </ul>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tips for Automation Success</h3>
          <ol className="text-gray-700 space-y-3 ml-4">
            <li><strong>1. Document your process first.</strong> Know exactly what you do manually before automating.</li>
            <li><strong>2. Start with email automation.</strong> 80% of automation is email-based. Gmail + Sheets is your gateway.</li>
            <li><strong>3. Use collections for common workflows.</strong> Zapier has pre-built templates. Use them as a starting point.</li>
            <li><strong>4. Monitor tasks weekly.</strong> Check your usage every Friday. Don't let quota sneak up on you.</li>
            <li><strong>5. Upgrade strategically.</strong> Only upgrade when free tier is consistently insufficient. Not before.</li>
          </ol>
        </div>
      </div>
    </main>
  );
}