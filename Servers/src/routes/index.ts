import { Router } from "express";
import GetAllProducts from './Products/GetAllProducts/index'
import PostProducts from './Products/PostProducts/index'

const router = Router();

router.get('/', (req, res) => {
    res.send('it works!')
})

router.use('/', GetAllProducts)
router.use('/', PostProducts)

export default router