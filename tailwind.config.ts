import type { Config } from "tailwindcss";

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
        sans: ["Elms Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};
