import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Communication & Scheduling - Free Tier | OneFoundr',
  description: 'Gmail, Google Calendar, Calendly free. Everything needed to start communicating with clients.',
};

export default function CommunicationSchedulingFreePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/communication-scheduling" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6 inline-block">
            ← Back to Communication & Scheduling
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Free Tier (£0/month)</h1>
          <p className="text-lg text-gray-600">Stage 1: £0-5k/month revenue. Everything included.</p>
        </div>
      </div>

      {/* TOOLS */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          
          {/* Gmail */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gmail</h3>
            <p className="text-sm text-gray-600 mb-4">Email client</p>
            <p className="text-gray-700 mb-4">
              Free Gmail account with your personal domain using Google Workspace. You get a professional email, client communication, and search that actually works.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>Tip:</strong> Use labels and filters to organize client emails. Create a label for each client.</p>
            </div>
          </div>

          {/* Google Calendar */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Google Calendar</h3>
            <p className="text-sm text-gray-600 mb-4">Calendar and event management</p>
            <p className="text-gray-700 mb-4">
              Free calendar included with any Google account. Share your availability, schedule client calls, and set reminders. You can embed it on your website.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>Tip:</strong> Create separate calendars for clients, personal, and admin tasks. Color-code them.</p>
            </div>
          </div>

          {/* Calendly Free */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Calendly (Free)</h3>
            <p className="text-sm text-gray-600 mb-4">Scheduling automation</p>
            <p className="text-gray-700 mb-4">
              Free Calendly tier gives you one calendar integration and unlimited event types. Clients can see your availability and book a time without email back-and-forth. Saves 3 minutes per meeting.
            </p>
            <div className="text-sm font-bold text-gray-900 mb-2">What you get:</div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Unlimited appointments</li>
              <li>1 event type</li>
              <li>Automatic reminders</li>
              <li>Basic integrations</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>When to upgrade:</strong> Only upgrade to Pro (£8/month) when you have multiple meeting types (discovery, follow-up, project planning).</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="text-lg font-bold text-gray-900 mb-3">This is usually enough</h3>
            <p className="text-gray-700 mb-4">
              You don't need Slack, Teams, or a CRM at this stage. You need email and scheduling. That's it. Most solopreneurs waste time and money building a "communication hub" before they have clients to communicate with.
            </p>
            <p className="text-sm text-gray-600">
              Use this. Get 10 clients. Then decide if you need anything else.
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/communication-scheduling" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back
          </Link>
          <Link href="/tools/communication-scheduling/lean" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Next: Lean Tier →
          </Link>
        </div>
      </div>
    </div>
  );
}
