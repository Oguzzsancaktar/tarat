import otpGenerator from 'otp-generator'
import { OTPModel, UserModel } from '../models'
import dataAccess from '@data-access/index';
import STATUS_CODES from 'http-status-codes';


const sendEmailVerifyOTP = async (req, res) => {
  try {
    const { email, username } = req.body;
    console.log(" req.body;", req.body);

    const existingUserEmail = await dataAccess.userDataAccess.getUser({ email });
    const existingUserUsername = await dataAccess.userDataAccess.getUser({ username: username });

    console.log("existingUserEmail", existingUserEmail);


    if (existingUserEmail && existingUserEmail?.length > 0) {
      return res.status(STATUS_CODES.BAD_REQUEST).json({
        success: false,
        // @todo get from message constants 
        message: 'User already registered with that email',
      });
    }

    if (existingUserUsername && existingUserUsername?.length > 0) {
      return res.status(STATUS_CODES.BAD_REQUEST).json({
        success: false,
        // @todo get from message constants 
        message: 'User already registered with that username',
      });
    }



    // Check if user is already present
    const checkUserPresent = await UserModel.findOne({ email });
    // If user found with provided email
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: 'User is already registered',
      });
    }
    let otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTPModel.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
      });
      result = await OTPModel.findOne({ otp: otp });
    }
    const otpPayload = { email, otp, type: 'verify-email' };
    const otpBody = await OTPModel.create(otpPayload);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};


const sendResetPasswordOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if user is already present
    const checkUserPresent = await UserModel.findOne({ email });
    // If user not found with provided email
    if (!checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: 'User is not registered',
      });
    }

    let otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OTPModel.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
      });
      result = await OTPModel.findOne({ otp: otp });
    }

    const otpPayload = { email, otp, type: 'reset-password' };
    const otpBody = await OTPModel.create(otpPayload);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      otp,
    });
  }
  catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}

export default { sendEmailVerifyOTP, sendResetPasswordOTP };
