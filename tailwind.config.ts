import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1A2130",
          secondary: "#83B4FF", //2B2E4A
          accent: "#E2ECF6",
          neutral: "#53354A",
          "base-100": "#ffffff",
        },
        fontFamily: {
          jost: ["Jost", "sans-serif"],
        },
      },
      // {
      //   light: {
      //     ...require("daisyui/src/theming/themes")["light"],
      //     primary: "#1A2130",
      //     secondary: "#83B4FF",
      //   },
      // },
      // {
      //   dark: {
      //     ...require("daisyui/src/theming/themes")["dark"],
      //     primary: "#83B4FF",
      //     secondary: "#1A2130",
      //   },
      // },
      // "dark",
      // "light",
    ],
  },
};
export default config;
