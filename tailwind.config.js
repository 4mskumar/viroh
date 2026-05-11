/** @type {import('tailwindcss').Config} */

import path from "path"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* Fonts */
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dm: ["DM Serif Text", "serif"],
      },

      /* Custom Colors */
      colors: {
        mustard: "#F4A83F",
        navy: "#2E3653",
        crimson: "#DC4448",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },

      /* Marquee Animations */
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },

        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },

      animation: {
        marquee: "marquee var(--duration) linear infinite",

        "marquee-vertical":
          "marquee-vertical var(--duration) linear infinite",
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  plugins: [],
}