import mongoose from "mongoose"

// Cache the database connection
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectDB = async () => {
  // If connection exists, return it
  if (cached.conn) {
    console.log("Using cached MongoDB connection")
    return cached.conn
  }

  // If no cached promise exists, create new connection
  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    }

    // Store the connection promise
    cached.promise = mongoose
      .connect(process.env.MONGO_URL, options)
      .then((mongoose) => {
        console.log("New MongoDB connection established")
        return mongoose
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error)
        cached.promise = null
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    cached.promise = null
    throw error
  }
}

