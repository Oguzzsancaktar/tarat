import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@packages/ui'
import { useColorScheme } from 'react-native'

import { ToastViewport } from './ToastViewport'
import config from '../tamagui.config'
import { AuthSessionProvider } from '../hooks'
import { RegisterContextProvider } from '../context/registerContext'

function CombineProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={
          [
            /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
            // 'mobile'
          ]
        }
      >
        <AuthSessionProvider>
          <RegisterContextProvider>
            <>{children}</>
            <CustomToast />
            <ToastViewport />
          </RegisterContextProvider>
        </AuthSessionProvider>
      </ToastProvider>
    </TamaguiProvider>
  )
}

export default CombineProvider
