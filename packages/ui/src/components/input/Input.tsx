import { Input as TamaguiInput, styled } from 'tamagui'

const Input = styled(TamaguiInput, {
  width: '100%',
  height: '$10',
  backgroundColor: '$inputBackground',
  paddingHorizontal: '$space.1',
  borderLeftWidth: 0,
  placeholderTextColor: '$inputPlaceholderColor',

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
      default: {
        borderColor: '',
      },
      error: {
        borderColor: '$red',
      },
      success: {
        borderColor: '$primary',
      },
    },

    background: {
      orange: {
        borderColor: '$orange',
        color: 'white',
        shadowColor: '$orange',

        hoverStyle: {
          backgroundColor: '$orange',
        },
      },
      white: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        color: '#F8B401',
        elevation: 8,
        shadowColor: '#FFFFFF',

        hoverStyle: {
          backgroundColor: '#FFFFFF',
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
      black: {
        backgroundColor: '#000',
        borderColor: '#000',
        color: 'white',
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

export default Input
