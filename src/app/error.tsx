"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="mb-6 text-gray-700">{error.message || "An unexpected error occurred. Please try again."}</p>
      <button
        className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-green-700 transition"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
