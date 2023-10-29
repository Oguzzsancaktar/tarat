import React from 'react'
import { WelcomeScreen } from '@packages/common/views'
import Head from 'next/head'
import { PublicLayout } from 'app/components/layout'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PublicLayout>
        <WelcomeScreen />
      </PublicLayout>
    </>
  )
}
