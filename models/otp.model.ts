import mongoose from 'mongoose'
import utils from '../utils'

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  otp: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["verify-email", "reset-password"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 2, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await utils.mailUtil.mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );


    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

async function sendResetPasswordEmail(email, otp) {
  try {
    const mailResponse = await utils.mailUtil.mailSender(
      email,
      "Reset Password",
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );

    console.log("Email sent successfully: ", mailResponse);
  }
  catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}


otpSchema.pre("save", async function (next) {
  console.log("New OTP document saved to the database");
  // Only send an email when a new document is created
  if (this.isNew) {
    if (this.type === "reset-password") {
      await sendResetPasswordEmail(this.email, this.otp);
    } else if (this.type === "verify-email") {
      await sendVerificationEmail(this.email, this.otp);
    }
  }
  next();
});


const OTPModel = mongoose.model("OTP", otpSchema);
export default OTPModel;
