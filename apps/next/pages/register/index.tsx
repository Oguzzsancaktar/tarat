import React from 'react'
import Head from 'next/head'
import { PublicLayout } from 'app/components/layout'
import dynamic from 'next/dynamic'

const RegisterScreen = dynamic(() => import('@packages/common/views/RegisterScreen'), {
  ssr: false,
})

export default function Screen() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <PublicLayout>
        <RegisterScreen />
      </PublicLayout>
    </>
  )
}
