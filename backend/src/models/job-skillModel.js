import mongoose from "mongoose";

const jobSkillSchema = new mongoose.Schema({
    skillName:{
        type:String,
        required:true
    }
},{timestamps:true})

const JobSkill = mongoose.model('job-skill',jobSkillSchema)

export default JobSkill;