import { useMemo } from "react"
import { IMAGE_PATHS } from "@packages/common/constants"
import { Platform } from "react-native"
import { APP_ICONS } from "@packages/common/components"



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
        appleSvg: {
          uri: APP_ICONS.Apple.src,
          width: APP_ICONS.Apple.width,
          height: APP_ICONS.Apple.height,
        },
      }
    }
    return {
      companyLogo: IMAGE_PATHS.CompanyLogo,
      welcomeThumbnail: IMAGE_PATHS.WelcomeThumbnail,
      bubble: IMAGE_PATHS.WelcomeBubble,
      appleSvg: APP_ICONS.Apple,
    }
  }, [process])

  return ImageObjects

}


export default useAppImages
