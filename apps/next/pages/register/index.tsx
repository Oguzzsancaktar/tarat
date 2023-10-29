import React from 'react'
import Head from 'next/head'
import { RegisterScreen } from '@packages/common/views'
import { PublicLayout } from 'app/components/layout'

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
