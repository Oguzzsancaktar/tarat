import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const LoginScreen = dynamic(() => import('@packages/common/views/login/LoginScreen'), {
  ssr: false,
})
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
