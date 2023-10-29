import { Paragraph, XStack, YStack } from '@packages/ui'
import { QrCode, ArrowDown, ArrowRight, Trash2 } from '@tamagui/lucide-icons'
import React from 'react'
import { useLink } from 'solito/link'
import { Button } from '@packages/ui/src/components'
import { Dimensions } from 'react-native'
import { Circle } from '@packages/ui'

export default function QrPageScreen() {
  const QrPageListLinkProps = useLink({
    href: '/qrpage/qrlist',
  })

  //   height={Dimensions.get('window').height * 0.9433}
  //   width={Dimensions.get('window').width * 0.8746}

  return (
    <YStack
      backgroundColor={'$background'}
      jc="space-between"
      ai="center"
      py="$10"
      px="$4"
      bottom="$5"
    >
      <YStack
        backgroundColor="#353542"
        height={Dimensions.get('window').height * 0.4}
        width={Dimensions.get('window').width * 0.8746}
        borderTopLeftRadius={25}
        borderTopRightRadius={25}
        borderStyle="dotted"
        borderBottomColor="$background"
        borderBottomWidth="$1"
      >
        <XStack jc={'space-between'} mt={'$6'} ml={'$5'} mr={'$5'}>
          <ArrowDown color={'$gray11'} />
          <Paragraph size={'$5'} backgroundColor="#353542" color={'$gray11'}>
            Subscription Info
          </Paragraph>
          <Trash2 color={'$gray11'} />
        </XStack>
        <XStack jc={'center'} mt={'$5'}>
          <YStack>
            <QrCode size={'$11'} />
            <Paragraph ta={'center'} size={'$9'} fontWeight="700" mt={'$4'}>
              Spotify
            </Paragraph>
            <Paragraph ta={'center'} size={'$6'} fontWeight="700" color={'$gray11'}>
              $5.99
            </Paragraph>
          </YStack>
        </XStack>
      </YStack>
      <YStack
        backgroundColor="#282833"
        height={Dimensions.get('window').height * 0.54}
        width={Dimensions.get('window').width * 0.8746}
        borderBottomLeftRadius={25}
        borderBottomRightRadius={25}
      >
        <Circle
          position="absolute"
          backgroundColor="$background"
          size={'$2'}
          top={'$-3.5'}
          left={'$-3'}
        />
        <Circle
          position="absolute"
          backgroundColor="$background"
          size={'$2'}
          top={'$-3.5'}
          right={'$-3'}
        />
        <XStack jc={'center'}>
          <YStack>
            <YStack
              mt={'$5'}
              backgroundColor="#353542"
              height={Dimensions.get('window').height * 0.41}
              width={Dimensions.get('window').width * 0.77}
              borderTopLeftRadius={25}
              borderTopRightRadius={25}
              borderBottomLeftRadius={25}
              borderBottomRightRadius={25}
            >
              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>

              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>
              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>
              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>
              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>
              <YStack jc={'center'}>
                <XStack jc={'space-between'} ml={'$4'} mr={'$4'} mt={'$5'}>
                  <Paragraph>Name</Paragraph>
                  <XStack ai={'center'}>
                    <Paragraph color={'$gray11'} mr={'$3'}>
                      Spotify
                    </Paragraph>
                    <ArrowRight size={'$1'} />
                  </XStack>
                </XStack>
              </YStack>
            </YStack>
            <XStack jc={'center'}>
              <Button
                {...QrPageListLinkProps}
                bottom={'$-4'}
                background="gray"
                backgroundColor={'#3d3d47'}
              >
                Save
              </Button>
            </XStack>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  )
}
