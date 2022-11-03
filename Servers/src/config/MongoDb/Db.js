"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = __importDefault(require("../ConfigEntorno/Config"));
mongoose_1.default.connect(Config_1.default.Db)
    .then(() => console.log('database conect'))
    .catch((error) => console.log('Error database conect ', error));
