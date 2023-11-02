import { Button as TamaguiButton, styled } from 'tamagui'

const Button = styled(TamaguiButton, {
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  height: '$40',
  borderRadius: '$radius.1',

  variants: {
    size: {
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
      circle: {
        width: '$30',
        height: '$30',
        borderColor: '$gray',
        backgroundColor: 'red',
      },
    },

    background: {
      orange: {
        backgroundColor: '$orange',
        borderColor: 'orange',
        color: 'white',
        shadowColor: 'orange',

        hoverStyle: {
          backgroundColor: 'orange',
        },

        focusStyle: {
          backgroundColor: 'orange',
          borderColor: 'orange',
          outlineColor: 'orange',
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
    size: 'large',
    background: 'orange',
    type: 'circle',
  },
})
export default Button
