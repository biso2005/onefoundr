import Link from "next/link";

export const metadata = {
  title: "Productized Services — OneFoundr",
  description: "Stop charging by the hour. Package your skill into a fixed-scope, fixed-price offer that clients instantly understand."
};

export default function ProductizedServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        BUILD YOUR OFFER — PHASE 1
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Productized Services</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Stop charging by the hour. Package your skill into a fixed-scope, fixed-price offer that clients instantly understand.
      </p>
      <p className="text-sm text-gray-400 italic mb-8">Full guide coming soon.</p>
      <Link href="/offer" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Build Your Offer
      </Link>
    </div>
  );
}
