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
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = require("express");
const Products_1 = __importDefault(require("../../../models/Products/Products"));
const router = (0, express_1.Router)();
router.get('/getBySearch', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const allProducts = yield Products_1.default.find();
        const productsFound = allProducts.filter((p) => p.name.toLowerCase().includes(name.toLowerCase()));
        if (productsFound.length) {
            res.status(200).send(productsFound);
        }
        else {
            res.status(201).send("not Found");
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
