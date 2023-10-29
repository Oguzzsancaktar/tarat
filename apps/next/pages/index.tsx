import React from 'react'
import Head from 'next/head'
import { PublicLayout } from 'app/components/layout'
import dynamic from 'next/dynamic'

const WelcomeScreen = dynamic(() => import('@packages/common/views/WelcomeScreen'), {
  ssr: false,
})

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
