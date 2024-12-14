import express from 'express'
import connectDb from './db/connectDB.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import employerRouter from './routes/employerRoute.js'
import { middleware } from './middlewares/middleware.js'
import authRouter from './routes/authRoute.js'
import seekRouter from './routes/seekerRoute.js'
import jobRouter from './routes/jobRoute.js'
import applicationnRouter from './routes/applicationRoute.js'

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
app.use('/api/v1/employer',middleware,employerRouter)
app.use('/api/v1/seeker',seekRouter)
app.use('/api/v1/jobs',middleware,jobRouter)
app.use('/api/v1/application',middleware,applicationnRouter)




app.listen(PORT,async()=>{
    console.log(`server is running ${PORT}`)
     await connectDb()
})

export default app;