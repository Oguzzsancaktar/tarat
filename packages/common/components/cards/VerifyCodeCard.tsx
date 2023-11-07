import { H4, Paragraph, Square, XStack, YStack } from 'tamagui'
import { Button, Card, YStackFullW } from '@packages/ui/src/components'

interface IProps {
  title: string
  description: string
  mail: string
  counter: string
}

const VerifyCodeCard: React.FC<IProps> = ({ title, description, mail, counter }) => {
  const successLinkProps = {
    href: '/login/passwordSuccess',
  }

  return (
    <Card backgroundColor="$inputBackground">
      <YStack jc={'center'} ai={'center'}>
        <H4 color={'$heading'} mt={35}>
          {title}
        </H4>
        <Paragraph mb={30} color={'$textGray'} size={'$1'}>
          {description}
        </Paragraph>
        <Paragraph mb={30} color={'$textGray'} size={'$1'}>
          {mail}
        </Paragraph>

        {/* SQUARE */}
        {/* @todo oğuz square yerine input kullanılacak */}
        <XStack mb={50}>
          <Square
            borderRadius={15}
            borderWidth={1}
            size={60}
            borderColor="$white"
            backgroundColor="$inputBackground"
          />
          <Square
            ml={15}
            borderRadius={15}
            borderWidth={1}
            size={60}
            borderColor="$white"
            backgroundColor="$inputBackground"
          />
          <Square
            ml={15}
            borderRadius={15}
            borderWidth={1}
            size={60}
            borderColor="$white"
            backgroundColor="$inputBackground"
          />
          <Square
            ml={15}
            borderRadius={15}
            borderWidth={1}
            size={60}
            borderColor="$white"
            backgroundColor="$inputBackground"
          />
        </XStack>

        {/* @todo */}
        <Paragraph color={'$textGray'}>(03:15)</Paragraph>
      </YStack>

      <YStackFullW>
        <Button {...successLinkProps}>Doğrula</Button>
        <Button mb={'$space.10'} mt={'$space.3'} backgroundColor="$orange30">
          Tekrar Gönder
        </Button>
      </YStackFullW>
    </Card>
  )
}

export default VerifyCodeCard
