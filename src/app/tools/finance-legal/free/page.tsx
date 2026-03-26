import Link from 'next/link';

export const metadata = {
  title: 'Free Finance & Legal: £0/Month to £5k/Month | OneFoundr',
  description: 'Wave, Google Sheets, free templates. Invoice, track, stay legal. All free. Guide for solopreneurs managing money without hiring help.',
  openGraph: {
    title: 'Free Finance & Legal: £0/Month to £5k/Month',
    description: 'DIY accounting, invoicing, and legal basics for bootstrapped founders. Wave free + Sheets + templates = £0/month.',
  },
};

export default function FreeFinanceLegalPage() {
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
              Free Finance & Legal: £0/Month to £5k/Month
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Wave, Google Sheets, free templates. Invoice, track, stay legal. All free.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-8">
            <p className="text-green-900 font-semibold mb-2">
              "I paid someone £200/month to do my accounting before I had any revenue. That's £2,400/year. Switched to Wave free. Did it myself in 1 hour/week. That money was better spent on ads."
            </p>
            <p className="text-sm text-green-800">
              This page shows you everything you need to invoice, track money, and stay legal—without hiring help or paying fees.
            </p>
          </div>
        </section>
      </div>

      {/* THE FINANCE MYTH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Traditional Help Doesn't Work for Starters</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <p className="text-gray-700 mb-8 text-lg">
              When you're starting out, hiring help to manage money creates more problems than it solves:
            </p>

            <div className="space-y-8">
              {/* Problem 1 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 1: Reports After the Fact</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-3">
                    You get a P&L statement at the end of the month. By then, you've already overspent. You're out of cash. You need to know cash flow <strong>today</strong>, not next week.
                  </p>
                  <p className="text-gray-700">
                    Wave shows you live. You invoice. Money appears. You spend. It's updated instantly.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 2: The Cost Math</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-3">
                    £200/month × 12 = £2,400/year.
                  </p>
                  <p className="text-gray-700 mb-3">
                    At your current rates, that's equivalent to ~48 billable hours. You could spend 52 hours/year managing your own money and still be ahead.
                  </p>
                  <p className="text-gray-700">
                    At 1 hour/week, you're at 52 hours/year. You're breaking even. But you own the data and understand your business.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 3: Complexity You Don't Understand</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-3">
                    They send you a P&L. It has numbers. You don't understand it. You ask for a summary. They send more numbers.
                  </p>
                  <p className="text-gray-700">
                    Wave is simple. Invoice in = Income. Receipt in = Expense. Net = Profit. You understand it because you built it.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 4: Time Tax</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-3">
                    They need info from you. You send expense receipts. They ask for clarification. You spend 1 hour explaining. They spend 30 minutes working. You pay £50/hour.
                  </p>
                  <p className="text-gray-700">
                    Self-service: You spend 1 hour/week. Done. No back-and-forth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <p className="text-lg font-bold text-gray-900 mb-4">The Solo Rule:</p>
              <p className="text-gray-700 text-lg">
                If you're paying someone before you're making £10k/month, you're paying for complexity you don't have yet. Do it yourself in 1 hour/week. Reinvest that money in marketing.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example: The Startup Founder</p>
              <p className="text-gray-700 mb-4">
                "I hired an accountant at month 1. Paid £200/month. Sent invoices. Accountant sent P&L I didn't understand. I had no idea if I was making money or losing it. Ran out of cash at month 4. Switched to Wave. In 1 week, I knew exactly what was happening. I was profitable—I just didn't know it."
              </p>
              <p className="text-gray-600 text-sm font-semibold">
                Wasted: £800 + 4 hours of confusion
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <p className="text-lg font-bold text-gray-900 mb-3">Real Example: Tom's DIY System</p>
              <p className="text-gray-700 mb-4">
                "I use Wave free. Google Sheets to forecast. 1 invoice template. Every week I spend 1 hour: log invoices, log expenses, update forecast. I know my cash flow. I know my monthly profit. I save 20% of income for taxes. Total cost: £0. Total time: 1 hour/week. I've done this for 2 years. Never run out of cash."
              </p>
              <p className="text-gray-600 text-sm font-semibold">
                Saved: £4,800/year. Full understanding: Priceless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE FREE FINANCE STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">The Free Finance Stack</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            Three free tools. Together they give you everything: invoicing, expense tracking, and cash flow visibility.
          </p>
        </div>

        {/* WAVE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Wave</h3>
            <div className="text-xl font-bold text-green-600">Free Forever</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Invoicing + accounting software. You create invoices. Send them. Track payments. Log expenses. Get P&L report. All in one place.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">The Limits:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Unlimited invoices (no cap)</li>
                <li>— 1 user (just you)</li>
                <li>— Basic reports (P&L, balance sheet)</li>
                <li>— No team features (you solo anyway)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why It Works for Solos:</p>
              <p className="text-gray-700">
                It's built for small business. No bloat. Fast invoicing. Live reporting. You send an invoice, it shows up in your dashboard instantly.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Invoicing</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Project done</li>
                <li>2. Open Wave</li>
                <li>3. Click "New Invoice"</li>
                <li>4. Add client name, items, amount (2 minutes total)</li>
                <li>5. Click "Send" → email to client automatically</li>
                <li>6. Wave tracks: sent, viewed, paid</li>
                <li>7. Auto-reminder when payment due</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Expense Tracking</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Buy something for business (tools, ads, course)</li>
                <li>2. Take screenshot of receipt</li>
                <li>3. Open Wave & click "New Expense"</li>
                <li>4. Upload receipt</li>
                <li>5. Enter amount, category (advertising, software, etc.)</li>
                <li>6. Done. Wave logs it. P&L updated.</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
            <p className="text-yellow-800">If you're sending 10+ invoices/month, Wave is enough. The learning curve is 20 minutes.</p>
          </div>
        </div>

        {/* GOOGLE SHEETS */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Google Sheets</h3>
            <div className="text-xl font-bold text-green-600">Free Forever</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Spreadsheet. You create custom tabs for income, expenses, cash flow, tax savings. Wave gives you historical reports. Sheets gives you forecasts and custom tracking.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">The Limits:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Unlimited storage (15GB free Google account)</li>
                <li>— No limits (you're the designer)</li>
                <li>— Simple formulas only (SUM, IF, etc.)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why It Matters:</p>
              <p className="text-gray-700 mb-4">
                Wave is historical. Sheets is forward-looking. You can forecast cash flow next month. You can track tax savings (20% of income). You understand your business better.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
              <p className="font-bold text-gray-900 mb-4">What Your Sheet Should Include:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Tab 1: Income</p>
                  <p className="text-gray-700 text-sm ml-4">
                    Date | Client | Project | Amount | Status (sent/paid) | Invoice #
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tab 2: Expenses</p>
                  <p className="text-gray-700 text-sm ml-4">
                    Date | Category (Software, Ads, Course) | Vendor | Amount | Receipt (Y/N)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tab 3: Cash Flow Forecast</p>
                  <p className="text-gray-700 text-sm ml-4">
                    Month | Expected Income | Expected Expenses | Net Cash | Runway
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tab 4: Tax Savings</p>
                  <p className="text-gray-700 text-sm ml-4">
                    Month | Income | 20% Tax Amount | Transferred to Savings | Saved (Y/N)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Weekly Finance Check</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Every Friday at 5pm: Open Sheet</li>
                <li>2. Log this week's invoices in "Income" tab</li>
                <li>3. Log receipts in "Expenses" tab</li>
                <li>4. Update cash flow forecast (next 30 days)</li>
                <li>5. Calculate tax due (20% of received income)</li>
                <li>6. Transfer tax to savings account</li>
                <li>7. Done in 15 minutes. You understand your business.</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
            <p className="text-yellow-800">If you can't forecast cash flow in Sheets, you don't understand your business. This is the most important tool—more important than Wave.</p>
          </div>
        </div>

        {/* INVOICE TEMPLATE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Professional Invoice Template</h3>
            <div className="text-xl font-bold text-green-600">Free</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Google Docs template. You create once. Duplicate for each invoice. Fill in client name, items, amount. Send as PDF. Professional. Takes 2 minutes.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What to Include:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Your business name & logo</li>
                <li>— Your email & phone</li>
                <li>— Invoice number (AUTO-INCREMENT: 001, 002, 003)</li>
                <li>— Date (auto-fill today)</li>
                <li>— Client name & email</li>
                <li>— Line items table (Description | Qty | Rate | Amount)</li>
                <li>— Subtotal, tax (if required), total</li>
                <li>— Payment terms (e.g., "Due upon receipt" or "Due in 30 days")</li>
                <li>— Payment method (bank transfer, Stripe, PayPal)</li>
                <li>— Notes section (optional extra info)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-4">Invoice Template Structure:</p>
              <div className="font-mono text-sm text-gray-700 space-y-2 bg-white p-4 rounded border border-gray-300">
                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p>YOUR BUSINESS NAME</p>
                <p>your.email@example.com | +44 123 456</p>
                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p></p>
                <p>INVOICE</p>
                <p>Invoice #: 001</p>
                <p>Date: 26 March 2026</p>
                <p>Due: 26 March 2026</p>
                <p></p>
                <p>BILL TO:</p>
                <p>Client Name</p>
                <p>client@company.com</p>
                <p></p>
                <p>SERVICES:</p>
                <p>Description | Qty | Rate | Amount</p>
                <p>Web Design | 1 | £2,000 | £2,000</p>
                <p></p>
                <p>TOTAL: £2,000</p>
                <p></p>
                <p>Payment Terms: Due upon receipt</p>
                <p>Payment: Bank Transfer</p>
                <p></p>
                <p>Thank you for your business.</p>
                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Create Invoice</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Open Google Docs</li>
                <li>2. Open your invoice template</li>
                <li>3. Click "File" → "Make a copy"</li>
                <li>4. Rename: "Invoice_001_ClientName"</li>
                <li>5. Fill in client name, items, amount</li>
                <li>6. Click "Share" → select client email</li>
                <li>7. Or download as PDF and email</li>
                <li>8. Total time: 2 minutes</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Solo Rule:</p>
            <p className="text-yellow-800">If you're creating invoices from scratch every time, you're wasting 10 minutes per invoice. Create template once. Use forever.</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Total Free Finance Stack</h3>
          <div className="flex flex-col gap-3 mb-4 p-4 bg-white rounded border border-green-200">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Wave (Invoicing & Accounting)</p>
                <p className="text-gray-600 text-sm">Free forever</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Google Sheets (Forecasting & Tax)</p>
                <p className="text-gray-600 text-sm">Free forever</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Invoice Template (Professional)</p>
                <p className="text-gray-600 text-sm">Free forever</p>
              </div>
            </div>
            <div className="border-t border-green-300 pt-3 flex justify-between">
              <p className="font-bold text-green-900 text-lg">Total Monthly Cost</p>
              <p className="font-bold text-green-900 text-lg">£0</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Your only cost: 1 hour/week to manage it. That's 52 hours/year. At £100/hour, equivalent to £5,200/year value. You're making money.
          </p>
        </div>
      </div>

      {/* THE FREE LEGAL BASICS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Legal Without Lawyers</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <p className="text-gray-700 mb-8 text-lg">
              You don't need a lawyer to start. Most solopreneurs over-prepare legally and waste money. Here's what actually matters for your first 10 clients:
            </p>

            <div className="space-y-8">
              {/* Business Registration */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Registration</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Sole Trader (Recommended):</p>
                      <p className="text-gray-700">
                        Go to gov.uk. Register as sole trader. Free. Takes 10 minutes. You report income to tax office. You pay tax. Done.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Limited Company (Not Yet):</p>
                      <p className="text-gray-700">
                        Costs £30-50. More admin. Only do this when you're above £50k/year revenue. For first £5k-50k/month, sole trader is simpler.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Why Sole Trader:</p>
                      <p className="text-gray-700">
                        Minimal paperwork. Minimal cost. You just report your income. The tax office doesn't care about your structure until you're making real money.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm font-bold text-blue-900">Steps:</p>
                  <ol className="text-blue-800 text-sm space-y-1 ml-4">
                    <li>1. Go to gov.uk/register-for-self-assessment</li>
                    <li>2. Enter your National Insurance number</li>
                    <li>3. Answer business questions</li>
                    <li>4. Done. You're a registered sole trader.</li>
                  </ol>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What They Are:</p>
                      <p className="text-gray-700">
                        Rules between you and client. "Here's what I'll do, here's what you'll pay, here's when it's due, here's what happens if you don't pay."
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">How to Get Them:</p>
                      <p className="text-gray-700 mb-2">
                        Use a free template. Search "freelance terms and conditions template UK". Customize with your business name and payment terms.
                      </p>
                      <p className="text-gray-700">
                        Or create in Google Docs. Include: scope of work, payment terms, revision policy, timeline, confidentiality.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Where to Use:</p>
                      <p className="text-gray-700">
                        Attach to invoice email. Or add to proposal document. Make it clear to client before they hire you.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What to Include:</p>
                      <ul className="text-gray-700 space-y-1 ml-4">
                        <li>— Scope of work (what you'll deliver)</li>
                        <li>— Payment terms (£X, due when?)</li>
                        <li>— Revisions (how many? when do you stop?)</li>
                        <li>— Timeline (when will it be done?)</li>
                        <li>— Confidentiality (keep each other's secrets)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* GDPR Compliance */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GDPR Data Protection</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What It Is:</p>
                      <p className="text-gray-700">
                        Data protection law. If you ask clients for contact info, emails, or payment details, you need to tell them what you do with it.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Do You Need to Register?</p>
                      <ul className="text-gray-700 space-y-1 ml-4">
                        <li>— If you process data: costs £40/year</li>
                        <li>— If you just receive emails: probably not required</li>
                        <li>— If you store nothing sensitive: minimal</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What to Do (Free):</p>
                      <p className="text-gray-700 mb-2">
                        Add privacy policy to website. Use free ICO template at ico.org.uk. Says: "We ask for your email. We use it for this project only. We don't sell it or share it."
                      </p>
                      <p className="text-gray-700">
                        That's 90% of GDPR compliance for solos. Leave it at that.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Indemnity Insurance</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">When You Need It:</p>
                      <p className="text-gray-700">
                        Only if a client demands it. Usually not required until you're doing £10k+/month work.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">Cost:</p>
                      <p className="text-gray-700">
                        ~£200-400/year depending on your field.
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">What to Do:</p>
                      <p className="text-gray-700">
                        If client requires it: Add £250 to project cost to cover annual insurance. Done. Send them proof of cover.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mt-8">
              <p className="text-lg font-bold text-gray-900 mb-4">Solo Rule for Legal:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Don't hire a lawyer before you've made £10k/month</li>
                <li>— Don't spend £500 on "legal setup" for first client</li>
                <li>— Register as sole trader (free + 10 min)</li>
                <li>— Use free templates for terms and privacy</li>
                <li>— If client asks for insurance, add it to project cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 30-MINUTE SETUP GUIDE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Setup: 30 Minutes</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-gray-700 mb-8 text-lg">
            This is everything you need to invoice clients, track money, and stay legal. Takes 30 minutes one time. Then ongoing: 1 hour/week.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Register as Sole Trader (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to gov.uk/register-for-self-assessment</li>
                  <li>2. Click "Apply now"</li>
                  <li>3. Enter National Insurance number</li>
                  <li>4. Answer questions: What's your business? When did you start? What's your address?</li>
                  <li>5. Submit. You'll get confirmation number.</li>
                  <li>6. Done. You're now a registered sole trader.</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Set Up Wave Invoicing (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to waveapps.com</li>
                  <li>2. Click "Sign up free"</li>
                  <li>3. Enter email & password</li>
                  <li>4. Add business info: name, address, tax ID</li>
                  <li>5. Click "Connect bank" (optional but helpful for tracking)</li>
                  <li>6. Create first invoice template in settings</li>
                  <li>7. Test: Create sample invoice to yourself</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-green-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Create Google Sheets Finance Tracker (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-3">
                  <li>1. Go to sheets.google.com</li>
                  <li>2. Click "Create new spreadsheet"</li>
                  <li>3. Name it "Finance Tracker"</li>
                  <li>4. Create 4 tabs at bottom:
                    <ul className="text-gray-700 space-y-1 ml-4 mt-1">
                      <li>• Tab 1: "Income"</li>
                      <li>• Tab 2: "Expenses"</li>
                      <li>• Tab 3: "Cash Flow"</li>
                      <li>• Tab 4: "Tax Savings"</li>
                    </ul>
                  </li>
                  <li>5. In "Income" tab, add columns: Date | Client | Project | Amount | Status</li>
                  <li>6. In "Expenses" tab, add: Date | Category | Vendor | Amount</li>
                  <li>7. Add SUM formulas to calculate monthly totals</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-green-900 mb-2">✓ You're All Set</p>
            <p className="text-green-800">You now have: invoicing system, expense tracking, cash flow visibility, and legal registration. Everything you need.</p>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Use These Tools: 3 Core Workflows</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Project → Invoice → Payment</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Project Done</p>
                  <p className="text-gray-700">You finish delivering work to client.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Create Invoice (2 min)</p>
                  <p className="text-gray-700">Open Wave. Click "New Invoice". Enter client, items, amount. Click "Send".</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Track Payment</p>
                  <p className="text-gray-700">Wave shows you: sent, opened by client, paid. Auto-reminder after due date.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 4: Log in Sheets (1 min)</p>
                  <p className="text-gray-700">Open Google Sheets. "Income" tab. Add: date, client, amount, "sent".</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 5: Payment Arrives</p>
                  <p className="text-gray-700">Wave notifies you. Update Sheets: status = "paid". Now it counts as income.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 6: Follow Up if Late (5 min)</p>
                  <p className="text-gray-700">Payment overdue? Wave reminds you. Send friendly email. Wave can auto-send reminder.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 10 minutes per project</p>
              <p className="text-gray-700">At 4 projects/month, that's 40 minutes/month for all invoicing. Less than 1 hour/week.</p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Daily Expense Tracking</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">When: Every Day</p>
                  <p className="text-gray-700">You buy something for business (software subscription, course, ads).</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Screenshot Receipt (1 min)</p>
                  <p className="text-gray-700">Save to phone or drive. Organize by month.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Log in Wave (2 min)</p>
                  <p className="text-gray-700">Wave dashboard → "Add Expense". Upload receipt. Enter amount & category (Software, Ads, Course, etc.)</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Update Sheets (1 min)</p>
                  <p className="text-gray-700">Open Sheets. "Expenses" tab. Add: date, category, vendor, amount. Done.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Weekly: Review in Wave</p>
                  <p className="text-gray-700">Every Friday, check Wave P&L. See: total income, total expenses, net profit.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 2-3 minutes per expense</p>
              <p className="text-gray-700">If you have 10 expenses/month, that's 30 minutes. Easy.</p>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Weekly Tax Savings</h3>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">When: Every Friday Evening</p>
                  <p className="text-gray-700">You set aside time to handle money. 15 minutes total.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 1: Check Income in Wave</p>
                  <p className="text-gray-700">How much money came in this week? (Check bank or Wave dashboard)</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 2: Calculate Tax (1 min)</p>
                  <p className="text-gray-700">20% of income = tax owed to government (saved for quarterly payment).</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 3: Transfer to Savings (2 min)</p>
                  <p className="text-gray-700">Send 20% of that week's income to separate savings account. Done immediately.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Step 4: Log in Sheets (2 min)</p>
                  <p className="text-gray-700">Sheets "Tax Savings" tab. Add: week, income, 20% amount, "transferred". Done.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Quarterly: Pay Tax</p>
                  <p className="text-gray-700">Every 3 months, transfer from savings to tax account. Pay government. No surprise.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Total Time: 15 minutes/week</p>
              <p className="text-gray-700">By paying tax immediately, you'll never run out of cash for tax payments. This is the #1 issue for solos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good System ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Setup:</strong> Wave + Sheets + Invoice template</p>
                <p><strong>Time/Week:</strong> 1 hour total</p>
                <p><strong>Result:</strong> Know exactly what you've earned, spent, owe in tax</p>
                <p><strong>Cash flow:</strong> Never runs out</p>
                <p><strong>Outcome:</strong> Professional, organized, profitable</p>
              </div>
              <div className="bg-white p-4 rounded border border-green-300">
                <p className="text-sm font-bold text-green-900 mb-2">Example Real Numbers:</p>
                <ul className="text-sm text-green-800 space-y-1 ml-2">
                  <li>• Month 1: £5,000 revenue</li>
                  <li>• £1,000 expenses</li>
                  <li>• £1,000 set aside for tax</li>
                  <li>• £3,000 profit</li>
                  <li>• Quarterly tax payment: On time, no stress</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad System ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Setup:</strong> None. Just invoicing whenever</p>
                <p><strong>Time/Week:</strong> Chaotic. Unpredictable.</p>
                <p><strong>Result:</strong> No idea what you actually made</p>
                <p><strong>Cash flow:</strong> Runs out unexpectedly</p>
                <p><strong>Outcome:</strong> Stress, lost money, tax surprise</p>
              </div>
              <div className="bg-white p-4 rounded border border-red-300">
                <p className="text-sm font-bold text-red-900 mb-2">Example Disaster:</p>
                <ul className="text-sm text-red-800 space-y-1 ml-2">
                  <li>• Month 1: £5,000 revenue</li>
                  <li>• Spent: £3,000 (forgot to track)</li>
                  <li>• Realized Q2: Owe tax. No savings.</li>
                  <li>• Found money under couch</li>
                  <li>• Paid tax late. Fined £500.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mt-12">
            <p className="text-lg font-bold text-gray-900 mb-4">The Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              If you don't track, you lose. Money disappears. Tax becomes a surprise. Clients won't pay. The difference between a good year and a stressful year is 1 hour/week of tracking.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            This takes 30 minutes. One time. Then 1 hour/week forever. Do it this weekend.
          </p>

          <div className="bg-green-700 rounded-lg p-8 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Your Action Plan</p>
            <ol className="text-sm opacity-90 space-y-2 text-left max-w-xs mx-auto">
              <li>1. Today: Register as sole trader (10 min)</li>
              <li>2. Today: Set up Wave (10 min)</li>
              <li>3. Today: Create Sheets tracker (10 min)</li>
              <li>4. This week: Create invoice template in Docs</li>
              <li>5. Next week: Send first invoice using Wave</li>
              <li>6. Every Friday: 1-hour money review</li>
            </ol>
          </div>

          <div className="bg-green-700 rounded-lg p-6 inline-block">
            <p className="font-bold text-sm opacity-75 mb-2">Download: Finance Tracker Template</p>
            <p className="text-sm opacity-90">Pre-built Google Sheet with all tabs, formulas, and setup instructions ready to use.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/communication-scheduling/pro">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Communication Tools (Pro)</h3>
              <p className="text-gray-600 text-sm">Professional email, video, scheduling when you're doing £50k+/month.</p>
            </div>
          </Link>

          <Link href="/tools/finance-legal/mid-tier">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Mid-Tier Finance (Coming)</h3>
              <p className="text-gray-600 text-sm">Paid tools once you're making £5k+/month consistently.</p>
            </div>
          </Link>

          <Link href="/systems/business-operations">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Business Operations System</h3>
              <p className="text-gray-600 text-sm">Complete system for managing finance, operations, and compliance.</p>
            </div>
          </Link>

          <Link href="/offer/pricing-strategy">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Pricing Strategy</h3>
              <p className="text-gray-600 text-sm">How to price your work so invoicing actually matters.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ What NOT to Do</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't hire an accountant before £10k/month revenue.</strong> You don't have enough complexity. Save the money.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't pay £500 for "business setup".</strong> Gov.uk free registration + free templates = everything you need.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't forget to set aside tax money.</strong> This is why most solos run out of cash. Pay yourself 80%, save 20% weekly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip the Google Sheets part.</strong> Wave is great, but Sheets forecasting is what saves you from cash flow crashes.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: When to Upgrade</h3>
          <p className="text-gray-700 mb-3">
            Stay on this free system until ONE of these happens:
          </p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>— You're handling 50+ invoices/month (Wave Pro adds batch features)</li>
            <li>— You need multiple team members (Wave free = 1 user only)</li>
            <li>— You're managing £50k+/month (time to upgrade to accountancy software)</li>
            <li>— Tax gets complex (multiple income streams, VAT registered)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Till then? This system works. It's free. It's simple. It works.
          </p>
        </div>
      </div>
    </main>
  );
}