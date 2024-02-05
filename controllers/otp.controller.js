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
const otp_generator_1 = __importDefault(require("otp-generator"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const models_1 = require("../models");
const data_access_1 = __importDefault(require("../data-access"));
const sendEmailVerifyOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username } = req.body;
        console.log(" req.body;", req.body);
        const existingUserEmail = yield data_access_1.default.userDataAccess.getUser({ email });
        const existingUserUsername = yield data_access_1.default.userDataAccess.getUser({ username: username });
        console.log("existingUserEmail", existingUserEmail);
        if (existingUserEmail && (existingUserEmail === null || existingUserEmail === void 0 ? void 0 : existingUserEmail.length) > 0) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).json({
                success: false,
                // @todo get from message constants 
                message: 'User already registered with that email',
            });
        }
        if (existingUserUsername && (existingUserUsername === null || existingUserUsername === void 0 ? void 0 : existingUserUsername.length) > 0) {
            return res.status(http_status_codes_1.default.BAD_REQUEST).json({
                success: false,
                // @todo get from message constants 
                message: 'User already registered with that username',
            });
        }
        // Check if user is already present
        const checkUserPresent = yield models_1.UserModel.findOne({ email });
        // If user found with provided email
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: 'User is already registered',
            });
        }
        let otp = otp_generator_1.default.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        let result = yield models_1.OTPModel.findOne({ otp: otp });
        while (result) {
            otp = otp_generator_1.default.generate(4, {
                upperCaseAlphabets: false,
            });
            result = yield models_1.OTPModel.findOne({ otp: otp });
        }
        const otpPayload = { email, otp, type: 'verify-email' };
        const otpBody = yield models_1.OTPModel.create(otpPayload);
        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            otp,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
});
const sendResetPasswordOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Check if user is already present
        const checkUserPresent = yield models_1.UserModel.findOne({ email });
        // If user not found with provided email
        if (!checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: 'User is not registered',
            });
        }
        let otp = otp_generator_1.default.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        let result = yield models_1.OTPModel.findOne({ otp: otp });
        while (result) {
            otp = otp_generator_1.default.generate(4, {
                upperCaseAlphabets: false,
            });
            result = yield models_1.OTPModel.findOne({ otp: otp });
        }
        const otpPayload = { email, otp, type: 'reset-password' };
        const otpBody = yield models_1.OTPModel.create(otpPayload);
        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            otp,
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
});
exports.default = { sendEmailVerifyOTP, sendResetPasswordOTP };
