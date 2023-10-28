import React from 'react'
import { WelcomeScreen } from 'app/views'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <WelcomeScreen />
    </>
  )
}
