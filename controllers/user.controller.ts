import { Request, Response } from "express"
import dataAccess from "@root/data-access"
import { StatusCodes } from "http-status-codes"
import utils from "@root/utils"

const getUserDetails = async (req: Request, res: Response) => {
  const { userId } = req.params

  const users = await dataAccess.userDataAccess.getUser({ _id: userId })
  if (users?.length) {
    const user = users?.pop()
    delete user?.password

    return res.status(StatusCodes.OK).json(user)
  }
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "User not found"
  })
}


const getUserDetailsWithToken = async (req: Request, res: Response) => {

  const tokenInfo = utils.authUtils.getJWTInfo(req.headers.authorization?.split(" ")[1] || "")


  if (tokenInfo) {
    const { _id: userId } = tokenInfo
    const users = await dataAccess.userDataAccess.getUser({ _id: userId })

    if (users?.length) {
      const user = users?.pop()
      delete user?.password

      if (user) {
        return res.status(StatusCodes.OK).json(user)
      }
    }

    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User not found"
    })
  } else {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User not found"
    })
  }
}




const updateContactInformations = async (req: Request, res: Response) => {

  const tokenInfo = utils.authUtils.getJWTInfo(req.headers.authorization?.split(" ")[1] || "")

  if (tokenInfo) {
    const { _id: userId } = tokenInfo
    const users = await dataAccess.userDataAccess.getUser({ _id: userId })

    if (users?.length) {
      const user = users?.pop()
      delete user?.password

      if (user) {
        const contactInformations = req.body

        const tempUser = { ...user, contactInformations }
        const updatedUser = await dataAccess.userDataAccess.updateUser(user._id, tempUser)
        return res.status(StatusCodes.OK).json(updatedUser)
      }
    }

    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User contact infos could not updated!"
    })
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "User not authorized!"
    })
  }


}


const updatePersonalInformations = async (req: Request, res: Response) => {
  const tokenInfo = utils.authUtils.getJWTInfo(req.headers.authorization?.split(" ")[1] || "")

  if (tokenInfo) {
    const { _id: userId } = tokenInfo
    const users = await dataAccess.userDataAccess.getUser({ _id: userId })



    if (users?.length) {
      const user = users?.pop()
      delete user?.password

      if (user) {
        const personalInformations = req.body

        const tempUser = { ...user, personalInformations }
        const updatedUser = await dataAccess.userDataAccess.updateUser(user._id, tempUser)
        return res.status(StatusCodes.OK).json(updatedUser)
      }
    }

    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User updatePersonalInformations infos could not updated!"
    })
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "User not authorized!"
    })
  }

}


const updateAddressInformations = async (req: Request, res: Response) => {

  const tokenInfo = utils.authUtils.getJWTInfo(req.headers.authorization?.split(" ")[1] || "")

  if (tokenInfo) {
    const { _id: userId } = tokenInfo
    const users = await dataAccess.userDataAccess.getUser({ _id: userId })



    if (users?.length) {
      const user = users?.pop()
      delete user?.password

      if (user) {
        const addressInformations = req.body

        const tempUser = { ...user, addressInformations }
        const updatedUser = await dataAccess.userDataAccess.updateUser(user._id, tempUser)
        return res.status(StatusCodes.OK).json(updatedUser)
      }
    }

    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User updatePersonalInformations infos could not updated!"
    })
  } else {

    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User updateAddressInformations infos could not updated!"
    })
  }

}

// 
// 

export default {
  getUserDetails,
  getUserDetailsWithToken,
  updateContactInformations,
  updatePersonalInformations,
  updateAddressInformations,
}
