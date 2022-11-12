import { Router } from "express"
import Users from "../../../models/Users/Users"
import sendEmail from "../../../controllers/Email/SendEmail"
import welcome from '../../../controllers/Email/Template/Welcome'

const router = Router()

router.put('/putUser/:id', async(req, res, next) => {
    const { id } = req.params
    try {
        const user = await Users.findById(id);
        if(user) {
            user.verified = true
            await user.save()
            res.status(200).json('Correo verificado con éxito!')
            const template = welcome(id)
            sendEmail(user.email, '¡Bienvenido a Sazones Culinarios!', template)
        }
    } catch (error) {
        next(error)
    }
})

export default router