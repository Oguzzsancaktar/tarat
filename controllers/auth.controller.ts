import { jwt } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes"
import { IUser, IRegisterCredentials, ILoginCredentials, IUserCreateDTO, IUserQueryParams } from "interfaces"
import dataAccess from "../data-access"
import bcrypt from 'bcrypt'
import utils from '../utils'
import { OTPModel } from '../models';



// RESET_PASSWORD_CONTROLLER
const resetPassword = async (req, res) => {
  try {
    const { email, password, otp } = req.body;
    // Find the most recent OTP for the email
    const response = await OTPModel.find({ email, type: "reset-password" }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0 || otp !== response[0]?.otp) {
      return res.status(400).json({
        success: false,
        message: 'The OTP is not valid',
      });
    }
    const salt = await bcrypt.genSalt(+(process.env.SALT_ROUNDS || 10))
    const hashedPass = await bcrypt.hash(password, salt)

    const users = await dataAccess.userDataAccess.getUser({ identifier: email })
    if (users) {

      const user = users.pop()


      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User not found',
        });
      }

      user.password = hashedPass
      const updatedUser = await dataAccess.userDataAccess.updateUser(user._id, user)

      console.log("updatedUser", updatedUser);
      res.status(200).json({
        success: true,
        message: 'Password reset successfully',
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//REGISTER_CONTROLLER
const register = async (req, res) => {
  try {
    const { username, email, phone, password, otp } = req.body as IRegisterCredentials

    const salt = await bcrypt.genSalt(+(process.env.SALT_ROUNDS || 10))
    const hashedPass = await bcrypt.hash(password, salt)

    const tempUser: IUserCreateDTO = {
      username,
      email,
      phone,
      password: hashedPass
    }

    // Find the most recent OTP for the email
    const response = await OTPModel.find({ email: email.toLowerCase() }).sort({ createdAt: -1 }).limit(1);

    if (response.length === 0 || otp !== response[0]?.otp) {
      return res.status(400).json({
        success: false,
        message: 'The OTP is not valid',
      });
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

    const existingUsers = await dataAccess.userDataAccess.getUser({ identifier: identifier?.toLowerCase() })
    console.log(" identifier, password ", existingUsers, identifier, password)
    if (existingUsers) {

      const existingUser = existingUsers.pop()


      if (!existingUser || !await bcrypt.compare(password, existingUser.password)) {
        return res.status(StatusCodes.FORBIDDEN).send("Invalid username or password!")
      }

      existingUser.password = ""
      const accessToken = utils.authUtils.generateJWT(existingUser)

      return res.status(StatusCodes.OK).json(accessToken)
    }

  } catch (error) {
    console.log("----- Error Caught when user tries to log in -----", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
}



const isAuth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'not authenticated' });
  };

  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secret');
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message || 'could not decode the token' });
  };
  if (!decodedToken) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: 'unauthorized' });
  } else {
    res.status(StatusCodes.OK).json({ message: 'here is your resource' });
  };
};


export default {
  resetPassword,
  register,
  login
}
