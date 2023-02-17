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
const Products_1 = __importDefault(require("../../../models/Products/Products"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/putProduct/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const updates = req.body;
    const { id } = req.params;
    try {
        // eslint-disable-next-line max-len
        yield Products_1.default.findByIdAndUpdate((id), { $push: { beMaster: [updates] } });
        res.status(200).send('Product updated succesfully');
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
