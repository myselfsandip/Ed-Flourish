import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./db/connectDB.js"

import authRoutes from "./routes/authRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"

const app = express();

// Initialize middleware
app.use(express.json())
app.use(cookieParser())

// Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://ed-flourish.vercel.app",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['set-cookie']
  }),
)

// Connect to database for each request in serverless environment
app.use(async (req, res, next) => {
  try {
    await connectDB()
    next()
  } catch (error) {
    next(error)
  }
})

// Your routes
app.use("/api/auth", authRoutes)
app.use("/api/course", courseRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  })
})

// Only start server if not in production
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

export default app

