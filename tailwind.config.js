/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      {
        dim: {
          "primary": "#3b82f6",
          "secondary": "#60a5fa",
          "accent": "#1e40af",
          "neutral": "#3d4451",
          "base-100": "#1f2937",
          "info": "#3b82f6",
          "success": "#3b82f6",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      }
    ],
  },
};
