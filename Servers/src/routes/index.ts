import { Router } from "express";
import GetAllProducts from './Products/GetAllProducts/index'
import PostProducts from './Products/PostProducts/index'
import PostUsers from './Users/PostUsers/index'

const router = Router();

router.get('/', (req, res) => {
    res.send('it works!')
})

router.use('/', GetAllProducts)
router.use('/', PostProducts)
router.use('/user', PostUsers)

export default router