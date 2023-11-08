import { APP_COLORS } from '@packages/common/constants'
import CombineProvider from '@packages/common/provider/CombineProvider'
import { View } from '@packages/ui'
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Tabs } from 'expo-router'
import { useColorScheme, useWindowDimensions } from 'react-native'

const TabsLayout = () => {
  const { width } = useWindowDimensions()
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
        <Tabs
          screenOptions={{
            headerLeftContainerStyle: {
              backgroundColor: '#2a2aba',
            },
            headerStyle: {
              backgroundColor: '#2a2aba',
            },
            //
            tabBarActiveTintColor: APP_COLORS.orange,

            tabBarStyle: {
              height: 60,
              width: width - 60,
              alignSelf: 'center',
              borderRadius: 20,
              position: 'absolute',
              left: 30,
              backgroundColor: APP_COLORS.silver,
            },
          }}
        />
      </ThemeProvider>
    </CombineProvider>
  )
}

export default TabsLayout
