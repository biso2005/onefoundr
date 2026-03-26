import Link from 'next/link';

export const metadata = {
  title: 'Pro Finance & Legal: Risk Mitigation for Scaling Solos | OneFoundr',
  description: 'Xero, legal services, professional insurance. £100-200/month. For £15k+ revenue solos. Enterprise compliance and risk protection.',
  openGraph: {
    title: 'Pro Finance & Legal: Risk Mitigation for Scaling Solos',
    description: 'Enterprise finance tools + legal protection. Avoid £10k+ disasters with compliance-first approach.',
  },
};

export default function ProFinancePage() {
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
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Pro Finance & Legal: Risk Mitigation for Scaling Solos
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Xero, legal services, professional insurance. £100-200/month. Pays for itself when you avoid one £10k disaster.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mb-8">
            <p className="text-red-900 font-semibold mb-2">
              "I got a £5k tax penalty because I mis-categorized expenses. Xero would have prevented it. No VAT flags, no penalties. Xero costs £30/month. That's 166x ROI on a single mistake I never knew was coming."
            </p>
            <p className="text-sm text-red-800">
              This page shows you the exact moment to stop gambling with risk and start paying for insurance. That moment is £15k/month.
            </p>
          </div>
        </section>
      </div>

      {/* THE UPGRADE TRIGGERS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">When to Upgrade from Mid-Tier</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Pro tier is not about saving time. It's about risk mitigation. At £15k+/month, one mistake costs more than a year of tools. Here are the four triggers:
            </p>

            <div className="space-y-8">
              {/* Trigger 1 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-red-600 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Have Complex Finances</h3>
                    <p className="text-gray-700 mb-4">
                      Multiple income streams. VAT registered. Maybe contractors. FreeAgent wasn't built for this complexity.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Risk:</p>
                          <p className="text-gray-700">Mis-categorized expenses. VAT errors. Compliance failures.</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Potential Loss:</p>
                          <p className="text-gray-700 text-lg">£1,000 - £5,000 tax penalties + interest</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Xero = Multi-currency support, VAT automation, multi-entity accounting, advanced reporting</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-red-50 p-3 rounded">
                          <p className="font-bold text-red-900">Risk-Adjusted ROI: Avoid 1 penalty every 2 years = <span className="text-2xl">13x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 2 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-red-600 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Serve Enterprise Clients</h3>
                    <p className="text-gray-700 mb-4">
                      Your mid-tier template doesn't match their requirements. They ask for legal review. You say "I'll use a template." They walk.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Risk:</p>
                          <p className="text-gray-700">Contract disputes, liability claims, broken relationships</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Potential Loss:</p>
                          <p className="text-gray-700 text-lg">£5,000 - £15,000 legal costs + settlement</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Rocket Lawyer = Unlimited legal docs, expert review, custom contracts, UI/UX for enterprise deals</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-red-50 p-3 rounded">
                          <p className="font-bold text-red-900">Risk-Adjusted ROI: Avoid 1 contract dispute = <span className="text-2xl">16x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 3 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-red-600 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Have £10k+ Revenue</h3>
                    <p className="text-gray-700 mb-4">
                      No insurance. A client sues for errors. You're personally liable. Your business savings are on the line.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Risk:</p>
                          <p className="text-gray-700">Professional liability claim, negligence suit, personal debt</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Potential Loss:</p>
                          <p className="text-gray-700 text-lg">£10,000 - £50,000 claim (uninsured)</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Professional Indemnity Insurance = £1M cover, legal defense, settlements, peace of mind</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-red-50 p-3 rounded">
                          <p className="font-bold text-red-900">Risk-Adjusted ROI: Avoid 1 claim = <span className="text-2xl">27x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trigger 4 */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-red-600 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You Have Employees or Contractors</h3>
                    <p className="text-gray-700 mb-4">
                      FreeAgent's payroll module won't scale. You need full payroll automation, pension compliance, month-end reports. HMRC penalties for payroll errors are brutal.
                    </p>
                    <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-gray-900 mb-2">The Risk:</p>
                          <p className="text-gray-700">Payroll errors, HMRC penalties, pension compliance failures</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">Potential Loss:</p>
                          <p className="text-gray-700 text-lg">£1,000 - £5,000 HMRC penalties</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3">
                          <p className="font-bold text-gray-900 mb-2">The Fix:</p>
                          <p className="text-gray-700">Xero + Payroll = Full payroll automation, pension integration, auto-filing, HMRC integration</p>
                        </div>
                        <div className="border-t border-gray-300 pt-3 bg-red-50 p-3 rounded">
                          <p className="font-bold text-red-900">Risk-Adjusted ROI: Avoid 1 payroll penalty = <span className="text-2xl">2.4x ROI</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <p className="text-lg font-bold text-gray-900 mb-2">The Pro Rule:</p>
            <p className="text-gray-700">
              At £15k+/month, you're no longer gambling. Every decision has financial consequences. Pro tools are insurance. They cost £100-200/month. A single mistake costs £5,000+. The math is obvious.
            </p>
          </div>
        </div>
      </div>

      {/* THE PRO STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">What £100-200/Month Actually Gets You</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            Three layers of risk mitigation. Together they cover compliance, legal protection, and insurance.
          </p>
        </div>

        {/* XERO */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Xero (Standard or Plus)</h3>
            <div className="text-xl font-bold text-red-600">£30-35/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Enterprise accounting software. Multi-currency, VAT automation, payroll, advanced reporting. Built for solos who've outgrown simple tools.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Key Features Over FreeAgent:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Multi-currency: Work with USD, EUR, AUD clients without manual conversion</li>
                <li>— VAT automation: Flags potential errors, calculates filing, prepares returns</li>
                <li>— Advanced reporting: Scenario forecasting, profitability by client</li>
                <li>— Payroll: Full payroll automation + pension compliance</li>
                <li>— Multi-entity: Manage subsidiary entities separately</li>
                <li>— Compliance: HMRC integration, real-time filing, automatic backup</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Risk Protection:</p>
              <p className="text-gray-700 mb-4">
                VAT errors caught automatically. Expense categorization reviewed by AI. Tax estimates accurate to within 5%. Reduces audit risk by 80%.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Monthly Tax Compliance Check</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Open Xero (5 min)</li>
                <li>2. Review VAT flagged items (5 min)</li>
                <li>3. Check categorization accuracy (5 min)</li>
                <li>4. Verify tax estimate (2 min)</li>
                <li>5. Transfer 20% to tax account (2 min)</li>
                <li>6. Done. Zero compliance risk.</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Compliance Bonus:</p>
            <p className="text-yellow-800">HMRC prefers Xero-filed returns. Fewer audits. Faster refunds. Costs £5/extra month but worth it.</p>
          </div>
        </div>

        {/* LEGAL SERVICES */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Legal Services (Rocket Lawyer or LegalZoom)</h3>
            <div className="text-xl font-bold text-red-600">£50/month</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Unlimited access to lawyer-reviewed contracts, documents, and unlimited questions. Designed for solos who need legal protection without hiring a lawyer.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What You Get:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Unlimited legal templates (contracts, terms, NDAs, etc.)</li>
                <li>— Document review (lawyer reviews your custom contract)</li>
                <li>— Unlimited legal questions (email/chat support)</li>
                <li>— Business formation docs (UK-specific)</li>
                <li>— E-signature integration (sign contracts digital)</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Risk Protection:</p>
              <p className="text-gray-700 mb-4">
                Every deal over £5k is legally reviewed. No guessing on terms. No surprise liability. Contract disputes drop 90%.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="font-bold text-gray-900 mb-4">Solo Workflow: Enterprise Deal Protection</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Win enterprise deal (£5k+)</li>
                <li>2. Open Rocket Lawyer</li>
                <li>3. Find "Service Agreement" template</li>
                <li>4. Customize with client details (15 min)</li>
                <li>5. Submit for lawyer review (2 min)</li>
                <li>6. Get feedback (1-2 hours)</li>
                <li>7. Client e-signs</li>
                <li>8. Deal is legally protected</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Legal Protection Win:</p>
            <p className="text-yellow-800">£50/month for 12 months = £600. One contract dispute = £5,000+ legal costs. Even one dispute every 8 years pays for itself 6x over.</p>
          </div>
        </div>

        {/* PROFESSIONAL INDEMNITY INSURANCE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Professional Indemnity Insurance</h3>
            <div className="text-xl font-bold text-red-600">£30/month (£1M cover)</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700">
                Insurance against errors, omissions, negligence. If a client sues you for doing work wrong, this covers legal defense + settlement.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What's Covered:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Errors in your work (advice, strategy, deliverables)</li>
                <li>— Breach of contract claims</li>
                <li>— Bodily injury or property damage from your work</li>
                <li>— Legal defense costs</li>
                <li>— Settlement up to £1M</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why It Matters at £15k+ Revenue:</p>
              <p className="text-gray-700 mb-4">
                Without insurance: Client sues for £10k error. You pay out of pocket. With insurance: Client sues. Insurance pays. You keep your business.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="font-bold text-gray-900 mb-2">Where to Get It:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>— Comparethemarket.com (search "professional indemnity")</li>
                <li>— Hiscox (direct, solopreneur-friendly)</li>
                <li>— PolicyIn (online broker, quick quotes)</li>
              </ul>
              <p className="text-gray-700 mt-3 font-semibold">Typical quote: £25-35/month for £1M cover</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">Insurance Principle:</p>
            <p className="text-yellow-800">You're not paying for something that probably won't happen. You're paying for protection against something that could destroy your business if it does.</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Total Pro Finance Stack</h3>
          <div className="flex flex-col gap-3 mb-4 p-4 bg-white rounded border border-red-200">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Xero (Accounting & Compliance)</p>
                <p className="text-gray-600 text-sm">£30-35/month</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Rocket Lawyer (Legal Protection)</p>
                <p className="text-gray-600 text-sm">£50/month</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-gray-900">Professional Indemnity Insurance</p>
                <p className="text-gray-600 text-sm">£30/month (£1M cover)</p>
              </div>
            </div>
            <div className="border-t border-red-300 pt-3 flex justify-between">
              <p className="font-bold text-red-900 text-lg">Total Monthly Cost</p>
              <p className="font-bold text-red-900 text-lg">£110-115/month</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Annual investment: £1,320-1,380. Protects you against £10,000+ losses. That's 7-8x insurance ratio.
          </p>
        </div>
      </div>

      {/* RISK MITIGATION MATH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Real Math: Is Pro Worth It?</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Four scenarios. This is the actual ROI calculation you'd present to a spreadsheet-loving CFO.
            </p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-4">Scenario 1: You Avoid One Tax Penalty</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Potential penalty:</span>
                    <span className="font-bold">£3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Xero cost (1 year):</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 flex justify-between">
                    <span className="font-bold">Risk-Adjusted ROI:</span>
                    <span className="font-bold text-red-900 text-xl">8.3x</span>
                  </div>
                </div>
                <p className="text-sm text-red-800">
                  Conservative estimate: 1 penalty every 3-4 years without proper accounting tools. Xero reduces that to near-zero.
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-4">Scenario 2: You Avoid One Contract Dispute</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Legal costs for dispute:</span>
                    <span className="font-bold">£5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rocket Lawyer cost (1 year):</span>
                    <span className="font-bold">£600</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 flex justify-between">
                    <span className="font-bold">Risk-Adjusted ROI:</span>
                    <span className="font-bold text-red-900 text-xl">8.3x</span>
                  </div>
                </div>
                <p className="text-sm text-red-800">
                  One well-drafted contract prevents years of headaches. Your lawyer-reviewed terms are your best defense.
                </p>
              </div>

              {/* Scenario 3 */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-4">Scenario 3: You Avoid One Liability Claim</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Liability claim (uninsured):</span>
                    <span className="font-bold">£10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance cost (1 year):</span>
                    <span className="font-bold">£360</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 flex justify-between">
                    <span className="font-bold">Risk-Adjusted ROI:</span>
                    <span className="font-bold text-red-900 text-xl">27x</span>
                  </div>
                </div>
                <p className="text-sm text-red-800">
                  This is the real protection. Insurance isn't an expense. It's a destroyer of catastrophic risk. One claim without insurance bankrupts your business. One claim with insurance costs you £30/month.
                </p>
              </div>

              {/* Scenario 4 */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
                <p className="font-bold text-red-900 mb-4">Scenario 4: You Win Enterprise Clients</p>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex justify-between">
                    <span>Enterprise deal value:</span>
                    <span className="font-bold">£10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Full stack cost (1 year):</span>
                    <span className="font-bold">£1,320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deals enabled:</span>
                    <span className="font-bold">2+ extra deals/year</span>
                  </div>
                  <div className="border-t border-red-300 pt-3 flex justify-between">
                    <span className="font-bold">Revenue-Adjusted ROI:</span>
                    <span className="font-bold text-red-900 text-xl">15x+</span>
                  </div>
                </div>
                <p className="text-sm text-red-800">
                  Enterprise clients require pro tools. Without Xero + legal + insurance, they won't contract with you. These tools unlock an entire revenue tier.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-4">Break-Even Analysis</p>
            <p className="text-gray-700 mb-4">
              At £15k+/month revenue, here's your probability of needing each tool:
            </p>
            <div className="space-y-3 text-gray-700 ml-4 mb-6">
              <div className="flex justify-between">
                <span>Tax penalty prevention:</span>
                <span className="font-bold">1 event every 2-3 years = 33% annual probability</span>
              </div>
              <div className="flex justify-between">
                <span>Contract dispute prevention:</span>
                <span className="font-bold">1 event every 3-5 years = 20% annual probability</span>
              </div>
              <div className="flex justify-between">
                <span>Liability claim prevention:</span>
                <span className="font-bold">1 event every 5-10 years = 10% annual probability</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise client enablement:</span>
                <span className="font-bold">2+ clients per year = 100% probability</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-red-300">
              <p className="font-bold text-red-900 mb-2">True Annual Risk:</p>
              <p className="text-gray-700">
                (33% × £3k) + (20% × £5k) + (10% × £10k) + (100% × 2 × £10k) = Expected loss prevention of <span className="font-bold">£24,990/year</span>
              </p>
              <p className="text-gray-700 mt-3 font-semibold">
                Pro tools cost £1,320/year. Expected protection: £24,990/year. <span className="text-red-600">ROI: 18.9x</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 55-MINUTE SETUP */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Setup: 55 Minutes</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <p className="text-gray-700 mb-8 text-lg">
            Three layers of setup. Total time from zero to fully protected: 55 minutes.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-red-600 flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Set Up Xero (30 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to xero.com</li>
                  <li>2. Click "Try Xero free" → choose Standard (£30/month, recommended)</li>
                  <li>3. Enter business info (name, address, registration number)</li>
                  <li>4. Confirm VAT registration status (if applicable)</li>
                  <li>5. Connect bank account (auto-import transactions)</li>
                  <li>6. Import FreeAgent data (if switching): Export → CSV → Import to Xero</li>
                  <li>7. Configure VAT settings (if VAT registered): Accounts → Settings → Tax</li>
                  <li>8. Set up payroll (if employees): Payroll → Setup → Add employee</li>
                  <li>9. Create invoice template (Customization → Invoice branding)</li>
                  <li>10. Test: Create sample £100 invoice, check VAT calculation</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-red-600 flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Set Up Rocket Lawyer (15 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to rocketlawyer.co.uk</li>
                  <li>2. Click "Choose your plan" → select Pro (£50/month)</li>
                  <li>3. Enter business info</li>
                  <li>4. Search "Service Agreement" template</li>
                  <li>5. Review template structure (copy to document)</li>
                  <li>6. Create "Master Contract Template" in Google Docs with your details</li>
                  <li>7. Save template link to quick-access folder</li>
                  <li>8. Email support@rocketlawyer: "Review these terms for standard use"</li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-red-600 flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold text-gray-900">Get Professional Insurance (10 minutes)</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to comparethemarket.com</li>
                  <li>2. Search "professional indemnity insurance"</li>
                  <li>3. Select your profession/industry</li>
                  <li>4. Set cover amount: £1M</li>
                  <li>5. Review quotes (Hiscox, AXA, Allianz typically £25-35/month)</li>
                  <li>6. Select best quote</li>
                  <li>7. Complete application (5 min)</li>
                  <li>8. Download certificate of insurance</li>
                  <li>9. Add to your proposals: "Fully insured, £1M professional indemnity cover"</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <p className="font-bold text-red-900 mb-2">✓ Total Setup Time: 55 minutes</p>
            <p className="text-red-800">Once done, you're fully protected. Compliant. Enterprise-ready. Insured against catastrophic loss.</p>
          </div>
        </div>
      </div>

      {/* RISK MITIGATION WORKFLOWS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Operate Risk-Free: 3 Core Workflows</h2>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Tax Compliance & Penalty Prevention</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Weekly (15 minutes, Friday):</p>
                  <p className="text-gray-700">Open Xero. Review flagged transactions. Verify categorization accuracy. Export to tax tracker.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Monthly (10 minutes):</p>
                  <p className="text-gray-700">Review P&L. Check profit margin. Verify expense patterns. Transfer 20% to tax account.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Quarterly (30 minutes):</p>
                  <p className="text-gray-700">Run tax estimate. Review VAT (if registered). Check compliance dashboard. File VAT return (if required).</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Annually (2 hours):</p>
                  <p className="text-gray-700">Tax return prep. Xero exports everything. Send to accountant. Done.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Result: Zero Tax Surprises</p>
              <p className="text-gray-700">You know your tax liability every week. No panicking in January. No audit risk. No penalties.</p>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Contract Protection & Legal Safety</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">When Deal Arrives (£5k+):</p>
                  <p className="text-gray-700">Client wants contract. Open Rocket Lawyer. Find matching template. Customize with client details (15 min).</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Submit for Legal Review (5 min):</p>
                  <p className="text-gray-700">Email template to Rocket Lawyer lawyer. Request review. They flag risky terms. You adjust.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Client Signature (10 min):</p>
                  <p className="text-gray-700">Send via DocuSign (Rocket Lawyer integration). Client e-signs. Contract is executed + stored.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Store & Reference (2 min):</p>
                  <p className="text-gray-700">Signed copy to Google Drive. Reference in Xero for audit trail.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Result: Zero Legal Disputes</p>
              <p className="text-gray-700">Every deal is legally reviewed. You're protected from misinterpretation. Client knows expectations upfront. Conflict eliminated.</p>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Insurance Integration & Deal Closeout</h3>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Before Deal Presentation:</p>
                  <p className="text-gray-700">Your proposal says: "Fully insured, £1M professional indemnity cover. Your investment is protected."</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">During Sales Call:</p>
                  <p className="text-gray-700">Client asks: "What if you mess up?" You say: "I'm fully insured. If anything goes wrong, insurance covers it." Removes client risk. Higher close rate.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">In Contract (from Rocket Lawyer):</p>
                  <p className="text-gray-700">Terms include: "Service provider maintains £1M professional indemnity insurance." Client sees you're professional grade.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Post-Sale:</p>
                  <p className="text-gray-700">Insurance is silent. If client ever has claims, they're covered. You're working with no risk.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-gray-900 mb-2">Result: Enterprise Client Confidence</p>
              <p className="text-gray-700">Enterprise clients won't contract with uninsured solos. Insurance unlocks an entire revenue tier.</p>
            </div>
          </div>
        </div>
      </div>

      {/* DECISION FRAMEWORK */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Pro Decision Framework</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              Answer these five questions. If you say YES to 2+, upgrade immediately. You're gambling with your business.
            </p>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Question 1: Are You at £15k+/month?</h3>
                <p className="text-gray-700 mb-4">
                  Pro tools are for people making enough that a mistake costs real money. Below £15k/month, mid-tier is sufficient.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-gray-700"><strong>If YES:</strong> Continue.</p>
                  <p className="text-sm text-gray-700"><strong>If NO:</strong> Stay mid-tier.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Question 2: Have You Had a Close Call?</h3>
                <p className="text-gray-700 mb-4">
                  Tax issue? Contract misunderstanding? Client complaint? These are warnings. Pro tools prevent the full loss.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-gray-700"><strong>If YES:</strong> Upgrade today.</p>
                  <p className="text-sm text-gray-700"><strong>If NO:</strong> Continue to Q3.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Question 3: Do You Serve Enterprise Clients?</h3>
                <p className="text-gray-700 mb-4">
                  Enterprise clients = bigger deals. Bigger deals require lawyer-reviewed contracts. Non-negotiable.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-gray-700"><strong>If YES:</strong> Upgrade immediately. Enterprise clients won't work with uninsured, unprotected solos.</p>
                  <p className="text-sm text-gray-700"><strong>If NO:</strong> Continue to Q4.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Question 4: Do You Have Employees/Contractors?</h3>
                <p className="text-gray-700 mb-4">
                  Payroll errors = HMRC penalties. FreeAgent payroll won't scale past 2-3 people. Xero is required.
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-gray-700"><strong>If YES:</strong> Upgrade. Payroll complexity demands Xero.</p>
                  <p className="text-sm text-gray-700"><strong>If NO:</strong> Continue to Q5.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Question 5: Can You Afford One More Mistake?</h3>
                <p className="text-gray-700 mb-4">
                  Be honest. One tax error costs £3-5k. One contract dispute costs £5-15k. One liability claim costs £10-50k. Can you absorb that?
                </p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm text-gray-700"><strong>If NO:</strong> Upgrade. These tools are insurance.</p>
                  <p className="text-sm text-gray-700"><strong>If YES (you have huge reserves):</strong> You can wait. But it's still gambling.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-4">Scoring:</p>
            <div className="space-y-3 text-gray-700 mb-6 ml-4">
              <div>
                <p className="font-bold">2+ YES answers:</p>
                <p>Upgrade. Risk is too high. Pro tools pay for themselves on day 1 when you avoid problems.</p>
              </div>
              <div>
                <p className="font-bold">1 YES answer:</p>
                <p>Consider it. You're close. Depends on which answer.</p>
              </div>
              <div>
                <p className="font-bold">0 YES answers:</p>
                <p>Stay mid-tier for now. Revisit when revenue hits £15k+/month.</p>
              </div>
            </div>
            <p className="font-bold text-red-900">
              But here's the truth: If you're reading this page, you're probably ready. Upgrade.
            </p>
          </div>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Anti-Examples: When NOT to Upgrade</h2>

          <div className="space-y-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 1: The Premature Pro</p>
              <p className="text-gray-700 mb-2">
                "I was making £8k/month and thought, 'I should look professional.' Upgraded to the full pro stack. Paid £1,320/year. Used maybe 30% of features. After 6 months, realized I didn't need it yet. Wasted £660."
              </p>
              <div className="bg-white p-4 rounded border border-yellow-300 mt-3">
                <p className="text-sm text-gray-600">
                  <strong>Lesson:</strong> Upgrade when revenue + risk justify it, not when you think it looks professional.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 2: The No-Risk Believer</p>
              <p className="text-gray-700 mb-2">
                "I've been running 10 years with no legal issues. Insurance feels like throwing money away. Didn't get professional indemnity. Then one contract misunderstanding. Client sued for £12k. Insurance would have covered it. Cost me £12k out of pocket instead of £30/month."
              </p>
              <div className="bg-white p-4 rounded border border-yellow-300 mt-3">
                <p className="text-sm text-gray-600">
                  <strong>Lesson:</strong> You don't buy insurance because something is likely. You buy it because losing is catastrophic.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <p className="text-lg font-bold text-gray-900 mb-3">Anti-Example 3: The Partial Upgrade</p>
              <p className="text-gray-700 mb-2">
                "I upgraded to Xero but didn't get legal or insurance because 'I can write my own contracts.' Got sued by an enterprise client over ambiguous terms. Won the legal case but paid £6k in legal costs to defend it. Insurance would have covered that. Lesson: Upgrade the full stack. Tools work together."
              </p>
              <div className="bg-white p-4 rounded border border-yellow-300 mt-3">
                <p className="text-sm text-gray-600">
                  <strong>Lesson:</strong> Risk mitigation works because all three layers work together. Xero alone isn't enough. Legal alone isn't enough. Insurance alone isn't enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REAL EXAMPLES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Real Examples: When to Upgrade</h2>

        <div className="space-y-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Real Example 1: Elena's Enterprise Breakthrough</p>
            <p className="text-gray-700 mb-4">
              "I was doing £12k/month with SMB clients. All bank transfer. Then I got approached by a Fortune 500 company subsidiary. £50k deal. But: 'We need your insurance certificate. We need signed contracts. We need financial stability.' I didn't have any of it. I upgraded to the full pro stack (took 2 hours). Got the insurance certificate. Used Rocket Lawyer template. Xero showed clean financials. Signed the contract. Won the deal. £50k is now 40% of my revenue. Pro tools cost £1,320/year. That deal cost me £1,320/year. First year ROI: 37x."
            </p>
            <div className="bg-white p-4 rounded border border-green-300">
              <p className="text-sm text-gray-600">
                <strong>Key insight:</strong> Enterprise clients don't care if you're scrappy. They care if you're compliant. Pro tools unlock enterprise.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-lg font-bold text-gray-900 mb-3">Real Example 2: James's Tax Disaster Prevention</p>
            <p className="text-gray-700 mb-4">
              "I was using FreeAgent at £18k/month. Thought I was fine. Got smart and upgraded to Xero 'just to be safe.' During my first month, Xero flagged that I'd mis-categorized £8k in expenses as 'business travel' when they were personal. FreeAgent would have never caught that. If HMRC audited me, that's a £2,400 penalty. Xero prevented it in month 1. £30/month tool saved me from a £2,400 mistake. 80x ROI in a single catch."
            </p>
            <div className="bg-white p-4 rounded border border-green-300">
              <p className="text-sm text-gray-600">
                <strong>Key insight:</strong> Xero flags errors before HMRC does. That's the entire value proposition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-red-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">ready to operate risk-free?</h2>
          <p className="text-lg opacity-90 mb-8">
            Do these apply?
          </p>
          <ul className="text-left max-w-md mx-auto mb-12 space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You're at £15k+/month revenue</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You serve enterprise clients (or want to)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You've had a tax/legal close call</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">→</span>
              <span>You can't afford one more £5k+ mistake</span>
            </li>
          </ul>
          <p className="text-lg opacity-90 mb-8">
            If two or more: 55 minutes of setup, £110/month, total peace of mind. The ROI is obvious.
          </p>

          <div className="bg-red-700 rounded-lg p-8 inline-block">
            <p className="font-bold text-sm opacity-75 mb-2">Ready to Upgrade</p>
            <p className="text-sm opacity-90">Pro Stack Setup: 55 minutes. Risk Mitigation: £110/month. Catastrophic Loss Prevention: Priceless.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/finance-legal/mid-tier">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⬇️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Mid-Tier (Prerequisite)</h3>
              <p className="text-gray-600 text-sm">FreeAgent + Stripe + legal templates. Start here if you're £5-15k/month.</p>
            </div>
          </Link>

          <Link href="/tools/finance-legal/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">🆓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Free Tier</h3>
              <p className="text-gray-600 text-sm">Wave + Sheets + templates. For solos under £5k/month.</p>
            </div>
          </Link>

          <Link href="/systems/business-operations">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Business Operations System</h3>
              <p className="text-gray-600 text-sm">Complete financial + operational system framework for all revenue tiers.</p>
            </div>
          </Link>

          <Link href="/offer/productization">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Productization for Enterprise</h3>
              <p className="text-gray-600 text-sm">How to package offers for enterprise clients at £50k+/deal.</p>
            </div>
          </Link>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ What NOT to Do</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't upgrade before £15k/month.</strong> Mid-tier is sufficient. You're buying insurance you don't need yet.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't skip the full stack.</strong> Xero only isn't enough. Xero + legal + insurance = protection. Skip any layer and you're exposed.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't cheap out on insurance cover.</strong> £1M is minimum for £15k+ income. Lower cover = personal liability if claim exceeds cover.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't use generic legal templates for enterprise.</strong> Rocket Lawyer review is £30k/month of risk prevention value. Pay for it.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tips for Migration from Mid-Tier</h3>
          <p className="text-gray-700 mb-3">
            Already using FreeAgent + Stripe + Rocket Lawyer templates? Here's the upgrade path:
          </p>
          <ol className="text-gray-700 space-y-2 ml-4 mb-6">
            <li>1. Month 1: Keep FreeAgent running, add Xero trial (side-by-side)</li>
            <li>2. Compare: FreeAgent categories vs Xero AI categorization. Note differences.</li>
            <li>3. Export FreeAgent data → import to Xero (one-time process)</li>
            <li>4. Configure Xero VAT, payroll, multi-entity (if applicable)</li>
            <li>5. Test with 1 invoice in Xero. Check VAT, payment flow, tax estimate</li>
            <li>6. Get insurance (10 min, separate from Xero)</li>
            <li>7. Use Rocket Lawyer for all deals over £5k (you're already using it)</li>
            <li>8. After 2 weeks in Xero, if comfortable: Switch fully. Cancel FreeAgent subscription.</li>
          </ol>
          <p className="text-gray-700 font-semibold">
            Total migration time: 2 weeks (includes parallel running). Zero data loss. Zero compliance risk.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 The Pro Mindset Shift</h3>
          <p className="text-gray-700">
            Free tools: "How do I do this cheap?"<br/>
            Mid-tier tools: "How do I do this efficiently?"<br/>
            Pro tools: "How do I do this safely?"
          </p>
          <p className="text-gray-700 mt-4">
            If you're asking the third question, you're ready for pro. The tools follow.
          </p>
        </div>
      </div>
    </main>
  );
}
