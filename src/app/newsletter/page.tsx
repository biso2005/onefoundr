"use client";

import { CheckCircle } from "lucide-react";
import { CategoryIcon } from "@/components/CategoryIcon";
import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate email
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Mock success (backend would be integrated here)
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitted(true);
    setEmail("");
    setLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">The Solo Founder Weekly</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        One actionable strategy every Tuesday to help you build a profitable one-person business.
      </p>

      {/* What You Get */}
      <div className="max-w-md mx-auto mb-10">
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-700 text-base">One tested framework or strategy per issue</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-700 text-base">Tool recommendations that actually save you time</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-700 text-base">Real examples from real solo founders</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-700 text-base">Delivered every Tuesday — read in under 5 minutes</span>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading || submitted}
          className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm disabled:bg-gray-50"
          required
        />
        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full mt-3 bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accentDark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {submitted ? "✓ Check your email!" : loading ? "Subscribing..." : "Subscribe — It's Free"}
        </button>
        <p className="text-xs text-gray-400 text-center mt-4">
          Join a growing community of solo builders. No spam, ever. Unsubscribe with one click.
        </p>
        <p className="text-xs text-gray-500 text-center mt-2">
          We respect your privacy. See our <a href="/privacy" className="text-emerald-600 hover:underline">privacy policy</a> for GDPR compliance details.
        </p>
      </form>

      {/* What to Expect Section */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">What to expect</h2>
        <p className="text-gray-600 text-center mb-6">Here's a preview of what a typical issue covers:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="flex justify-center mb-2">
              <CategoryIcon category="start" size="sm" className="!h-12 !w-12" />
            </div>
            <div className="font-semibold text-gray-900 text-sm mb-1">One Big Idea</div>
            <div className="text-xs text-gray-500">A strategy or framework you can implement this week</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="flex justify-center mb-2">
              <CategoryIcon category="tools" size="sm" className="!h-12 !w-12" />
            </div>
            <div className="font-semibold text-gray-900 text-sm mb-1">Tool Spotlight</div>
            <div className="text-xs text-gray-500">One tool that saves solo founders real time</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
            <div className="flex justify-center mb-2">
              <CategoryIcon category="growth" size="sm" className="!h-12 !w-12" />
            </div>
            <div className="font-semibold text-gray-900 text-sm mb-1">Quick Win</div>
            <div className="text-xs text-gray-500">Something you can do in 15 minutes today</div>
          </div>
        </div>
      </section>
    </main>
  );
}
