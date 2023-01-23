"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Products/GetAllProducts/index"));
const index_2 = __importDefault(require("./Products/GetAllCategories/index"));
const index_3 = __importDefault(require("./Products/PostProducts/index"));
const index_4 = __importDefault(require("./Products/GetBestSellers/index"));
const index_5 = __importDefault(require("./Products/GetBannerProducts/index"));
const index_6 = __importDefault(require("./Users/PostUsers/index"));
const index_7 = __importDefault(require("./Users/PutUsers/index"));
const index_8 = __importDefault(require("./Users/UnsubscribeEmail/index"));
const index_9 = __importDefault(require("./Users/EmailVerification/index"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('it works!');
});
router.use('/', index_1.default);
router.use('/', index_2.default);
router.use('/', index_3.default);
router.use('/', index_4.default);
router.use('/', index_5.default);
router.use('/user', index_6.default);
router.use('/user', index_7.default);
router.use('/user', index_8.default);
router.use('/user', index_9.default);
exports.default = router;
