import express from 'express';
import { StatusCodes } from 'http-status-codes';
const joi = require('joi')

// @todo -> implement more with joi


const app = express();

app.use(express.json());


// REGISTER_MIDDLEWARE
// @todo
const registerMiddleware = async (req, res, next) => {
  const { body } = req

  const schema = joi
    .object({
      username: joi.string().required(),
      email: joi.string().email().required().email(),
      password: joi.string().min(6).required(),
      passwordConfirm: joi.any().valid(joi.ref('password')).required(),
      phone: joi.string().required(),
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
      username: joi.string(),
      phone: joi.string(),
      email: joi.string().email().email(),
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
  registerMiddleware,
  loginMiddleware
};



