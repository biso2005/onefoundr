import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Communication & Scheduling - Lean Tier | OneFoundr',
  description: 'Calendly Pro + Google Workspace. £14/month. The solopreneur sweet spot for communication.',
};

export default function CommunicationSchedulingLeanPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools/communication-scheduling" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6 inline-block">
            ← Back to Communication & Scheduling
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Lean Tier (£14/month)</h1>
          <p className="text-lg text-gray-600">Stage 2: £5-15k/month revenue. The recommended setup.</p>
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
            <p className="text-gray-700 mb-4">
              Professional email domain, Gmail, Google Calendar, Drive, Docs. Everything in one place. Your email is now firstname@yourname.com instead of a Gmail address.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>Why:</strong> Professionalism. Clients trust name@yourdomain more than name@gmail.com.</p>
            </div>
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
            <p className="text-gray-700 mb-4">
              Multiple event types, unlimited event colors, custom confirmation page, reminder sequences. You now have multiple calendar links (discovery call: 30 min, follow-up: 20 min, project kickoff: 60 min).
            </p>
            <div className="text-sm font-bold text-gray-900 mb-2">What you get over free:</div>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Unlimited event types</li>
              <li>Custom scheduling page</li>
              <li>Recurring events</li>
              <li>Round-robin scheduling (if you add a team member later)</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-900"><strong>ROI:</strong> Calendly Pro saves 2-3 hours/month on scheduling emails. At £100/hour, that's £200-300 value. £8 investment pays for itself 20x over.</p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Total: £14/month</h3>
            <div className="space-y-2 text-gray-700">
              <p>Google Workspace: £6/month</p>
              <p>Calendly Pro: £8/month</p>
              <p className="font-bold text-indigo-900 pt-2">= £14/month</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This is the communication stack used by 70% of successful solopreneurs. Don't add anything else here.
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Link href="/tools/communication-scheduling/free" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back: Free Tier
          </Link>
          <Link href="/tools/communication-scheduling/professional" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Next: Professional →
          </Link>
        </div>
      </div>
    </div>
  );
}
