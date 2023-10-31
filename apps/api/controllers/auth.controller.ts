import { StatusCodes } from "http-status-codes"
import { IUser, IRegisterCredentials, ILoginCredentials } from "@packages/interfaces"
import dataAccess from "../data-access"


//REGISTER_CONTROLLER
const register = async (req, res) => {
  try {
    const { email, password } = req.body as IRegisterCredentials

    const tempUser: IUser = {
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
    const { email, password } = req.body as ILoginCredentials

    const tempUser: IUser = {
      email,
      password
    }

    const createdUser = await dataAccess.userDataAccess.createUser(tempUser)
    res.status(StatusCodes.CREATED).json(createdUser)
  } catch (error) {
    console.log("----- Error Caught when user tries to log in -----", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
}


export default {
  register,
  login
}
