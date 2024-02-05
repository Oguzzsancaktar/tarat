"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("./auth.controller"));
const otp_controller_1 = __importDefault(require("./otp.controller"));
const user_controller_1 = __importDefault(require("./user.controller"));
exports.default = {
    authController: auth_controller_1.default,
    otpController: otp_controller_1.default,
    userController: user_controller_1.default
};
