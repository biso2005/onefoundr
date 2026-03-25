"use client";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }

    // Simulate subscription
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail("");
      // In future: integrate with ConvertKit/Beehiiv
    }, 600);
  }

  // Success State
  if (status === 'success') {
    return (
      <section className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 md:p-12 my-12 text-center w-full">
        <div className="max-w-md mx-auto">
          <p className="text-emerald-700 font-semibold text-lg">✅ You're subscribed!</p>
          <p className="text-emerald-600 text-sm mt-2">Check your inbox for your first issue next Tuesday.</p>
        </div>
      </section>
    );
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
            className={`flex-1 px-4 py-3 rounded-l-lg md:rounded-l-lg rounded-lg md:rounded-none border-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all ${
              status === 'error' ? 'border-red-400' : 'border-gray-200'
            } disabled:opacity-50`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={status === 'loading'}
            aria-describedby={status === 'error' ? "newsletter-error" : undefined}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white rounded-r-lg md:rounded-r-lg rounded-lg md:rounded-none font-medium text-sm hover:bg-accentDark transition-colors mt-3 md:mt-0 md:ml-0 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>
        
        {/* Error Message */}
        {status === 'error' && (
          <p id="newsletter-error" className="text-red-500 text-xs mt-2 font-medium">
            {errorMessage}
          </p>
        )}
        
        <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
