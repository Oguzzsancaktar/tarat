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
const jsonwebtoken_1 = require("jsonwebtoken");
const http_status_codes_1 = require("http-status-codes");
const data_access_1 = __importDefault(require("../data-access"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = __importDefault(require("../utils"));
const models_1 = require("../models");
// RESET_PASSWORD_CONTROLLER
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, password, otp } = req.body;
        // Find the most recent OTP for the email
        const response = yield models_1.OTPModel.find({ email, type: "reset-password" }).sort({ createdAt: -1 }).limit(1);
        if (response.length === 0 || otp !== ((_a = response[0]) === null || _a === void 0 ? void 0 : _a.otp)) {
            return res.status(400).json({
                success: false,
                message: 'The OTP is not valid',
            });
        }
        const salt = yield bcrypt_1.default.genSalt(+(process.env.SALT_ROUNDS || 10));
        const hashedPass = yield bcrypt_1.default.hash(password, salt);
        const users = yield data_access_1.default.userDataAccess.getUser({ identifier: email });
        if (users) {
            const user = users.pop();
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'User not found',
                });
            }
            user.password = hashedPass;
            const updatedUser = yield data_access_1.default.userDataAccess.updateUser(user._id, user);
            console.log("updatedUser", updatedUser);
            res.status(200).json({
                success: true,
                message: 'Password reset successfully',
            });
        }
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
});
//REGISTER_CONTROLLER
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { username, email, phone, password, otp } = req.body;
        const salt = yield bcrypt_1.default.genSalt(+(process.env.SALT_ROUNDS || 10));
        const hashedPass = yield bcrypt_1.default.hash(password, salt);
        const tempUser = {
            username,
            email,
            phone,
            password: hashedPass
        };
        // Find the most recent OTP for the email
        const response = yield models_1.OTPModel.find({ email }).sort({ createdAt: -1 }).limit(1);
        if (response.length === 0 || otp !== ((_b = response[0]) === null || _b === void 0 ? void 0 : _b.otp)) {
            return res.status(400).json({
                success: false,
                message: 'The OTP is not valid',
            });
        }
        const createdUser = yield data_access_1.default.userDataAccess.createUser(tempUser);
        const accessToken = utils_1.default.authUtils.generateJWT(createdUser);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(accessToken);
    }
    catch (error) {
        console.log("----- Error Cacthed When trying to create user -----", error);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error.message);
    }
});
//LOGIN_CONTROLLER
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { identifier, password } = req.body;
        const existingUsers = yield data_access_1.default.userDataAccess.getUser({ identifier: identifier === null || identifier === void 0 ? void 0 : identifier.toLowerCase() });
        console.log(" identifier, password ", existingUsers, identifier, password);
        if (existingUsers) {
            const existingUser = existingUsers.pop();
            if (!existingUser || !(yield bcrypt_1.default.compare(password, existingUser.password))) {
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send("Invalid username or password!");
            }
            existingUser.password = "";
            const accessToken = utils_1.default.authUtils.generateJWT(existingUser);
            return res.status(http_status_codes_1.StatusCodes.OK).json(accessToken);
        }
    }
    catch (error) {
        console.log("----- Error Caught when user tries to log in -----", error);
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
});
const isAuth = (req, res) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'not authenticated' });
    }
    ;
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.jwt.verify(token, 'secret');
    }
    catch (err) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message || 'could not decode the token' });
    }
    ;
    if (!decodedToken) {
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: 'unauthorized' });
    }
    else {
        res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'here is your resource' });
    }
    ;
};
exports.default = {
    resetPassword,
    register,
    login
};
