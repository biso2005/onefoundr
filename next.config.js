/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint v9 is incompatible with Next.js 14's internal ESLint runner.
    // Type checking (tsc) still runs; only the ESLint pass is skipped.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
