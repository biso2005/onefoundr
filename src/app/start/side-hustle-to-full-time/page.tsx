import Link from "next/link";

export const metadata = {
  title: "Side Hustle to Full Time — OneFoundr",
  description: "When to quit your job and go full time on your solo business."
};

export default function SideHustleToFullTimePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-900">Side Hustle to Full Time</h1>
      <p className="text-gray-600 mt-4">When to quit your job and go full time on your solo business.</p>
      <p className="text-gray-400 mt-6 italic">Full guide coming soon.</p>
      <Link href="/start" className="text-emerald-600 hover:text-emerald-700 font-medium mt-4 inline-block">
        ← Back to Start Solo
      </Link>
    </div>
  );
}
