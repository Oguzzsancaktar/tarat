import { Image, Paragraph, YStack } from '@my/ui'
import { Button } from '@my/ui/src/components'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export default function WelcomeScreen() {
  const loginLinkProps = useLink({
    href: '/settings',
  })

  const registerLinkProps = useLink({
    href: '/register',
  })

  return (
    <YStack f={1} jc="space-between" ai="center" py="$10" px="$4">
      <YStack maw={600}>
        <Image h={'$2'} w={'$15'} source={require('../assets/logo.png')} resizeMode="contain" />
      </YStack>

      <Image mb={'$-8'} source={require('../assets/welcome-tumbnail.png')} resizeMode="contain" />

      <YStack alignItems="center">
        <Paragraph maxWidth={'$25'} mb="$4" maw={'$20'} ta="center">
          Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna.
        </Paragraph>
        <Button {...loginLinkProps} mb="$2.5" size="large" background="white">
          Giriş Yap
        </Button>
        <Button {...registerLinkProps} size="large" background="blue">
          Kayıt Ol
        </Button>
      </YStack>
    </YStack>
  )
}

// function SheetDemo() {
//   const [open, setOpen] = useState(false)
//   const [position, setPosition] = useState(0)
//   const toast = useToastController()

//   return (
//     <>
//       <Button
//         size="$6"
//         icon={open ? ChevronDown : ChevronUp}
//         circular
//         onPress={() => setOpen((x) => !x)}
//       />
//       <Sheet
//         modal
//         animation="medium"
//         open={open}
//         onOpenChange={setOpen}
//         snapPoints={[80]}
//         position={position}
//         onPositionChange={setPosition}
//         dismissOnSnapToBottom
//       >
//         <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
//         <Sheet.Frame ai="center" jc="center">
//           <Sheet.Handle />
//           <Button
//             size="$6"
//             circular
//             icon={ChevronDown}
//             onPress={() => {
//               setOpen(false)
//               toast.show('Sheet closed!', {
//                 message: 'Just showing how toast works...',
//               })
//             }}
//           />
//         </Sheet.Frame>
//       </Sheet>
//     </>
//   )
// }
