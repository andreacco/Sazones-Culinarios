/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getBySearch', async(req, res) => {
    try {
        const { name } : any = req.query
        const allProducts = await Product.find()
        const productsFound = allProducts.filter((p: any) => p.name.toLowerCase().includes(name.toLowerCase())); 
        if (productsFound.length) {
            res.status(200).send(productsFound)
        } else {
            res.status(201).send("not Found")
        }
    } catch (error) {
        console.log(error)
    }
})

export default router