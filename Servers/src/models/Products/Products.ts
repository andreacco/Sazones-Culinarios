import mongoose from'mongoose';
import paginate from 'mongoose-paginate-v2';
const {Schema} = mongoose

export interface Products extends mongoose.Document{
    name: string,
    description: string,
    category: [string],
    cover_image: string,
    price: number,
    rating: [number],
}

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category: {
        type:[String],
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
})

ProductsSchema.plugin(paginate);

const Product = mongoose.model<Products, mongoose.PaginateModel<Products>>('Product', ProductsSchema)
export default Product