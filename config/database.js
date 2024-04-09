import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
    mongoose.set('strictQuery', true)


    // If DB is already connected, don't connect again
    if(connected) {
        console.log("MongoDB is already connected")
        return
    }
    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODBTEST)
        connected = true
        console.log("MongoDB Connected")
    }
    catch (error) {
        console.log(error)
    }

}

export default connectDB