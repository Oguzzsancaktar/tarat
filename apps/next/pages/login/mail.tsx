import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MailLoginScreen = dynamic(() => import('@packages/common/views/MailLoginScreen'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <MailLoginScreen />
    </>
  )
}
