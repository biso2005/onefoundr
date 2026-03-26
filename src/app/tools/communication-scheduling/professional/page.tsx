import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Communication & Scheduling - Professional Tier | OneFoundr',
  description: 'Google Workspace + Calendly Pro + Zoom Pro. £26/month. For high-volume client calls.',
};

export default function CommunicationSchedulingProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/communication-scheduling" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6 inline-block">
            ← Back to Communication & Scheduling
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Professional Tier (£26/month)</h1>
          <p className="text-lg text-gray-600">Stage 3: £15k+/month revenue. For high-volume communication.</p>
        </div>
      </div>

      {/* TOOLS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          
          {/* Google Workspace */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Google Workspace</h3>
                <p className="text-sm text-gray-600 mb-4">Email + collaboration suite</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">£6/month</p>
              </div>
            </div>
            <p className="text-gray-700">
              Same as Lean tier. Professional email domain (firstname@yourname.com) with full Gmail, Calendar, Drive, and Docs.
            </p>
          </div>

          {/* Calendly Pro */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calendly Pro</h3>
                <p className="text-sm text-gray-600 mb-4">Advanced scheduling</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">£8/month</p>
              </div>
            </div>
            <p className="text-gray-700">
              Same as Lean tier. Multiple event types, custom scheduling pages, reminder sequences.
            </p>
          </div>

          {/* Zoom Pro */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zoom Pro</h3>
                <p className="text-sm text-gray-600 mb-4">Video conferencing</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">£12/month</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Unlimited 1-on-1 and group calls up to 40 minutes. Screen sharing works perfectly. Recording automatically goes to cloud storage. Way better than Google Meet for client calls.
            </p>
            <div className="text-sm font-bold text-gray-900 mb-2">What you get:</div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Unlimited group meetings (up to 40 mins)</li>
              <li>Cloud recording</li>
              <li>Screen sharing</li>
              <li>Virtual background</li>
              <li>Local recording</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>Why worth it:</strong> At 10+ client calls per week, Zoom's reliability and features matter. Google Meet sometimes has connection issues. Zoom never does.</p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Total: £26/month</h3>
            <div className="space-y-2 text-gray-700">
              <p>Google Workspace: £6/month</p>
              <p>Calendly Pro: £8/month</p>
              <p>Zoom Pro: £12/month</p>
              <p className="font-bold text-indigo-900 pt-2">= £26/month</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This is the professional communication stack. It handles high-volume client calls without any technical issues.
            </p>
          </div>

          {/* When to upgrade */}
          <div className="bg-yellow-50 border border-yellow-200 rounded p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">When to upgrade to Professional:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You're booking 10+ client calls per week</li>
              <li>Clients complain about video or audio quality</li>
              <li>You need to record calls for training/documentation</li>
              <li>You're at reversible revenue stage (£15k+/month)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              If you're under 5 calls per week, Lean tier is plenty.
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/communication-scheduling/lean" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back: Lean Tier
          </Link>
          <Link href="/tools" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Back to Solo Stack →
          </Link>
        </div>
      </div>
    </div>
  );
}
