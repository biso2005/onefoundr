import Link from "next/link";

export const metadata = {
  title: "Social Media — OneFoundr",
  description: "LinkedIn, Twitter, Instagram—turn your personal brand into a client magnet."
};

export default function SocialMediaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        MARKETING
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Media</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        LinkedIn, Twitter, Instagram—turn your personal brand into a client magnet.
      </p>
      <p className="text-sm text-gray-400 italic mb-8">Full guide coming soon.</p>
      <Link href="/marketing" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Marketing
      </Link>
    </div>
  );
}
