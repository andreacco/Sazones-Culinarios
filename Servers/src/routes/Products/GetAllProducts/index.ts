import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getAllProducts', async(req, res) => {
    try {
        const response = await Product.find()
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
    }
})

export default router