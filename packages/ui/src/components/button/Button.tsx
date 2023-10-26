import { Button as TamaguiButton, styled } from 'tamagui'

const Button = styled(TamaguiButton, {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  borderStyle: 'solid',
  overflow: 'hidden',
  paddingHorizontal: '$1.5',

  variants: {
    size: {
      xsmall: {
        width: '$5',
      },
      small: {
        width: '$10',
      },
      medium: {
        width: '$15',
      },
      // @todo Oğuz
      large: {
        width: 400,
        height: 50,
      },
    },
    background: {
      red: {
        backgroundColor: '$red4',
        borderColor: '$red7',
        hoverStyle: {
          backgroundColor: '$red5',
        },

        focusStyle: {
          backgroundColor: '$red2',
        },
      },
      white: {
        backgroundColor: 'white',
        color: 'black',
        hoverStyle: {
          backgroundColor: '$red1',
        },

        focusStyle: {
          backgroundColor: '$red2',
        },
      },

      gray: {
        backgroundColor: 'gray',
        color: 'white',
        hoverStyle: {
          backgroundColor: 'gray',
        },

        focusStyle: {
          backgroundColor: 'gray',
        },
      },

      black: {
        backgroundColor: 'black',
        color: 'white',
        hoverStyle: {
          backgroundColor: 'gray',
        },

        focusStyle: {
          backgroundColor: '$red2',
        },
      },
      blue: {
        backgroundColor: '$blue6',
        hoverStyle: {
          backgroundColor: '$blue4',
        },

        focusStyle: {
          backgroundColor: '$blue2',
        },
      },
      green: {
        backgroundColor: '$green4',
        borderColor: '$green7',
        hoverStyle: {
          backgroundColor: '$green5',
        },
        focusStyle: {
          backgroundColor: '$green2',
          outlineColor: '$green8',
          borderColor: '$green9',
        },
      },
    },
  } as const,

  defaultVariants: {
    size: 'large',
    background: 'blue',
  },
})
export default Button
