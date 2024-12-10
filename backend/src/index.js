import express from 'express'
import connectDb from './db/connectDB.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'



dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json())



// single route
app.get('/',(req,res)=>{
    return res.status(200).json('Hello World')
})

//all routes
app.use('/api/v1/user',userRouter)




app.listen(PORT,async()=>{
    console.log(`server is running ${PORT}`)
     await connectDb()
})