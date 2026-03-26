import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Project & Delivery - Professional Tier | OneFoundr',
  description: 'Notion Plus + Trello Premium + Sunsama. £33/month. For high-volume project delivery.',
};

export default function ProjectDeliveryProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/project-delivery" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Project & Delivery
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Tier (£33/month)</h1>
          <p className="text-lg text-gray-600">Stage 3: £15k+/month revenue.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tools Included</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Notion Plus + Trello Premium (£18/month)</h3>
                <p className="text-gray-700">Same as Lean tier.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Sunsama (£15/month)</h3>
                </div>
                <p className="text-gray-700">Daily planning dashboard. Syncs with Trello, Google Calendar, and other tools. Tells you what to work on first, every morning. Reduces decision fatigue by 80%.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £33/month</h3>
            <p className="text-gray-700">
              This is for solopreneurs managing 20+ active projects at once. Sunsama becomes essential when you have too much to track mentally.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/project-delivery/lean" className="text-indigo-600 font-medium">
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