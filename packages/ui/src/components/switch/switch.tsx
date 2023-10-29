import { Switch as TamaguiSwitch, styled } from 'tamagui'

const Switch = styled(TamaguiSwitch, {
  borderRadius: 16,
  width: 50,
  height: 30,
  outlineWidth: 0,

  variants: {
    checked: {
      true: {
        backgroundColor: '$blue11',
      },
      false: {
        backgroundColor: 'gray',
      },
    },
    size: {
      xsmall: {
        width: '$2',
      },
      small: {
        width: '$3',
      },
      medium: {
        width: '$4',
      },
      large: {
        width: '$5',
      },
    },
    background: {
      blue: {
        backgroundColor: '$blue3',
      },
    },
  },

  defaultVariants: {
    size: 'small',
    background: 'blue',
    checked: true,
  },
})

export default Switch