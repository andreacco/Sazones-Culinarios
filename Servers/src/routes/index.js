"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Products/GetAllProducts/index"));
const index_2 = __importDefault(require("./Products/PostProducts/index"));
const index_3 = __importDefault(require("./Users/PostUsers/index"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('it works!');
});
router.use('/', index_1.default);
router.use('/', index_2.default);
router.use('/user', index_3.default);
exports.default = router;
