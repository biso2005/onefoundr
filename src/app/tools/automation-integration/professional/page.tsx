import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Automation & Integration - Professional Tier | OneFoundr',
  description: 'Zapier Professional. £50/month. Enterprise-scale automation.',
};

export default function AutomationIntegrationProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/automation-integration" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Automation & Integration
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Tier (£50/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Zapier Professional (£50/month)</h3>
                </div>
                <p className="text-gray-700 mb-4">2,000 tasks per month. Includes everything from Starter plus:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>Advanced filters and formatting</li>
                  <li>Multi-step zaps (long automation chains)</li>
                  <li>Built-in apps (advanced scheduling)</li>
                  <li>Premium search and sort</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £50/month</h3>
            <p className="text-gray-700">
              For solopreneurs at £15k+/month with 50+ daily automations needed. Most never get here.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/automation-integration/lean" className="text-indigo-600 font-medium">
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