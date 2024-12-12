
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";



export const middleware = async(req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const sliceToken = token.slice(7);
      const decoded = jwt.verify(sliceToken, process.env.secret_key);
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