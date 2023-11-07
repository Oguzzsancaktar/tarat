import { Switch as TamaguiSwitch, styled, Stack, SwitchContext } from 'tamagui'

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
      orange: {
        backgroundColor: '$orange',
      },
    },
  },

  defaultVariants: {
    size: 'small',
    background: 'orange',
    checked: true,
  },
})
const Thumb = styled(Stack, {
  context: SwitchContext,

  variants: {
    checked: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.5,
      },
    },
  } as const,
  defaultVariants: {
    checked: true,
  },
})
export default Switch
