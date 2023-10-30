import React from 'react'
import { useStorageState } from './useStorageState'

interface AuthSessionProviderProps {
  signOut: () => void
  signIn: () => void
  session?: string | null
  isLoading: boolean
}
const AuthContext = React.createContext<{
  signIn: () => void
  signOut: () => void
  session?: string | null
  isLoading: boolean
}>({
  signIn: () => {},
  signOut: () => {},
  session: null,
  isLoading: false,
})

// This hook can be used to access the user info.
export function useSession(): AuthSessionProviderProps {
  const value = React.useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />')
    }
  }

  return value
}

export function AuthSessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session')

  console.log('useStorageState', useStorageState)
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx')
        },
        signOut: () => {
          setSession(null)
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
