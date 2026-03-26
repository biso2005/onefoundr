'use client';

import Link from 'next/link';

export default function FreeCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Free Creation Tools: £0/Month</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            £0/Month to 100 Pieces of Content
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Canva free, Loom free, Descript free, CapCut. Create visuals, videos, audio, graphics. All free. All powerful enough.
          </p>
          <div className="bg-white rounded-xl border border-pink-200 p-6 mb-8">
            <p className="text-gray-900 font-semibold mb-3">The Real Story:</p>
            <p className="text-gray-700 leading-relaxed">
              "I created 100 YouTube videos using free tools only. Canva free for thumbnails. Loom free for screen recording. Descript free for audio editing and transcription. CapCut free for final video editing. Total cost: £0. Total views: 100,000+ within a year. The tools don't limit you. Your creativity does."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-700 transition">
              Start Creating Free
            </button>
            <Link href="/tools/creation-content/mid-tier">
              <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition">
                Explore Mid-Tier
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Creation Myth Section */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Why Paid Tools Don't Matter (Yet)
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
            Most solopreneurs upgrade tools thinking it'll make them more productive. In reality, tool upgrades are procrastination. You don't need better software. You need consistency. Create 100 pieces with free tools. Master them. Then upgrade.
          </p>

          <div className="space-y-8">
            {/* Myth 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Myth 1: "I Need Professional Software"</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Belief:</span> You think you need advanced software. Professional tools. Professional results.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Canva free produces the same visuals as Canva paid. Loom free records in 1080p HD. CapCut free exports 4K. Descript free transcribes perfectly. The software doesn't limit you. Your audience cares about content, not software.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900">Proof:</p>
                  <p>Top YouTube creators started with free tools. Growth doesn't come from software. It comes from consistency and creativity.</p>
                </div>
              </div>
            </div>

            {/* Myth 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Myth 2: "Free Tools Have Low Quality"</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Belief:</span> Free tools = low quality output. Paid tools = professional quality.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Free tools export the exact same resolution as paid. Canva free exports PNG, PDF at full resolution. CapCut free renders 4K video. Loom free records HD. Descript free transcribes with 99% accuracy. The quality is identical. The features are limited, not the quality.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900">Comparison:</p>
                  <p>Canva Free: 1,000,000+ templates, 5GB storage, HD export. Canva Paid: same templates, unlimited storage, same export. The paid version gives you storage, not quality.</p>
                </div>
              </div>
            </div>

            {/* Myth 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Myth 3: "Better Tools Make Me More Productive"</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Belief:</span> If I upgrade to paid tools, I'll create more content faster.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> The tool doesn't create content. You do. Most creators using paid tools create less than creators using free tools. The difference? Practice and routine, not software. A creator using CapCut free daily will outproduce someone using premium software once a month.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900">The Pattern:</p>
                  <p>Upgrade tool → Think you'll create more → Don't because the tool isn't the problem → Quit. The real problem is consistency, not capability.</p>
                </div>
              </div>
            </div>

            {/* Myth 4 */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Myth 4: "I Need Advanced Features"</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">The Belief:</span> I need advanced effects, color grading, AI features. Free tools don't have them.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">The Reality:</span> Free tools have more features than you'll ever use. Canva free has thousands of effects. CapCut free has AI features. Descript free has auto-captions. Loom free has instant sharing. You don't need advanced features. You need basic features used consistently.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <p className="font-semibold text-gray-900">The Math:</p>
                  <p>80% of creators use 20% of features. Free tools give you 100% of what you need, 0% of what you don't.</p>
                </div>
              </div>
            </div>

            {/* Solo Rule */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 p-8">
              <p className="text-lg font-bold text-gray-900 mb-3">The Solo Creation Rule</p>
              <p className="text-gray-700">
                "If you haven't created 100 pieces of content, free tools are enough. Paid tools won't make you create more. They'll make you procrastinate on features you don't need. Create 100 pieces free. Then decide."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Creation Stack */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            The Free Creation Stack: £0/Month
          </h2>

          {/* Canva */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Canva Free: Graphics for Everything</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Drag-and-drop graphic design. No design experience needed. Thousands of templates for social posts, thumbnails, presentations, YouTube thumbnails, TikTok covers. Pick template, edit text, change colors, download.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Key Specs</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 250,000+ free templates</li>
                  <li>✓ 5GB free storage</li>
                  <li>✓ 1000s of free fonts</li>
                  <li>✓ Millions of free images</li>
                  <li>✓ Export: PNG, PDF, MP4</li>
                  <li>✓ 1080p+ quality</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Your Solo Workflow</p>
                <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p>1. Open Canva</p>
                  <p>2. Search "YouTube Thumbnail"</p>
                  <p>3. Pick template (30 seconds)</p>
                  <p>4. Edit text + colors (5 min)</p>
                  <p>5. Download PNG (10 seconds)</p>
                  <p>6. Upload to YouTube</p>
                  <p className="font-semibold text-gray-900 mt-4">Time: 5-10 minutes per graphic</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="font-semibold text-gray-900 mb-2">When to Upgrade</p>
              <p className="text-gray-700">If you hit 5GB storage, you've created 1,000+ graphics. At that point, you're at £5k+/month revenue. Upgrade then.</p>
            </div>
          </div>

          {/* Loom */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Loom Free: Screen Recording Instant Sharing</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Record your screen + camera in HD. Instant playback link. Perfect for tutorials, proposals, feedback videos, training. No download, no export headache. Record, share link, done.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Key Specs</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 5 minutes per video limit</li>
                  <li>✓ 25 videos total storage</li>
                  <li>✓ Screen + webcam recording</li>
                  <li>✓ 1080p HD quality</li>
                  <li>✓ Instant shareable link</li>
                  <li>✓ View analytics</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Your Solo Workflow</p>
                <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p>1. Click Loom extension</p>
                  <p>2. Start recording</p>
                  <p>3. Record tutorial (5 min max)</p>
                  <p>4. Stop recording</p>
                  <p>5. Copy share link</p>
                  <p>6. Send to client/audience</p>
                  <p className="font-semibold text-gray-900 mt-4">Time: Record once, share forever</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="font-semibold text-gray-900 mb-2">When to Upgrade</p>
              <p className="text-gray-700">If you hit 25 videos, you're creating consistently. At that point, upgrade to unlimited. But most solos stay free for 6+ months.</p>
            </div>
          </div>

          {/* Descript */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Descript Free: Audio/Video Editing by Text</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Upload audio or video. Descript automatically transcribes it. Edit by deleting text (removes audio). Add captions. Remove filler words. Export video. The revolutionary part: You edit video like editing a document.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Key Specs</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 3 hours transcription/month free</li>
                  <li>✓ Auto-transcription (99% accurate)</li>
                  <li>✓ Text-based editing</li>
                  <li>✓ Auto-captions</li>
                  <li>✓ Filler word removal</li>
                  <li>✓ 1080p+ export</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Your Solo Workflow</p>
                <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p>1. Record audio/video (20 min)</p>
                  <p>2. Upload to Descript</p>
                  <p>3. Auto-transcribe (2 min wait)</p>
                  <p>4. Edit text (delete filler)</p>
                  <p>5. Add captions (auto)</p>
                  <p>6. Export video</p>
                  <p className="font-semibold text-gray-900 mt-4">Time: 25 min for polished video</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="font-semibold text-gray-900 mb-2">When to Upgrade</p>
              <p className="text-gray-700">If you podcast/record 3+ hours per month, upgrade. If below 3 hours, free is plenty.</p>
            </div>
          </div>

          {/* CapCut */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">CapCut Free: Professional Video Editing</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">What It Is</p>
                <p className="text-gray-700 mb-6">
                  Mobile + desktop video editing. Unlimited projects, unlimited exports. TikTok-optimized but works for YouTube, Reels, everything. Features: transitions, effects, text, music, slow-mo, speed ramping, green screen, color grading. Free version is legitimately unlimited.
                </p>
                <p className="font-semibold text-gray-900 mb-3">Key Specs</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Unlimited videos</li>
                  <li>✓ Unlimited exports</li>
                  <li>✓ Desktop + mobile</li>
                  <li>✓ 4K export</li>
                  <li>✓ 1000s of effects</li>
                  <li>✓ Built-in music library</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Your Solo Workflow</p>
                <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                  <p>1. Open CapCut</p>
                  <p>2. Import footage</p>
                  <p>3. Cut clips (10 min)</p>
                  <p>4. Add transitions (5 min)</p>
                  <p>5. Add text + music (5 min)</p>
                  <p>6. Export 4K</p>
                  <p className="font-semibold text-gray-900 mt-4">Time: 20 min for professional video</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-pink-50 p-4 rounded-lg border border-pink-200">
              <p className="font-semibold text-gray-900 mb-2">Our Verdict</p>
              <p className="text-gray-700 font-semibold">CapCut free is so good you'll never need to upgrade. Seriously. Use CapCut free forever.</p>
            </div>
          </div>

          {/* Stack Summary */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-300 p-8">
            <p className="text-2xl font-bold text-gray-900 mb-6">Free Stack Summary</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-3">The Tools</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Canva: Graphics + thumbnails</li>
                  <li>✓ Loom: Screen recording</li>
                  <li>✓ Descript: Audio/video editing</li>
                  <li>✓ CapCut: Video editing (unlimited)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">The Cost</p>
                <p className="text-4xl font-black text-pink-600">£0</p>
                <p className="text-gray-700">Total monthly investment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30-Minute Setup Guide */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            30-Minute Free Creation Stack Setup
          </h2>
          <p className="text-xl text-gray-700 mb-16">
            From zero to creating content. Install 4 tools. Configure. Done.
          </p>

          {/* Step 1 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Canva Setup (8 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <div>
                <p className="font-semibold text-gray-900">Step 1.1: Go to Canva</p>
                <p>Visit canva.com → Click "Sign up" → Use email or Google account</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.2: Create Your First Graphic</p>
                <p>Dashboard → Click "Create a design" → Search "YouTube Thumbnail" → Pick template</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.3: Edit Template</p>
                <p>Change title text. Change background color. Upload your logo (if you have one). Takes 2 minutes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Step 1.4: Download</p>
                <p>Click "Download" → Select PNG → Download. You now have your first graphic.</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-4">
                <p className="font-semibold text-gray-900">Pro Tip:</p>
                <p>Create a "Saved templates" folder. As you customize designs, save them. Next time, duplicate saved template. Takes 30 seconds instead of 5 minutes.</p>
              </div>
            </div>
          </div>

          {/* Step 2-Step 4 (abbreviated for space) */}
          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Loom Setup (7 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <p>Visit loom.com → Sign up free → Install Chrome extension → Record test video (1 min) → Copy and share link</p>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-4">
                <p className="font-semibold text-gray-900">Pro Tip:</p>
                <p>Check Loom analytics to see how long people watch. This is your feedback loop.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Descript Setup (8 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <p>Visit descript.com → Sign up free → Create new project → Upload audio/video → Wait for auto-transcription → Edit text → Export video with captions</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">CapCut Setup (7 minutes)</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 ml-14">
              <p>Download CapCut (capcut.com or app store) → Open → Create new project → Import video → Add transitions and effects → Add music → Export 4K</p>
            </div>
          </div>

          {/* Setup Complete */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-300 p-8">
            <p className="text-xl font-bold text-gray-900 mb-4">Setup Complete</p>
            <div className="space-y-3 text-gray-700">
              <p>✓ Canva installed and tested (first graphic created)</p>
              <p>✓ Loom installed and tested (test video recorded)</p>
              <p>✓ Descript installed and tested (audio transcribed)</p>
              <p>✓ CapCut installed and tested (video edited)</p>
              <p className="font-semibold text-gray-900 mt-4">Total Time: 30 minutes. You're now a content creator with £0 invested.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Workflows */}
      <div className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            3 Real Workflows for Content Creation
          </h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Complete YouTube Video (30 min total)</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
              <p>1. Script (5 min)</p>
              <p>2. Record screen with Loom (5 min)</p>
              <p>3. Edit with Descript (5 min)</p>
              <p>4. Create thumbnail with Canva (5 min)</p>
              <p>5. Final edit with CapCut (5 min)</p>
              <p>6. Upload to YouTube (5 min)</p>
              <p className="font-bold text-gray-900 mt-4">One professional YouTube video in 30 minutes</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Quick Social Media Post (10 min)</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
              <p>1. Record clip (30 sec - 1 min)</p>
              <p>2. Edit with CapCut (4 min)</p>
              <p>3. Create cover graphic with Canva (2 min)</p>
              <p>4. Post to LinkedIn, Twitter, TikTok, Instagram (3 min)</p>
              <p className="font-bold text-gray-900 mt-4">One video across 4 platforms in 10 minutes</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: In-Depth Tutorial (25 min)</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-3 font-mono text-sm text-gray-700">
              <p>1. Script outline (5 min)</p>
              <p>2. Record 3 segments with Loom (12 min)</p>
              <p>3. Combine in CapCut (5 min)</p>
              <p>4. Polish in Descript (2 min)</p>
              <p>5. Upload (1 min)</p>
              <p className="font-bold text-gray-900 mt-4">Professional 6-minute tutorial in 25 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">
            Real Examples: Free Tools in Action
          </h2>

          <div className="bg-white rounded-xl border border-green-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Tom's Content Creation Journey</h3>
            <div className="space-y-4 text-gray-700">
              <p>Marketing coach with zero video experience. Used Canva + Loom + Descript + CapCut free for 100+ videos over 2 years.</p>
              <p className="font-semibold text-gray-900">Results:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>50,000 subscribers</li>
                <li>£50k+ revenue from course sales</li>
                <li>Total tool cost: £0</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">Free tools didn't limit him. They forced focus on content over software complexity.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-red-100 p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Sarah's Software Trap</h3>
            <div className="space-y-4 text-gray-700">
              <p>Bought Adobe Creative Suite (£70/month). Spent a week learning software. Created 3 videos. Quit.</p>
              <p className="font-semibold text-gray-900">The Cost:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>£700+ invested</li>
                <li>3 videos created</li>
                <li>£233 per video in tool cost</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">The problem wasn't free tools. It was expecting software to build the habit of creation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Should You Upgrade to Mid-Tier Tools?
          </h2>
          <p className="text-xl text-gray-700 mb-16">Answer these 5 questions to know when to upgrade.</p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">1. Have you created 100+ pieces of content?</p>
              <p className="text-gray-700">If no: Stay on free. You're still learning the basics. Upgrade after 100.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">2. Are you hitting tool limits consistently?</p>
              <p className="text-gray-700">If no: Free tools are fine. If yes (5GB Canva, 25 Loom videos, 3+ hours Descript): Time to upgrade.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">3. Is your content generating revenue?</p>
              <p className="text-gray-700">If no: Free tools. If yes: Mid-tier makes sense. Profit should exceed tool cost.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">4. Are you creating at least 3-4 pieces per week?</p>
              <p className="text-gray-700">If no: Free is enough. Consistency beats software. If yes: Mid-tier helps manage volume.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <p className="font-semibold text-gray-900 mb-3">5. Do you have authority in your niche (5k+ audience)?</p>
              <p className="text-gray-700">If no: Free tools teach you the skills. If yes: Mid-tier allows pro features your audience expects.</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl border border-pink-200 p-8">
            <p className="font-semibold text-gray-900 mb-3">Rule of Thumb:</p>
            <p className="text-gray-700 text-lg leading-relaxed">If you answered "yes" to 3+ questions: Consider mid-tier. If 2 or fewer: Free tools are enough. If 0-1: Definitely stay free.</p>
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
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Don't Upgrade Until Constraints Force You</h3>
                <div className="space-y-4 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Haven't created 100 pieces:</span> Free tools work. Upgrading is procrastination disguised as optimization.</p>
                  <p><span className="font-semibold text-gray-900">Not creating consistently:</span> The problem isn't software. It's habit. Paid tools won't fix this.</p>
                  <p className="mt-6 font-semibold text-gray-900">Create 100 pieces with free tools first. Then upgrade. Not before.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16">Continue Your Content Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/tools/creation-content/mid-tier">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">Next Tier</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mid-Tier Content Tools</h3>
                <p className="text-gray-700">Canva Pro, Loom Pro, Descript Pro. For 100+ videos with audience.</p>
                <p className="text-pink-600 font-semibold mt-4">Explore mid-tier →</p>
              </div>
            </Link>
            <Link href="/marketing/content-marketing">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8 cursor-pointer hover:shadow-lg transition">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Strategy</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Marketing Strategy</h3>
                <p className="text-gray-700">What to create. When to post. The strategy behind the tools.</p>
                <p className="text-blue-600 font-semibold mt-4">Learn content strategy →</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 sm:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Start Creating Today</h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            30-minute setup. Zero cost. Create your first piece of content in the next 60 minutes.
          </p>
          <button className="bg-white text-pink-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
            Download Creation Workflow Template
          </button>
          <p className="text-pink-200 text-sm mt-8">30-minute setup. £0 cost. Unlimited potential.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p className="mb-4">Completed Free Creation & Content Tools guide. What next?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:text-sm">
            <Link href="/tools/creation-content/mid-tier" className="text-pink-600 font-semibold hover:underline">
              Explore Mid-Tier →
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/marketing/content-marketing" className="text-pink-600 font-semibold hover:underline">
              Content Strategy →
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/marketing/social-media" className="text-pink-600 font-semibold hover:underline">
              Social Media Guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}