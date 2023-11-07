import { StatusCodes } from "http-status-codes"
import { IUser, IRegisterCredentials, ILoginCredentials, IUserCreateDTO, IUserQueryParams } from "@packages/interfaces"
import dataAccess from "../data-access"
import bcrypt from 'bcrypt'
import utils from '../utils'


//REGISTER_CONTROLLER
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body as IRegisterCredentials

    const userInfo: IUserQueryParams = {}

    if (email) {
      userInfo.email = email
    }

    if (username) {
      userInfo.username = username
    }

    if (phone) {
      userInfo.phone = phone
    }

    const salt = await bcrypt.genSalt(+(process.env.SALT_ROUNDS || 10))
    const hashedPass = await bcrypt.hash(password, salt)

    const tempUser: IUserCreateDTO = {
      username,
      email,
      phone,
      password: hashedPass
    }

    const createdUser = await dataAccess.userDataAccess.createUser(tempUser)
    const accessToken = utils.authUtils.generateJWT(createdUser)

    res.status(StatusCodes.CREATED).json(accessToken)
  } catch (error) {
    console.log("----- Error Cacthed When trying to create user -----", error);
    res.status(StatusCodes.BAD_REQUEST).json(error.message)
  }
}



//LOGIN_CONTROLLER
const login = async (req, res) => {
  try {
    const { identifier, password } = req.body as ILoginCredentials

    const userInfo: IUserQueryParams = {}


    const existingUser = await dataAccess.userDataAccess.getUser(identifier)
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
