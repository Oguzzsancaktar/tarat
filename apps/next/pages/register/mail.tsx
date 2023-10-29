import React from 'react'
import { MailRegisterScreen } from '@packages/common/views'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <MailRegisterScreen />
    </>
  )
}
