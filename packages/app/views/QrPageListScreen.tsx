import { Paragraph, ScrollView, XStack, YStack } from '@my/ui'
import { QrCode, Trash2 } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Button } from '@my/ui/src/components'
import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
  {
    month: 'Jun',
    day: '25',
    subscription: 'Spotify',
    price: '$5.99',
  },
]

export default function QrPageListScreen() {
  //   height={Dimensions.get('window').height * 0.9433}
  //   width={Dimensions.get('window').width * 0.8746}
  const [isPress, setIsPress] = useState(false)

  return (
    <YStack backgroundColor={'$background'} jc="space-between" ai="center" bottom="$5">
      <YStack
        backgroundColor="#282832"
        height={Dimensions.get('window').height * 0.63}
        width={Dimensions.get('screen').width}
        borderBottomLeftRadius={25}
        borderBottomRightRadius={25}
        borderStyle="dotted"
        borderBottomColor="$background"
        borderBottomWidth="$1"
      >
        <XStack jc={'flex-end'} mt={'$10'} ml={'$5'} mr={'$5'}>
          <Trash2 color={'$gray11'} />
        </XStack>
        <XStack jc={'center'} mt={'$1'}>
          <YStack>
            <XStack jc={'center'}>
              <QrCode size={'$11'} />
            </XStack>

            <Paragraph ta={'center'} size={'$10'} fontWeight="700" mt={'$4'}>
              $1,235
            </Paragraph>
            <Paragraph ta={'center'} size={'$3'} color={'$gray11'}>
              This month bills
            </Paragraph>
            <XStack jc={'center'}>
              <Button background="gray" size="small" mt="$5" mb="$5">
                <Paragraph size={'$2'}>See your budget</Paragraph>
              </Button>
            </XStack>

            <XStack width={Dimensions.get('window').width * 0.83} jc={'space-between'}>
              <YStack
                jc={'center'}
                backgroundColor="#30303c"
                borderTopLeftRadius={15}
                borderTopRightRadius={15}
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
                width={'$10'}
                height={'$7'}
                borderTopColor="$red9"
                borderTopWidth="$1"
                paddingVertical="$5"
              >
                <Paragraph ta={'center'} size={'$3'} color={'$gray11'}>
                  Active subs
                </Paragraph>
                <Paragraph ta={'center'} size={'$4'}>
                  12
                </Paragraph>
              </YStack>
              <YStack
                jc={'center'}
                backgroundColor="#30303c"
                borderTopLeftRadius={15}
                borderTopRightRadius={15}
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
                width={'$10'}
                height={'$7'}
                borderTopColor="$purple9"
                borderTopWidth="$1"
                paddingVertical="$5"
              >
                <Paragraph ta={'center'} size={'$3'} color={'$gray11'}>
                  Highest subs
                </Paragraph>
                <Paragraph ta={'center'} size={'$4'}>
                  $19.99
                </Paragraph>
              </YStack>
              <YStack
                jc={'center'}
                backgroundColor="#30303c"
                borderTopLeftRadius={15}
                borderTopRightRadius={15}
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
                width={'$10'}
                height={'$7'}
                borderTopColor="$green9"
                borderTopWidth="$1"
                paddingVertical="$5"
              >
                <Paragraph ta={'center'} size={'$3'} color={'$gray11'}>
                  Lowest subs
                </Paragraph>
                <Paragraph ta={'center'} size={'$4'}>
                  $5.99
                </Paragraph>
              </YStack>
            </XStack>
          </YStack>
        </XStack>
      </YStack>
      <YStack
        height={Dimensions.get('window').height * 0.54}
        width={Dimensions.get('window').width}
        borderBottomLeftRadius={25}
        borderBottomRightRadius={25}
        ai={'center'}
      >
        <XStack
          backgroundColor="#0e0e12"
          width={Dimensions.get('window').width * 0.85}
          height={'$5'}
          jc={'space-between'}
          ai={'center'}
          marginVertical={'$3'}
          px={'$5'}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
        >
          <Button
            onPress={() => setIsPress(false)}
            background={isPress == false ? 'gray' : 'grayQr'}
            size="small"
          >
            <Paragraph size={'$2'}>Subscriptions</Paragraph>
          </Button>
          <Button
            onPress={() => setIsPress(true)}
            background={isPress == true ? 'gray' : 'grayQr'}
            size="small"
          >
            <Paragraph size={'$2'}>Upcoming bills</Paragraph>
          </Button>
        </XStack>

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {data.map((item) => (
              <YStack
                backgroundColor="transparent"
                width={Dimensions.get('window').width * 0.85}
                height={'$6'}
                jc={'space-between'}
                justifyContent="center"
                ai={'center'}
                mt={'$2'}
                px={'$5'}
                borderColor={'$gray7'}
                borderWidth={'$0.5'}
                borderTopLeftRadius={15}
                borderTopRightRadius={15}
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
              >
                <XStack
                  width={Dimensions.get('window').width * 0.78}
                  ai={'center'}
                  jc={'space-between'}
                >
                  <XStack ai={'center'}>
                    <YStack
                      backgroundColor="#30303c"
                      width={'$4'}
                      height={'$4'}
                      jc={'center'}
                      ai={'center'}
                      padding="$2.5"
                      borderTopLeftRadius={15}
                      borderTopRightRadius={15}
                      borderBottomLeftRadius={15}
                      borderBottomRightRadius={15}
                      mr={'$3'}
                    >
                      <Paragraph size={'$2'}>{item.month}</Paragraph>
                      <Paragraph>{item.day}</Paragraph>
                    </YStack>
                    <Paragraph size={'$4'}>{item.subscription}</Paragraph>
                  </XStack>
                  <Paragraph size={'$4'}>{item.price}</Paragraph>
                </XStack>
              </YStack>
            ))}
          </ScrollView>
        </SafeAreaView>
      </YStack>
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    fontSize: 42,
  },
})
