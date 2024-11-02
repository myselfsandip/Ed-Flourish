import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";

import { connectDB } from './db/connectDB.js';
import authRoutes from "./routes/authRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors()); //For Making Connection between Client and Server

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on Port ${PORT}`);
})