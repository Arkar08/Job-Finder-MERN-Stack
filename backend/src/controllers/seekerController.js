import Users from '../models/userModel.js'
import JobSeeker from '../models/job-seekerModel.js'


export const postSeekerController = async(req,res)=>{
    try {
     
            const {resume,skills,education,experience,salary,location} = req.body
            if(!skills ||!location){
                return res.status(400).json("Plz Filled Out In the Fields.")
            }
            const newSeeker = await JobSeeker.create({
                userId:req.body.userId,
                resume:resume,
                skills:req.body.skills,
                education:education,
                experience:experience,
                salary:salary,
                location:req.body.location
            })
            return res.status(201).json(newSeeker)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}




export const getSeekerController = async(req,res)=>{
    try {
        const {id} = req.params;
        const getIdSeeker = await JobSeeker.findById({_id:id})
        if(getIdSeeker){
            const getUser = await Users.findById({_id:getIdSeeker.userId})
            const getSeeker = {...getIdSeeker.toObject(),userId:getUser}
            return res.status(200).json(getSeeker)
        }else{
            return res.status(404).json('Not Found')
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const patchSeekerController = async(req,res)=>{
    try {
        const {id} = req.params;
        const patchSeekers = await JobSeeker.findByIdAndUpdate({_id:id},{...req.body})
        if(patchSeekers){
            await Users.findByIdAndUpdate({_id:patchSeekers.userId},{...req.body})
            const patchSeeker = await JobSeeker.findById({_id:patchSeekers._id})
            const getUser = await Users.findById({_id:patchSeeker.userId})
            const getSeeker = {...patchSeeker.toObject(),userId:getUser}
            return res.status(200).json(getSeeker)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}