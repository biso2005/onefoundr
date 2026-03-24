import Link from "next/link";
import EmailSignupForm from "@/components/EmailSignupForm";

export const metadata = {
  title: "Legal & Financial Setup for Solo Founders — OneFoundr",
  description: "Registration, tax, insurance, and the basics you need to get right."
};

// Data: Which items to do now vs skip
const setupTeardown = {
  doNow: [
    { label: "Sole Trader", description: "Register as self-employed with HMRC (5 mins)" },
    { label: "Business Bank Account", description: "Open a business account at Chase or similar (30 mins)" },
    { label: "Spreadsheet for Invoices", description: "Simple Google Sheets or Wave template (30 mins)" },
    { label: "Tax Thresholds", description: "Know your VAT & dividend thresholds (10 mins)" }
  ],
  skipNow: [
    { label: "Limited Company", description: "Only if you're making £50k+ (can add later)" },
    { label: "Accountant", description: "DIY first with software, hire later" },
    { label: "Business Insurance", description: "Only needed if you advise clients (add when required)" },
    { label: "Legal Terms", description: "Generic templates work fine to start" }
  ]
};

// Data: Legal/Financial quirks by business model
const modelLegalQuirks = [
  {
    slug: "freelancing",
    name: "Freelancing",
    quirks: ["Client ownership of work varies", "Invoicing deadlines matter for cashflow", "Tax-deductible home office"],
    upgradeTrigger: "When you hire your first contractor"
  },
  {
    slug: "consulting",
    name: "Consulting",
    quirks: ["Contracts essential for scope creep", "Retainer vs project invoicing", "IP ownership clauses"],
    upgradeTrigger: "First retainer client with complex scope"
  },
  {
    slug: "productized-services",
    name: "Productized Services",
    quirks: ["SLAs matter", "Liability insurance recommended", "Scalability depends on your T&Cs"],
    upgradeTrigger: "When delivering to 10+ simultaneous clients"
  },
  {
    slug: "digital-products",
    name: "Digital Products",
    quirks: ["Copyright & licensing questions", "Reseller agreement templates", "Refund policy critical"],
    upgradeTrigger: "First reseller or enterprise deal"
  },
  {
    slug: "saas-software",
    name: "SaaS / Software",
    quirks: ["ToS and Privacy Policy essential (GDPR)", "Liability clauses matter", "Payment processor rules"],
    upgradeTrigger: "First paying customer"
  },
  {
    slug: "content-media",
    name: "Content & Media",
    quirks: ["Copyright licensing for music/images", "Affiliate disclosures required", "Sponsorship agreements"],
    upgradeTrigger: "First brand sponsorship"
  },
  {
    slug: "coaching-teaching",
    name: "Coaching & Teaching",
    quirks: ["Client confidentiality agreements", "Liability wavers", "Refund policies per course"],
    upgradeTrigger: "Moving from 1-1 to group programs"
  },
  {
    slug: "agency-of-one",
    name: "Agency of One",
    quirks: ["NDA templates essential", "White-label agreements", "Subcontractor relationships"],
    upgradeTrigger: "When hiring your first team member"
  }
];

// Data: Upgrade path by revenue stage
const upgradePath = [
  {
    stage: "Month 1-3 (£0-500/month)",
    setup: [
      "Register as self-employed",
      "Open business bank account",
      "Use Wave or similar for free invoicing",
      "Track expenses in spreadsheet"
    ],
    focus: "Getting first customers"
  },
  {
    stage: "Month 4-8 (£500-2k/month)",
    setup: [
      "Consider basic accounting software (Wave)",
      "Set up estimated tax payments",
      "Review insurance (only if needed)",
      "Formalize contracts/T&Cs"
    ],
    focus: "Standardizing processes"
  },
  {
    stage: "Month 9+ (£2k+/month)",
    setup: [
      "Hire accountant (saves you £100s in tax)",
      "Switch to Limited Company if profitable",
      "Get proper public liability insurance",
      "Lawyer review of key agreements"
    ],
    focus: "Scaling & tax efficiency"
  }
];

export default function LegalSetupPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="mb-12">
          <p className="text-sm text-emerald-600 font-medium mb-2">┌ Start Solo</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Legal & Financial Setup for Solo Founders
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Registration, tax, insurance, and the basics you need to get right. (48-hour guide)
          </p>
        </div>
      </section>

      {/* Section 1: The Teardown */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">The Teardown</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Do This Now */}
            <div className="bg-white rounded-lg border-l-4 border-emerald-500 p-6">
              <h3 className="text-lg font-bold text-emerald-700 mb-4">✓ Do This Now</h3>
              <ul className="space-y-4">
                {setupTeardown.doNow.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skip For Now */}
            <div className="bg-white rounded-lg border-l-4 border-red-500 p-6">
              <h3 className="text-lg font-bold text-red-700 mb-4">✗ Skip For Now</h3>
              <ul className="space-y-4">
                {setupTeardown.skipNow.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Call */}
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
            <p className="text-sm text-emerald-900">
              <span className="font-bold">The Big Picture:</span> Most of this can wait. If your business model needs liability insurance or specific compliance, we'll flag it on the model-specific guides below.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Model Quirks */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">What's Different About Your Model?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modelLegalQuirks.map((model, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{model.name}</h3>
                <ul className="space-y-2 mb-4">
                  {model.quirks.map((quirk, qIdx) => (
                    <li key={qIdx} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">→</span>
                      <span>{quirk}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">
                  Escalate to accountant: {model.upgradeTrigger}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Upgrade Path */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">The Upgrade Path</h2>
          <div className="space-y-6">
            {upgradePath.map((stage, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-100">
                      <span className="text-emerald-700 font-bold text-sm">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{stage.stage}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Setup Steps:</p>
                        <ul className="space-y-2">
                          {stage.setup.map((step, sIdx) => (
                            <li key={sIdx} className="text-sm text-gray-600">✓ {step}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Your Focus:</p>
                        <p className="text-sm font-medium text-emerald-700">{stage.focus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA + Next Step */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Set Up?</h2>
          <p className="text-gray-600 mb-8">
            Choose your business model above for specific legal templates, compliance checklists, and model-specific filing requirements.
          </p>
          <Link
            href="/start/business-models"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            View Your Business Model
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">The OneFoundr Letter</h2>
          <p className="text-gray-400 mb-8">
            One actionable idea every Tuesday to help you build a better one-person business.
          </p>
          <EmailSignupForm variant="dark" />
        </div>
      </section>
    </main>
  );
}
