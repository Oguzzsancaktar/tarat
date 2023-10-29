import { useMemo } from "react"
import { IMAGE_PATHS } from "app/constants"



const useAppImages = () => {
  const ImageObjects = useMemo(() => {
    if (process?.title === 'browser') {
      return {
        companyLogo: {
          uri: IMAGE_PATHS.CompanyLogo.src,
          width: IMAGE_PATHS.CompanyLogo.width,
          height: IMAGE_PATHS.CompanyLogo.height,
        },
        thumbnail: {
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
      thumbnail: IMAGE_PATHS.WelcomeThumbnail,
      bubble: IMAGE_PATHS.WelcomeBubble,
    }
  }, [process])

  return ImageObjects

}


export default useAppImages
