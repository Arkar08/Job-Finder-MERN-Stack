import JobCategory from '../models/job-categoryModel.js';
import JobPost from '../models/job-postModel.js';
import Users from '../models/userModel.js';
import Employer from '../models/employerModel.js'


export const postJobController = async(req,res)=>{
    try {
            const {title,description,job_location,salary,job_type,category} = req.body;
            if(!title || !description || !job_location || !salary || !job_type){
                return res.status(404).json('Plz Filled out in the form field.')
            }
            const findCateogryId = await JobCategory.find({categoryName:category})
            const newJob = await JobPost.create({
                employerId:req.body.userId,
                jobCategoryId:findCateogryId[0]._id,
                title:req.body.title,
                description:req.body.description,
                job_location:req.body.job_location,
                salary:req.body.salary,
                job_type:req.body.job_type
            })
            if(newJob){
                const getJob = await JobPost.find({employerId:userBody._id})
                const postJob = getJob.length;
                const findEmployer = await Employer.find({userId:userBody._id})
                await Employer.findByIdAndUpdate({_id:findEmployer[0]._id},{job_limit:postJob})
                return res.status(201).json(newJob)
            }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const getJobController = async(req,res)=>{
    try {
        const getJobs = await JobPost.find()
        const employerMap = getJobs.map((job)=>job.employerId)
        const findEmployer = await Users.find({_id:employerMap})
        const categoryMap = getJobs.map((job)=>job.jobCategoryId)
        const findCategory = await JobCategory.find({_id:categoryMap})

        const categoryFullName = {}
        findCategory.forEach((category)=>{
            return categoryFullName[category._id] = category.categoryName
        })
        

        const employerFullName = {}
        findEmployer.forEach((employer)=>{
            return employerFullName[employer._id] = employer;
        })

        const getJobsDetails = getJobs.map((job)=>{
            const employer = employerFullName[job.employerId] || ''
            const category = categoryFullName[job.jobCategoryId] || ''
            return {...job.toObject(),employerId:employer,jobCategoryId:category}
        })
        return res.status(200).json(getJobsDetails)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getIdJobController = async(req,res)=>{
    try {
        const {id} = req.params;
        const findJob = await JobPost.find({_id:id})
        if(!findJob){
            return res.status(404).json('Not Found')
        }
        const employerMap = findJob.map((job)=>job.employerId)
        const findEmployer = await Users.find({_id:employerMap})
        const categoryMap = findJob.map((job)=>job.jobCategoryId)
        const findCategory = await JobCategory.find({_id:categoryMap})

        const categoryFullName = {}
        findCategory.forEach((category)=>{
            return categoryFullName[category._id] = category.categoryName
        })
        

        const employerFullName = {}
        findEmployer.forEach((employer)=>{
            return employerFullName[employer._id] = employer;
        })

        const getJobsDetails = findJob.map((job)=>{
            const employer = employerFullName[job.employerId] || ''
            const category = categoryFullName[job.jobCategoryId] || ''
            return {...job.toObject(),employerId:employer,jobCategoryId:category}
        })
        return res.status(200).json(getJobsDetails)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const patchIdJobController = async(req,res)=>{
    try {
        const{id} = req.params;
        const patchJob = await JobPost.findByIdAndUpdate({_id:id},{...req.body})
        const employer = await Users.findById({_id:patchJob.employerId})
        const category = await JobCategory.findById({_id:patchJob.jobCategoryId})
        const patchData = {...patchJob.toObject(),employerId:employer,jobCategoryId:category.categoryName}
        return res.status(200).json(patchData)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const deleteJobController = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteJob = await JobPost.findByIdAndDelete({_id:id})
        if(deleteJob){
            return res.status(200).json('delete successfully.')
        }else{
            return res.status(404).json('Not Found')
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

