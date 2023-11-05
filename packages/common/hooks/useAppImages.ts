import { useMemo } from 'react'
import { Platform } from 'react-native'

import companyLogo from '../assets/logo.png'
import welcomeThumbnail from '../assets/welcome-thumbnail.png'

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

      }
    }
    return {
      companyLogo: companyLogo,
      welcomeThumbnail: welcomeThumbnail,
    }
  }, [process])

  return ImageObjects
}

export default useAppImages
