import Link from "next/link";

export const metadata = {
  title: "Simple System | OneFoundr",
  description: "Build a lead flow system based on referrals and follow-up—perfect for local service businesses.",
};

export default function SimpleSystemPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/marketing/lead-flow" className="text-sm font-medium text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to Lead Flow
      </Link>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
        MARKETING / LEAD FLOW
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple System</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Referrals + follow-up. No fancy funnels needed. Just great work, happy customers, and a simple system to stay in touch and ask for referrals.
      </p>
      <p className="text-sm text-gray-400 italic">Detailed guide coming soon.</p>
    </div>
  );
}
