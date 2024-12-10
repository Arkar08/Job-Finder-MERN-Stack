import mongoose from 'mongoose'


const connectDb = async()=>{
   try {
     await mongoose.connect(process.env.MONGO)
     console.log('mongoose is connected')
   } catch (error) {
    console.error('mongoose is not connected',error)
   }
}


export default connectDb;