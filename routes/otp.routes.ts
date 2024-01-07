// Libs.
import express from 'express'
const router = express.Router()

import controllers from '../controllers'


router.post('/verify/email', controllers.otpController.sendEmailVerifyOTP);

router.post('/reset/password', controllers.otpController.sendResetPasswordOTP);


export default router;
