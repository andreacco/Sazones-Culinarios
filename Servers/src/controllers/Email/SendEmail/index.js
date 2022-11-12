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
const nodemailer_1 = __importDefault(require("nodemailer"));
const Config_1 = __importDefault(require("../../../config/ConfigEntorno/Config"));
const sendEmail = (email, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: Config_1.default.email,
                pass: Config_1.default.password
            }
        });
        const mailOptions = {
            from: Config_1.default.email,
            to: email,
            subject,
            html: html
        };
        const mailSent = yield transporter.sendMail(mailOptions);
        return mailSent;
    }
    catch (error) {
        console.log('Hubo un error al enviar este mensaje!', error);
    }
});
exports.default = sendEmail;
