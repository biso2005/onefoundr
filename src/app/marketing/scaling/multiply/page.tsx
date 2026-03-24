import Link from "next/link";

export const metadata = {
  title: "Multiply Your Reach | OneFoundr",
  description: "Repurpose content, automate follow-ups, and collaborate to expand your reach without adding new channels.",
};

export default function MultiplyPage() {
  return (
    <div className="w-full bg-white min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-4">
          MARKETING • SCALING
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Multiply
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          More reach without more work
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-12 max-w-xl mx-auto">
          Repurpose content, automate follow-ups, and collaborate to expand your reach without adding new channels.
        </p>
        <div className="mb-8">
          <p className="text-sm text-gray-400 italic">Full guide coming soon</p>
        </div>
        <Link
          href="/marketing/scaling"
          className="inline-block px-6 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline"
        >
          ← Back to Scaling
        </Link>
      </div>
    </div>
  );
}
