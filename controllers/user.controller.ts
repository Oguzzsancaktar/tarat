import { Request, Response } from "express"
import dataAccess from "@root/data-access"
import { StatusCodes } from "http-status-codes"

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

export default { getUserDetails }
