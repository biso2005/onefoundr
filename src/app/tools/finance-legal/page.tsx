import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Finance & Legal Tools | OneFoundr',
  description: 'Invoicing, accounting, contracts. Stay legal and get paid.',
};

export default function FinanceLegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to The Solo Stack
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Finance & Legal</h1>
          <p className="text-lg text-gray-600">Invoicing, accounting, contracts—stay legal and get paid.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Tier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link href="/tools/finance-legal/free">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 1: £0-5k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">Wave, Google Sheets, Stripe.</p>
                <div className="text-indigo-600 text-sm font-medium">Explore →</div>
              </div>
            </div>
          </Link>

          <Link href="/tools/finance-legal/lean">
            <div className="group cursor-pointer h-full">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 border-2 border-indigo-300 hover:shadow-lg transition-all h-full flex flex-col ring-2 ring-indigo-100">
                <div className="inline-block px-2 py-1 bg-indigo-600 text-white rounded text-xs font-bold mb-2 w-fit">RECOMMENDED</div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 2: £5-15k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lean Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£30/month. FreeAgent for accounting + tax.</p>
                <div className="text-indigo-600 text-sm font-medium">Explore →</div>
              </div>
            </div>
          </Link>

          <Link href="/tools/finance-legal/professional">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 3: £15k+/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£38/month. Add Wise for international.</p>
                <div className="text-indigo-600 text-sm font-medium">Explore →</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Finance Stack Principle</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Most solopreneurs avoid accounting because they fear complexity. It doesn't have to be complex. You need: invoicing, expense tracking, and tax preparation. That's it.
            </p>
            <p>
              Everything beyond that is accounting theater. Stay legal, get paid, file taxes. Nothing more.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/tools" className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition">
            ← Back to The Solo Stack
          </Link>
        </div>
      </div>
    </div>
  );
}