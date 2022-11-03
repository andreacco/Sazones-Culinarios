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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { Schema, model } = mongoose_1.default;
const UserSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    lastname: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_image: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    shoppingCart: {
        type: [Object],
        default: []
    },
    wishlist: {
        type: [Object],
        default: []
    },
    address: {
        type: [{
                addressId: String,
                country: String,
                city: String,
                state: String,
                municipality: String,
                residentialArea: String,
                postalCode: String,
                address: String,
                benchmark: String,
                localization: String,
                addressCode: String
            }],
        default: {
            addressId: '',
            country: '',
            city: '',
            state: '',
            municipality: '',
            residentialArea: '',
            postalCode: '',
            address: '',
            benchmark: '',
            localization: '',
            addressCode: ''
        }
    },
    purchaseHistory: {
        type: [{
                date: String,
                idCompra: String,
                items: [{
                        idProduct: String,
                        quantity: Number
                    }],
                total: Number,
                adrress: {
                    addressId: String
                },
                method: String
            }],
        default: []
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
});
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        if (!user.isModified('password')) {
            return next();
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(user.password, salt);
        user.password = hash;
        next();
    });
});
UserSchema.methods.comparePassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(password, this.password);
    });
};
exports.default = model('User', UserSchema);
