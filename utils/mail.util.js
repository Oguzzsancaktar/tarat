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
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const mailSender = (email, title, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create a Transporter to send emails
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });
        // Send emails to users
        let info = yield transporter.sendMail({
            from: 'www.tarat.me',
            to: email,
            subject: title,
            html: body,
        });
        // console.log("Email info: ", info);
        return info;
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.default = { mailSender };
