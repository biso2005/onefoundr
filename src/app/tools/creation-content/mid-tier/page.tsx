'use client';

import Link from 'next/link';

export default function MidTierCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Mid-Tier Creation Tools: £30/Month</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Mid-Tier Creation: When Free Limits Cost You Content
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Canva Pro, Loom Pro, Descript Creator. £30/month total. Upgrade when free limits stop you from creating content, not when you want nicer templates.
          </p>
          <div className="bg-white rounded-xl border border-pink-200 p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-3">The Real Story:</p>
            <p className="text-gray-700 leading-relaxed">
              "I hit Canva's 5GB storage limit at £4k/month revenue. Couldn't upload any more designs. Free tier was literally stopping me from creating thumbnails. Upgraded to Canva Pro (£10/month), got unlimited storage. Created 50 more thumbnails that month. Each thumbnail worth £40 in video value. That's £2,000 in content. 66x ROI. But here's the thing: I didn't upgrade for 'prettier' templates. I upgraded because free limits stopped my content."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-700 transition">
              Upgrade to Mid-Tier
            </button>
            <Link href="/tools/creation-content/pro">
              <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition">
                View Pro Tier
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Upgrade Triggers Section */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            When to Upgrade from Free
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl leading-relaxed">
            Three signals that free tools are limiting your revenue. When you hit ANY of these, mid-tier pays for itself in days.
          </p>

          <div className="space-y-8">
            {/* Trigger 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 1: You're Hitting Canva's 5GB Storage Limit</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Free limit:</span> 5GB storage</p>
                  <p><span className="font-semibold text-gray-900">What happens:</span> You can't upload new designs. Your design process stops.</p>
                  <p><span className="font-semibold text-gray-900">Real cost:</span> You miss 10 thumbnail opportunities = 10 × £40 = £400 in content value.</p>
                  <p><span className="font-semibold text-gray-900">Hidden cost:</span> Your audience doesn't see the 10 videos. Growth slows. That's £5,000 in diminished reach.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900 mb-4">Upgrade Solution</p>
                  <p className="text-gray-700 mb-4">Canva Pro: £10/month → 100GB storage</p>
                  <p className="text-gray-700 mb-6">Create 20 more designs that month</p>
                  <div className="bg-white p-4 rounded border border-pink-100">
                    <p className="text-sm text-gray-700 mb-2">ROI Calculation:</p>
                    <p className="text-2xl font-black text-pink-600">50x ROI</p>
                    <p className="text-xs text-gray-600 mt-2">(£500 value ÷ £10 cost)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trigger 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 2: You Need Video Recordings Over 5 Minutes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Free limit:</span> 5 minutes per video</p>
                  <p><span className="font-semibold text-gray-900">What happens:</span> You can't record tutorials, case studies, or deep-dive lessons. Any video over 5 min cuts off.</p>
                  <p><span className="font-semibold text-gray-900">Real cost:</span> You can't offer video courses, training, or tutorials = £1,000+ revenue lost.</p>
                  <p><span className="font-semibold text-gray-900">Impact:</span> This is a revenue blocker. You're turned down client requests because you can't deliver.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900 mb-4">Upgrade Solution</p>
                  <p className="text-gray-700 mb-4">Loom Pro: £10/month → Unlimited videos, unlimited length</p>
                  <p className="text-gray-700 mb-6">Record unlimited tutorial videos</p>
                  <div className="bg-white p-4 rounded border border-pink-100">
                    <p className="text-sm text-gray-700 mb-2">ROI Calculation:</p>
                    <p className="text-2xl font-black text-pink-600">100x ROI</p>
                    <p className="text-xs text-gray-600 mt-2">(£1,000 opportunity ÷ £10 cost)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trigger 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trigger 3: You're Creating Podcasts or Audio Courses</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Free limit:</span> 3 hours transcription/month</p>
                  <p><span className="font-semibold text-gray-900">What happens:</span> You hit the limit by week 2. Can't transcribe more content. Podcasts sit without transcripts.</p>
                  <p><span className="font-semibold text-gray-900">Real cost:</span> No transcriptions = no blog posts, no social snippets, no repurposed content = £500+ opportunity lost.</p>
                  <p><span className="font-semibold text-gray-900">Impact:</span> Transcriptions are where true content multiplier value lives. Without them, you're leaving 80% of your content on the table.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900 mb-4">Upgrade Solution</p>
                  <p className="text-gray-700 mb-4">Descript Creator: £12/month → 10 hours transcription/month</p>
                  <p className="text-gray-700 mb-6">Create 7 more hours of transcribable content</p>
                  <div className="bg-white p-4 rounded border border-pink-100">
                    <p className="text-sm text-gray-700 mb-2">ROI Calculation:</p>
                    <p className="text-2xl font-black text-pink-600">41x ROI</p>
                    <p className="text-xs text-gray-600 mt-2">(£500 value ÷ £12 cost)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solo Rule */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-300 p-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">The Solo Rule</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">"If free limits stop you from creating content, upgrade. If they don't, they won't."</span> The mid-tier isn't about having more space or longer videos. It's about removing the constraint that's stopping your revenue. If Canva's storage is fine, don't upgrade for storage. If Loom's time limit isn't hitting you, don't pay extra. Only upgrade the constraint that's blocking your content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-Tier Stack Section */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            The Mid-Tier Stack
          </h2>

          {/* Canva Pro */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Canva Pro: £10/Month (Unlimited Storage + Pro Templates)</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-semibold text-gray-900 mb-4">What You Get</p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ 100GB storage (vs 5GB free) - create 20x more designs</li>
                  <li>✓ 100,000+ premium templates not on free tier</li>
                  <li>✓ Background remover (saves 5 min per design)</li>
                  <li>✓ Brand Kit (apply your colors to all designs instantly)</li>
                  <li>✓ Magic Resize (resize thumbnail to Instagram post to banner in seconds)</li>
                  <li>✓ Premium fonts (1,000+ fonts vs basic free selection)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Real-World Math</p>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="font-semibold text-gray-900 mb-2">If you create 20 designs/month:</p>
                    <p className="mb-3">• Time saved: 5 min × 20 = 100 minutes</p>
                    <p className="mb-3">• Value: 100 min ÷ 60 × £50/hr = £83</p>
                    <p className="text-sm">But the real value is the storage. Hit 5GB? Upgrade instantly.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">Monthly ROI: 20x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loom Pro */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Loom Pro: £10/Month (Unlimited Videos + No Watermark)</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-semibold text-gray-900 mb-4">What You Get</p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Unlimited videos (vs 25 free) - record as much as you want</li>
                  <li>✓ Unlimited video length (vs 5 min limit) - record 20 min tutorials</li>
                  <li>✓ No Loom watermark - looks professional</li>
                  <li>✓ Premium editing (trim, chapters, reactions)</li>
                  <li>✓ Transcripts included (automatic captions)</li>
                  <li>✓ Custom branding (your logo in player)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Real-World Math</p>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="font-semibold text-gray-900 mb-2">If you record 10 videos/month:</p>
                    <p className="mb-3">• Content value: 10 × £20 per video = £200</p>
                    <p className="mb-3">• Cost: £10</p>
                    <p className="text-sm">Each unlimited video is worth more than the monthly cost.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">Monthly ROI: 20x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descript Creator */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Descript Creator: £12/Month (10 Hours Transcription)</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-semibold text-gray-900 mb-4">What You Get</p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ 10 hours transcription/month (vs 3 free) - 3.3x more capacity</li>
                  <li>✓ Overdub (AI voice replacement) - fix mistakes without re-recording</li>
                  <li>✓ Filler word removal (auto-remove "ums" and "ahs") - save 5 min per hour</li>
                  <li>✓ 99% transcription accuracy (human-level)</li>
                  <li>✓ Video speed ramping - change pace dynamically</li>
                  <li>✓ 1080p+ export - publish professional</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-4">Real-World Math</p>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="font-semibold text-gray-900 mb-2">If you transcribe 5 hours/month:</p>
                    <p className="mb-3">• Extra hours available: 5 hours (beyond 3 free)</p>
                    <p className="mb-3">• Value: 5 hours × £50/hr = £250</p>
                    <p className="mb-3">• Cost: £12</p>
                    <p className="text-sm">Transcription unlocks blog posts, social snippets, and email content multipliers.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">Monthly ROI: 20x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stack Summary */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-300 p-8">
            <p className="text-2xl font-bold text-gray-900 mb-6">Mid-Tier Stack Total</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Canva Pro</p>
                <p className="text-gray-700">£10/month</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Loom Pro</p>
                <p className="text-gray-700">£10/month</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Descript Creator</p>
                <p className="text-gray-700">£12/month</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-pink-300">
              <p className="text-4xl font-black text-pink-600 mb-3">£32/Month</p>
              <p className="text-gray-700">Breaks even when you save 20 minutes creating content (£100/hour).</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Scenarios Section */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            ROI Calculations: Mid-Tier Pays for Itself How?
          </h2>
          <p className="text-xl text-gray-700 mb-16 leading-relaxed">
            Three real scenarios showing exactly when mid-tier ROI kicks in.
          </p>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 1: You Design 20 Thumbnails/Month</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Setup:</span> You create YouTube video thumbnails. Each needs Canva design time. Storage has hit 5GB (can't upload more). You're blocked.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Free Cost:</span> You can't create, so £0 revenue from thumbnails.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 space-y-3">
                  <p className="font-semibold text-gray-900">Mid-Tier Math:</p>
                  <p>Thumbnails created: 20</p>
                  <p>Value per thumbnail: £40 (video reach + CTR impact)</p>
                  <p>Total value: 20 × £40 = £800</p>
                  <p>Cost: Canva Pro (£10) + Loom Pro (£10) = £20 (only using Canva + Loom) </p>
                  <p className="text-2xl font-black text-pink-600 mt-4">ROI: 40x</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 2: You Record Tutorial Videos (10 videos)</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Setup:</span> You want to create a customer onboarding video series. Free tier limits videos to 5 min each. Your tutorials are 15-20 minutes. You're blocked.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Free Cost:</span> No tutorial series = no upsell option = £2,000 revenue lost.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 space-y-3">
                  <p className="font-semibold text-gray-900">Mid-Tier Math:</p>
                  <p>Tutorial videos created: 10</p>
                  <p>Value per video: £100 (course/training premium)</p>
                  <p>Total value: 10 × £100 = £1,000</p>
                  <p>Cost: Loom Pro (£10) + Descript Creator (£12) for transcripts = £22</p>
                  <p className="text-2xl font-black text-pink-600 mt-4">ROI: 45x</p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scenario 3: You Launch a Podcast (5 Hours/Month)</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Setup:</span> You're podcasting. Each episode needs transcription for blog, social clips, email. Free tier gives 3 hours/month. You're creating 5 hours. Blocked after week 2.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Free Cost:</span> No transcriptions = no blog posts, no social repurposing = £500 content multiplier value lost.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 space-y-3">
                  <p className="font-semibold text-gray-900">Mid-Tier Math:</p>
                  <p>Extra transcription hours available: 7 hours (10 - 3)</p>
                  <p>Value per hour: £75 (blog, social, email repurposing)</p>
                  <p>Total value: 7 × £75 = £525</p>
                  <p>Cost: Descript Creator (£12)</p>
                  <p className="text-2xl font-black text-pink-600 mt-4">ROI: 44x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30-Minute Setup Guide */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            30-Minute Mid-Tier Setup
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            Upgrade all three tools. Get unlimited. Start creating.
          </p>

          {/* Step 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Canva Pro Setup (10 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 1.1: Go to Canva</p>
                <p>Visit canva.com → Log in to your free account</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.2: Click Upgrade</p>
                <p>Dashboard → Click your profile (top right) → "Upgrade to Pro" → Click "Pro (£10/month)"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.3: Add Payment Method</p>
                <p>Enter card details → Click "Subscribe" → Verify email</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.4: Set Up Brand Kit</p>
                <p>Dashboard → Click "Brand Kit" → Upload logo → Add brand colors → Add fonts → Save</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.5: Create Test Design</p>
                <p>Create new design → Browse premium templates → Create a thumbnail → Use Brand Kit colors → Download</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-4">
                <p className="font-semibold text-gray-900">Pro Tip:</p>
                <p>Brand Kit is the real unlock. Every design instantly gets your colors and fonts. This saves 30 seconds × designs = hours per month.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Loom Pro Setup (8 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 2.1: Go to Loom</p>
                <p>Visit loom.com → Log in → Click profile (bottom left)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.2: Click Upgrade</p>
                <p>Select "Pro (£10/month)" → Click "Subscribe" → Enter card details → Confirm</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.3: Customize Your Settings</p>
                <p>Profile settings → Video title (auto-format) → Enable captions → Set default sharing (private/link)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 2.4: Record Test Video (5 min)</p>
                <p>Click "Record" → Select screen + camera → Record 5 minute tutorial → Stop → Verify no watermark → Share link</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-4">
                <p className="font-semibold text-gray-900">Key Check:</p>
                <p>Verify Loom Pro video shows NO Loom watermark. If watermark still appears, refresh browser or contact support.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Descript Creator Setup (12 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 3.1: Go to Descript</p>
                <p>Visit descript.com → Log in → Click "Upgrade" (top right)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.2: Select Creator Plan</p>
                <p>Click "Creator (£12/month)" → Click "Subscribe" → Enter card → Confirm</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.3: Upload Test Audio</p>
                <p>Dashboard → Click "New project" → Upload an audio file (5-10 min) → Wait for auto-transcription (usually 2x real time)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.4: Explore Creator Features</p>
                <p>Edit text (removes audio) → Remove filler words (Creator feature) → Export with captions → Download</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 3.5: Test Overdub (Creator Feature)</p>
                <p>Click timestamp → "Overdub" → Speak correction → Listen back → Verify synthetic voice replaces original</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-4">
                <p className="font-semibold text-gray-900">Time Note:</p>
                <p>Transcription takes 2x the audio length. A 10-min audio file takes ~20 min to transcribe. This is normal.</p>
              </div>
            </div>
          </div>

          {/* Setup Complete */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-300 p-8">
            <p className="text-xl font-bold text-gray-900 mb-4">Setup Complete</p>
            <div className="space-y-3 text-gray-700">
              <p>✓ Canva Pro: 100GB storage + Brand Kit configured</p>
              <p>✓ Loom Pro: First video recorded (no watermark verified)</p>
              <p>✓ Descript Creator: First audio transcribed + tested Overdub</p>
              <p className="font-semibold text-gray-900 mt-4">You're now running mid-tier creation tools. Total time: 30 minutes. Total cost: £32/month.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Workflows */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Three Real Mid-Tier Workflows
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            Exact steps to create content faster with mid-tier tools.
          </p>

          {/* Workflow 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Professional Thumbnail Creation (5 min per thumbnail)</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Before Mid-Tier (Free Canva):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Open Canva free → Search "YouTube Thumbnail"</p>
                  <p>2. Find basic template</p>
                  <p>3. Edit text (slow, basic colors)</p>
                  <p>4. Add your logo (crop manually)</p>
                  <p>5. Download</p>
                  <p className="font-semibold text-gray-900 mt-3">Time: 15 minutes</p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <p className="font-semibold text-gray-900 mb-4">After Mid-Tier (Canva Pro + Brand Kit):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Open Canva Pro → Search premium templates</p>
                  <p>2. Pick premium template (better design options)</p>
                  <p>3. Brand Kit auto-applies your colors + logo (instant)</p>
                  <p>4. Edit text (takes 30 seconds)</p>
                  <p>5. Magic Resize to Instagram + Twitter versions</p>
                  <p>6. Download all 3</p>
                  <p className="font-semibold text-gray-900 mt-3">Time: 5 minutes (70% faster)</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">ROI Math:</p>
                <div className="space-y-2 text-gray-700">
                  <p>Time saved: 15 - 5 = 10 min per thumbnail</p>
                  <p>Thumbnails per week: 7 (one per video)</p>
                  <p>Total time saved: 70 min/week = 280 min/month</p>
                  <p>Value: 280 min ÷ 60 × £50/hr = £233 per month</p>
                  <p className="font-semibold text-gray-900 mt-3">Net: £233 - £32 (mid-tier cost) = £201 profit/month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 2 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Tutorial Video Creation (20 min recording + 10 min edit)</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Before Mid-Tier (Free Loom):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Script (5 min)</p>
                  <p>2. Record with Loom (limited to 5 min segments)</p>
                  <p>3. Hit free limit → Can't continue</p>
                  <p>4. Can't offer tutorials due to time constraint</p>
                  <p className="font-semibold text-gray-900 mt-3">Result: Revenue: £0 (blocked)</p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <p className="font-semibold text-gray-900 mb-4">After Mid-Tier (Loom Pro):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Script (5 min)</p>
                  <p>2. Record full tutorial (20 min, no limits)</p>
                  <p>3. Loom Pro editing: add chapters, trim</p>
                  <p>4. Auto-transcription included (ready for blog)</p>
                  <p>5. Share and track engagement</p>
                  <p>6. Offer as lead magnet or paid course</p>
                  <p className="font-semibold text-gray-900 mt-3">Time: 30 minutes for one professional tutorial</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Business Impact:</p>
                <div className="space-y-2 text-gray-700">
                  <p>Before: Can't create tutorials = £0</p>
                  <p>After: 2 tutorials/week = 8 tutorials/month</p>
                  <p>Each tutorial converts at 5% (lead + email)</p>
                  <p>Value: 8 × £50 lead value = £400/month</p>
                  <p className="font-semibold text-gray-900 mt-3">Net: £400 - £32 = £368 profit from unlocking this workflow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow 3 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Podcast Transcription & Repurposing (60 min audio → 5 assets)</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Before Mid-Tier (Free Descript):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Record podcast (60 min)</p>
                  <p>2. Upload to Descript (3 hrs/month free limit)</p>
                  <p>3. Hit free limit mid-month → Can't transcribe more</p>
                  <p>4. No transcripts = no blog posts, no social clips, no email content</p>
                  <p className="font-semibold text-gray-900 mt-3">Result: Single-use podcast. No multiplier effect.</p>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <p className="font-semibold text-gray-900 mb-4">After Mid-Tier (Descript Creator):</p>
                <div className="space-y-2 text-gray-700 font-mono text-sm">
                  <p>1. Record podcast (60 min)</p>
                  <p>2. Upload to Descript Creator (10 hrs/month limit)</p>
                  <p>3. Auto-transcription (2 min wait)</p>
                  <p>4. Remove filler words (Creator feature, saves 3 min per hour)</p>
                  <p>5. Export 5 assets:</p>
                  <p className="ml-6">• Full transcript (for blog post)</p>
                  <p className="ml-6">• 3x 60-sec clips (for LinkedIn, Twitter, TikTok)</p>
                  <p className="ml-6">• Email newsletter version (key quotes)</p>
                  <p>6. Publish all 5 simultaneously</p>
                  <p className="font-semibold text-gray-900 mt-3">Time: 20 minutes for full podcast ecosystem</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Content Multiplier Impact:</p>
                <div className="space-y-2 text-gray-700">
                  <p>Before: 1 podcast = 1 asset (audience: podcast listeners)</p>
                  <p>After: 1 podcast = 5 assets:</p>
                  <p className="ml-6">→ 1 blog post (SEO traffic)</p>
                  <p className="ml-6">→ 3 social videos (reach 10,000+)</p>
                  <p className="ml-6">→ 1 newsletter (£200+ in affiliate opportunities)</p>
                  <p>Total value: 1 podcast × 5 = 5x audience reach</p>
                  <p className="font-semibold text-gray-900 mt-3">Monthly: 4 podcasts × 5 assets = 20 content pieces from 4 hours of speaking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Real Examples: Mid-Tier in Action
          </h2>

          <div className="bg-white rounded-xl border border-green-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Alex's Workflow Unlock (SaaS Founder)</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Bootstrapped SaaS with £2k/month revenue. Hitting Canva's 5GB storage limit. Free tier Loom videos only 5 min. Couldn't create customer onboarding videos. Couldn't create marketing thumbnails.
              </p>
              <p><span className="font-semibold text-gray-900">Decision:</span> Upgraded to mid-tier (£32/month)</p>
              <p className="font-semibold text-gray-900">First Month Results:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Created 30 thumbnails (vs 10 free tier)</li>
                <li>Recorded 5 customer onboarding videos (15 min each)</li>
                <li>Posted tutorial series to YouTube</li>
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">Revenue Impact:</span> Thumbnail improvements increased video CTR by 20% = £200 extra/month. Onboarding videos reduced support team questions by 15% = 4 hours saved per week = £800 in labor = £200/month multiplier.
              </p>
              <p className="font-semibold text-gray-900">Total gain: £400/month (12.5x ROI on £32 investment)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Marcus's False Upgrade (Solopreneur)</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Content creator at £500/month. Not hitting ANY free limits. Canva storage at 2GB (plenty left). Creating 5 videos/month (well under free limits). No podcast. Still on free tier.
              </p>
              <p><span className="font-semibold text-gray-900">Decision:</span> "Upgraded to mid-tier anyway (£32/month). Figured more tools = more content."</p>
              <p className="font-semibold text-gray-900">Result:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Created same 5 videos/month (mid-tier tools didn't change effort)</li>
                <li>Didn't hit storage limit (still at 3GB)</li>
                <li>Didn't get value from features he wasn't using</li>
                <li>Paid £32/month for zero benefit</li>
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">Lesson:</span> Tools don't unlock workflows you're not ready for. Only upgrade when free limits actually stop you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Should You Upgrade to Mid-Tier?
          </h2>
          <p className="text-xl text-gray-700 mb-16">Ask these questions first.</p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">1. Are you hitting ANY free tier limits?</p>
              <p className="text-gray-700">Canva 5GB filled? Loom videos over 5 min? Descript over 3 hrs? If yes to any: Upgrade. If no to all: Stay free.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">2. Are you creating more than 20 pieces/month?</p>
              <p className="text-gray-700">If yes: You'll hit storage limits eventually. Upgrade now. If no: Free tier is enough. Focus on making 20 first.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">3. Is your revenue at least £5k/month?</p>
              <p className="text-gray-700">If yes: £32/month is negligible. Upgrade for the workflows. If no: Your priority is revenue, not tools.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">4. Are you ready to create 100+ pieces total?</p>
              <p className="text-gray-700">If yes: You've mastered free. Time for mid-tier workflows. If no: You're still learning. Stay free, practice first.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">5. Would unlocking one new workflow (tutorials, podcasts) change your business?</p>
              <p className="text-gray-700">If yes (e.g., "I could finally offer training"): That's £400+ ROI per month. Upgrade. If no (e.g., "It's nice to have"): Stay free.</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-200 p-8">
            <p className="font-semibold text-gray-900 mb-3">The Rule</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">"If you answered yes to 3+ questions: Upgrade to mid-tier. If 2 or fewer: Stay free and create 50 more pieces first."</span>
            </p>
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
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Don't Upgrade for "Nice to Have" Features</h3>
                <div className="space-y-4 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Premium templates look nicer:</span> But your audience doesn't care about template quality. They care about content. Create with free templates first.</p>
                  <p><span className="font-semibold text-gray-900">Unlimited storage sounds great:</span> But if you have 1GB left, you're not blocking your revenue. Upgrade only when you hit the limit.</p>
                  <p><span className="font-semibold text-gray-900">Longer video limits seem useful:</span> But if you're not recording, extra time won't help. Only upgrade if you actively need it.</p>
                  <p className="mt-6 font-semibold text-gray-900">Upgrade when free blocks your workflow. Not when paid feels nicer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Continue Your Creation Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/tools/creation-content/free">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">Previous Tier</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Tools</h3>
                <p className="text-gray-700 text-sm mb-4">Still using free? Master them first. Hit 100 pieces before upgrading.</p>
                <p className="text-purple-600 font-semibold">Back to free →</p>
              </div>
            </Link>
            <Link href="/tools/creation-content/pro">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">Next Tier</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Tools</h3>
                <p className="text-gray-700 text-sm mb-4">After £50k revenue. Premium templates, 4K editing, unlimited everything.</p>
                <p className="text-pink-600 font-semibold">Explore pro tier →</p>
              </div>
            </Link>
            <Link href="/marketing/content-marketing">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Strategy</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
                <p className="text-gray-700 text-sm mb-4">What to create. When to post. Tools don't create strategies.</p>
                <p className="text-blue-600 font-semibold">Learn strategy →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 sm:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to Unlock New Workflows?</h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            Mid-tier tools pay for themselves when you hit ONE limit. If you're creating 20+ pieces/month and revenue is £5k+, it's time.
          </p>
          <button className="bg-white text-pink-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
            Download Mid-Tier Setup Checklist
          </button>
          <p className="text-pink-200 text-sm mt-8">30-minute setup. £32/month. 20x+ ROI when limits hit.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p className="mb-4">Mid-Tier Creation & Content Tools. Ready to upgrade?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:text-sm">
            <Link href="/tools/creation-content/free" className="text-pink-600 font-semibold hover:underline">
              Back to Free Tools →
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/tools/creation-content/pro" className="text-pink-600 font-semibold hover:underline">
              Explore Pro Tier →
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/marketing/social-media" className="text-pink-600 font-semibold hover:underline">
              Distribution Strategy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
