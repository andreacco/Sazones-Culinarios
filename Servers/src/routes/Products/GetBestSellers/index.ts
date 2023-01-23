import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getBestSellers', async(req, res) => {
    try {
        const vendido = await Product.find({name: "Gastronomía Internacional Online: 7 cursos incluidos"})
        const querido = await Product.find({name: "Aprende Cocina Vegana"})
        const caliente = await Product.find({name: "Curso Chocolatería Online"})
        res.status(200).send([vendido, caliente, querido])
    } catch (error) {
        console.log(error)
    }
})

export default router