import Link from 'next/link';

export const metadata = {
  title: 'Mid-Tier Finance: When Spreadsheets Cost You Money | OneFoundr',
  description: 'FreeAgent, Stripe, legal templates. £35/month. Automation for £5k+/month solos. Upgrade triggers and ROI calculations.',
  openGraph: {
    title: 'Mid-Tier Finance: When Spreadsheets Cost You Money',
    description: 'Paid finance tools for automation. Saves 5+ hours/month. ROI-focused upgrade decision for scaling solos.',
  },
};

export default function MidTierFinancePage() {
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
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Mid-Tier Finance: When Spreadsheets Cost You Money
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              FreeAgent, Stripe, legal templates. £35/month. Pays for itself when you miss one invoice or tax deadline.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-8">
            <p className="text-green-900 font-semibold mb-2">
              "I missed a £2,000 invoice because I forgot to follow up. Lost the money. Upgraded to FreeAgent (£30/month). Automated reminders. Never missed again. That's 67x ROI on a single mistake."
            </p>
            <p className="text-sm text-green-800">
              This page shows you exactly when to stop managing finance manually and start automating it.
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
              You're making £5k+/month. Free tools work but they cost you time. Here are the four triggers that matter:
            </p>

            <div className="space-y-8">
              {/* Trigger 1 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-green-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Forget Invoices</h3>
                    <p className="text-gray-700 mb-4">
                      You finish a project. Google Sheets doesn't remind you. 3 days pass. You remember. By then the invoice is overdue.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">Forgotten invoices = unpaid money = cash flow crisis</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Revenue Impact:</p>
                          <p className="text-gray-700 text-lg">1 forgotten invoice = £1,000 lost</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">FreeAgent = Automatic invoice reminders. Client gets reminded. You get reminded. Invoice gets paid.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £1,000 ÷ £360/year = <span className="text-2xl">2.7x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 2 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-green-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Spend Hours Creating Invoices</h3>
                    <p className="text-gray-700 mb-4">
                      Each invoice takes 30 minutes. You create 5 invoices/month. That's 2.5 hours/month = £250/month of your time.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">Invoice creation is busywork. It doesn't generate revenue.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Time Cost:</p>
                          <div className="text-gray-700">
                            <p>5 invoices/month × 30 min = 2.5 hours</p>
                            <p>2.5 hours × £100/hour = £250/month</p>
                            <p><strong>£250 × 12 = £3,000/year wasted</strong></p>
                          </div>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">FreeAgent = Create invoice in 2 min. Auto-send. Auto-track. Never manually build another invoice.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £3,000 ÷ £360 = <span className="text-2xl">8.3x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 3 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-green-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Tax Season is a Nightmare</h3>
                    <p className="text-gray-700 mb-4">
                      Your spreadsheet doesn't categorize expenses. Tax season = you spend 2 full days digging through receipts.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">No automatic categorization = hours digging through receipts</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Annual Cost:</p>
                          <div className="text-gray-700">
                            <p>2 days × 8 hours = 16 hours/year</p>
                            <p>16 hours × £100/hour = £1,600/year</p>
                          </div>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">FreeAgent = Automatic categorization. Tax season = 30 minutes. Done.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £1,600 ÷ £360 = <span className="text-2xl">4.4x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 4 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-green-600 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Clients Want to Pay by Card</h3>
                    <p className="text-gray-700 mb-4">
                      You accept bank transfer only. A client wants to pay by card. You say no. They find another provider.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Problem:</p>
                          <p className="text-gray-700">Limited payment options = lost clients</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Revenue Impact:</p>
                          <p className="text-gray-700">1 lost client = £2,000</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Stripe = Clients pay by card. Money lands in 2 days. Better cash flow.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-green-50 p-3 rounded">
                          <p className="font-bold text-green-900">ROI: £2,000 ÷ (2.9% + 20p/tx) = <span className="text-2xl">34x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700">
              If any ONE of these triggers has cost you money, upgrade. You'll pay off the tools in the first month.
            </p>
          </div>
        </div>
      </div>

      {/* THE MID-TIER STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Mid-Tier Finance Stack</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            Three tools. Together they automate invoicing, handle payments, and protect your business.
          </p>
        </div>

        {/* FREEAGENT */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">FreeAgent</h3>
            <div className="text-xl font-bold text-green-600">£30/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Accounting software built for freelancers. One tool for invoicing, expense tracking, tax estimates, and P&L reports.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Key Features:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Invoicing: Create invoice in 2 minutes</li>
                <li>— Auto-reminders: Client gets reminded. You get reminded.</li>
                <li>— Expense tracking: Snap receipt, upload, auto-categorized</li>
                <li>— Tax estimates: Know exactly how much you owe</li>
                <li>— P&L reports: See profit instantly</li>
                <li>— Bank sync: Import transactions automatically</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Who Needs It:</p>
              <p className="text-gray-700">
                Anyone with 5+ clients, £5k+/month income, or who wastes time on invoicing/expenses/taxes.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Invoice to Payment</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Project complete</li>
                <li>2. Open FreeAgent</li>
                <li>3. Create invoice (2 min)</li>
                <li>4. Click "Send"</li>
                <li>5. Client receives email</li>
                <li>6. Auto-reminder in 5 days (if unpaid)</li>
                <li>7. Client pays (on invoice link if using Stripe)</li>
                <li>8. FreeAgent tracks paid status</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Expense Logging</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Buy something for business (software, ads, etc.)</li>
                <li>2. Take photo of receipt</li>
                <li>3. Open FreeAgent app</li>
                <li>4. Upload receipt (2 min)</li>
                <li>5. FreeAgent auto-categorizes (software, advertising, etc.)</li>
                <li>6. Done. P&L updated.</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Time Saved:</p>
            <p className="text-yellow-800">5+ hours/month vs spreadsheets. At £100/hour = £500/month value.</p>
          </div>
        </div>

        {/* STRIPE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Stripe</h3>
            <div className="text-xl font-bold text-green-600">2.9% + 20p per transaction</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Payment processor. Lets clients pay you by card (debit, credit, Apple Pay, Google Pay) instead of just bank transfer.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Key Features:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Accept cards: Visa, Mastercard, Amex, Apple Pay, Google Pay</li>
                <li>— Fast deposit: Money lands in 2 days (vs 3-5 for bank transfer)</li>
                <li>— Invoice payment link: Client clicks link on invoice, pays by card</li>
                <li>— Automatic reconciliation: Integrates with FreeAgent</li>
                <li>— Security: PCI DSS certified, secure</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Cost Calculation:</p>
              <div className="text-gray-700 ml-4">
                <p>£1,000 invoice × 2.9% = £29 fee</p>
                <p>Plus: £0.20 per transaction</p>
                <p><strong>You receive: £970.80</strong></p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-4">Why the Fee is Worth It:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Clients who want cards will hire you (vs competitor)</li>
                <li>— Money arrives in 2 days (vs 5+ for bank transfer)</li>
                <li>— Better cash flow = bigger runway</li>
                <li>— Bigger runway = can take more strategic projects</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Payment Speed Benefit:</p>
            <p className="text-yellow-800">2-day deposits vs 5-day bank transfer = 3 extra days of cash. At 10 invoices/month, huge advantage.</p>
          </div>
        </div>

        {/* LEGAL TEMPLATES */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Legal Templates</h3>
            <div className="text-xl font-bold text-green-600">£5-20/template</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What They Are:</p>
              <p className="text-gray-700">
                Professional, lawyer-drafted templates for contracts, terms & conditions, and service agreements.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Service agreement template</li>
                <li>— Liability waiver</li>
                <li>— Confidentiality agreement</li>
                <li>— Terms & conditions</li>
                <li>— All customizable for your business</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why They Matter:</p>
              <p className="text-gray-700 mb-4">
                Protects £5k+ deals. If a client disputes, you have legal documentation. Costs £20 to protect £5,000 deal = 250x ROI if preventing a single dispute.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-2">Where to Get Them:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Lawbite (UK-specific, £5-15/template)</li>
                <li>— Rocket Lawyer (£10-20/template)</li>
                <li>— Termly (custom for your business)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">One-Time Cost, Lifetime Protection:</p>
            <p className="text-yellow-800">£20 template protects unlimited deals. After 3 large projects, you've recovered the cost.</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Total Mid-Tier Stack</h3>
          <div className="flex flex-col gap-3 mb-4 p-4 bg-white rounded border border-green-200">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">FreeAgent (Invoicing & Accounting)</p>
                <p className="text-gray-600 text-sm">£30/month</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Stripe (Payment Processing)</p>
                <p className="text-gray-600 text-sm">2.9% + 20p per transaction</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Legal Templates (one-time)</p>
                <p className="text-gray-600 text-sm">£5-20/template</p>
              </div>
            </div>
            <div className="border-t border-green-300 pt-3 flex justify-between">
              <p className="font-bold text-green-900 text-lg">Monthly Base Cost</p>
              <p className="font-bold text-green-900 text-lg">£30+</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Plus transaction fees (only when you get paid). Total break-even at 5 invoices/month with card payments.
          </p>
        </div>
      </div>

      {/* ROI CALCULATIONS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">ROI Scenarios: Is It Worth It?</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Three scenarios. Calculate which applies to you:
            </p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <p className="font-bold text-green-900 mb-4">Scenario 1: You Save 5 Hours/Month</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Hours saved per month:</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your hourly rate:</span>
                    <span className="font-bold">£100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly value:</span>
                    <span className="font-bold">£500</span>
                  </div>
                  <div className="border-t border-green-300 pt-3 flex justify-between">
                    <span className="font-bold">FreeAgent cost:</span>
                    <span className="font-bold">£30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Monthly ROI:</span>
                    <span className="font-bold text-green-900 text-xl">16.6x</span>
                  </div>
                </div>
                <p className="text-sm text-green-800">
                  FreeAgent pays for itself in 2 hours of saved work.
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <p className="font-bold text-blue-900 mb-4">Scenario 2: You Accept Card Payments</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Average invoice value:</span>
                    <span className="font-bold">£1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Invoices/month that come by card:</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stripe fee per invoice:</span>
                    <span className="font-bold">£29 + £0.20</span>
                  </div>
                  <div className="border-t border-blue-300 pt-3 flex justify-between">
                    <span className="font-bold">Total fees/month:</span>
                    <span className="font-bold">~£147</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Benefit:</span>
                    <span className="font-bold text-blue-900">Clients can pay by card (vs turning them away)</span>
                  </div>
                </div>
                <p className="text-sm text-blue-800">
                  Cost is 2.9%. Benefit is retaining clients who demand card payment.
                </p>
              </div>

              {/* Scenario 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                <p className="font-bold text-purple-900 mb-4">Scenario 3: Prevent 1 Missed Invoice/Year</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Value of forgotten invoice:</span>
                    <span className="font-bold">£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FreeAgent annual cost:</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="border-t border-purple-300 pt-3 flex justify-between">
                    <span className="font-bold">Annual ROI:</span>
                    <span className="font-bold text-purple-900 text-xl">555%</span>
                  </div>
                </div>
                <p className="text-sm text-purple-800">
                  One automated reminder prevents years of value loss.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-4">Break-Even Analysis</p>
            <p className="text-gray-700 mb-4">
              To break even on £30/month FreeAgent, you need ONE of:
            </p>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>— Save 20 minutes/month (at £100/hour)</li>
              <li>— Prevent 1 forgotten invoice every 2 years</li>
              <li>— Accept 1 card payment/month (faster cash flow)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 35-MINUTE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Setup: 35 Minutes</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-gray-700 mb-8 text-lg">
            This is everything you need to automate invoicing, accept card payments, and protect your work.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Set Up FreeAgent (15 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to freeagent.com</li>
                  <li>2. Click "Start 30-day free trial"</li>
                  <li>3. Enter business info (name, address, tax ID)</li>
                  <li>4. Connect bank account (optional but helps)</li>
                  <li>5. Create invoice template (click "Settings" → "Invoice Design")</li>
                  <li>6. Set up automatic payment reminders (Settings → Invoicing)</li>
                  <li>7. Test: Create sample invoice to yourself</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Set Up Stripe (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to stripe.com</li>
                  <li>2. Click "Get started"</li>
                  <li>3. Enter business info</li>
                  <li>4. Connect bank account (payout account)</li>
                  <li>5. Verify identity (photo ID + recent address)</li>
                  <li>6. Connect Stripe to FreeAgent (FreeAgent → Integrations → Add Stripe)</li>
                  <li>7. Test payment link in sample invoice</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Buy Legal Templates (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to lawbite.co.uk (or Rocket Lawyer)</li>
                  <li>2. Search "Service agreement template"</li>
                  <li>3. Buy template (£5-15)</li>
                  <li>4. Download & customize with your business name</li>
                  <li>5. Save to Google Drive</li>
                  <li>6. Add link to proposals/invoices</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-green-900 mb-2">✓ Total Setup Time: 35 minutes</p>
            <p className="text-green-800">Once done, you've automated invoicing, accepting payments, and protected £5k+ deals. Forever.</p>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Use Mid-Tier Tools: 3 Core Workflows</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Invoicing & Payment</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Project Complete</p>
                  <p className="text-gray-700">Deliver work to client.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Create Invoice in FreeAgent (2 min)</p>
                  <p className="text-gray-700">Open FreeAgent. Click "New Invoice". Add client, items, amount. Click "Send".</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Client Receives Email</p>
                  <p className="text-gray-700">Email contains invoice + Stripe payment link (clickable). Client can pay by card instantly.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 4: Payment Arrives Fast</p>
                  <p className="text-gray-700">Client pays by card. Money lands in FreeAgent + Stripe within 2 days.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 5: Auto-Reminder (No Action)</p>
                  <p className="text-gray-700">If unpaid after 5 days, FreeAgent sends auto-reminder to client + you. No manual follow-up needed.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 2 minutes + zero follow-up</p>
              <p className="text-gray-700">At 5 invoices/month, that's 10 minutes/month. Completely automated.</p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Expense Tracking & Categorization</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">When: Every day (as expenses happen)</p>
                  <p className="text-gray-700">You buy software subscription, ads, course, etc.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Snap Receipt (1 min)</p>
                  <p className="text-gray-700">Take photo on phone. Upload to FreeAgent app.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: FreeAgent Auto-Categorizes (instant)</p>
                  <p className="text-gray-700">You buy "Mailchimp subscription"? FreeAgent auto-tags as "Software". No manual work.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Tax Season = Done</p>
                  <p className="text-gray-700">Next year, click "Tax Report". Everything auto-categorized. Done in 5 minutes, not 2 days.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 1 minute per expense + 5 minutes at tax time</p>
              <p className="text-gray-700">Saves 16 hours/year on tax prep alone.</p>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Quarterly Tax Payment</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Every 3 Months: Tax Deadline</p>
                  <p className="text-gray-700">Quarter ends. Tax is due.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Open FreeAgent (2 min)</p>
                  <p className="text-gray-700">Check "Tax Dashboard". It shows EXACTLY how much you owe.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Transfer to Tax Account (3 min)</p>
                  <p className="text-gray-700">Move exact amount to separate tax account. Done.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Pay Tax on Time</p>
                  <p className="text-gray-700">Tax deadline arrives. You already have money in tax account. Zero stress.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 5 minutes per quarter</p>
              <p className="text-gray-700">Never run out of cash for taxes again.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Transitions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good Upgrade ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Revenue:</strong> £8k/month</p>
                <p><strong>Pain Point:</strong> Forgotten invoices, 3 hours/week on accounting</p>
                <p><strong>Upgrade:</strong> All three (FreeAgent + Stripe + Templates)</p>
                <p><strong>Result:</strong> Saves 5 hours/week, never misses invoice, accepts cards</p>
                <p><strong>ROI:</strong> Pays for itself in 3 days</p>
              </div>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm font-bold text-green-900 mb-2">Monthly Impact:</p>
                <ul className="text-sm text-green-800 space-y-1 ml-2">
                  <li>• 5 hours saved × £100 = £500 value</li>
                  <li>• 0 forgotten invoices</li>
                  <li>• £150 faster cash (Stripe deposits)</li>
                  <li>• Protected from disputes</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad Upgrade ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Revenue:</strong> £3k/month</p>
                <p><strong>Pain Point:</strong> "I want professional tools"</p>
                <p><strong>Upgrade:</strong> All three anyway</p>
                <p><strong>Result:</strong> Doesn't save time, pays barely anyone by card</p>
                <p><strong>ROI:</strong> Negative. Waste of money.</p>
              </div>
              <div className="bg-white p-4 rounded border border-red-300">
                <p className="text-sm font-bold text-red-900 mb-2">Monthly Problem:</p>
                <ul className="text-sm text-red-800 space-y-1 ml-2">
                  <li>• Only 2 invoices/month: no time savings</li>
                  <li>• Clients prefer bank transfer (UK)</li>
                  <li>• Stripe fees = just waste</li>
                  <li>• Overspending on tools too early</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mt-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example: The Premature Spender</p>
            <p className="text-gray-700 mb-4">
              "I was making £4k/month and thought I needed FreeAgent to look 'professional'. Paid £30/month for 6 months. Didn't save any time. Was barely using it. Finally realized I didn't need it until £8k+/month. Wasted £180."
            </p>
            <p className="text-gray-600 text-sm font-semibold">
              Lesson: Upgrade when it solves a real pain point, not when you think it looks professional.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">ready to automate?</h2>
          <p className="text-lg opacity-90 mb-8">
            Do any of these apply to you?
          </p>
          <ul className="text-left max-w-md mx-auto mb-12 space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You've forgotten an invoice in the last 3 months</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You spend 2+ hours/week on invoicing/tracking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You're making £5k+/month</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>Clients ask to pay by card</span>
            </li>
          </ul>
          <p className="text-lg opacity-90 mb-8">
            If two or more: Upgrade. You'll break even in your first month.
          </p>

          <div className="bg-green-700 rounded-lg p-8 inline-block">
            <p className="font-bold text-sm opacity-75 mb-2">Download: Mid-Tier Setup Checklist</p>
            <p className="text-sm opacity-90">35-minute checklist with all steps, links, and pro tips.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/finance-legal/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Free Tier</h3>
              <p className="text-gray-600 text-sm">Wave + Sheets + templates. Everything for £0/month until you're £5k+.</p>
            </div>
          </Link>

          <Link href="/tools/finance-legal/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pro Tier (Coming)</h3>
              <p className="text-gray-600 text-sm">Enterprise tools when you're doing £50k+/month.</p>
            </div>
          </Link>

          <Link href="/systems/business-operations">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Business Operations</h3>
              <p className="text-gray-600 text-sm">Complete system for managing finance, operations, and compliance.</p>
            </div>
          </Link>

          <Link href="/offer/pricing-strategy">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pricing Strategy</h3>
              <p className="text-gray-600 text-sm">How to price work so these tools actually matter.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ What NOT to Do</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade before you hit a real pain point.</strong> Tools are not professional status symbols.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't use FreeAgent if you're only making 1-2 invoices/month.</strong> Wave still works. Upgrade at 5+.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip Stripe just because UK clients prefer bank transfer.</strong> Credit card option = more flexibility = more clients.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't guess on legal templates.</strong> Buy lawyer-drafted ones. £20 template protects unlimited £5k+ deals.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: Migration from Free</h3>
          <p className="text-gray-700 mb-3">
            Already using Wave + Sheets? Here's the switch:
          </p>
          <ol className="text-gray-700 space-y-2 ml-4">
            <li>1. Export Wave history (for reference)</li>
            <li>2. Set up FreeAgent (15 min)</li>
            <li>3. Connect Stripe (10 min)</li>
            <li>4. Start new invoices in FreeAgent</li>
            <li>5. Keep Wave running for 1 month (backup)</li>
            <li>6. Cancel Wave after 1 month if running smoothly</li>
          </ol>
          <p className="text-gray-700 mt-4">
            Total transition time: 25 minutes. Zero data loss.
          </p>
        </div>
      </div>
    </main>
  );
}
