import type { Config } from "tailwindcss";
import APP_COLORS from "./src/constants/APP_COLORS";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BR_Regular: "BR_Shape_Regular",
        BR_Bold: "BR_Shape_Bold",
        BR_Medium: "BR_Shape_Medium",
        BR_SemiBold: "BR_Shape_SemiBold",
      },
      colors: {
        // Look for constants/colors.ts

        white: '#FFFFFF',
        alabaster: '#FAFAFA',
        baliHai: '#8698AD',
        wildSand: '#F9F9F9',
        athensGray: '#EDEEF0',
        cadetBlue: '#AAB2C0',
        dimGray: '#6F6F6F',
        gallery: '#EBEBEB',
        alto: '#DDDDDD',
        ecruWhite: '#F8F8ED',
        quarterPearlLusta: '#FFFBF2',
        // Dark
        codGray: '#161615',
        midnight: '#001940',
        mineShaft: '#393939',
        capeCod: '#3D4141',
        prussianBlue: '#002257',
        sapphire: '#325598',
        silverChalice: '#9D9D9D',
        silver: '#BFBFBF',
        shark: '#2E3033',
        solitude: '#E6F3FF',
        // Colours
        // Red
        tiaMaria: '#C9340D',
        // Green
        xanadu: '#728875',
        norway: '#9CBEA0',
        aquaForest: '#6EA675',
        // Blue
        matisse: '#216AA9',
        ...APP_COLORS,
      },
      backgroundImage: theme => ({
        'hero-background': "url('/hero-background.png')",
        'banner-background': "url('/banner-background.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'gradient-vertical-primary': 'linear-gradient(180deg, rgba(255, 184, 0, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'ellipse-background': "url('/ellipse-background.png')",
      })
    },
    animation: {
      'cursor-move': 'move 4s linear 1',
      'buttons-visible': 'visible 4s ease-in 1',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) ',
      'grow-large': 'growLarge 2s cubic-bezier(0, 0, 0.2, 1) ',
      'grow-small': 'growSmall 2s cubic-bezier(0, 0, 0.2, 1) ',

    },
  },
  plugins: [],
};
export default config;
