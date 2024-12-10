import mongoose from "mongoose";

const jobPostSchema = new mongoose.Schema({
    employerId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'Employer',
        required:true
    },
    jobCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'JobCategory',
        requierd:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    job_location:{
        type:String,
        required:true,
        enum:['remote','onsite']
    },
    salary:{
        type:Number,
        required:true
    }
    ,
    job_type:{
        type:String,
        required:true,
        enum:['fulltime','parttime','freelance']
    }
},{timestamps:true})


const JobPost = mongoose.model('Job-Post',jobPostSchema)

export default JobPost;