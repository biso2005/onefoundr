'use client';

import Link from 'next/link';

export default function BusinessOperationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link href="/systems" className="text-blue-600 hover:underline text-sm">
            ← Back to Systems Hub
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Business Operations: The Money Side</h1>
            <p className="text-xl text-gray-600 mb-6">Invoicing, finance tracking, and admin systems that don't require a degree in accounting. Everything profitable solopreneurs need to stay legal and solvent.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded mb-8">
            <p className="text-yellow-900 font-semibold mb-0">
              "You can't scale what you don't measure. Your money system determines whether you're profitable or just busy."
            </p>
          </div>
        </section>

        {/* SUBCATEGORIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Business Operations System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/systems/business-operations/invoicing">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-yellow-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Invoicing System</h3>
                <p className="text-gray-700 text-sm">How to invoice so clients pay within 14 days instead of 90. Templates, follow-up, and payment terms.</p>
              </div>
            </Link>

            <Link href="/systems/business-operations/finance-tracking">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-yellow-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Finance Tracking</h3>
                <p className="text-gray-700 text-sm">Track revenue, expenses, and profit without hiring an accountant. Real-time visibility into your business health.</p>
              </div>
            </Link>

            <Link href="/systems/business-operations/admin">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-yellow-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Admin & Legal</h3>
                <p className="text-gray-700 text-sm">The minimum admin you need to stay legal, protect yourself, and not lose sleep over compliance.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Here</h2>
          <p className="text-gray-700 mb-4">
            Begin with <strong>Invoicing</strong> if you're waiting 60+ days to get paid. Start with <strong>Finance Tracking</strong> if you don't know your profit margin. Begin with <strong>Admin & Legal</strong> if you're worried about getting sued.
          </p>
          <p className="text-gray-700 font-semibold">
            Master all three and you'll have 30+ extra hours per year and a business you can actually measure.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/systems/project-delivery">
              <div className="p-4 border border-gray-200 rounded hover:border-yellow-500 transition">
                <p className="font-bold text-gray-900">Project Delivery</p>
                <p className="text-sm text-gray-600">Finish delivery before you invoice.</p>
              </div>
            </Link>
            <Link href="/offer/pricing-strategy">
              <div className="p-4 border border-gray-200 rounded hover:border-yellow-500 transition">
                <p className="font-bold text-gray-900">Pricing Strategy</p>
                <p className="text-sm text-gray-600">Your pricing determines whether this ops system matters.</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
