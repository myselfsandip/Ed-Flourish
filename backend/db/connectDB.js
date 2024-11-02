import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        // console.log("Connection String", process.env.MONGO_URL);
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (err) {
        console.log("Error Connecting to MongoDB", err);
        process.exit(1); //1 is failure & 0 status code is success
    }
}