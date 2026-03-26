import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata = {
  title: 'Business Operations: The Solo Finance System | OneFoundr',
  description: 'Invoice on time, track expenses, stay legal—without an accountant. The solo finance system that takes 30 minutes/week.',
  openGraph: {
    title: 'Business Operations: The Solo Finance System',
    description: 'Invoice on time, track expenses, stay legal—without an accountant.',
  },
};

export default function BusinessOperations() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-teal-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Business Operations: The Solo Finance System
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Invoice on time, track expenses, stay legal—without an accountant.
          </p>
          <div className="mt-8 rounded-xl bg-white p-6 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "I forgot to invoice £8,000 in one month. Realised 90 days later. Client paid late. Cash flow died. I built a finance system in 1 hour. Haven't missed an invoice since."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12">

          {/* The Accountant Myth */}
          <article className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Accountants Don't Work for Solos</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You're a solo founder. You're doing the work. You're making money. And now someone tells you that you need an accountant. That you can't handle your own finances. That you'll get in trouble with HMRC.
              </p>
              
              <p>
                It's a lie designed to sell you software subscriptions and monthly retainers. The truth? You can do it yourself in 1 hour per week. No Excel nightmares. No spreadsheet anxiety. No monthly invoices from professionals who don't understand your business.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">The "Monthly Report" Problem</h3>
                <p className="text-gray-700">
                  Accountants give you reports after the fact. You need visibility now. They send you P&Ls in February about January's cash. By then, you've already made decisions based on incomplete data. You've already had cash flow stress. You've already considered raising money. The report is worthless.
                </p>
              </div>

              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">The "Too Complex" Problem</h3>
                <p className="text-gray-700">
                  They use accounting software that's designed for accountants, not for business owners. QuickBooks. Xero. Wave. All of them have features you'll never use. All of them take 3 hours to set up properly. You don't need double-entry accounting. You don't need depreciation schedules. You need to see: "Did I make money this month?"
                </p>
              </div>

              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">The "Cost" Problem</h3>
                <p className="text-gray-700">
                  You're paying £150/month minimum for bookkeeping services. That's £1,800 per year. You can do it in 1 hour per week. That's 4 hours per month. That's 52 hours per year. Your finance system should take that time, not cost that amount.
                </p>
              </div>

              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">The "Compliance" Problem</h3>
                <p className="text-gray-700">
                  Accountants focus on tax compliance. On what you owe HMRC. That's important. But it's not urgent. Your urgent problem is cash flow. Can you pay yourself this month? Do you have cash to reinvest? Will you run out? An accountant won't answer these questions until 3 months after they matter.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
              <p className="font-semibold text-amber-900 mb-2">💡 Solo Rule</p>
              <p className="text-amber-900">
                If you're paying an accountant before £10k/month revenue, you're over-spending. You can do it yourself in 1 hour/week.
              </p>
            </div>

            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <p className="font-semibold text-red-900 mb-2">❌ Anti-Example</p>
              <p className="text-red-900">
                "I paid an accountant £200/month. He sent me financial statements I didn't understand. I still ran out of cash in month 4. I switched to a simple Google Sheet. Spent 1 hour/week logging things. Suddenly I could see cash flow clearly. Been positive ever since."
              </p>
            </div>

            <div className="rounded-xl bg-green-50 border border-green-200 p-6">
              <p className="font-semibold text-green-900 mb-2">✓ Real Example</p>
              <p className="text-green-900">
                "Tom's finance system: Google Sheets for invoicing. FreeAgent for automatic bank feed. Every Monday: 15 minutes logging invoices. Every Wednesday: 15 minutes adding expenses. Every Friday: 30 minutes admin. Total: 1 hour/week. Cost: £30/month. Cash flow: always visible. No panic. No late tax surprises."
              </p>
            </div>
          </article>

          {/* Related Guides */}
          <article className="space-y-6 mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Quick Start</h2>
            
            <div className="grid gap-4">
              <a href="/tools/finance-legal" className="rounded-xl bg-white border border-gray-100 p-6 hover:border-blue-400 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Finance & Legal Tools</h3>
                <p className="text-gray-700 text-sm">
                  Set up FreeAgent (£30/month) or Wave (free). Both work. Getting started takes 15 minutes.
                </p>
              </a>

              <a href="/systems/client-management" className="rounded-xl bg-white border border-gray-100 p-6 hover:border-green-400 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Client Management</h3>
                <p className="text-gray-700 text-sm">
                  Track clients before you invoice them. The 3-column spreadsheet that replaces CRM software.
                </p>
              </a>

              <a href="/systems/project-delivery" className="rounded-xl bg-white border border-gray-100 p-6 hover:border-green-400 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Project Delivery</h3>
                <p className="text-gray-700 text-sm">
                  Deliver work on time. Then invoice. The two-step system that prevents scope creep.
                </p>
              </a>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
