import { Router } from "express";
import GetAllProducts from './Products/GetAllProducts/index'
import PostProducts from './Products/PostProducts/index'
import PostUsers from './Users/PostUsers/index'
import PutUsers from './Users/PutUsers/index'
import UnsubscribeUsers from './Users/UnsubscribeEmail/index'

const router = Router();

router.get('/', (req, res) => {
    res.send('it works!')
})

router.use('/', GetAllProducts)
router.use('/', PostProducts)
router.use('/user', PostUsers)
router.use('/user', PutUsers)
router.use('/user', UnsubscribeUsers)

export default router