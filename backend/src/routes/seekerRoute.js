import express from 'express'
import { getSeekerController, patchSeekerController, postSeekerController } from '../controllers/seekerController.js';


const router = express.Router()


router.post('/',postSeekerController)
router.get('/:id',getSeekerController)
router.patch('/:id',patchSeekerController)


export default router;