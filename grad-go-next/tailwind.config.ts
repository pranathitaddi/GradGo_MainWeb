import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg1: {
          DEFAULT: "#0c0d22",
        },
        pri: {
          DEFAULT: "#56a2ff",
        },
      },
      backgroundImage: {
        "bg-gradient":
          "radial-gradient(circle at top left, #232544, #1a1c36, #121327)",
        "button-gradient": "linear-gradient(to right, #004aad, #cb6ce6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
