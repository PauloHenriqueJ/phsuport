import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1':"url('https://i.imgur.com/VKrVYlc.jpg')",
        'bg-2':"url('https://i.imgur.com/6wGfBYN.png')",
        'bg-3':"url('https://i.imgur.com/D3V0wgG.jpg')",
    
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
