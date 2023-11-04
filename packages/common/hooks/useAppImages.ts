import { useMemo } from 'react'
import { IMAGE_PATHS } from '../constants'
import { Platform } from 'react-native'

const useAppImages = () => {
  const ImageObjects = useMemo(() => {
    if (Platform.OS === 'web') {
      return {
        companyLogo: {
          uri: IMAGE_PATHS.CompanyLogo.src,
          width: IMAGE_PATHS.CompanyLogo.width,
          height: IMAGE_PATHS.CompanyLogo.height,
        },
        welcomeThumbnail: {
          uri: IMAGE_PATHS.WelcomeThumbnail.src,
          width: IMAGE_PATHS.WelcomeThumbnail.width,
          height: IMAGE_PATHS.WelcomeThumbnail.height,
        },
        bubble: {
          uri: IMAGE_PATHS.WelcomeBubble.src,
          width: IMAGE_PATHS.WelcomeBubble.width,
          height: IMAGE_PATHS.WelcomeBubble.height,
        },
      }
    }
    return {
      companyLogo: IMAGE_PATHS.CompanyLogo,
      welcomeThumbnail: IMAGE_PATHS.WelcomeThumbnail,
      bubble: IMAGE_PATHS.WelcomeBubble,
    }
  }, [process])

  return ImageObjects
}

export default useAppImages
