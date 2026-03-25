import Link from "next/link";

export const metadata = {
  title: "When to Kill Your Idea — OneFoundr",
  description: "How to know when to pivot or walk away.",
  robots: "noindex"
};

export default function WhenToKillYourIdeaPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-900">When to Kill Your Idea</h1>
      <p className="text-gray-600 mt-4">How to know when to pivot or walk away.</p>
      <p className="text-gray-400 mt-6 italic">Full guide coming soon.</p>
      <Link href="/start" className="text-emerald-600 hover:text-emerald-700 font-medium mt-4 inline-block">
        ← Back to Start Solo
      </Link>
    </div>
  );
}
