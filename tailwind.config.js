/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            primary: "#1D4ED8",
            secondary: "#10B981",
            accent: "#F59E0B",
            background: "#F9FAFB",
            sidebarBackground: "#1F2937",
            text: "#111827",
            cardBackground: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [],
};
