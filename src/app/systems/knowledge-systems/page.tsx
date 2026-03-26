'use client';

import Link from 'next/link';

export default function KnowledgeSystemsPage() {
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Knowledge Systems: Never Start from Scratch</h1>
            <p className="text-xl text-gray-600 mb-6">SOPs, templates, and documentation that runs your business on autopilot. The systems that keep working even when you're tired, sick, or on vacation.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded mb-8">
            <p className="text-purple-900 font-semibold mb-0">
              "Your knowledge systems determine whether you scale or burn out. Document everything once. Use it forever."
            </p>
          </div>
        </section>

        {/* SUBCATEGORIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Knowledge Systems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/systems/knowledge-systems/sops">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Standard Operating Procedures</h3>
                <p className="text-gray-700 text-sm">The playbooks for every repeatable process in your business. So you execute the same way every time.</p>
              </div>
            </Link>

            <Link href="/systems/knowledge-systems/templates">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Template Library</h3>
                <p className="text-gray-700 text-sm">Every email, proposal, contract, and deliverable as a template. Just fill in the blanks and go.</p>
              </div>
            </Link>

            <Link href="/systems/knowledge-systems/documentation">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 hover:shadow-lg transition cursor-pointer h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-700 text-sm">How your systems work. Client onboarding docs, tool setup guides, and decision frameworks.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Here</h2>
          <p className="text-gray-700 mb-4">
            Begin with <strong>SOPs</strong> if you're reinventing the wheel on every project. Start with <strong>Templates</strong> if you're spending hours on admin. Begin with <strong>Documentation</strong> if you forget how your own systems work.
          </p>
          <p className="text-gray-700 font-semibold">
            Master all three and you'll recover 5-10 hours per week that you can spend on sales or delivery.
          </p>
        </section>

        {/* RELATED LINKS */}
        <section className="pt-12 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/systems/client-management">
              <div className="p-4 border border-gray-200 rounded hover:border-purple-500 transition">
                <p className="font-bold text-gray-900">Client Management</p>
                <p className="text-sm text-gray-600">Document your client workflows in SOPs.</p>
              </div>
            </Link>
            <Link href="/systems/project-delivery">
              <div className="p-4 border border-gray-200 rounded hover:border-purple-500 transition">
                <p className="font-bold text-gray-900">Project Delivery</p>
                <p className="text-sm text-gray-600">Your SOPs are how you deliver consistently.</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
