/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        card: "rgba(255, 255, 255, 0.05)",
        neonRed: "#ff003c",
        neonPurple: "#9d00ff",
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #ff003c 0%, #9d00ff 100%)",
      },
      boxShadow: {
        "neon-glow": "0 0 20px rgba(255, 0, 60, 0.3), 0 0 40px rgba(157, 0, 255, 0.2)",
      }
    },
  },
  plugins: [],
};
