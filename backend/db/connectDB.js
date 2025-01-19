import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connections[0].readyState) {
      console.log('Already connected to MongoDB');
      return;
    }

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      maxPoolSize: 10,
      minPoolSize: 5,
    };

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle connection errors after initial connection
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

  } catch (err) {
    console.error("Error Connecting to MongoDB:", err);
    // Don't exit the process in serverless environment
    throw err;
  }
};