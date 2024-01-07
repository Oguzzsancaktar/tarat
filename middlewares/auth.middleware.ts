import express from 'express';
import { StatusCodes } from 'http-status-codes';
const joi = require('joi')

const app = express();

app.use(express.json());



// REGISTER_MIDDLEWARE
const resetPasswordMiddleware = async (req, res, next) => {
  const { body } = req
  const schema = joi
    .object({
      email: joi.string().email().required().email(),
      password: joi.string().min(6).required(),
      passwordConfirm: joi.any().valid(joi.ref('password')).required(),
      otp: joi.string().required()
    })
    .options({ abortEarly: false })

  try {
    await schema.validateAsync(body)
    next()
  } catch (error) {
    res.status(400).json({ message: error.message, validationError: error.details })
  }
}


// REGISTER_MIDDLEWARE
const registerMiddleware = async (req, res, next) => {
  const { body } = req
  const schema = joi
    .object({
      username: joi.string().required(),
      email: joi.string().email().required().email(),
      password: joi.string().min(6).required(),
      passwordConfirm: joi.any().valid(joi.ref('password')).required(),
      phone: joi.string(),
      otp: joi.string().required()
    })
    .options({ abortEarly: false })

  try {
    await schema.validateAsync(body)
    next()
  } catch (error) {
    res.status(400).json({ message: error.message, validationError: error.details })
  }
}

// LOGIN_MIDDLEWARE
const loginMiddleware = async (req, res, next) => {
  const { body } = req

  const schema = joi
    .object({
      identifier: joi.string().required(),
      password: joi.string().min(6).required()
    })
    .options({ abortEarly: false })

  try {
    await schema.validateAsync(body)
    next()
  } catch (error) {
    res.status(400).json({ message: error.message, validationError: error.details })
  }
}

export default {
  resetPasswordMiddleware,
  registerMiddleware,
  loginMiddleware
};



