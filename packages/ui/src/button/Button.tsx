import { Button as TamaguiButton, styled } from 'tamagui'

const Button = styled(TamaguiButton, {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100_000_000,
  borderStyle: 'solid',
  overflow: 'hidden',

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
      large: {
        width: '$20',
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
      blue: {
        backgroundColor: '$blue4',
        borderColor: '$blue7',
        hoverStyle: {
          backgroundColor: '$blue5',
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
