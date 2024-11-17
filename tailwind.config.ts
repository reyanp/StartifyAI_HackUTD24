import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"], // Add a modern font
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out", // Smooth fade-in animation
        slideUp: "slideUp 1s ease-out", // Content slide-up effect
        spinSlow: "spinSlow 2s linear infinite", // Slow spinning animation
        blink: "blink 1s step-end infinite", // Blinking effect for cursors
      },
      colors: {
        // Extend colors for brand-specific shades
        background: "var(--background)", // Background variables
        foreground: "var(--foreground)", // Foreground variables
      },
    },
  },
  plugins: [],
} satisfies Config;
