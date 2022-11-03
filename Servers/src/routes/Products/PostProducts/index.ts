import Product from "../../../models/Products/Products";
import { Router } from "express";

const router = Router()

router.post('/postProduct', async(req, res, next) => {
    const data = req.body
    try {
        const response = await Product.find()
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
});

export default router;