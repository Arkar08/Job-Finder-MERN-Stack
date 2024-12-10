import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyAddress:{
        type:String,
        required:true
    },
    companyContact:{
        type:String,
        required:true
    },
    job_limit:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Employer = mongoose.model('Employer',employerSchema)

export default Employer;