import express, { request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.json());

// COMMON_ERROR_HANDLING_FUNCTION
const handleValidationErrors = (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  next();
};

// REGISTER_MIDDLEWARE
// @todo
const registerMiddleware = (req, res, next) => [
  body('username')
    .notEmpty().withMessage('Email is required !!')
    .trim().isLength({ min: 6, max: 16 }).withMessage('Please enter min 8 max 16'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format')
    .normalizeEmail()
    .trim(),

  body('password')
    .exists({ checkFalsy: true }).withMessage('You must type a password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
    .withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),

  body('passwordConfirm')
    .exists({ checkFalsy: true }).withMessage('You must type a confirmation password')
    .isLength({ min: 8 }).withMessage('Confirmed password must be at least 8 characters')
    .equals(req.body.password),

  handleValidationErrors(req, res, next)
];

// LOGIN_MIDDLEWARE
const loginMiddleware = (req, res, next) => [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
  body('password')
    .notEmpty().withMessage('Password is required'),

  handleValidationErrors(req, res, next)
];

export default {
  registerMiddleware,
  loginMiddleware
};
