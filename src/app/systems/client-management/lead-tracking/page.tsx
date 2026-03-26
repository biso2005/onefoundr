import Link from 'next/link';
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/systems/client-management" className="text-blue-600 hover:underline text-sm">
            ← Back to Client Management
          </Link>
        </div>
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lead Tracking System</h1>
          <p className="text-xl text-gray-600 mb-8">This guide is coming soon. Check back in a few days.</p>
          <Link href="/systems/client-management">
            <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Back to Client Management
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
