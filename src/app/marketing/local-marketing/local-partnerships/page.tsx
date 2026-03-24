import Link from "next/link";

export const metadata = {
  title: "Local Partnerships | OneFoundr",
  description: "Cross-promotions, bundled offers, and referral agreements with other local businesses."
};

export default function LocalPartnershipsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link 
          href="/marketing/local-marketing" 
          className="text-accent font-semibold mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all no-underline"
        >
          ← Back to Local Marketing
        </Link>
        
        <div className="text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">COMING SOON</p>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Local Partnerships
          </h1>
          
          <p className="text-lg text-accent font-medium mb-6">
            Share customers with complementary businesses
          </p>
          
          <p className="text-base text-textLight leading-relaxed mb-8 max-w-2xl mx-auto">
            Cross-promotions, bundled offers, and referral agreements with other local businesses.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-900 text-sm">
              <strong>Coming soon:</strong> This guide is currently being written. Sign up to be notified when it's published.
            </p>
          </div>

          <Link 
            href="/#newsletter" 
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all no-underline"
          >
            Notify Me When Ready
          </Link>
        </div>
      </div>
    </div>
  );
}
