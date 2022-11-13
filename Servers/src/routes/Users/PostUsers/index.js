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
const express_1 = require("express");
const Users_1 = __importDefault(require("../../../models/Users/Users"));
const ConfirmEmail_1 = __importDefault(require("../../../controllers/Email/Template/ConfirmEmail"));
const SendEmail_1 = __importDefault(require("../../../controllers/Email/SendEmail"));
const Welcome_1 = __importDefault(require("../../../controllers/Email/Template/Welcome"));
const router = (0, express_1.Router)();
router.post('/postUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastname, email, phoneNumber, interests, verified, unsuscribed } = req.body;
    try {
        const user = yield Users_1.default.findOne({ email });
        if (user) {
            res.status(200).json('Ya estás suscrito a nuestra lista de correos!');
        }
        else if (!name && !lastname && !email && !phoneNumber && !interests) {
            res.status(200).json('Por favor, llena todos los datos requeridos');
        }
        else {
            const newuser = new Users_1.default({ name, user, lastname, email, phoneNumber, interests, verified, unsuscribed });
            yield newuser.save();
            res.status(200).json('Usuario registrado correctamente!');
            let template;
            if (newuser.verified === false) {
                template = (0, ConfirmEmail_1.default)(name, newuser._id);
                (0, SendEmail_1.default)(email, 'Confirma tu correo - Sazones Culinarios', template);
            }
            else {
                template = (0, Welcome_1.default)(newuser._id);
                (0, SendEmail_1.default)(email, '¡Bienvenido a Sazones Culinarios!', template);
            }
        }
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
