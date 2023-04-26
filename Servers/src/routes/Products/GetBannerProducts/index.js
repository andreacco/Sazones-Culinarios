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
const Products_1 = __importDefault(require("../../../models/Products/Products"));
const router = (0, express_1.Router)();
router.get('/getBannerProducts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const primero = yield Products_1.default.find({ name: "Barista Principiante" });
        const segundo = yield Products_1.default.find({ name: "Bartender para Principiantes" });
        const tercero = yield Products_1.default.find({ name: "Chocofresas Irresistibles" });
        const cuarto = yield Products_1.default.find({ name: "Curso Cocina Coreana Online" });
        const quinto = yield Products_1.default.find({ name: "Curso Cocina Nikkei Online" });
        res.status(200).send([primero, segundo, tercero, cuarto, quinto]);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
