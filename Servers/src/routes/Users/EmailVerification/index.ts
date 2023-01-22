import { Router } from 'express';
import User from '../../../models/Users/Users';
const router = Router();

router.get('/verified/:id',  async(req, res, next) => {
    const {id} = req.params;   
    try {        
        const user = await User.findById(id);
        if (user){
            user.verified = true;
            const newuser = await user.save();
            res.status(201).json({usuario: newuser});
        }        
    } catch (error) {
        next(error)
    }
})

export default router;