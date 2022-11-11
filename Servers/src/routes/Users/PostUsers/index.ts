import { Router } from "express"
import Users from "../../../models/Users/Users"

const router = Router()

router.post('/postUser', async(req, res, next) => {
    const { name, lastname, email, phoneNumber, verified } = req.body
    try {
        const user = await Users.findOne({email});
        if(user) {
            res.status(200).json('Ya estás suscrito a nuestra lista de correos!')
        }
        else if(!name && !lastname && !email && !phoneNumber) {
            res.status(200).json('Por favor, llena todos los datos requeridos')
        }
        else {
            const newuser = new Users({name, user, lastname, email, phoneNumber, verified})
            await newuser.save()
        }
    } catch (error) {
        next(error)
    }
})

export default router