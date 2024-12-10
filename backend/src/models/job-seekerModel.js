import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema({
    resume:{
        type:String
    },
    skills:{
        type:mongoose.Schema.Types.ObjectId,
        refs:'JobSkill',
        required:true
    },
    education:{
        type:String
    },
    experience:{
        type:String
    },
    salary:{
        type:Number
    },
    location:{
        type:String,
        required:true
    }
},{timestamps:true})

const JobSeeker = mongoose.model('JobSeeker',jobSeekerSchema)

export default JobSeeker;