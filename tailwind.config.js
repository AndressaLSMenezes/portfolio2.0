/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      md: "760px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          100: "var(--color-1)",
          200: "var(--color-2)",
          300: "var(--color-3)",
          400: "var(--color-4)",
          500: "var(--color-5)",
          600: "var(--color-6)",
        },
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
