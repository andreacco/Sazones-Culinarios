"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const { Schema } = mongoose_1.default;
const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    cover_image: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    rating: {
        type: [{
                idComment: String,
                idUser: String,
                rate: Number,
                comment: String
            }],
        // enum: [ 1 , 2 , 3 , 4 , 5 ]
        default: []
    }
});
ProductsSchema.plugin(mongoose_paginate_v2_1.default);
const Product = mongoose_1.default.model('Product', ProductsSchema);
exports.default = Product;
