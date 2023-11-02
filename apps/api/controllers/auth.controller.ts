import { StatusCodes } from "http-status-codes"
import { IUser, IRegisterCredentials, ILoginCredentials, IUserCreateDTO, IUserQueryParams } from "@packages/interfaces"
import dataAccess from "../data-access"


//REGISTER_CONTROLLER
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body as IRegisterCredentials

    const tempUser: IUserCreateDTO = {
      username,
      email,
      password
    }

    const createdUser = await dataAccess.userDataAccess.createUser(tempUser)
    res.status(StatusCodes.CREATED).json(createdUser)
  } catch (error) {
    console.log("----- Error Cacthed When trying to create user -----", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
}



//LOGIN_CONTROLLER
const login = async (req, res) => {
  try {
    const { email, password, username } = req.body as ILoginCredentials

    const userInfo: IUserQueryParams = {}

    if (email) {
      userInfo.email = email
    }

    if (username) {
      userInfo.username = username
    }

    const existingUser = await dataAccess.userDataAccess.getUser(userInfo)
    if (existingUser && password === existingUser.password) {
      return res.status(StatusCodes.OK).json(existingUser)
    }

    return res.status(StatusCodes.BAD_REQUEST).send("Invalid username or password!")
  } catch (error) {
    console.log("----- Error Caught when user tries to log in -----", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
}


export default {
  register,
  login
}
