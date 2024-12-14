import express from 'express'
import connectDb from './db/connectDB.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import employerRouter from './routes/employerRoute.js'
import { checkTokenID, middleware } from './middlewares/middleware.js'
import authRouter from './routes/authRoute.js'
import seekRouter from './routes/seekerRoute.js'
import jobRouter from './routes/jobRoute.js'
import applicationnRouter from './routes/applicationRoute.js'
import jobCategoryRouter from './routes/jobCategoryRoute.js'
import jobSkillRouter from './routes/jobSkillsRoute.js'

dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json())



// single route
app.get('/',(req,res)=>{
    return res.status(200).json('Hello World')
})

//all routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/user',middleware,userRouter)
app.use('/api/v1/employer',middleware,checkTokenID,employerRouter)
app.use('/api/v1/seeker',middleware,checkTokenID,seekRouter)
app.use('/api/v1/jobs',middleware,checkTokenID,jobRouter)
app.use('/api/v1/application',middleware,checkTokenID,applicationnRouter)
app.use('/api/v1/category',middleware,jobCategoryRouter)
app.use('/api/v1/skill',middleware,jobSkillRouter)




app.listen(PORT,async()=>{
    console.log(`server is running ${PORT}`)
     await connectDb()
})

export default app;