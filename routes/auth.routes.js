"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libs.
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Controllers.
const controllers_1 = __importDefault(require("../controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
// Login
router.post("/login", middlewares_1.default.authMiddleware.loginMiddleware, controllers_1.default.authController.login);
// Register
router.post("/register", middlewares_1.default.authMiddleware.registerMiddleware, controllers_1.default.authController.register);
// Reset password
router.post("/reset-password", middlewares_1.default.authMiddleware.resetPasswordMiddleware, controllers_1.default.authController.resetPassword);
exports.default = router;
