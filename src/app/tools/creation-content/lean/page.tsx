import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Creation & Content - Lean Tier | OneFoundr',
  description: 'Canva Pro + Loom Pro. £20/month. Professional content creation.',
};

export default function CreationContentLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-pink-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/creation-content" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Creation & Content
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lean Tier (£20/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Canva Pro (£10/month)</h3>
                </div>
                <p className="text-gray-700">Unlimited folders, premium templates, brand kit (save logos/colors), resize designs, background removal.</p>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Loom Pro (£10/month)</h3>
                </div>
                <p className="text-gray-700">Unlimited recordings, better editing, custom branding, password protection, 1000 minutes storage per month.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £20/month</h3>
            <p className="text-gray-700">
              If you're making 2-3 videos per week + designing graphics for social media, this pays for itself in time saved and professionalism gained.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/creation-content/free" className="text-indigo-600 font-medium">
            ← Back: Free Tier
          </Link>
          <Link href="/tools/creation-content/professional" className="text-indigo-600 font-medium">
            Next: Professional →
          </Link>
        </div>
      </div>
    </div>
  );
}