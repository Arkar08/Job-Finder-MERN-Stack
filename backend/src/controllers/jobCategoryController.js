import JobCategory from "../models/job-categoryModel.js"




export const getCategoryController = async(req,res)=>{
    try {
        const getCategory = await JobCategory.find()
        return res.status(200).json(getCategory)
    } catch (error) {
        return res.status(500).json(error)
    }
}