import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job_seekerId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'JobSeeker',
        required:true
    },
    jobPostId:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'JobPost',
        required:true
    },
    date:{
        type:Date,
        default:new Date.now()
    },
    status:{
        type:String,
        enum:['pending','interview','hired','rejected']
    }
},{timestamps:true})

const Application = mongoose.model('Application',applicationSchema)

export default Application;