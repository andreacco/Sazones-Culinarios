import mongoose from'mongoose';
import bCrypt from 'bcrypt';
const {Schema, model} = mongoose;

export interface IUser extends mongoose.Document{
    name: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    user_image: string,
    phoneNumber: string,    
    shoppingCart: [string] // array de ids de los productos
    comparePassword: (pasword: string) => Promise<boolean>,
    wishlist: [string], // array de ids de los productos
    address: [{
        addressId: string
        country:  string,
        city: string,
        state: string,
        municipality: string,
        residentialArea: string,
        postalCode: string,
        address:  string,
        benchmark:  string
        localization: string,
        addressCode: string // este es lo que escoge el cliente tipo casa, trabajo
    }],
    purchaseHistory: [{
        date: string,
        idCompra: string,
        items: [{
            idProduct: string, // ids del producto y con ese id busco la info total de todos los productos
            quantity: number 
        }],
        total: number,
        adrress:{
            addressId: string // id de la direccion y con eso le doy la eleccion al usuario de envio a diversas direcciones
        },
        method: string,
    }],
    verified: boolean,    
    status: boolean,
    blocked: boolean,
    admin: boolean,
}

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
        type:[Object],
        default: []
    },
    wishlist: {
        type:[Object],
        default: []
    },
    address: {
        type: [{
            addressId: String,
            country:  String,
            city: String,
            state: String,
            municipality: String,
            residentialArea: String,
            postalCode: String,
            address:  String,
            benchmark:  String,
            localization: String,
            addressCode: String
        }],
        default: {
            addressId: '',
            country:  '',
            city: '',
            state: '',
            municipality: '',
            residentialArea: '',
            postalCode: '',
            address:  '',
            benchmark:  '',
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
    admin:{
        type: Boolean,
        required: true,
        default: false,
    },
});

UserSchema.pre('save', async function(next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    if (!user.isModified('password')){
        return next();
    }
    const salt = await bCrypt.genSalt(10);
    const hash = await bCrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
    return await bCrypt.compare(password, this.password)
};

export default model<IUser>('User', UserSchema);
