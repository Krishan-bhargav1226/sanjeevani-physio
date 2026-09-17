/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",          // Cool Slate Pearl background
        surface: "#FFFFFF",     // Pure White surface cards
        primary: {
          DEFAULT: "#0284C7",   // Ocean Sky Blue
          hover: "#0369A1",     // Deep Ocean Blue
          light: "#38BDF8",     // Soft Vivid Blue
          dark: "#075985",      // Dark Royal Blue
        },
        secondary: {
          DEFAULT: "#16A34A",   // Emerald Leaf Green
          hover: "#15803D",     // Deep Forest Green
          light: "#4ADE80",     // Bright Leaf Green
        },
        amberGold: {
          DEFAULT: "#F59E0B",   // Warm Sunburst Amber
          hover: "#D97706",     // Dark Golden Amber
        },
        softAccent: "#E0F2FE",  // Soft Ocean Tint
        mintAccent: "#DCFCE7",  // Soft Leaf Tint
        textMain: "#0F172A",    // Slate 900 Text
        muted: "#475569",       // Cool Slate 600 Text
        darkSection: "#082F49", // Deep Ocean Navy
        navyCard: "#0F172A",    // Dark Card Surface
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
      boxShadow: {
        pill: "0 20px 40px -15px rgba(2, 132, 199, 0.25)",
        card: "0 12px 35px -10px rgba(2, 132, 199, 0.12)",
        glow: "0 0 40px -5px rgba(22, 163, 74, 0.35)",
        brand: "0 10px 30px -5px rgba(2, 132, 199, 0.25)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
