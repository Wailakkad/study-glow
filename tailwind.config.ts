import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E8A4B8",
          dark: "#D4789A",
        },
        secondary: {
          DEFAULT: "#C9B8D8",
          dark: "#A89BC2",
        },
        accent: {
          DEFAULT: "#F5EDD6",
          dark: "#EDE0C4",
        },
        dark: {
          DEFAULT: "#1A1A2E",
          dark: "#16213E",
        },
        text: "#2D2D2D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        accent: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
