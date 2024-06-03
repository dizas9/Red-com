import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      rotate: {
        "45": "45deg",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
  plugins: [],
};
export default config;
