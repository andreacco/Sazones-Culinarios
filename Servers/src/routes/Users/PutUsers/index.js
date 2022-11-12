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
const SendEmail_1 = __importDefault(require("../../../controllers/Email/SendEmail"));
const Welcome_1 = __importDefault(require("../../../controllers/Email/Template/Welcome"));
const router = (0, express_1.Router)();
router.put('/putUser/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield Users_1.default.findById(id);
        if (user) {
            user.verified = true;
            yield user.save();
            res.status(200).json('Correo verificado con éxito!');
            const template = (0, Welcome_1.default)(id);
            (0, SendEmail_1.default)(user.email, '¡Bienvenido a Sazones Culinarios!', template);
        }
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
