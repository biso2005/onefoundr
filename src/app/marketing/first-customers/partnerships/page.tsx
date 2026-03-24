import Link from "next/link";

export const metadata = {
  title: "Partnerships & Referrals | OneFoundr",
  description: "Partner with businesses that serve the same customers but aren't competitors.",
};

export default function PartnershipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/marketing/first-customers" className="text-sm font-medium text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to First Customers
      </Link>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
        MARKETING / FIRST CUSTOMERS
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Partnerships & Referrals</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Partner with businesses that serve the same customers but aren't competitors. Trade referrals.
      </p>
      <p className="text-sm text-gray-400 italic">Detailed guide coming soon.</p>
    </div>
  );
}
