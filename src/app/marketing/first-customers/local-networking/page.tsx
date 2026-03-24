import Link from "next/link";

export const metadata = {
  title: "Local Networking | OneFoundr",
  description: "Face-to-face events, local business groups, and neighborhood apps.",
};

export default function LocalNetworkingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/marketing/first-customers" className="text-sm font-medium text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to First Customers
      </Link>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
        MARKETING / FIRST CUSTOMERS
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Networking</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Face-to-face events, local business groups, neighborhood apps—own your local area.
      </p>
      <p className="text-sm text-gray-400 italic">Detailed guide coming soon.</p>
    </div>
  );
}
