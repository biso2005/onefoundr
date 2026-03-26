import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Project & Delivery - Lean Tier | OneFoundr',
  description: 'Notion Plus + Trello Premium. £18/month. Professional project delivery.',
};

export default function ProjectDeliveryLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/project-delivery" className="text-indigo-600 text-sm font-medium mb-6 inline-block">
            ← Back to Project & Delivery
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lean Tier (£18/month)</h1>
          <p className="text-lg text-gray-600">Stage 2: £5-15k/month revenue.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tools Included</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Notion Plus (£8/month)</h3>
                </div>
                <p className="text-gray-700">Upgrade from free to Plus. You get templates, synced databases, and more integrations. Better for complex client projects.</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Trello Premium (£10/month)</h3>
                </div>
                <p className="text-gray-700">Kanban boards for workflows. Perfect for visual project management: To Do → In Progress → Done. Better than Notion for simple projects.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Google Drive (included)</h3>
                <p className="text-gray-700">Same as free tier.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="font-bold text-gray-900 mb-2">Total: £18/month</h3>
            <p className="text-gray-700">
              Use Notion for client documentation and project specs. Use Trello for daily workflow visibility. This combo works for up to 20 simultaneous projects.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/project-delivery/free" className="text-indigo-600 font-medium">
            ← Back: Free Tier
          </Link>
          <Link href="/tools/project-delivery/professional" className="text-indigo-600 font-medium">
            Next: Professional →
          </Link>
        </div>
      </div>
    </div>
  );
}