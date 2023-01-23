import mongoose from'mongoose';
import paginate from 'mongoose-paginate-v2';
const {Schema} = mongoose

export interface Products extends mongoose.Document{
    name: string,
    producer: string,
    description: string,
    category: [string],
    cover_image: string,
    mockups: [object],
    price: number,
    rating: [number],
    links: [object],
    beMaster: [object],
}

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    producer: {
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
    mockups: {
        type: [Object],
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: [Number],
        enum: [ 1 , 2 , 3 , 4 , 5 ],
        default: []
    },
    links: {
        type: [Object],
        default: []
    },
    beMaster: {
        type: [Object],
        default: []
    },
})

ProductsSchema.plugin(paginate);

const Product = mongoose.model<Products, mongoose.PaginateModel<Products>>('Product', ProductsSchema)
export default Product