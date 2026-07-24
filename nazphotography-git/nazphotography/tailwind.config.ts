import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        charcoal: "#141416",
        surface: "#1A1A1D",
        line: "#2A2A2E",
        ivory: "#F3EFE6",
        ash: "#A8A29B",
        gold: {
          DEFAULT: "#C9A227",
          light: "#E3C877",
          dark: "#8A6B1E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E3C877 0%, #C9A227 50%, #8A6B1E 100%)",
        "tide-glow": "radial-gradient(60% 60% at 50% 100%, rgba(201,162,39,0.18) 0%, rgba(10,10,11,0) 70%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(201,162,39,0.45)",
      },
      animation: {
        tide: "tide 8s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        tide: {
          "0%, 100%": { transform: "translateY(0) scaleX(1)", opacity: "0.6" },
          "50%": { transform: "translateY(-6px) scaleX(1.03)", opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
