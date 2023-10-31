// Libs.
import express from 'express'
const router = express.Router()

// Controllers.
import controllers from '../controllers'
import middlewares from '../middlewares'


// Login
router.post("/login", middlewares.authMiddleware.loginMiddleware, controllers.authController.login)

// Register
router.post("/register", middlewares.authMiddleware.registerMiddleware, controllers.authController.register)



export default router
