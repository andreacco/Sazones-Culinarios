import mongoose from'mongoose';
const {Schema} = mongoose;

export interface IUser extends mongoose.Document{
    name: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    interests: array,
    verified: boolean,
    unsuscribed: boolean 
}

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
    interests: {
        type: Array,
        default: [],
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    unsuscribed: {
        type: Boolean,
        required: true,
        default: false
    },
});

const Users = mongoose.model<IUser>('Users', UserSchema)
export default Users;
