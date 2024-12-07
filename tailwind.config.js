/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        5000: "5000ms", // Add this custom duration
      },
      colors: {
        customColor: "#123456", // Example of adding custom colors
      },
      spacing: {
        128: "32rem", // Example of extending spacing
      },
      container: {
        center: true,
      },
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        bounceY: "bounceY 1s infinite", // Add your bounce animation
      },
      colors: {
        primary: "#F36B21",
        secondary: "#4B4F58",
      },
    },
  },
  plugins: [],
};
