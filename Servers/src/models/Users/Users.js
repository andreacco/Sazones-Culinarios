"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const UserSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    lastname: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: String,
        default: "",
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
});
const Users = mongoose_1.default.model('Users', UserSchema);
exports.default = Users;
