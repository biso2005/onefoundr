'use client';

import Link from 'next/link';

export default function PricingOptimization() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pricing Optimization: Raising Prices Without Losing Clients
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
            The 50% price increase. The solo surcharge. The anchor. How to charge more and keep clients.
          </p>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              "I raised prices 50% on 10 clients. Lost 2. Kept 8. Revenue went from £10k to £12k. Worked 20% less. That's £2k more for 20% less work. <span className="font-semibold text-blue-700">Pricing is leverage.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* The Pricing Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why Raising Prices Feels Scary</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Lose Clients" Fear</h3>
              <p className="text-gray-700">You think raising prices will lose everyone. Reality: You lose worst clients, keep best.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Fairness" Trap</h3>
              <p className="text-gray-700">You think you must be "fair." Reality: Fair is market rate. Market rate is higher.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "I'm Not Worth It" Syndrome</h3>
              <p className="text-gray-700">You undervalue your skill. Reality: Clients value it more than you.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Competition" Excuse</h3>
              <p className="text-gray-700">You think you must match competitors. Reality: You deliver more value solo.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule</p>
            <p className="text-gray-700">
              If you haven't raised prices in 6 months, you're undercharging. Guaranteed.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: The 2-Year Freeze</h3>
            <p className="text-gray-700 mb-2">
              "I was scared to raise prices. Stayed at £50/hour for 2 years. Lost £20k in revenue to undercharging. When I finally raised to £100, lost 1 client, gained 3. Was scared for absolutely nothing."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of Fear: £20,000</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6 mt-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Sarah's 50% Raise</h3>
            <p className="text-gray-700 mb-2">
              Sarah raised from £50/hour to £75. Lost 2 clients. Gained 5. Net result: +£10k/year. Worked 10 hours less per week. Did not lose revenue. Made more.
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: +£10,000 annual revenue</p>
          </div>
        </div>
      </section>

      {/* The Solo Surcharge */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Solo Pricing Advantage</h2>

          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">What is the Solo Surcharge?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-3">•</span>
                <span>Agencies charge £150/hour but have 60% overhead (office, managers, profit).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-3">•</span>
                <span>You deliver the same value and keep 100% of revenue.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-3">•</span>
                <span>Client pays £50 less. You earn £40 more. Win-win.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-3">•</span>
                <span><span className="font-semibold">Solo Surcharge:</span> 1.5x employee rate, 0.67x agency rate.</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Math</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Role</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Hourly Rate</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Overhead</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900">Your Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-3 text-gray-700">Employee</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">£50/hour</td>
                  <td className="py-3 px-3 text-gray-600">0%</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">£50</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-3 text-gray-700">Agency (charges client)</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">£150/hour</td>
                  <td className="py-3 px-3 text-gray-600">60%</td>
                  <td className="py-3 px-3 font-semibold text-red-600">£60 (to freelancer)</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="py-3 px-3 text-gray-700">You (solo)</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">£100/hour</td>
                  <td className="py-3 px-3 text-gray-600">0%</td>
                  <td className="py-3 px-3 font-semibold text-green-600">£100 (100% yours)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule</p>
            <p className="text-gray-700">
              Charge 1.5x what you'd make as an employee. That's your absolute floor. You've earned it through elimination of overhead.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Pricing Sweet Spot</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start border-b border-gray-100 pb-4">
                <div className="bg-indigo-100 rounded-lg p-3 mr-4 min-w-fit">
                  <span className="text-indigo-900 font-bold">Employee Rate</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">£50/hour</p>
                  <p className="text-sm text-gray-600">Base for calculation</p>
                </div>
              </div>
              <div className="flex items-start border-b border-gray-100 pb-4">
                <div className="bg-green-100 rounded-lg p-3 mr-4 min-w-fit">
                  <span className="text-green-900 font-bold">Your Floor</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">£75/hour</p>
                  <p className="text-sm text-gray-600">1.5x employee rate (no negotiation)</p>
                </div>
              </div>
              <div className="flex items-start border-b border-gray-100 pb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-4 min-w-fit">
                  <span className="text-blue-900 font-bold">Agency Rate</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">£150/hour</p>
                  <p className="text-sm text-gray-600">What agencies charge (less overhead)</p>
                </div>
              </div>
              <div className="flex items-start bg-indigo-50 rounded-lg p-4">
                <div className="bg-indigo-200 rounded-lg p-3 mr-4 min-w-fit">
                  <span className="text-indigo-900 font-bold">Your Sweet Spot</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">£75–£100/hour</p>
                  <p className="text-sm text-gray-600">Client saves 33%, you earn 40% more than employee wage</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Anchor Method</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <p className="text-gray-700 mb-4">
              When a client asks your rate, deploy the anchor first. Anchor high, negotiate low, still win.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2 font-semibold">ANCHOR SCRIPT:</p>
              <p className="text-lg text-gray-800 font-semibold">
                "Most agencies charge £150/hour for this work. I charge £100 because I have no overhead. You save £50/hour. I keep more profit. Both win."
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              By anchoring at £150 first, £100 feels like a bargain. Without the anchor, £100 might sound expensive.
            </p>
          </div>
        </div>
      </section>

      {/* The 50% Raise */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">How to Raise 50% Without Losing Clients</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">The Formula</p>
            <p className="text-gray-700 text-xl">
              <span className="font-mono bg-white px-3 py-2 rounded border border-yellow-200">
                Current Price × 1.5 = New Price
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-3">Test with 3 clients first. Measure response. Scale.</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 1: The Email</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 overflow-x-auto">
            <div className="bg-gray-900 rounded-lg p-6 mb-4 text-gray-100 font-mono text-sm">
              <p className="text-yellow-400 font-semibold mb-4">Subject: Price Update ↑ [Your Name]</p>
              <p className="mb-4">Hey [Client Name],</p>
              <p className="mb-4">
                As of [date], my rate is increasing from £X to £Y.
              </p>
              <p className="mb-4">
                This reflects the value I've delivered for you and current market rates.
              </p>
              <p className="mb-4">
                <span className="text-green-400">You're locked in at £X until [date + 30 days].</span>
              </p>
              <p className="mb-4">
                If you'd like to discuss, I'm happy to chat.
              </p>
              <p className="mb-4">Thanks,<br />[Your Name]</p>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Key elements:</span> Confidence (no apologies), timeline (30-day grace), openness to chat (not aggressive).
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 2: The Timeline</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Day 1</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Send Email</p>
              <p className="text-gray-700">Announce increase. Give 30-day notice. No panic.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Days 1-30</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">Grace Period</p>
              <p className="text-gray-700">Existing clients locked in at old rate for 30 days.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Day 31+</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">New Rate Active</p>
              <p className="text-gray-700">All clients (existing & new) at new rate.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 3: The Follow-Up Sequence</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-2">DAY 7 FOLLOW-UP</p>
              <p className="text-gray-700">
                "Hey [Name], Saw the price update in your email? Questions or want to chat?"
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-2">DAY 14 FOLLOW-UP</p>
              <p className="text-gray-700">
                "Let me know if you want to discuss the rate change. Open to questions."
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-2">DAY 21 FINAL FOLLOW-UP</p>
              <p className="text-gray-700">
                "Price update takes effect in 9 days. Let me know if you want to lock in current rate for 3 months if you need time to adjust."
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Response Rate</h3>
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">80%</p>
                <p className="text-gray-700 font-semibold">Accept silently</p>
                <p className="text-sm text-gray-600">No response. Just pay new rate.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-600 mb-2">10%</p>
                <p className="text-gray-700 font-semibold">Negotiate</p>
                <p className="text-sm text-gray-600">Ask for discount or slower increase.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600 mb-2">10%</p>
                <p className="text-gray-700 font-semibold">Leave</p>
                <p className="text-sm text-gray-600">Move to competitor or pause work.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: The Perfect Raise</p>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-semibold">If 0% leave:</span> You raised too low. Go higher next time.</li>
              <li><span className="font-semibold">If 5–15% leave:</span> You raised perfectly. Sweet spot.</li>
              <li><span className="font-semibold">If 20%+ leave:</span> You raised too high. Dial it back.</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: No Timeline = Chaos</h3>
            <p className="text-gray-700 mb-2">
              "I sent price update with zero notice. Clients confused. Thought it was immediate. Lost 3 without explanation. Should've given 30 days and explained the timeline clearly."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Lesson: Clarity prevents panic.</p>
          </div>
        </div>
      </section>

      {/* Pricing Playbooks */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Pricing Playbooks</h2>
          <p className="text-lg text-gray-700 mb-8">
            Three scenarios. Three pricing strategies. Use the one that fits your situation.
          </p>

          <div className="space-y-8">
            {/* Playbook 1 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 p-6">
                <h3 className="text-2xl font-bold text-green-900">Playbook 1: The Solo Surcharge</h3>
                <p className="text-green-700 mt-2">For transitioning from employee to solo</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Situation</p>
                  <p className="text-gray-700">You just went solo. Still thinking like an employee.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Formula</p>
                  <p className="text-lg text-gray-900 font-semibold font-mono bg-gray-50 p-4 rounded">
                    Employee rate × 1.5 = Your solo rate
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example</p>
                  <p className="text-gray-700">
                    You made <span className="font-semibold">£50/hour</span> as employee. Your solo floor is <span className="font-semibold">£75/hour</span>.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "I charge £75 because I have no office overhead. You're getting the same quality at less cost than agency (£150) and I keep the profit."
                  </p>
                </div>
              </div>
            </div>

            {/* Playbook 2 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 p-6">
                <h3 className="text-2xl font-bold text-blue-900">Playbook 2: The 50% Raise</h3>
                <p className="text-blue-700 mt-2">For existing clients at current rate 6+ months</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Situation</p>
                  <p className="text-gray-700">You have paying clients. Rate hasn't changed in 6+ months.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Formula</p>
                  <p className="text-lg text-gray-900 font-semibold font-mono bg-gray-50 p-4 rounded">
                    Current rate × 1.5 = New rate
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example</p>
                  <p className="text-gray-700">
                    You charge <span className="font-semibold">£50/hour</span>. New rate is <span className="font-semibold">£75/hour</span>.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "My rate is increasing to £75. You're locked in at £50 for the next 30 days. After that, we continue at £75 unless we renegotiate."
                  </p>
                </div>
              </div>
            </div>

            {/* Playbook 3 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-indigo-50 border-b border-indigo-100 p-6">
                <h3 className="text-2xl font-bold text-indigo-900">Playbook 3: The Anchor</h3>
                <p className="text-indigo-700 mt-2">For new clients (no history)</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Situation</p>
                  <p className="text-gray-700">New prospect asks your rate. No negotiation history.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Formula</p>
                  <p className="text-lg text-gray-900 font-semibold font-mono bg-gray-50 p-4 rounded">
                    Agency rate × 0.67 = Your rate (with anchor)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example</p>
                  <p className="text-gray-700">
                    Agencies charge <span className="font-semibold">£150/hour</span>. You anchor at £150, then offer <span className="font-semibold">£100/hour</span>.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "Agencies charge £150 for this. I charge £100 with the same outcome, because I have no overhead. You save, I keep more profit."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Objection Handling: The Scripts</h2>

          <div className="space-y-8">
            {/* Objection 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Objection 1: "Too Expensive"</h3>
              
              <div className="mb-6 border-l-4 border-red-300 pl-4">
                <p className="text-gray-700 italic">Client says: "That's more than I expected. Other freelancers charge less."</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-green-900 mb-2">YOUR RESPONSE:</p>
                <p className="text-gray-800">
                  "What were you expecting to pay?"
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-300">
                  <p className="text-sm font-semibold text-gray-700 mb-2">If they name a number:</p>
                  <p className="text-gray-800 italic">
                    "That would get you [lesser outcome]. At my rate, you get [full outcome]. The difference is [specific value]."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Example: "That gets you a basic website. My rate gets you a website + SEO setup + conversion optimization."</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-300">
                  <p className="text-sm font-semibold text-gray-700 mb-2">If they won't name a number:</p>
                  <p className="text-gray-800 italic">
                    "Most people budget [higher number] for this. I'm at [your number]. What's the concern?"
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Example: "Most budget £5k. I'm at £3k. What specifically is the concern?"</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">Key:</span> Don't defend price. Reframe as value difference.
              </p>
            </div>

            {/* Objection 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Objection 2: "Need to Think About It"</h3>
              
              <div className="mb-6 border-l-4 border-red-300 pl-4">
                <p className="text-gray-700 italic">Client says: "This sounds good, but I need to think about it."</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-green-900 mb-2">YOUR RESPONSE:</p>
                <p className="text-gray-800">
                  "What specifically do you need to think about?"
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-300">
                  <p className="text-sm font-semibold text-gray-700 mb-2">If they name a concern:</p>
                  <p className="text-gray-800 italic">
                    Address that specific thing. Don't assume.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Example: If they say "budget," ask "Do you need 30 days to approve?" If they say "quality," ask "Want to see case studies?"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-300">
                  <p className="text-sm font-semibold text-gray-700 mb-2">If they won't specify:</p>
                  <p className="text-gray-800 italic">
                    "Sounds like this might not be a priority right now. No worries. If that changes, here's my calendar link. Let me know."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Vague stalling = not a priority. Release them politely.</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">Key:</span> Either solve the specific objection or let them go. Don't follow up forever.
              </p>
            </div>

            {/* Objection 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Objection 3: "Not in Budget"</h3>
              
              <div className="mb-6 border-l-4 border-red-300 pl-4">
                <p className="text-gray-700 italic">Client says: "I don't have that in my budget right now."</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-green-900 mb-2">YOUR RESPONSE:</p>
                <p className="text-gray-800">
                  "I can do [reduced scope] for [lower price]. Does that work?"
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-300 mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Example:</p>
                <p className="text-gray-800 italic">
                  "I can do an audit only (no implementation) for £1,500 instead of £5,000 for the full project. Would that help?"
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-sm font-semibold text-yellow-900 mb-2">Solo Rule</p>
                <p className="text-gray-700">
                  <span className="font-semibold">Never defend price.</span> Offer less scope instead. Better to do £1k of work than £0.
                </p>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                <span className="font-semibold">Key:</span> Scope is flexible. Price is not.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 mt-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: Price Defense</h3>
            <p className="text-gray-700 mb-2">
              "They said 'too expensive.' I said 'I can't go lower.' They ghosted. Should've said 'I can do [less scope] for less.' Got £0 instead of £1k."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of defending: £1,000 lost revenue</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6 mt-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Scope Reduction Win</h3>
            <p className="text-gray-700 mb-2">
              "They said 'too expensive' to £5k project. I said 'I can do audit-only for £1k.' They said yes. Got £1k immediately. Later upsold to £3k when their budget freed up."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £1,000 now + £3,000 later = £4,000 relationship</p>
          </div>
        </div>
      </section>

      {/* Good vs Bad */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Good vs Bad Price Increases</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {/* Good */}
            <div className="bg-white rounded-xl border border-green-100 overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 p-6">
                <h3 className="text-xl font-bold text-green-900">✓ Good Raise</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Before</p>
                  <p className="text-lg font-semibold text-gray-900">£50/hour</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">After</p>
                  <p className="text-lg font-semibold text-gray-900">£75/hour</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lost 2/10 clients (20%)</li>
                    <li>• Gained 5 new at £75</li>
                    <li>• Net: +£10k/year</li>
                    <li>• Worked 10 hours less/week</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3 border border-green-100">
                  <p className="text-sm font-semibold text-green-900">= More money for less work</p>
                </div>
              </div>
            </div>

            {/* Bad */}
            <div className="bg-white rounded-xl border border-red-100 overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 p-6">
                <h3 className="text-xl font-bold text-red-900">✗ Bad Raise</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Before</p>
                  <p className="text-lg font-semibold text-gray-900">£50/hour</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">After</p>
                  <p className="text-lg font-semibold text-gray-900">£100/hour</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lost 8/10 clients (80%)</li>
                    <li>• Gained 0 new</li>
                    <li>• Net: -£30k/year</li>
                    <li>• Revenue catastrophe</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded p-3 border border-red-100">
                  <p className="text-sm font-semibold text-red-900">= Too aggressive. Went 2x, not 1.5x</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: The Raise Sweet Spot</p>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-semibold">&lt;5% client loss:</span> You raised too low. Next time go higher.</li>
              <li><span className="font-semibold">5–20% client loss:</span> Perfect. You've found your price ceiling.</li>
              <li><span className="font-semibold">&gt;20% client loss:</span> You raised too much. Pull back 10–20%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Your Next Steps</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Action</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <span>Calculate your 50% raise right now. (Current × 1.5)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">2.</span>
                  <span>Write your price increase email. Update the date & amounts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">3.</span>
                  <span>Schedule send for 1 week from today.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">4.</span>
                  <span>Set reminders: Day 7, 14, 21 for follow-ups.</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foundation Required</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Understand your current market rate. Read <Link href="/offer/pricing" className="text-blue-600 hover:underline">Pricing Strategy</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Track client profitability. See <Link href="/systems/client-management" className="text-blue-600 hover:underline">Client Management</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Know which clients are most profitable before raising.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-blue-200 p-6 mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">📥 Download Template</p>
            <p className="text-gray-700 mb-4">Use this pricing increase email as your template. Customize the amounts & date. Send as-is.</p>
            <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-sm overflow-x-auto">
              <p className="text-yellow-400 font-semibold mb-4">pricing-increase-email-template.txt</p>
              <p className="mb-4">Subject: Price Update ↑ [Your Name]</p>
              <p className="mb-4">Hey [Client Name],</p>
              <p className="mb-4">
                As of [DATE], my rate is increasing from £[OLD] to £[NEW].
              </p>
              <p className="mb-4">
                This reflects the value I've delivered for you and current market rates.
              </p>
              <p className="mb-4">
                <span className="text-green-400">You're locked in at £[OLD] until [DATE + 30 DAYS].</span>
              </p>
              <p className="mb-4">
                If you'd like to discuss, I'm happy to chat.
              </p>
              <p>Thanks,<br />[Your Name]</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">If you haven't raised prices in 6 months, you're leaving £10k+ on the table.</span>
            </p>
            <p className="text-gray-700">
              You're not being nice. You're being irrational with your own money. Do it today.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/offer/pricing">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing Strategy</h3>
                <p className="text-gray-600 text-sm">Foundation: How to set your base rate.</p>
              </div>
            </Link>
            <Link href="/growth/revenue-growth/client-expansion">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Expansion</h3>
                <p className="text-gray-600 text-sm">Next: Grow revenue by expanding client scope.</p>
              </div>
            </Link>
            <Link href="/systems/client-management">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Management</h3>
                <p className="text-gray-600 text-sm">Track results: Monitor profitability per client.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Raise?</h2>
          <p className="text-xl text-gray-700 mb-8">
            The best time to raise prices was 6 months ago. The second best time is today.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 inline-block w-full sm:w-auto">
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Your Next Move</p>
              <p className="text-lg font-semibold text-gray-900">Send price increase email this week</p>
              <p className="text-sm text-gray-600 mt-2">30-day notice. 50% raise. 80% acceptance rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Revenue Growth Lever</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/growth/revenue-growth" className="text-gray-700 hover:text-blue-600">
                    ← Back to Revenue Growth
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth/client-expansion" className="text-gray-700 hover:text-blue-600">
                    Next: Client Expansion →
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth/value-ladder" className="text-gray-700 hover:text-blue-600">
                    Value Ladder →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Growth Pillars</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/growth/channel-expansion" className="text-gray-700 hover:text-blue-600">
                    Channel Expansion
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization" className="text-gray-700 hover:text-blue-600">
                    Productization
                  </Link>
                </li>
                <li>
                  <Link href="/growth/asset-building" className="text-gray-700 hover:text-blue-600">
                    Asset Building
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Foundations</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/offer/pricing" className="text-gray-700 hover:text-blue-600">
                    Pricing Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/start/niche-selection" className="text-gray-700 hover:text-blue-600">
                    Niche Selection
                  </Link>
                </li>
                <li>
                  <Link href="/growth" className="text-gray-700 hover:text-blue-600">
                    ← Back to Growth
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
