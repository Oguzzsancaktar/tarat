import { Button as TamaguiButton, styled } from 'tamagui'

const Button = styled(TamaguiButton, {
  overflow: 'hidden',
  borderRadius: '$radius.15',
  width: '100%',
  height: '$10',

  variants: {
    size: {
      default: {},
      xsmall: {
        width: '$5',
      },
      small: {
        width: '$12',
      },
      medium: {
        width: '$15',
      },
      large: {
        width: '0',
      },
    },

    type: {
      default: {},
      goBack: {
        borderWidth: 0,
        color: '$primary',
        backgroundColor: '$orange30',
        width: '$10',
        height: '$10',
      },

      next: {
        borderWith: 0,
        color: '$white',
        backgroundColor: '$orange',
        width: '$10',
        height: '$10',
      },

      circle: {
        borderRadius: 100,
      },
    },

    background: {
      orange: {
        backgroundColor: '$orange',
        borderColor: '$orange',
        color: 'white',

        hoverStyle: {
          backgroundColor: '$orange',
        },

        focusStyle: {
          backgroundColor: '$orange',
          borderColor: '$orange',
          outlineColor: '$orange',
        },
      },
      orange30: {
        backgroundColor: '$orange30',
        borderColor: '$orange30',
        color: '$orange',

        hoverStyle: {
          backgroundColor: '$orange30',
        },

        focusStyle: {
          backgroundColor: '$orange30',
          borderColor: '$orange30',
          outlineColor: '$orange30',
        },
      },

      ratio: {
        backgroundColor: '$inputBackground',

        hoverStyle: {
          backgroundColor: '$inputBackground',
        },
        focusStyle: {
          backgroundColor: '$inputBackground',
          borderColor: '$inputBackground',
          outlineColor: '$inputBackground',
        },
      },

      gray: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        hoverStyle: {
          backgroundColor: '$gray7',
        },
        focusStyle: {
          backgroundColor: '$gray3',
          borderColor: '$gray4',
          outlineColor: '$gray5',
        },
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
    background: 'orange',
    type: 'default',
  },
})
export default Button
