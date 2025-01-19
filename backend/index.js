import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration
app.use(cors({
    origin: "https://ed-flourish.vercel.app", // Hardcode this instead of using env variable
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['set-cookie']
}));

app.use(cookieParser());
app.use(express.json());

// Add request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Connect to DB before routes
let isConnected = false;
app.use(async (req, res, next) => {
    try {
        if (!isConnected) {
            await connectDB();
            isConnected = true;
        }
        next();
    } catch (error) {
        next(error);
    }
});

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);

app.get('/test', (req, res) => {
    res.json({success: true, msg: "API Working Fine"});
});

// Enhanced error handling
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        msg: err.message || 'Something went wrong!',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// Only start the server if not in Vercel environment
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on Port ${PORT}`);
    });
}

export default app; // For Vercel serverless deployment