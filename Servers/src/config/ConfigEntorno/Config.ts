import dotenv from 'dotenv'
dotenv.config()

export default {
     //------mongodb------//
    Db: process.env.URI,
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}