import express from 'express'
import { getJobPostIdApplicationController, getUserIdApplicationController, patchAppicationController, postApplicationController } from '../controllers/applicationController.js';

const router = express.Router()


router.post('/',postApplicationController)
router.get('/userId',getUserIdApplicationController)
router.get('/jobPostId',getJobPostIdApplicationController)
router.patch('/:id',patchAppicationController)

export default router;