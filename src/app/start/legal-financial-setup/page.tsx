import CategoryHub from '@/components/CategoryHub';
import EmailSignupForm from '@/components/EmailSignupForm';
import Link from 'next/link';

const setupTeardown = {
  doThisNow: [
    {
      title: 'Sole Trader Status',
      description: 'Register with HMRC. Takes 5 minutes online. £0.',
      link: 'https://www.gov.uk/register-for-self-assessment',
    },
    {
      title: 'Free Business Bank Account',
      description: 'Chase, Barclays, or Starling offer free accounts for sole traders. Separate from personal.',
      note: 'Non-negotiable for tax clarity.',
    },
    {
      title: 'Simple Spreadsheet',
      description: 'Track income and expenses in a Google Sheet. That is literally all you need.',
      link: 'https://docs.google.com',
    },
    {
      title: 'Know Your Tax Threshold',
      description: 'Trading Allowance: £1K/year tax-free. VAT threshold: £85K/year. Stay under these.',
      note: 'Read once, never worry again.',
    },
  ],
  skipThisForNow: [
    {
      title: 'Limited Company Status',
      description: 'Everyone says you need an Ltd. You do not. Not until you are making consistent income.',
      cost: '£50 + accounting complexity',
    },
    {
      title: 'Professional Accountant',
      description: 'Self-assessment is straightforward for solo businesses under £50K/year.',
      cost: '£300–£800/year for no reason',
    },
    {
      title: 'Business Insurance',
      description: 'Only required for regulated industries (financial advice, therapy, etc). Check yours.',
      cost: '£10–£50/month if not needed',
    },
    {
      title: 'Fancy Contract Templates or Legal Advice',
      description: 'Free templates from AND CO or gov.uk work fine. Upgrade later if disputes happen.',
      cost: '£500–£1000 wasted',
    },
  ],
};

const modelLegalQuirks = [
  {
    name: 'Freelancing',
    quirk: 'No employee rights. You are solely responsible for tax. Client contracts are crucial.',
    trigger: 'Incorporate at £3K/month steady income',
  },
  {
    name: 'Consulting',
    quirk: 'Check if indemnity insurance is required for your industry. Some sectors mandate it.',
    trigger: 'Get professional insurance at £2K/month',
  },
  {
    name: 'Productized Services',
    quirk: 'Track time separately from revenue. Your effective hourly rate matters for pricing.',
    trigger: 'Switch to invoicing software at £1K/month',
  },
  {
    name: 'Digital Products',
    quirk: 'Terms of service are crucial. Protect yourself from piracy and refund disputes.',
    trigger: 'Add Terms & Privacy pages at first sale',
  },
  {
    name: 'SaaS / Software',
    quirk: 'GDPR compliance is non-negotiable if you store customer data. Start compliant.',
    trigger: 'GDPR audit needed before launch',
  },
  {
    name: 'Content & Media',
    quirk: 'Affiliate disclosures are mandatory. Platform ToS vary widely. Read them.',
    trigger: 'Add legal pages when monetising',
  },
  {
    name: 'Coaching & Teaching',
    quirk: 'Duty of care applies. Document client outcomes. Never guarantee results.',
    trigger: 'Get liability insurance at £1K/month revenue',
  },
  {
    name: 'Agency of One',
    quirk: 'Client contracts are critical. NDA, scope, and payment terms prevent disputes.',
    trigger: 'Use a proper contract template from day one',
  },
];

const upgradePath = [
  {
    milestone: 'Month 1–3: £0–£1K',
    setup: 'Sole trader, business bank account, spreadsheet',
    focus: 'Just get compliant and track everything',
  },
  {
    milestone: 'Month 4–8: £1K–£3K/month',
    setup: 'Add invoicing software, basic contract template',
    focus: 'Professionalism matters. Systematise your paperwork.',
  },
  {
    milestone: 'Month 9+: £3K+/month',
    setup: 'Upgrade to accountant, consider Ltd company, get insurance',
    focus: 'Structure for growth. Protect your income.',
  },
];

