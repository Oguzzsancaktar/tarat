import { StatusCodes } from "http-status-codes"
import { ILoginCredentials, IRegisterCredentials } from "interfaces/auth"

//REGISTER_MIDDLEWARE

const registerMiddleware = (req, res, next) => {
  const { email, password, confirmPassword } = req.body as IRegisterCredentials

  if (!email || email.trim().length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).send("Email is required")
  }

  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).send("Password is required")
  }

  if (!confirmPassword) {
    return res.status(StatusCodes.BAD_REQUEST).send("Confirm Password is required")
  }

  if (password !== confirmPassword) {
    return res.status(StatusCodes.BAD_REQUEST).send("Password and Confirm Password must match")
  }

  next()

}


//_MIDDLEWARE

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body as ILoginCredentials

  if (!email || email.trim().length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).send("Email is required")
  }

  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).send("Password is required")
  }

  if (password !== email) {
    return res.status(StatusCodes.BAD_REQUEST).send("Password and  Email must match")
  }

  next()

}


export default {
  registerMiddleware,
  loginMiddleware
}
