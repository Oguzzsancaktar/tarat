import React from 'react'
import { LoginScreen } from '@packages/common/views'
import Head from 'next/head'

export default function Screen() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginScreen />
    </>
  )
}
