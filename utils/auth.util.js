"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateJWT = user => {
    return jsonwebtoken_1.default.sign({
        sub: {
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
        iss: 'tarat'
    }, process.env.JWT_SECRET);
};
const getJWTInfo = (token) => {
    try {
        const response = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return response.sub;
    }
    catch (error) {
        console.log("Token error utils", error);
        return null;
    }
};
const validateUsername = username => {
    if (!username && username.length < 3) {
        throw new Error('Username must be at least 3 characters long.');
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        throw new Error('Username must contain only alphanumeric characters.');
    }
};
const validatePassword = password => {
    if (!password) {
        throw new Error('Password is required!');
    }
    if (password && password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one uppercase letter.');
    }
    if (!/[a-z]/.test(password)) {
        throw new Error('Password must contain at least one lowercase letter.');
    }
    if (!/\d/.test(password)) {
        throw new Error('Password must contain at least one digit.');
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        throw new Error('Password must contain at least one special character.');
    }
};
const validatePasswordMatch = (password, passwordConfirm) => {
    bcrypt_1.default.compare(password, passwordConfirm);
    if (password !== passwordConfirm) {
        throw new Error('Password confirm not match!');
    }
};
const validatePublicAddress = publicAddress => {
    if (!publicAddress || publicAddress.trim() === '') {
        throw new Error('Public address is required!');
    }
};
exports.default = {
    generateJWT,
    getJWTInfo,
    validatePassword,
    validateUsername,
    validatePasswordMatch,
    validatePublicAddress
};
