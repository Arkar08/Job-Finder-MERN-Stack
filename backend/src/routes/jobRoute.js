import express from 'express'
import { deleteJobController, getIdJobController, getJobController, patchIdJobController, postJobController } from '../controllers/jobController.js';


const router = express.Router()


router.post('/',postJobController)
router.get('/',getJobController)
router.get('/:id',getIdJobController)
router.patch('/:id',patchIdJobController)
router.delete('/:id',deleteJobController)

export default router;