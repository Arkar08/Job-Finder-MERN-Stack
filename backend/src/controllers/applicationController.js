import Application from "../models/applicationModel.js";
import JobPost from "../models/job-postModel.js";
import Users from "../models/userModel.js";
import jwt from 'jsonwebtoken'


export const postApplicationController = async(req,res)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json("no token");
        }
        const sliceToken = token.slice(7);
        const decoded = jwt.verify(sliceToken, process.env.secret_key);
        const userBody = await Users.findById(decoded.userId)
        if(userBody.user_Type === 'job-seeker'){
            const {jobPost} = req.body;
            if(jobPost){
                const newApplication = await Application.create({
                    job_seekerId:userBody._id,
                    jobPostId:jobPost,
                    status:'pending'
                })
                return res.status(201).json(newApplication)
            }else{
                return res.status(404).json('Not Found')
            }
        }else{
            return res.status(404).json('not authorized as employer')
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getUserIdApplicationController = async(req,res)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json("no token");
        }
        const sliceToken = token.slice(7);
        const decoded = jwt.verify(sliceToken, process.env.secret_key);
        const userBody = await Users.findById(decoded.userId)
        if(userBody.user_Type === 'job-seeker'){
            const findApplication = await Application.find({job_seekerId:userBody._id})
            if(findApplication){
                return res.status(200).json(findApplication)
            }else{
                return res.status(404).json('Not Found')
            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const getJobPostIdApplicationController = async(req,res)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json("no token");
        }
        const sliceToken = token.slice(7);
        const decoded = jwt.verify(sliceToken, process.env.secret_key);
        const userBody = await Users.findById(decoded.userId)
        if(userBody.user_Type === 'employer'){
            const searchJob = await JobPost.find({employerId:userBody._id})
            const searchApplication = await Application.find({jobPostId:searchJob})
            if(searchApplication){
                return res.status(200).json(searchApplication)
            }else{
                return res.status(404).json('Not Found')
            }
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