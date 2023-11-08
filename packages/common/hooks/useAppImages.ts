import { useMemo } from 'react'
import { Platform } from 'react-native'

import companyLogo from '../assets/logo.png'
import welcomeThumbnail from '../assets/welcome-thumbnail.png'
import profileLinear from '../assets/profile-linear.png'
import qrWizardBG from '../assets/qr-wizard-bg.png'

const useAppImages = () => {
  const ImageObjects = useMemo(() => {
    if (Platform.OS === 'web') {
      return {
        companyLogo: {
          uri: companyLogo.src,
          width: companyLogo.width,
          height: companyLogo.height,
        },
        welcomeThumbnail: {
          uri: welcomeThumbnail.src,
          width: welcomeThumbnail.width,
          height: welcomeThumbnail.height,
        },
        profileLinear: {
          uri: profileLinear.src,
          width: profileLinear.width,
          height: profileLinear.height,
        },
        qrWizardBG: {
          uri: qrWizardBG.src,
          width: qrWizardBG.width,
          height: qrWizardBG.height,
        },

      }
    }
    return {
      companyLogo: companyLogo,
      welcomeThumbnail: welcomeThumbnail,
      profileLinear: profileLinear,
      qrWizardBG: qrWizardBG,
    }
  }, [process])

  return ImageObjects
}

export default useAppImages
