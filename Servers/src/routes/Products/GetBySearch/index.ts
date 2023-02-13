import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getBySearch', async(req, res) => {
    try {
        const { name } = req.query
        const productsFound = await Product.find({name: `${name}`})
        res.status(200).send(productsFound)
    } catch (error) {
        console.log(error)
    }
})

export default router