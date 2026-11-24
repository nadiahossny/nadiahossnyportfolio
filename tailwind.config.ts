import type { Config } from "tailwindcss";

export default {
  future: { hoverOnlyWhenSupported: true },
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Quicksand", "IBM Plex Sans Arabic", "sans-serif"],
        sans: ["DM Sans", "IBM Plex Sans Arabic", "sans-serif"],
        display: ["Quicksand", "IBM Plex Sans Arabic", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "Alexandria", "sans-serif"],
      },
      colors: {
        background: "#F5F8FC",
        "surface-warm": "#FAF5F0",
        cloud: {
          light: "#EEF4FA",
          DEFAULT: "#C5D9ED",
          deep: "#A8C5E2",
        },
        headline: "#0F294A",
        bodytext: "#1E2E42",
        cta: "#0F294A",
        muted: "#52657C",
        rule: "#E2ECF5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
