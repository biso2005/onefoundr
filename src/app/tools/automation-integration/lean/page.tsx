import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Automation & Integration - Lean Tier | OneFoundr',
  description: 'Zapier Starter. £15/month. Automate 1-2 core workflows.',
};

export default function AutomationIntegrationLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/automation-integration" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Automation & Integration
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lean Tier (£15/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Zapier Starter (£15/month)</h3>
                </div>
                <p className="text-gray-700 mb-4">750 tasks per month. Enough for 20-30 daily automations.</p>
                <p className="text-sm text-gray-600 mb-4">Example workflows:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Gmail → Notion (new leads)</li>
                  <li>Stripe → Slack (payment notification)</li>
                  <li>Google Forms → Sheet (data collection)</li>
                  <li>Typeform → Calendar (booking automation)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <p className="text-gray-700">
              This saves 3-5 hours per week on manual data entry and notifications. ROI is massive at this price point.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/automation-integration/free" className="text-indigo-600 font-medium">
            ← Back: Free Tier
          </Link>
          <Link href="/tools/automation-integration/professional" className="text-indigo-600 font-medium">
            Next: Professional →
          </Link>
        </div>
      </div>
    </div>
  );
}