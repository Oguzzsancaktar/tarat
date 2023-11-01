import { Card as TamaguiCard, styled } from 'tamagui'

const Card = styled(TamaguiCard, {
  size: '$4',
  width: 400,
  paddingHorizontal: '$4',
  paddingVertical: '$3',
  borderRadius: 16,

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
      blue: {
        backgroundColor: '$blue3',
        borderColor: 'black',
      },

      gray: {
        backgroundColor: '$gray4',
      },
    },
  } as const,

  defaultVariants: {
    size: 'large',
    background: 'blue',
  },
})
export default Card
