import Head from 'next/head'
import dynamic from 'next/dynamic'

const SettingsScreen = dynamic(() => import('@packages/common/views/settings/SettingsScreen'), {
  ssr: false,
})

export default function Screen() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <SettingsScreen />
    </>
  )
}
