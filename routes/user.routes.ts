import express from 'express'
import { StatusCodes } from 'http-status-codes'
const router = express.Router()

import controllers from '../controllers'




// CRUD 
// get post patch put delete 


// Create User - Register
// Get User - Get Single User - Get User By ID - User 
router.get("/:userId", controllers.userController.getUserDetails)
router.get("/", controllers.userController.getUserDetailsWithToken)

// Get All Users - Get All Users - User[]

// Update User - Edit Profile || Change Password 
router.patch("/update/contactInformations", controllers.userController.updateContactInformations)
router.patch("/update/personalInformations", controllers.userController.updatePersonalInformations)
router.patch("/update/addressInformations", controllers.userController.updateAddressInformations)


// Delete User 




export default router
