"use client";
import { useState } from "react";

export default function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 md:p-12 my-12 text-center w-full">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Level up your solo business</h2>
        <p className="text-gray-600 mb-6">
          Get one actionable strategy every week. Built for founders who do it all alone. Read in under 5 minutes.
        </p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={submitted}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors mt-3 md:mt-0 md:ml-3 whitespace-nowrap disabled:opacity-60"
            disabled={submitted}
          >
            {submitted ? "Coming Soon!" : "Subscribe"}
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        {showToast && (
          <div className="fixed left-1/2 -translate-x-1/2 bottom-8 bg-emerald-600 text-white px-4 py-2 rounded shadow-lg text-sm z-50">
            Newsletter launching soon — stay tuned!
          </div>
        )}
      </div>
    </section>
  );
}
