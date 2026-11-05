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
        background: "#F7FBFF",
        "surface-warm": "#FAF5F0",
        cloud: {
          light: "#D6EEFF",
          DEFAULT: "#BDDAF9",
          deep: "#A8CDEF",
        },
        headline: "#002461",
        bodytext: "#1a3660",
        cta: "#002461",
        muted: "#456080",
        rule: "#D6E5F2",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
