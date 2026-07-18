import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          600: "#174832",
          700: "#123a28",
          800: "#0e2f20",
          900: "#0a2418",
          950: "#071b12",
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
              color: "#174832",
              "&:hover": {
                color: "#0e2f20",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
