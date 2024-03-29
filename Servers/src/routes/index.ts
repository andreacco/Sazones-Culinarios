import { Router } from "express";
import GetAllProducts from './Products/GetAllProducts/index'
import GetAllCategories from './Products/GetAllCategories/index'
import PostProducts from './Products/PostProducts/index'
import GetBestSellers from './Products/GetBestSellers/index'
import GetBannerProducts from './Products/GetBannerProducts/index'
import PostUsers from './Users/PostUsers/index'
import PutUsers from './Users/PutUsers/index'
import UnsubscribeUsers from './Users/UnsubscribeEmail/index'
import EmailVerification from './Users/EmailVerification/index'
import getBySearch from './Products/GetBySearch/index'
import getById from './Products/GetProductById/index'
import putProducts from './Products/PutProducts/index'

const router = Router();

router.get('/', (req, res) => {
    res.send('it works!')
})

router.use('/', GetAllProducts)
router.use('/', GetAllCategories)
router.use('/', PostProducts)
router.use('/', GetBestSellers)
router.use('/', GetBannerProducts)
router.use('/', getBySearch)
router.use('/', getById)
router.use('/', putProducts)
router.use('/user', PostUsers)
router.use('/user', PutUsers)
router.use('/user', UnsubscribeUsers)
router.use('/user', EmailVerification)

export default router