import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Finance & Legal - Professional Tier | OneFoundr',
  description: 'FreeAgent + Wise Business. £38/month. For international payments and high volume.',
};

export default function FinanceLegalProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/finance-legal" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Finance & Legal
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Tier (£38/month)</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">FreeAgent (£30/month)</h3>
                <p className="text-gray-700">Same as Lean tier. Complete accounting.</p>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Wise Business (£8/month)</h3>
                </div>
                <p className="text-gray-700">International payment account. Receive payments from anywhere, send to any currency. If you work with global clients, this is essential. Saves 3-5% on exchange rates vs. traditional banks.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £38/month</h3>
            <p className="text-gray-700">
              Professional accounting with global payment support. For solopreneurs earning £15k+ monthly with international clients.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/finance-legal/lean" className="text-indigo-600 font-medium">
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