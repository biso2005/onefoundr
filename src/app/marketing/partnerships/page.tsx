import { ScrollToTop } from '@/components/ScrollToTop';
import { ShareButtons } from '@/components/ShareButtons';
import AuthorBox from '@/components/AuthorBox';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export const metadata = {
  title: 'The Referral-First Growth System: Why your happiest clients are your best sales team',
  description: 'Last month, 68% of your happiest clients thought about referring you—but didn\'t. Learn the system to activate them.',
};

export default function PartnershipsPage() {
  return (
    <>
      <ScrollToTop />
      
      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Referral-First Growth System
          </h1>
          <p className="text-xl text-gray-600">
            Why your happiest clients are your best sales team (and how to activate them)
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* ===== HOOK SECTION ===== */}
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Last month, 68% of your happiest clients thought about referring you—but didn't.
          </p>
          
          <p className="text-lg leading-relaxed">
            Referrals fail not because clients dislike you, but because asking feels risky for them.
          </p>

          <p className="text-lg leading-relaxed">
            Fix the timing and friction, and referrals become your most predictable growth lever. {' '}
            <Link href="/offer/positioning" className="text-blue-600 hover:text-blue-700 underline">
              If clients can't articulate your value, referrals confuse them
            </Link>
            {' '}—so we start there.
          </p>
        </div>

        {/* ===== REFERRAL CHANNEL REALITY CHECK TABLE ===== */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Referral Channel Reality Check
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Channel
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Time to First Referral
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Ongoing Weekly Effort
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Referral Quality (1–10)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Solo Viability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Cold Outreach</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4–8 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5–10 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-red-50 text-red-600">❌ Unsustainable</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Content Marketing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3–6 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8–12 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-yellow-50 text-yellow-600">⚠️ Delayed ROI</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">Customer Referrals (Systemized)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0–2 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1–2 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9/10</td>
                  <td className="px-6 py-4 text-sm font-medium bg-green-50 text-green-600">✅ Sustainable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg mx-auto mt-6">
            <p className="text-lg leading-relaxed">
              Why this matters: Systemized referrals cost 90% less time than cold outreach and deliver 3× higher-quality leads—but only if you engineer the ask into your delivery workflow. {' '}
              <Link href="/start/first-90-days" className="text-blue-600 hover:text-blue-700 underline">
                New solopreneurs: nail delighting 3 clients first
              </Link>
              {' '}before you worry about referrals at scale.
            </p>
          </div>
        </div>

        {/* ===== YOUR NEXT STEP ===== */}
        <div className="prose prose-lg mx-auto mb-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <p className="text-lg leading-relaxed font-semibold text-gray-900">
            Your Next Step: Audit your last 3 delivered projects
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Identify the exact moment the client said "This exceeded expectations." Set one calendar reminder to ask only at that point next time.
          </p>
        </div>

        {/* ===== AUTHOR BOX ===== */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <AuthorBox />
        </div>

        {/* ===== NEWSLETTER CTA ===== */}
        <NewsletterCTA />

        {/* ===== SHARE BUTTONS ===== */}
        <div className="mt-8">
          <ShareButtons 
            url="https://onefoundr.com/marketing/partnerships" 
            title="The Referral-First Growth System: How Solopreneurs Turn Clients into Predictable Revenue" 
          />
        </div>
      </div>
    </>
  );
}
