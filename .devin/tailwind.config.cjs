module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ea",
        "cream-2": "#efe8d8",
        honey: "#d99a1f",
        "honey-2": "#b47a10",
        forest: "#1e3a2a",
        "forest-2": "#152a1e",
        moss: "#3d5c44",
        charcoal: "#1c1a17",
        ink: "#2a2620",
        "stone-warm": "#8a8172",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "Helvetica Neue", "sans-serif"],
      },
      spacing: { "4.5": "1.125rem" },
      opacity: { 15: "0.15", 35: "0.35", 45: "0.45", 55: "0.55", 65: "0.65", 85: "0.85" },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
};
