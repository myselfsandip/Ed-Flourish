import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Log the connection string for debugging (optional)
    console.log("Connection String:", process.env.MONGO_URL);

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL);

    // Log success
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // Log and exit on error
    console.error("Error Connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};
