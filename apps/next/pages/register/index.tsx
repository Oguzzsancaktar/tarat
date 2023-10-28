import React from 'react'
import Head from 'next/head'
import { RegisterScreen } from 'app/views'

export default function Screen() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterScreen />
    </>
  )
}
