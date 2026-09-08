import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Quicksand", "sans-serif"],
      },
      colors: {
        background: "#f4f9ff",
        cloud: {
          light: "#dcedff",
          DEFAULT: "#BFE4FF",
        },
        headline: "#002d69",
        bodytext: "#3c608e",
        cta: "#002d69",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
