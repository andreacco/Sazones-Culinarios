import { Router } from "express"
import Users from "../../../models/Users/Users"
import confirmEmail from "../../../controllers/Email/Template/ConfirmEmail"
import sendEmail from "../../../controllers/Email/SendEmail"
import welcome from '../../../controllers/Email/Template/Welcome'

const router = Router()

router.post('/postUser', async(req, res, next) => {
    const { name, lastname, email, phoneNumber, verified, unsuscribed } = req.body
    try {
        const user = await Users.findOne({email});
        if(user) {
            res.status(200).json('Ya estás suscrito a nuestra lista de correos!')
        } else if(!name && !lastname && !email && !phoneNumber) {
            res.status(200).json('Por favor, llena todos los datos requeridos')
        } else {
            const newuser = new Users({name, user, lastname, email, phoneNumber, verified, unsuscribed})
            await newuser.save()
            res.status(200).json('Usuario registrado correctamente!')
            let template
            if (newuser.verified === false) {
                template = confirmEmail(name, newuser._id)
                sendEmail(email, 'Confirma tu correo - Sazones Culinarios', template)
            } else {
                template = welcome(newuser._id)
                sendEmail(email, '¡Bienvenido a Sazones Culinarios!', template)
            }
        }
    } catch (error) {
        next(error)
    }
})

export default router