import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Finance & Legal - Free Tier | OneFoundr',
  description: 'Wave, Google Sheets, Stripe. Free accounting and payment processing.',
};

export default function FinanceLegalFreePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-red-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/finance-legal" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Finance & Legal
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Free Tier (£0/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wave (Free)</h3>
                <p className="text-gray-700">Invoicing and accounting. Create professional invoices, track expenses, see profit/loss. Best free accounting software available.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Google Sheets</h3>
                <p className="text-gray-700">Manual expense tracking backup. If Wave goes down, you have a spreadsheet.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stripe (Transaction fees)</h3>
                <p className="text-gray-700">Payment processing. 2.9% + 20p per transaction. You pay only when you get paid.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <p className="text-gray-700">
              This is enough to be legal and profitable. You have invoicing, expense tracking, and can receive payments. Your accountant can work with Wave data for tax time.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/finance-legal" className="text-indigo-600 font-medium">
            ← Back
          </Link>
          <Link href="/tools/finance-legal/lean" className="text-indigo-600 font-medium">
            Next: Lean Tier →
          </Link>
        </div>
      </div>
    </div>
  );
}