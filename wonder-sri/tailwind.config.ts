import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite", // Fixed typo: "glinear" -> "linear"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" }, // Fixed syntax: Added missing "}"
          to: { transform: "translateX(-100%)" }, // Fixed syntax: Added missing "}"
        },
      },
      fontFamily: {
        sigmar: ['Sigmar', 'cursive'],
        "agu-display": ['"Agu Display"', 'serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
