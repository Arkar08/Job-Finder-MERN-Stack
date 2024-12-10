import Users from "../models/userModel.js";
import brcypt from 'bcrypt'
import generateToken from "../utils/generateToken.js";


export const getUserController = async(req,res)=>{
    try {
        const user = await Users.find()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const postUserController = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const validatorEmail = await Users.findOne({email:email})
        if(!validatorEmail){
            return res.status(404).json('Email does not exist')
        }
        if(validatorEmail){
            const validatorPassword = await brcypt.compare(password,validatorEmail.password)
            if(!validatorPassword){
                return res.status(404).json('Passoword is wrong.')
            }
            if(validatorPassword){
                const token = await generateToken(res, validatorEmail._id);
                return res.status(200).json({
                    email:validatorEmail.email,
                    token,
                    user_Type:validatorEmail.user_Type
                })
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const signupUserController = async(req,res)=>{
    try {
        const {name,email,password,contact,address,user_Type} = req.body;
            if(!name || !email || !password || !contact || !address || !user_Type ){
                return res.status(404).json('Plz filled out in the form field.')
            }
        const existEmail = await Users.findOne({ email });
            if (existEmail) {
            return res.status(400).json("Email is already exist");
            }
      
            // password generator
            const salt = await brcypt.genSalt(10);
            const hashPassword = await brcypt.hash(password, salt);

        const newUser = await Users.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
            contact:req.body.contact,
            address:req.body.address,
            user_Type:req.body.user_Type
        })
        const token = await generateToken(res, newUser._id);
        console.log(token)
        return res.status(200).json({
            email: newUser.email,
            token,
            user_Type:req.body.user_Type
          });
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const logoutController = async(req,res)=>{
    res.cookie("jwt", "", {
        httpOnly: true,
        maxAge: new Date(0),
      });
    return res.status(200).json("logout successfully");
}