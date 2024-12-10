import mongoose from "mongoose";

const jobCategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
},{timestamps:true})

const JobCategory = mongoose.model('job-Category',jobCategorySchema)

export default JobCategory;