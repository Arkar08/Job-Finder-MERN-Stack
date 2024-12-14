
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";



export const middleware = async(req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const sliceToken = token.split(" ")
      const decoded = jwt.verify(sliceToken[1], process.env.secret_key);
      req.user = await Users.findById(decoded.userId)
      if (!req.user) {
        return res.status(404).json("User not found");
      }
      next();
    } catch (error) {
      return res.status(400).json("no authorized token failed");
    }
  } else {
    return res.status(400).json("no token");
  }
};

export const checkTokenID = async (req, res , next) => {
  const token  = req.headers.authorization;
  const sliceToken = token.split(" ")
      const data = jwt.verify(sliceToken[1], process.env.secret_key);
  if(data.userId){
     req.body.userId = data.userId;
    next();
  }else{
    res.status(404).json({
      staus: "error", 
      message: "not found",
    })
  }
}
export const authorizeSeeker = (req, res, next) => {
  if (req.user && req.user.user_Type === 'job-seeker') {
    next();
  } else {
    return res.status(401).json("not authorized as an job-seeker");
  }
};

export const authorizeEmployer = (req, res, next) => {
  if (req.user && req.user.user_Type === 'employer') {
    next();
  } else {
    return res.status(401).json("not authorized as an employer");
  }
};