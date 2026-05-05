/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#101828",
        dimgray: "#4a5565",
        darkslategray: "#364153",
        whitesmoke: "#f3f3f5",
        lightgray: "#d1d5dc",
        slategray: {
          100: "#717182",
          200: "#6a7282"
        },
        aliceblue: "#eff6ff",
        lightsteelblue: "#bedbff",
        slateblue: "#193cb8",
        mediumslateblue: "#155dfc",
        gainsboro: "#e5e7eb",
        lavender: {
          DEFAULT: "#dbeafe",
          100: "#f3e8ff",
          200: "#dbeafe",
        },
        honeydew: "#dcfce7",
        seagreen: "#016630",
        darkorchid: "#6e11b0",
        mistyrose: "#ffe2e2",
        firebrick: "#9f0712",
        papayawhip: "#ffedd4",
        lemonchiffon: "#fef9c2",
        saddlebrown: "#894b00",
        darkred: "#9f2d00",
      },
      spacing: {
        "num-448": "448px",
        "num-969": "969px",
        "num-944": "944px",
        "num-66": "66px",
        "num-1": "1px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      borderRadius: {
        "num-8": "8px"
      },
      padding: {
        "num-2": "2px",
        "num-4": "4px",
        "num-12": "12px"
      },
      fontSize: {
        "num-12": "12px",
        "num-14": "14px"
      },
      lineHeight: {
        "num-14": "14px",
        "num-16": "16px",
        "num-20": "20px"
      }
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}