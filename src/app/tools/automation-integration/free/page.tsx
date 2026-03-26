import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Automation & Integration - Free Tier | OneFoundr',
  description: 'Zapier free (100 tasks/month), Make free. Start automating your workflow.',
};

export default function AutomationIntegrationFreePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/automation-integration" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Automation & Integration
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Tier (£0/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zapier (Free)</h3>
                <p className="text-gray-700 mb-2">100 tasks per month. Task limit reached? Move to Starter tier.</p>
                <p className="text-sm text-gray-600">Good for: 2-3 simple automations. (e.g., "When new Gmail arrives, add to Notion")</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Make (Free)</h3>
                <p className="text-gray-700">Alternative to Zapier. More visual workflow builder, slightly slower support.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <p className="text-gray-700">
              At this stage, don't automate. Build your process manually first. Learn where the friction is. Then automation becomes obvious.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/automation-integration" className="text-indigo-600 font-medium">
            ← Back
          </Link>
          <Link href="/tools/automation-integration/lean" className="text-indigo-600 font-medium">
            Next: Lean Tier →
          </Link>
        </div>
      </div>
    </div>
  );
}