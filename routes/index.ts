import express from 'express'
// Routes.
import authRouter from './auth.routes'
import userRouter from './user.routes'
import otpRouter from './otp.routes'


const router = express.Router()


router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/otp', otpRouter)

router.use('/', (req, res) => {
  res.send('Hello World!')
})

export default router
