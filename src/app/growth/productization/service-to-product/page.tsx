'use client';

import Link from 'next/link';

export default function ServiceToProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Service to Product: Document Before You Productize
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Turn your repeatable service into documented, templated, productized offer. Deliver same outcome in 50% less time.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800 italic mb-4">
              "I delivered web design in 40 hours each time. Every project felt from scratch. Then I documented one complete delivery. Found 70% was repetitive. Created templates. Next delivery: 15 hours. Same outcome. That's 2.6x leverage. Documentation first, productization second."
            </p>
            <p className="text-sm text-gray-600">— Web designer, on finding hidden leverage in service delivery</p>
          </div>
        </div>
      </section>

      {/* The Documentation Myth */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why You Think You Can't Document (But You Can)
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Most service providers think their work resists documentation. Here are the four traps that prevent you from documenting—and the reality behind each.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Custom" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think every project is unique. Every client has different needs. Every solution is bespoke. Reality: 80% of your delivery is identical. It's the same process, same steps, same decisions. The last 20% is custom.
              </p>
              <p className="text-xs text-red-800 font-semibold">Cost: Spending 100% time thinking it's custom when 80% is repetitive.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "Too Hard" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think documentation takes forever. You think you need a wiki or training program. You think it's complicated. Reality: 2 hours of documentation saves 100 hours of future delivery. It starts with a Loom + Google Doc.
              </p>
              <p className="text-xs text-red-800 font-semibold">Cost: Procrastinating on 2 hours of work that would save 100 hours.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "I'll Do It Later" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think you'll document after 10 clients. After you've done enough deliveries. After things slow down. Reality: You never document. Months pass. You forget the process. The patterns disappear.
              </p>
              <p className="text-xs text-red-800 font-semibold">Cost: Forever staying at 40 hours per delivery because you never capture the patterns.</p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-200 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">❌ The "I Know It" Trap</h3>
              <p className="text-gray-700 text-sm mb-4">
                You think if you know the process, you don't need to write it down. You think memorizing is enough. You think you can teach someone without documentation. Reality: You don't truly know it until you write it.
              </p>
              <p className="text-xs text-red-800 font-semibold">Cost: Thinking you have a system when you only have habits.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Write It Down</p>
            <p className="text-gray-700">
              If you haven't documented your process, you don't have a process. You have habits. Habits live in your head. They don't scale. They don't transfer. They don't leverage. Documentation is the first step to productization.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: The Documentation Debt</h3>
            <p className="text-gray-700 mb-2">
              "I delivered 10 freelance design projects. Never documented. Each took 30 hours—same type of work, same client problems. After 10 projects, I finally documented. Watched recordings. Found 80% overlap. Built templates. Realized I could've cut each project to 6 hours. 10 projects × 24 hours wasted = 240 hours. At £60/hour = £14,400 lost. Documentation debt."
            </p>
            <p className="text-sm text-orange-800 font-semibold">Cost: £14,400 in wasted time because I didn't document early.</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The Early Documentation Win</h3>
            <p className="text-gray-700 mb-2">
              "Tom documented after 5 projects. Watched recordings. Found 70% overlap. Created 8 templates. Delivered next 5 projects at 10 hours each (down from 25). Saved 75 hours total. That's 75 hours he could work on other revenue (content, marketing, upselling). Or he delivered same work to 2x clients. Or charged same price with 2.6x margin."
            </p>
            <p className="text-sm text-green-800 font-semibold">Outcome: Early documentation = 75 hours saved, 2.6x leverage unlocked.</p>
          </div>
        </div>
      </section>

      {/* The Documentation Framework */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The 3-Step Documentation Process
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Documentation doesn't need to be perfect. It needs to be done. Follow this three-week process to document your entire service in under 10 hours total effort.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-blue-600 min-w-fit">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Record Everything (Week 1)</h3>
                  <p className="text-gray-700">Your first action: Record your next delivery with Loom. Every. Click. Every. Decision.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm">
                    On your next delivery, open Loom. Record your screen as you work. Narrate what you're doing. "Now I'm opening the design doc. Here's why I use this template instead of starting from scratch. Now I'm asking the client."
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">What to Record:</p>
                  <ul className="text-sm text-gray-700 space-y-2 ml-4">
                    <li>• <span className="font-semibold">Opening files:</span> Which apps, folders, templates do you start with?</li>
                    <li>• <span className="font-semibold">Making decisions:</span> Why this approach and not that one?</li>
                    <li>• <span className="font-semibold">Client questions:</span> How do you answer them? What do you ask back?</li>
                    <li>• <span className="font-semibold">Revisions:</span> How do you handle feedback?</li>
                    <li>• <span className="font-semibold">Final delivery:</span> How do you handoff?</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Time Impact:</p>
                  <p className="text-gray-700 text-sm">
                    Recording adds ~10% to your delivery time. A 30-hour project becomes 33 hours. But you get a permanent record of the entire process. That's worth 3 hours of time investment for a 50% efficiency gain on every future project.
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">💡 Solo Rule:</span> If you don't record, you can't remember. Memory is unreliable, especially when you're delivering. Write it down (or video it down).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-purple-600 min-w-fit">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Extract Patterns (Week 2)</h3>
                  <p className="text-gray-700">Watch your recording. Identify what repeats. Ignore the one-offs.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm mb-3">
                    Watch your recorded delivery (or deliveries if you have 3-5). Open a Google Doc. Write down every. Single. Step.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Goal: List 30-40 steps. You'll see patterns immediately. "Oh, I always do this in the same order." "I always ask these same questions." "I always use this template."
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Pattern Extraction Example (Web Design):</p>
                  <div className="bg-white rounded p-4 border border-gray-200 text-xs text-gray-700 space-y-1 font-mono ml-2">
                    <p>Step 1: Create project folder (REPEAT)</p>
                    <p>Step 2: Use Figma template (REPEAT)</p>
                    <p>Step 3: Ask client brand questions (REPEAT)</p>
                    <p>Step 4: Apply brand colors to template (REPEAT)</p>
                    <p>Step 5: Design homepage (CUSTOM)</p>
                    <p>Step 6: Design about page (REPEAT PROCESS)</p>
                    <p>Step 7: Get client feedback (REPEAT)</p>
                    <p>Step 8: Revise using feedback doc (REPEAT)</p>
                    <p>Step 9: Export to code (varies)</p>
                    <p>Step 10: Send deliverable email (REPEAT)</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">The Goal:</p>
                  <p className="text-gray-700 text-sm">
                    You want to find that 80% is same, 20% is different. If you see most steps are REPEAT, you have patterns to document. If everything is CUSTOM, you haven't looked closely enough (or your service is truly custom—which probably means you can't productize it).
                  </p>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
                <p className="text-sm text-purple-900">
                  <span className="font-semibold">💡 Solo Rule:</span> If you can't identify 80% overlap, you haven't recorded enough deliveries. Do 3-5 deliveries minimum before claiming it's all custom.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-green-600 min-w-fit">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Create SOP (Week 3)</h3>
                  <p className="text-gray-700">Write your Standard Operating Procedure. Step-by-step. With screenshots and video links.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Your Action:</p>
                  <p className="text-gray-700 text-sm">
                    Create a document (Notion, Google Doc, Coda). Title: "[Your Service] SOP". List all the REPEAT steps. For each step: add a description, screenshot, and a Loom link to the relevant 30-second clip.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">SOP Template Format:</p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6 space-y-4">
                <div className="font-bold text-gray-900">📋 [Service Name] SOP</div>
                <div className="border-t border-gray-300 pt-4 space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Step 1: [Action Name]</p>
                    <p className="text-xs text-gray-600 mt-1">Description: [2 sentences explaining what, why, and when]</p>
                    <p className="text-xs text-gray-600 mt-2">🎬 Video: [Paste Loom link]</p>
                    <p className="text-xs text-gray-600 mt-2">📸 Screenshot: [Image]</p>
                    <p className="text-xs text-gray-600 mt-2">📄 Template: [Link to template]</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 text-sm">Step 2: [Action Name]</p>
                    <p className="text-xs text-gray-600 mt-1">Description: [2 sentences]</p>
                    <p className="text-xs text-gray-600 mt-2">🎬 Video: [Paste Loom link]</p>
                    <p className="text-xs text-gray-600 mt-2">📸 Screenshot: [Image]</p>
                    <p className="text-xs text-gray-600 mt-2">📄 Template: [Link to template]</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 text-sm">Step 3: [Action Name]</p>
                    <p className="text-xs text-gray-600 mt-1">Description: [2 sentences]</p>
                    <p className="text-xs text-gray-600 mt-2">🎬 Video: [Paste Loom link]</p>
                    <p className="text-xs text-gray-600 mt-2">📸 Screenshot: [Image]</p>
                    <p className="text-xs text-gray-600 mt-2">📄 Template: [Link to template]</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-4 border border-green-300">
                <p className="text-sm text-green-900">
                  <span className="font-semibold">💡 Solo Rule:</span> If your SOP takes {">"}30 minutes per step to write, it's too detailed. Keep it simple and actionable. Goal: Someone follows it, does the work, matches your quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Template Playbook */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Template Playbook: Turn SOP Into Reusable Assets
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            SOPs document the process. Templates do the work. Create templates for every step so you're not recreating the wheel each time.
          </p>

          <div className="space-y-8">
            {/* Playbook 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook 1: The Document Template</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-6 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">What:</p>
                  <p className="text-gray-700 text-sm">
                    Create blank documents with your structure already in place. Proposal templates, invoice templates, email templates, checklists. You fill in the blanks. You don't start from scratch.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Examples:</p>
                  <ul className="text-sm text-gray-700 space-y-2 ml-4">
                    <li>• <span className="font-semibold">Proposal template:</span> Header, sections, pricing page, signature page. Copy, fill, send.</li>
                    <li>• <span className="font-semibold">Invoice template:</span> Logo, line items, payment terms, signature. Copy, fill, send.</li>
                    <li>• <span className="font-semibold">Email template:</span> Subject line, greeting, body, CTA, signature. Copy, fill, send.</li>
                    <li>• <span className="font-semibold">Kickoff checklist:</span> All questions to ask. Check boxes as you go.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Creation Time & Value:</p>
                  <p className="text-gray-700 text-sm font-mono">
                    Creation: 30 minutes per template<br/>
                    Usage: Copy, fill, send (5 minutes)<br/>
                    Time saved per use: 15-25 min<br/>
                    ROI: 1 reuse breaks even. 2+ reuses = huge savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Playbook 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook 2: The Design Template</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-6 mb-6">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">What:</p>
                  <p className="text-gray-700 text-sm">
                    Create reusable design templates in Canva, Figma, or your design tool. Grid, typography, colors, components all pre-set. Client work = duplicate template + customize + deliver.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Examples:</p>
                  <ul className="text-sm text-gray-700 space-y-2 ml-4">
                    <li>• <span className="font-semibold">Web design template:</span> 4-column grid, typography scale, component library.</li>
                    <li>• <span className="font-semibold">Presentation template:</span> 10 slide layouts, brand colors, fonts.</li>
                    <li>• <span className="font-semibold">Email template:</span> Section blocks, color palette, image dimensions.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Creation Time & Value:</p>
                  <p className="text-gray-700 text-sm font-mono">
                    Creation: 1-2 hours for complete template<br/>
                    Usage: Duplicate + customize (20 min vs 3 hours)<br/>
                    Time saved per project: 2.5 hours<br/>
                    ROI: 6 projects break even, then pure savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Playbook 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Playbook 3: The Email Template</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-bold text-gray-900 mb-4">Email Template Example: Service-to-Product Follow-Up</p>
                <div className="bg-white rounded p-4 border border-gray-300 text-sm space-y-3 font-mono text-gray-700">
                  <div>
                    <span className="font-bold">Subject:</span> A quick question about [their goal]
                  </div>
                  <div>
                    <span className="font-bold">Body:</span>
                    <div className="ml-4 mt-2 space-y-2">
                      <p>Hi [Name],</p>
                      <p>I'm launching [your offer name] to help [target audience] with [specific problem].</p>
                      <p>Not selling anything yet—just trying to understand if I'm solving a real problem.</p>
                      <p>Would you have 15 minutes this week for a quick chat about [their situation]?</p>
                      <p>If yes, pick a time here: [calendar link]</p>
                      <p>Thanks,<br/>[Your Name]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-bold">💡 Template ROI:</span> Saving 5 minutes per email × 10 emails/week = 50 minutes/week = £83 value (at £100/hour). 1 template pays for itself after 2 emails.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: Template Everything Repeatable</p>
            <p className="text-gray-700">
              If you create it once, template it. If you use it twice, template it. If you write similar emails to 5 people, template it. Templates are the bridge between documented SOP and actual time savings.
            </p>
          </div>
        </div>
      </section>

      {/* The System Playbook */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The System Playbook: Build Delivery With Templates
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Templates are pieces. Systems are how pieces fit together. Build systems so delivery runs without you directing every step.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System 1: The Checklist System</h3>
              <p className="text-gray-700 text-sm mb-4">
                Turn your SOP into a checklist. Each step becomes a checkbox. You follow it every single delivery. Zero variation. Maximum consistency.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm space-y-2 font-mono text-gray-700 mb-6">
                <p>☐ Step 1: Create project folder</p>
                <p>☐ Step 2: Duplicate design template</p>
                <p>☐ Step 3: Send kickoff email (use email template)</p>
                <p>☐ Step 4: Conduct kickoff meeting (use checklist)</p>
                <p>☐ Step 5: Design homepage using template</p>
                <p>☐ Step 6: Get client feedback using form template</p>
                <p>☐ Step 7: Revise design (max 2 rounds)</p>
                <p>☐ Step 8: Deliver final (use delivery email template)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System 2: The Automation System</h3>
              <p className="text-gray-700 text-sm mb-4">
                Use Zapier, Make, or built-in automation to handle repetitive steps. Client pays → invoice created → project folder created → welcome email sent. Automatic.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm space-y-2 font-mono text-gray-700 mb-6">
                <p><span className="font-bold">Trigger:</span> Payment received (Stripe)</p>
                <p><span className="font-bold">Action 1:</span> Create invoice (Wave)</p>
                <p><span className="font-bold">Action 2:</span> Create project folder (Google Drive)</p>
                <p><span className="font-bold">Action 3:</span> Send welcome email (Gmail template)</p>
                <p><span className="font-bold">Action 4:</span> Add to project sheet (Airtable)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">System 3: The Delegation System</h3>
              <p className="text-gray-700 text-sm mb-4">
                Create templates detailed enough that your VA can follow them without you. You do 20% (decisions, quality review). VA does 80% (execution).
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm space-y-2 text-gray-700 mb-6">
                <p><span className="font-bold">You (20%):</span> Kickoff calls, brand strategy, final review</p>
                <p><span className="font-bold">VA (80%):</span> Send welcome email, create project folder, gather brand info, design using templates, manage revisions</p>
                <p><span className="font-bold">Result:</span> 40-hour project becomes: You work 8 hours, VA works 32 hours. Your leverage = 4x.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: System = SOP + Templates + Automation + Delegation</p>
            <p className="text-gray-700">
              Documentation alone doesn't scale. Templates alone don't scale. You need all three: SOP tells you the process, templates do the work, automation removes manual steps, and delegation multiplies your capacity.
            </p>
          </div>
        </div>
      </section>

      {/* The Productized Offer */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            The Productized Offer: Turn Service Into Product
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            You've documented. You've templated. You've systemized. Now create the offer. Fixed scope, fixed price, fixed timeline.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Offer Structure</h3>

              <div className="bg-blue-50 rounded-lg p-6 space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Offer Name: "[Outcome] in [Time]"</p>
                  <p className="text-gray-700 text-sm">Examples: "Website in 7 Days" | "Email Sequence in 2 Weeks" | "Presentation in 3 Days"</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Price: Fixed</p>
                  <p className="text-gray-700 text-sm">No custom quotes. No hourly rates. One price for everyone. £2,000 or £5,000. Not "£50-100/hour."</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Scope: Fixed</p>
                  <p className="text-gray-700 text-sm">Exactly what you deliver. "Homepage + About + Contact" (not "website"). "5 email sequences" (not "email funnel").</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="font-bold text-gray-900 mb-2">Delivery: System + Templates</p>
                  <p className="text-gray-700 text-sm">You deliver using your documented system and templates. Consistent quality. Predictable timeline. Zero variation.</p>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">Timeline: Fixed</p>
                  <p className="text-gray-700 text-sm">"Delivered in 7 days" or "Delivered in 2 weeks." Not "2-3 weeks" or "depends." Fixed.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <p className="font-bold text-gray-900 mb-4">📦 Example Productized Offer: Website in 7 Days</p>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-bold">Name:</p>
                    <p>Website in 7 Days</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-bold">Price:</p>
                    <p>£3,000 (fixed, no upgrades)</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-bold">Scope:</p>
                    <p>Homepage (with hero, services, CTA) + About page + Contact page</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="font-bold">Timeline:</p>
                    <p>7 calendar days from kickoff to launch</p>
                  </div>
                  <div>
                    <p className="font-bold">Delivery Process:</p>
                    <p>Day 1: Kickoff (questions, brand info) | Days 2-4: Design using template | Days 5-6: Revisions (max 2 rounds) | Day 7: Final delivery + setup</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Productized Promise</h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center text-lg font-bold text-gray-900">
                "You'll get [outcome] in [time]<br/>for [price] using this proven process."
              </div>
              <p className="text-gray-700 text-sm mt-6">
                That's it. That's your offer. It's specific enough that clients know exactly what they're paying for. It's clear enough that you know exactly what you're delivering. It's repeateable enough that you can deliver consistently.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
            <p className="text-lg font-semibold text-yellow-900 mb-2">Solo Rule: If You Can't Explain It In One Sentence, It's Not Productized</p>
            <p className="text-gray-700">
              Your offer should be so clear you can explain it in one sentence. "I deliver websites in 7 days for £3,000." If you need 3 sentences or a long explanation, it's still custom work.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mt-8 mb-8">
            <h3 className="text-lg font-bold text-orange-900 mb-2">⚠️ Anti-Example: The Vague Service</h3>
            <p className="text-gray-700 text-sm mb-2">
              "I offer web design. Custom quotes. Custom timeline. Custom scope. I'll build whatever you need." Result: Every client is different. No templates apply. No system works. Takes 40 hours each. Never productized.
            </p>
            <p className="text-xs text-orange-800 font-semibold">vs. Productized: "Website in 7 Days for £3,000 (Homepage + About + Contact). Fixed scope. Fixed timeline. Same outcome every time."</p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Real Example: The Productized Win</h3>
            <p className="text-gray-700 text-sm mb-2">
              "Tom offered: 'Website in 7 Days for £3,000.' Before: Custom quotes, 40 hours average. Now: Fixed offer, 10 hours (using templates + system). Same price. 4x margin. He delivers to 4 clients a month (400 hours before, 40 hours now—delegated to VA)."
            </p>
            <p className="text-xs text-green-800 font-semibold">Outcome: 4x leverage, same revenue, or 1x time for 4x revenue.</p>
          </div>
        </div>
      </section>

      {/* Download Checklist */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            📥 Download Service-to-Product Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Use this checklist to move from custom service delivery to productized offer in 3 weeks.
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Week 1: Record Everything</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm text-gray-700">☐ Schedule your next delivery with Loom available</p>
                  <p className="text-sm text-gray-700">☐ Have Loom open during entire delivery</p>
                  <p className="text-sm text-gray-700">☐ Record screen + narrate your decisions</p>
                  <p className="text-sm text-gray-700">☐ Save recording (label with date)</p>
                  <p className="text-sm text-gray-700">☐ Add 10% time buffer to delivery (Loom adds ~10%)</p>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Week 2: Extract Patterns</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm text-gray-700">☐ Watch entire recording (or 3-5 recordings if you have them)</p>
                  <p className="text-sm text-gray-700">☐ Open Google Doc: "[Service] Steps"</p>
                  <p className="text-sm text-gray-700">☐ List every single step (30-50 steps)</p>
                  <p className="text-sm text-gray-700">☐ Label each step REPEAT or CUSTOM</p>
                  <p className="text-sm text-gray-700">☐ Count: If 80%+ are REPEAT, you can productize</p>
                  <p className="text-sm text-gray-700">☐ Identify the 20% custom steps (these you'll have decision-based templates for)</p>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Week 3: Create SOP & Templates</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm text-gray-700">☐ Create document: "[Service] SOP"</p>
                  <p className="text-sm text-gray-700">☐ List all REPEAT steps (use template format above)</p>
                  <p className="text-sm text-gray-700">☐ For each step: add description, Loom link, screenshot, template link</p>
                  <p className="text-sm text-gray-700">☐ Create 3 templates (document, design, or code)</p>
                  <p className="text-sm text-gray-700">☐ Test SOP on next delivery (follow it exactly)</p>
                  <p className="text-sm text-gray-700">☐ Time your delivery: should be 40-50% faster</p>
                </div>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Week 4: Create Productized Offer</h3>
                <div className="space-y-2 ml-4">
                  <p className="text-sm text-gray-700">☐ Name your offer: "[Outcome] in [Time]"</p>
                  <p className="text-sm text-gray-700">☐ Set fixed price (based on your new time · desired hourly rate)</p>
                  <p className="text-sm text-gray-700">☐ Define fixed scope (exactly what you deliver)</p>
                  <p className="text-sm text-gray-700">☐ Define fixed timeline (calendar days, not weeks)</p>
                  <p className="text-sm text-gray-700">☐ Write 1-sentence offer summary</p>
                  <p className="text-sm text-gray-700">☐ Update website/LinkedIn/proposals with new offer</p>
                  <p className="text-sm text-gray-700">☐ Deliver 3 clients using new system</p>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-6 border border-blue-300">
                <p className="text-sm text-blue-900">
                  <span className="font-bold">Success Criteria:</span> After 4 weeks, you should have: documented SOP, 3+ templates, productized offer, and confirmation that delivery time is 40-50% faster. If yes, move to delegation or automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Next Step */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Next Step
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Record your next delivery. Create 3 templates. Write one SOP. Offer productized version next week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/growth/productization/product-ladder">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Next: Product Ladder
              </button>
            </Link>
            <Link href="/growth/productization">
              <button className="px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                Back: Productization Hub
              </button>
            </Link>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Don't Skip Documentation</h3>
            <p className="text-gray-700 mb-4">
              If you skip documentation and go straight to templates, you'll create templates that don't match your actual process.
            </p>
            <p className="text-gray-700 font-semibold">
              Record first. Extract patterns second. Template third. Offer fourth. This order matters.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl border border-green-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-green-900 mb-4">✓ After Productizing</h3>
            <p className="text-gray-700">
              You've freed time. Don't add more clients at the same price. Either: (1) Charge more for same delivery time (higher margin), (2) Deliver to 2x clients (same time), or (3) Create a product ladder with multiple price points.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Productization</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/productization/product-ladder" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Product Ladder
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization/delivery-automation" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Delivery Automation
                  </Link>
                </li>
                <li>
                  <Link href="/growth/productization" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Productization Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Growth Pillar</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Growth Hub
                  </Link>
                </li>
                <li>
                  <Link href="/growth/channel-expansion" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Channel Expansion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Related</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/systems/knowledge-systems" className="text-gray-600 hover:text-blue-600 transition-colors">
                    SOPs & Systems
                  </Link>
                </li>
                <li>
                  <Link href="/tools/automation-integration" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Automation Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Previous Chapter</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/growth/productization" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Productization Hub
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
