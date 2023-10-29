import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MailRegisterScreen = dynamic(() => import('@packages/common/views/MailRegisterScreen'), {
  ssr: false,
})

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
