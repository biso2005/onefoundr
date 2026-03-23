import Link from "next/link";

export const metadata = {
  title: "The One-Page Business Canvas — OneFoundr",
  description: "A minimal planning tool for solo founders."
};

export default function BusinessCanvasPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-900">The One-Page Business Canvas</h1>
      <p className="text-gray-600 mt-4">A minimal planning tool for solo founders.</p>
      <p className="text-gray-400 mt-6 italic">Full guide coming soon.</p>
      <Link href="/start" className="text-emerald-600 hover:text-emerald-700 font-medium mt-4 inline-block">
        ← Back to Start Solo
      </Link>
    </div>
  );
}
