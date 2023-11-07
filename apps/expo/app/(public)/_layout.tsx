import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import CombineProvider from '@packages/common/provider/CombineProvider'
import { useFonts } from 'expo-font'
import { Slot, Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <CombineProvider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack />
        {/* <Stack
            screenOptions={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#ffa98f',
              },
              headerTintColor: '#00df2d',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          /> */}
      </ThemeProvider>
    </CombineProvider>
  )
}