import Link from "next/link";

export const metadata = {
  title: "Content System | OneFoundr",
  description: "Build a lead flow system based on creating content once and attracting leads forever.",
};

export default function ContentSystemPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/marketing/lead-flow" className="text-sm font-medium text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to Lead Flow
      </Link>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
        MARKETING / LEAD FLOW
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Content System</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        SEO or YouTube + lead magnet + email nurture. Create content once, attract leads forever. Build authority while you sleep.
      </p>
      <p className="text-sm text-gray-400 italic">Detailed guide coming soon.</p>
    </div>
  );
}
