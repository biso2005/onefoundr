'use client';

import Link from 'next/link';

export default function ClientExpansion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Client Expansion: Get More from Existing Clients
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
            Expand scope, upsell, cross-sell. Double revenue from the same clients without chasing new ones.
          </p>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              "I spent £500 acquiring a new client. Spent £0 expanding an existing client. Both gave me £3k revenue. <span className="font-semibold text-blue-700">Expansion is infinite ROI.</span> Why am I chasing new work?"
            </p>
          </div>
        </div>
      </section>

      {/* The Expansion Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why You Chase New Clients Instead of Expanding</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "New is Better" Trap</h3>
              <p className="text-gray-700">You think new clients are more valuable. Reality: Existing clients already trust you and spend more on additional work.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Awkward" Trap</h3>
              <p className="text-gray-700">You feel weird asking for more money. Reality: Clients want more value and actively look for solutions you can provide.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Satisfied" Trap</h3>
              <p className="text-gray-700">You think clients are "done" with you. Reality: Satisfied clients are the most likely to give you more work.</p>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The "Lazy" Trap</h3>
              <p className="text-gray-700">Expanding takes effort and feels risky. Acquiring new clients feels familiar. So you keep doing it.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule</p>
            <p className="text-gray-700">
              If you're not asking existing clients for more work every month, you're leaving £10k+ on the table. Every year.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: The £2k Ad Spend Mistake</h3>
            <p className="text-gray-700 mb-2">
              "I spent £2k on Facebook ads hunting new clients. Got 2 clients at £1.5k each. Revenue: £3k. Meanwhile, existing £3k client mentioned needing more scope. I said 'Sorry, too busy.' They left. Lost £5k. I was spending to acquire what I already had."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of ignoring expansion: £5,000 lost revenue</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Tom's Retainer Win</h3>
            <p className="text-gray-700 mb-2">
              Tom had a £3k project client. Instead of hunting new clients, he emailed: "You're getting great results. Ready for ongoing support?" Client said yes. Now £8k retainer (monthly). Cost to acquire: 1 email. Time: 5 minutes. Revenue: £96k/year.
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: One email → £8,000/month recurring</p>
          </div>
        </div>
      </section>

      {/* The Expansion Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The 3-Part Expansion System</h2>
          <p className="text-lg text-gray-700 mb-12">
            Every expansion falls into one of three categories. Master all three and you'll never leave money on the table.
          </p>

          {/* Part 1: Scope Expansion */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">📦</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Part 1: Scope Expansion</h3>
                <p className="text-gray-700 mt-2">Add deliverables to an existing project.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">What</p>
                <p className="text-gray-700">Client mentions an adjacent need. You add it to current project for additional fee.</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">When</p>
                <p className="text-gray-700">Client says: "I wish this also..." or "Can you also help with..."</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">How</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                  "I can add that for £X. Takes Y time. Does that work?"
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Real Example</p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Original:</span> Website design £3k
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Client says:</span> "Love it. Can you also set up SEO?"
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Expansion:</span> Website + SEO setup £5k (£2k expansion, 10 hours)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-900">Solo Rule</p>
                <p className="text-gray-700 text-sm">If client mentions adjacent need, offer expansion immediately. Don't wait.</p>
              </div>
            </div>
          </div>

          {/* Part 2: Upsell */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">⬆️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Part 2: Upsell</h3>
                <p className="text-gray-700 mt-2">Move client to higher tier of the same service.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">What</p>
                <p className="text-gray-700">Client has maximized current tier. You move them to higher tier with more value.</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">When</p>
                <p className="text-gray-700">Client hits limit of current service. E.g., audit complete, retainer option appears.</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">How</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                  "You're ready for [higher tier]. It's £X and includes [more value]."
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Real Example</p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Tier 1:</span> Email audit £500 (one-time)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Client says:</span> "Audit was great. Need ongoing help."
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Tier 2 Upsell:</span> Email retainer £2k/month (4 audits + unlimited tweaks)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-900">Solo Rule</p>
                <p className="text-gray-700 text-sm">Upsell when client sees value in current tier. Not before. Timing is everything.</p>
              </div>
            </div>
          </div>

          {/* Part 3: Cross-sell */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🔀</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Part 3: Cross-Sell</h3>
                <p className="text-gray-700 mt-2">Sell different service to existing client.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">What</p>
                <p className="text-gray-700">Introduce completely different service you offer to client who trusts you.</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">When</p>
                <p className="text-gray-700">Client mentions different pain. You have relevant solution. Client has budget.</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">How</p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 font-mono text-sm">
                  "I also help with [different problem]. I can do [offer] for £X."
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Real Example</p>
                <div className="bg-blue-50 rounded-lg p4 border border-blue-100">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Your service 1:</span> Email copywriting
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Client says:</span> "Email working great. But ads aren't converting."
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Cross-sell:</span> Ad copy audit £1k (your service 2)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-900">Solo Rule</p>
                <p className="text-gray-700 text-sm">Cross-sell when client mentions different pain. Don't pitch what you think they need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Expansion Playbooks */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The 3 Expansion Playbooks</h2>
          <p className="text-lg text-gray-700 mb-12">
            Copy these playbooks. Use them with your next trigger.
          </p>

          <div className="space-y-8">
            {/* Playbook 1 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 p-6">
                <h3 className="text-2xl font-bold text-green-900">Playbook 1: Scope Expansion</h3>
                <p className="text-green-700 mt-2">Add feature to existing project</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Trigger</p>
                  <p className="text-gray-700">Client says: "I love this. Wish you also did..." or "Can you also help with..."</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "I can add [scope] for £[price]. Takes [timeframe]. Shall I do it?"
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example Conversation</p>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-3 border border-blue-100">
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Client:</span> "Email sequence is working so well. Wish you did landing pages."
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">You:</span> "I do landing pages. Can add one for £1,500. Takes 1 week. Want me to do it?"
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Result:</span> £1,500 expansion deal within 1 minute.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 rounded p-3 border border-green-200">
                  <p className="text-sm font-semibold text-green-900">✓ Revenue: £1,500 | Time: 1 email | ROI: ∞</p>
                </div>
              </div>
            </div>

            {/* Playbook 2 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-100 p-6">
                <h3 className="text-2xl font-bold text-blue-900">Playbook 2: Upsell</h3>
                <p className="text-blue-700 mt-2">Move to higher tier of same service</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Trigger</p>
                  <p className="text-gray-700">Client hits limit of current tier. Says "need ongoing" or "need more support."</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "You're ready for [higher tier]. It's £[price]/[timeframe] and includes [new value]. Want to chat?"
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example Conversation</p>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-3 border border-blue-100">
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Client:</span> "Website audit was perfect. Need constant optimization."
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">You:</span> "You're ready for retainer. £2k/month. Includes 1 audit + 4 hours optimization. Interested?"
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Result:</span> £24k/year recurring (upsell).
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded p-3 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900">✓ Revenue: £2,000/month | Time: 1 email | ROI: ∞</p>
                </div>
              </div>
            </div>

            {/* Playbook 3 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 p-6">
                <h3 className="text-2xl font-bold text-purple-900">Playbook 3: Cross-Sell</h3>
                <p className="text-purple-700 mt-2">Different service to existing client</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Trigger</p>
                  <p className="text-gray-700">Client mentions different pain point. You have solution.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Your Script</p>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded italic">
                    "I also help with [different problem]. I can do [service] for you at £[price]. Interested?"
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-2">Example Conversation</p>
                  <div className="bg-blue-50 rounded-lg p-4 space-y-3 border border-blue-100">
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Client:</span> "Email campaigns working great. But paid ads are bleeding money."
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">You:</span> "I also audit ads. Can review yours for £1k. Tell you exactly what's broken."
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-blue-900">Result:</span> £1,000 new service sold that day.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded p-3 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-900">✓ Revenue: £1,000 | Time: 1 message | ROI: ∞</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Expansion Email */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Expansion Email Templates</h2>
          <p className="text-lg text-gray-700 mb-8">
            Send these within 24 hours of the trigger. After 48 hours, the moment passes. Client forgets.
          </p>

          <div className="space-y-8">
            {/* Scope Expansion Email */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email #1: Scope Expansion</h3>
              <p className="text-sm text-gray-600 mb-4">Send within 24 hours of trigger</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: Quick add-on for your project</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  You mentioned needing [scope they mentioned]. I can add that to your current project for £[amount].
                </p>
                <p className="mb-4">
                  Takes me [timeframe] to implement. Would that work for you?
                </p>
                <p className="mb-4">
                  Let me know,<br />[Your Name]
                </p>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-200">
                <p className="text-sm text-green-800"><span className="font-semibold">Purpose:</span> Fast, specific, non-salesy. Just offering solution to pain they mentioned.</p>
              </div>
            </div>

            {/* Upsell Email */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email #2: Upsell</h3>
              <p className="text-sm text-gray-600 mb-4">Send when client expresses reaching limit of current tier</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: Next step for your progress</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  Seeing great results from [current service]. You're ready to scale it further.
                </p>
                <p className="mb-4">
                  I offer a [higher tier] option. It's £[price]/month and includes [specific value]. More support, faster results.
                </p>
                <p className="mb-4">
                  Want to chat about it? I can share specifics on a quick call.
                </p>
                <p className="mb-4">
                  [Your Name]
                </p>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-200">
                <p className="text-sm text-green-800"><span className="font-semibold">Purpose:</span> Position as natural next step, not hard sell. Opening door to conversation.</p>
              </div>
            </div>

            {/* Cross-Sell Email */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email #3: Cross-Sell</h3>
              <p className="text-sm text-gray-600 mb-4">Send when client mentions different problem</p>
              <div className="bg-gray-900 rounded-lg p-6 text-gray-100 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-yellow-400 font-semibold mb-4">Subject: Saw you mention [pain] - I can help</p>
                <p className="mb-4">Hey [Name],</p>
                <p className="mb-4">
                  Saw you mention [specific problem] in our conversation. That's a gap I help close.
                </p>
                <p className="mb-4">
                  I offer [service] that specifically solves [problem]. It's £[price] and takes [timeframe].
                </p>
                <p className="mb-4">
                  Worth a conversation?
                </p>
                <p className="mb-4">
                  [Your Name]
                </p>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-200">
                <p className="text-sm text-green-800"><span className="font-semibold">Purpose:</span> Reference their exact pain. Show you listen. Make it effortless to say yes.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: The 24-Hour Window</p>
            <p className="text-gray-700 mb-3">
              Send your expansion email within 24 hours of the trigger. After that, the moment fades. Client forgets you mentioned it. Momentum dies.
            </p>
            <p className="text-gray-700">
              Create a system: When client mentions need → Put in Slack reminder → Send email same day.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-100 p-6 mt-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">⚠️ Anti-Example: The 2-Week Wait</h3>
            <p className="text-gray-700 mb-2">
              "Client mentioned scope expansion. I thought 'I'll email them later this week.' Forgot. Sent email 2 weeks later. They said 'Sorry, we're locked into budget now.' Lost £2k. Should've sent same day."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost of delay: £2,000 lost</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-100 p-6 mt-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">✓ Real Example: Same-Day Close</h3>
            <p className="text-gray-700 mb-2">
              "Client mentioned ads pain Tuesday morning. I sent expansion email Tuesday afternoon. They replied Wednesday: 'Yes, let's do the audit.' Closed deal 24 hours after mentioning pain. £1k revenue."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: £1,000 closed because of speed</p>
          </div>
        </div>
      </section>

      {/* Good vs Bad Examples */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Good vs Bad Expansion</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {/* Good */}
            <div className="bg-white rounded-xl border border-green-100 overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 p-6">
                <h3 className="text-xl font-bold text-green-900">✓ Good Expansion</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Trigger</p>
                  <p className="text-lg text-gray-700">Client mentions landing page need</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Your Action</p>
                  <p className="text-lg text-gray-700">Send email same day</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Expansion: £1,500</li>
                    <li>• Time to close: 1 day</li>
                    <li>• Time invested: 1 email</li>
                    <li>• ROI: £1,500 ÷ 10 min = £9,000/hour</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded p-3 border border-green-200">
                  <p className="text-sm font-semibold text-green-900">= £1,500 recurring revenue in 24 hours</p>
                </div>
              </div>
            </div>

            {/* Bad */}
            <div className="bg-white rounded-xl border border-red-100 overflow-hidden">
              <div className="bg-red-50 border-b border-red-100 p-6">
                <h3 className="text-xl font-bold text-red-900">✗ Bad Expansion</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Trigger</p>
                  <p className="text-lg text-gray-700">Client mentions landing page need</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold">Your Action</p>
                  <p className="text-lg text-gray-700">Wait 2 weeks to send email</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Result</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Expansion: £0</li>
                    <li>• Client response: "Sorry, locked into budget"</li>
                    <li>• Lost momentum: Yes</li>
                    <li>• Lost revenue: £1,500</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded p-3 border border-red-200">
                  <p className="text-sm font-semibold text-red-900">= £1,500 lost because of delay</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Expansion Timing</p>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-semibold">&lt;24 hours after trigger:</span> 80% conversion rate</li>
              <li><span className="font-semibold">24-48 hours after trigger:</span> 40% conversion rate</li>
              <li><span className="font-semibold">48+ hours after trigger:</span> 10% conversion rate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Downloadable Templates */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">📥 Expansion Email Templates (Copy & Paste)</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Scope Expansion Template</p>
              <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-xs overflow-x-auto mb-4">
                Subject: Quick question about [specific add-on]
                <br /><br />
                Hey [First Name],
                <br /><br />
                You mentioned wanting [scope they mentioned]. I can add that for £[price].
                <br /><br />
                Would take me [specific timeframe] to complete. Does that work for you?
                <br /><br />
                Let me know,<br />[Your Name]
              </div>
              <p className="text-xs text-gray-600">✓ Save this as template in your email client for instant use</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Upsell Template</p>
              <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-xs overflow-x-auto mb-4">
                Subject: Next level for you
                <br /><br />
                Hi [First Name],
                <br /><br />
                You're crushing it with [current service]. You're ready for the next tier.
                <br /><br />
                I offer [higher tier] at £[price]/month. It includes [specific benefits]. More results, less work from you.
                <br /><br />
                Want to chat about how it works?
                <br /><br />
                [Your Name]
              </div>
              <p className="text-xs text-gray-600">✓ Save this as template in your email client for instant use</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Cross-Sell Template</p>
              <div className="bg-gray-900 rounded-lg p-4 text-gray-100 font-mono text-xs overflow-x-auto mb-4">
                Subject: Saw you mention [pain] - I can help
                <br /><br />
                Hey [First Name],
                <br /><br />
                Remember mentioning [specific pain]? That's something I specialize in.
                <br /><br />
                I can do [specific offer] for £[price]. Would solve [specific outcome].
                <br /><br />
                Interested in exploring it?
                <br /><br />
                [Your Name]
              </div>
              <p className="text-xs text-gray-600">✓ Save this as template in your email client for instant use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Your Next Steps</h2>

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Action (Today)</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <span>List 5 existing clients (current ones only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">2.</span>
                  <span>Note what they mentioned wanting (scope, upgrade, or different service)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">3.</span>
                  <span>Send expansion email to top 3 clients today (not tomorrow)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">4.</span>
                  <span>Note the response. Track what converts.</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foundation Required</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Know your pricing on expansions. Read <Link href="/growth/revenue-growth/pricing-optimization" className="text-blue-600 hover:underline">Pricing Optimization</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Track which expansions convert best. Use <Link href="/systems/client-management" className="text-blue-600 hover:underline">Client Management</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>Master close. Read <Link href="/sales/natural-selling" className="text-blue-600 hover:underline">Selling Authentically</Link></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">If you're not asking existing clients for more work every month, you're losing £5k+.</span>
            </p>
            <p className="text-gray-700">
              Stop chasing new clients. Start expanding existing ones. Expansion is infinite ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/growth/revenue-growth/pricing-optimization">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing Optimization</h3>
                <p className="text-gray-600 text-sm">Foundation: How to price expansions without guilt.</p>
              </div>
            </Link>
            <Link href="/growth/revenue-growth/value-ladder">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">🪜</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Value Ladder</h3>
                <p className="text-gray-600 text-sm">Next: Build systematic price tiers for upsells.</p>
              </div>
            </Link>
            <Link href="/systems/client-management">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Management</h3>
                <p className="text-gray-600 text-sm">Track expansion potential per client.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Stop Chasing New Clients</h2>
          <p className="text-xl text-gray-700 mb-8">
            The money is already in your email. You just haven't asked for it yet.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 inline-block w-full sm:w-auto">
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Your Next Move</p>
              <p className="text-lg font-semibold text-gray-900">Send 3 expansion emails today</p>
              <p className="text-sm text-gray-600 mt-2">Scope, upsell, or cross-sell. Send within 24 hours of trigger.</p>
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
                  <Link href="/growth/revenue-growth/pricing-optimization" className="text-gray-700 hover:text-blue-600">
                    ← Pricing Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/growth/revenue-growth/value-ladder" className="text-gray-700 hover:text-blue-600">
                    Next: Value Ladder →
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
              <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold mb-4">Systems</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/systems/client-management" className="text-gray-700 hover:text-blue-600">
                    Client Management
                  </Link>
                </li>
                <li>
                  <Link href="/sales/natural-selling" className="text-gray-700 hover:text-blue-600">
                    Selling Authentically
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
