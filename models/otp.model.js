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
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = __importDefault(require("../utils"));
const otpSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["verify-email", "reset-password"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 2, // The document will be automatically deleted after 5 minutes of its creation time
    },
});
// Define a function to send emails
function sendVerificationEmail(email, otp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mailResponse = yield utils_1.default.mailUtil.mailSender(email, "Verification Email", `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`);
            console.log("Email sent successfully: ", mailResponse);
        }
        catch (error) {
            console.log("Error occurred while sending email: ", error);
            throw error;
        }
    });
}
function sendResetPasswordEmail(email, otp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mailResponse = yield utils_1.default.mailUtil.mailSender(email, "Reset Password", `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`);
            console.log("Email sent successfully: ", mailResponse);
        }
        catch (error) {
            console.log("Error occurred while sending email: ", error);
            throw error;
        }
    });
}
otpSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("New OTP document saved to the database");
        // Only send an email when a new document is created
        if (this.isNew) {
            if (this.type === "reset-password") {
                yield sendResetPasswordEmail(this.email, this.otp);
            }
            else if (this.type === "verify-email") {
                yield sendVerificationEmail(this.email, this.otp);
            }
        }
        next();
    });
});
const OTPModel = mongoose_1.default.model("OTP", otpSchema);
exports.default = OTPModel;
