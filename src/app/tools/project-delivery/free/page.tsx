import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Project & Delivery - Free Tier | OneFoundr',
  description: 'Notion free, Google Drive, Airtable free. Everything to manage projects at startup.',
};

export default function ProjectDeliveryFreePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/project-delivery" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Project & Delivery
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Tier (£0/month)</h1>
          <p className="text-lg text-gray-600">Stage 1: £0-5k/month revenue.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tools Included</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Notion (Free)</h3>
                <p className="text-gray-700">Database for projects, clients, and deliverables. One workspace, unlimited pages.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Google Drive</h3>
                <p className="text-gray-700">File storage, folder organization, shared folders with clients.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Airtable (Free)</h3>
                <p className="text-gray-700">Alternative to Notion if you prefer spreadsheet-style databases.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <p className="text-gray-700">
              This is enough for 5-10 projects at once. Everything is manual. No automation. That's fine at this stage—you're not busy enough to need it.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/project-delivery" className="text-indigo-600 font-medium">
            ← Back
          </Link>
          <Link href="/tools/project-delivery/lean" className="text-indigo-600 font-medium">
            Next: Lean Tier →
          </Link>
        </div>
      </div>
    </div>
  );
}