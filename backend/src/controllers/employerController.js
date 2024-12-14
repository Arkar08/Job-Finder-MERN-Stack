import Employer from '../models/employerModel.js'
import Users from '../models/userModel.js';
import jwt from 'jsonwebtoken'




export const postEmployerController = async(req,res)=>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json("no token");
        }
        const sliceToken = token.slice(7);
        const decoded = jwt.verify(sliceToken, process.env.secret_key);
        const userBody = await Users.findById(decoded.userId)
       if(userBody.user_Type === 'employer'){
            const {companyName,companyAddress,companyContact} = req.body
            if(!companyName || !companyAddress || !companyContact){
                return res.status(400).json("Plz Filled Out In the Fields.")
            }
            const filterEmployer = await Employer.find({userId:userBody._id})
            if(filterEmployer){
                return res.status(404).json('employer is already exist .please update')
            }else{
                const newEmployer = await Employer.create({
                    userId:userBody._id,
                    companyName:req.body.companyName,
                    companyAddress:req.body.companyAddress,
                    companyContact:req.body.companyContact
                })
                return res.status(201).json(newEmployer)
            }
         
        }else{
            return res.status(404).json('Not authrized as job_seeker')
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const getEmployerController = async(req,res)=>{
    try {
        const {id} = req.params;
        const getIdEmployer = await Employer.findById({_id:id})
        if(getIdEmployer){
            const getUser = await Users.findById({_id:getIdEmployer.userId})
            const getEmployer = {...getIdEmployer.toObject(),userId:getUser}
            return res.status(200).json(getEmployer)
        }else{
            return res.status(404).json('Not Found')
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const patchEmployerController = async(req,res)=>{
    try {
        const {id} = req.params;
        const patchEmployers = await Employer.findByIdAndUpdate({_id:id},{...req.body})
        if(patchEmployers){
            await Users.findByIdAndUpdate({_id:patchEmployers.userId},{...req.body})
            const patchEmployer = await Employer.findById({_id:patchEmployers._id})
            const getUser = await Users.findById({_id:patchEmployer.userId})
            const getEmployer = {...patchEmployer.toObject(),userId:getUser}
            return res.status(200).json(getEmployer)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}