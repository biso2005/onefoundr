import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Finance & Legal - Lean Tier | OneFoundr',
  description: 'FreeAgent for accounting. £30/month. Professional bookkeeping and tax prep.',
};

export default function FinanceLegalLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/finance-legal" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Finance & Legal
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lean Tier (£30/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">FreeAgent (£30/month)</h3>
                </div>
                <p className="text-gray-700 mb-4">Complete accounting tool designed for solopreneurs. Replaces Wave with better UX, bank reconciliation, automatic quarterly profit/loss, and tax dashboard.</p>
                <div className="text-sm text-gray-600">
                  <strong>At £5-15k/month revenue, FreeAgent's tax tracking pays for itself alone.</strong>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stripe (Transaction fees)</h3>
                <p className="text-gray-700">Same as free tier. Payment processing at 2.9% + 20p.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £30/month</h3>
            <p className="text-gray-700">
              Professional accounting. You have automated tax categories, quarterly reports, and can hand FreeAgent data directly to an accountant for tax filing.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/finance-legal/free" className="text-indigo-600 font-medium">
            ← Back: Free Tier
          </Link>
          <Link href="/tools/finance-legal/professional" className="text-indigo-600 font-medium">
            Next: Professional →
          </Link>
        </div>
      </div>
    </div>
  );
}