interface ContentSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function ContentSection({ title, subtitle, children }: ContentSectionProps) {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

export const metadata = {
  title: 'Legal & Financial Setup for Solo Businesses — OneFoundr',
  description:
    'A minimum viable, 48-hour guide to getting compliant without the red tape. What you actually need to start.',
};

export default function LegalFinancialSetupPage() {
  return (
    <div className="bg-white w-full">
      <CategoryHub
        title="Legal & Financial Setup"
        slug="legal-setup"
        backgroundColor="from-blue-50 to-indigo-100"
        description="A minimum viable, 48-hour guide to getting compliant without the red tape."
      />

      <ContentSection
        title="Stop Over-Complicating Your Setup"
        subtitle="You do not need an accountant, a lawyer, or tax software to start. Here is what you actually do."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DO THIS NOW */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Do This Now</h3>
            <p className="text-sm text-green-800 mb-6">(48-hour setup. All free or under £50.)</p>

            <div className="space-y-4">
              {setupTeardown.doThisNow.map((item, idx) => (
                <div key={idx} className="border-b border-green-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-green-900">{item.title}</h4>
                      <p className="text-xs text-green-700 mt-1">{item.description}</p>
                      {item.note && <p className="text-xs text-green-600 italic mt-2">{item.note}</p>}
                    </div>
                    <div className="text-base">✓</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKIP THIS FOR NOW */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-red-900 mb-2">Skip This For Now</h3>
            <p className="text-sm text-red-800 mb-6">(The money traps. Do not spend here.)</p>

            <div className="space-y-4">
              {setupTeardown.skipThisForNow.map((item, idx) => (
                <div key={idx} className="border-b border-red-100 pb-4 last:border-b-0 last:pb-0">
                  <div>
                    <h4 className="text-sm font-semibold text-red-900">{item.title}</h4>
                    <p className="text-xs text-red-700 mt-1">{item.description}</p>
                    {item.cost && (
                      <p className="text-xs text-red-600 font-medium mt-2">💸 {item.cost}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Business Model Legal Quirks */}
      <ContentSection
        title="Legal & Financial Quirks by Model"
        subtitle="What you need to know about your specific business type."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modelLegalQuirks.map((model, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3">{model.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{model.quirk}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Upgrade trigger</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{model.trigger}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Upgrade Path */}
      <ContentSection
        title="The Upgrade Path"
        subtitle="What to do and when. Do not spend money before you have revenue."
      >
        <div className="space-y-4">
          {upgradePath.map((stage, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-40 shrink-0">
                <div className="text-3xl font-bold text-gray-900">{idx + 1}</div>
                <h3 className="text-base font-semibold text-gray-900 mt-2">{stage.milestone}</h3>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Setup by this stage</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{stage.setup}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Your focus</p>
                  <p className="text-sm text-gray-700 mt-1">{stage.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Final CTA Section */}
      <section className="w-full py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Next Step</h2>
            <p className="text-lg text-gray-700 mb-6">
              Open your business bank account today. That single action separates you from 90% of would-be
              entrepreneurs.
            </p>
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Chase, Barclays, or Starling</span> all offer
                instant online accounts for sole traders. Takes 10 minutes. You then have:
              </p>
              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                <li>✓ Separate bank statements for tax</li>
                <li>✓ Professional credibility with clients</li>
                <li>✓ Clear separation of business and personal</li>
              </ul>
            </div>
            <Link href="https://www.chase.co.uk" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Open Your Account Now →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-900 w-full py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated on Legal Changes</h2>
          <p className="text-gray-400 mb-6">
            Tax laws and compliance requirements change. Get updates in your inbox.
          </p>
          <EmailSignupForm variant="dark" placeholder="Enter your email" className="mb-2" />
          <p className="text-xs text-gray-500 mt-2">No spam, just practical updates.</p>
        </div>
      </section>
    </div>
  );
}
