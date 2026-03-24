import Link from "next/link";

export const metadata = {
  title: "Offer Stacking — OneFoundr",
  description: "Combine services, products, and upsells into a system that increases revenue per client."
};

export default function OfferStackingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        BUILD YOUR OFFER — PHASE 2
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Offer Stacking</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Combine services, products, and upsells into a system that increases revenue per client.
      </p>
      <p className="text-sm text-gray-400 italic mb-8">Full guide coming soon.</p>
      <Link href="/offer" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Build Your Offer
      </Link>
    </div>
  );
}
