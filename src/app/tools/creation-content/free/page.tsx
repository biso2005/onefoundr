import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Creation & Content - Free Tier | OneFoundr',
  description: 'Canva free, Loom free, Descript free. Start creating without paying.',
};

export default function CreationContentFreePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/creation-content" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Creation & Content
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Tier (£0/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Canva (Free)</h3>
                <p className="text-gray-700">Design templates for social media, landing pages, presentations. 5,000+ templates, stock photos included.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Loom (Free)</h3>
                <p className="text-gray-700">Screen recording + webcam. Record up to 25 videos. Cloud storage included. Perfect for tutorials and async communication.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Descript (Free)</h3>
                <p className="text-gray-700">Video/podcast editing with transcription. Free tier: 600 minutes per month.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <p className="text-gray-700">
              This is enough to get started. Most solopreneurs don't create enough content to need upgrades here.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/creation-content" className="text-indigo-600 font-medium">
            ← Back
          </Link>
          <Link href="/tools/creation-content/lean" className="text-indigo-600 font-medium">
            Next: Lean Tier →
          </Link>
        </div>
      </div>
    </div>
  );
}