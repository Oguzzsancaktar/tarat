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
        backgroundColor: '$red10',
        borderColor: '$red5',
        color: 'white',
        elevation: 8,
        shadowColor: '$red11',

        hoverStyle: {
          backgroundColor: '$red11',
        },

        focusStyle: {
          backgroundColor: '$red5',
          borderColor: '$red6',
          outlineColor: '$red7',
        },
      },
      blue: {
        backgroundColor: '$blue10',
        borderColor: '$blue5',
        color: 'white',
        elevation: 8,
        shadowColor: '$blue11',

        hoverStyle: {
          backgroundColor: '$blue11',
        },

        focusStyle: {
          backgroundColor: '$blue5',
          borderColor: '$blue6',
          outlineColor: '$blue7',
        },
      },
      green: {
        backgroundColor: '$green10',
        borderColor: '$green5',
        color: 'white',
        elevation: 8,
        shadowColor: '$green11',

        hoverStyle: {
          backgroundColor: '$green11',
        },
        focusStyle: {
          backgroundColor: '$green5',
          borderColor: '$green6',
          outlineColor: '$green7',
        },
      },
      gray: {
        backgroundColor: '$gray6',
        borderColor: '$gray3',
        color: 'white',
        hoverStyle: {
          backgroundColor: '$gray7',
        },
        focusStyle: {
          backgroundColor: '$gray3',
          borderColor: '$gray4',
          outlineColor: '$gray5',
        },
      },
      black: {
        backgroundColor: '#000',
        borderColor: '#000',
        color: 'white',
        elevation: 8,
        shadowColor: '#000',
        hoverStyle: {
          backgroundColor: '#111',
        },
        focusStyle: {
          backgroundColor: '#000',
          borderColor: '#111',
          outlineColor: '#1e1e1e',
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
