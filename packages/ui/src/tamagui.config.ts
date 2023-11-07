import { APP_COLORS } from '@packages/common/constants';
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
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
    100: { normal: 'inter' },
    200: { normal: 'InterBold' },
    300: { normal: 'InterBold' },
    400: { normal: 'InterBold' },
    500: { normal: 'InterBold' },
    600: { normal: 'InterBold' },
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




const radius = {
  0: 0,
  1: 3,
  10: 50,
  15: 15
}


const size = {
  px1: 1,
  0: 0,
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  7: 35,
  10: 50,
  15: 75,
  16: 80,
  20: 100,
  25: 125,
  26: 130,
  30: 150,
  35: 175,
  40: 200,
  default: 16,
  true: 1,
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius,
  borderRadius: { ...size, '-1': -5, '-2': -10 },
  zIndex: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 9: 9 },
  color: {
    primary: APP_COLORS.orange,
    textGray: APP_COLORS.silver,
    orange: APP_COLORS.orange,
    orange30: APP_COLORS.orange30,
    orange80: APP_COLORS.orange80,
    red: APP_COLORS.red,
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
      background: APP_COLORS.white,
      heading: APP_COLORS.nero,
      textGray: APP_COLORS.gray,
      white: APP_COLORS.white,
      inputBackground: APP_COLORS.wildSand,
      cardBackground: APP_COLORS.wildSand,
      inputColor: APP_COLORS.black,
      inputPlaceholderColor: APP_COLORS.silver,
    },

    dark: {
      background: APP_COLORS.black,
      heading: APP_COLORS.mystic,
      textGray: APP_COLORS.gray,
      white: APP_COLORS.white,
      inputBackground: APP_COLORS.shark,
      cardBackGround: APP_COLORS.shark,
      inputColor: APP_COLORS.silver,
      inputPlaceholderColor: APP_COLORS.gray,
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
