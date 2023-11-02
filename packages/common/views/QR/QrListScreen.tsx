import { useLink } from 'solito/link'

import { useRouter } from 'solito/router'

export default function QrListScreen() {
  const router = useRouter()

  const settigsScreenProps = useLink({
    href: '/settings/edit',
  })
}
