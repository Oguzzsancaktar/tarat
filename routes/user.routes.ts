import express from 'express'
import { StatusCodes } from 'http-status-codes'
const router = express.Router()

import middlewares from '@root/middlewares'
import controllers from '@root/controllers'

// CRUD 
// get post patch put delete 


// Create User - Register
// Get User - Get Single User - Get User By ID - User 
router.get("/:userId", controllers.userController.getUserDetails)
// Get All Users - Get All Users - User[]

// Update User - Edit Profile || Change Password 

// Delete User 


export default router
