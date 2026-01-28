/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "obsidian": {
          black: "#000000",
          secondary: "#0A0A0A",
        },
        "apple-gray": "#86868b",
        "main-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "SF Pro Display", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
