import Link from "next/link";

export const metadata = {
  title: "Pricing Strategy — OneFoundr",
  description: "The difference between a £500 project and a £2,000 project is rarely the work — it's how you frame the value."
};

export default function PricingStrategyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        BUILD YOUR OFFER — PHASE 2
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Strategy</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        The difference between a £500 project and a £2,000 project is rarely the work — it's how you frame the value.
      </p>
      <p className="text-sm text-gray-400 italic mb-8">Full guide coming soon.</p>
      <Link href="/offer" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Build Your Offer
      </Link>
    </div>
  );
}
