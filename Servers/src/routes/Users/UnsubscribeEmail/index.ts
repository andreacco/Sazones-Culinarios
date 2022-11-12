import { Router } from 'express'
import Users from "../../../models/Users/Users"

const router = Router()

router.put('/unsubscribeUser/:id', async(req, res, next) => {
    const { id } = req.params
    try {
        const user = await Users.findById(id);
        if(user) {
            user.
            unsuscribed = true
            await user.save()
            res.status(200).json('Te has dado de baja exitosamente!')
        }
    } catch (error) {
        next(error)
    }
})

export default router