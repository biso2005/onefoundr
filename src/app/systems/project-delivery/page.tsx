'use client';

import Link from 'next/link';

export default function ProjectDeliveryPage() {
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
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Project Delivery: On Time, Every Time</h1>
            <p className="text-xl text-gray-600 mb-6">How to manage timelines, track progress, and deliver without scope creep. Without Asana. Without status meetings.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-8">
            <p className="text-green-900 font-semibold mb-0">
              "One missed deadline kills your reputation faster than one bad project result. Your delivery system is your brand."
            </p>
          </div>
        </section>

        {/* SUBCATEGORIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Project Delivery System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/systems/project-delivery/timeline">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Timeline Planning</h3>
                <p className="text-gray-700 text-sm">How to set realistic project timelines, build in buffer time, and communicate deadlines clearly.</p>
              </div>
            </Link>

            <Link href="/systems/project-delivery/scope-management">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Scope Management</h3>
                <p className="text-gray-700 text-sm">The protocol for handling scope creep, change requests, and client additions mid-project.</p>
              </div>
            </Link>

            <Link href="/systems/project-delivery/delivery-checklist">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Delivery Checklist</h3>
                <p className="text-gray-700 text-sm">The pre-delivery process to ensure nothing gets missed before you hand off work.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Here</h2>
          <p className="text-gray-700 mb-4">
            Begin with <strong>Timeline Planning</strong> if you're always running late. Start with <strong>Scope Management</strong> if clients keep asking for additions. Begin with <strong>Delivery Checklist</strong> if you're shipping incomplete work.
          </p>
          <p className="text-gray-700 font-semibold">
            Master all three and you'll deliver faster clients than agencies that charge 10x your rate.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/systems/client-management">
              <div className="p-4 border border-gray-200 rounded hover:border-green-500 transition">
                <p className="font-bold text-gray-900">Client Management</p>
                <p className="text-sm text-gray-600">Track and communicate with the client while you deliver.</p>
              </div>
            </Link>
            <Link href="/systems/business-operations">
              <div className="p-4 border border-gray-200 rounded hover:border-green-500 transition">
                <p className="font-bold text-gray-900">Business Operations</p>
                <p className="text-sm text-gray-600">Invoice and get paid once you've delivered.</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
