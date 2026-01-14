import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        display: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
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
              color: colors.blue[600],
              "&:hover": {
                color: colors.blue[800],
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
