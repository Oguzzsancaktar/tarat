import dynamic from 'next/dynamic'
import Head from 'next/head'

const EditProfileScreen = dynamic(() => import('@packages/common/views/EditProfileScreen'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <EditProfileScreen />
    </>
  )
}
