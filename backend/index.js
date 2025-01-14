import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";

import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.options('*', cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));


app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);





app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on Port ${PORT}`);
})