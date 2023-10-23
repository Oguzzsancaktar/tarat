import React from 'react'
import { Button, Box, Center, NativeBaseProvider } from 'native-base'

const Example = () => {
  return (
    <Box alignItems="center">
      <Button>Kayıt Ol</Button>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
