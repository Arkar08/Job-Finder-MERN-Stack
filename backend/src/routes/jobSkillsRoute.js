import express from 'express'
import { getSkillController } from '../controllers/jobSkillController.js';


const router = express.Router()

router.get('/',getSkillController)



export default router;