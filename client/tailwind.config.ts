import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        plus: 'plus 1.3s linear',
        check: 'check 0.4s ease-out 0.2s forwards',
        'grow-back': 'grow-back 1s ease-out 1s forwards', // Add grow-back animation
      },
      keyframes: {
        plus: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%, 85%': { transform: 'scale(0)' },
        },
        check: {
          from: { 'stroke-dashoffset': '20' },
          to: { 'stroke-dashoffset': '0' },
        },
        'grow-back': {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
