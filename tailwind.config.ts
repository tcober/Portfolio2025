import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          600: "#1f5c3f",
          700: "#194c34",
          800: "#143d2b",
          900: "#103323",
          950: "#0c2b1d",
        },
      },
      fontFamily: {
        serif: ["Elms Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Elms Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        display: ["Elms Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: colors.gray[700],
            h1: {
              color: colors.gray[900],
            },
            h2: {
              color: colors.gray[900],
            },
            h3: {
              color: colors.gray[900],
            },
            strong: {
              color: colors.gray[900],
            },
            a: {
              color: "#1f5c3f",
              "&:hover": {
                color: "#143d2b",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
