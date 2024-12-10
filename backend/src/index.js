import express from 'express'
import connectDb from './db/connectDB.js'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

app.listen(3000,async()=>{
    console.log('server is running 3000')
     await connectDb()
})