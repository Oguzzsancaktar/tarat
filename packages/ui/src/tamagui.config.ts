import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens as defaultTokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { createTamagui, createTokens } from 'tamagui'

import { animations } from './animations'

const headingFont = createInterFont({
  size: {
    6: 15,
    40: 400,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },

  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },

  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)


const appColors = {
  white: '#ffffff',
  wildSand: "#F5F5F5",

  mystic: "#DFE4EE",

  silver: "#C9C5C4",
  gray: "#9D9693",

  shark: "#1C1C1E",
  nero: "#1A0700",
  black: '#000000',

  orange: "#F8B401",
  orange30: "#F8B40130",

  red: "#ff4201",
}


const radius = {
  0: 0,
  1: 3,
  15: 15
}

const size = {
  0: 0,
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  7: 35,
  10: 50,
  15: 75,
  20: 100,
  25: 125,
  true: 1,
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius,
  zIndex: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 9: 9 },
  color: {
    primary: appColors.orange,
    textGray: appColors.silver,
    orange: appColors.orange,
    orange30: appColors.orange30,
    red: appColors.red,
  },
})


export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },

  themes: {
    light: {
      background: appColors.white,
      heading: appColors.nero,
      textGray: appColors.gray,
      white: appColors.white,

    },
    dark: {
      background: appColors.black,
      heading: appColors.mystic,
      textGray: appColors.gray,
      white: appColors.white,
    },
  },

  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
