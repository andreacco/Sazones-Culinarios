import { Router } from "express";
import Product from "../../../models/Products/Products";

const router = Router()

router.get('/getBannerProducts', async(req, res) => {
    try {
        const primero = await Product.find({name: "Barista Principiante"})
        const segundo = await Product.find({name: "Bartender para Principiantes"})
        const tercero = await Product.find({name: "Chocofresas Irresistibles"})
        const cuarto = await Product.find({name: "Curso Cocina Coreana Online"})
        const quinto = await Product.find({name: "Curso Cocina Nikkei Online"})
        res.status(200).send([primero, segundo, tercero, cuarto, quinto])
    } catch (error) {
        console.log(error)
    }
})

export default router