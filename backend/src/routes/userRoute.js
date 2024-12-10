import express from 'express'
import { getUserController, logoutController, postUserController, signupUserController } from '../controllers/userController.js';


const router = express.Router()


router.get('/',getUserController)
router.post('/login',postUserController)
router.post('/signup',signupUserController)
router.post('/logout',logoutController)


export default router;