import { SizeTokens, getVariableValue, styled } from '@tamagui/core'
import { getSize } from '@tamagui/get-token'
import { ThemeableStack, YStack } from '@tamagui/stacks'
import { SwitchContext } from 'tamagui'

const SwitchThumb = styled(ThemeableStack, {
  name: 'SwitchThumb',
  context: SwitchContext,

  variants: {
    unstyled: {
      false: {
        size: '$true',
        backgroundColor: '$background',
        borderRadius: 1000,
      },
    },

    checked: {
      true: {},
    },

    size: {
      '...size': (val) => {
        const size = 20
        return {
          height: size,
          width: size,
        }
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1' ? true : false,
  },
})

const SwitchFrame = styled(YStack, {
  name: 'Switch',
  context: SwitchContext,

  variants: {
    unstyled: {
      false: {
        size: '$true',
        borderRadius: '$borderRadius.20',
        backgroundColor: '$orange',
        borderWidth: 2,
        borderColor: '$orange',

        focusStyle: {
          outlineColor: '$orange',
          outlineStyle: 'solid',
          outlineWidth: 2,
        },
      },
    },

    checked: {
      true: {
        size: '$true',
        borderRadius: '$borderRadius.20',
        backgroundColor: '$orange',
        borderWidth: 2,
        borderColor: '$orange',

        focusStyle: {
          outlineColor: '$orange',
          outlineStyle: 'solid',
          outlineWidth: 2,
        },
      },
      false: {
        size: '$true',
        borderRadius: '$borderRadius.20',
        backgroundColor: '$inputBackground',
        borderWidth: 2,
        borderColor: '$orange',

        focusStyle: {
          outlineColor: '$orange',
          outlineStyle: 'solid',
          outlineWidth: 2,
        },
      },
    },

    frameWidth: {
      ':number': () => null,
    },

    size: {
      '...size': (val) => {
        const height = 25
        const width = 40
        return {
          height,
          minHeight: height,
          width,
        }
      },
    },
  } as const,
})

export default {
  SwitchThumb,
  SwitchFrame,
}
