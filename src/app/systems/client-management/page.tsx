import Link from 'next/link';

export default function ClientManagementPage() {
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Client Management: Track, Communicate, Deliver</h1>
            <p className="text-xl text-gray-600 mb-6">Everything you need to manage clients without a CRM. Lead tracking, communication templates, file organization—all simple.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-blue-900 font-semibold mb-0">
              "A well-organized client system is the difference between chaos and predictable revenue. Most solopreneurs don't have one."
            </p>
          </div>
        </section>

        {/* SUBCATEGORIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Client Management System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/systems/client-management/lead-tracking">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Lead Tracking</h3>
                <p className="text-gray-700 text-sm">How to track prospects from first message to close without losing anyone in the gap.</p>
              </div>
            </Link>

            <Link href="/systems/client-management/communication">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Communication System</h3>
                <p className="text-gray-700 text-sm">Email templates, follow-up sequences, and client response protocols that don't take all day.</p>
              </div>
            </Link>

            <Link href="/systems/client-management/file-storage">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">File Storage & Organization</h3>
                <p className="text-gray-700 text-sm">Where to store client files so you can find them in 5 seconds, not 25 minutes.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Here</h2>
          <p className="text-gray-700 mb-4">
            Begin with <strong>Lead Tracking</strong> if you're losing prospects. Start with <strong>Communication</strong> if you're drowning in email. Begin with <strong>File Storage</strong> if you can't find client assets.
          </p>
          <p className="text-gray-700 font-semibold">
            Complete all three and you'll have a client management system that runs itself.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/systems/project-delivery">
              <div className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
                <p className="font-bold text-gray-900">Project Delivery</p>
                <p className="text-sm text-gray-600">Deliver that work on time once you've landed the client.</p>
              </div>
            </Link>
            <Link href="/sales/natural-selling">
              <div className="p-4 border border-gray-200 rounded hover:border-blue-500 transition">
                <p className="font-bold text-gray-900">Natural Selling</p>
                <p className="text-sm text-gray-600">Generate those leads in the first place with DM outreach.</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
