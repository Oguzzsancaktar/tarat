import { StatusCodes } from "http-status-codes"
import { IRegisterCredentials } from "interfaces/auth"

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


export default { registerMiddleware }
