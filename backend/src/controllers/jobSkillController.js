import JobSkill from "../models/job-skillModel.js"



export const getSkillController = async(req,res)=>{
   try {
    const getSkill  = await JobSkill.find()
    return res.status(200).json(getSkill)
   } catch (error) {
    return res.status(500).json(error)
   }
}