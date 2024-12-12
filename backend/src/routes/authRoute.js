import express from 'express'
import { logoutController, postUserController, signupUserController } from '../controllers/userController.js';

const router = express.Router()


router.post('/login',postUserController)
router.post('/logout',logoutController)
router.post('/signup',signupUserController)



export default router;