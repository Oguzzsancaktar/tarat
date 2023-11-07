import { useLink } from "solito/link"
import { APP_ROUTES } from "../constants"

const useAppRoutes = () => {
  // Public
  const welcomeLinkProps = useLink({
    href: APP_ROUTES.WELCOME,
  })

  const registerLinkProps = useLink({
    href: APP_ROUTES.REGISTER,
  })

  const loginLinkProps = useLink({
    href: APP_ROUTES.LOGIN,
  })

  // Private
  const profileLinkProps = useLink({
    href: APP_ROUTES.PROFILE,
  })

  const settingsLinkProps = useLink({
    href: APP_ROUTES.SETTINGS,
  })


  return {
    welcomeLinkProps,
    registerLinkProps,
    loginLinkProps,
    profileLinkProps,
    settingsLinkProps,
  }
}

export default useAppRoutes 
