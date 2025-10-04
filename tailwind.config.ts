import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        accent: colors.emerald,
        neutral: colors.slate,
      },
      fontFamily: {
        serif: ["Merriweather", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["PT Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ["Lilita One", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "bounce-gentle": "bounceGentle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
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
