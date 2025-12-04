import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["PT Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["Lilita One", "ui-sans-serif", "system-ui", "sans-serif"],
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
