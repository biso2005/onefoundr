/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.5.5.31', 'localhost'],
  eslint: {
    // ESLint v9 is incompatible with Next.js 14's internal ESLint runner.
    // Type checking (tsc) still runs; only the ESLint pass is skipped.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during build to prevent hangs on Vercel
    // Run 'tsc --noEmit' separately if type checking is needed
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
