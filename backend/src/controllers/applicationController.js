import Application from "../models/applicationModel.js";
import JobPost from "../models/job-postModel.js";


export const postApplicationController = async(req,res)=>{
    try {
        
            const {jobPost} = req.body;
            if(jobPost){
                const newApplication = await Application.create({
                    job_seekerId:req.body.userId,
                    jobPostId:jobPost,
                    status:'pending'
                })
                return res.status(201).json(newApplication)
            }else{
                return res.status(404).json('Not Found')
            }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getUserIdApplicationController = async(req,res)=>{
    try {
        
            const findApplication = await Application.find({job_seekerId:req.body.userId})
            if(findApplication){
                return res.status(200).json(findApplication)
            }else{
                return res.status(404).json('Not Found')
            }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getJobPostIdApplicationController = async(req,res)=>{
    try {
       
            const searchJob = await JobPost.find({employerId:req.body.userId})
            const searchApplication = await Application.find({jobPostId:searchJob})
            if(searchApplication){
                return res.status(200).json(searchApplication)
            }else{
                return res.status(404).json('Not Found')
            }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const patchAppicationController = async(req,res)=>{
    try {
        const {id} = req.params;
        const {status} = req.body;
        const patchApplication = await Application.findByIdAndUpdate({_id:id},{status:status})
        if(patchApplication){
            const getApplication = await Application.findById({_id:patchApplication._id})
            return res.status(200).json(getApplication)
        }else{
            return res.status(404).json('Not Found')
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}