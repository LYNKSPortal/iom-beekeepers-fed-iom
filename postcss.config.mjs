const config = {
  plugins: {
    tailwindcss: { config: "./.devin/tailwind.config.cjs" },
    autoprefixer: { overrideBrowserslist: ["defaults", "iOS >= 15", "Safari >= 15"] },
  },
};

export default config;
