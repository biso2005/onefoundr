import Link from "next/link";

export const metadata = {
  title: "Social Lead Flow System | OneFoundr",
  description: "Turn social media followers into paying customers through content and conversations.",
};

export default function SocialSystemPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/marketing/lead-flow" className="text-sm font-medium text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to Lead Flow
      </Link>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
        MARKETING / LEAD FLOW
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">The Social System</h1>
      <p className="text-sm text-emerald-600 font-medium mb-6">For personal brands & creators</p>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Turn social media followers into paying customers through content and conversations.
      </p>
      <p className="text-sm text-gray-400 italic">Detailed guide coming soon.</p>
    </div>
  );
}
