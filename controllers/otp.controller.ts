import otpGenerator from 'otp-generator'
import { OTPModel, UserModel } from '../models'


const sendEmailVerifyOTP = async (req, res) => {
  try {
    const { email } = req.body;
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
