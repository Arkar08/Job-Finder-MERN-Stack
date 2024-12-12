import express from 'express'
import { getEmployerController, patchEmployerController, postEmployerController } from '../controllers/employerController.js';

const router  = express.Router()

router.post('/',postEmployerController)
router.get('/:id',getEmployerController)
router.patch('/:id',patchEmployerController)


export default router;