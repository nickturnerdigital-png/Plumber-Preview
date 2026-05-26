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
        navy: {
          DEFAULT: "#0B1829",
          50: "#E6EAF0",
          100: "#C3CCD9",
          200: "#9DABBE",
          300: "#778AA3",
          400: "#516988",
          500: "#2B486D",
          600: "#1A2F4F",
          700: "#132540",
          800: "#0B1829",
          900: "#060E1A",
        },
        electric: {
          DEFAULT: "#1D6FFF",
          50: "#EAF1FF",
          100: "#C6DAFF",
          200: "#9DBFFF",
          300: "#73A3FF",
          400: "#4988FF",
          500: "#1D6FFF",
          600: "#0058E6",
          700: "#0042B3",
          800: "#002D80",
          900: "#001A4D",
        },
        copper: {
          DEFAULT: "#E8962E",
          50: "#FDF3E5",
          100: "#FADFBA",
          200: "#F6CA8C",
          300: "#F2B55E",
          400: "#EDA245",
          500: "#E8962E",
          600: "#C57A1B",
          700: "#945A14",
          800: "#623C0E",
          900: "#311E07",
        },
        ice: "#F7F9FC",
        emergency: "#DC2626",
        success: "#16A34A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "wave": "wave 8s ease-in-out infinite",
        "ripple": "ripple 1.5s ease-out infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0B1829 0%, #132540 50%, #1A2F4F 100%)",
        "electric-gradient": "linear-gradient(135deg, #1D6FFF 0%, #4988FF 100%)",
        "copper-gradient": "linear-gradient(135deg, #E8962E 0%, #F2B55E 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent, rgba(29,111,255,0.15), transparent)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-blue": "0 10px 40px -10px rgba(29, 111, 255, 0.5)",
        "glow-copper": "0 10px 40px -10px rgba(232, 150, 46, 0.5)",
        "card-hover": "0 20px 50px -20px rgba(11, 24, 41, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
