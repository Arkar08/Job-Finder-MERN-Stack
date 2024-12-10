import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    user_Type:{
        type:String,
        enum:['job-seeker','employer'],
        required:true
    }
},{timestamps:true})


const Users = mongoose.model('Users',userSchema)

export default Users;