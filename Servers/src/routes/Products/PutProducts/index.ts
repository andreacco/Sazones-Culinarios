import Product from "../../../models/Products/Products";
import { Router } from "express";

const router = Router()

router.put('/putProduct/:id', async(req, res, next) => {
    const updates: object = req.body
    const { id } = req.params
    try {
        // eslint-disable-next-line max-len
        await Product.findByIdAndUpdate((id), {$push:{beMaster: [updates]}})
        res.status(200).send('Product updated succesfully')
    } catch (error) {
        next(error)
    }
});

export default router;

