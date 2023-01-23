import Product from "../../../models/Products/Products";
import { Router } from "express";

const router = Router()

router.post('/postProduct', async(req, res, next) => {
    const { name, producer, description, category, cover_image, mockups, price, rating, links, beMaster } = req.body
    try {
        // eslint-disable-next-line max-len
        const prod = new Product({name, producer, description, category, cover_image, mockups, price, rating, links, beMaster})
        await prod.save()
        res.status(200).send('Product added succesfully')
    } catch (error) {
        next(error)
    }
});

export default router;