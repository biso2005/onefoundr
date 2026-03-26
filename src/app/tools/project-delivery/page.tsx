import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Project & Delivery Tools | OneFoundr',
  description: 'Task management, time tracking, file storage. Free to professional tiers.',
};

export default function ProjectDeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6 inline-block">
            ← Back to The Solo Stack
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Project & Delivery</h1>
          <p className="text-lg text-gray-600">Task management, time tracking, file storage—deliver without chaos.</p>
        </div>
      </div>

      {/* TIERS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Tier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <Link href="/tools/project-delivery/free">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 1: £0-5k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Free Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">Notion free, Google Drive, Airtable free.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore free tools →</div>
              </div>
            </div>
          </Link>

          {/* Lean Tier */}
          <Link href="/tools/project-delivery/lean">
            <div className="group cursor-pointer h-full">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-indigo-300 hover:shadow-lg transition-all h-full flex flex-col ring-2 ring-indigo-100">
                <div className="inline-block px-2 py-1 bg-indigo-600 text-white rounded text-xs font-bold mb-2 w-fit">RECOMMENDED</div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 2: £5-15k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Lean Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£18/month. Notion Plus and Trello Premium.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore lean tier →</div>
              </div>
            </div>
          </Link>

          {/* Professional Tier */}
          <Link href="/tools/project-delivery/professional">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 3: £15k+/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Professional Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£33/month. Add Sunsama for daily planning.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore professional →</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Project Stack Principle</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Project management tools aren't about perfection. They're about visibility. You need to know what's due, what's done, and what's stuck.
            </p>
            <p>
              The worst solopreneurs use complex tools with no follow-through. The best use simple tools with daily discipline.
            </p>
            <p>
              Your stack should have:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>One place for client projects (Notion or Trello)</li>
              <li>One place for daily tasks (Sunsama or Google Tasks)</li>
              <li>One place for files (Google Drive or Dropbox)</li>
            </ul>
            <p>
              That's it. Everything else is noise.
            </p>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="bg-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/tools" className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition">
            ← Back to The Solo Stack
          </Link>
        </div>
      </div>
    </div>
  );
}