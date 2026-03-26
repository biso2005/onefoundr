import Link from 'next/link';

export const metadata = {
  title: 'Free Project Delivery: £0/Month to £5k/Month | OneFoundr',
  description: 'Notion, Trello, Google Drive. Deliver projects without chaos. All free. Zero-cost project system for your first 10 clients.',
  openGraph: {
    title: 'Free Project Delivery: £0/Month to £5k/Month',
    description: 'The system matters more than the tool. Notion free + Trello free + Google Drive = everything you need.',
  },
};

export default function FreeProjectDeliveryPage() {
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
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Free Project Delivery: £0/Month to £5k/Month
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Notion, Trello, Google Drive. Deliver projects without chaos. All free.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-blue-900 font-semibold mb-2">
              "I used Asana for 5 projects. Spent 30 minutes/day updating it. Switched to Notion free. Spent 5 minutes/day. Same outcome. The tool doesn't matter. The system matters."
            </p>
            <p className="text-sm text-blue-800">
              This page shows you the exact free system that delivers on time, every time.
            </p>
          </div>
        </section>
      </div>

      {/* THE PROJECT TOOL MYTH */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Project Management Software Fails for Solos</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8 text-lg">
              You don't need Asana to deliver projects. You need a system. Most project tools fail solos because they're built for teams, not one person. Here's why:
            </p>

            <div className="space-y-8">
              {/* Problem 1 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 1: The "Overhead" Trap</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-4">
                    Asana takes 15 minutes to update daily. You create tasks, set dependencies, update statuses, add comments. For a solo doing £5k/month, that's 4+ hours per week. You skip it. The tool becomes useless.
                  </p>
                  <p className="text-gray-700 font-bold">
                    Reality: You use the tool for 2 weeks. Then it sits there, gathering dust. While you deliver projects on time anyway.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 2: The "Feature Bloat" Problem</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-4">
                    ClickUp has 200 features. You use 5. You're paying £10/month (or more) for 195 features you'll never touch. You're also confused about which tool to use for what.
                  </p>
                  <p className="text-gray-700 font-bold">
                    Reality: The overwhelming choice kills you. You spend an hour configuring automation instead of delivering the project.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 3: The "Complexity" Problem</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-4">
                    Monday.com takes 20 minutes to figure out. You need training. You watch YouTube videos. You still don't know how to create a proper view. Meanwhile, a Trello board takes 30 seconds.
                  </p>
                  <p className="text-gray-700 font-bold">
                    Reality: Your brain is already full. You don't need another complex tool.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem 4: The "Cost" Problem</h3>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-4">
                  <p className="text-gray-700 mb-4">
                    Asana Pro is £10/month. You pay for it. You use it for 2 weeks. You cancel. You've wasted £10/month for 6 months before you switched to free tools.
                  </p>
                  <p className="text-gray-700 font-bold">
                    Reality: The tool costs money. You deliver the same on free tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-Example */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
            <p className="text-sm font-bold text-red-900 mb-2">Anti-Example: I Paid for Asana</p>
            <p className="text-red-800">
              I upgraded to Asana Pro for £10/month because "I need professional tools." I used dependencies once. I set up automation twice. Then I forgot about it. Wasted £60 over 6 months. Switched to Notion free. Delivered the same work. The tool was never the bottleneck.
            </p>
          </div>

          {/* Real Example */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-sm font-bold text-green-900 mb-2">Real Example: Tom's Free System</p>
            <p className="text-green-800">
              Tom uses Notion free for 15 active projects. Updates it in 5 minutes/day. Delivers every project on time. Never late. Never over-budget. Total cost: £0/month. He makes £8k/month. When I asked him about upgrading to Asana, he said: "Why? Notion does everything I need. I've never hit a limit."
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-8">
            <p className="text-lg font-bold text-gray-900 mb-2">Solo Rule:</p>
            <p className="text-gray-700">
              If your project tool takes more than 5 minutes/day to update, it's too complex. A good system gets out of your way.
            </p>
          </div>
        </div>
      </div>

      {/* THE FREE PROJECT STACK */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Get for £0/Month</h2>

        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <p className="text-gray-700 mb-8 text-lg">
            The free project stack is designed for solos doing £0-5k/month. You get everything you need: tracking, status, docs, and deliverables. No overhead.
          </p>
        </div>

        {/* NOTION */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Notion</h3>
            <div className="text-xl font-bold text-blue-600">Free</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700 mb-4">
                A database, docs, tasks, and wiki combined. For project delivery, it's your single source of truth: project status, tasks, client docs, SOPs—everything in one place.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Limits:</p>
              <p className="text-gray-700 mb-4">
                1,000 blocks per workspace. That's enough for 10 active projects + docs + SOPs. When you hit 1,000 blocks, you're making £5k+/month. Then upgrade.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Use For:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Projects database (track all active work)</li>
                <li>— Per-project page (notes, timeline, status)</li>
                <li>— Client docs (shared with them)</li>
                <li>— SOPs (how you deliver)</li>
                <li>— Checklists (scope, deliverables, review)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (10 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to notion.so</li>
                <li>2. Sign up free (email + password)</li>
                <li>3. Create workspace: "[Your Name]'s Projects"</li>
                <li>4. Create database: "Active Projects"</li>
                <li>5. Add properties: Name | Start Date | Deadline | Status | Client | Revenue</li>
                <li>6. Create statuses: Not Started | In Progress | Review | Complete</li>
              </ol>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Create new page per project</li>
                <li>— Add tasks as checklist (scope items, deliverables, QA)</li>
                <li>— Link to Google Drive folder</li>
                <li>— Update status daily (5 minutes)</li>
                <li>— Share with client when needed</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade from Notion free:</p>
            <p className="text-yellow-800">When you hit 1,000 blocks or need unlimited storage. That's £0 → £10/month when you're at £5k+/month revenue.</p>
          </div>
        </div>

        {/* TRELLO */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Trello</h3>
            <div className="text-xl font-bold text-blue-600">Free</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700 mb-4">
                Kanban board. Cards move between lists. Visual, simple, and impossible to overthink. Use it to see all projects at a glance.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Limits:</p>
              <p className="text-gray-700 mb-4">
                10 boards, 1 Power-Up. For a solo, 10 boards is more than enough (one per category or time period).
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Use For:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— "Active Projects" board (all current work)</li>
                <li>— Visual status tracking (To Do → Doing → Done)</li>
                <li>— Due dates (red flags upcoming deadlines)</li>
                <li>— Labels (Urgent, Normal, Low, Client Name)</li>
                <li>— Quick reference (what am I working on?)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (10 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to trello.com</li>
                <li>2. Sign up free</li>
                <li>3. Create board: "Active Projects"</li>
                <li>4. Create lists: To Do | Doing | Feedback | Done</li>
                <li>5. Add labels: Urgent | Normal | Low | Client A | Client B</li>
                <li>6. For each project, create a card with due date</li>
              </ol>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Create card per project</li>
                <li>— Add due date (red if 3 days away)</li>
                <li>— Move left-to-right as you work (To Do → Doing → Done)</li>
                <li>— Add label by client or priority</li>
                <li>— Attach Google Drive link</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade from Trello free:</p>
            <p className="text-yellow-800">When you need more than 10 boards or advanced features. That's rare for solos. When it happens, you're at £5k+/month.</p>
          </div>
        </div>

        {/* GOOGLE DRIVE */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Google Drive</h3>
            <div className="text-xl font-bold text-blue-600">Free (15GB)</div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">What It Is:</p>
              <p className="text-gray-700 mb-4">
                Cloud storage and file sharing. Use it to store project files, client docs, deliverables, and shared materials.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Limits:</p>
              <p className="text-gray-700 mb-4">
                15GB free. That's roughly: video projects (2-3), software projects (50+), design projects (100+). For most solos, never hit this.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Use For:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Project files (drafts, assets, working files)</li>
                <li>— Client deliverables (final outputs)</li>
                <li>— Shared folders (client access)</li>
                <li>— Backup (always synced, always accessible)</li>
                <li>— Reference (link from Notion/Trello)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold text-gray-900 mb-4">Setup (10 minutes):</p>
              <ol className="text-gray-700 space-y-2 ml-4">
                <li>1. Go to drive.google.com</li>
                <li>2. Sign in with Google account</li>
                <li>3. Create folder: "Clients"</li>
                <li>4. Inside: Create subfolder per client</li>
                <li>5. Inside each: Create "Active" and "Archive" subfolders</li>
                <li>6. Inside "Active": Create folder per project</li>
              </ol>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Solo Workflow:</p>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>— Save all project files to Drive (no local-only work)</li>
                <li>— Share project folder with client for feedback</li>
                <li>— Copy Drive link and paste into Notion/Trello</li>
                <li>— Archive completed projects (move to "Archive" folder)</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="text-sm font-bold text-yellow-900">When to upgrade from Google Drive free:</p>
            <p className="text-yellow-800">When you hit 15GB or want advanced sharing features. For most solos, never. If it happens at £5k+/month, upgrade to Google One (£1.99/month for 100GB).</p>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-3">This is usually enough</h3>
          <p className="text-gray-700 mb-4">
            You don't need Monday. You don't need ClickUp. You don't need Asana. For £0/month, Notion + Trello + Drive covers every project delivery scenario for your first 10 clients.
          </p>
          <p className="text-sm text-gray-600">
            Use this system. Keep it updated. Deliver on time. When you've delivered 50+ projects, then consider upgrading. By then, you'll know exactly what you need.
          </p>
        </div>
      </div>

      {/* THE SETUP GUIDE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">30-Minute Project System Setup</h2>

          <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
            <p className="text-gray-700 mb-8">
              This entire system takes 30 minutes to set up. No complexity. No training videos. Just straightforward setup.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">1</div>
                  <h3 className="text-2xl font-bold text-gray-900">Notion Setup (10 minutes)</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                  <ol className="text-gray-700 space-y-3">
                    <li>1. Go to <span className="font-mono">notion.so</span> and click "Sign up"</li>
                    <li>2. Use email or Google account</li>
                    <li>3. Create workspace (name it after your business)</li>
                    <li>4. Click "Add a database" → Select "Table"</li>
                    <li>5. Name it "Projects"</li>
                    <li>6. Add properties:</li>
                  </ol>
                  <div className="ml-8 mt-3 bg-blue-50 p-4 rounded border border-blue-200 text-sm">
                    <p className="font-mono text-gray-700 mb-2">Name | Start Date | Deadline | Status | Client | Revenue</p>
                    <p className="text-gray-600">Status values: Not Started, In Progress, Review, Complete, On Hold</p>
                  </div>
                  <p className="text-gray-700 mt-4">Done! You now have a project tracker.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">2</div>
                  <h3 className="text-2xl font-bold text-gray-900">Trello Setup (10 minutes)</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                  <ol className="text-gray-700 space-y-3">
                    <li>1. Go to <span className="font-mono">trello.com</span> and click "Sign up free"</li>
                    <li>2. Use email or Google account</li>
                    <li>3. Click "Create board"</li>
                    <li>4. Name it "Active Projects"</li>
                    <li>5. Create lists by clicking "Add another list":</li>
                  </ol>
                  <div className="ml-8 mt-3 bg-blue-50 p-4 rounded border border-blue-200 text-sm">
                    <p className="font-mono text-gray-700 mb-2">To Do | Doing | Feedback | Done</p>
                    <p className="text-gray-600">These four lists are all you need.</p>
                  </div>
                  <ol className="text-gray-700 space-y-3 mt-4">
                    <li>6. Add labels: Click label icon → "Create label"</li>
                    <li>7. Create: "Urgent" (red), "Normal" (yellow), "Low" (green)</li>
                  </ol>
                  <p className="text-gray-700 mt-4">Done! You now have a visual project board.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-600 flex-shrink-0">3</div>
                  <h3 className="text-2xl font-bold text-gray-900">Google Drive Setup (10 minutes)</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded border border-gray-200 ml-4">
                  <ol className="text-gray-700 space-y-3">
                    <li>1. Go to <span className="font-mono">drive.google.com</span></li>
                    <li>2. Right-click in empty space → "New folder"</li>
                    <li>3. Name it "Clients"</li>
                    <li>4. Inside "Clients", create folders for each client</li>
                    <li>5. Inside each client folder, create two folders:</li>
                  </ol>
                  <div className="ml-8 mt-3 bg-blue-50 p-4 rounded border border-blue-200 text-sm">
                    <p className="font-mono text-gray-700 mb-2">Active | Archive</p>
                    <p className="text-gray-600">"Active" = current projects. "Archive" = completed.</p>
                  </div>
                  <ol className="text-gray-700 space-y-3 mt-4">
                    <li>6. Inside "Active", create a folder for each project</li>
                    <li>7. Inside each project folder, create subfolders: Files, Deliverables, Feedback</li>
                  </ol>
                  <p className="text-gray-700 mt-4">Done! You now have a file system.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <p className="font-bold text-green-900 mb-2">✓ You're Done</p>
              <p className="text-green-800">All setup complete. Total time: 30 minutes. You now have a project system that will last you through your first 50 clients.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SOLO WORKFLOWS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Deliver Projects</h2>

        {/* Workflow 1 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 1: Starting a New Project</h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>Step 1: You get a new project</strong></p>
              <p className="ml-4 text-gray-700">Client books a call. You agree on scope. You have a project.</p>
              <p className="mt-4"><strong>Step 2: Create in Notion</strong></p>
              <p className="ml-4 text-gray-700">Add row to "Projects" database. Fill: Name, Start Date, Deadline, Client, Revenue. Set status to "Not Started".</p>
              <p className="mt-4"><strong>Step 3: Create in Trello</strong></p>
              <p className="ml-4 text-gray-700">Create card in "To Do" list. Title: "Client Name - Project Name". Add due date. Add label (client or priority).</p>
              <p className="mt-4"><strong>Step 4: Create in Google Drive</strong></p>
              <p className="ml-4 text-gray-700">Inside client's "Active" folder, create new folder: "Project Name". Add subfolders: Files, Deliverables, Feedback.</p>
              <p className="mt-4"><strong>Step 5: Link Everything</strong></p>
              <p className="ml-4 text-gray-700">In Trello card, paste Google Drive link. In Notion, paste both Trello and Drive links. Now all three are connected.</p>
              <p className="mt-4"><strong>Step 6: Start Working</strong></p>
              <p className="ml-4 text-gray-700">Move Trello card to "Doing". Update Notion status to "In Progress". Work on project in Drive.</p>
              <p className="mt-4"><strong>Step 7: Submit for Review</strong></p>
              <p className="ml-4 text-gray-700">Move Trello card to "Feedback". Move Drive files to "Deliverables" folder. Share folder with client. Send link via email.</p>
              <p className="mt-4"><strong>Step 8: Iterate</strong></p>
              <p className="ml-4 text-gray-700">Client gives feedback in Trello or Notion (or email). You update files. Move back to "Doing" until approval.</p>
              <p className="mt-4"><strong>Step 9: Complete</strong></p>
              <p className="ml-4 text-gray-700">Client approves. Move Trello card to "Done". Update Notion status to "Complete". Archive Drive folder.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Time Breakdown:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Setup (steps 1-5): 10 minutes (first time creation)</li>
              <li>— Working/Delivery: Your actual work (time varies by project)</li>
              <li>— Status updates (daily): 2 minutes</li>
              <li>— Total admin time per project: ~15 minutes</li>
            </ul>
          </div>
        </div>

        {/* Workflow 2 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 2: Daily Project Management</h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>Daily (takes 5 minutes)</strong></p>
              <p className="ml-4 text-gray-700">Open Trello. Check which cards are in "Doing". If any are 3 days from deadline, move to urgent.</p>
              <p className="mt-4"><strong>On Feedback</strong></p>
              <p className="ml-4 text-gray-700">Open Notion. Check any projects in "Review" status. If client approved, mark "Complete" and archive everything.</p>
              <p className="mt-4"><strong>On New Feedback</strong></p>
              <p className="ml-4 text-gray-700">Client sends revision requests. You update files in Drive (in same folder). Move Trello back to "Doing". Move Notion back to "In Progress".</p>
              <p className="mt-4"><strong>On Completion</strong></p>
              <p className="ml-4 text-gray-700">Client says complete. Move Trello to "Done". Update Notion to "Complete". Move Drive folder to client's "Archive" subfolder. You're done.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Daily Cadence:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Morning: Check Trello for priorities</li>
              <li>— During work: Update Drive files frequently</li>
              <li>— Before end of day: Update Notion status</li>
              <li>— Total time: 5 minutes</li>
            </ul>
          </div>
        </div>

        {/* Workflow 3 */}
        <div className="bg-white rounded-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow 3: Project Archive</h3>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <p><strong>When Project is Complete</strong></p>
              <p className="ml-4 text-gray-700">Move Trello card to "Done" (signals to you: this work stream is closed)</p>
              <p className="mt-4"><strong>Update Notion</strong></p>
              <p className="ml-4 text-gray-700">Set status to "Complete". Add completion date. Optionally add notes on what went well.</p>
              <p className="mt-4"><strong>Archive Drive Folder</strong></p>
              <p className="ml-4 text-gray-700">Move project folder from "Active" to "Archive". You keep it (don't delete). You can reference it later.</p>
              <p className="mt-4"><strong>Remove Trello Card</strong></p>
              <p className="ml-4 text-gray-700">After 1 week, archive Trello card (so board stays clean for active work only).</p>
              <p className="mt-4"><strong>Monthly Review</strong></p>
              <p className="ml-4 text-gray-700">Once/month, look at Notion "Complete" projects. See revenue, timeline, quality. This is your historical record.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="font-bold text-gray-900 mb-2">Archive Strategy:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>— Notion keeps forever (historical record)</li>
              <li>— Trello: archive after 1 week (board stays clean)</li>
              <li>— Drive: keep in Archive folder (don't delete)</li>
              <li>— You can reference completed projects anytime</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded mt-12">
          <p className="text-sm font-bold text-yellow-900 mb-2">Solo Rule:</p>
          <p className="text-yellow-800">
            These three workflows are all you need. Notion for tracking. Trello for visibility. Drive for files. When you hire someone, these tools still work because they're designed for transparency and sharing.
          </p>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Good vs Bad Project Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Good System ✓</h3>
              <div className="space-y-3 text-green-900 mb-6">
                <p><strong>Tools Used:</strong> Notion + Trello + Drive</p>
                <p><strong>Cost:</strong> £0/month</p>
                <p><strong>Time invested:</strong> 5 min/day</p>
                <p><strong>Projects Active:</strong> 10</p>
                <p><strong>On-time delivery:</strong> 100%</p>
                <p><strong>Client Satisfaction:</strong> High (always know status)</p>
                <p><strong>Overhead:</strong> Minimal (no complex configs)</p>
              </div>
              <p className="text-sm text-green-800">
                Simple system. Updated daily. Everyone knows the status. Zero surprises. Zero missed deadlines.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Bad System ✗</h3>
              <div className="space-y-3 text-red-900 mb-6">
                <p><strong>Tools Used:</strong> Asana Pro</p>
                <p><strong>Cost:</strong> £10/month</p>
                <p><strong>Time invested:</strong> 30 min/day</p>
                <p><strong>Projects Active:</strong> 10</p>
                <p><strong>On-time delivery:</strong> 80%</p>
                <p><strong>Client Satisfaction:</strong> Medium (they don't see Asana)</p>
                <p><strong>Overhead:</strong> High (dependencies, automation, templates)</p>
              </div>
              <p className="text-sm text-red-800">
                Complex tool. Too many options. You use 5% of features. Still late sometimes. Paying for something you don't need.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-lg font-bold text-gray-900 mb-4">The Solo Rule:</p>
            <p className="text-gray-700 text-lg">
              The best system is the one you actually use. Free tools force simplicity. Expensive tools tempt you to over-complicate. Simple wins every time.
            </p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Next Action</h2>
          <p className="text-lg opacity-90 mb-8">
            Before you do anything else:
          </p>
          <ol className="text-left max-w-md mx-auto mb-8 space-y-3">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">1.</span>
              <span>Set up Notion (10 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">2.</span>
              <span>Set up Trello (10 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">3.</span>
              <span>Set up Google Drive (10 minutes)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">4.</span>
              <span>Create your first project in all three</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">5.</span>
              <span>Deliver it. Track how long actual admin takes.</span>
            </li>
          </ol>
          <p className="text-lg opacity-90 mb-12">
            Total setup: 30 minutes. Total overhead per project: ~15 minutes. The rest is actual work.
          </p>

          <div className="bg-blue-700 rounded-lg p-6 mb-8">
            <p className="font-bold text-sm opacity-75 mb-2">Download the Free Project Template (Notion)</p>
            <p className="text-sm opacity-90">Copy-paste Notion database template to skip the creation step.</p>
          </div>
        </div>
      </div>

      {/* RELATED GUIDES */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link href="/tools/communication-scheduling/free">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Communication Tools</h3>
              <p className="text-gray-600 text-sm">Gmail, Calendly, Zoom. Get set up for first client calls.</p>
            </div>
          </Link>

          <Link href="/tools/project-delivery/mid-tier">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Mid-Tier Project Tools (Coming)</h3>
              <p className="text-gray-600 text-sm">When you're doing £5k+/month and need premium features.</p>
            </div>
          </Link>

          <Link href="/systems/project-delivery">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Project Delivery System</h3>
              <p className="text-gray-600 text-sm">The complete system for delivering projects on time, every time.</p>
            </div>
          </Link>

          <Link href="/marketing/content-marketing">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">Content Marketing</h3>
              <p className="text-gray-600 text-sm">Build your audience while you execute projects.</p>
            </div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">⚠️ Warning: Don't Over-Build Your System</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't spend weeks setting up templates.</strong> Start simple. Add complexity only when you hit a real problem.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't connect 5 different tools.</strong> Three is the max. Notion + Trello + Drive. That's it.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't buy the expensive tool hoping it solves everything.</strong> It won't. System beats tool every time.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't track metrics you don't need.</strong> Track: deadline met yes/no, revenue, time. That's all.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg">✗</span>
              <span><strong>Don't let the system become more important than the work.</strong> If you spend 30 min/day on admin, simplify.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Pro Tip: The Evolution Path</h3>
          <p className="text-gray-700 mb-3">
            Your system will evolve as you grow. Here's the typical path:
          </p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>— <strong>£0-£5k/month:</strong> Notion free + Trello free + Drive free (this page)</li>
            <li>— <strong>£5k-£20k/month:</strong> Notion Pro + Trello Pro + Drive One</li>
            <li>— <strong>£20k-£100k/month:</strong> Add Asana or Monday (now you need it)</li>
            <li>— <strong>£100k+/month:</strong> Add team collaboration tools (Slack, etc.)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Don't skip steps. The free system teaches you what you actually need. From there, you can upgrade intelligently.
          </p>
        </div>
      </div>
    </main>
  );
}