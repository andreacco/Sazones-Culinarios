import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getById/:id', async(req, res) => {
    try {
        const { id } = req.params
        const producto = await Product.find({_id: id})
        const found = producto.shift()
        res.status(200).send(found)
    } catch (error) {
        console.log(error)
    }
})

export default router