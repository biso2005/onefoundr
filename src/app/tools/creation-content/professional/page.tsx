import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Creation & Content - Professional Tier | OneFoundr',
  description: 'Canva Pro + Loom Pro + Riverside. £47/month. Studio-quality video production.',
};

export default function CreationContentProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/creation-content" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Creation & Content
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Tier (£47/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Canva Pro (£10/month)</h3>
                <p className="text-gray-700">Same as Lean tier.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Loom Pro (£10/month)</h3>
                <p className="text-gray-700">Same as Lean tier.</p>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Riverside (£15/month)</h3>
                </div>
                <p className="text-gray-700 mb-4">Studio-quality remote video recording. Records each participant in HD locally, then syncs. Way better than Zoom recordings. Perfect for podcasts, interviews, webinars.</p>
                <p className="text-sm text-gray-600">Also consider: Figma (£12/month) for design work if you need more advanced graphics.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £47/month</h3>
            <p className="text-gray-700">
              Professional-grade content creation. If you're doing weekly podcasts, courses, or video content, this is your tier.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/creation-content/lean" className="text-indigo-600 font-medium">
            ← Back: Lean Tier
          </Link>
          <Link href="/tools" className="text-indigo-600 font-medium">
            Back to Solo Stack →
          </Link>
        </div>
      </div>
    </div>
  );
}