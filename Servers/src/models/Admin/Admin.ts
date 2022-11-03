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
    comparePassword: (pasword: string) => Promise<boolean>,
    verified: boolean,    
    status: boolean,
    blocked: boolean,
    admin: boolean,
    superAdmin: boolean
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
    superAdmin: {
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
