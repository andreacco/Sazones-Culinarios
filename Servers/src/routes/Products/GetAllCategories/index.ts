import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getAllCategories', async(req, res) => {
    try {
        const products = await Product.find()
        const categories = products.map((p) => p.category).flat()
        const categArray = new Set(categories)
        console.log([...categArray])
        res.status(200).send([...categArray])
    } catch (error) {
        console.log(error)
    }
})

export default router