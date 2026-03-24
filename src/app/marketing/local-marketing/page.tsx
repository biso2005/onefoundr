import Link from "next/link";

export const metadata = {
  title: "Local Marketing — OneFoundr",
  description: "For service providers and local businesses: get found, build trust, and dominate your area."
};

export default function LocalMarketingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        MARKETING
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Marketing</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        For service providers and local businesses: get found, build trust, and dominate your area.
      </p>
      <p className="text-sm text-gray-400 italic mb-8">Full guide coming soon.</p>
      <Link href="/marketing" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Marketing
      </Link>
    </div>
  );
}
