"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi = require('joi');
const app = (0, express_1.default)();
app.use(express_1.default.json());
// REGISTER_MIDDLEWARE
const resetPasswordMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const schema = joi
        .object({
        email: joi.string().email().required().email(),
        password: joi.string().min(6).required(),
        passwordConfirm: joi.any().valid(joi.ref('password')).required(),
        otp: joi.string().required()
    })
        .options({ abortEarly: false });
    try {
        yield schema.validateAsync(body);
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message, validationError: error.details });
    }
});
// REGISTER_MIDDLEWARE
const registerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const schema = joi
        .object({
        username: joi.string().required(),
        email: joi.string().email().required().email(),
        password: joi.string().min(6).required(),
        passwordConfirm: joi.any().valid(joi.ref('password')).required(),
        phone: joi.string(),
        otp: joi.string().required()
    })
        .options({ abortEarly: false });
    try {
        yield schema.validateAsync(body);
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message, validationError: error.details });
    }
});
// LOGIN_MIDDLEWARE
const loginMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const schema = joi
        .object({
        identifier: joi.string().required(),
        password: joi.string().min(6).required()
    })
        .options({ abortEarly: false });
    try {
        yield schema.validateAsync(body);
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message, validationError: error.details });
    }
});
exports.default = {
    resetPasswordMiddleware,
    registerMiddleware,
    loginMiddleware
};
