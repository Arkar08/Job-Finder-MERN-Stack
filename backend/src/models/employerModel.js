import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'Users',
        required:true
    },
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