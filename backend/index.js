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

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);

app.get('/test',(req,res) => {
    res.json({success:true,msg:"API Working Fine"});
})


// Add this after your routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, msg: 'Something went wrong!' });
});



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on Port ${PORT}`);
})