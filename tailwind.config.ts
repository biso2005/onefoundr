const config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: "#2D3436",      // Charcoal
        accent: "#00B894",       // Mint (main brand)
        accentDark: "#059669",   // Mint darker
        accentLight: "#D1FAE5",  // Mint very light
        accentLighter: "#ECFDF5", // Mint extremely light
        // Neutral
        background: "#FFFFFF",
        muted: "#F7F7F7",
        border: "#E2E8F0",
        text: "#2D3436",
        textLight: "#636E72",
        textLighter: "#9CA3AF",
        // Status/Secondary colors (mapped to accent variants for consistency)
        info: "#2563EB",         // Blue (for info callouts)
        success: "#10B981",      // Green (similar to accent)
        warning: "#F59E0B",      // Amber
        error: "#EF4444"         // Red
      }
    }
  },
  plugins: []
};

export default config;
