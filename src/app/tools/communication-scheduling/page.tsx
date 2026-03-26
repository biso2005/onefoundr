import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Communication & Scheduling Tools | OneFoundr',
  description: 'Email, calendar, video calls—the tools solopreneurs actually use. Free tier, lean tier, and professional tier recommendations.',
};

export default function CommunicationSchedulingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tools" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-6 inline-block">
            ← Back to The Solo Stack
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Communication & Scheduling</h1>
          <p className="text-lg text-gray-600">Email, calendar, video calls—what you need to talk to clients and prospects.</p>
        </div>
      </div>

      {/* TIERS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Choose Your Tier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Tier */}
          <Link href="/tools/communication-scheduling/free">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 1: £0-5k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Free Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">Gmail, Google Calendar, Calendly free. Everything you need to start.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore free tools →</div>
              </div>
            </div>
          </Link>

          {/* Lean Tier */}
          <Link href="/tools/communication-scheduling/lean">
            <div className="group cursor-pointer h-full">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 border-2 border-indigo-300 hover:shadow-lg transition-all h-full flex flex-col ring-2 ring-indigo-100">
                <div className="inline-block px-2 py-1 bg-indigo-600 text-white rounded text-xs font-bold mb-2 w-fit">RECOMMENDED</div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 2: £5-15k/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Lean Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£14/month. Calendly Pro and Google Workspace. The solopreneur sweet spot.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore lean tier →</div>
              </div>
            </div>
          </Link>

          {/* Professional Tier */}
          <Link href="/tools/communication-scheduling/professional">
            <div className="group cursor-pointer h-full">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 h-full flex flex-col">
                <div className="text-sm font-semibold text-indigo-600 mb-2">Stage 3: £15k+/month</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Professional Tier</h3>
                <p className="text-gray-600 mb-6 flex-grow">£26/month. Add Zoom Pro for higher-quality client calls.</p>
                <div className="text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition">Explore professional →</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Communication Stack Principle</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Communication tools are infrastructure. You need them, but they shouldn't be the bottleneck. The cheapest tool (or free tool) is often just as good as expensive ones.
            </p>
            <p>
              Most solopreneurs avoid using a CRM (like HubSpot) for communication because it overcomplicated things. Gmail + Calendly does 95% of what you need.
            </p>
            <p>
              The 5% lift comes from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Reliable scheduling (Calendly vs. back-and-forth emails)</li>
              <li>Video call reliability (Zoom Pro vs. Hangouts)</li>
              <li>Professional email domain (Google Workspace vs. Gmail)</li>
            </ul>
            <p>
              Anything beyond that is optional. Don't add tools you won't actually use.
            </p>
          </div>
        </div>
      </div>

      {/* BACK TO SOLO STACK */}
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
