import { Input as TamaguiInput, styled } from 'tamagui'

const Input = styled(TamaguiInput, {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  borderStyle: 'solid',
  overflow: 'hidden',

  variants: {
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
      lightBlue: {
        backgroundColor: '$blue5Light',
        borderColor: '$blue8',
        color: 'black',
        hoverStyle: {
          backgroundColor: '$blue7',
        },

        focusStyle: {
          backgroundColor: '$blue2',
        },
      },
      gray: {
        borderColor: '$gray8',
        hoverStyle: {
          backgroundColor: '$gray5',
        },
        focusStyle: {
          backgroundColor: '$gray2',
          outlineColor: '$gray8',
          borderColor: '$gray9',
        },
      },
    },
  } as const,

  defaultVariants: {
    background: 'blue',
  },
})

export default Input
