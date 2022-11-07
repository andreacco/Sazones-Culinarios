import Product from "../../../models/Products/Products";
import { Router } from "express";

const router = Router()

router.post('/postProduct', async(req, res, next) => {
    const { name, producer, description, category, cover_image, price, rating, links } = req.body
    try {
        const prod = new Product({name, producer, description, category, cover_image, price, rating, links})
        await prod.save()
        res.status(200).send('Product added succesfully')
    } catch (error) {
        next(error)
    }
});

export default router;