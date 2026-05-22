import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#050410",
          900: "#070613",
          800: "#0c0a1e",
          700: "#13102e",
          600: "#1b1642",
          500: "#272058",
        },
        dream: {
          // imagination violet
          600: "#7c4dff",
          500: "#9b6dff",
          400: "#b794ff",
          300: "#cdb6ff",
        },
        neural: {
          // synaptic cyan
          600: "#27aebd",
          500: "#4fd6e0",
          400: "#7ef0f5",
        },
        synapse: {
          // dream rose / magenta
          600: "#d6418a",
          500: "#ff6da8",
          400: "#ff9ac4",
        },
        ember: {
          // symbol gold
          500: "#f5c46b",
          400: "#ffd98a",
        },
        mist: {
          50: "#f4f1ff",
          100: "#e7e2ff",
          300: "#bcb4dd",
          500: "#867ca8",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Serif SC"', "serif"],
      },
      boxShadow: {
        dreamcard: "inset 0 1px 0 rgba(231,226,255,0.07), 0 22px 60px -28px rgba(0,0,0,0.9)",
        glow: "0 0 50px -12px rgba(155,109,255,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
