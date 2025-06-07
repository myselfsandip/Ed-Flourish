import express from "express";
const router = express.Router();
import { handleChat } from '../controllers/chatBotControllers.js';


router.post('/', handleChat);

export default router;