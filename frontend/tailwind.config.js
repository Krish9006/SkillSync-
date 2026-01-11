/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'], // New OS Font
      },
      colors: {
        // SkillSync OS Palette
        os: {
          bg: "#030305",       // Deep Void
          surface: "#0A0F1C",  // Panel Background
          border: "rgba(255, 255, 255, 0.08)",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        signal: {
          blue: "#00F0FF",    // Primary / Connectivity
          purple: "#BD00FF",  // Creativity / Magic
          green: "#00FF94",   // Success / Online
          red: "#FF0055",     // Error / Problem
        },
        brand: {
          dark: "#0a0a0f",       // Keeping for backward compatibility
          surface: "#13131a",
          border: "#1f1f28",
          primary: "#6366f1",
          secondary: "#06b6d4",
          accent: "#8b5cf6",
          success: "#10b981",
          muted: "#64748b",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 40px rgba(99, 102, 241, 0.4)",
        "premium": "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
